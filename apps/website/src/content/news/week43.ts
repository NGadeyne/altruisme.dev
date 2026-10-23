import source from './actu-tech-semaine-43-2026.txt?raw'
export { week43 } from './week43Metadata'
export { inlineParts } from './newsRichText'

export type NewsSection = {
  heading: string
  paragraphs: string[]
}

export const week43Sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    week43Sections.push({ heading: block.slice(3).trim(), paragraphs: [] })
  } else {
    week43Sections[week43Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}
