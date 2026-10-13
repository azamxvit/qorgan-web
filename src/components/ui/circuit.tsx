import { useId } from "react";

// Coordinates use the same percentages as the four icon anchors in Hero.
const traces = [
  "M0 340 H230 L345 455 H620 L775 300 H1000",
  "M0 520 H245 L365 640 H640 L740 540 H1000",
  "M0 280 H205 L265 220 H465",
  "M0 310 H275 L350 235 H550 L590 275 H775 L835 215 H1000",
  "M0 390 H290 L360 460 H570 L675 355 H1000",
  "M0 440 H235 L340 545 H610 L720 435 H1000",
  "M0 480 H205 L330 605 H635 L770 470 H940 L1000 530",
  "M0 565 H280 L365 650 H590 L680 560 H1000",
  "M410 360 H495 L575 280 H860 L920 220 H1000",
  "M445 405 L485 365 H720",
];

export function Circuit() {
  const id = useId();
  const maskId = `${id}-circuit-mask`;
  const fadeId = `${id}-circuit-fade`;
  const mintId = `${id}-circuit-mint`;
  const yellowId = `${id}-circuit-yellow`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full max-md:hidden"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={fadeId}>
          <stop offset="0%" stopColor="white" />
          <stop offset="28%" stopColor="white" />
          <stop offset="43%" stopColor="white" stopOpacity="0.135" />
          <stop offset="57%" stopColor="white" stopOpacity="0.135" />
          <stop offset="72%" stopColor="white" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
        <mask id={maskId}>
          <rect width="1000" height="1000" fill={`url(#${fadeId})`} />
        </mask>
        <linearGradient id={mintId}>
          <stop stopColor="#4ccd99" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ccd99" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#4ccd99" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={yellowId}>
          <stop stopColor="#fff455" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff455" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff455" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g mask={`url(#${maskId})`}>
        {traces.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="white"
            strokeOpacity="0.12"
            strokeWidth="1"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {[[465, 220], [550, 235], [410, 360], [720, 365], [445, 405]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="white" fillOpacity="0.18" />
        ))}
      </g>
      <g fill="none" strokeWidth="1.2">
        <path d="M20 340 H140" stroke={`url(#${mintId})`} vectorEffect="non-scaling-stroke" />
        <path d="M80 520 H200" stroke={`url(#${yellowId})`} vectorEffect="non-scaling-stroke" />
        <path d="M860 300 H980" stroke={`url(#${yellowId})`} vectorEffect="non-scaling-stroke" />
        <path d="M800 540 H920" stroke={`url(#${mintId})`} vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
