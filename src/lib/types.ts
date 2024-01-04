export type Article = {
  title: string
  uploadDate: Date
  modifyDate?: Date
  description: string
  url: string
  tags?: string[]
}