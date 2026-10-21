<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { getSeoPracticeMinutes } from '@/data/seoProgram'
const practiceMinutes = getSeoPracticeMinutes(9)
</script>

<template>
  <BaseContainer>
    <div class="mx-auto max-w-3xl">
      <RouterLink
        to="/formation"
        class="text-sm font-medium text-petrol-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        >← Formation SEO</RouterLink
      >
      <header
        class="mt-8 rounded-3xl border border-petrol/15 bg-[linear-gradient(148deg,#faf7f0_0%,#eef3ef_60%,#dce9e5_100%)] p-6 sm:p-10"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6970]">
          Altruisme Learn · Formation SEO
        </p>
        <h1 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Mise en pratique — Finaliser son plan d&#x27;action SEO sur 90 jours
        </h1>
        <p class="mt-4 text-sm font-medium text-petrol-dark">Module 9 · Mesurer et progresser</p>
        <div class="mt-5 flex flex-wrap gap-2 text-sm text-ink-soft">
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5"
            >environ {{ practiceMinutes }} minutes</span
          >
          <span class="rounded-full border border-petrol/15 bg-white/70 px-3 py-1.5"
            >Exercice pratique</span
          >
        </div>
        <div class="mt-7 border-t border-petrol/15 pt-6">
          <h2 class="text-xs font-semibold uppercase tracking-[0.12em] text-[#3d6970]">
            Objectif pédagogique
          </h2>
          <p class="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
            Rassembler les observations et les priorités identifiées pendant la formation,
            construire un plan d&#x27;action SEO réaliste sur 90 jours et définir les indicateurs
            permettant d&#x27;évaluer les progrès.
          </p>
        </div>
      </header>
      <article class="mt-12 text-base leading-8 text-ink-soft">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Finaliser ton plan d&#x27;action SEO sur 90 jours
        </h2>
        <section class="mt-10" aria-labelledby="practice-intro">
          <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
            Transformer tes apprentissages en une stratégie durable
          </h3>
          <p class="mt-4">
            Tu arrives maintenant à la fin de cette formation. Au fil des modules, tu as découvert
            les fondamentaux du référencement naturel, appris à analyser ton site, identifié les
            recherches importantes pour ton activité et réalisé tes premières optimisations.
          </p>
          <p class="mt-4">
            Tu as également exploré les principaux aspects techniques du SEO, construit une
            stratégie de contenu, découvert le rôle des backlinks et commencé à observer la
            visibilité de ton activité dans les moteurs de recherche utilisant l&#x27;intelligence
            artificielle.
          </p>
          <p class="mt-4">
            Mais connaître ces différents leviers ne signifie pas qu&#x27;il faut tous les
            travailler immédiatement.
          </p>
          <p class="mt-4">
            Si tu essaies de corriger chaque détail technique, de publier plusieurs articles, de
            développer tes backlinks et de suivre quotidiennement toutes tes performances, tu
            risques de disperser tes efforts.
          </p>
          <p class="mt-4">
            C&#x27;est pourquoi nous allons terminer cette formation en construisant un plan
            d&#x27;action simple et réaliste.
          </p>
          <p class="mt-4">
            L&#x27;objectif de cet exercice est de rassembler tes principales observations,
            sélectionner les actions les plus utiles et organiser ton travail sur les 90 prochains
            jours.
          </p>
          <p class="mt-4">
            Tu n&#x27;as pas besoin d&#x27;un outil de gestion de projet complexe. Le modèle de plan
            d&#x27;action fourni avec la formation et les ressources que tu as déjà complétées
            suffiront.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
            >
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-1">
          <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
            Étape 1 — Rassemble tes principaux constats
          </h3>
          <p class="mt-4">
            Commence par reprendre les documents que tu as constitués pendant la formation.
          </p>
          <p class="mt-4">
            Tu disposes notamment d&#x27;une checklist d&#x27;audit SEO, d&#x27;un tableau de
            mots-clés, d&#x27;un modèle d&#x27;optimisation de page et d&#x27;un calendrier
            éditorial.
          </p>
          <p class="mt-4">
            Tu peux également consulter les observations réalisées pendant les modules consacrés au
            SEO technique, aux backlinks et à la visibilité dans les moteurs IA.
          </p>
          <p class="mt-4">
            Parcours ces différentes ressources et essaie d&#x27;identifier les situations les plus
            importantes pour ton activité.
          </p>
          <p class="mt-4">
            Certaines pages stratégiques ne sont peut-être pas correctement indexées. D&#x27;autres
            pourraient bénéficier de contenus plus précis ou de liens internes supplémentaires. Tu
            as également pu repérer des sujets intéressants à développer ou des difficultés
            techniques qui méritent une investigation.
          </p>
          <p class="mt-4">
            L&#x27;objectif n&#x27;est pas de réunir tous les détails observés pendant la formation,
            mais de conserver les éléments qui pourraient avoir un impact réel sur la visibilité de
            ton site et sur les besoins de tes visiteurs.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-2">
          <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
            Étape 2 — Sélectionne tes actions prioritaires
          </h3>
          <p class="mt-4">
            À partir de ces observations, choisis entre trois et cinq actions que tu souhaites
            réaliser au cours des prochains mois.
          </p>
          <p class="mt-4">
            Pour effectuer ton choix, demande-toi quelles améliorations sont les plus importantes
            pour ton activité, lesquelles semblent accessibles avec tes moyens et si certaines
            doivent être réalisées avant les autres.
          </p>
          <p class="mt-4">
            Par exemple, si une page essentielle ne peut pas être correctement explorée par Google,
            comprendre et corriger cette situation pourrait être plus urgent que publier un nouvel
            article.
          </p>
          <p class="mt-4">
            À l&#x27;inverse, si ton site ne présente aucun problème technique majeur, tu pourrais
            concentrer tes efforts sur l&#x27;amélioration de pages stratégiques ou la création de
            contenus correspondant à des recherches pertinentes.
          </p>
          <p class="mt-4">
            Essaie également d&#x27;estimer le travail nécessaire pour chaque action.
          </p>
          <p class="mt-4">
            Une modification de title peut demander peu de temps, tandis que la rédaction d&#x27;un
            guide complet ou la résolution d&#x27;un problème technique complexe peut nécessiter
            davantage de préparation.
          </p>
          <p class="mt-4">
            Le meilleur plan d&#x27;action n&#x27;est pas celui qui contient le plus de tâches.
            C&#x27;est celui qui te permet d&#x27;avancer sur les bonnes priorités.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-3">
          <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
            Étape 3 — Organise tes 90 prochains jours
          </h3>
          <p class="mt-4">
            Ouvre maintenant le modèle de plan d&#x27;action SEO fourni avec la formation.
          </p>
          <p class="mt-4">
            Nous allons répartir tes actions sur une période de trois mois, en conservant une
            progression adaptée à ta situation.
          </p>
          <p class="mt-4">
            Pendant les 30 premiers jours, tu peux privilégier les actions prioritaires et les
            problèmes les plus importants. Il peut s&#x27;agir de vérifier une difficulté
            d&#x27;indexation, de corriger un frein technique ou de terminer l&#x27;optimisation
            d&#x27;une page stratégique.
          </p>
          <p class="mt-4">
            Entre le 31e et le 60e jour, tu peux poursuivre les optimisations engagées et commencer
            à développer de nouveaux contenus si cela correspond à tes objectifs.
          </p>
          <p class="mt-4">
            Enfin, entre le 61e et le 90e jour, tu pourras continuer les actions prévues, examiner
            les premiers résultats disponibles et préparer les prochaines améliorations.
          </p>
          <p class="mt-4">
            Cette répartition constitue simplement une méthode d&#x27;organisation. Elle ne signifie
            pas que les problèmes techniques doivent toujours être traités le premier mois ni que
            les contenus doivent obligatoirement être publiés le deuxième.
          </p>
          <p class="mt-4">
            Adapte le planning à tes priorités, à ton activité et au temps dont tu disposes.
          </p>
          <p class="mt-4">
            L&#x27;essentiel est d&#x27;associer chaque action à une période réaliste et à un
            résultat attendu suffisamment clair pour savoir quand elle sera terminée.
          </p>
        </section>
        <section class="mt-10" aria-labelledby="practice-step-4">
          <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
            Étape 4 — Définis les indicateurs et les prochains rendez-vous
          </h3>
          <p class="mt-4">
            Pour terminer, nous allons choisir comment suivre l&#x27;évolution de ton référencement.
          </p>
          <p class="mt-4">
            Reprends Google Search Console et identifie les indicateurs les plus utiles pour ton
            activité.
          </p>
          <p class="mt-4">
            Tu peux notamment suivre les clics provenant de Google, les impressions de tes pages
            stratégiques et les recherches sur lesquelles elles apparaissent.
          </p>
          <p class="mt-4">
            Si tu disposes d&#x27;un outil de mesure adapté, tu peux également observer les demandes
            de contact, les inscriptions ou les ventes issues de tes différents canaux
            d&#x27;acquisition.
          </p>
          <p class="mt-4">
            Selon les actions retenues, d&#x27;autres informations peuvent être utiles. Un problème
            technique pourra nécessiter une vérification dans Search Console ou PageSpeed Insights,
            tandis qu&#x27;une action de netlinking pourra être suivie à travers les mentions et
            liens réellement obtenus.
          </p>
          <p class="mt-4">
            Pour la visibilité dans les moteurs IA, conserve les citations et les données
            disponibles lorsqu&#x27;elles peuvent être observées de manière suffisamment fiable,
            sans les considérer comme une mesure exhaustive de ta présence.
          </p>
          <p class="mt-4">
            Choisis ensuite quelques indicateurs et note leur situation actuelle lorsque les données
            existent. Tu disposeras ainsi d&#x27;un point de départ.
          </p>
          <p class="mt-4">
            Enfin, prévois un rendez-vous régulier avec ton plan d&#x27;action, par exemple une fois
            par mois.
          </p>
          <p class="mt-4">
            L&#x27;objectif sera de vérifier les actions réalisées, d&#x27;observer les principales
            évolutions et d&#x27;ajuster les prochaines priorités.
          </p>
          <p class="mt-4">
            Garde à l&#x27;esprit que le SEO demande du temps. Certaines modifications peuvent être
            prises en compte rapidement, tandis que d&#x27;autres nécessitent plusieurs semaines ou
            davantage avant de produire des résultats observables.
          </p>
          <p class="mt-4">
            Une absence de progression immédiate ne signifie pas nécessairement que ton travail est
            inutile. Il faudra examiner les données dans leur contexte, en tenant notamment compte
            de la saisonnalité, de la concurrence et des éventuelles variations des recherches.
          </p>
        </section>
        <section
          class="mt-12 rounded-2xl border border-petrol/15 bg-white p-6 sm:p-8"
          aria-labelledby="practice-finished"
        >
          <h3 id="practice-finished" class="text-xl font-semibold text-ink sm:text-2xl">
            Exercice terminé !
          </h3>
          <p class="mt-4">
            Tu disposes maintenant d&#x27;un plan d&#x27;action SEO sur 90 jours, construit à partir
            de tes propres analyses et des objectifs de ton activité.
          </p>
          <p class="mt-4">
            Tu as sélectionné tes actions prioritaires, défini un calendrier réaliste et identifié
            les indicateurs qui te permettront de suivre les principaux résultats.
          </p>
          <p class="mt-4">
            Ce document n&#x27;est pas une promesse de progression ni une stratégie figée.
          </p>
          <p class="mt-4">
            Il constitue une feuille de route que tu pourras adapter à mesure que ton site évoluera
            et que de nouvelles informations deviendront disponibles.
          </p>
          <p class="mt-4">
            Dans « Mon plan d&#x27;action », vérifie que les actions importantes sont à jour et que
            tes prochaines échéances sont clairement identifiées.
          </p>
          <p class="mt-4">
            Tu pourras désormais reprendre ce travail chaque mois pour observer tes progrès, ajuster
            tes priorités et continuer à développer ton référencement.
          </p>
          <p class="mt-4">
            Tu viens de terminer cette formation avec bien plus que des connaissances théoriques :
            tu disposes d&#x27;une méthode, d&#x27;un premier diagnostic et d&#x27;un plan concret
            pour améliorer durablement la visibilité de ton site.
          </p>
          <p class="mt-4">
            <strong class="font-semibold text-ink"
              >Félicitations, tu as terminé la formation SEO d&#x27;Altruisme Learn !</strong
            >
          </p>
          <div class="mt-6 border-t border-petrol/15 pt-5">
            <RouterLink
              :to="{ name: 'learning-plan' }"
              class="learn-button-primary inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
              >Voir les actions dans mon plan →</RouterLink
            >
          </div>
        </section>
      </article>
    </div>
  </BaseContainer>
</template>
