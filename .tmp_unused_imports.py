import pathlib
import re

path = pathlib.Path('src/components/project-data.ts')
text = path.read_text(encoding='utf-8')
imports = []
for line in text.splitlines():
    line = line.strip()
    if not line.startswith('import '):
        continue
    m = re.match(r'import\s+([^\s,{]+)\s+from\s+["\"][^"\"]+["\"]', line)
    if not m:
        m = re.match(r'import\s+\{\s*([^\}]+)\s*\}\s+from\s+["\"][^"\"]+["\"]', line)
    if not m:
        continue
    names = [n.strip() for n in m.group(1).split(',') if n.strip()]
    for name in names:
        imports.append(name)

unique = []
for name in imports:
    if name not in unique:
        unique.append(name)
unused = []
for name in unique:
    count = len(re.findall(r'\b' + re.escape(name) + r'\b', text))
    if count <= 1:
        unused.append({'name': name, 'count': count})
print(unused)