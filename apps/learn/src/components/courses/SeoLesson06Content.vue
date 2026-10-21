<script setup lang="ts">
import SeoLesson06Quiz from './SeoLesson06Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Ton site apparaît sur Google. Mais est-ce qu'il attire les bonnes personnes ?</h2>
    <p>
      Imagine que tu possèdes un site internet depuis plusieurs mois. Tu as publié tes principales
      pages, commencé à travailler tes contenus et vérifié que Google pouvait correctement les
      indexer. Tout semble fonctionner : tes pages sont accessibles, aucune difficulté majeure ne
      semble empêcher leur exploration et certaines apparaissent déjà dans les résultats de
      recherche.
    </p>
    <p>
      Pourtant, les visiteurs restent peu nombreux. Tu reçois quelques demandes de contact, mais tu
      ne sais pas vraiment si elles proviennent de Google, de tes réseaux sociaux ou de personnes
      qui connaissaient déjà ton entreprise. Tu aimerais améliorer ton référencement, mais tu
      ignores quelles pages méritent ton attention et quelles recherches pourraient réellement
      t'apporter de nouveaux clients.
    </p>
    <p>
      Cette situation est fréquente. Lorsqu'on commence à travailler son SEO, on se concentre
      naturellement sur les optimisations à réaliser : modifier les titres, améliorer les textes,
      publier davantage de contenus ou corriger les problèmes techniques. Mais sans comprendre les
      performances actuelles de son site, il devient difficile de déterminer quelles actions sont
      réellement prioritaires.
    </p>
    <p>
      Dans les leçons précédentes, nous avons découvert Google Search Console et appris à vérifier
      l'indexation des pages importantes. Nous savons désormais qu'une page peut être correctement
      indexée sans obtenir de visibilité sur les recherches que nous souhaitons cibler.
    </p>
    <p>Il est maintenant temps de comprendre ce qui se passe après cette étape.</p>
    <p>
      <strong
        >Une page indexée possède la possibilité d'apparaître dans les résultats Google. Mais encore
        faut-il savoir sur quelles recherches elle apparaît, combien de personnes la découvrent et
        si ces apparitions génèrent des clics.</strong
      >
    </p>
    <p>
      C'est précisément ce que nous allons apprendre dans cette leçon. Nous allons utiliser les
      données de Google Search Console pour observer la visibilité de ton site, comprendre ses
      principaux indicateurs et identifier tes premières opportunités d'amélioration.
    </p>
    <p>
      L'objectif n'est pas de devenir expert en analyse de données. Il est de développer un premier
      réflexe essentiel : regarder les résultats avant de décider quoi modifier.
    </p>
    <h2>Comprendre les indicateurs de Google Search Console</h2>
    <p>
      Lorsque tu ouvres le rapport de performances de Google Search Console, plusieurs chiffres
      apparaissent. Ils permettent de comprendre comment ton site se comporte dans les résultats de
      recherche Google.
    </p>
    <p>
      Les quatre principaux indicateurs sont les clics, les impressions, le CTR moyen et la position
      moyenne. Nous les avons rapidement découverts lors de la présentation de l'outil. Nous allons
      maintenant apprendre à les interpréter.
    </p>
    <p>
      Ces informations sont complémentaires, mais elles ne racontent pas toutes la même chose.
      Certaines permettent d'observer la visibilité, d'autres les interactions des internautes ou la
      place occupée par tes résultats.
    </p>
    <p>
      Pour comprendre leur intérêt, nous allons reprendre l'exemple de notre photographe
      professionnel à Bordeaux.
    </p>
    <h3>Les clics : combien de personnes arrivent depuis Google ?</h3>
    <p>
      Le premier indicateur correspond au nombre de clics enregistrés depuis les résultats de
      recherche Google vers ton site, selon le périmètre du rapport.
    </p>
    <p>
      Imaginons que notre photographe possède une page consacrée aux prestations de mariage. Au
      cours des 28 derniers jours, Search Console indique que cette page a reçu 80 clics.
    </p>
    <p>
      Cela signifie que Google a enregistré 80 clics vers cette page depuis les résultats de
      recherche concernés.
    </p>
    <p>
      C'est une information intéressante, car elle permet de comprendre qu'une partie de la
      visibilité de cette page se transforme en visites potentielles.
    </p>
    <p>Mais ce chiffre ne suffit pas à déterminer si le référencement fonctionne correctement.</p>
    <p>
      Pour un site récent qui recevait auparavant très peu de visiteurs, 80 clics peuvent
      représenter une progression encourageante. Pour une entreprise bien établie dont les
      prestations sont très recherchées, ce volume pourrait sembler limité.
    </p>
    <p>
      Le nombre de clics doit donc toujours être interprété en fonction du contexte : l'ancienneté
      du site, les objectifs de l'activité, les recherches ciblées et l'évolution des performances
      dans le temps.
    </p>
    <p>
      Il faut également comprendre que
      <strong>les clics ne correspondent pas nécessairement à des clients</strong>. Une personne
      peut consulter ton site sans réaliser de demande de contact, tout comme elle peut découvrir
      plusieurs pages avant de prendre une décision.
    </p>
    <p>
      Search Console permet d'observer les clics provenant de Google, mais il ne mesure pas
      directement toutes les actions commerciales réalisées ensuite sur ton site.
    </p>
    <p>
      Pour analyser ces conversions, il faudrait utiliser un système de suivi adapté, comme Google
      Analytics correctement configuré ou un outil de mesure des demandes de contact.
    </p>
    <p>
      Dans cette formation, nous allons commencer par comprendre le trafic organique avant
      d'approfondir les indicateurs utiles à ton activité.
    </p>
    <h3>Les impressions : combien de fois ton site apparaît-il ?</h3>
    <p>Le deuxième indicateur correspond aux impressions.</p>
    <p>
      Une impression est comptabilisée lorsqu'un résultat de ton site apparaît dans Google, selon
      les règles propres au type de résultat concerné. Cela ne signifie pas toujours qu'une personne
      a consciemment lu ton titre ou remarqué ta page.
    </p>
    <p>
      Imaginons que notre photographe possède une page ayant généré 2 000 impressions au cours des
      28 derniers jours.
    </p>
    <p>
      Cela signifie que son résultat a été présenté dans les conditions de comptabilisation de
      Google à 2 000 reprises, sans que cela corresponde nécessairement à 2 000 personnes
      différentes.
    </p>
    <p>Les impressions permettent donc d'observer une forme de visibilité.</p>
    <p>
      Si une page commence à enregistrer des impressions, cela signifie qu'elle apparaît déjà sur
      certaines recherches. Même si elle génère encore peu de clics, cette information peut être
      intéressante.
    </p>
    <p>
      À l'inverse, une page qui n'enregistre aucune impression visible dans le rapport peut
      simplement être très récente, cibler des recherches peu fréquentes ou ne pas encore posséder
      de visibilité mesurable.
    </p>
    <p>
      L'absence d'impressions ne permet pas, à elle seule, de conclure qu'une page est mal optimisée
      ou qu'elle n'est pas indexée.
    </p>
    <p>
      C'est pourquoi il est important de rapprocher les impressions des autres indicateurs, plutôt
      que de les interpréter isolément.
    </p>
    <h3>Le CTR moyen : quelle proportion des impressions génère un clic ?</h3>
    <p>
      Le troisième indicateur est le CTR, pour <em>Click-Through Rate</em>, que l'on traduit en
      français par « taux de clics ».
    </p>
    <p>Il correspond au rapport entre le nombre de clics et le nombre d'impressions.</p>
    <p>
      Reprenons notre photographe. Imaginons que sa page consacrée aux mariages ait enregistré 2 000
      impressions et 80 clics pendant une période donnée.
    </p>
    <p>
      Son CTR moyen serait alors de 4 %, puisque les 80 clics représentent 4 % des 2 000
      impressions.
    </p>
    <p>
      Ce chiffre peut aider à comprendre dans quelle mesure les apparitions de ton site dans Google
      se transforment en clics.
    </p>
    <p>
      Mais attention à une idée reçue : il n'existe pas de CTR idéal applicable à toutes les pages.
    </p>
    <p>
      Le taux de clics dépend de nombreux éléments, notamment de la recherche effectuée, de la
      position occupée, du type de résultat affiché et des attentes des internautes.
    </p>
    <p>
      Une page qui apparaît fréquemment sur une recherche très générale peut obtenir un taux de
      clics relativement faible, tandis qu'une page qui apparaît sur le nom précis d'une entreprise
      peut enregistrer un CTR beaucoup plus élevé.
    </p>
    <p>
      Il serait donc trompeur de conclure qu'une page possédant un CTR de 3 % est nécessairement mal
      optimisée, ou qu'une autre affichant 10 % fonctionne parfaitement.
    </p>
    <p>
      <strong
        >Le CTR devient surtout intéressant lorsqu'on l'analyse dans son contexte, notamment pour
        une page et une recherche précises.</strong
      >
    </p>
    <p>
      Nous verrons dans quelques instants comment l'utiliser pour repérer certaines opportunités.
    </p>
    <h3>La position moyenne : où apparaissent tes résultats ?</h3>
    <p>Le quatrième indicateur correspond à la position moyenne.</p>
    <p>
      Il permet d'obtenir une indication sur la place occupée par tes résultats dans Google, en
      fonction des recherches et des impressions enregistrées.
    </p>
    <p>Imaginons que Search Console indique une position moyenne de 8,5 pour une page.</p>
    <p>
      Cela ne signifie pas que cette page apparaît systématiquement à la huitième ou à la neuvième
      place.
    </p>
    <p>
      Elle peut occuper différentes positions selon les recherches effectuées, la localisation des
      internautes, les appareils utilisés et le contexte des résultats.
    </p>
    <p>
      La position moyenne correspond à une moyenne calculée à partir des impressions enregistrées.
      Dans les données agrégées du site, Google utilise notamment la position du résultat le mieux
      placé appartenant à la propriété.
    </p>
    <p>Il faut donc éviter de considérer cet indicateur comme un classement unique et définitif.</p>
    <p>
      Prenons un exemple. Une page peut apparaître en troisième position sur une recherche très
      précise, mais en quinzième position sur une autre requête plus générale. Sa position moyenne
      reflétera ces différentes situations, sans décrire exactement ce que chaque internaute a vu.
    </p>
    <p>
      Cela explique pourquoi il est généralement plus intéressant d'observer les performances d'une
      page sur une recherche particulière que de se concentrer uniquement sur la position moyenne de
      tout un site.
    </p>
    <p>
      Une amélioration de la position moyenne peut constituer un signal encourageant, mais elle doit
      être étudiée avec les clics, les impressions et le contexte des recherches.
    </p>
    <h2>Comprendre les recherches qui rendent ton site visible</h2>
    <p>
      Maintenant que nous connaissons les principaux indicateurs, nous allons découvrir comment les
      utiliser pour comprendre les recherches qui font apparaître ton site.
    </p>
    <p>
      Dans Search Console, le rapport de performances possède notamment un tableau permettant de
      consulter différentes informations.
    </p>
    <p>L'un de ses onglets est consacré aux requêtes.</p>
    <p>
      Une requête correspond aux mots qu'une personne a utilisés pour effectuer une recherche sur
      Google.
    </p>
    <p>
      Pour notre photographe, nous pourrions retrouver des expressions comme « photographe portrait
      professionnel Bordeaux », « photographe mariage Gironde » ou « séance photo entreprise
      Bordeaux ».
    </p>
    <p>
      Ces informations sont particulièrement intéressantes, car elles permettent de découvrir
      comment les internautes trouvent réellement ton site.
    </p>
    <h3>Faire la différence entre les recherches de marque et les autres recherches</h3>
    <p>
      Lorsque tu analyses les requêtes, tu remarqueras peut-être que certaines contiennent le nom de
      ton entreprise.
    </p>
    <p>Imaginons que notre photographe possède une société appelée « Studio Horizon ».</p>
    <p>
      Une recherche comme « Studio Horizon Bordeaux » correspond à une requête de marque. La
      personne connaît probablement déjà le nom de l'entreprise ou cherche à la retrouver
      directement.
    </p>
    <p>
      Ce trafic peut être intéressant, mais il ne raconte pas exactement la même histoire qu'une
      recherche plus générale.
    </p>
    <p>
      Une personne qui recherche « photographe mariage Bordeaux » n'a pas nécessairement choisi un
      prestataire. Si elle découvre le Studio Horizon à cette occasion, le site peut contribuer à
      faire connaître l'entreprise auprès d'un nouveau prospect.
    </p>
    <p>
      Cette distinction est importante, car un site peut recevoir de nombreux clics grâce à son nom
      sans être particulièrement visible sur les recherches liées à ses prestations.
    </p>
    <p>
      Il serait donc dommage de regarder uniquement le nombre total de clics et de conclure que ton
      référencement est performant.
    </p>
    <p>
      <strong
        >L'un des intérêts du SEO est aussi de permettre à des personnes qui ne connaissent pas
        encore ton entreprise de découvrir ce que tu proposes.</strong
      >
    </p>
    <p>
      Pour commencer, observe simplement la part des requêtes qui correspondent à ton nom et celles
      qui concernent tes produits, tes services ou les problèmes de tes futurs clients.
    </p>
    <p>Nous approfondirons l'analyse de ces recherches dans le module consacré aux mots-clés.</p>
    <h3>Toutes les requêtes ne sont pas visibles</h3>
    <p>Une autre particularité mérite d'être connue.</p>
    <p>
      Google Search Console n'affiche pas nécessairement toutes les recherches ayant généré des
      impressions ou des clics vers ton site.
    </p>
    <p>
      Certaines requêtes peuvent être masquées pour des raisons de confidentialité. L'outil applique
      également des limites d'affichage et des règles d'agrégation qui peuvent expliquer des écarts
      entre les chiffres globaux et les lignes visibles dans les tableaux.
    </p>
    <p>
      Tu pourrais donc constater que le total des clics présenté dans le graphique ne correspond pas
      exactement à la somme des requêtes affichées.
    </p>
    <p>Ce n'est pas forcément une erreur de configuration.</p>
    <p>
      Les données de Search Console restent très utiles pour comprendre les tendances et identifier
      des opportunités, mais elles ne constituent pas un inventaire exhaustif de toutes les
      recherches effectuées par les internautes.
    </p>
    <h2>Identifier les pages qui génèrent déjà de la visibilité</h2>
    <p>
      Les requêtes permettent de comprendre ce que recherchent les internautes. Mais il est
      également important de savoir quelles pages de ton site bénéficient de cette visibilité.
    </p>
    <p>Pour cela, Google Search Console propose un onglet consacré aux pages.</p>
    <p>
      Il permet d'observer les clics et les impressions associés aux différentes URL, ainsi que
      d'autres indicateurs disponibles.
    </p>
    <p>
      Imaginons que notre photographe possède une dizaine de pages. Certaines présentent ses
      prestations, d'autres son portfolio et quelques-unes répondent à des questions fréquentes.
    </p>
    <p>
      En consultant le rapport, il découvre que sa page consacrée aux portraits professionnels
      reçoit régulièrement des clics, tandis que celle dédiée aux mariages bénéficie d'impressions,
      mais génère relativement peu de visites.
    </p>
    <p>
      Il remarque également qu'un article intitulé « Comment choisir son photographe de mariage ? »
      apparaît sur plusieurs recherches, sans obtenir beaucoup de clics.
    </p>
    <p>Ces trois pages ne se trouvent pas dans la même situation.</p>
    <p>
      La première semble déjà bénéficier d'une visibilité intéressante. La deuxième mérite peut-être
      une analyse plus précise des recherches sur lesquelles elle apparaît. La troisième pourrait
      représenter une opportunité de contenu à étudier.
    </p>
    <p>Ce premier constat ne nous indique pas encore ce qu'il faut modifier.</p>
    <p>En revanche, il nous permet de formuler des questions beaucoup plus précises.</p>
    <p>
      C'est une étape importante, car
      <strong
        >un bon diagnostic SEO ne commence pas par une liste de corrections. Il commence par
        l'identification des situations qui méritent d'être comprises.</strong
      >
    </p>
    <h3>Relier une page aux recherches qui la font apparaître</h3>
    <p>
      L'une des fonctionnalités les plus utiles du rapport de performances consiste à examiner les
      requêtes associées à une page précise.
    </p>
    <p>Imaginons que nous souhaitions analyser la page consacrée aux mariages.</p>
    <p>
      Dans le tableau des pages, nous pouvons sélectionner son URL afin de filtrer le rapport sur
      cette page.
    </p>
    <p>
      En ouvrant ensuite l'onglet des requêtes, nous découvrons certaines recherches pour lesquelles
      cette page est apparue.
    </p>
    <p>
      Nous pourrions constater qu'elle possède des impressions sur « photographe mariage Bordeaux »,
      mais également sur « reportage mariage naturel » ou « prix photographe mariage Gironde ».
    </p>
    <p>
      Ces expressions peuvent nous aider à comprendre comment Google associe notre contenu aux
      recherches des internautes.
    </p>
    <p>Elles permettent aussi de nous poser des questions intéressantes.</p>
    <p>
      Notre page répond-elle réellement à ces intentions ? Présente-t-elle suffisamment clairement
      ses prestations ? Certaines informations attendues par les visiteurs sont-elles absentes ?
    </p>
    <p>
      Nous n'allons pas encore modifier nos contenus. Nous allons d'abord apprendre à identifier les
      opportunités.
    </p>
    <h2>Repérer les premières opportunités SEO</h2>
    <p>
      Maintenant que tu sais consulter les clics, les impressions, les positions et les recherches
      associées à tes pages, nous allons apprendre à repérer les situations intéressantes.
    </p>
    <p>
      Il ne s'agit pas de chercher systématiquement les chiffres les plus élevés ou les plus
      faibles.
    </p>
    <p>
      Nous allons plutôt observer quelques combinaisons d'indicateurs qui peuvent nous aider à
      identifier des pistes d'amélioration.
    </p>
    <h3>Une page possède des impressions, mais peu de clics</h3>
    <p>
      Imaginons que notre page de photographie de mariage enregistre régulièrement des impressions,
      mais génère peu de clics.
    </p>
    <p>
      Cette situation peut être intéressante, car elle indique que la page apparaît déjà dans
      Google, sans attirer beaucoup de visiteurs depuis ces apparitions.
    </p>
    <p>Plusieurs explications sont possibles.</p>
    <p>
      La page peut apparaître relativement loin dans les résultats. Son titre peut également manquer
      de clarté ou ne pas correspondre suffisamment à l'intention de recherche.
    </p>
    <p>
      Il est aussi possible que Google propose d'autres résultats plus adaptés aux attentes des
      internautes, ou que la recherche permette d'obtenir une réponse directement sur la page de
      résultats.
    </p>
    <p>Il serait donc prématuré de conclure qu'il faut simplement réécrire le title.</p>
    <p>
      Pour commencer, il faudrait examiner les principales requêtes associées à cette page et
      observer les positions moyennes correspondantes.
    </p>
    <p>
      Si une page apparaît déjà à des positions relativement favorables sur des recherches
      pertinentes, mais reçoit peu de clics, l'analyse de sa présentation dans Google peut être une
      piste intéressante.
    </p>
    <p>
      En revanche, si elle apparaît principalement loin dans les résultats, son faible CTR pourrait
      s'expliquer en grande partie par son classement.
    </p>
    <p>
      <strong
        >Un CTR faible n'est pas un diagnostic. C'est un indicateur qui peut nous amener à poser les
        bonnes questions.</strong
      >
    </p>
    <h3>Une page apparaît sur des recherches pertinentes, mais reste peu visible</h3>
    <p>Prenons une autre situation.</p>
    <p>
      Notre photographe découvre qu'une de ses pages apparaît sur plusieurs recherches
      intéressantes, mais que ses positions moyennes restent relativement éloignées des premiers
      résultats.
    </p>
    <p>
      Cela signifie que Google associe déjà cette page à certaines requêtes, sans nécessairement la
      considérer comme l'une des réponses les plus pertinentes.
    </p>
    <p>Cette situation peut représenter une opportunité.</p>
    <p>
      Il pourrait être intéressant de comparer la page avec les résultats proposés par Google,
      d'identifier les informations manquantes ou de vérifier si son contenu correspond bien à
      l'intention de recherche.
    </p>
    <p>Mais il faut conserver une certaine prudence.</p>
    <p>
      Une position moyenne relativement faible n'indique pas automatiquement qu'une optimisation
      simple permettra de gagner plusieurs places.
    </p>
    <p>
      La concurrence, les attentes des internautes et la qualité des autres résultats peuvent rendre
      certaines recherches particulièrement difficiles.
    </p>
    <p>
      L'objectif n'est donc pas de promettre une progression, mais d'identifier une page qui mérite
      une analyse complémentaire.
    </p>
    <h3>Une page importante ne possède presque aucune visibilité</h3>
    <p>
      Il est également possible qu'une de tes pages stratégiques reçoive très peu d'impressions.
    </p>
    <p>
      Imaginons que notre photographe souhaite développer les prestations de mariage, mais que sa
      page dédiée ne possède quasiment aucune visibilité mesurable.
    </p>
    <p>
      La première question consiste à vérifier qu'elle est correctement indexée, comme nous l'avons
      appris dans la leçon précédente.
    </p>
    <p>Si elle ne l'est pas, nous disposons déjà d'une première piste.</p>
    <p>Si elle est indexée, la situation demande une autre réflexion.</p>
    <p>
      La page cible-t-elle réellement des recherches effectuées par les internautes ? Son contenu
      correspond-il à une intention identifiable ? Existe-t-il des recherches pertinentes sur
      lesquelles elle pourrait se positionner ?
    </p>
    <p>
      Il est également possible qu'elle soit récente ou que les requêtes ciblées possèdent un volume
      de recherche limité.
    </p>
    <p>L'absence de visibilité ne constitue donc pas nécessairement une erreur.</p>
    <p>
      Elle représente une situation à comprendre, notamment grâce au travail de recherche de
      mots-clés que nous réaliserons dans le prochain module.
    </p>
    <h3>Une page perd progressivement des clics</h3>
    <p>Enfin, il peut être intéressant d'observer l'évolution des performances dans le temps.</p>
    <p>
      Imaginons qu'une page recevait régulièrement des clics depuis Google, mais que ce volume
      diminue depuis plusieurs semaines.
    </p>
    <p>
      Il serait tentant d'en conclure que la page a perdu des positions ou qu'une modification
      récente a dégradé son référencement.
    </p>
    <p>Mais plusieurs explications sont possibles.</p>
    <p>
      La demande peut être saisonnière. Certaines recherches peuvent devenir moins fréquentes à
      certaines périodes de l'année. La concurrence peut également évoluer, tout comme les résultats
      proposés par Google.
    </p>
    <p>
      Une baisse peut aussi être liée à un problème technique, à une modification de contenu ou à un
      changement dans les recherches qui génèrent de la visibilité.
    </p>
    <p>
      Pour comprendre ce qui se passe, il faut comparer des périodes similaires et examiner les
      clics, les impressions, les requêtes et les pages concernées.
    </p>
    <p>
      Par exemple, une baisse des clics accompagnée d'une diminution des impressions ne raconte pas
      nécessairement la même histoire qu'une baisse des clics avec des impressions stables.
    </p>
    <p>
      Dans le premier cas, le site peut apparaître moins souvent. Dans le second, il peut continuer
      à apparaître, mais attirer proportionnellement moins de clics.
    </p>
    <p>
      Ces observations ne permettent pas d'identifier automatiquement une cause. Elles servent à
      orienter l'analyse.
    </p>
    <h2>Comparer les performances dans le temps</h2>
    <p>Les données SEO deviennent souvent plus utiles lorsqu'on observe leur évolution.</p>
    <p>
      Un chiffre isolé permet de décrire une situation à un moment donné. Une comparaison permet de
      comprendre si cette situation progresse, reste stable ou se dégrade.
    </p>
    <p>
      Google Search Console propose justement des filtres permettant de choisir une période et de la
      comparer à une autre.
    </p>
    <p>
      Par exemple, tu peux observer les performances des 28 derniers jours et les comparer aux 28
      jours précédents.
    </p>
    <p>
      Cette comparaison permet de repérer les pages dont les clics ou les impressions ont évolué.
    </p>
    <p>Il faut toutefois rester attentif au contexte.</p>
    <p>
      Imaginons que notre photographe réalise une grande partie de son activité pendant la saison
      des mariages. Certaines recherches peuvent naturellement devenir plus fréquentes au printemps
      ou à l'approche de l'été.
    </p>
    <p>
      Comparer uniquement un mois de forte demande à un mois plus calme pourrait donner une
      impression trompeuse de progression ou de régression.
    </p>
    <p>
      Dans certains cas, il sera donc intéressant de comparer des périodes équivalentes d'une année
      à l'autre.
    </p>
    <p>
      Il faut également tenir compte de la fraîcheur des données. Les informations les plus récentes
      de Search Console peuvent être provisoires et évoluer lorsque Google termine leur traitement.
    </p>
    <p>
      Pour commencer, je te recommande de travailler sur une période suffisamment longue pour
      obtenir une première vue d'ensemble, par exemple les 28 derniers jours lorsque ton site
      possède assez de données.
    </p>
    <p>
      <strong
        >L'important n'est pas de surveiller tes chiffres tous les matins. C'est de comprendre les
        tendances et de savoir quand une évolution mérite ton attention.</strong
      >
    </p>
    <p>
      Nous approfondirons cette logique de suivi dans le dernier module, lorsque nous construirons
      ton plan d'action SEO sur 90 jours.
    </p>
    <h2>Démonstration — Identifions les premières opportunités d'un site</h2>
    <p>Passons maintenant à une démonstration concrète dans Google Search Console.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et imaginer qu'il souhaite
      comprendre pourquoi certaines de ses pages ne génèrent pas autant de visites qu'il l'espérait.
    </p>
    <p>
      Pour cette démonstration, nous utiliserons des chiffres fictifs destinés à illustrer les
      différentes étapes de l'analyse.
    </p>
    <p>
      L'objectif n'est pas de réaliser un audit complet, mais d'apprendre à observer les données et
      à formuler les premières hypothèses.
    </p>
    <h3>Étape 1 — Ouvre le rapport de performances</h3>
    <p>
      Connecte-toi à
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
        >Google Search Console</a
      >, puis sélectionne la propriété correspondant à ton site.
    </p>
    <p>
      Dans la navigation, ouvre le rapport consacré aux performances dans les résultats de recherche
      Google.
    </p>
    <p>
      Commence par sélectionner une période de 28 jours, en privilégiant des données suffisamment
      complètes.
    </p>
    <p>
      Au-dessus du graphique, active les principaux indicateurs : clics, impressions, CTR moyen et
      position moyenne.
    </p>
    <p>
      Observe les valeurs affichées, puis regarde l'évolution des clics et des impressions sur la
      période.
    </p>
    <p>
      Pour notre exemple, imaginons que le site du photographe possède 4 200 impressions et 110
      clics au cours des 28 derniers jours.
    </p>
    <p>
      Ces chiffres nous donnent une première indication sur sa visibilité, mais ils ne permettent
      pas encore de déterminer quelles pages sont intéressantes ni sur quelles recherches le site
      apparaît.
    </p>
    <p>Nous allons donc approfondir l'analyse.</p>
    <h3>Étape 2 — Découvre les recherches qui génèrent de la visibilité</h3>
    <p>Sous le graphique, ouvre l'onglet « Requêtes ».</p>
    <p>
      Tu peux alors consulter les expressions pour lesquelles Google a enregistré des impressions et
      des clics vers ton site, dans les limites des données affichées.
    </p>
    <p>
      Pour notre photographe, imaginons que nous retrouvions les requêtes « Studio Horizon Bordeaux
      », « photographe portrait professionnel Bordeaux » et « photographe mariage Gironde ».
    </p>
    <p>
      La première correspond au nom de l'entreprise. Les deux autres concernent directement ses
      prestations.
    </p>
    <p>
      Cette observation nous permet de comprendre que le site est déjà visible sur certaines
      recherches commerciales, mais qu'une partie des clics peut également provenir de personnes
      connaissant déjà l'entreprise.
    </p>
    <p>
      Nous pourrions alors noter une première question : quelles prestations attirent déjà des
      personnes qui recherchent un professionnel sans connaître son nom ?
    </p>
    <h3>Étape 3 — Identifie les pages qui attirent des visiteurs</h3>
    <p>Ouvre maintenant l'onglet « Pages ».</p>
    <p>Imaginons que nous découvrions les résultats suivants :</p>
    <p>
      La page consacrée aux portraits professionnels a enregistré 700 impressions et 56 clics. Son
      CTR est donc de 8 %.
    </p>
    <p>
      La page consacrée aux mariages a enregistré 2 000 impressions et 40 clics, soit un CTR de 2 %.
    </p>
    <p>
      Enfin, un guide consacré au choix d'un photographe de mariage a obtenu 1 500 impressions et 15
      clics, soit un CTR de 1 %.
    </p>
    <p>Ces chiffres sont fictifs et servent uniquement à illustrer notre raisonnement.</p>
    <p>
      À première vue, la page consacrée aux portraits semble bénéficier d'un taux de clics plus
      élevé.
    </p>
    <p>
      La page consacrée aux mariages possède davantage d'impressions, mais proportionnellement moins
      de clics.
    </p>
    <p>
      Le guide, quant à lui, possède déjà une certaine visibilité sans générer beaucoup de visites.
    </p>
    <p>
      Mais attention : nous ne pouvons pas comparer directement ces CTR pour décider quelle page est
      la mieux optimisée. Elles peuvent apparaître sur des recherches et des positions très
      différentes.
    </p>
    <p>
      Ces données nous permettent simplement de sélectionner les pages qui méritent d'être étudiées
      plus précisément.
    </p>
    <h3>Étape 4 — Analyse une page et ses requêtes</h3>
    <p>Sélectionnons maintenant la page consacrée à la photographie de mariage.</p>
    <p>
      Lorsque nous cliquons sur son URL dans le rapport, Search Console applique un filtre
      correspondant à cette page.
    </p>
    <p>
      Nous pouvons ensuite ouvrir l'onglet « Requêtes » pour découvrir certaines recherches qui lui
      sont associées.
    </p>
    <p>
      Imaginons que la page apparaisse sur « photographe mariage Bordeaux », avec une position
      moyenne de 11,4, mais aussi sur « reportage mariage naturel Bordeaux », avec une position
      moyenne différente.
    </p>
    <p>Ces informations nous permettent de mieux comprendre la situation.</p>
    <p>
      La page apparaît déjà sur des recherches pertinentes pour l'activité, mais elle n'occupe pas
      nécessairement des positions très favorables sur les requêtes qui nous intéressent.
    </p>
    <p>
      Nous pourrions donc décider d'examiner son contenu et de le comparer aux résultats présents
      sur ces recherches.
    </p>
    <p>
      Nous ne savons pas encore quelles modifications seraient pertinentes. Mais nous avons
      identifié une piste d'analyse concrète.
    </p>
    <h3>Étape 5 — Compare avec la période précédente</h3>
    <p>Revenons maintenant au rapport de performances et utilisons le filtre de dates.</p>
    <p>Choisissons une comparaison entre les 28 derniers jours et les 28 jours précédents.</p>
    <p>Observons les variations du nombre de clics et d'impressions.</p>
    <p>
      Imaginons que les impressions de la page consacrée aux mariages aient augmenté, tandis que les
      clics seraient restés relativement stables.
    </p>
    <p>
      Cette évolution pourrait nous amener à examiner les requêtes sur lesquelles la page apparaît
      désormais et les positions correspondantes.
    </p>
    <p>
      Il est possible qu'elle commence à apparaître sur de nouvelles recherches, mais à des
      positions encore peu favorables.
    </p>
    <p>Ce n'est qu'une hypothèse, qui nécessiterait une analyse plus précise.</p>
    <p>
      À ce stade, notre objectif reste d'apprendre à interpréter les données avec prudence, sans
      transformer chaque évolution en problème à corriger.
    </p>
    <h3>Étape 6 — Note les premières opportunités</h3>
    <p>Pour terminer, nous allons conserver trois observations.</p>
    <p>
      La première concerne la page de photographie de mariage, qui possède une visibilité sur des
      recherches pertinentes, mais dont les positions et le contenu méritent une analyse
      complémentaire.
    </p>
    <p>
      La deuxième concerne le guide consacré au choix d'un photographe, qui obtient des impressions
      et pourrait bénéficier d'un examen de ses requêtes et de sa pertinence.
    </p>
    <p>
      La troisième concerne les recherches de marque, qui représentent potentiellement une partie de
      la visibilité actuelle du site et qu'il faudra distinguer des recherches liées directement aux
      prestations.
    </p>
    <p>Ces observations ne constituent pas encore des décisions d'optimisation.</p>
    <p>
      Elles nous permettront d'orienter nos prochaines analyses, notamment lorsque nous
      travaillerons sur les mots-clés et les contenus.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous venons de découvrir comment utiliser le rapport de performances pour comprendre la
      visibilité d'un site, identifier les principales pages qui attirent des visiteurs et examiner
      les recherches associées à ces pages.
    </p>
    <p>
      Nous avons également appris à comparer deux périodes et à observer plusieurs indicateurs sans
      tirer de conclusions trop rapides.
    </p>
    <p>Surtout, nous avons compris qu'une opportunité SEO ne se résume pas à un chiffre.</p>
    <p>
      <strong
        >Une page qui génère peu de clics n'est pas nécessairement une mauvaise page. Une page qui
        possède beaucoup d'impressions n'est pas forcément une bonne opportunité. Tout dépend des
        recherches concernées, des objectifs du site et de la situation observée.</strong
      >
    </p>
    <p>
      C'est cette manière de raisonner qui va nous permettre de construire progressivement une
      méthode d'analyse.
    </p>
    <h2>À toi de jouer — Identifie tes premières opportunités SEO</h2>
    <p>
      Maintenant que tu sais interpréter les principales données de Google Search Console, il est
      temps d'appliquer cette méthode à ton propre site.
    </p>
    <p>
      L'objectif est simple : identifier jusqu'à trois premières observations utiles pour comprendre
      ta visibilité et orienter tes prochaines actions.
    </p>
    <p>
      Tu n'as pas besoin de posséder beaucoup de trafic pour réaliser cet exercice. Si ton site est
      récent et que Search Console dispose de peu de données, nous adapterons simplement l'analyse.
    </p>
    <p><strong>Durée estimée : 15 minutes.</strong></p>
    <h3>Étape 1 — Observe les performances générales</h3>
    <p>
      Connecte-toi à Google Search Console et ouvre le rapport de performances dans les résultats de
      recherche.
    </p>
    <p>
      Sélectionne les 28 derniers jours, ou une période plus longue si ton site possède très peu de
      données.
    </p>
    <p>Observe les clics, les impressions, le CTR moyen et la position moyenne.</p>
    <p>
      L'objectif n'est pas encore de déterminer si ces chiffres sont bons ou mauvais. Essaie
      simplement de comprendre ce qu'ils indiquent sur la visibilité actuelle de ton site.
    </p>
    <p>
      Si tu disposes de suffisamment de données, tu peux également comparer cette période à la
      précédente.
    </p>
    <h3>Étape 2 — Identifie les principales pages visibles</h3>
    <p>
      Ouvre l'onglet « Pages » et observe celles qui génèrent le plus de clics ou d'impressions.
    </p>
    <p>Retrouves-tu certaines des pages stratégiques que tu as identifiées dans le module 1 ?</p>
    <p>
      Certaines possèdent-elles déjà de la visibilité ? D'autres semblent-elles très peu présentes
      dans les résultats Google ?
    </p>
    <p>
      Sélectionne une page importante pour ton activité, puis examine les requêtes qui lui sont
      associées.
    </p>
    <p>
      Essaie de comprendre si ces recherches correspondent réellement aux personnes que tu souhaites
      attirer.
    </p>
    <h3>Étape 3 — Relève jusqu'à trois observations</h3>
    <p>
      À partir de tes premières analyses, conserve jusqu'à trois constats qui te semblent
      intéressants.
    </p>
    <p>
      Tu pourrais notamment identifier une page qui possède des impressions sur une recherche
      pertinente, mais obtient peu de clics ; une page importante qui semble manquer de visibilité ;
      ou un contenu qui attire des visiteurs grâce à des requêtes auxquelles tu n'avais pas pensé.
    </p>
    <p>
      Pour chaque observation, essaie d'expliquer en une ou deux phrases pourquoi elle mérite ton
      attention.
    </p>
    <p>Ne cherche pas encore à corriger les problèmes.</p>
    <p>
      Nous apprendrons à sélectionner les bons mots-clés et à améliorer les pages dans les prochains
      modules.
    </p>
    <h3>Étape 4 — Conserve ton premier diagnostic</h3>
    <p>
      Note tes observations dans ton document de travail ou dans la checklist d'audit SEO fournie
      avec la formation, lorsqu'elle est disponible.
    </p>
    <p>
      Si tu n'as pas encore suffisamment de données dans Search Console, conserve simplement cette
      information. Tu peux également noter les pages que tu souhaites analyser lorsque les premiers
      résultats seront disponibles.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> disposer de jusqu'à trois premières observations sur
      les performances de ton site, ou avoir identifié les données manquantes nécessaires pour
      poursuivre ton analyse.
    </p>
    <p>
      Dans « Mon plan d'action », tu peux maintenant marquer l'action « Identifier mes premières
      opportunités SEO » comme terminée.
    </p>
    <p>
      Tu n'as pas besoin d'avoir trouvé trois problèmes ni d'avoir réalisé des optimisations.
      L'objectif consiste à apprendre à observer les données, à distinguer les situations
      intéressantes et à formuler les premières questions utiles pour la suite.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Google Search Console permet de comprendre comment ton site se comporte dans les résultats de
      recherche Google grâce à plusieurs indicateurs complémentaires.
    </p>
    <p>
      Les clics permettent d'observer les interactions depuis les résultats, tandis que les
      impressions donnent une indication sur la fréquence à laquelle ton site apparaît. Le CTR moyen
      mesure la proportion d'impressions ayant généré un clic, et la position moyenne fournit une
      indication sur le classement de tes résultats.
    </p>
    <p>
      Ces chiffres ne doivent jamais être interprétés isolément. Leur intérêt dépend notamment des
      recherches concernées, du type de page, de la concurrence et des objectifs de ton activité.
    </p>
    <p>
      Le rapport de performances permet également d'identifier les requêtes qui font apparaître ton
      site et les pages qui génèrent de la visibilité. En examinant ces deux dimensions ensemble, tu
      peux commencer à comprendre quelles parties de ton site fonctionnent déjà et lesquelles
      méritent une analyse complémentaire.
    </p>
    <p>
      Nous avons également découvert que comparer les performances dans le temps permet de mieux
      comprendre leur évolution, à condition de tenir compte du contexte, de la saisonnalité et des
      limites des données disponibles.
    </p>
    <p>
      Enfin, il est important de distinguer les observations des conclusions. Une page qui possède
      beaucoup d'impressions et peu de clics ne nécessite pas automatiquement un nouveau title. Une
      page peu visible n'est pas nécessairement mal optimisée. Et une baisse de trafic ne prouve pas
      qu'une modification récente est responsable.
    </p>
    <p>
      <strong
        >Un bon diagnostic SEO ne consiste pas à chercher des problèmes partout. Il consiste à
        comprendre ce que les données révèlent, puis à identifier les questions qui méritent d'être
        approfondies.</strong
      >
    </p>
    <p>
      Tu disposes désormais des premières compétences nécessaires pour observer ton référencement et
      commencer à travailler avec méthode.
    </p>
    <SeoLesson06Quiz />
    <h2>Félicitations, tu as terminé le module 2 !</h2>
    <p>
      Tu viens de franchir une étape importante dans ton apprentissage du référencement naturel.
    </p>
    <p>
      Dans le premier module, tu as découvert les fondamentaux du SEO et identifié les pages les
      plus importantes de ton site. Dans ce deuxième module, tu as appris à utiliser Google Search
      Console pour commencer à analyser leur situation.
    </p>
    <p>
      Tu sais désormais connecter ton site à Search Console, vérifier si tes pages sont indexées et
      interpréter les principaux indicateurs de performances.
    </p>
    <p>
      Surtout, tu comprends maintenant qu'il existe une différence entre avoir une page en ligne,
      être indexé sur Google et obtenir une visibilité réellement intéressante pour ton activité.
    </p>
    <p>
      Grâce aux vérifications réalisées, tu disposes de tes premières observations et de quelques
      pistes d'analyse. Tu n'as pas encore besoin de posséder toutes les réponses : l'essentiel est
      d'avoir commencé à comprendre ton référencement à partir de données concrètes.
    </p>
    <p>
      Mais pour passer de l'observation à l'optimisation, il nous manque encore un élément
      essentiel.
    </p>
    <p>Nous devons comprendre quelles recherches méritent réellement notre attention.</p>
    <h2>Dans le prochain module</h2>
    <p>
      Tu sais maintenant quelles pages de ton site sont indexées et comment observer leur visibilité
      sur Google. Mais comment déterminer les recherches sur lesquelles tu devrais chercher à
      apparaître ?
    </p>
    <p>
      Faut-il privilégier les expressions les plus populaires ? Les recherches les plus précises ?
      Comment découvrir les mots utilisés par tes futurs clients et savoir quels contenus leur
      proposer ?
    </p>
    <p>
      C'est ce que nous allons apprendre dans le prochain module, consacré à la recherche de
      mots-clés.
    </p>
    <p>
      Nous découvrirons comment identifier les intentions de recherche, trouver des expressions
      pertinentes sans utiliser d'outils payants et associer les bons mots-clés aux bonnes pages.
    </p>
    <p>
      Tu pourras alors utiliser les premières observations réalisées dans Search Console pour
      commencer à construire une stratégie adaptée à ton activité.
    </p>
    <p><strong>Prochain module : Trouver les bons mots-clés.</strong></p>
    <p><strong>Prochaine leçon : Comprendre les intentions de recherche.</strong></p>
  </article>
