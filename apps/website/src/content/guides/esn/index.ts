import type { GuideBlock, GuideSection, GuideSubsection } from '@/types/guide'
import source from './source.txt?raw'

const slugify = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const heading = /^(Introduction|Partie (\d+)|Conclusion|FAQ) — (.+)$/gm
const article = source.slice(source.indexOf('\nIntroduction —', source.indexOf('\nIntroduction —') + 1) + 1)
const matches = [...article.matchAll(heading)]

const sections: GuideSection[] = matches.map((match, index) => {
  const [, label, number, title] = match
  const id = number ? `partie-${number}` : slugify(label!)
  const kind = label === 'Introduction' ? 'introduction' : label === 'Conclusion' ? 'conclusion' : label === 'FAQ' ? 'faq' : 'chapter'
  const intro: GuideBlock[] = []
  const subsections: GuideSubsection[] = []
  let current: GuideSubsection | undefined
  const body = article.slice((match.index ?? 0) + match[0].length, matches[index + 1]?.index)

  for (const line of body.split('\n').map((part) => part.trim()).filter(Boolean)) {
    if (line === 'À retenir' || (kind === 'faq' && line.endsWith('?')) || (kind === 'chapter' && line.length <= 100 && !/[.!?”»:]$/.test(line) && !/^\d/.test(line))) {
      current = {
        id: `${id}-${slugify(line)}`,
        title: line,
        kind: line === 'À retenir' ? 'takeaway' : 'content',
        blocks: [],
      }
      subsections.push(current)
    } else {
      ;(current?.blocks ?? intro).push({ type: 'paragraph', text: line })
    }
  }

  return { id, title: title!, kind, ...(number ? { number: Number(number) } : {}), intro, subsections }
})

export default sections
