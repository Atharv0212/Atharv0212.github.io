import qr from '../../data/vcardQr.json';

// Scannable vCard QR, generated from vCard.vcf by `npm run qr`.
const quiet = 0.2;

export default function QrGraphic() {
  const total = qr.size + quiet * 2;
  return (
    <svg
      className="w-40 h-40 mx-auto"
      viewBox={`0 0 ${total} ${total}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="QR code with Atharv Khare's contact card"
    >
      <rect width={total} height={total} fill="#fff" />
      <path d={qr.d} fill="#1C1B1A" transform={`translate(${quiet} ${quiet})`} />
    </svg>
  );
}
