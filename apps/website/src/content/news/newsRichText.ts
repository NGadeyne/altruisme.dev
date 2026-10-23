export function inlineParts(paragraph: string) {
  return paragraph
    .split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\((?:https?:\/\/|\/guides\/)[^)]+\))/g)
    .filter(Boolean)
    .map((part) => {
      const link = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|\/guides\/)[^)]+)\)$/)
      const strong = !link && part.startsWith('**')
      const code = !link && part.startsWith('`')
      return {
        text: link ? link[1]! : strong ? part.slice(2, -2) : code ? part.slice(1, -1) : part,
        strong,
        code,
        href: link?.[2],
      }
    })
}
