import source from './actu-tech-semaine-46-2026.txt?raw'
export { week46 } from './week46Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week46Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week46Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week46Sections[week46Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
