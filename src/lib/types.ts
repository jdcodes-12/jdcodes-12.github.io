import { LucideIcon } from "lucide-react";

export type Article = {
  slug: string
  date: string
  lastModified?: string
  series?: string
  title: string
  description: string
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