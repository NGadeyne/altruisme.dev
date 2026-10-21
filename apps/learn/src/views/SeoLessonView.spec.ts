import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import SeoLessonView from '@/views/SeoLessonView.vue'

const routeParams = vi.hoisted(() => ({ lessonSlug: 'lesson-05' }))

vi.mock('vue-router', async (importOriginal) => {
  const original = await importOriginal<typeof import('vue-router')>()
  return { ...original, useRoute: () => ({ params: routeParams }) }
})

async function mountLesson() {
  const wrapper = mount(SeoLessonView, {
    global: {
      stubs: {
        BaseContainer: { template: '<div><slot /></div>' },
        RouterLink: RouterLinkStub,
      },
    },
  })
  await vi.waitFor(() => expect(wrapper.find('.seo-lesson-content').exists()).toBe(true), {
    timeout: 5000,
  })
  return wrapper
}

describe('lien entre une leçon SEO et le plan', () => {
  it('affiche la cinquième leçon et pointe vers son action prédéfinie', async () => {
    routeParams.lessonSlug = 'lesson-05'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe("05 — Vérifier l'indexation et repérer les problèmes")
    expect(wrapper.text()).toContain('Module 2 · Auditer ton site')
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain('Tes pages existent. Mais Google les connaît-il vraiment ?')
    expect(wrapper.text()).toContain('Question 4 — Que faut-il faire lorsqu')
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')
    expect(wrapper.text()).toContain("Vérifier l'indexation de mes pages")
    const planLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes("Voir dans mon plan d'action"))
    expect(planLink?.props('to')).toEqual({
      name: 'learning-plan',
      query: { action: 'seo_check_indexation' },
    })

    const previousLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes('Leçon précédente'))
    expect(previousLink?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-04' },
    })
  })

  it('affiche le texte de la première leçon sans encart d’action vide', async () => {
    routeParams.lessonSlug = 'lesson-01'
    const wrapper = await mountLesson()

    expect(wrapper.find('h1').text()).toBe('01 — Le SEO : à quoi ça sert vraiment ?')
    expect(wrapper.text()).toContain('Altruisme Learn · Formation SEO')
    expect(wrapper.text()).toContain('Lecture : environ 11 min')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain('Objectif pédagogique')
    expect(wrapper.text()).toContain('Ton site existe. Mais qui le trouve ?')
    expect(wrapper.text()).toContain('Être trouvé, être compris et être choisi')
    expect(wrapper.text()).toContain('Combien de temps faut-il pour obtenir des résultats en SEO ?')
    expect(wrapper.text()).toContain('Vérifie tes connaissances')
    expect(wrapper.text()).toContain('Question 1 — Quel est le principal objectif')
    expect(wrapper.text()).not.toContain('Question 1 : B.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')
    expect(wrapper.text()).not.toContain('Voir dans mon plan d’action')
  })

  it('affiche la deuxième leçon et son accès à la leçon précédente', async () => {
    routeParams.lessonSlug = 'lesson-02'
    const wrapper = await mountLesson()

    expect(wrapper.find('h1').text()).toBe(
      '02 — Comment Google découvre, indexe et classe les pages',
    )
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain('Les trois étapes fonctionnent ensemble')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain(
      'Ton site est en ligne. Pourquoi Google ne le trouve-t-il pas ?',
    )
    expect(wrapper.text()).toContain('Question 4 — Quelle affirmation concernant le sitemap')
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')

    const previousLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes('Leçon précédente'))
    expect(previousLink?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-01' },
    })
  })

  it('affiche la troisième leçon et son action du plan sans la dupliquer', async () => {
    routeParams.lessonSlug = 'lesson-03'
    const wrapper = await mountLesson()

    expect(wrapper.find('h1').text()).toBe("03 — Les fondamentaux d'un référencement efficace")
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain('Comprendre les grandes dimensions du référencement naturel')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain('Pourquoi certaines pages restent invisibles')
    expect(wrapper.text()).toContain('Question 4 — Quelle approche est la plus pertinente')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const planLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes("Voir dans mon plan d'action"))
    expect(planLink?.props('to')).toEqual({
      name: 'learning-plan',
      query: { action: 'seo_identify_strategic_pages' },
    })

    const practiceLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes('Faire la mise en pratique'))
    expect(practiceLink?.props('to')).toEqual({ name: 'seo-practice-01' })
  })

  it('affiche la quatrième leçon, son questionnaire et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-04'
    const wrapper = await mountLesson()

    expect(wrapper.find('h1').text()).toBe('04 — Installer et découvrir Google Search Console')
    expect(wrapper.text()).toContain('Module 2 · Auditer ton site')
    expect(wrapper.text()).toContain('Lecture : environ 13 min')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain(
      'Ton site est en ligne. Mais sais-tu vraiment ce qui se passe sur Google ?',
    )
    expect(wrapper.text()).toContain('Question 4 — Quelle fonctionnalité permet')
    expect(wrapper.text()).not.toContain('Question 4 : C.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')

    const planLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes("Voir dans mon plan d'action"))
    expect(planLink?.props('to')).toEqual({
      name: 'learning-plan',
      query: { action: 'seo_setup_search_console' },
    })

    const previousLink = wrapper
      .findAllComponents(RouterLinkStub)
      .find((link) => link.text().includes('Leçon précédente'))
    expect(previousLink?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-03' },
    })
  })

  it('affiche la sixième leçon et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-06'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '06 — Analyser les performances et trouver les premiers freins',
    )
    expect(wrapper.text()).toContain('Module 2 · Auditer ton site')
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain(
      "Ton site apparaît sur Google. Mais est-ce qu'il attire les bonnes personnes ?",
    )
    expect(wrapper.text()).toContain('Question 4 — Pourquoi est-il intéressant')
    expect(wrapper.text()).not.toContain('Question 4 : A.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_identify_opportunities' } })
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({
      name: 'seo-practice-02',
    })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-05' },
    })
  })

  it('affiche la septième leçon et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-07'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('07 — Comprendre les intentions de recherche')
    expect(wrapper.text()).toContain('Module 3 · Trouver les bons mots-clés')
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain('Vidéo de démonstration')
    expect(wrapper.text()).toContain('Attirer des visiteurs ne suffit pas')
    expect(wrapper.text()).toContain("Les quatre grandes familles d'intentions de recherche")
    expect(wrapper.text()).toContain('Question 4 — Faut-il créer une page différente')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_identify_search_intents' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-06' },
    })
  })

  it('affiche la huitième leçon, son tableau et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-08'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('08 — Trouver des mots-clés sans outils payants')
    expect(wrapper.text()).toContain('Module 3 · Trouver les bons mots-clés')
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain(
      'Comment savoir ce que tes futurs clients recherchent réellement ?',
    )
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(5)
    expect(wrapper.text()).toContain('Question 4 — Quelle est la meilleure approche')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_find_keywords' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-07' },
    })
  })

  it('affiche la neuvième leçon, son tableau et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-09'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '09 — Prioriser ses mots-clés et les associer aux bonnes pages',
    )
    expect(wrapper.text()).toContain('Module 3 · Trouver les bons mots-clés')
    expect(wrapper.text()).toContain('Lecture : environ 17 min')
    expect(wrapper.text()).toContain('Tu as trouvé tes mots-clés. Mais lesquels méritent')
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(5)
    expect(wrapper.text()).toContain('Félicitations, tu as terminé le module 3 !')
    expect(wrapper.text()).toContain('Question 4 — Deux pages apparaissent')
    expect(wrapper.text()).not.toContain('Question 4 : C.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_map_keywords' } })
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({
      name: 'seo-practice-03',
    })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-08' },
    })
  })

  it('affiche la dixième leçon, les exemples d’URL et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-10'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('10 — Optimiser title, meta description, URL et titres')
    expect(wrapper.text()).toContain('Module 4 · Optimiser tes pages')
    expect(wrapper.text()).toContain('Lecture : environ 14 min')
    expect(wrapper.text()).toContain('Ta page répond peut-être au bon besoin')
    expect(wrapper.text()).toContain('https://exemple.fr/photographe-mariage-bordeaux')
    expect(wrapper.text()).toContain('Faut-il modifier les URL existantes ?')
    expect(wrapper.text()).toContain('Question 4 — Quelle affirmation concernant les titres')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_optimize_metadata' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-09' },
    })
  })

  it('affiche la onzième leçon et son action du plan', async () => {
    routeParams.lessonSlug = 'lesson-11'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('11 — Créer un contenu qui répond aux bonnes intentions')
    expect(wrapper.text()).toContain('Module 4 · Optimiser tes pages')
    expect(wrapper.text()).toContain('Lecture : environ 17 min')
    expect(wrapper.text()).toContain('Être visible sur Google ne suffit pas')
    expect(wrapper.text()).toContain('Comprendre ce qui rend un contenu réellement utile')
    expect(wrapper.text()).toContain('Question 4 — Pourquoi est-il intéressant')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_improve_content' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-10' },
    })
  })

  it('ouvre la douzième leçon, son exercice, son action et la leçon suivante', async () => {
    routeParams.lessonSlug = 'lesson-12'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('12 — Améliorer la structure et le maillage interne')
    expect(wrapper.text()).toContain('Module 4 · Optimiser tes pages')
    expect(wrapper.text()).toContain('Lecture : environ 17 min')
    expect(wrapper.text()).toContain('Une bonne page ne sert pas à grand-chose')
    expect(wrapper.text()).toContain('Attention aux liens qui ne sont pas de véritables liens HTML')
    expect(wrapper.text()).toContain('Félicitations, tu as terminé le module 4 !')
    expect(wrapper.text()).toContain('Question 4 — Combien de liens internes')
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_internal_links' } })
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({ name: 'seo-practice-04' })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-13' },
    })
  })

  it('ouvre la treizième leçon, son action technique et la suivante', async () => {
    routeParams.lessonSlug = 'lesson-13'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '13 — Comprendre et corriger les principaux freins techniques',
    )
    expect(wrapper.text()).toContain('Module 5 · Maîtriser les fondamentaux techniques')
    expect(wrapper.text()).toContain('Lecture : environ 17 min')
    expect(wrapper.text()).toContain('Ton contenu est prêt. Mais ton site permet-il vraiment')
    expect(wrapper.text()).toContain('Les codes 5xx : le serveur rencontre un problème')
    expect(wrapper.text()).toContain("Question 4 — Un test de l'URL active")
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')
    expect(
      wrapper.get('a[href="https://search.google.com/search-console"]').attributes('rel'),
    ).toBe('noopener noreferrer')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_technical_checks' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-12' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-14' },
    })
  })

  it('ouvre la quatorzième leçon, son tableau, le plan et la suivante', async () => {
    routeParams.lessonSlug = 'lesson-14'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '14 — Organiser son architecture, ses URL et ses redirections',
    )
    expect(wrapper.text()).toContain('Module 5 · Maîtriser les fondamentaux techniques')
    expect(wrapper.text()).toContain('Lecture : environ 17 min')
    expect(wrapper.text()).toContain(
      "Une simple modification d'adresse peut avoir des conséquences importantes",
    )
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(2)
    expect(wrapper.text()).toContain(
      'Question 4 — Pourquoi faut-il mettre à jour les liens internes',
    )
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.text()).not.toContain('Le contenu de cette leçon est en préparation.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_technical_checks' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-13' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-15' },
    })
  })

  it('ouvre la quinzième leçon, son exemple robots.txt et le plan', async () => {
    routeParams.lessonSlug = 'lesson-15'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '15 — Comprendre robots.txt, sitemap et balises canoniques',
    )
    expect(wrapper.text()).toContain('Module 5 · Maîtriser les fondamentaux techniques')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Ton site donne-t-il les bonnes indications à Google ?')
    expect(wrapper.get('pre code').text()).toContain('Disallow: /recherche-interne/')
    expect(wrapper.text()).toContain('Question 4 — Une page possède une instruction noindex')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_technical_checks' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-14' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-16' },
    })
  })

  it('ouvre la seizième leçon, ses repères Web Vitals et la mise en pratique', async () => {
    routeParams.lessonSlug = 'lesson-16'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '16 — Améliorer PageSpeed, le mobile et les Core Web Vitals',
    )
    expect(wrapper.text()).toContain('Module 5 · Maîtriser les fondamentaux techniques')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Ton site est accessible. Mais est-il agréable à utiliser ?')
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(3)
    expect(wrapper.text()).toContain('Question 4 — Une page possède un LCP médiocre')
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.get('a[href="https://pagespeed.web.dev/"]').attributes('rel')).toBe(
      'noopener noreferrer',
    )

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({ name: 'seo-practice-05' })
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_technical_checks' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-15' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-17' },
    })
  })

  it('ouvre la dix-septième leçon, son tableau et son action de contenu', async () => {
    routeParams.lessonSlug = 'lesson-17'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('17 — Identifier les sujets à fort potentiel')
    expect(wrapper.text()).toContain('Module 6 · Construire ta stratégie de contenu')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain(
      'Publier davantage ne signifie pas nécessairement attirer davantage de clients',
    )
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(5)
    expect(wrapper.text()).toContain('Question 4 — Quelle est une bonne méthode')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_content_ideas' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-16' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-18' },
    })
  })

  it('ouvre la dix-huitième leçon et son brief éditorial', async () => {
    routeParams.lessonSlug = 'lesson-18'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('18 — Préparer un contenu SEO de qualité')
    expect(wrapper.text()).toContain('Module 6 · Construire ta stratégie de contenu')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Un bon sujet ne suffit pas à produire un bon contenu')
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(11)
    expect(wrapper.text()).toContain('Question 4 — Quelle affirmation concernant la qualité')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.some((link) => link.text().includes("Voir dans mon plan d'action"))).toBe(false)
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-17' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-19' },
    })
  })

  it('ouvre la dix-neuvième leçon, son calendrier et la mise en pratique', async () => {
    routeParams.lessonSlug = 'lesson-19'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('19 — Construire une stratégie éditoriale cohérente')
    expect(wrapper.text()).toContain('Module 6 · Construire ta stratégie de contenu')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain(
      'Avoir de bonnes idées ne suffit pas si tu ne sais pas dans quel ordre avancer',
    )
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(5)
    expect(wrapper.text()).toContain('Question 4 — Que doit permettre de suivre')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({ name: 'seo-practice-06' })
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_editorial_plan' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-18' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-20' },
    })
  })

  it('ouvre la vingtième leçon, son tableau et l’action backlinks du plan', async () => {
    routeParams.lessonSlug = 'lesson-20'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      "20 — Comprendre l'autorité d'un site et le rôle des backlinks",
    )
    expect(wrapper.text()).toContain('Module 7 · Développer son autorité et ses backlinks')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Ton site peut être excellent sans être encore connu')
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(3)
    expect(wrapper.text()).toContain('Question 4 — Un site récent possède peu de backlinks')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_backlink_opportunities' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-19' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-21' },
    })
  })

  it('ouvre la vingt-et-unième leçon et son action backlinks', async () => {
    routeParams.lessonSlug = 'lesson-21'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '21 — Obtenir des backlinks pertinents et développer sa notoriété',
    )
    expect(wrapper.text()).toContain('Module 7 · Développer son autorité et ses backlinks')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Un bon contenu ne reçoit pas toujours des liens spontanément')
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(5)
    expect(wrapper.text()).toContain('Question 4 — Quel objectif est réaliste')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_backlink_opportunities' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-20' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-22' },
    })
  })

  it('ouvre la vingt-deuxième leçon et la mise en pratique du module 7', async () => {
    routeParams.lessonSlug = 'lesson-22'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '22 — Analyser ses backlinks et éviter les mauvaises pratiques',
    )
    expect(wrapper.text()).toContain('Module 7 · Développer son autorité et ses backlinks')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain(
      'Tous les liens vers ton site ne méritent pas une intervention',
    )
    expect(wrapper.get('table tbody').findAll('tr')).toHaveLength(4)
    expect(wrapper.text()).toContain('Question 4 — Un partenaire possède un lien')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({ name: 'seo-practice-07' })
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_backlink_opportunities' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-21' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-23' },
    })
  })

  it('ouvre la vingt-troisième leçon et l’action GEO du plan', async () => {
    routeParams.lessonSlug = 'lesson-23'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '23 — Comprendre comment ChatGPT, Gemini et les moteurs IA utilisent les sources',
    )
    expect(wrapper.text()).toContain('Module 8 · Être visible dans les moteurs IA (GEO)')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain(
      'Les internautes ne cherchent plus toujours une liste de liens',
    )
    expect(wrapper.text()).toContain("Question 4 — Ton entreprise n'apparaît pas")
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_geo_visibility' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-22' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-24' },
    })
  })

  it('ouvre la vingt-quatrième leçon et l’action GEO du plan', async () => {
    routeParams.lessonSlug = 'lesson-24'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '24 — Rendre son site accessible, compréhensible et citable par les IA',
    )
    expect(wrapper.text()).toContain('Module 8 · Être visible dans les moteurs IA (GEO)')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain(
      'Pour être cité, encore faut-il pouvoir être découvert et compris',
    )
    expect(wrapper.text()).toContain('Question 4 — Quelle amélioration peut rendre un contenu')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_geo_visibility' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-23' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-25' },
    })
  })

  it('ouvre la vingt-cinquième leçon et la mise en pratique GEO', async () => {
    routeParams.lessonSlug = 'lesson-25'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '25 — Mesurer sa visibilité et ses citations dans les moteurs IA',
    )
    expect(wrapper.text()).toContain('Module 8 · Être visible dans les moteurs IA (GEO)')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain("Être visible dans une réponse IA, c'est bien")
    expect(wrapper.findAll('table')).toHaveLength(2)
    expect(wrapper.text()).toContain('Question 4 — Quelle est une bonne démarche')
    expect(wrapper.text()).not.toContain('Question 4 : A.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({ name: 'seo-practice-08' })
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_geo_visibility' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-24' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-26' },
    })
  })

  it('ouvre la vingt-sixième leçon, ses tableaux et son action de suivi SEO', async () => {
    routeParams.lessonSlug = 'lesson-26'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe('26 — Mesurer les bons indicateurs SEO')
    expect(wrapper.text()).toContain('Module 9 · Mesurer et progresser')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Améliorer son référencement sans mesurer les résultats')
    expect(wrapper.findAll('table')).toHaveLength(3)
    expect(wrapper.text()).toContain(
      'Question 4 — Quel indicateur est particulièrement intéressant',
    )
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_record_baseline' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-25' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-27' },
    })
  })

  it('ouvre la vingt-septième leçon et ses tableaux de priorisation', async () => {
    routeParams.lessonSlug = 'lesson-27'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe(
      '27 — Identifier et prioriser les prochaines optimisations',
    )
    expect(wrapper.text()).toContain('Module 9 · Mesurer et progresser')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Savoir quoi améliorer est aussi important')
    expect(wrapper.findAll('table')).toHaveLength(2)
    expect(wrapper.text()).toContain('Question 4 — Une page possède de nombreuses impressions')
    expect(wrapper.text()).not.toContain('Question 4 : B.')

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_90_day_plan' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-26' },
    })
    expect(links.find((link) => link.text().includes('Leçon suivante'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-28' },
    })
  })

  it('ouvre la vingt-huitième leçon, la pratique et le plan sur 90 jours', async () => {
    routeParams.lessonSlug = 'lesson-28'
    const wrapper = await mountLesson()

    expect(wrapper.get('h1').text()).toBe("28 — Construire ton plan d'action SEO sur 90 jours")
    expect(wrapper.text()).toContain('Module 9 · Mesurer et progresser')
    expect(wrapper.text()).toContain('Lecture : environ 18 min')
    expect(wrapper.text()).toContain('Tu as appris à améliorer ton référencement')
    expect(wrapper.findAll('table')).toHaveLength(1)
    expect(wrapper.findAll('tbody tr')).toHaveLength(6)
    expect(wrapper.text()).toContain('Question 4 — À la fin des 90 jours')
    expect(wrapper.text()).not.toContain('Question 4 : B.')
    expect(wrapper.text()).toContain(
      "Félicitations, tu as terminé la formation SEO d'Altruisme Learn !",
    )

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(
      links.find((link) => link.text().includes('Faire la mise en pratique'))?.props('to'),
    ).toEqual({
      name: 'seo-practice-09',
    })
    expect(
      links.find((link) => link.text().includes("Voir dans mon plan d'action"))?.props('to'),
    ).toEqual({ name: 'learning-plan', query: { action: 'seo_90_day_plan' } })
    expect(links.find((link) => link.text().includes('Leçon précédente'))?.props('to')).toEqual({
      name: 'seo-lesson',
      params: { lessonSlug: 'lesson-27' },
    })
    expect(links.some((link) => link.text().includes('Leçon suivante'))).toBe(false)
  })
})
