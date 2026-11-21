<script setup lang="ts">
defineProps<{ practiceMinutes: number; publicEdition?: boolean }>()
</script>

<template>
  <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
    Préparer un calendrier de cinq contenus à publier ou améliorer
  </h2>
  <section class="mt-10" aria-labelledby="practice-intro">
    <h3 id="practice-intro" class="text-xl font-semibold text-ink sm:text-2xl">
      Transformer tes idées en une stratégie éditoriale concrète
    </h3>
    <p class="mt-4">
      Tu viens de terminer le module consacré à la stratégie de contenu. Tu sais désormais
      identifier des sujets pertinents, préparer un contenu SEO de qualité et organiser tes
      publications autour des besoins de tes futurs visiteurs.
    </p>
    <p class="mt-4">
      Mais avoir de bonnes idées ne suffit pas toujours à faire progresser son site. Sans
      organisation, il est facile de commencer plusieurs articles, de repousser certaines
      optimisations ou de publier des contenus sans véritable cohérence avec les objectifs de
      son activité.
    </p>
    <p class="mt-4">
      C&#x27;est précisément l&#x27;intérêt d&#x27;un calendrier éditorial : transformer tes
      idées en actions planifiées, tout en conservant une vision claire des sujets que tu
      souhaites travailler.
    </p>
    <p class="mt-4">
      L&#x27;objectif de cet exercice est simple : préparer un calendrier de cinq contenus à
      publier ou à améliorer, en privilégiant les sujets qui présentent un intérêt réel pour
      ton activité.
    </p>
    <p class="mt-4">
      Tu n&#x27;as pas besoin de rédiger ces cinq contenus aujourd&#x27;hui. Nous allons
      simplement définir ce que tu souhaites travailler, pourquoi et dans quel ordre.
    </p>
    <p class="mt-4">
      <strong class="font-semibold text-ink"
        >Durée estimée : environ {{ practiceMinutes }} minutes.</strong
      >
    </p>
  </section>
  <section class="mt-10" aria-labelledby="practice-step-1">
    <h3 id="practice-step-1" class="text-xl font-semibold text-ink">
      Étape 1 — Reprends tes opportunités de contenu
    </h3>
    <p class="mt-4">
      Commence par ouvrir le tableau de mots-clés que tu as constitué dans le module 3, puis
      les observations réalisées pendant tes premières analyses dans Google Search Console.
    </p>
    <p class="mt-4">
      Tu y trouveras peut-être des recherches pertinentes auxquelles ton site ne répond pas
      encore, mais également des pages existantes qui pourraient bénéficier d&#x27;un contenu
      plus complet.
    </p>
    <p class="mt-4">
      Essaie de distinguer les nouveaux sujets que tu pourrais traiter des contenus déjà
      publiés qui méritent d&#x27;être améliorés.
    </p>
    <p class="mt-4">
      Imaginons que tu proposes des prestations de conseil SEO. Tu pourrais envisager de
      publier un guide répondant à une question fréquente, tout en améliorant une page de
      prestation qui manque d&#x27;informations concrètes.
    </p>
    <p class="mt-4">
      Ces deux actions peuvent présenter un intérêt, même si l&#x27;une consiste à créer un
      contenu et l&#x27;autre à optimiser l&#x27;existant.
    </p>
    <p class="mt-4">
      L&#x27;objectif est de constituer une première sélection d&#x27;idées cohérentes avec
      les besoins de tes futurs clients.
    </p>
  </section>
  <section class="mt-10" aria-labelledby="practice-step-2">
    <h3 id="practice-step-2" class="text-xl font-semibold text-ink">
      Étape 2 — Sélectionne cinq contenus pertinents
    </h3>
    <p class="mt-4">
      Parmi les idées identifiées, choisis cinq contenus que tu souhaites travailler en
      priorité.
    </p>
    <p class="mt-4">
      Tu peux mélanger de nouvelles publications et des optimisations de pages existantes. Il
      n&#x27;est pas nécessaire de créer cinq articles supplémentaires si certaines pages de
      ton site méritent déjà d&#x27;être améliorées.
    </p>
    <p class="mt-4">
      Pour chaque contenu, essaie de définir son sujet principal et l&#x27;intention de
      recherche à laquelle il doit répondre.
    </p>
    <p class="mt-4">
      Demande-toi également si une page existante ne traite pas déjà ce besoin. Lorsque deux
      sujets sont particulièrement proches, il peut être préférable de les regrouper ou
      d&#x27;enrichir un contenu plutôt que de multiplier les pages similaires.
    </p>
    <p class="mt-4">
      Privilégie une sélection réaliste, adaptée aux objectifs et aux ressources de ton
      activité.
    </p>
  </section>
  <section class="mt-10" aria-labelledby="practice-step-3">
    <h3 id="practice-step-3" class="text-xl font-semibold text-ink">
      Étape 3 — Prépare ton calendrier éditorial
    </h3>
    <p class="mt-4">Ouvre maintenant le calendrier éditorial fourni avec la formation.</p>
    <p class="mt-4">
      Pour chacun des cinq contenus sélectionnés, renseigne un titre provisoire,
      l&#x27;intention de recherche principale et le type d&#x27;action envisagé : création ou
      optimisation.
    </p>
    <p class="mt-4">
      Tu peux également indiquer la page concernée lorsqu&#x27;elle existe déjà, ainsi que son
      niveau de priorité.
    </p>
    <p class="mt-4">Choisis ensuite une échéance réaliste pour chaque contenu.</p>
    <p class="mt-4">
      Si tu travailles seul sur ton activité, tu n&#x27;as probablement pas besoin de prévoir
      plusieurs publications par semaine. Un calendrier moins ambitieux, mais réellement
      applicable, sera souvent plus utile qu&#x27;un planning impossible à respecter.
    </p>
    <p class="mt-4">
      L&#x27;objectif n&#x27;est pas de publier à une fréquence particulière pour satisfaire
      Google. Il est de disposer d&#x27;une organisation qui te permette de produire des
      contenus utiles avec régularité, selon tes moyens.
    </p>
  </section>
  <section class="mt-10" aria-labelledby="practice-step-4">
    <h3 id="practice-step-4" class="text-xl font-semibold text-ink">
      Étape 4 — Vérifie la cohérence de ton programme
    </h3>
    <p class="mt-4">
      Avant de terminer, prends quelques minutes pour relire les cinq contenus sélectionnés.
    </p>
    <p class="mt-4">
      Répondent-ils à des besoins réellement différents ? Leur sujet est-il suffisamment
      précis ? Contribuent-ils aux objectifs que tu souhaites atteindre avec ton site ?
    </p>
    <p class="mt-4">
      Vérifie également que tu pourras produire ou améliorer ces contenus avec les
      informations, les connaissances et le temps dont tu disposes.
    </p>
    <p class="mt-4">
      Si un sujet nécessite une expertise particulière, des données supplémentaires ou une
      recherche approfondie, conserve cette information dans ton calendrier.
    </p>
    <p class="mt-4">
      Tu peux enfin identifier le premier contenu que tu souhaites travailler et noter la
      prochaine étape concrète : préparer son plan, compléter une recherche ou commencer sa
      rédaction.
    </p>
  </section>
</template>
