export type GuideBlock =
  | { type: 'paragraph' | 'question'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; title: string; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption: string }

export type GuideSubsection = {
  id: string
  title: string
  kind: 'content' | 'takeaway'
  blocks: GuideBlock[]
}

export type GuideSection = {
  id: string
  title: string
  kind: 'introduction' | 'chapter' | 'conclusion' | 'faq'
  number?: number
  intro: GuideBlock[]
  subsections: GuideSubsection[]
}

export type GuideCategory = 'entreprendre' | 'construire' | 'acquerir'

export type GuideMetadata = {
  slug: string
  title: string
  description: string
  label: string
  category: GuideCategory
  edition: string
  status: 'available' | 'soon'
  seoTitle?: string
  ogTitle?: string
  ogDescription?: string
  image?: string
  imageAlt?: string
  imageSrcset?: string
  author?: { name: string; url: string }
  publishedAt?: string
  updatedAt?: string
}

export type GuideDefinition = GuideMetadata & {
  loadSections?: () => Promise<GuideSection[]>
}
