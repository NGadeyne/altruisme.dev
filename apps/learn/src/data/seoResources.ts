import { seoResourcePreviews } from './seoResourcePreviews'

export interface SeoResource {
  number: number
  title: string
  description: string
  url: string
}

export const seoResourcesSheetUrl =
  'https://docs.google.com/spreadsheets/d/1WYRT1SnyGjKbZCVSox8YgnDz8Wzma5SSRmp1CzmZIQI/edit'

function sheetTabUrl(gid: number) {
  return `${seoResourcesSheetUrl}?gid=${gid}#gid=${gid}`
}

export const seoResources: SeoResource[] = [
  {
    ...seoResourcePreviews[0],
    description: 'Contrôles essentiels, anomalies, gravité et priorités.',
    url: sheetTabUrl(1004519445),
  },
  {
    ...seoResourcePreviews[1],
    description: 'Tableau des requêtes, intentions, pages cibles et potentiel.',
    url: sheetTabUrl(711277340),
  },
  {
    ...seoResourcePreviews[2],
    description: 'Analyse avant/après, title, H1, contenu, maillage et CTA.',
    url: sheetTabUrl(65876417),
  },
  {
    ...seoResourcePreviews[3],
    description: 'Sujets, intentions, échéances, statuts et liens internes.',
    url: sheetTabUrl(445528911),
  },
  {
    ...seoResourcePreviews[4],
    description: 'Actions, priorités, efforts estimés, échéances et résultats attendus.',
    url: sheetTabUrl(1994007535),
  },
]
