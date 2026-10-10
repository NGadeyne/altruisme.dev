import source from './actu-tech-semaine-41-2026.txt?raw'
export { week41 } from './week41Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week41Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week41Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week41Sections[week41Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
