export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href: string
}

export interface Layout {
  title: string
  url: string
  keywords: Array<string>
  siteName: string
  description: string
  socialTitle: string
  socialNetwork: string
  logoSrc: string
  logoHeight: number
  logoSubtitle?: string
  logoSubtitleColor?: string
}

export interface LandingPageItems {
  layout: Layout
  nextCallToActionItems: Array<NextCallToActionProps>
  hasNextCallToActionWithAnnotation?: boolean
}
