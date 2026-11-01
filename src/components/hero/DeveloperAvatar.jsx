// Flat-style developer illustration that breaks out of the yellow arch.
export default function DeveloperAvatar() {
  return (
    <svg
      className="w-full h-auto max-h-[460px] drop-shadow-xl"
      fill="none"
      viewBox="0 0 360 440"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="figure-silhouette">
        {/* Hair contour */}
        <path d="M110 145 C110 80, 250 80, 250 145 C250 160, 240 180, 240 200 C240 230, 215 250, 180 250 C145 250, 120 230, 120 200 Z" fill="#1C1B1A" />
        {/* Cap / visor */}
        <path d="M105 125 C125 95, 235 95, 255 125 L285 135 C285 142, 260 148, 220 148 L100 148 C90 148, 85 138, 105 125 Z" fill="#2B2927" stroke="#1C1B1A" strokeWidth="4" />
        {/* Face */}
        <path d="M130 145 C130 145, 130 220, 180 220 C230 220, 230 145, 230 145 Z" fill="#FAF8F5" stroke="#1C1B1A" strokeWidth="5" />
        {/* Glasses */}
        <rect fill="#1C1B1A" height="22" rx="4" stroke="#1C1B1A" strokeWidth="3" width="34" x="138" y="152" />
        <rect fill="#1C1B1A" height="22" rx="4" stroke="#1C1B1A" strokeWidth="3" width="34" x="188" y="152" />
        <line stroke="#1C1B1A" strokeWidth="4" x1="172" x2="188" y1="162" y2="162" />
        {/* Lens reflections */}
        <line stroke="#F5A623" strokeLinecap="round" strokeWidth="2.5" x1="142" x2="152" y1="168" y2="158" />
        <line stroke="#F5A623" strokeLinecap="round" strokeWidth="2.5" x1="192" x2="202" y1="168" y2="158" />
        {/* Smile */}
        <path d="M165 195 Q180 202 195 195" fill="none" stroke="#1C1B1A" strokeLinecap="round" strokeWidth="3" />
        {/* Headphones */}
        <path d="M110 160 C100 160, 100 195, 110 195 Z" fill="#F5A623" stroke="#1C1B1A" strokeWidth="4" />
        <path d="M250 160 C260 160, 260 195, 250 195 Z" fill="#F5A623" stroke="#1C1B1A" strokeWidth="4" />
        {/* Neck */}
        <path d="M160 220 L160 250 L200 250 L200 220 Z" fill="#FAF8F5" stroke="#1C1B1A" strokeWidth="4" />
        {/* Torso */}
        <path d="M70 380 C70 270, 110 250, 180 250 C250 250, 290 270, 290 380 L295 440 L65 440 Z" fill="#1C1B1A" stroke="#1C1B1A" strokeWidth="6" />
        {/* Collar */}
        <polygon fill="#2B2927" points="180,290 145,252 170,250" stroke="#1C1B1A" strokeWidth="3" />
        <polygon fill="#2B2927" points="180,290 215,252 190,250" stroke="#1C1B1A" strokeWidth="3" />
        {/* Folded arms */}
        <path d="M85 360 C110 320, 250 320, 275 360 C270 410, 90 410, 85 360 Z" fill="#2B2927" stroke="#1C1B1A" strokeWidth="4" />
        {/* Watch */}
        <rect fill="#F5A623" height="28" rx="4" stroke="#1C1B1A" strokeWidth="3" transform="rotate(-15 115 365)" width="22" x="115" y="365" />
        <rect fill="#1C1B1A" height="16" rx="2" width="14" x="119" y="371" />
      </g>
    </svg>
  );
}
