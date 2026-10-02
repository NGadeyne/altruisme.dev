import source from './actu-tech-semaine-40-2026.txt?raw'
export { week40 } from './week40Metadata'

export type NewsSection = {
  heading: string
  paragraphs: string[]
  sources: { label: string; href: string }[]
}

const sources: Record<string, NewsSection['sources']> = {
  'OpenAI veut donner un travail aux agents': [
    {
      label: 'OpenAI DevDay 2026',
      href: 'https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006',
    },
    { label: 'Agents API', href: 'https://openai.com/index/introducing-the-agents-api/' },
  ],
  'NVIDIA construit une cage pour les agents IA': [
    {
      label: 'NVIDIA Open Agent Safety Platform',
      href: 'https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Open-Agent-Safety-Platform-to-Secure-Agents-From-Testing-to-Deployment/default.aspx',
    },
  ],
  'Google présente Gemini 4 Argon': [
    {
      label: 'Google Gemini 4 Argon',
      href: 'https://blog.google/intl/fr-ca/produits/explorez-obtenez-des-reponses/gemini-4-argon/',
    },
  ],
  'Anthropic prépare une introduction en Bourse… et révèle surtout combien coûte réellement l’IA': [
    {
      label: 'Reuters — investissements',
      href: 'https://www.investing.com/news/stock-market-news/anthropics-518-billion-ai-buildout-hinges-largely-on-deals-that-cannot-be-canceled-filing-shows-4922031',
    },
    {
      label: 'Reuters — financement Broadcom',
      href: 'https://www.fidelity.com/news/article/default/202610010606RTRSNEWSCOMBINED_KBN3VH3ZP-OUSBS_1',
    },
  ],
  'ElevenLabs vaut désormais 22 milliards de dollars': [
    { label: 'ElevenLabs', href: 'https://elevenlabs.io/fr/blog/tender-22bn' },
  ],
}

export const week40Sections: NewsSection[] = [{ heading: '', paragraphs: [], sources: [] }]
for (const block of source.trim().split(/\r?\n\s*\r?\n/)) {
  if (block.startsWith('## ')) {
    const heading = block.slice(3).trim()
    week40Sections.push({ heading, paragraphs: [], sources: sources[heading] ?? [] })
  } else {
    week40Sections[week40Sections.length - 1]!.paragraphs.push(block.replace(/\r?\n/g, ' '))
  }
}

export function inlineParts(paragraph: string) {
  return paragraph
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) => ({
      text: part.startsWith('**') ? part.slice(2, -2) : part,
      strong: part.startsWith('**'),
    }))
}
