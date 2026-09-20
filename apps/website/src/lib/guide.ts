import type { GuideBlock, GuideSection } from '@/types/guide'

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  )

export const renderInline = (value: string) => {
  let html = escapeHtml(value)

  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="guide-link">$1</a>',
  )

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-ink">$1</strong>')

  return html
}

const blockText = (block: GuideBlock): string => {
  if (block.type === 'list') return block.items.join(' ')
  if (block.type === 'table')
    return [block.caption, ...block.headers, ...block.rows.flat()].join(' ')
  if (block.type === 'callout') return `${block.title} ${block.text}`
  return block.text
}

export const readingMinutes = (sections: GuideSection[]) => {
  const text = sections
    .flatMap((section) => [
      ...section.intro,
      ...section.subsections.flatMap((subsection) => subsection.blocks),
    ])
    .map(blockText)
    .join(' ')
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 220))
}
