const fs = require('fs');
const path = require('path');

const inPath = path.resolve(__dirname, '../src/assets/auth-flow-studio-oidc.svg');
const outPath = path.resolve(__dirname, '../src/components/AuthFlowSvgAsset.jsx');

function kebabToCamel(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function attrNameToJSX(name) {
  if (name === 'class') return 'className';
  if (name === 'for') return 'htmlFor';
  if (name === 'xlink:href') return 'xlinkHref';
  return kebabToCamel(name);
}

function parseStyle(styleStr) {
  const parts = styleStr.split(';').map(p => p.trim()).filter(Boolean);
  const obj = {};
  parts.forEach(p => {
    const idx = p.indexOf(':');
    if (idx === -1) return;
    const k = p.slice(0, idx).trim();
    const v = p.slice(idx + 1).trim();
    const key = kebabToCamel(k);
    obj[key] = v;
  });
  return obj;
}

function escapeStringForJS(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function parseAttributes(attrStr) {
  const attrs = [];
  const re = /([\w:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
  let m;
  while ((m = re.exec(attrStr))) {
    const name = m[1];
    const value = m[3] ?? m[4] ?? m[5] ?? '';
    attrs.push({ name, value });
  }
  return attrs;
}

function convertTag(match, closingSlash, tagName, attrStr, selfClose) {
  // attrStr may include leading spaces
  const attrs = parseAttributes(attrStr || '');
  const outAttrs = [];
  attrs.forEach(({ name, value }) => {
    if (name === 'style') {
      const obj = parseStyle(value);
      const entries = Object.keys(obj).map(k => `${k}: '${escapeStringForJS(obj[k])}'`);
      outAttrs.push(`style={{${entries.join(', ')}}}`);
      return;
    }
    const jsxName = attrNameToJSX(name);
    outAttrs.push(`${jsxName}={'${escapeStringForJS(value)}'}`);
  });

  const attrsText = outAttrs.length ? ' ' + outAttrs.join(' ') : '';
  if (closingSlash) return `</${tagName}>`;
  if (selfClose && /\/$/.test(match)) {
    // self-closing
    return `<${tagName}${attrsText} />`;
  }
  return `<${tagName}${attrsText}>`;
}

function convert(svg) {
  // Remove XML prolog and DOCTYPE
  svg = svg.replace(/^<\?xml[\s\S]*?\?>\s*/i, '');
  svg = svg.replace(/<!DOCTYPE[\s\S]*?>\s*/i, '');

  // Convert tags one by one
  const tagRe = /<(\/)?([a-zA-Z0-9:_-]+)([^>]*)>/g;
  const converted = svg.replace(tagRe, (match, closing, tagName, attrStr) => {
    const isClosing = !!closing;
    const isSelfClose = /\/>$/.test(match);
    return convertTag(match, isClosing, tagName, attrStr, isSelfClose);
  });

  return converted;
}

try {
  const svg = fs.readFileSync(inPath, 'utf8');
  const jsxBody = convert(svg);

  const component = `import React from 'react';\nimport styles from '../components/styles/AuthFlowSvg.module.css';\n\nexport default function AuthFlowSvgAsset() {\n  return (\n    <>\n${jsxBody.split('\n').map(line => '      ' + line).join('\n')}\n    </>\n  );\n}\n`;

  fs.writeFileSync(outPath, component, 'utf8');
  console.log('Wrote', outPath);
} catch (err) {
  console.error(err);
  process.exit(1);
}
