import source from './actu-tech-semaine-39-2026.txt?raw'
export { week39 } from './week39Metadata'

const headings = [
  'Claude vient de sortir de l’écran',
  'Anthropic lance Claude Opus 5.5',
  'Les cyberattaques dopées à l’IA continuent de progresser',
  'Databricks rachète un… tableur',
  'L’explosion de l’IA commence à se heurter à une ressource très physique : l’électricité',
  'Pourquoi ça compte pour les gens de la Tech',
  'Ce qu’on retient de la semaine',
] as const

export const externalLinks: Record<string, { anchor: string; href: string }> = {
  [headings[0]]: {
    anchor: 'nouveau groupe de recherche en sciences du vivant',
    href: 'https://www.anthropic.com/news/claude-discovers-novel-enzyme-system',
  },
  [headings[1]]: {
    anchor: 'Claude Opus 5.5',
    href: 'https://www.reuters.com/business/anthropic-unveils-claude-opus-55-2026-09-22/',
  },
  [headings[2]]: {
    anchor: 'Aikido Security',
    href: 'https://www.reuters.com/legal/litigation/belgiums-aikido-launches-cybersecurity-ai-model-demand-local-tools-grows-2026-09-21/',
  },
  [headings[3]]: {
    anchor: 'rachat de Row Zero',
    href: 'https://techcrunch.com/2026/09/24/databricks-buys-row-zero-and-is-scouting-for-more-startups-to-acquire/',
  },
  [headings[4]]: {
    anchor: 'gigantesque datacenter en Alberta',
    href: 'https://www.reuters.com/legal/litigation/meta-data-center-boosts-alberta-appeal-hyperscalers-capital-power-says-2026-09-21/',
  },
}

export type NewsSection = { heading: string; paragraphs: string[] }

const sections: NewsSection[] = [{ heading: '', paragraphs: [] }]
for (const line of source.split(/\r?\n/)) {
  if (!line.trim()) continue
  if (headings.some((heading) => heading === line)) {
    sections.push({ heading: line, paragraphs: [] })
  } else {
    sections[sections.length - 1]!.paragraphs.push(line)
  }
}

export const week39Sections = sections
