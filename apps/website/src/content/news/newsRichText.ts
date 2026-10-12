export function inlineParts(paragraph: string) {
  return paragraph
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\((?:https?:\/\/|\/guides\/)[^)]+\))/g)
    .filter(Boolean)
    .map((part) => {
      const link = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|\/guides\/)[^)]+)\)$/)
      return {
        text: link ? link[1]! : part.startsWith('**') ? part.slice(2, -2) : part,
        strong: !link && part.startsWith('**'),
        href: link?.[2],
      }
    })
}
