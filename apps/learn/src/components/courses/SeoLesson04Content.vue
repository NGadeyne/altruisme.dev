<script setup lang="ts">
import SeoLesson04Quiz from './SeoLesson04Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Ton site est en ligne. Mais sais-tu vraiment ce qui se passe sur Google ?</h2>
    <p>
      Imagine que tu possèdes un site internet depuis plusieurs mois. Tu as pris le temps de
      présenter tes prestations, de rédiger tes contenus et peut-être même de publier quelques
      articles pour attirer de nouveaux visiteurs. De temps en temps, tu effectues une recherche sur
      Google pour vérifier si ton site apparaît dans les résultats. Tu retrouves ton entreprise
      lorsque tu tapes son nom, mais dès que tu recherches les services que tu proposes, les choses
      deviennent beaucoup moins évidentes.
    </p>
    <p>
      Sur quelles recherches ton site apparaît-il réellement ? Combien de personnes découvrent tes
      pages depuis Google ? Certaines sont-elles absentes des résultats parce qu'elles rencontrent
      un problème technique ? Et surtout, comment savoir si les optimisations que tu réalises
      commencent à produire des effets ?
    </p>
    <p>
      Sans outil adapté, il est difficile de répondre à ces questions. Tu peux multiplier les
      recherches manuelles, surveiller ton nombre de visiteurs ou modifier régulièrement tes
      contenus, mais tu risques de prendre des décisions à partir d'informations incomplètes. C'est
      précisément pour éviter de travailler à l'aveugle que nous allons découvrir Google Search
      Console.
    </p>
    <p>
      Dans le premier module, nous avons appris comment Google découvre, indexe et classe les pages.
      Nous avons également identifié les pages les plus importantes de ton site. Nous allons
      maintenant passer à une nouvelle étape :
      <strong
        >observer ce que Google connaît réellement de ton site et commencer à comprendre sa
        visibilité</strong
      >.
    </p>
    <h2>Comprendre Google Search Console</h2>
    <p>
      Google Search Console est un outil gratuit proposé par Google aux propriétaires et
      gestionnaires de sites internet. Il permet de consulter des informations sur la présence d'un
      site dans les résultats de recherche, de suivre certaines performances et d'identifier des
      problèmes susceptibles d'affecter son exploration ou son indexation.
    </p>
    <p>
      Pour comprendre son intérêt, reprenons l'exemple de notre photographe professionnel à
      Bordeaux. Imaginons qu'il possède un site présentant ses prestations de photographie de
      mariage, ses portraits professionnels et plusieurs articles de conseils. Il souhaite
      développer sa clientèle grâce au référencement naturel, mais ne sait pas précisément comment
      les internautes découvrent son activité.
    </p>
    <p>
      Avec Search Console, il pourrait apprendre que certaines personnes trouvent son site grâce à
      des recherches liées aux portraits professionnels, tandis que ses pages consacrées aux
      mariages apparaissent beaucoup moins souvent. Il pourrait également découvrir qu'un article
      publié plusieurs mois auparavant génère régulièrement des clics, ou qu'une page importante
      n'est pas correctement indexée.
    </p>
    <p>
      Ces informations sont particulièrement intéressantes, car elles permettent de distinguer
      plusieurs situations. Une page peut être absente des résultats parce que Google ne l'a pas
      indexée, mais elle peut également être indexée sans être suffisamment visible sur les
      recherches que tu souhaites cibler. Dans le premier cas, il faudra comprendre ce qui empêche
      sa prise en compte. Dans le second, il sera davantage question de pertinence, de contenu ou de
      concurrence.
    </p>
    <p>
      <strong
        >Google Search Console ne réalise pas ton référencement à ta place. Il te permet de
        comprendre ce qui se passe pour prendre de meilleures décisions.</strong
      >
      C'est une distinction essentielle. Installer l'outil ne garantit ni l'indexation de tes pages
      ni une amélioration de tes positions. En revanche, il te fournit des informations qui pourront
      guider tes prochaines actions.
    </p>
    <h3>Quelle différence avec Google Analytics ?</h3>
    <p>
      Tu as probablement déjà entendu parler de Google Analytics, un autre outil proposé par Google
      pour analyser l'activité d'un site internet. Bien qu'ils soient complémentaires, Google
      Analytics et Google Search Console ne répondent pas exactement aux mêmes questions.
    </p>
    <p>
      Search Console s'intéresse principalement à la présence de ton site dans la recherche Google.
      Il permet notamment d'observer les recherches qui génèrent des impressions, les clics obtenus
      depuis les résultats et certaines difficultés rencontrées par Google lorsqu'il explore ou
      indexe tes pages.
    </p>
    <p>
      Google Analytics s'intéresse davantage à ce qui se passe sur ton site après l'arrivée des
      visiteurs, selon les données que tu as configuré l'outil pour collecter. Il peut notamment
      aider à comprendre les pages consultées, les interactions réalisées et les conversions
      enregistrées.
    </p>
    <p>
      Imaginons que Search Console indique que ta page consacrée à la photographie de mariage a reçu
      150 clics depuis Google au cours du dernier mois. Avec un outil comme Google Analytics, tu
      pourrais ensuite chercher à comprendre comment les visiteurs mesurés ont navigué sur ton site
      et si certains ont réalisé une demande de contact. Les chiffres des deux outils ne seront pas
      nécessairement identiques, car leurs méthodes de collecte et de mesure sont différentes.
    </p>
    <p>
      Pour cette formation, nous allons principalement utiliser Google Search Console. Il permet
      déjà de réaliser une grande partie des premières analyses nécessaires à ton référencement,
      sans avoir à installer de solution supplémentaire.
    </p>
    <h2>Comment connecter son site à Google Search Console ?</h2>
    <p>
      Pour commencer à utiliser Search Console, tu as besoin d'un compte Google et de disposer des
      autorisations nécessaires sur le site que tu souhaites analyser. Un compte Gmail convient
      parfaitement, mais ce n'est pas une obligation : tu peux également utiliser un compte Google
      associé à une autre adresse e-mail.
    </p>
    <p>
      Rends-toi sur
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
        >Google Search Console</a
      >
      et connecte-toi. Si tu utilises l'outil pour la première fois, Google te proposera d'ajouter
      ton site. Si tu possèdes déjà une propriété, tu pourras en ajouter une nouvelle depuis le
      sélecteur présent dans l'interface.
    </p>
    <p>
      Google utilise le terme <em>propriété</em> pour désigner le site, le domaine ou l'ensemble
      d'adresses que tu souhaites suivre. Lors de sa création, tu devras choisir entre deux
      possibilités : une propriété de domaine ou une propriété avec préfixe d'URL.
    </p>
    <h3>Choisir entre une propriété Domaine et une propriété Préfixe d'URL</h3>
    <p>
      Une propriété de domaine permet de regrouper les données des différentes variantes d'un même
      domaine. Par exemple, si tu possèdes <code>exemple.fr</code>, cette propriété pourra couvrir
      les versions utilisant <code>http</code> ou <code>https</code>, les adresses avec ou sans
      <code>www</code>, ainsi que les éventuels sous-domaines comme <code>blog.exemple.fr</code>.
    </p>
    <p>
      C'est généralement une solution intéressante lorsqu'on souhaite obtenir une vision globale de
      son domaine. Pour l'utiliser, il suffit de renseigner le nom du domaine, sans protocole ni
      chemin supplémentaire. Dans notre exemple, nous indiquerions simplement
      <code>exemple.fr</code>.
    </p>
    <p>
      En revanche, cette méthode nécessite une validation au niveau des DNS, c'est-à-dire des
      paramètres techniques associés à ton nom de domaine.
    </p>
    <p>
      La propriété avec préfixe d'URL fonctionne différemment. Elle permet de suivre uniquement les
      adresses qui commencent par le préfixe renseigné. Si tu ajoutes
      <code>https://exemple.fr/</code>, cette propriété ne couvrira pas automatiquement les pages
      accessibles depuis <code>https://www.exemple.fr/</code>, car il s'agit d'un préfixe différent.
    </p>
    <p>
      Cette seconde méthode présente néanmoins un avantage pour les débutants : elle propose
      plusieurs possibilités de validation, notamment grâce à une balise HTML ou à un fichier placé
      sur le site. Certains CMS facilitent directement cette opération.
    </p>
    <p>
      Si tu disposes d'un accès à la configuration DNS de ton domaine, je te recommande généralement
      de choisir une propriété de domaine. Si tu préfères passer par les paramètres de ton outil de
      création de site, une propriété avec préfixe d'URL conviendra également. Les deux permettent
      d'accéder aux principales fonctionnalités nécessaires à cette formation.
    </p>
    <h3>Comprendre la validation de propriété</h3>
    <p>
      Une fois ton site ajouté, Google doit vérifier que tu possèdes les autorisations nécessaires
      pour consulter ses informations. Cette étape s'appelle la <em>validation de propriété</em>.
      Elle est indispensable, car les données disponibles dans Search Console ne sont pas destinées
      à être librement accessibles à n'importe quel internaute.
    </p>
    <p>
      Pour réaliser cette vérification, Google te demande de placer un élément de validation à un
      endroit que tu es normalement le seul à pouvoir modifier en tant que propriétaire ou
      administrateur du site.
    </p>
    <p>
      Si tu as choisi une propriété de domaine, Google te fournira un enregistrement DNS à ajouter
      dans la configuration de ton domaine. Il s'agit généralement d'un enregistrement de type TXT,
      contenant une valeur spécifique fournie par Google.
    </p>
    <p>Cette valeur ressemble à ceci : <code>google-site-verification=xxxxxxxxxxxx</code>.</p>
    <p>
      Tu devras te connecter à l'interface qui gère les DNS de ton domaine, puis ajouter
      l'enregistrement demandé. Selon ta configuration, cette interface peut se trouver chez ton
      registraire, ton hébergeur ou un service spécialisé comme Cloudflare. Il est important de
      comprendre que l'entreprise auprès de laquelle tu as acheté ton nom de domaine n'est pas
      nécessairement celle qui gère ses DNS.
    </p>
    <p>
      Une fois l'enregistrement créé, retourne dans Search Console et lance la validation. Si Google
      parvient à détecter correctement la valeur, la propriété sera confirmée. Il est possible que
      cette opération ne fonctionne pas immédiatement : les modifications DNS peuvent nécessiter un
      certain délai avant d'être détectées.
    </p>
    <p>
      <strong
        >Attention à ne jamais supprimer ou remplacer les autres enregistrements DNS de ton domaine
        pour réaliser cette validation.</strong
      >
      Certains permettent à ton site ou à ta messagerie de fonctionner. Tu dois uniquement ajouter
      l'élément demandé par Google, en respectant les instructions affichées.
    </p>
    <p>
      Si tu as choisi une propriété avec préfixe d'URL, tu peux notamment utiliser une balise HTML.
      Google te fournit alors un petit élément de code à ajouter dans la partie
      <code>&lt;head&gt;</code> de la page d'accueil de ton site. De nombreux CMS proposent un
      emplacement permettant de renseigner cette information sans intervenir directement dans le
      code.
    </p>
    <p>
      Sur WordPress, par exemple, certaines extensions SEO ou des outils comme Site Kit peuvent
      faciliter la validation. D'autres méthodes sont également disponibles selon ta configuration,
      notamment le téléchargement d'un fichier HTML ou l'utilisation de certains services Google
      déjà installés.
    </p>
    <p>
      Quelle que soit la méthode choisie, conserve l'élément de validation après la confirmation.
      Google peut vérifier à nouveau que tu disposes toujours des autorisations nécessaires.
    </p>
    <p>
      Enfin, si ton site est déjà connecté à Search Console par une agence ou un prestataire, il
      n'est pas nécessaire de recommencer toute la procédure. Un propriétaire existant peut te
      donner accès à la propriété, avec les autorisations appropriées.
    </p>
    <h2>Découvrir les principaux rapports de Google Search Console</h2>
    <p>
      Une fois la validation terminée, tu peux accéder à l'interface de ta propriété. C'est ici que
      commencent les choses intéressantes : tu vas pouvoir observer les premières informations dont
      Google dispose concernant ton site.
    </p>
    <p>
      L'interface propose différents rapports et fonctionnalités. Certains sont consacrés aux
      performances dans les résultats de recherche, d'autres à l'indexation ou à des problèmes
      techniques particuliers. Tu n'as pas besoin de maîtriser immédiatement l'ensemble de ces
      outils.
    </p>
    <p>
      Pour commencer, nous allons nous concentrer sur quatre espaces essentiels : la vue d'ensemble,
      le rapport de performances, le rapport d'indexation et l'inspection d'URL.
    </p>
    <h3>La vue d'ensemble : un premier regard sur ton site</h3>
    <p>
      Lorsque tu sélectionnes une propriété, Search Console affiche une page de présentation qui
      regroupe plusieurs informations importantes. Selon les données disponibles, tu pourras
      notamment retrouver une synthèse des performances de ton site dans la recherche Google et des
      informations relatives à l'indexation.
    </p>
    <p>
      Considère cette page comme un point d'entrée vers les différents rapports. Elle te permet de
      repérer rapidement certaines évolutions ou situations qui méritent ton attention, sans
      nécessairement avoir à examiner chaque détail.
    </p>
    <p>
      Si tu viens tout juste de connecter ton site, certains graphiques peuvent être vides. Ce n'est
      pas forcément un problème : les données peuvent demander plusieurs jours avant d'apparaître,
      et un site récent ne possède pas nécessairement beaucoup de visibilité.
    </p>
    <p>
      À ce stade, l'objectif n'est pas de tirer des conclusions. Il est simplement de te
      familiariser avec l'interface et de repérer les informations disponibles.
    </p>
    <h3>Le rapport de performances : comprendre comment les internautes te découvrent</h3>
    <p>
      Le rapport de performances est l'un des espaces les plus utiles pour suivre ton référencement
      naturel. Il permet d'obtenir des informations sur les résultats de ton site dans la recherche
      Google, notamment à travers quatre indicateurs : les clics, les impressions, le CTR moyen et
      la position moyenne.
    </p>
    <p>
      Les <strong>clics</strong> correspondent aux clics enregistrés depuis les résultats de
      recherche Google vers ton site, selon le périmètre du rapport. Les
      <strong>impressions</strong> indiquent les apparitions de tes résultats dans Google, suivant
      les règles de comptabilisation de l'outil. Le <strong>CTR moyen</strong>, ou taux de clics,
      représente la proportion d'impressions ayant généré un clic. Enfin, la
      <strong>position moyenne</strong> fournit une indication sur le classement moyen de tes
      résultats dans les recherches concernées.
    </p>
    <p>
      Imaginons que notre photographe possède une page ayant enregistré 1 000 impressions et 50
      clics au cours d'une période donnée. Son CTR serait alors de 5 %. Cela signifie que le nombre
      de clics correspond à 5 % du nombre d'impressions comptabilisées.
    </p>
    <p>
      Cette information peut être intéressante, mais elle ne suffit pas à déterminer si la page est
      correctement optimisée. Un taux de clics dépend notamment de la recherche effectuée, de la
      position du résultat et de la manière dont Google présente la page.
    </p>
    <p>
      De la même manière, une position moyenne de 12 ne signifie pas que ton site apparaît
      systématiquement à la douzième place. Le classement peut varier selon les recherches et leur
      contexte.
    </p>
    <p>
      Le rapport permet également de consulter certaines requêtes ayant déclenché l'affichage de ton
      site, ainsi que les pages associées aux performances observées. Ces informations seront
      particulièrement utiles pour comprendre quelles parties de ton site possèdent déjà de la
      visibilité et lesquelles méritent d'être améliorées.
    </p>
    <p>
      Nous apprendrons à interpréter ces données dans la leçon 06. Pour le moment, retiens
      simplement qu'elles permettent d'observer la visibilité de ton site à partir de données
      réelles plutôt que d'impressions personnelles.
    </p>
    <h3>Le rapport d'indexation : comprendre quelles pages sont prises en compte</h3>
    <p>
      Dans le premier module, nous avons découvert qu'une page en ligne n'est pas nécessairement
      indexée par Google. Le rapport d'indexation va justement nous aider à approfondir cette
      question.
    </p>
    <p>
      Il permet de consulter des informations sur les pages découvertes par Google et leur état
      d'indexation. Certaines URL peuvent être indexées, tandis que d'autres ne le sont pas pour
      différentes raisons.
    </p>
    <p>
      Il est important de ne pas considérer automatiquement toutes les pages non indexées comme des
      erreurs. Une URL qui redirige vers une nouvelle adresse, une page volontairement exclue de
      l'index ou une variante d'un contenu existant n'a pas nécessairement vocation à apparaître
      séparément dans les résultats de recherche.
    </p>
    <p>
      À l'inverse, si une page essentielle présentant ton principal service n'est pas indexée, il
      peut être intéressant de comprendre pourquoi.
    </p>
    <p>
      C'est précisément ce que nous ferons dans la prochaine leçon, en utilisant les pages
      stratégiques que tu as identifiées au cours du premier module.
    </p>
    <h3>L'inspection d'URL : examiner une page précise</h3>
    <p>
      Le dernier outil que nous allons découvrir est l'inspection d'URL. Contrairement aux rapports
      précédents, qui présentent des informations sur plusieurs pages, cet outil permet d'examiner
      une adresse précise de ton site.
    </p>
    <p>
      Imaginons que notre photographe souhaite vérifier sa page consacrée aux mariages. Il peut
      renseigner directement son adresse dans le champ d'inspection afin de consulter les
      informations dont Google dispose à son sujet.
    </p>
    <p>
      Search Console peut notamment indiquer si cette URL est indexée, fournir certaines
      informations sur son exploration et signaler des problèmes éventuels. Il est également
      possible de réaliser un test de l'URL active pour vérifier certains aspects de son
      accessibilité actuelle.
    </p>
    <p>
      Il faut toutefois distinguer deux choses :
      <strong
        >une page accessible lors d'un test en direct n'est pas nécessairement déjà indexée par
        Google</strong
      >. Le test vérifie certains éléments de l'état actuel de la page, tandis que les informations
      d'indexation reflètent ce que Google connaît de son traitement antérieur.
    </p>
    <p>
      Cette distinction sera importante lorsque nous commencerons à rechercher les causes des
      problèmes d'indexation.
    </p>
    <h2>Démonstration — Connecter son site et explorer Search Console</h2>
    <p>
      Passons maintenant à une manipulation concrète. Pour cette démonstration, nous allons imaginer
      que notre photographe possède un site accessible à l'adresse <code>https://exemple.fr</code>.
      Nous allons le connecter à Search Console, vérifier que la propriété est correctement
      configurée et découvrir les principaux rapports disponibles.
    </p>
    <h3>Étape 1 — Ajouter le domaine</h3>
    <p>
      Ouvre
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
        >Google Search Console</a
      >, puis connecte-toi à ton compte Google. Si aucune propriété n'est encore configurée,
      commence par en ajouter une. Dans le cas contraire, utilise le sélecteur de propriétés pour
      ajouter ton site.
    </p>
    <p>
      Pour notre exemple, nous choisissons une propriété de domaine et renseignons simplement
      <code>exemple.fr</code>. Nous n'ajoutons ni <code>https://</code> ni chemin supplémentaire.
      Google nous propose ensuite une validation par DNS.
    </p>
    <h3>Étape 2 — Valider la propriété</h3>
    <p>
      Google affiche un enregistrement de validation spécifique à notre domaine. Nous copions cette
      information, puis nous ouvrons l'interface qui gère les DNS du site. Dans cette interface,
      nous créons un enregistrement de type TXT en respectant exactement les indications fournies.
    </p>
    <p>
      Une fois la modification enregistrée, nous retournons dans Search Console et demandons la
      validation. Si l'enregistrement est détecté, Google confirme que nous possédons les
      autorisations nécessaires. Si la vérification échoue, nous contrôlons les informations
      renseignées et attendons éventuellement que la modification DNS soit prise en compte avant de
      réessayer.
    </p>
    <p>
      Si tu n'as pas accès aux DNS de ton site, tu peux utiliser une propriété avec préfixe d'URL et
      choisir une autre méthode de validation compatible avec ton environnement.
    </p>
    <h3>Étape 3 — Découvrir les performances</h3>
    <p>
      Une fois la propriété validée, nous accédons à la vue d'ensemble. Nous ouvrons ensuite le
      rapport de performances et observons les indicateurs proposés : clics, impressions, CTR moyen
      et position moyenne.
    </p>
    <p>
      Si des données sont disponibles, nous pouvons également consulter les requêtes et les pages
      présentes dans le rapport. Pour cette première découverte, nous ne cherchons pas encore à
      analyser chaque chiffre. Nous voulons simplement comprendre où se trouvent ces informations et
      à quoi elles correspondent.
    </p>
    <h3>Étape 4 — Découvrir l'indexation et l'inspection d'URL</h3>
    <p>
      Nous ouvrons ensuite le rapport d'indexation des pages, afin d'identifier les informations
      relatives aux URL indexées et non indexées. Nous repérons les différentes catégories
      présentées, sans chercher immédiatement à corriger quoi que ce soit.
    </p>
    <p>
      Enfin, nous utilisons le champ d'inspection d'URL pour examiner une page précise du site. Nous
      pouvons par exemple renseigner l'adresse de la page consacrée à la photographie de mariage.
    </p>
    <p>
      Search Console affiche alors les informations dont Google dispose à son sujet. Si la propriété
      vient d'être créée ou si la page est récente, certaines informations peuvent encore être
      indisponibles.
    </p>
    <p>
      L'objectif de cette démonstration n'est pas de réaliser un audit complet, mais de découvrir
      les outils qui nous permettront de le faire.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous savons maintenant comment connecter un site à Google Search Console, valider notre accès
      et retrouver les principaux rapports. Nous avons également compris que chaque espace répond à
      une question différente : les performances permettent d'observer la visibilité, le rapport
      d'indexation aide à comprendre la prise en compte des pages et l'inspection d'URL permet
      d'examiner une adresse particulière.
    </p>
    <p>
      Nous n'avons encore réalisé aucune optimisation SEO. Pourtant, nous venons de franchir une
      étape importante : nous disposons désormais d'un outil qui nous permettra d'observer notre
      site et de commencer à prendre des décisions sur la base d'informations concrètes.
    </p>
    <h2>À toi de jouer — Configure Google Search Console pour ton site</h2>
    <p>
      Il est maintenant temps de connecter ton propre site. L'objectif de cet exercice est simple :
      disposer d'une propriété Search Console validée et savoir retrouver les principaux rapports
      que nous utiliserons dans la suite de la formation.
    </p>
    <p><strong>Durée estimée : 10 à 20 minutes, hors délai éventuel de validation DNS.</strong></p>
    <h3>1. Ajoute ton site</h3>
    <p>
      Connecte-toi à Google Search Console avec ton compte Google. Si ton site possède déjà une
      propriété configurée, vérifie que tu peux y accéder. Dans le cas contraire, crée une nouvelle
      propriété en choisissant la méthode la plus adaptée à tes accès : Domaine si tu peux gérer les
      DNS, ou Préfixe d'URL si tu préfères utiliser une autre méthode de validation.
    </p>
    <h3>2. Valide ton accès</h3>
    <p>
      Suis les instructions proposées par Google pour confirmer que tu possèdes les autorisations
      nécessaires. Si une modification technique est demandée, assure-toi de comprendre ce que tu
      fais avant de l'appliquer. En cas de difficulté, tu peux consulter la documentation de ton
      fournisseur ou demander de l'aide à la personne qui administre ton site.
    </p>
    <h3>3. Explore les principaux rapports</h3>
    <p>
      Une fois ta propriété validée, ouvre la vue d'ensemble, puis repère le rapport de
      performances, le rapport d'indexation et l'outil d'inspection d'URL. Si des données sont déjà
      disponibles, prends quelques instants pour les observer. Si les rapports sont encore vides, ne
      t'inquiète pas : tu pourras y revenir lorsqu'ils seront alimentés.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> disposer d'un accès validé à Google Search Console
      pour ton site et savoir retrouver les principales fonctionnalités de l'outil.
    </p>
    <p>
      Lorsque ta propriété est correctement configurée, ouvre « Mon plan d'action » dans Altruisme
      Learn et marque l'action « Configurer Google Search Console » comme terminée. Si la validation
      est encore en attente, tu peux simplement laisser cette action « En cours ».
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Google Search Console est un outil gratuit qui permet de mieux comprendre la présence de ton
      site dans les résultats de recherche Google. Il fournit notamment des informations sur les
      clics, les impressions, les recherches qui font apparaître tes pages et leur état
      d'indexation.
    </p>
    <p>
      Pour commencer à l'utiliser, tu dois ajouter ton site sous la forme d'une propriété et valider
      que tu possèdes les autorisations nécessaires. Une propriété de domaine permet de regrouper
      différentes variantes d'un domaine, tandis qu'une propriété avec préfixe d'URL concerne un
      ensemble d'adresses plus précis.
    </p>
    <p>
      Une fois connecté, tu peux découvrir les principaux rapports : la vue d'ensemble pour obtenir
      une première vision, les performances pour observer la visibilité, l'indexation pour
      comprendre comment Google prend en compte les pages et l'inspection d'URL pour examiner une
      adresse spécifique.
    </p>
    <p>
      Enfin, garde en tête que Search Console ne garantit ni l'indexation ni un meilleur classement.
      C'est avant tout un outil d'observation et de diagnostic, qui te permettra progressivement
      d'identifier les problèmes et de prioriser tes optimisations.
    </p>
    <p>
      <strong
        >Le SEO ne consiste pas à modifier ton site au hasard. Il consiste à comprendre sa
        situation, identifier les bonnes opportunités et agir avec méthode.</strong
      >
    </p>
    <SeoLesson04Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu disposes désormais de ton premier outil d'analyse SEO. Tu sais comment accéder à Google
      Search Console, connecter ton site et retrouver les informations essentielles concernant sa
      visibilité.
    </p>
    <p>
      Mais une question importante reste à résoudre :
      <strong>comment vérifier si Google indexe réellement tes pages ?</strong>
    </p>
    <p>
      Dans la prochaine leçon, nous allons approfondir l'utilisation des rapports d'indexation et de
      l'inspection d'URL. Nous apprendrons à distinguer les situations normales des problèmes
      éventuels, à comprendre pourquoi certaines pages ne sont pas indexées et à effectuer les
      premières vérifications nécessaires.
    </p>
    <p>
      Tu pourras alors reprendre les pages stratégiques identifiées dans le module 1 pour réaliser
      tes premiers contrôles.
    </p>
    <p><strong>Prochaine leçon : Vérifier l'indexation et repérer les problèmes.</strong></p>
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
