export function inlineParts(paragraph: string) {
  return paragraph
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\))/g)
    .filter(Boolean)
    .map((part) => {
      const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/)
      return {
        text: link ? link[1]! : part.startsWith('**') ? part.slice(2, -2) : part,
        strong: !link && part.startsWith('**'),
        href: link?.[2],
      }
    })
}
