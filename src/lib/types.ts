import { LucideIcon } from "lucide-react";

export type Article = {
  title: string
  uploadDate: Date
  modifyDate?: Date
  description: string
  url: string
  tags?: string[]
}

export type SocialButtonInfo = {
  isDisabled?: boolean
  href: string
  icon: LucideIcon
}

export type NavigationLink = {
  href: string
  label: string
}