const fs = require('fs');
const path = 'src/lib/i18n.tsx';
const text = fs.readFileSync(path, 'utf8');
const start = text.indexOf('const translations = {');
if (start === -1) {
  throw new Error('translations object not found');
}
const block = text.slice(start);
const lines = block.split(/\r?\n/);
const keys = { es: new Set(), en: new Set(), pt: new Set() };
let current = null;
let stack = [];
for (const raw of lines) {
  const line = raw.trim();
  if (!line || line.startsWith('//')) continue;
  if (line.startsWith('es: {')) { current = 'es'; stack = ['es']; continue; }
  if (line.startsWith('en: {')) { current = 'en'; stack = ['en']; continue; }
  if (line.startsWith('pt: {')) { current = 'pt'; stack = ['pt']; continue; }
  if (current === null) continue;
  if (line === '};' || line === '}' || line === '},') {
    if (stack.length > 1) stack.pop(); else current = null;
    continue;
  }
  const m = line.match(/^(["'`\w\-]+)\s*:\s*(\{|"|`|\w)/);
  if (!m) continue;
  const key = m[1].replace(/^['"`]|['"`]$/g, '');
  if (m[2] === '{') { stack.push(key); continue; }
  const fullKey = stack.length > 1 ? stack.slice(1).concat(key).join('.') : key;
  keys[current].add(fullKey);
}
const allKeys = new Set([...keys.es, ...keys.en, ...keys.pt]);
console.log('es', keys.es.size, 'en', keys.en.size, 'pt', keys.pt.size);
for (const loc of ['es','en','pt']) {
  const missing = [...allKeys].filter(k => !keys[loc].has(k)).sort();
  console.log(`missing ${loc} ${missing.length}`);
  if (missing.length > 0) console.log(missing.join('\n'));
}
