import type { GuideBlock, GuideSection, GuideSubsection } from '@/types/guide'
import sourceFile from './source.txt?raw'
import takeawaysFile from './takeaways.txt?raw'

type SectionKind = GuideSection['kind']

const links = {
  saas: 'https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/telecommunications-et-reseaux/guide-numerique-des',
  aiAct: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai',
  security: 'https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles',
  processors: 'https://www.cnil.fr/fr/reglement-europeen-sur-la-protection-des-donnees-un-guide-pour-accompagner-les-sous-traitants',
  usagePricing: 'https://stripe.com/fr/resources/more/usage-based-pricing-strategy-for-saas',
  metrics: 'https://chartmogul.com/fr/saas-metrics/cheat-sheet/',
  forecast: 'https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-financement-initial',
}

const withEditorialLinks = (text: string) =>
  text
    .replace('logiciel en tant que service.', `[logiciel en tant que service](${links.saas}).`)
    .replace(
      'Ces questions deviennent particulièrement importantes en B2B et dans les secteurs régulés.',
      `Ces questions deviennent particulièrement importantes en B2B et dans les secteurs régulés, notamment avec l’entrée en application progressive du [cadre européen sur l’intelligence artificielle](${links.aiAct}).`,
    )
    .replace(
      'cadre européen sur l’intelligence artificielle',
      `[cadre européen sur l’intelligence artificielle](${links.aiAct})`,
    )
    .replace('sécurité des données', `[sécurité des données](${links.security})`)
    .replace('sous-traitante lorsqu’elle traite des données', `[sous-traitante](${links.processors}) lorsqu’elle traite des données`)
    .replace('Le pricing à l’usage', `Le [pricing à l’usage](${links.usagePricing})`)
    .replace('les métriques SaaS sont si importantes', `[les métriques SaaS](${links.metrics}) sont si importantes`)
    .replace('Le prévisionnel financier ne doit pas', `[Le prévisionnel financier](${links.forecast}) ne doit pas`)

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const isSubsectionTitle = (value: string) =>
  value.length <= 120 &&
  !/[.!?”»]$/.test(value) &&
  !/^\d/.test(value) &&
  value !== 'Il commence beaucoup plus souvent par une phrase simple : “C’est étrange qu’on fasse encore ça comme ça.”'

const block = (text: string): GuideBlock => ({
  type: text.endsWith('?') ? 'question' : 'paragraph',
  text: withEditorialLinks(text),
})

const parseSection = (heading: string, body: string): GuideSection => {
  const match = heading.match(/^(Introduction|Partie (\d+)|Conclusion|FAQ) — (.+)$/)
  if (!match) throw new Error(`Titre de section invalide : ${heading}`)

  const [, rawLabel, number, rawTitle] = match
  const label = rawLabel!
  const title = rawTitle!
  const kind: SectionKind = label === 'Introduction'
    ? 'introduction'
    : label === 'Conclusion'
      ? 'conclusion'
      : label === 'FAQ'
        ? 'faq'
        : 'chapter'
  const id = number ? `partie-${number}` : slugify(label)
  const intro: GuideBlock[] = []
  const subsections: GuideSubsection[] = []
  let current: GuideSubsection | undefined

  for (const paragraph of body.split('\n').map((item) => item.trim()).filter(Boolean)) {
    if (isSubsectionTitle(paragraph)) {
      current = {
        id: `${id}-${slugify(paragraph)}`,
        title: paragraph,
        kind: 'content',
        blocks: [],
      }
      subsections.push(current)
      continue
    }
    ;(current?.blocks ?? intro).push(block(paragraph))
  }

  return {
    id,
    title,
    kind,
    ...(number ? { number: Number(number) } : {}),
    intro,
    subsections,
  }
}

const headings = /^(Introduction|Partie \d+|Conclusion|FAQ) — .+$/gm
const firstHeading = sourceFile.indexOf('\nIntroduction —')
const articleStart = sourceFile.indexOf('\nIntroduction —', firstHeading + 1) + 1
const article = sourceFile.slice(articleStart)
const matches = [...article.matchAll(headings)]
const parsed = matches.map((match, index) =>
  parseSection(match[0], article.slice((match.index ?? 0) + match[0].length, matches[index + 1]?.index)),
)

const takeaways = new Map(
  [...takeawaysFile.matchAll(/^### Partie (\d+) — À retenir\n+([\s\S]*?)(?=^### Partie|(?![\s\S]))/gm)].map(
    ([, number, content]) => [
      Number(number),
      content!
        .trim()
        .split(/\n\s*\n/)
        .map((text) => block(text.trim())),
    ],
  ),
)

for (const section of parsed) {
  if (!section.number) continue
  const blocks = takeaways.get(section.number)
  if (!blocks) continue
  section.subsections.push({
    id: `${section.id}-a-retenir`,
    title: 'À retenir',
    kind: 'takeaway',
    blocks,
  })
}

const order = [
  'introduction',
  ...Array.from({ length: 18 }, (_, index) => `partie-${index + 1}`),
  'conclusion',
  'faq',
]

export default order.map((id) => parsed.find((section) => section.id === id)!).filter(Boolean)
