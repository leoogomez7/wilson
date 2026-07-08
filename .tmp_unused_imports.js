const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/components/project-data.ts');
const txt = fs.readFileSync(file, 'utf8');
const importLines = txt.split(/\r?\n/).filter(l => l.trim().startsWith('import '));
const names = [];
for (const l of importLines) {
  const m = l.match(/import\s+([^\s,{]+)\s+from\s+['"][^'"]+['"]/)
    || l.match(/import\s+\{\s*([^\}]+)\s*\}\s+from\s+['"][^'"]+['"]/);
  if (!m) continue;
  m[1].split(',').map(s => s.trim()).filter(Boolean).forEach(n => names.push(n));
}
const uniqueNames = [...new Set(names)];
const unused = [];
for (const name of uniqueNames) {
  const regex = new RegExp('\\b' + name + '\\b', 'g');
  const count = (txt.match(regex) || []).length;
  if (count <= 1) unused.push({name, count});
}
console.log(JSON.stringify(unused, null, 2));