</template>

<style scoped>
.seo-lesson-content {
  color: #46504d;
  font-size: 1rem;
  line-height: 1.85;
}

.seo-lesson-content h2 {
  margin-top: 3.5rem;
  margin-bottom: 1.25rem;
  color: #222826;
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.3;
}

.seo-lesson-content h3 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #222826;
  font-size: 1.25rem;
  font-weight: 650;
  line-height: 1.4;
}

.seo-lesson-content h4 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #222826;
  font-size: 1.1rem;
  font-weight: 650;
  line-height: 1.4;
}

.seo-lesson-content p {
  margin-top: 1.125rem;
}

.seo-lesson-content ul {
  margin-top: 1.25rem;
  margin-left: 1.4rem;
  list-style: disc;
}

.seo-lesson-content li + li {
  margin-top: 0.625rem;
}

.seo-lesson-content code {
  border-radius: 0.25rem;
  background: #eef3ef;
  padding: 0.1rem 0.3rem;
  color: #315960;
  font-size: 0.92em;
}

.seo-lesson-content strong {
  color: #222826;
  font-weight: 650;
}

.seo-lesson-content a {
  color: #315960;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.seo-lesson-content a:focus-visible {
  outline: 2px solid #315960;
  outline-offset: 3px;
}
</style>
