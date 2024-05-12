export interface TitleProps {
  title: string
  subTitle?: string
  boldTitle?: boolean
  titleFontSize?: string
  subTitleFontSize?: string
  font?: string
}

export interface CheckboxProps {
  title: string
}

export interface ButtonProps {
  title: string
  image?: any
  bgColor?: string
  onClick?: () => void
}
