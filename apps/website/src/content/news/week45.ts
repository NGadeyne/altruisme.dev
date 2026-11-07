import source from './actu-tech-semaine-45-2026.txt?raw'
export { week45 } from './week45Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week45Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week45Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week45Sections[week45Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
