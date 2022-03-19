declare interface Color {
  hex: string
  rgb: string
  hsl: string
}

declare interface PaletteColor extends Color {
  alpha?: Color
}

declare type Palette = Record<string, PaletteColor>