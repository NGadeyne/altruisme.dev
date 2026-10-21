<script setup lang="ts">
import SeoLesson05Quiz from './SeoLesson05Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Tes pages existent. Mais Google les connaît-il vraiment ?</h2>
    <p>
      Imagine que tu possèdes un site internet depuis plusieurs mois. Tu as créé plusieurs pages
      pour présenter tes prestations, rédigé quelques articles et travaillé tes contenus pour
      répondre aux recherches de tes futurs clients. Pourtant, malgré ces efforts, certaines pages
      ne semblent jamais apparaître sur Google. Tu as beau rechercher leur titre ou les services
      qu'elles présentent, tu ne les retrouves pas dans les résultats.
    </p>
    <p>
      Tu commences alors à te poser plusieurs questions. Google connaît-il réellement ces pages ?
      Leur contenu est-il suffisamment intéressant ? Existe-t-il un problème technique qui empêche
      leur référencement ? Et surtout, que faut-il faire pour améliorer la situation ?
    </p>
    <p>
      Dans le premier module, nous avons découvert qu'une page pouvait être publiée sur Internet
      sans être automatiquement indexée par Google. Nous avons également appris à distinguer les
      trois grandes étapes du fonctionnement d'un moteur de recherche : l'exploration, l'indexation
      et le classement.
    </p>
    <p>Mais jusqu'ici, nous avons principalement abordé ces notions de manière théorique.</p>
    <p>
      Grâce à Google Search Console, que nous avons découvert dans la leçon précédente, nous allons
      maintenant pouvoir examiner la situation de ton propre site.
    </p>
    <p>
      L'objectif de cette leçon est simple :
      <strong
        >apprendre à vérifier si tes pages importantes sont indexées, comprendre les principaux
        messages de Google et identifier les situations qui méritent ton attention</strong
      >.
    </p>
    <p>
      Tu n'as pas besoin de savoir programmer ni de maîtriser toutes les subtilités du référencement
      technique. Nous allons nous concentrer sur les informations les plus utiles pour réaliser un
      premier diagnostic.
    </p>
    <h2>Comprendre ce que signifie réellement l'indexation</h2>
    <p>Avant d'ouvrir Search Console, revenons sur une distinction essentielle.</p>
    <p>
      Lorsqu'une page est accessible depuis ton site internet, cela signifie simplement qu'un
      navigateur peut afficher son contenu. Mais pour qu'elle puisse être proposée normalement dans
      les résultats organiques de Google, le moteur de recherche doit d'abord en prendre
      connaissance et décider de l'intégrer à son index.
    </p>
    <p>
      L'index de Google fonctionne comme une immense base de données dans laquelle sont enregistrées
      des informations sur les contenus découverts et retenus par ses systèmes.
    </p>
    <p>
      Lorsqu'un internaute effectue une recherche, Google peut ensuite utiliser ces informations
      pour sélectionner les résultats qu'il estime pertinents.
    </p>
    <p>
      Prenons l'exemple de notre photographe professionnel à Bordeaux. Imaginons qu'il possède une
      page consacrée à ses prestations de photographie de mariage. Cette page présente son approche,
      plusieurs reportages et les modalités de réservation.
    </p>
    <p>
      Si Google ne l'a pas indexée, elle ne pourra pas apparaître normalement comme résultat
      organique pour la recherche « photographe mariage Bordeaux ».
    </p>
    <p>
      En revanche, si elle est correctement indexée, elle devient éligible à une apparition dans les
      résultats. Cela ne signifie pas qu'elle sera nécessairement visible sur cette recherche, ni
      qu'elle obtiendra une bonne position.
    </p>
    <p>
      <strong
        >L'indexation est une condition importante de la visibilité, mais elle ne garantit pas le
        classement.</strong
      >
    </p>
    <p>
      Cette distinction est fondamentale, car une page indexée mais peu visible ne rencontre pas
      nécessairement le même problème qu'une page absente de l'index.
    </p>
    <p>
      Dans le premier cas, nous pourrons chercher à améliorer sa pertinence, son contenu ou sa
      structure. Dans le second, nous devrons d'abord comprendre pourquoi Google ne l'a pas retenue.
    </p>
    <h3>Toutes les pages doivent-elles être indexées ?</h3>
    <p>
      Lorsqu'on découvre Google Search Console, il est tentant de regarder le nombre de pages
      indexées et de considérer que plus ce nombre est élevé, meilleur sera le référencement.
    </p>
    <p>Mais ce raisonnement est trompeur.</p>
    <p>
      Toutes les pages d'un site n'ont pas nécessairement vocation à apparaître dans les résultats
      Google.
    </p>
    <p>
      Imaginons une boutique en ligne proposant plusieurs variantes d'un même produit. Selon sa
      configuration, elle pourrait posséder différentes adresses affichant des contenus très
      proches. Il ne serait pas forcément pertinent que Google indexe séparément chacune de ces
      variantes.
    </p>
    <p>
      De la même manière, certaines pages techniques, des espaces privés ou des contenus
      volontairement exclus de la recherche n'ont pas nécessairement besoin d'être indexés.
    </p>
    <p>
      Enfin, lorsqu'une ancienne page a été remplacée par une nouvelle adresse, une redirection peut
      permettre aux visiteurs et aux moteurs de recherche de rejoindre le bon contenu. L'ancienne
      URL n'a alors généralement plus vocation à apparaître séparément dans les résultats.
    </p>
    <p>Le problème n'est donc pas de posséder des pages non indexées.</p>
    <p>
      <strong
        >Le véritable enjeu consiste à vérifier que les pages importantes pour ton activité peuvent
        être correctement prises en compte par Google.</strong
      >
    </p>
    <p>
      C'est pourquoi nous allons reprendre les trois pages stratégiques que tu as identifiées dans
      le premier module.
    </p>
    <p>Elles nous serviront de point de départ pour réaliser tes premières vérifications.</p>
    <h2>Découvrir le rapport d'indexation des pages</h2>
    <p>
      Connecte-toi à Google Search Console et sélectionne la propriété correspondant à ton site.
    </p>
    <p>
      Dans le menu de navigation, tu trouveras une section consacrée à l'indexation. Elle contient
      notamment un rapport intitulé « Pages », dont l'objectif est de fournir des informations sur
      les URL que Google connaît et leur état d'indexation.
    </p>
    <p>Ce rapport permet d'obtenir une vision générale de la situation.</p>
    <p>
      Tu peux notamment y retrouver le nombre de pages indexées, le nombre d'URL non indexées
      connues de Google et différentes raisons expliquant pourquoi certaines pages ne figurent pas
      dans l'index.
    </p>
    <p>
      Selon la taille et l'historique de ton site, ces informations peuvent être plus ou moins
      nombreuses.
    </p>
    <p>
      Un petit site vitrine peut ne présenter que quelques URL, tandis qu'un site e-commerce ou un
      média peut en compter plusieurs milliers.
    </p>
    <p>
      Il est également possible que certaines informations ne soient pas immédiatement disponibles
      si ta propriété Search Console vient d'être créée.
    </p>
    <p>
      L'objectif n'est pas encore de comprendre tous les détails du rapport, mais de savoir
      identifier les éléments qui nécessitent une attention particulière.
    </p>
    <h3>Comprendre les pages indexées et non indexées</h3>
    <p>
      Le rapport distingue notamment les pages présentes dans l'index Google et celles qui n'y
      figurent pas.
    </p>
    <p>
      Les pages indexées correspondent aux URL que Google a retenues dans son index, selon les
      informations disponibles dans le rapport.
    </p>
    <p>
      Les pages non indexées regroupent différentes situations. Certaines peuvent avoir été
      découvertes sans être explorées, d'autres peuvent avoir été explorées sans être retenues.
      Certaines sont exclues volontairement, tandis que d'autres rencontrent un problème technique.
    </p>
    <p>
      C'est pourquoi le nombre de pages non indexées, pris isolément, n'est pas un bon indicateur de
      la santé SEO d'un site.
    </p>
    <p>
      Imaginons que notre photographe possède un site comprenant vingt pages et que Search Console
      présente douze URL indexées et huit non indexées.
    </p>
    <p>
      Ces chiffres pourraient sembler inquiétants. Pourtant, si les huit URL non indexées
      correspondent à des anciennes adresses redirigées, des variantes de pages ou des contenus
      volontairement exclus, il n'existe pas nécessairement de problème.
    </p>
    <p>
      À l'inverse, si l'une des URL non indexées correspond à sa principale page de photographie de
      mariage, la situation mérite probablement une investigation.
    </p>
    <p>Il faut donc aller au-delà des chiffres et comprendre les raisons indiquées par Google.</p>
    <h3>Les principales raisons de non-indexation</h3>
    <p>
      Dans le rapport, Google regroupe les pages non indexées selon différents motifs. Les intitulés
      peuvent sembler techniques au premier abord, mais plusieurs situations sont relativement
      simples à comprendre.
    </p>
    <p>
      Nous allons nous concentrer sur celles que tu as le plus de chances de rencontrer lors de tes
      premières analyses.
    </p>
    <h4>Détectée, actuellement non indexée</h4>
    <p>
      Ce statut signifie que Google connaît l'adresse de la page, mais ne l'a pas encore explorée.
    </p>
    <p>
      Imaginons que tu viennes de publier un nouvel article. Son adresse apparaît dans ton sitemap
      et un lien depuis ta page d'accueil permet d'y accéder. Google peut donc avoir découvert cette
      URL sans avoir encore récupéré son contenu.
    </p>
    <p>
      Cette situation ne signifie pas nécessairement que ton article présente un problème de
      qualité. Google peut simplement avoir reporté son exploration.
    </p>
    <p>
      C'est notamment possible sur un site récent ou lorsqu'un grand nombre de nouvelles pages sont
      découvertes.
    </p>
    <p>
      Si la page vient d'être publiée, il peut être raisonnable d'attendre quelque temps avant de
      tirer des conclusions. En revanche, si une page importante reste durablement dans cette
      situation, il sera utile de vérifier son accessibilité, sa présence dans les liens internes et
      les autres informations disponibles.
    </p>
    <h4>Explorée, actuellement non indexée</h4>
    <p>Ce deuxième statut est différent.</p>
    <p>Il signifie que Google a exploré la page, mais ne l'a pas ajoutée à son index.</p>
    <p>
      Autrement dit, Google a pu consulter le contenu sans décider de le retenir pour le moment.
    </p>
    <p>
      Cette situation peut avoir plusieurs explications. Elle ne constitue pas, à elle seule, la
      preuve que ton contenu est de mauvaise qualité ou que ton site subit une pénalité.
    </p>
    <p>
      Il peut notamment être utile d'examiner la pertinence de la page, son originalité, son utilité
      et sa proximité avec d'autres contenus déjà présents sur le site.
    </p>
    <p>
      Imaginons que notre photographe possède cinq pages différentes présentant presque exactement
      les mêmes prestations, avec seulement quelques formulations modifiées.
    </p>
    <p>
      Il pourrait être intéressant de se demander si ces pages répondent réellement à des besoins
      distincts ou si certaines sont redondantes.
    </p>
    <p>
      Mais attention : il ne faut pas modifier automatiquement une page dès qu'elle apparaît dans ce
      statut.
    </p>
    <p>
      La bonne démarche consiste d'abord à comprendre sa situation et à vérifier si elle mérite
      réellement une indexation indépendante.
    </p>
    <h4>Exclue par une balise noindex</h4>
    <p>
      Le terme <code>noindex</code> désigne une instruction technique permettant de demander aux
      moteurs de recherche de ne pas indexer une page.
    </p>
    <p>Cette instruction peut être volontaire.</p>
    <p>
      Par exemple, tu peux souhaiter qu'une page interne ou une ressource particulière ne figure pas
      dans les résultats Google.
    </p>
    <p>Mais elle peut également avoir été ajoutée par erreur.</p>
    <p>
      Imaginons qu'un entrepreneur utilise un outil de création de site et active involontairement
      une option empêchant les moteurs de recherche d'indexer certaines pages.
    </p>
    <p>
      Même si ces pages possèdent des contenus intéressants, cette instruction empêchera normalement
      leur indexation lorsque Google pourra la lire.
    </p>
    <p>
      Si tu rencontres ce motif sur une page importante, il faudra donc vérifier si cette exclusion
      est intentionnelle.
    </p>
    <p>
      Ne supprime pas systématiquement les instructions <code>noindex</code> présentes sur ton site
      : certaines peuvent avoir une véritable utilité.
    </p>
    <h4>Page avec redirection</h4>
    <p>
      Une redirection permet d'envoyer automatiquement un visiteur d'une ancienne adresse vers une
      nouvelle.
    </p>
    <p>
      Imaginons que notre photographe ait remplacé sa page <code>/prestations-mariage</code> par une
      nouvelle adresse <code>/photographe-mariage-bordeaux</code>.
    </p>
    <p>
      Si une redirection appropriée a été mise en place, les visiteurs qui utilisent l'ancienne
      adresse peuvent être automatiquement dirigés vers la nouvelle.
    </p>
    <p>
      Dans ce cas, il est généralement normal que l'ancienne URL ne soit pas indexée séparément.
    </p>
    <p>
      Le point important consiste à vérifier que la redirection mène vers la bonne page et que cette
      dernière peut être correctement indexée.
    </p>
    <p>Une redirection volontaire n'est donc pas nécessairement un problème SEO.</p>
    <h4>Autre page avec balise canonique correcte</h4>
    <p>Tu peux également rencontrer des messages liés aux URL canoniques.</p>
    <p>
      Une URL canonique correspond à la version qu'un moteur de recherche considère comme
      représentative lorsqu'il rencontre plusieurs pages identiques ou très similaires.
    </p>
    <p>
      Imaginons qu'une même page soit accessible par deux adresses différentes. Google peut choisir
      une version principale plutôt que d'indexer les deux séparément.
    </p>
    <p>
      Lorsque Search Console indique qu'une page constitue une autre version avec une balise
      canonique correcte, cela peut simplement signifier que Google a identifié une version
      principale appropriée.
    </p>
    <p>Cette situation est souvent normale.</p>
    <p>
      En revanche, si Google considère qu'une page stratégique est une variante d'une autre alors
      que tu souhaites qu'elles soient toutes les deux indépendantes, il peut être utile d'examiner
      leur contenu et leur configuration.
    </p>
    <p>
      Nous approfondirons ces notions techniques plus tard. Pour le moment, retiens qu'une URL non
      indexée n'est pas nécessairement une page oubliée ou rejetée : elle peut simplement être une
      autre version d'un contenu déjà connu.
    </p>
    <h3>Les autres problèmes à reconnaître</h3>
    <p>
      D'autres motifs peuvent apparaître dans le rapport, notamment des erreurs serveur, des pages
      introuvables ou des URL dont l'exploration est bloquée.
    </p>
    <p>
      Une erreur <code>404</code>, par exemple, indique généralement que la ressource demandée n'a
      pas été trouvée. Si elle concerne une ancienne page supprimée volontairement sans
      remplacement, la situation peut être normale. En revanche, si elle touche une page de service
      qui devrait encore exister, il faudra chercher à corriger le problème.
    </p>
    <p>
      Une erreur serveur de type <code>5xx</code> signifie que le serveur n'a pas pu répondre
      correctement à la demande. Si cette situation persiste sur des pages importantes, elle peut
      empêcher Google de récupérer leur contenu.
    </p>
    <p>
      Enfin, un blocage par <code>robots.txt</code> peut empêcher Googlebot d'explorer une page. Il
      faut toutefois distinguer exploration et indexation : empêcher l'exploration avec
      <code>robots.txt</code> ne garantit pas qu'une URL sera totalement absente des résultats
      Google.
    </p>
    <p>Tu n'as pas besoin de savoir résoudre tous ces problèmes aujourd'hui.</p>
    <p>
      <strong
        >L'objectif de ce premier audit est d'apprendre à les reconnaître, à comprendre leurs
        conséquences possibles et à identifier ceux qui concernent tes pages stratégiques.</strong
      >
    </p>
    <h2>Utiliser l'inspection d'URL pour examiner une page précise</h2>
    <p>
      Le rapport d'indexation permet d'obtenir une vision générale de ton site. Mais lorsque tu
      souhaites vérifier une page particulière, Google Search Console propose un outil plus adapté :
      l'inspection d'URL.
    </p>
    <p>Nous l'avons rapidement découvert dans la leçon précédente.</p>
    <p>
      Il permet d'examiner une adresse précise et d'obtenir des informations sur la manière dont
      Google la prend en compte.
    </p>
    <p>
      C'est l'outil que nous allons privilégier pour vérifier les trois pages stratégiques
      sélectionnées dans le module 1.
    </p>
    <h3>Comprendre l'état d'une URL</h3>
    <p>
      Dans la partie supérieure de Search Console, tu trouveras un champ permettant d'inspecter une
      adresse.
    </p>
    <p>Tu peux y renseigner l'URL complète d'une page appartenant à la propriété sélectionnée.</p>
    <p>Par exemple :</p>
    <p><code>https://exemple.fr/photographe-mariage-bordeaux</code></p>
    <p>Google affiche alors les informations disponibles concernant cette URL.</p>
    <p>Si la page est indexée, l'outil peut notamment indiquer qu'elle se trouve sur Google.</p>
    <p>
      Cela signifie qu'elle est présente dans l'index et peut être proposée dans les résultats de
      recherche.
    </p>
    <p>
      Mais attention :
      <strong
        >être indexée ne garantit ni son apparition pour une recherche précise ni l'obtention d'une
        bonne position</strong
      >.
    </p>
    <p>
      Si la page n'est pas indexée, l'outil peut présenter un message correspondant à sa situation
      et fournir des informations complémentaires.
    </p>
    <p>C'est précisément là que l'inspection devient intéressante.</p>
    <h3>Comprendre les informations d'exploration</h3>
    <p>
      L'outil d'inspection permet également de retrouver certaines informations sur la manière dont
      Google a découvert et exploré la page.
    </p>
    <p>
      Tu peux notamment consulter la dernière date d'exploration connue, lorsque cette information
      est disponible, ainsi que des indications sur la possibilité pour Googlebot d'accéder au
      contenu.
    </p>
    <p>
      Certaines informations permettent de savoir si l'exploration était autorisée, si la page a pu
      être récupérée et si une instruction empêchait son indexation.
    </p>
    <p>Ces éléments peuvent aider à distinguer un problème technique d'une autre situation.</p>
    <p>Imaginons qu'une page importante ne soit pas indexée.</p>
    <p>
      Si l'inspection indique que Google ne peut pas y accéder, nous avons une première piste à
      examiner.
    </p>
    <p>
      Si Google peut accéder à la page mais ne l'a pas retenue dans son index, l'investigation sera
      différente.
    </p>
    <p>
      Ces informations ne fournissent pas toujours une explication complète, mais elles permettent
      d'éviter certaines suppositions.
    </p>
    <h3>Le test de l'URL active</h3>
    <p>Search Console propose également une fonctionnalité appelée « Tester l'URL active ».</p>
    <p>
      Elle permet à Google d'effectuer un contrôle de la version actuellement accessible de la page.
    </p>
    <p>Cette distinction est importante.</p>
    <p>
      Les informations d'indexation reflètent ce que Google connaît de la page lors de son précédent
      traitement. Or, ton site a peut-être été modifié depuis cette date.
    </p>
    <p>
      Imaginons qu'une instruction <code>noindex</code> ait empêché l'indexation d'une page et que
      tu viennes de la supprimer.
    </p>
    <p>
      Le rapport d'inspection peut encore présenter les informations de l'ancienne version. Le test
      de l'URL active peut alors aider à vérifier si la configuration actuelle permet désormais à
      Google d'accéder à la page et de l'analyser.
    </p>
    <p>Cependant, un résultat positif ne signifie pas que Google a déjà indexé la page.</p>
    <p>
      Il indique uniquement que certains contrôles réalisés sur sa version actuelle sont
      satisfaisants. Le test ne vérifie pas toutes les conditions nécessaires à son indexation,
      notamment le choix définitif de l'URL canonique.
    </p>
    <p>
      <strong
        >Une page accessible lors d'un test en direct n'est donc pas automatiquement une page
        indexée.</strong
      >
    </p>
    <p>C'est une nuance essentielle à comprendre pour éviter de mal interpréter les résultats.</p>
    <h2>Faut-il demander l'indexation de toutes les pages ?</h2>
    <p>
      Lorsque tu inspectes une URL, Search Console peut te proposer une option permettant de
      demander son indexation.
    </p>
    <p>
      Cette fonctionnalité est intéressante, notamment lorsqu'une nouvelle page importante vient
      d'être publiée ou lorsqu'un problème d'indexation a été corrigé.
    </p>
    <p>Mais elle doit être utilisée avec discernement.</p>
    <p>
      Une demande d'indexation ne signifie pas que Google ajoutera automatiquement la page à son
      index. Elle ne garantit pas non plus une prise en compte immédiate.
    </p>
    <p>
      Google peut avoir besoin de plusieurs jours, voire de plusieurs semaines, pour explorer ou
      réexaminer une URL. Il peut également décider de ne pas l'indexer.
    </p>
    <p>
      Il est donc inutile de multiplier les demandes d'indexation chaque jour dans l'espoir
      d'accélérer systématiquement le processus.
    </p>
    <p>
      Si une page rencontre un véritable problème technique, demander son indexation sans corriger
      la cause ne suffira pas.
    </p>
    <p>
      De même, si plusieurs pages présentent des contenus presque identiques, répéter les demandes
      ne résoudra pas nécessairement la situation.
    </p>
    <p>
      Pour les sites possédant de nombreuses pages, un sitemap correctement configuré peut
      contribuer à leur découverte.
    </p>
    <p>
      L'objectif n'est pas de forcer Google à indexer absolument tout ton site, mais de lui
      permettre de découvrir et de comprendre correctement les contenus qui méritent d'apparaître
      dans ses résultats.
    </p>
    <p>
      Avant de demander l'indexation d'une page, pose-toi donc trois questions : est-elle importante
      pour mon activité ? Son contenu est-il accessible et pertinent ? Existe-t-il un problème
      identifié que je devrais d'abord corriger ?
    </p>
    <p>Cette logique te permettra de travailler avec davantage de méthode.</p>
    <h2>Démonstration — Vérifions l'indexation d'une page stratégique</h2>
    <p>Passons maintenant à une manipulation concrète dans Google Search Console.</p>
    <p>
      Nous allons reprendre notre exemple du photographe professionnel à Bordeaux. Imaginons qu'il
      souhaite vérifier si sa page consacrée aux prestations de mariage est correctement indexée.
    </p>
    <p>
      Son site est accessible à l'adresse <code>https://exemple.fr</code> et la page que nous
      souhaitons examiner se trouve à l'adresse :
    </p>
    <p><code>https://exemple.fr/photographe-mariage-bordeaux</code></p>
    <p>
      Il s'agit d'une adresse fictive, utilisée pour illustrer les étapes. Tu pourras reproduire
      exactement la même démarche avec les pages de ton propre site.
    </p>
    <h3>Étape 1 — Ouvre le rapport d'indexation</h3>
    <p>
      Connecte-toi à
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
        >Google Search Console</a
      >
      et sélectionne la propriété correspondant à ton site.
    </p>
    <p>
      Dans le menu de navigation, ouvre la section consacrée à l'indexation, puis le rapport « Pages
      ».
    </p>
    <p>
      Commence par observer les informations générales. Combien de pages sont indexées ? Combien
      d'URL non indexées sont connues de Google ? Quels sont les principaux motifs présentés dans le
      rapport ?
    </p>
    <p>Ne cherche pas à corriger tous les éléments affichés.</p>
    <p>
      L'objectif est simplement de comprendre la situation générale du site et d'identifier les
      catégories qui pourraient mériter une attention particulière.
    </p>
    <h3>Étape 2 — Inspecte une page importante</h3>
    <p>
      Dans le champ d'inspection situé en haut de Search Console, renseigne l'adresse complète de ta
      page stratégique.
    </p>
    <p>Dans notre exemple :</p>
    <p><code>https://exemple.fr/photographe-mariage-bordeaux</code></p>
    <p>Lance l'inspection et consulte le résultat.</p>
    <p>
      Si Google indique que l'URL est présente dans son index, nous savons que cette étape du
      référencement est franchie.
    </p>
    <p>
      Nous n'avons pas encore vérifié si la page est bien positionnée, mais nous disposons d'une
      information importante : elle est connue et indexée.
    </p>
    <p>Si Google indique que l'URL n'est pas indexée, nous allons examiner les détails.</p>
    <h3>Étape 3 — Comprends le motif affiché</h3>
    <p>Imaginons que Search Console présente le message « Détectée, actuellement non indexée ».</p>
    <p>
      Cela signifie que Google connaît l'adresse de notre page, mais ne l'a pas encore explorée.
    </p>
    <p>
      Si la page vient d'être publiée, nous pourrions simplement décider de surveiller son
      évolution. Nous pouvons également vérifier qu'elle est accessible depuis le site et qu'elle
      figure dans le sitemap lorsque celui-ci est disponible.
    </p>
    <p>Imaginons maintenant que le message affiché soit « Explorée, actuellement non indexée ».</p>
    <p>Cette fois, Google a déjà consulté la page, mais ne l'a pas retenue dans son index.</p>
    <p>Nous devrons alors approfondir l'analyse avant de décider d'une éventuelle modification.</p>
    <p>
      Dans les deux cas, le statut nous permet de formuler une première hypothèse, mais il ne
      justifie pas automatiquement une correction.
    </p>
    <h3>Étape 4 — Examine les détails de l'inspection</h3>
    <p>Ouvre maintenant les informations complémentaires de l'inspection.</p>
    <p>
      Selon la situation, tu peux retrouver des indications sur la découverte de l'URL, la date de
      sa dernière exploration, les éventuelles difficultés rencontrées et la version canonique
      sélectionnée par Google.
    </p>
    <p>Observe notamment si Google a pu accéder à la page et si l'indexation était autorisée.</p>
    <p>
      Si ces informations indiquent un problème technique, nous disposons d'une piste à approfondir.
    </p>
    <p>
      Si elles ne montrent aucun blocage particulier, cela ne signifie pas nécessairement que la
      page sera indexée. Il faudra éventuellement examiner d'autres éléments, comme la pertinence et
      la singularité du contenu.
    </p>
    <h3>Étape 5 — Teste l'URL active si nécessaire</h3>
    <p>
      Si un problème a été corrigé récemment ou si tu souhaites vérifier l'état actuel de la page,
      utilise la fonction « Tester l'URL active ».
    </p>
    <p>Google lance alors un contrôle de la version actuellement disponible.</p>
    <p>
      Si le résultat indique que la page peut être indexée, cela signifie que les vérifications
      réalisées sont favorables.
    </p>
    <p>
      Mais il faut conserver la distinction que nous avons découverte : ce résultat ne garantit pas
      que Google ajoutera effectivement la page à son index.
    </p>
    <p>
      Si la page est importante, que sa configuration est correcte et qu'une nouvelle exploration se
      justifie, tu peux éventuellement demander son indexation.
    </p>
    <p>Ne répète pas cette opération inutilement.</p>
    <h3>Étape 6 — Conserve ton diagnostic</h3>
    <p>Pour terminer, note les résultats de ton inspection.</p>
    <p>
      Tu peux conserver l'adresse de la page, son état d'indexation, le motif éventuellement affiché
      et la prochaine action à envisager.
    </p>
    <p>
      Par exemple, si notre page de photographie de mariage est correctement indexée, nous pouvons
      simplement noter qu'aucun problème d'indexation n'a été identifié lors de cette vérification.
    </p>
    <p>
      Si elle est non indexée, nous pouvons noter le motif et décider d'une investigation
      complémentaire.
    </p>
    <p>
      L'objectif est de construire progressivement une vision claire de la situation, sans
      multiplier les modifications au hasard.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous venons de découvrir comment utiliser Search Console pour vérifier l'indexation d'une page
      précise.
    </p>
    <p>
      Nous savons désormais que le rapport d'indexation permet d'obtenir une vision générale du
      site, tandis que l'inspection d'URL permet d'examiner une page particulière.
    </p>
    <p>
      Nous avons également appris à distinguer plusieurs situations : une page correctement indexée,
      une page découverte mais non explorée, une page explorée mais non indexée ou une page
      rencontrant une restriction technique.
    </p>
    <p>
      Surtout, nous avons compris qu'un statut de non-indexation ne signifie pas automatiquement
      qu'une correction est nécessaire.
    </p>
    <p>
      <strong
        >Avant d'agir, il faut comprendre pourquoi une page n'est pas indexée et déterminer si cette
        situation constitue réellement un problème.</strong
      >
    </p>
    <p>C'est l'une des premières compétences importantes d'un audit SEO.</p>
    <h2>À toi de jouer — Vérifie l'indexation de tes pages stratégiques</h2>
    <p>
      Maintenant que tu sais utiliser les principaux outils d'indexation de Google Search Console,
      il est temps d'appliquer cette méthode à ton propre site.
    </p>
    <p>
      Dans le premier module, tu as sélectionné les trois pages les plus importantes pour ton
      activité. Nous allons reprendre ces pages pour vérifier leur état d'indexation.
    </p>
    <p><strong>Durée estimée : 10 à 15 minutes.</strong></p>
    <h3>Étape 1 — Retrouve tes trois pages prioritaires</h3>
    <p>
      Commence par reprendre les pages que tu as identifiées lors de la mise en pratique du module
      1.
    </p>
    <p>
      Il peut s'agir de ta page d'accueil, d'une page présentant ton principal service ou d'un
      contenu particulièrement important pour attirer de futurs clients.
    </p>
    <p>Conserve leurs adresses complètes afin de pouvoir les examiner dans Search Console.</p>
    <p>
      Si ton site possède moins de trois pages pertinentes, réalise simplement l'exercice avec
      celles qui existent.
    </p>
    <h3>Étape 2 — Inspecte chaque URL</h3>
    <p>
      Connecte-toi à Google Search Console et sélectionne la propriété correspondant à ton site.
    </p>
    <p>Utilise l'outil d'inspection d'URL pour examiner successivement chacune de tes pages.</p>
    <p>
      Pour chaque adresse, note si elle est indexée ou non. Si elle ne l'est pas, relève le motif
      affiché par Google.
    </p>
    <p>
      Prends également quelques instants pour examiner les éventuelles informations complémentaires
      sur l'exploration et l'indexation.
    </p>
    <p>
      L'objectif n'est pas encore de tout comprendre ni de résoudre immédiatement les difficultés
      rencontrées. Il est simplement de recueillir des informations fiables sur la situation de tes
      pages.
    </p>
    <h3>Étape 3 — Identifie les problèmes éventuels</h3>
    <p>Une fois tes vérifications terminées, compare les résultats.</p>
    <p>
      Tes trois pages sont-elles indexées ? Certaines sont-elles simplement découvertes ? D'autres
      présentent-elles une instruction <code>noindex</code> ou une situation nécessitant une
      investigation ?
    </p>
    <p>Essaie de distinguer les cas normaux des problèmes potentiels.</p>
    <p>
      Une page volontairement redirigée ne nécessite pas le même traitement qu'une page importante
      bloquée par erreur.
    </p>
    <p>
      De même, une page récemment publiée peut simplement nécessiter davantage de temps avant d'être
      explorée.
    </p>
    <p>
      Pour le moment, note les situations qui méritent ton attention, sans modifier les paramètres
      techniques que tu ne maîtrises pas.
    </p>
    <h3>Étape 4 — Conserve ton premier diagnostic</h3>
    <p>
      Pour chaque page, conserve son adresse, son état d'indexation et le motif éventuel indiqué par
      Google.
    </p>
    <p>
      Si tu identifies une difficulté, ajoute une courte observation expliquant ce que tu souhaites
      approfondir.
    </p>
    <p>
      Tu peux utiliser un document personnel ou la checklist d'audit SEO fournie avec la formation
      lorsqu'elle est disponible.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir vérifié l'indexation de tes trois pages
      stratégiques et identifié les éventuelles situations qui nécessitent une investigation.
    </p>
    <p>
      Dans « Mon plan d'action », tu peux maintenant marquer l'action « Vérifier l'indexation de mes
      pages » comme terminée.
    </p>
    <p>
      Tu n'as pas besoin d'avoir résolu tous les problèmes pour valider l'exercice. L'objectif de
      cette leçon est d'apprendre à les identifier, pas de maîtriser immédiatement toutes les
      corrections techniques.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      L'indexation constitue une étape importante du référencement naturel. Pour qu'une page puisse
      apparaître normalement dans les résultats organiques de Google, elle doit avoir été prise en
      compte par son index.
    </p>
    <p>
      Mais toutes les URL d'un site n'ont pas nécessairement vocation à être indexées. Certaines
      correspondent à des variantes, à des anciennes adresses ou à des contenus volontairement
      exclus de la recherche.
    </p>
    <p>
      Google Search Console permet de mieux comprendre cette situation grâce à deux outils
      complémentaires.
    </p>
    <p>
      Le rapport d'indexation des pages fournit une vision générale des URL connues de Google et des
      principaux motifs de non-indexation. L'inspection d'URL permet d'examiner une page précise, de
      vérifier son état et de consulter certaines informations sur son exploration.
    </p>
    <p>
      Nous avons également découvert plusieurs statuts importants, notamment « Détectée,
      actuellement non indexée » et « Explorée, actuellement non indexée ». Ces messages ne doivent
      pas être interprétés automatiquement comme des problèmes de qualité ou des sanctions.
    </p>
    <p>
      Enfin, demander l'indexation d'une page ne garantit pas qu'elle sera ajoutée immédiatement à
      Google. Cette fonctionnalité peut être utile, mais elle ne remplace ni un diagnostic ni les
      corrections nécessaires lorsqu'un véritable problème existe.
    </p>
    <p>
      <strong
        >Le bon réflexe n'est pas de chercher à indexer toutes les pages de ton site. C'est de
        vérifier que les pages importantes sont correctement prises en compte et de comprendre
        pourquoi certaines ne le sont pas.</strong
      >
    </p>
    <p>Tu viens ainsi de réaliser l'une des premières étapes concrètes de ton audit SEO.</p>
    <SeoLesson05Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu sais maintenant vérifier si Google connaît et indexe les pages importantes de ton site. Tu
      comprends également les principaux motifs de non-indexation et tu sais utiliser Search Console
      pour effectuer tes premières vérifications.
    </p>
    <p>
      Mais une page correctement indexée n'est pas nécessairement une page qui attire des visiteurs.
    </p>
    <p>
      Il reste donc une question essentielle :
      <strong
        >comment savoir quelles recherches font réellement apparaître ton site et quelles pages
        contribuent déjà à sa visibilité ?</strong
      >
    </p>
    <p>
      Dans la prochaine leçon, nous allons découvrir comment analyser les performances de ton site
      grâce aux données de Google Search Console. Nous apprendrons à comprendre les clics, les
      impressions, le taux de clics et la position moyenne, puis à identifier les premières
      opportunités d'amélioration.
    </p>
    <p>
      Tu pourras ainsi compléter ton diagnostic en passant de l'analyse de l'indexation à celle de
      la visibilité.
    </p>
    <p>
      <strong>Prochaine leçon : Analyser les performances et trouver les premiers freins.</strong>
    </p>
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
