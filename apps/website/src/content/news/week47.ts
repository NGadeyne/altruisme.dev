import source from './actu-tech-semaine-47-2026.txt?raw'
export { week47 } from './week47Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week47Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week47Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week47Sections[week47Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
