import source from './actu-tech-semaine-42-2026.txt?raw'
export { week42 } from './week42Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week42Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week42Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week42Sections[week42Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
