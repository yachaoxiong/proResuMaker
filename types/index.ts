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
