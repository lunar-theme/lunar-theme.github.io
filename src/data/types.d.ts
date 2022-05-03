declare interface Color {
  hex: string
  rgb: string
  hsl: string
}

declare interface PaletteColor extends Color {
  alpha?: Color
}

declare type Palette = Record<string, PaletteColor>

declare interface Maintainer {
  name: string
  url: string
}

declare interface Port {
  name: string
  repo: string
  maintainers: Maintainer[]
  keywords: string[]
  variants?: boolean
}

declare type Ports = Port[]