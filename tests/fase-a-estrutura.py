from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re
import subprocess

root = Path(__file__).resolve().parents[1]
pages = [root / f'{name}.html' for name in ['index','sobre','produtos','github','contato','supabase','mongodb','login']]

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.refs = []; self.ids = []; self.nav = []; self.scripts = []; self.fields = {}; self.labels = set()
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if 'id' in data: self.ids.append(data['id']); self.fields[data['id']] = data
        if tag == 'label': self.labels.add(data.get('for'))
        for key in ['href','src']:
            if key in data: self.refs.append(data[key])
        if tag == 'script' and 'src' in data: self.scripts.append(data['src'])
        if tag == 'a' and any(cls in data.get('class','').split() for cls in ['nav-link','mobile-nav-link']): self.nav.append(data)

parsed = {path: Page(path.read_text('utf-8', errors='surrogateescape')) for path in pages}
total = 0
for path, doc in parsed.items():
    assert len(doc.ids) == len(set(doc.ids)), ('ID duplicado', path.name)
    for ref in doc.refs:
        part = urlsplit(ref)
        if part.scheme or part.netloc: continue
        assert not part.path.startswith('/'), (path.name, ref)
        target = (path.parent / unquote(part.path)).resolve() if part.path else path
        assert target.exists(), (path.name, ref)
        if part.fragment and target.suffix == '.html':
            other = parsed.get(target) or Page(target.read_text('utf-8',errors='surrogateescape'))
            assert part.fragment in other.ids, (path.name,ref)
        assert part.path not in ['style.css','./style.css','script.js','./script.js']
        total += 1
    for cls in ['nav-link','mobile-nav-link']:
        nav = [a for a in doc.nav if cls in a['class'].split()]
        assert {a['href'] for a in nav} == {'./' + p.name for p in pages}, (path.name, cls)
        login = next(a for a in nav if a['href'] == './login.html')
        assert 'data-auth-link' in login
    scripts = doc.scripts
    assert scripts.index('./assets/js/supabase-client.js') < scripts.index('./assets/js/auth.js') < scripts.index('./assets/js/app.js')
    if path.name in ['index.html','produtos.html']:
        assert scripts.index('./assets/js/auth.js') < scripts.index('./assets/js/course.js')
        assert 'progress-sync-status' in doc.ids

login = parsed[root/'login.html']
for name in ['auth-email','auth-password','auth-name']:
    assert name in login.labels
assert login.fields['auth-feedback']['role'] == 'alert'
assert login.fields['auth-feedback']['aria-live'] == 'polite'
assert 'hidden' in login.fields['auth-name-group']
assert login.fields['auth-password']['type'] == 'password'
assert login.fields['auth-submit'].get('disabled') is None and 'disabled' in login.fields['auth-submit']

css = (root/'assets/css/style.css').read_text('utf-8')
for viewport in [900,680,370]:
    assert re.search(r'@media\(max-width:'+str(viewport)+r'px\)\{[^}]*\.auth-', css),viewport
assert '.auth-layout>*{min-width:0}' in css
assert 'grid-template-columns:minmax(0,1fr)' in css
assert '.auth-card .form-input{font-size:16px;min-height:46px}' in css

baseline = subprocess.check_output(['git','show','15c1a66:assets/js/app.js'],cwd=root).replace(b'\r\n',b'\n')
assert (root/'assets/js/app.js').read_bytes().replace(b'\r\n',b'\n') == baseline
print(f'OK: {len(pages)} páginas e {total} referências locais válidas; menus desktop/mobile completos.')
print('OK: scripts em ordem, labels e feedback acessíveis, configuração de conta e app.js preservado.')
print('OK: regras CSS verificadas em 900px, 680px e 370px. Revisão visual pendente: registro 78.')
