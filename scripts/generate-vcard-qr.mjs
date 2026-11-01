// Builds src/data/vcardQr.json (QR matrix as one SVG path) from vCard.vcf.
// vCard.vcf is gitignored, so re-run `npm run qr` after editing it and commit the output.
import QRCode from 'qrcode';
import { readFileSync, writeFileSync } from 'node:fs';

const vcard = readFileSync(new URL('../vCard.vcf', import.meta.url), 'utf8')
  .trim()
  .split(/\r?\n/)
  .join('\r\n');

const required = ['BEGIN:VCARD', 'VERSION:3.0', 'FN:', 'END:VCARD'];
for (const token of required) {
  if (!vcard.includes(token)) throw new Error(`vCard.vcf is missing ${token}`);
}
if (/^URL::/m.test(vcard)) throw new Error('vCard.vcf has a double colon in URL');

const { modules } = QRCode.create(vcard, { errorCorrectionLevel: 'M' });
const size = modules.size;
let d = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if (modules.get(x, y)) d += `M${x} ${y}h1v1h-1z`;
  }
}

writeFileSync(new URL('../src/data/vcardQr.json', import.meta.url), JSON.stringify({ size, d }) + '\n');
console.log(`QR written: ${size}x${size} modules, ${vcard.length} bytes encoded`);
