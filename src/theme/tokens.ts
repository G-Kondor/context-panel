// ─── Primitive color scales ──────────────────────────────────────────────────
// Concrete: neutral grays for Atlas Light theme
export const concrete = {
  5:  '#0F1113',
  10: '#1A1C1E',
  15: '#242628',
  20: '#2F3133',
  25: '#3A3C3E',
  30: '#454749',
  35: '#515255',
  40: '#5D5E61',
  50: '#76777A',
  60: '#8F9193',
  70: '#AAABAE',
  80: '#C6C6C9',
  90: '#E2E2E5',
  95: '#F0F0F3',
  98: '#F9F9FC',
  99: '#FCFCFF',
} as const

// Storm: neutral blue-grays for Atlas Dark theme
export const storm = {
  5:  '#0F1113',
  10: '#1A1C1E',
  15: '#242628',
  20: '#2F3133',
  25: '#3A3C3E',
  30: '#454749',
  35: '#515255',
  40: '#5D5E61',
  50: '#76777A',
  60: '#8F9193',
  70: '#AAABAE',
  80: '#C6C6C9',
  90: '#E2E2E5',
  95: '#F0F0F3',
} as const

// ─── Semantic radius scale ────────────────────────────────────────────────────
export const radius = {
  sm:  4,
  md:  8,
  lg:  12,
  xl:  16,
  xxl: 36,
} as const

// ─── Action primary ───────────────────────────────────────────────────────────
export const actionPrimary = {
  gradientStart: '#4069FE',
  gradientEnd:   '#1C4EE4',
  onPrimary:     '#FFFFFF',
  // Darker hover states
  gradientStartHover: '#3558E0',
  gradientEndHover:   '#1640C8',
} as const

// ─── Semantic surface tokens ──────────────────────────────────────────────────
export const surfaceLight = {
  default:        '#FFFFFF',
  variant:        concrete[95],  // #F0F0F3
  variantSubtle:  concrete[98],  // #F9F9FC
} as const

export const surfaceDark = {
  default:        storm[15],     // #242628
  variant:        storm[25],     // #3A3C3E
  variantSubtle:  storm[20],     // #2F3133
} as const
