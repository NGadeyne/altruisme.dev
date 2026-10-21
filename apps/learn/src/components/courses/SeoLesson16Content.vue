<script setup lang="ts">
import SeoLesson16Quiz from './SeoLesson16Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Ton site est accessible. Mais est-il agréable à utiliser ?</h2>
    <p>
      Imagine que tu possèdes un site internet sur lequel tu présentes tes principales prestations.
      Tu as travaillé tes contenus, amélioré tes titres et vérifié que Google pouvait correctement
      explorer tes pages. Ton site possède une architecture cohérente, ses redirections fonctionnent
      et aucune instruction technique ne semble empêcher l'indexation de tes contenus importants.
      Pourtant, lorsque tu l'ouvres sur ton téléphone, l'expérience est loin d'être idéale.
    </p>
    <p>
      La page met plusieurs secondes à afficher ses premières informations. Une grande photographie
      apparaît progressivement, certains éléments se déplacent pendant le chargement et le bouton
      permettant de consulter tes prestations semble mettre du temps à réagir. Sur ton ordinateur,
      tout fonctionne plutôt bien. Mais sur un smartphone, particulièrement avec une connexion
      mobile moins rapide, la navigation devient beaucoup moins agréable.
    </p>
    <p>
      Reprenons l'exemple de notre photographe professionnel à Bordeaux. Son site présente de
      nombreuses photographies de mariages, des galeries de réalisations et plusieurs formulaires
      permettant aux futurs clients de prendre contact. Ces éléments sont importants pour son
      activité, puisqu'ils permettent de découvrir son travail et de comprendre son approche.
    </p>
    <p>
      Mais si les photographies sont trop lourdes, si plusieurs scripts ralentissent l'affichage ou
      si les éléments de la page se déplacent pendant leur chargement, les visiteurs peuvent
      rencontrer des difficultés avant même d'avoir découvert ses prestations.
    </p>
    <p>
      Notre photographe pourrait alors être tenté de modifier immédiatement son site. Mais comment
      savoir ce qui le ralentit réellement ? Faut-il réduire toutes ses images ? Supprimer certaines
      fonctionnalités ? Changer d'hébergement ? Et surtout, comment distinguer une amélioration
      utile d'une optimisation technique qui n'apportera presque rien à ses visiteurs ?
    </p>
    <p>
      C'est précisément ce que nous allons apprendre dans cette leçon. Nous allons découvrir comment
      évaluer l'expérience de chargement d'un site, comprendre les principaux indicateurs des Core
      Web Vitals et utiliser PageSpeed Insights pour identifier des pistes d'amélioration.
    </p>
    <p>
      <strong
        >L'objectif n'est pas d'obtenir un score parfait sur un outil. Il est de rendre ton site
        plus rapide, plus stable et plus agréable à utiliser, notamment sur mobile.</strong
      >
    </p>
    <p>
      Dans les trois leçons précédentes, nous avons étudié les problèmes d'exploration,
      l'organisation des URL et les principaux fichiers techniques. Nous allons maintenant aborder
      une autre dimension du SEO technique : la performance et l'expérience utilisateur.
    </p>
    <h2>Pourquoi les performances comptent-elles pour ton site ?</h2>
    <p>
      Lorsqu'un internaute consulte une page web, il s'attend généralement à pouvoir accéder
      rapidement à son contenu. Il souhaite lire les informations, consulter les photographies ou
      utiliser les fonctionnalités proposées sans rencontrer de difficultés particulières.
    </p>
    <p>
      Une page lente peut compliquer cette expérience. Si le contenu principal met trop de temps à
      apparaître, le visiteur peut avoir l'impression que le site ne fonctionne pas correctement. Si
      un formulaire réagit avec un délai important, il peut se demander si sa demande a été prise en
      compte.
    </p>
    <p>
      Les performances ne concernent donc pas uniquement la vitesse de chargement. Elles influencent
      également la manière dont les visiteurs perçoivent et utilisent un site.
    </p>
    <p>
      Prenons l'exemple de notre photographe. Une personne recherche un professionnel pour son
      mariage et découvre sa page dans Google. Elle clique sur le résultat, mais doit attendre
      plusieurs secondes avant de pouvoir consulter les premières photographies. Lorsqu'elle essaie
      d'ouvrir une galerie, le site réagit difficilement.
    </p>
    <p>
      Même si les prestations sont parfaitement adaptées à son besoin, cette expérience peut
      compliquer sa découverte du site.
    </p>
    <p>
      À l'inverse, une page qui affiche rapidement ses informations, réagit correctement aux
      interactions et conserve une présentation stable facilite la consultation des contenus.
    </p>
    <p>
      Cela peut également contribuer à la qualité du parcours commercial. Une personne qui accède
      facilement aux prestations et au formulaire de contact dispose de meilleures conditions pour
      poursuivre sa démarche.
    </p>
    <p>
      Mais attention à une distinction importante :
      <strong
        >un site plus rapide ne génère pas automatiquement davantage de clients, et une amélioration
        des performances ne garantit pas une progression dans Google</strong
      >.
    </p>
    <p>
      Les performances représentent une dimension de l'expérience utilisateur parmi d'autres. Elles
      doivent être améliorées en fonction des difficultés réellement rencontrées, sans négliger la
      qualité des contenus et la pertinence des pages.
    </p>
    <h3>Les performances ont-elles un impact sur le référencement ?</h3>
    <p>
      Google utilise notamment les Core Web Vitals dans ses systèmes de classement. Ces indicateurs
      contribuent à évaluer certains aspects de l'expérience proposée aux utilisateurs.
    </p>
    <p>
      Mais il serait trompeur d'en conclure qu'un site possédant d'excellentes performances sera
      nécessairement mieux positionné qu'un site légèrement plus lent.
    </p>
    <p>
      Google cherche avant tout à proposer des résultats pertinents et utiles pour les recherches
      effectuées. Une page qui répond précisément à une question peut rester intéressante même si
      ses performances ne sont pas parfaites.
    </p>
    <p>
      De même, une page extrêmement rapide, mais incapable de répondre à l'intention de recherche,
      ne devient pas automatiquement un excellent résultat SEO.
    </p>
    <p>
      Il n'existe donc pas de règle selon laquelle un score PageSpeed de 100 permettrait d'obtenir
      une première position.
    </p>
    <p>
      L'objectif est plutôt de proposer une expérience globalement satisfaisante, en améliorant les
      difficultés susceptibles de gêner les visiteurs.
    </p>
    <p>
      Pour commencer, nous allons apprendre à mesurer trois dimensions : la vitesse d'affichage du
      contenu principal, la réactivité de la page et sa stabilité visuelle.
    </p>
    <h2>Pourquoi l'expérience mobile mérite une attention particulière</h2>
    <p>
      Aujourd'hui, un site internet doit pouvoir être consulté correctement depuis des appareils
      très différents. Certains visiteurs utilisent un ordinateur doté d'une connexion rapide,
      tandis que d'autres naviguent depuis un smartphone, parfois avec une connexion instable.
    </p>
    <p>
      Or, un site qui fonctionne parfaitement sur un ordinateur peut présenter des difficultés
      importantes sur mobile.
    </p>
    <p>
      Les images peuvent occuper une place trop importante, les menus devenir difficiles à utiliser
      et certains éléments interactifs manquer d'espace. Les performances peuvent également varier
      en fonction de la puissance de l'appareil et de la qualité de la connexion.
    </p>
    <p>
      C'est pourquoi il est essentiel de tester son site autrement qu'en l'ouvrant uniquement sur
      son ordinateur de travail.
    </p>
    <p>
      Google utilise par ailleurs principalement la version mobile du contenu pour l'indexation et
      le classement. Cette approche est appelée <em>mobile-first indexing</em>, ou indexation
      orientée mobile.
    </p>
    <p>
      Cela signifie notamment qu'il faut s'assurer que les informations importantes sont disponibles
      et accessibles dans la version mobile du site.
    </p>
    <p>
      Imaginons que notre photographe possède une page présentant trois prestations sur ordinateur,
      mais que la version mobile masque complètement l'une d'elles. Si cette information n'est pas
      accessible à Google sur mobile, cela peut compliquer la compréhension du contenu.
    </p>
    <p>
      Il faut donc veiller à conserver des informations essentielles équivalentes entre les
      différentes versions du site.
    </p>
    <h3>Comprendre le responsive design</h3>
    <p>Tu as probablement déjà rencontré le terme <em>responsive design</em>.</p>
    <p>
      Il désigne une approche de conception permettant à l'interface de s'adapter aux différentes
      tailles d'écran.
    </p>
    <p>
      Par exemple, une page qui présente trois colonnes de prestations sur ordinateur peut les
      afficher les unes sous les autres sur smartphone.
    </p>
    <p>Le contenu reste accessible, mais sa présentation évolue selon l'espace disponible.</p>
    <p>
      Google recommande généralement cette approche, notamment parce qu'elle permet d'utiliser la
      même URL et le même contenu HTML sur différents appareils, tout en adaptant l'affichage.
    </p>
    <p>Mais un site responsive n'est pas automatiquement rapide.</p>
    <p>
      Il peut parfaitement adapter correctement sa mise en page tout en chargeant des images trop
      lourdes ou des scripts inutiles.
    </p>
    <p>Il faut donc distinguer l'adaptation de l'interface et les performances techniques.</p>
    <p>
      Pour évaluer l'expérience mobile, commence par ouvrir ton site sur un véritable smartphone.
      Vérifie que les textes sont lisibles, que les boutons sont facilement utilisables et que les
      éléments importants ne débordent pas de l'écran.
    </p>
    <p>
      Observe également si les informations sont accessibles sans interaction compliquée et si les
      formulaires fonctionnent correctement.
    </p>
    <p>
      Ces vérifications simples permettent parfois d'identifier des difficultés qui ne sont pas
      immédiatement visibles dans les rapports automatisés.
    </p>
    <h2>Comprendre les trois Core Web Vitals</h2>
    <p>
      Les <em>Core Web Vitals</em>, que l'on peut traduire par « signaux Web essentiels »,
      correspondent à trois indicateurs permettant d'évaluer certains aspects de l'expérience réelle
      des visiteurs.
    </p>
    <p>
      Ils mesurent des dimensions différentes : le chargement du contenu principal, la réactivité
      aux interactions et la stabilité de la présentation.
    </p>
    <p>Ces trois indicateurs sont le LCP, l'INP et le CLS.</p>
    <p>
      Ils ne décrivent pas à eux seuls toute la qualité d'un site. Mais ils permettent d'identifier
      des difficultés concrètes et de mieux comprendre ce que vivent les utilisateurs.
    </p>
    <h3>Le LCP : quand le contenu principal apparaît-il ?</h3>
    <p>
      Le premier indicateur est le <em>Largest Contentful Paint</em>, généralement abrégé en LCP.
    </p>
    <p>
      Il mesure le temps nécessaire pour afficher le plus grand élément de contenu visible dans la
      fenêtre d'affichage au moment de la mesure.
    </p>
    <p>
      Il peut s'agir d'une grande image, d'une photographie de couverture ou d'un bloc de texte
      important.
    </p>
    <p>
      Imaginons que notre photographe possède une grande photographie en haut de sa page d'accueil.
      Cette image occupe une partie importante de l'écran et constitue l'un des premiers éléments
      que le visiteur souhaite découvrir.
    </p>
    <p>
      Si elle met longtemps à apparaître, la page peut donner une impression de lenteur, même si
      certains éléments plus petits sont déjà visibles.
    </p>
    <p>Le LCP permet donc d'évaluer un aspect important de la vitesse de chargement perçue.</p>
    <p>
      Pour offrir une bonne expérience, Google recommande généralement un LCP inférieur ou égal à
      2,5 secondes, évalué sur les données appropriées de visites réelles.
    </p>
    <p>
      Au-delà de 4 secondes, le résultat est considéré comme médiocre selon les seuils habituels.
    </p>
    <p>
      Mais il ne faut pas interpréter ces valeurs comme des garanties de classement. Elles servent
      avant tout à identifier des performances satisfaisantes ou des situations qui méritent une
      amélioration.
    </p>
    <h3>L'INP : la page réagit-elle rapidement ?</h3>
    <p>Le deuxième indicateur est l'<em>Interaction to Next Paint</em>, ou INP.</p>
    <p>Il mesure la réactivité d'une page aux interactions de l'utilisateur pendant sa visite.</p>
    <p>
      Cela concerne notamment les clics, les appuis sur un écran tactile et certaines interactions
      au clavier.
    </p>
    <p>
      Imaginons qu'un visiteur consulte notre site de photographie et clique sur un bouton
      permettant d'ouvrir une galerie.
    </p>
    <p>Le navigateur doit traiter cette interaction et afficher le résultat correspondant.</p>
    <p>
      Si plusieurs scripts monopolisent les ressources de l'appareil, la réponse peut être retardée.
    </p>
    <p>Le visiteur peut alors avoir l'impression que le bouton ne fonctionne pas.</p>
    <p>
      L'INP permet d'évaluer ce type de situation. Il ne mesure pas simplement le temps de
      chargement initial : il s'intéresse aux interactions pendant l'utilisation de la page.
    </p>
    <p>
      Un INP inférieur ou égal à 200 millisecondes est généralement considéré comme bon. Au-delà de
      500 millisecondes, les performances sont considérées comme médiocres selon les seuils
      habituels.
    </p>
    <p>
      Ces valeurs permettent de comprendre si une page réagit suffisamment rapidement aux actions
      des visiteurs.
    </p>
    <p>
      Il faut toutefois savoir qu'un test automatisé ne reproduit pas nécessairement toutes les
      interactions réalisées par de vrais utilisateurs.
    </p>
    <p>
      C'est pourquoi les données réelles sont particulièrement importantes pour interpréter cet
      indicateur.
    </p>
    <h3>Le CLS : la page reste-t-elle stable ?</h3>
    <p>Le troisième indicateur est le <em>Cumulative Layout Shift</em>, ou CLS.</p>
    <p>
      Il mesure les déplacements inattendus d'éléments visibles pendant l'utilisation d'une page.
    </p>
    <p>
      Imaginons que notre photographe possède un bouton « Demander un devis » sous une galerie de
      photographies.
    </p>
    <p>
      Un visiteur commence à parcourir la page et souhaite cliquer sur ce bouton. Mais une image
      située au-dessus termine son chargement et pousse soudainement le bouton plus bas.
    </p>
    <p>
      Le visiteur risque alors de cliquer au mauvais endroit ou de perdre le repère qu'il utilisait.
    </p>
    <p>C'est précisément le type de problème que le CLS permet d'observer.</p>
    <p>
      Contrairement au LCP et à l'INP, le CLS n'est pas exprimé en secondes ou en millisecondes. Il
      utilise un score sans unité, calculé à partir de l'importance des déplacements inattendus.
    </p>
    <p>
      Un CLS inférieur ou égal à 0,1 est généralement considéré comme bon. Au-delà de 0,25, le
      résultat est considéré comme médiocre.
    </p>
    <p>
      Un CLS élevé peut notamment provenir d'images dont l'espace n'a pas été réservé, de contenus
      ajoutés dynamiquement ou de certaines polices qui modifient la mise en page pendant leur
      chargement.
    </p>
    <p>
      L'objectif est donc de permettre au navigateur de conserver une présentation suffisamment
      stable pendant l'affichage.
    </p>
    <h3>Quels résultats faut-il viser ?</h3>
    <p>Voici les principaux seuils utilisés pour interpréter les Core Web Vitals :</p>
    <div class="mt-6 overflow-x-auto rounded-xl border border-petrol/15">
      <table class="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead class="bg-mist text-ink">
          <tr>
            <th scope="col" class="px-4 py-3 font-semibold">Indicateur</th>
            <th scope="col" class="px-4 py-3 font-semibold">Bon</th>
            <th scope="col" class="px-4 py-3 font-semibold">À améliorer</th>
            <th scope="col" class="px-4 py-3 font-semibold">Médiocre</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-petrol/10">
          <tr>
            <td class="px-4 py-3">LCP</td>
            <td class="px-4 py-3">2,5 s ou moins</td>
            <td class="px-4 py-3">Plus de 2,5 à 4 s</td>
            <td class="px-4 py-3">Plus de 4 s</td>
          </tr>
          <tr>
            <td class="px-4 py-3">INP</td>
            <td class="px-4 py-3">200 ms ou moins</td>
            <td class="px-4 py-3">Plus de 200 à 500 ms</td>
            <td class="px-4 py-3">Plus de 500 ms</td>
          </tr>
          <tr>
            <td class="px-4 py-3">CLS</td>
            <td class="px-4 py-3">0,1 ou moins</td>
            <td class="px-4 py-3">Plus de 0,1 à 0,25</td>
            <td class="px-4 py-3">Plus de 0,25</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Ces seuils sont généralement évalués à partir du 75e percentile des visites, séparément selon
      le type d'appareil.
    </p>
    <p>
      Cela signifie que l'on cherche à obtenir une expérience satisfaisante pour une large majorité
      des visiteurs, plutôt qu'un excellent résultat uniquement dans des conditions idéales.
    </p>
    <p>Mais encore faut-il disposer de données permettant de mesurer ces indicateurs.</p>
    <p>C'est là qu'intervient PageSpeed Insights.</p>
    <h2>Découvrir PageSpeed Insights</h2>
    <p>
      PageSpeed Insights est un outil gratuit proposé par Google pour analyser les performances
      d'une page web.
    </p>
    <p>
      Il est accessible depuis l'adresse
      <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer"
        >pagespeed.web.dev</a
      >.
    </p>
    <p>Pour l'utiliser, il suffit de renseigner l'URL d'une page, puis de lancer l'analyse.</p>
    <p>
      L'outil présente des informations concernant la version mobile et la version ordinateur, avec
      différents indicateurs et recommandations.
    </p>
    <p>
      C'est un excellent point de départ pour un entrepreneur qui souhaite comprendre les
      principales difficultés de performances de son site.
    </p>
    <p>
      Mais il existe une distinction essentielle pour interpréter correctement les résultats :
      <strong
        >PageSpeed Insights peut présenter à la fois des données provenant de visiteurs réels et des
        résultats issus d'un test automatisé</strong
      >.
    </p>
    <p>Ces informations ne doivent pas être confondues.</p>
    <h3>Les données réelles : comprendre l'expérience des visiteurs</h3>
    <p>
      Lorsque suffisamment d'informations sont disponibles, PageSpeed Insights peut présenter des
      données issues du <em>Chrome User Experience Report</em>, souvent abrégé en CrUX.
    </p>
    <p>
      Ces données proviennent d'expériences de navigation réelles collectées selon les conditions
      d'éligibilité de Chrome.
    </p>
    <p>
      Elles couvrent généralement une période glissante de 28 jours et permettent notamment
      d'observer le LCP, l'INP et le CLS.
    </p>
    <p>
      Elles sont particulièrement intéressantes, car elles reflètent les conditions rencontrées par
      de véritables utilisateurs.
    </p>
    <p>
      Imaginons que notre photographe possède une page consultée depuis différents appareils, avec
      des connexions et des performances variables.
    </p>
    <p>
      Les données réelles permettent de mieux comprendre cette diversité que ne le ferait un seul
      test effectué sur un ordinateur très puissant.
    </p>
    <p>Mais il existe une limite importante.</p>
    <p>
      Si ton site est récent ou possède peu de trafic, PageSpeed Insights peut ne pas disposer de
      suffisamment de données pour présenter des résultats réels sur une URL précise.
    </p>
    <p>
      L'outil peut alors afficher des informations agrégées au niveau du domaine d'origine, lorsque
      celles-ci existent, ou ne présenter aucune donnée réelle exploitable.
    </p>
    <p>
      Cette absence d'informations ne signifie pas que ton site est lent, ni qu'il rencontre un
      problème SEO.
    </p>
    <p>
      Elle signifie simplement que les données disponibles ne permettent pas de produire cette
      mesure.
    </p>
    <h3>Les données de laboratoire : analyser une page dans des conditions simulées</h3>
    <p>
      PageSpeed Insights propose également des résultats issus de Lighthouse, un outil d'audit
      automatisé.
    </p>
    <p>
      Ces tests sont réalisés dans des conditions contrôlées, avec une configuration d'appareil et
      de réseau simulée.
    </p>
    <p>Ils permettent d'examiner la page et de produire différentes recommandations techniques.</p>
    <p>
      Tu peux notamment y retrouver un score de performances sur 100, des mesures de chargement et
      des informations sur les ressources qui pourraient ralentir l'affichage.
    </p>
    <p>Ces résultats sont particulièrement utiles pour identifier des pistes d'amélioration.</p>
    <p>Mais ils ne représentent pas nécessairement l'expérience de tous les visiteurs.</p>
    <p>
      Un test simulé peut produire des résultats différents selon les conditions d'exécution, les
      ressources disponibles ou les services chargés par la page.
    </p>
    <p>
      C'est pourquoi il ne faut pas considérer un score isolé comme une mesure absolue de la qualité
      d'un site.
    </p>
    <p>
      De plus, certains indicateurs présents dans Lighthouse, comme le
      <em>Total Blocking Time</em> (TBT), servent au diagnostic technique sans être eux-mêmes des
      Core Web Vitals.
    </p>
    <p>
      Le TBT peut notamment aider à repérer des tâches susceptibles de ralentir l'interactivité,
      mais il ne remplace pas une mesure réelle de l'INP.
    </p>
    <p>
      <strong
        >Pour comprendre une page, utilise les données réelles lorsqu'elles sont disponibles et les
        tests Lighthouse pour identifier les causes possibles de ses difficultés.</strong
      >
    </p>
    <p>Ces deux approches se complètent.</p>
    <h2>Pourquoi il ne faut pas chercher systématiquement 100 sur PageSpeed</h2>
    <p>
      Lorsqu'on découvre PageSpeed Insights, le score de performances est souvent l'élément qui
      attire immédiatement l'attention.
    </p>
    <p>
      Il peut être tentant de considérer qu'un score de 100 représente le seul objectif acceptable.
    </p>
    <p>Mais cette logique peut rapidement conduire à de mauvaises décisions.</p>
    <p>
      Imaginons que notre photographe possède un site mobile avec un score de 85. Les contenus
      principaux s'affichent correctement, les visiteurs peuvent consulter les réalisations et les
      formulaires fonctionnent sans difficulté notable.
    </p>
    <p>
      L'outil propose pourtant plusieurs recommandations permettant d'améliorer encore les
      performances.
    </p>
    <p>
      Certaines peuvent être utiles. D'autres nécessitent éventuellement un travail technique
      important pour un gain relativement limité.
    </p>
    <p>
      Notre photographe pourrait consacrer plusieurs jours à optimiser ces détails, alors que sa
      page principale présente encore des informations commerciales incomplètes.
    </p>
    <p>Dans ce cas, le temps investi ne correspond pas nécessairement à ses priorités.</p>
    <p>
      À l'inverse, si PageSpeed Insights révèle un problème important affectant réellement le
      chargement ou la stabilité d'une page stratégique, il peut être pertinent de le traiter avant
      de poursuivre certaines optimisations secondaires.
    </p>
    <p>Le bon objectif consiste donc à comprendre ce que les chiffres signifient.</p>
    <p>
      Une amélioration du score n'est pas une fin en soi. Elle doit correspondre, autant que
      possible, à une meilleure expérience pour les visiteurs.
    </p>
    <p>Il faut également distinguer les différentes catégories d'audit affichées par Lighthouse.</p>
    <p>
      Un bon résultat dans la catégorie « SEO » ne constitue pas un audit complet du référencement.
      Il vérifie seulement certains critères techniques automatisables. Il ne remplace pas l'analyse
      des intentions de recherche, des contenus, de l'indexation ou des backlinks.
    </p>
    <p>
      <strong
        >PageSpeed Insights est un outil de diagnostic. Ce n'est ni une note générale de ton site ni
        une promesse de positionnement.</strong
      >
    </p>
    <h2>Les principales causes de lenteur sur un site</h2>
    <p>
      Maintenant que nous savons interpréter les indicateurs, nous allons découvrir les problèmes
      les plus fréquents et les améliorations qui peuvent être envisagées.
    </p>
    <p>
      Tu n'auras pas nécessairement la possibilité de les corriger toi-même. Certaines optimisations
      sont accessibles depuis les paramètres de ton CMS, tandis que d'autres demandent une
      intervention technique.
    </p>
    <p>
      L'objectif est surtout de comprendre les problèmes et de savoir quelles actions peuvent être
      pertinentes.
    </p>
    <h3>Les images trop lourdes ou mal chargées</h3>
    <p>Les images représentent souvent une part importante du poids d'une page.</p>
    <p>
      C'est particulièrement vrai pour le site de notre photographe, dont les contenus reposent
      largement sur des galeries de réalisations.
    </p>
    <p>
      Imaginons que sa page d'accueil utilise une photographie de couverture de plusieurs
      mégaoctets, alors qu'une version plus légère permettrait de conserver une qualité visuelle
      satisfaisante.
    </p>
    <p>
      Cette image peut nécessiter davantage de temps pour être téléchargée, notamment sur mobile.
    </p>
    <p>
      Une première amélioration pourrait consister à réduire ses dimensions lorsqu'elles dépassent
      largement les besoins réels d'affichage, à utiliser une compression adaptée ou à choisir un
      format moderne comme WebP ou AVIF.
    </p>
    <p>
      Il faut toutefois conserver une qualité suffisante, particulièrement pour un professionnel
      dont les photographies constituent une démonstration de son travail.
    </p>
    <p>L'objectif n'est donc pas de dégrader les visuels pour gagner quelques points.</p>
    <p>
      Il est de transmettre des fichiers adaptés aux appareils et aux conditions de consultation.
    </p>
    <p>
      Une autre technique consiste à différer le chargement des images qui ne sont pas immédiatement
      visibles à l'écran. On parle alors de <em>lazy loading</em>.
    </p>
    <p>
      Cette approche peut être intéressante pour une longue galerie située plus bas sur une page.
    </p>
    <p>
      Mais attention : si une grande image de couverture constitue l'élément principal mesuré par le
      LCP, retarder son chargement peut au contraire dégrader la performance.
    </p>
    <p>
      Il faut donc distinguer les ressources importantes dès l'ouverture de la page de celles qui
      pourront être chargées plus tard.
    </p>
    <h3>Les scripts et fonctionnalités inutiles</h3>
    <p>
      Une page web peut également charger différents scripts destinés à gérer son fonctionnement.
    </p>
    <p>
      Ils peuvent servir à afficher un menu interactif, gérer une galerie, proposer un formulaire ou
      ajouter une fonctionnalité de conversation en direct.
    </p>
    <p>
      Certains scripts sont nécessaires au bon fonctionnement du site. D'autres proviennent de
      services externes, comme des outils de mesure d'audience, des widgets sociaux ou des
      plateformes marketing.
    </p>
    <p>
      Lorsqu'ils sont trop nombreux ou trop lourds, ils peuvent ralentir le chargement et perturber
      la réactivité.
    </p>
    <p>
      Imaginons que notre photographe ait installé plusieurs extensions WordPress au fil des années.
    </p>
    <p>Certaines sont devenues inutiles, mais continuent à charger des ressources.</p>
    <p>
      Il pourrait être intéressant d'examiner les fonctionnalités réellement utilisées et de retirer
      celles qui ne sont plus nécessaires, après avoir vérifié les conséquences de leur suppression.
    </p>
    <p>
      De même, certains widgets externes peuvent être remplacés par des solutions plus légères
      lorsqu'ils ne présentent pas un intérêt suffisant.
    </p>
    <p>
      Pour des problèmes plus avancés, un développeur peut notamment chercher à réduire la quantité
      de JavaScript chargée, à fractionner certaines tâches ou à différer les ressources non
      essentielles.
    </p>
    <p>
      Ces optimisations peuvent contribuer à améliorer l'interactivité, notamment lorsque l'INP est
      dégradé.
    </p>
    <p>Mais il ne faut pas supprimer aveuglément les scripts signalés par PageSpeed Insights.</p>
    <p>
      Certains sont indispensables aux formulaires, à la navigation ou à d'autres fonctionnalités
      importantes.
    </p>
    <h3>Les problèmes d'hébergement et de réponse serveur</h3>
    <p>Les performances peuvent également dépendre du serveur qui héberge le site.</p>
    <p>
      Lorsqu'un visiteur demande une page, le serveur doit recevoir la requête et commencer à lui
      répondre.
    </p>
    <p>
      Si cette réponse prend beaucoup de temps, le chargement peut être retardé avant même que le
      navigateur commence à afficher les informations.
    </p>
    <p>
      Différents facteurs peuvent expliquer cette situation : un hébergement insuffisamment
      dimensionné, des traitements trop lourds, une configuration peu efficace ou certains problèmes
      de cache.
    </p>
    <p>
      Un réseau de diffusion de contenu, également appelé CDN, peut permettre de rapprocher
      certaines ressources des utilisateurs et d'améliorer leur distribution.
    </p>
    <p>Mais un CDN ne corrige pas automatiquement tous les problèmes de performances.</p>
    <p>
      Si une page nécessite des traitements serveur particulièrement lents, il peut être nécessaire
      d'examiner l'application ou l'infrastructure.
    </p>
    <p>
      Pour un site utilisant un hébergement administré, certaines optimisations peuvent être
      réalisées depuis les paramètres proposés par le fournisseur.
    </p>
    <p>Dans les autres situations, une intervention technique peut être nécessaire.</p>
    <p>
      L'essentiel est de ne pas conclure trop rapidement qu'un mauvais score impose de changer
      d'hébergeur. Il faut d'abord identifier les causes principales.
    </p>
    <h3>Les éléments qui se déplacent pendant le chargement</h3>
    <p>Enfin, certaines pages rencontrent des problèmes de stabilité visuelle.</p>
    <p>
      Imaginons que notre photographe possède plusieurs images, un formulaire et une vidéo intégrée.
    </p>
    <p>
      Lorsque ces éléments apparaissent progressivement, ils peuvent modifier la position des autres
      contenus si le navigateur n'a pas réservé suffisamment d'espace.
    </p>
    <p>C'est l'une des causes fréquentes d'un CLS élevé.</p>
    <p>
      Une amélioration peut consister à définir les dimensions des images et des vidéos, ou à
      réserver un espace adapté avant leur affichage.
    </p>
    <p>
      Les polices de caractères et les éléments ajoutés dynamiquement peuvent également provoquer
      des déplacements inattendus.
    </p>
    <p>
      Certaines corrections nécessitent quelques paramètres de mise en page, tandis que d'autres
      demandent une intervention dans le CSS ou le code du site.
    </p>
    <p>
      Mais le principe reste simple :
      <strong
        >une page doit éviter de déplacer soudainement les informations que le visiteur est en train
        de lire ou d'utiliser</strong
      >.
    </p>
    <h2>Comment prioriser les optimisations de performances ?</h2>
    <p>Après une analyse PageSpeed, tu pourrais obtenir de nombreuses recommandations.</p>
    <p>Il serait tentant de toutes les appliquer.</p>
    <p>
      Mais comme pour les autres dimensions du SEO, il est préférable de commencer par comprendre
      leur intérêt réel.
    </p>
    <p>La première question concerne l'importance de la page.</p>
    <p>
      Une difficulté affectant ta page d'accueil, une prestation stratégique ou un parcours de
      réservation peut mériter davantage d'attention qu'un problème mineur présent sur une ancienne
      page peu consultée.
    </p>
    <p>La deuxième question concerne l'expérience du visiteur.</p>
    <p>
      Une image principale très lente, un formulaire difficile à utiliser ou des éléments qui se
      déplacent fortement peuvent représenter des problèmes plus importants qu'un gain marginal sur
      une ressource secondaire.
    </p>
    <p>Enfin, il faut tenir compte du travail nécessaire.</p>
    <p>
      Certaines améliorations peuvent être réalisées rapidement depuis un CMS. D'autres demandent
      plusieurs heures de développement, des tests ou des modifications d'infrastructure.
    </p>
    <p>
      Pour commencer, privilégie les actions dont les bénéfices potentiels sont compréhensibles et
      dont les risques restent maîtrisés.
    </p>
    <p>
      Il est également intéressant de conserver une trace des changements réalisés et de comparer
      les résultats avant et après, dans des conditions similaires.
    </p>
    <p>
      N'oublie pas que les données réelles de PageSpeed Insights couvrent une période glissante.
      Elles ne changent donc pas nécessairement immédiatement après une correction.
    </p>
    <p>
      Les tests de laboratoire peuvent aider à vérifier plus rapidement l'effet technique d'une
      modification, mais ils restent sensibles aux conditions d'exécution.
    </p>
    <p>
      <strong
        >Le bon réflexe consiste à identifier une difficulté, comprendre sa cause probable, réaliser
        une correction ciblée et vérifier si l'expérience s'améliore réellement.</strong
      >
    </p>
    <h2>Démonstration — Analysons les performances d'une page avec PageSpeed Insights</h2>
    <p>Passons maintenant à une démonstration concrète.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et imaginer qu'il souhaite
      comprendre pourquoi sa page consacrée aux mariages semble lente sur mobile.
    </p>
    <p>
      Il a déjà travaillé son contenu, ses titres et son maillage interne. Nous allons maintenant
      examiner les performances de cette page à l'aide de PageSpeed Insights.
    </p>
    <p>
      Les chiffres présentés dans cette démonstration sont fictifs. Ils servent uniquement à
      illustrer la manière d'interpréter un rapport.
    </p>
    <h3>Étape 1 — Lance une analyse PageSpeed</h3>
    <p>
      Commençons par ouvrir
      <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer"
        >PageSpeed Insights</a
      >.
    </p>
    <p>Dans le champ prévu, renseignons l'adresse de notre page :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>
      Nous lançons ensuite l'analyse et consultons les résultats proposés pour la version mobile.
    </p>
    <p>
      L'outil peut afficher différentes sections concernant l'expérience des utilisateurs, les
      performances mesurées lors du test et les pistes d'amélioration.
    </p>
    <p>
      Nous allons commencer par observer les informations disponibles avant de tirer une conclusion.
    </p>
    <h3>Étape 2 — Examine les données réelles</h3>
    <p>
      Imaginons que PageSpeed Insights dispose de suffisamment de données pour présenter les Core
      Web Vitals de cette page.
    </p>
    <p>Nous découvrons un LCP de 4,3 secondes, un INP de 170 millisecondes et un CLS de 0,06.</p>
    <p>Ces valeurs sont fictives.</p>
    <p>
      Le LCP semble indiquer un problème de chargement du contenu principal. En revanche, l'INP et
      le CLS se situent dans les seuils considérés comme satisfaisants.
    </p>
    <p>
      Nous pouvons donc formuler une première hypothèse : l'expérience de notre page est
      principalement pénalisée par la vitesse d'apparition du contenu principal, plutôt que par sa
      réactivité ou sa stabilité.
    </p>
    <p>Cela ne signifie pas que tous les autres aspects du site sont parfaits.</p>
    <p>Mais nous disposons déjà d'une première direction pour approfondir l'analyse.</p>
    <p>
      Si aucune donnée réelle n'était disponible, nous pourrions tout de même consulter les
      résultats Lighthouse pour identifier des pistes techniques, sans prétendre connaître
      l'expérience de l'ensemble des visiteurs.
    </p>
    <h3>Étape 3 — Consulte le test de laboratoire</h3>
    <p>Nous poursuivons maintenant l'analyse avec les résultats du test Lighthouse.</p>
    <p>Imaginons que l'outil attribue un score de performances de 72 sur mobile.</p>
    <p>Ce score ne nous indique pas, à lui seul, quelle modification réaliser.</p>
    <p>
      Nous allons donc examiner les recommandations et les informations concernant les ressources
      chargées.
    </p>
    <p>
      Imaginons que l'analyse signale une grande image de couverture particulièrement lourde et dont
      le chargement commence tardivement.
    </p>
    <p>Cette observation pourrait expliquer une partie des difficultés rencontrées sur le LCP.</p>
    <p>
      Nous allons alors examiner cette image plutôt que chercher à optimiser immédiatement tous les
      éléments du rapport.
    </p>
    <h3>Étape 4 — Identifie une amélioration prioritaire</h3>
    <p>
      Notre photographe découvre que la photographie utilisée en haut de sa page a été exportée dans
      une très grande résolution, alors qu'elle est affichée à une taille beaucoup plus réduite sur
      mobile.
    </p>
    <p>
      Il pourrait envisager de proposer une version adaptée aux dimensions réellement utilisées,
      avec une compression préservant la qualité visuelle.
    </p>
    <p>
      Si son CMS possède une fonctionnalité de génération d'images responsives, il peut vérifier que
      celle-ci fonctionne correctement.
    </p>
    <p>
      Il pourrait également examiner la manière dont cette image est chargée, notamment pour éviter
      qu'elle soit inutilement retardée alors qu'elle constitue un élément essentiel de la première
      vue.
    </p>
    <p>Nous ne décidons pas encore de supprimer l'image.</p>
    <p>Elle joue un rôle important dans la présentation de son travail.</p>
    <p>
      Notre objectif est de conserver son intérêt visuel tout en améliorant les conditions dans
      lesquelles elle est affichée.
    </p>
    <h3>Étape 5 — Vérifie également l'expérience mobile</h3>
    <p>Nous allons maintenant ouvrir la page depuis un smartphone.</p>
    <p>
      Nous observons la vitesse à laquelle les principales informations apparaissent, puis nous
      faisons défiler le contenu.
    </p>
    <p>
      La navigation reste-t-elle fluide ? Les photographies sont-elles correctement affichées ? Les
      textes sont-ils lisibles ? Les boutons et le formulaire sont-ils faciles à utiliser ?
    </p>
    <p>Nous essayons également d'ouvrir la galerie et d'accéder aux informations de contact.</p>
    <p>
      Ces vérifications ne remplacent pas les mesures de performance, mais elles permettent
      d'identifier des difficultés concrètes qui pourraient ne pas ressortir clairement d'un score.
    </p>
    <p>
      Une page peut obtenir de bons résultats techniques tout en présentant un bouton trop petit ou
      un formulaire difficile à remplir.
    </p>
    <p>C'est pourquoi l'analyse doit toujours tenir compte de l'expérience réelle.</p>
    <h3>Étape 6 — Prépare la correction et conserve le résultat initial</h3>
    <p>
      À partir de nos observations, nous retenons une première priorité : optimiser l'image
      principale de la page.
    </p>
    <p>
      Notre photographe conserve l'adresse analysée, la date du test, les principales métriques et
      la recommandation identifiée.
    </p>
    <p>
      Si son outil permet de remplacer facilement l'image par une version plus adaptée, il peut
      préparer cette modification.
    </p>
    <p>
      Mais il doit également vérifier que la nouvelle version conserve une qualité visuelle
      suffisante et que son affichage reste correct sur les différents appareils.
    </p>
    <p>
      Une fois la correction appliquée, il pourra relancer un test dans des conditions comparables
      et observer l'évolution des résultats de laboratoire.
    </p>
    <p>
      Pour les données réelles, il faudra laisser suffisamment de temps aux nouvelles visites pour
      être prises en compte dans les mesures.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous venons de découvrir comment analyser les performances d'une page sans nous concentrer
      uniquement sur son score global.
    </p>
    <p>
      Nous avons commencé par les Core Web Vitals, puis examiné les recommandations du test
      Lighthouse pour identifier une cause potentielle.
    </p>
    <p>
      Nous avons également vérifié l'expérience depuis un véritable smartphone, avant de
      sélectionner une amélioration concrète.
    </p>
    <p>Notre objectif n'était pas de transformer un score de 72 en 100.</p>
    <p>
      Il était de comprendre pourquoi une page importante semblait lente et de déterminer quelle
      correction pourrait réellement aider ses visiteurs.
    </p>
    <p>
      <strong
        >Une bonne analyse PageSpeed ne se termine pas par une note. Elle se termine par une
        observation compréhensible et, lorsque cela est justifié, une action prioritaire.</strong
      >
    </p>
    <p>C'est maintenant à toi de réaliser cette démarche sur ton propre site.</p>
    <h2>À toi de jouer — Analyse les performances d'une page stratégique</h2>
    <p>
      Dans les précédentes leçons, tu as appris à vérifier l'accessibilité de tes pages, à examiner
      les URL et à comprendre les principaux fichiers techniques.
    </p>
    <p>
      Nous allons maintenant compléter ton diagnostic en analysant les performances d'une page
      importante.
    </p>
    <p>
      Tu n'as pas besoin de réaliser immédiatement une correction technique. L'objectif consiste
      d'abord à comprendre les résultats et à identifier une amélioration potentielle.
    </p>
    <p><strong>Durée estimée : 15 à 20 minutes.</strong></p>
    <h3>Étape 1 — Choisis une page importante</h3>
    <p>
      Commence par sélectionner l'une des pages stratégiques identifiées au début de la formation.
    </p>
    <p>
      Tu peux choisir ta page d'accueil, une prestation importante ou un contenu qui possède déjà de
      la visibilité dans Google.
    </p>
    <p>Ouvre cette page sur ton smartphone et observe brièvement son comportement.</p>
    <p>
      Le contenu principal apparaît-il rapidement ? Les éléments restent-ils stables pendant le
      chargement ? La navigation et les boutons fonctionnent-ils correctement ?
    </p>
    <p>Conserve les éventuelles difficultés observées.</p>
    <h3>Étape 2 — Lance une analyse PageSpeed Insights</h3>
    <p>
      Ouvre
      <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer"
        >PageSpeed Insights</a
      >
      et renseigne l'adresse complète de ta page.
    </p>
    <p>
      Consulte en priorité les résultats mobiles, puis compare-les avec ceux de la version
      ordinateur.
    </p>
    <p>Si des données réelles sont disponibles, observe les valeurs du LCP, de l'INP et du CLS.</p>
    <p>Essaie de déterminer si l'un de ces indicateurs révèle une difficulté particulière.</p>
    <p>
      Si ton site ne possède pas suffisamment de données réelles, utilise les résultats du test de
      laboratoire pour poursuivre l'analyse.
    </p>
    <p>Ne considère pas l'absence de données comme un problème en soi.</p>
    <h3>Étape 3 — Identifie deux observations importantes</h3>
    <p>Examine maintenant les principales recommandations de PageSpeed Insights.</p>
    <p>
      Essaie de retenir deux observations qui te semblent compréhensibles et potentiellement utiles.
    </p>
    <p>
      Il peut s'agir d'une image trop lourde, d'un contenu qui met longtemps à apparaître ou d'un
      élément qui provoque des déplacements pendant le chargement.
    </p>
    <p>
      Pour chacune, essaie d'expliquer brièvement ce que cela pourrait changer pour le visiteur.
    </p>
    <p>Tu n'as pas besoin de comprendre immédiatement toutes les recommandations techniques.</p>
    <p>
      Concentre-toi sur celles qui correspondent à une difficulté réelle ou facilement identifiable.
    </p>
    <h3>Étape 4 — Sélectionne une amélioration prioritaire</h3>
    <p>Parmi les observations réalisées, choisis une première amélioration à envisager.</p>
    <p>Privilégie une action dont l'intérêt est clair et dont les conséquences sont maîtrisées.</p>
    <p>
      Tu pourrais, par exemple, envisager d'optimiser une grande image ou de vérifier si une
      fonctionnalité inutile ralentit la page.
    </p>
    <p>
      Si la correction nécessite une modification technique que tu ne maîtrises pas, conserve
      simplement le problème et les informations utiles pour le transmettre à ton prestataire.
    </p>
    <p>
      Note également les principaux résultats du test et sa date dans ta checklist d'audit
      technique.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir analysé une page stratégique sur mobile,
      identifié deux observations importantes et sélectionné une amélioration prioritaire lorsque
      cela est nécessaire.
    </p>
    <p>
      Ces informations complètent l'action « Réaliser un premier audit technique de mon site » dans
      « Mon plan d'action ».
    </p>
    <p>Tu peux maintenant finaliser cette action lors de la mise en pratique de fin de module.</p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Les performances d'un site influencent la manière dont les visiteurs découvrent et utilisent
      ses contenus.
    </p>
    <p>
      Un chargement lent, des interactions qui répondent difficilement ou des éléments qui se
      déplacent peuvent dégrader l'expérience, notamment sur mobile.
    </p>
    <p>
      Nous avons découvert trois indicateurs essentiels permettant d'évaluer certaines dimensions de
      cette expérience : le LCP, l'INP et le CLS.
    </p>
    <p>
      Le LCP mesure la vitesse d'affichage du contenu principal. L'INP évalue la réactivité aux
      interactions, tandis que le CLS permet de mesurer les déplacements inattendus de la mise en
      page.
    </p>
    <p>Ces indicateurs constituent les Core Web Vitals.</p>
    <p>
      Ils peuvent être observés à travers des données réelles lorsqu'elles sont disponibles,
      notamment dans PageSpeed Insights ou Google Search Console.
    </p>
    <p>
      Nous avons également appris à distinguer les données provenant des visiteurs des tests de
      laboratoire réalisés par Lighthouse.
    </p>
    <p>
      Ces deux sources sont complémentaires : les mesures réelles permettent de mieux comprendre
      l'expérience observée, tandis que les tests automatisés aident à identifier des pistes
      d'amélioration.
    </p>
    <p>
      Enfin, nous avons découvert plusieurs causes fréquentes de lenteur, notamment les images trop
      lourdes, les scripts inutiles, certaines difficultés serveur et les problèmes de stabilité
      visuelle.
    </p>
    <p>Mais il ne faut pas chercher à appliquer automatiquement toutes les recommandations.</p>
    <p>
      Un site doit avant tout être suffisamment rapide, stable et agréable pour les personnes qui
      l'utilisent.
    </p>
    <p>
      <strong
        >Le bon objectif n'est pas d'atteindre 100 sur PageSpeed. C'est d'offrir une expérience de
        qualité, en concentrant tes efforts sur les problèmes qui comptent réellement.</strong
      >
    </p>
    <p>
      Tu disposes maintenant des principales compétences nécessaires pour commencer à examiner les
      fondations techniques de ton référencement.
    </p>
    <SeoLesson16Quiz />
    <h2>Félicitations, tu as terminé le module 5 !</h2>
    <p>
      Tu viens de terminer le module consacré aux fondamentaux techniques du référencement naturel.
    </p>
    <p>
      Dans les leçons précédentes, tu as appris à reconnaître les principaux problèmes qui peuvent
      perturber l'exploration et l'indexation d'un site. Tu sais désormais distinguer les erreurs
      importantes des situations normales et utiliser Google Search Console pour commencer à
      identifier leur origine.
    </p>
    <p>
      Tu as également découvert le rôle des URL et des redirections, ainsi que les précautions
      nécessaires lorsqu'une page change d'adresse.
    </p>
    <p>
      Nous avons ensuite étudié les principaux fichiers et directives techniques :
      <code>robots.txt</code>, sitemap XML et balises canoniques. Tu comprends maintenant comment
      ces mécanismes peuvent aider Google à découvrir les contenus et pourquoi leurs indications
      doivent rester cohérentes.
    </p>
    <p>
      Enfin, cette leçon t'a permis de découvrir les Core Web Vitals, d'apprendre à utiliser
      PageSpeed Insights et de mieux comprendre l'importance de l'expérience mobile.
    </p>
    <p>
      Tu n'as pas besoin de maîtriser toutes les corrections techniques pour mettre ces
      connaissances à profit.
    </p>
    <p>
      L'essentiel est désormais de savoir reconnaître un problème, comprendre ses conséquences
      possibles et identifier les prochaines vérifications à effectuer.
    </p>
    <p>
      La mise en pratique de fin de module te permettra de rassembler tes observations dans ta
      checklist d'audit technique et de sélectionner une première amélioration prioritaire.
    </p>
    <h2>Dans le prochain module</h2>
    <p>
      Ton site possède maintenant les bases nécessaires pour accueillir des contenus pertinents et
      les rendre accessibles dans de bonnes conditions.
    </p>
    <p>
      Mais un référencement efficace ne repose pas uniquement sur l'optimisation des pages
      existantes et sur leur fonctionnement technique.
    </p>
    <p>
      Il faut également savoir quels nouveaux sujets méritent d'être traités, quelles questions
      intéressent réellement tes futurs clients et comment organiser tes efforts de publication.
    </p>
    <p>
      C'est ce que nous allons découvrir dans le prochain module, consacré à la stratégie de
      contenu.
    </p>
    <p>
      Nous apprendrons à identifier les sujets qui présentent un intérêt pour ton activité, à
      préparer des contenus SEO de qualité et à construire un calendrier éditorial réaliste.
    </p>
    <p>
      L'objectif ne sera pas de publier le plus grand nombre d'articles possible, mais de développer
      progressivement des ressources utiles, cohérentes et adaptées aux recherches de ton public.
    </p>
    <p><strong>Prochain module : Construire ta stratégie de contenu.</strong></p>
    <p><strong>Prochaine leçon : Identifier les sujets à fort potentiel.</strong></p>
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
