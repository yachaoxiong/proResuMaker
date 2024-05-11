export interface User {
  id: string
  name: string | null
  email: string | null
}

export interface Resume {
  id: string
  user: User
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface TemplateCardProps {
  title: string
  image: string
  description: string
  link: string
}

export interface InputProps {
  title?: string;
  type?:string;
  placeHolder?:string;
  required?:boolean;
  width?:string;
  onChange?: (value:string) => void;
}

export interface TitleProps {
  title: string;
  subTitle?: string;
  boldTitle?:boolean;
  titleFontSize?:string;
  subTitleFontSize?:string;
  font?:string;
}

export interface CheckboxProps {
  title:string;
}

export interface ButtonProps {
  title:string;
  image?:any;
  bgColor?:string;
  onClick?:(value:any) => any;
}
