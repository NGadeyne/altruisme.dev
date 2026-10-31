import source from './actu-tech-semaine-44-2026.txt?raw'
export { week44 } from './week44Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week44Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week44Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week44Sections[week44Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
