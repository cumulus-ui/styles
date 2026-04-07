#!/usr/bin/env tsx
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CS = resolve(ROOT, 'node_modules/@cloudscape-design');
const SCOPED_CSS = resolve(CS, 'components/internal/base-component/styles.scoped.css');
const GLOBAL_CSS = resolve(CS, 'global-styles/index.css');
const OUT = resolve(ROOT, 'index.css');

const scoped = readFileSync(SCOPED_CSS, 'utf-8');
const global = readFileSync(GLOBAL_CSS, 'utf-8');

const cleaned = scoped
  .replace(/:not\(#\\9\)/g, '')
  .replace(/\/\*[\s\S]*?Copyright[\s\S]*?\*\//g, '');

const fontsOptimized = global
  .replace(/src:\s*url\(/g, "src: local('Open Sans'), url(");

const css = [
  '/* AUTO-GENERATED — DO NOT EDIT */',
  '/* Source: @cloudscape-design/global-styles + @cloudscape-design/components theming runtime */',
  '',
  '/* ── Normalize + Fonts ── */',
  '',
  fontsOptimized,
  '',
  '/* ── Tokens + Environment ── */',
  '',
  cleaned.trim(),
  '',
].join('\n');

writeFileSync(OUT, css);

const lines = css.split('\n').length;
console.log(`✓ Generated index.css (${lines} lines)`);
