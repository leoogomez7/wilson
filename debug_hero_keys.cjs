const fs = require('fs');
const text = fs.readFileSync('src/lib/i18n.tsx', 'utf8');
const start = text.indexOf('const translations = {');
if (start === -1) throw new Error('translations object not found');
const lines = text.slice(start).split(/\r?\n/);
const keys = { es: [], en: [], pt: [] };
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
  keys[current].push(fullKey);
}
for (const lang of ['es','en','pt']) {
  console.log(`--- ${lang} ---`);
  keys[lang].filter(k => k.startsWith('hero.')).sort().forEach(k => console.log(k));
}
