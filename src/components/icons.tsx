type Props = { size?: number; color?: string };

const S = {
  svg: { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' as const },
};

export function EyeIcon({ size = 20, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={1.8}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function SunglassesIcon({ size = 20, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={1.8}>
      <path d="M3 12h3a4 4 0 0 0 8 0h-4" />
      <path d="M10 12a4 4 0 0 0 8 0h3" />
      <path d="M7 12V9M17 12V9" />
    </svg>
  );
}

export function TrendUpIcon({ size = 20, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={1.8}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

export function TargetIcon({ size = 20, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={1.8}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={1.8}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ size = 22, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={2}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ size = 22, color = 'currentColor' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={S.svg} stroke={color} strokeWidth={2}>
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}
