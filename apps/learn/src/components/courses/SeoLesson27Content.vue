<script setup lang="ts">
import SeoLesson27Quiz from './SeoLesson27Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Pour être cité, encore faut-il pouvoir être découvert et compris</h2>
    <p>
      Imagine que tu possèdes un site internet sur lequel tu publies des guides particulièrement
      complets. Tu connais ton domaine, tu réponds aux questions de tes futurs clients et tu prends
      le temps de vérifier les informations que tu présentes. Tes contenus sont utiles et tu
      commences à obtenir des visites depuis Google. Pourtant, lorsque tu poses certaines questions
      à des assistants comme ChatGPT ou Gemini, ton site n'apparaît pas parmi les sources proposées.
    </p>
    <p>
      Tu pourrais alors penser qu'il te manque une optimisation spécifique pour les moteurs IA.
      Peut-être faudrait-il ajouter un fichier particulier, modifier ton code ou répéter certaines
      formulations afin d'augmenter tes chances d'être cité.
    </p>
    <p>
      Mais avant d'envisager ces modifications, une question plus fondamentale mérite d'être posée :
      les systèmes susceptibles de rechercher tes contenus peuvent-ils réellement y accéder, et les
      informations présentées sont-elles suffisamment claires pour être comprises et utilisées ?
    </p>
    <p>
      Reprenons notre photographe professionnel à Bordeaux. Depuis le début de la formation, nous
      avons construit un site cohérent, optimisé ses pages et préparé plusieurs guides sur la
      photographie de mariage. Il possède maintenant une ressource expliquant comment choisir un
      professionnel, une autre consacrée aux délais de réservation et plusieurs pages présentant ses
      réalisations.
    </p>
    <p>
      Imaginons qu'une personne demande à ChatGPT : « Comment choisir un photographe de mariage à
      Bordeaux et quelles questions faut-il lui poser ? » L'assistant peut éventuellement rechercher
      des informations sur le Web pour construire sa réponse. Mais si le guide de notre photographe
      n'est pas accessible au robot concerné, il peut être plus difficile pour certains systèmes de
      le récupérer directement.
    </p>
    <p>
      À l'inverse, même si sa page est parfaitement accessible, elle ne sera pas nécessairement
      citée. L'assistant peut trouver d'autres sources, privilégier des informations différentes ou
      ne pas présenter de liens vers tous les contenus consultés.
    </p>
    <p>
      Il faut donc distinguer deux objectifs : rendre les informations accessibles lorsqu'un système
      souhaite les consulter, puis proposer des contenus suffisamment utiles et compréhensibles pour
      pouvoir servir de ressources pertinentes.
    </p>
    <p>
      <strong
        >Tu ne peux pas imposer à une intelligence artificielle de citer ton site. En revanche, tu
        peux éviter les obstacles inutiles et améliorer la qualité des informations que tu mets à sa
        disposition.</strong
      >
    </p>
    <p>
      Dans la leçon précédente, nous avons appris à distinguer les réponses générées à partir des
      connaissances d'un modèle, les recherches effectuées sur le Web et les sources affichées à
      l'utilisateur. Nous allons maintenant appliquer ces connaissances à ton propre site.
    </p>
    <p>
      L'objectif n'est pas d'apprendre à programmer un moteur IA, mais de comprendre les principaux
      points de contrôle techniques et éditoriaux qui peuvent contribuer à une meilleure
      accessibilité de tes contenus.
    </p>
    <h2>Le GEO commence par des fondamentaux déjà connus</h2>
    <p>
      Depuis le début de la formation, nous avons consacré plusieurs modules à la qualité des pages,
      à leur organisation et à leur accessibilité.
    </p>
    <p>
      Nous avons notamment étudié le fonctionnement de Google, les intentions de recherche,
      l'indexation, les redirections, le fichier <code>robots.txt</code>, le maillage interne et la
      structure des contenus.
    </p>
    <p>Ces connaissances restent directement utiles.</p>
    <p>
      Une page qui présente clairement son sujet, répond à une question précise et peut être
      consultée sans difficulté possède de bonnes fondations pour être découverte sur le Web.
    </p>
    <p>
      Cela ne signifie pas qu'elle sera automatiquement sélectionnée par un assistant IA. Mais ces
      caractéristiques restent pertinentes, indépendamment de la manière dont les internautes
      accèdent aux informations.
    </p>
    <p>
      Imaginons que notre photographe publie un guide intitulé « Comment préparer les photos de
      groupe pendant un mariage ? ».
    </p>
    <p>
      Si cette page possède une adresse stable, un titre compréhensible, des paragraphes organisés
      et des informations précises, les visiteurs peuvent facilement comprendre son contenu. Les
      moteurs de recherche peuvent également plus facilement identifier les grandes parties de la
      page.
    </p>
    <p>
      À l'inverse, si les informations essentielles sont dissimulées dans une interface difficile
      d'accès, si le contenu est très vague ou si la page renvoie fréquemment des erreurs, sa
      consultation peut devenir plus compliquée.
    </p>
    <p>
      Les moteurs IA ne suppriment donc pas les problèmes que nous avons étudiés dans les modules
      précédents.
    </p>
    <p>Ils rendent simplement utile d'examiner ces problèmes dans un contexte supplémentaire.</p>
    <h3>Il n'existe pas de référencement IA universel</h3>
    <p>
      Un point mérite d'être clarifié dès le départ : les différents outils n'utilisent pas
      nécessairement les mêmes mécanismes de découverte, de recherche ou de citation.
    </p>
    <p>
      Google Search possède ses propres systèmes d'exploration et d'indexation. ChatGPT Search
      utilise notamment des mécanismes de découverte associés à OpenAI et peut recourir à des
      fournisseurs de recherche tiers. D'autres assistants disposent de leurs propres systèmes ou
      s'appuient sur des services externes.
    </p>
    <p>
      Une page accessible dans Google n'est donc pas automatiquement garantie d'apparaître dans
      ChatGPT, et inversement.
    </p>
    <p>Il faut également distinguer l'accessibilité d'une page de sa sélection dans une réponse.</p>
    <p>
      Tu peux rendre une ressource publique, techniquement accessible et parfaitement compréhensible
      sans qu'elle soit jamais citée pour une question particulière.
    </p>
    <p>
      Il n'existe pas de fichier magique, de balise universelle ou de formulation capable de
      garantir le contraire.
    </p>
    <p>
      <strong
        >Le GEO doit donc être abordé comme un ensemble de bonnes pratiques et d'observations, pas
        comme une recette permettant de contrôler les réponses des modèles.</strong
      >
    </p>
    <h2>Vérifier que tes contenus importants sont accessibles</h2>
    <p>La première étape consiste à examiner les conditions d'accès à tes pages.</p>
    <p>
      Une ressource doit pouvoir être consultée par le système qui cherche à la récupérer pour que
      son contenu soit directement exploitable lors de cette consultation.
    </p>
    <p>Cela semble évident, mais plusieurs mécanismes peuvent compliquer l'accès.</p>
    <p>Imaginons que notre photographe possède une page consacrée à ses prestations de mariage.</p>
    <p>Lorsqu'un visiteur ouvre cette page, le navigateur affiche correctement le contenu.</p>
    <p>
      Mais un système automatisé peut rencontrer une situation différente si certaines protections
      bloquent les requêtes, si le serveur renvoie des erreurs ou si des règles particulières
      limitent l'exploration.
    </p>
    <p>
      L'existence d'une page publique ne garantit donc pas que tous les robots puissent y accéder
      dans les mêmes conditions.
    </p>
    <h3>Les erreurs techniques restent importantes</h3>
    <p>Dans la leçon 13, nous avons appris à identifier les principales erreurs HTTP.</p>
    <p>
      Une page qui renvoie normalement une réponse 200 peut être consultée. Une redirection
      permanente peut indiquer qu'une ressource a changé d'adresse. Une erreur 404 signale qu'une
      page n'a pas été trouvée, tandis que certaines réponses 5xx indiquent des difficultés côté
      serveur.
    </p>
    <p>Ces mécanismes conservent leur importance.</p>
    <p>
      Imaginons que notre photographe ait déplacé son guide vers une nouvelle URL, mais que
      l'ancienne adresse soit encore utilisée par plusieurs publications.
    </p>
    <p>
      Si aucune redirection appropriée n'existe, les visiteurs et les systèmes qui suivent ces liens
      peuvent rencontrer une erreur.
    </p>
    <p>
      À l'inverse, une redirection permanente vers une page réellement équivalente permet de
      préserver un parcours cohérent.
    </p>
    <p>
      Il faut également examiner les restrictions imposées par certains pare-feu, réseaux de
      diffusion de contenu ou systèmes de protection contre les robots.
    </p>
    <p>
      Ces dispositifs peuvent être utiles pour protéger un site, mais une configuration trop
      restrictive peut parfois empêcher l'accès de robots légitimes.
    </p>
    <p>Cela ne signifie pas qu'il faut désactiver toutes les protections.</p>
    <p>
      L'objectif est de comprendre quelles requêtes sont autorisées ou bloquées et d'adapter les
      règles en fonction de tes choix.
    </p>
    <h2>Comprendre les différents robots associés à OpenAI</h2>
    <p>Dans la leçon 15, nous avons étudié le rôle du fichier <code>robots.txt</code>.</p>
    <p>Nous savons qu'il permet de communiquer des règles d'exploration aux robots compatibles.</p>
    <p>
      Dans le contexte des moteurs IA, cette notion devient particulièrement importante, car une
      même entreprise peut utiliser différents robots pour des finalités distinctes.
    </p>
    <p>
      OpenAI documente notamment trois identités qu'il est utile de connaître :
      <code>OAI-SearchBot</code>, <code>GPTBot</code> et <code>ChatGPT-User</code>.
    </p>
    <p>Elles ne remplissent pas le même rôle.</p>
    <h3>OAI-SearchBot : la recherche dans ChatGPT</h3>
    <p><code>OAI-SearchBot</code> est associé aux fonctionnalités de recherche de ChatGPT.</p>
    <p>
      OpenAI indique que ce robot sert à permettre aux sites d'apparaître dans les résultats de ses
      expériences de recherche.
    </p>
    <p>
      Si tu souhaites que tes contenus puissent être pris en compte dans les résumés et extraits de
      ChatGPT Search, il est important de vérifier que ce robot n'est pas bloqué sur les pages
      concernées.
    </p>
    <p>Cela ne garantit toutefois pas leur apparition dans une réponse.</p>
    <p>Imaginons que notre photographe possède un guide accessible à <code>OAI-SearchBot</code>.</p>
    <p>
      Son contenu peut être récupéré par ce mécanisme lorsque les autres conditions sont réunies,
      mais ChatGPT reste libre de sélectionner les sources qu'il considère comme pertinentes.
    </p>
    <p>
      L'autorisation d'accès correspond donc à une condition technique favorable, pas à une promesse
      de citation.
    </p>
    <h3>GPTBot : l'exploration destinée à l'entraînement</h3>
    <p><code>GPTBot</code> possède une autre fonction.</p>
    <p>
      OpenAI le documente comme un robot utilisé pour explorer des contenus susceptibles de
      contribuer à l'entraînement de ses modèles d'intelligence artificielle.
    </p>
    <p>Ce rôle doit être distingué de la recherche Web.</p>
    <p>
      Un propriétaire de site peut souhaiter autoriser l'exploration destinée à la recherche tout en
      refusant l'utilisation de contenus collectés par GPTBot pour l'entraînement des modèles.
    </p>
    <p>OpenAI prévoit des réglages distincts pour ces deux usages.</p>
    <p>
      <strong
        >Autoriser <code>OAI-SearchBot</code> et refuser <code>GPTBot</code> sont donc deux
        décisions compatibles.</strong
      >
    </p>
    <p>
      Il n'est pas nécessaire d'autoriser l'entraînement pour demander que son site reste accessible
      à la recherche ChatGPT.
    </p>
    <p>
      Inversement, autoriser GPTBot ne garantit pas qu'un site apparaîtra dans les réponses de
      ChatGPT Search.
    </p>
    <h3>ChatGPT-User : certaines consultations déclenchées par un utilisateur</h3>
    <p><code>ChatGPT-User</code> correspond à une autre catégorie d'accès.</p>
    <p>
      OpenAI indique que cet agent peut être utilisé lors de certaines actions initiées par des
      utilisateurs de ChatGPT ou de GPT personnalisés.
    </p>
    <p>
      Il ne correspond pas à un robot d'exploration automatique général destiné à constituer les
      résultats de recherche.
    </p>
    <p>
      OpenAI précise également que, puisque certaines de ces requêtes sont déclenchées par les
      utilisateurs, les règles <code>robots.txt</code> peuvent ne pas s'appliquer de la même
      manière.
    </p>
    <p>
      Il serait donc incorrect de considérer que bloquer <code>ChatGPT-User</code> revient à retirer
      son site des résultats de ChatGPT Search.
    </p>
    <p>
      Pour gérer l'accès aux fonctionnalités de recherche, c'est principalement la configuration
      concernant <code>OAI-SearchBot</code> qu'il faut examiner.
    </p>
    <h3>Faut-il modifier son fichier robots.txt ?</h3>
    <p>Pas automatiquement.</p>
    <p>
      Imaginons que notre photographe ouvre son fichier <code>robots.txt</code> et ne découvre
      aucune instruction destinée spécifiquement aux robots d'OpenAI.
    </p>
    <p>Cela ne signifie pas que son site est nécessairement bloqué.</p>
    <p>
      Il faut examiner les règles réellement applicables, notamment celles qui concernent tous les
      robots avec <code>User-agent: *</code>.
    </p>
    <p>
      À l'inverse, si le fichier contient une restriction spécifique visant
      <code>OAI-SearchBot</code>, celle-ci peut limiter son accès aux URL concernées.
    </p>
    <p>
      Mais avant de modifier quoi que ce soit, il faut comprendre l'objectif de la configuration
      existante.
    </p>
    <p>
      Certains propriétaires souhaitent volontairement limiter l'accès de robots à leurs contenus.
    </p>
    <p>
      D'autres possèdent des contraintes liées à la sécurité, aux licences ou aux ressources de leur
      serveur.
    </p>
    <p>
      Ces choix ne doivent pas être supprimés simplement pour chercher à améliorer un indicateur de
      visibilité IA.
    </p>
    <p>
      Il faut également rappeler que <code>robots.txt</code> n'est pas une solution de sécurité
      permettant de protéger des informations confidentielles.
    </p>
    <p>
      <strong
        >Pour cette formation, retiens une méthode simple : comprendre le rôle du robot, identifier
        les règles applicables, vérifier leur cohérence avec tes objectifs et éviter toute
        modification dont tu ne maîtrises pas les conséquences.</strong
      >
    </p>
    <h2>Que faut-il vérifier pour les fonctionnalités IA de Google ?</h2>
    <p>
      Google adopte une approche différente pour les fonctionnalités IA intégrées à son moteur de
      recherche.
    </p>
    <p>
      Dans sa documentation officielle, l'entreprise indique que les bonnes pratiques SEO
      habituelles restent pertinentes pour les Aperçus IA et le Mode IA.
    </p>
    <p>
      Elle précise notamment qu'aucune optimisation technique supplémentaire n'est exigée pour
      apparaître dans ces expériences.
    </p>
    <p>
      Pour qu'une page puisse être présentée comme lien de soutien, elle doit respecter les
      exigences techniques de Google Search, être indexée et pouvoir être affichée avec un extrait.
    </p>
    <p>Mais cela ne garantit pas sa sélection.</p>
    <p>
      Imaginons que notre photographe possède un guide indexé dans Google et accessible sans
      restriction particulière.
    </p>
    <p>Cette situation constitue une base favorable.</p>
    <p>
      Mais Google peut très bien ne pas sélectionner cette page pour un Aperçu IA, notamment si
      d'autres ressources correspondent davantage aux besoins de la recherche.
    </p>
    <p>
      Il est donc inutile de chercher une balise spéciale censée déclencher automatiquement son
      apparition.
    </p>
    <h3>Les fondamentaux à conserver</h3>
    <p>
      Les premières vérifications restent celles que nous avons étudiées dans les modules
      précédents.
    </p>
    <p>
      Les pages importantes doivent être accessibles à Googlebot lorsque tu souhaites qu'elles
      soient explorées. Leurs contenus doivent être indexables si ton objectif est de les rendre
      visibles dans la recherche. Les liens internes doivent permettre de découvrir les ressources
      importantes, et les informations principales doivent être disponibles dans le contenu
      réellement accessible.
    </p>
    <p>
      Il faut également veiller à la cohérence des URL canoniques, des redirections et des
      instructions d'indexation.
    </p>
    <p>
      Une page volontairement exclue des résultats Google ne doit pas être considérée comme
      automatiquement éligible aux fonctionnalités IA du moteur.
    </p>
    <p>L'objectif est donc de poursuivre une démarche de SEO technique cohérente.</p>
    <p>
      <strong
        >Pour les fonctionnalités IA de Google, il est préférable de corriger un véritable problème
        d'exploration ou d'indexation plutôt que d'ajouter une optimisation GEO sans utilité
        démontrée.</strong
      >
      &lt;Cite ref="turn895837search5"/&gt;
    </p>
    <h2>Rendre les informations faciles à comprendre</h2>
    <p>L'accessibilité technique constitue une première dimension, mais elle ne suffit pas.</p>
    <p>
      Une page peut être parfaitement accessible tout en proposant des informations difficiles à
      interpréter.
    </p>
    <p>Imaginons que notre photographe possède une page intitulée « Des moments inoubliables ».</p>
    <p>
      Elle comporte de magnifiques photographies et plusieurs phrases évoquant l'émotion, les
      souvenirs et l'importance d'une journée particulière.
    </p>
    <p>
      Mais elle ne précise presque jamais qu'il propose des prestations de photographie de mariage à
      Bordeaux.
    </p>
    <p>Pour un visiteur qui connaît déjà son activité, le contenu peut sembler clair.</p>
    <p>
      Pour une personne découvrant son site, les informations essentielles sont beaucoup moins
      explicites.
    </p>
    <p>
      Et pour un système automatisé cherchant à identifier des ressources sur la photographie de
      mariage à Bordeaux, cette ambiguïté peut également compliquer la compréhension du sujet.
    </p>
    <p>
      Il ne s'agit pas de répéter artificiellement « photographe mariage Bordeaux » dans tous les
      paragraphes.
    </p>
    <p>
      Il s'agit de présenter clairement l'activité, les prestations, les publics concernés et les
      informations utiles.
    </p>
    <h3>Décrire précisément ce que tu proposes</h3>
    <p>Une page de prestation doit permettre de comprendre ce qu'une entreprise réalise.</p>
    <p>
      Notre photographe pourrait expliquer qu'il accompagne des couples pour leurs reportages de
      mariage en Gironde, présenter son approche photographique et préciser les principales étapes
      de sa prestation.
    </p>
    <p>
      Il peut également décrire les informations nécessaires pour demander un devis ou consulter ses
      disponibilités.
    </p>
    <p>Ces éléments rendent sa page plus utile pour les visiteurs.</p>
    <p>
      Ils permettent aussi de mieux identifier les informations importantes sans devoir les déduire
      de formulations trop générales.
    </p>
    <p>Le même principe s'applique à d'autres activités.</p>
    <p>
      Un consultant SEO peut préciser les prestations qu'il propose, les entreprises qu'il
      accompagne et le déroulement de ses interventions.
    </p>
    <p>
      Un développeur indépendant peut présenter les types de produits qu'il réalise, les
      technologies utilisées et les étapes de collaboration.
    </p>
    <p>
      Un artisan peut détailler ses services, sa zone d'intervention et les conditions de ses
      prestations.
    </p>
    <p>
      <strong
        >Une information claire et vérifiable est plus utile qu'une formule marketing
        impressionnante mais difficile à interpréter.</strong
      >
    </p>
    <h2>Structurer ses contenus pour répondre aux bonnes questions</h2>
    <p>
      Dans le module 4, nous avons appris à utiliser les titres et les paragraphes pour organiser
      les informations.
    </p>
    <p>Ces principes restent pertinents dans le contexte du GEO.</p>
    <p>Imaginons que notre photographe possède un guide consacré au choix d'un professionnel.</p>
    <p>
      Le contenu peut commencer par expliquer les principaux critères à comparer, puis approfondir
      les questions relatives au style, à l'expérience, au devis et aux conditions de réservation.
    </p>
    <p>Cette structure permet au lecteur de comprendre rapidement le sujet.</p>
    <p>
      Elle facilite également l'identification des différentes informations présentes dans la page.
    </p>
    <p>
      Mais attention : il ne faut pas chercher à transformer chaque phrase en une réponse très
      courte simplement parce qu'une intelligence artificielle pourrait éventuellement la reprendre.
    </p>
    <p>
      Un guide peut parfaitement proposer des explications développées, des nuances et des exemples.
    </p>
    <p>
      L'objectif n'est pas de rédiger uniquement des définitions destinées aux modèles de langage.
    </p>
    <p>Il est de construire une progression claire.</p>
    <h3>Donner une réponse explicite avant de l'approfondir</h3>
    <p>
      Imaginons que le guide de notre photographe comporte une section intitulée « Quand faut-il
      réserver son photographe de mariage ? ».
    </p>
    <p>
      Il pourrait commencer par expliquer qu'il est préférable d'anticiper sa recherche,
      particulièrement lorsque la date du mariage est connue, puis préciser que les délais varient
      selon la saison, le lieu et les disponibilités du professionnel.
    </p>
    <p>Cette réponse donne immédiatement une orientation au lecteur.</p>
    <p>
      Les paragraphes suivants peuvent ensuite développer les différents facteurs et présenter des
      exemples.
    </p>
    <p>Cette approche possède plusieurs avantages.</p>
    <p>
      Elle évite les introductions inutilement longues, facilite la lecture et rend les informations
      plus explicites.
    </p>
    <p>
      Mais elle n'offre aucune garantie qu'un assistant IA sélectionnera cette phrase comme
      citation.
    </p>
    <p>Elle correspond avant tout à une bonne pratique de rédaction.</p>
    <h3>Éviter les contenus génériques et les réponses inventées</h3>
    <p>
      Il peut être tentant de multiplier les questions-réponses pour couvrir toutes les formulations
      imaginables.
    </p>
    <p>Mais cette approche peut rapidement produire des contenus répétitifs.</p>
    <p>
      Imaginons que notre photographe publie dix pages presque identiques pour expliquer quand
      réserver un professionnel, comment réserver son photographe ou combien de temps avant le
      mariage effectuer une réservation.
    </p>
    <p>
      Si toutes ces pages répondent à la même intention, elles risquent de disperser les
      informations sans créer de véritable valeur supplémentaire.
    </p>
    <p>
      Il serait souvent plus pertinent de proposer une ressource complète, claire et régulièrement
      actualisée.
    </p>
    <p>
      De même, il ne faut pas inventer des réponses pour satisfaire toutes les questions possibles.
    </p>
    <p>Si une information dépend des circonstances, il faut l'expliquer.</p>
    <p>Si un chiffre n'est pas connu, il vaut mieux éviter de le présenter comme un fait.</p>
    <p>
      Les contenus utiles ne sont pas nécessairement ceux qui donnent des réponses catégoriques. Ce
      sont ceux qui permettent de comprendre correctement un sujet.
    </p>
    <h2>Développer la crédibilité et la traçabilité de ses informations</h2>
    <p>
      Dans les modules précédents, nous avons étudié l'importance de l'expérience, de l'expertise et
      de la fiabilité.
    </p>
    <p>
      Ces notions restent particulièrement pertinentes lorsqu'une page est susceptible d'être
      utilisée comme source d'information.
    </p>
    <p>
      Imaginons que notre photographe publie un guide détaillé sur l'organisation d'un reportage.
    </p>
    <p>
      Il peut expliquer sa méthode de préparation, présenter des exemples issus de son expérience et
      montrer certaines réalisations avec les autorisations nécessaires.
    </p>
    <p>Ces éléments permettent de mieux comprendre l'origine de ses conseils.</p>
    <p>
      À l'inverse, un contenu rempli d'affirmations vagues, sans exemple ni explication, peut être
      moins utile pour une personne qui cherche des informations précises.
    </p>
    <p>
      Il faut donc réfléchir à la manière dont tu peux montrer sur quoi reposent les informations
      importantes.
    </p>
    <h3>Identifier clairement l'entreprise ou l'auteur</h3>
    <p>
      Sur un site professionnel, il est utile de présenter suffisamment d'informations pour
      permettre aux visiteurs de comprendre qui publie les contenus.
    </p>
    <p>
      Cela peut notamment passer par une page de présentation, des coordonnées professionnelles, une
      description claire de l'activité ou des informations sur les personnes responsables des
      ressources.
    </p>
    <p>Il n'est pas nécessaire d'ajouter une longue biographie à chaque article.</p>
    <p>L'objectif est de rendre l'identité éditoriale suffisamment explicite.</p>
    <p>
      Pour notre photographe, une page présentant son parcours, ses prestations et ses réalisations
      peut permettre aux futurs clients de mieux comprendre son expérience.
    </p>
    <p>
      Pour un guide rédigé par plusieurs intervenants, il peut également être pertinent de préciser
      leurs contributions lorsque cela apporte une information utile.
    </p>
    <p>Ces éléments participent à la transparence.</p>
    <p>
      Mais il serait trompeur d'affirmer qu'ajouter systématiquement une biographie ou une signature
      garantit une citation dans ChatGPT.
    </p>
    <h3>Vérifier les faits et citer les sources pertinentes</h3>
    <p>
      Lorsqu'un contenu présente des informations vérifiables, il est important de pouvoir les
      justifier.
    </p>
    <p>Imaginons que notre photographe rédige un article consacré aux tendances du mariage.</p>
    <p>
      S'il utilise une statistique issue d'une étude, il doit vérifier sa source et son périmètre.
    </p>
    <p>
      S'il présente une recommandation fondée sur son expérience, il peut expliquer les situations
      rencontrées et les limites de son observation.
    </p>
    <p>
      De même, un consultant SEO qui explique le fonctionnement des balises canoniques peut
      s'appuyer sur la documentation officielle de Google.
    </p>
    <p>Une source externe n'est pas obligatoire pour chaque phrase.</p>
    <p>
      Mais les affirmations importantes, particulièrement lorsqu'elles sont techniques ou
      susceptibles d'évoluer, doivent reposer sur des informations fiables.
    </p>
    <p>Cela permet au lecteur de vérifier les explications.</p>
    <p>Cela rend également le contenu plus transparent lorsqu'il est repris, résumé ou cité.</p>
    <p>
      <strong
        >Chercher à être citable commence par publier des informations qui méritent d'être citées :
        exactes, contextualisées et suffisamment claires pour ne pas être déformées
        facilement.</strong
      >
    </p>
    <h2>Les données structurées peuvent-elles aider les moteurs IA ?</h2>
    <p>
      Tu as peut-être déjà rencontré le terme <em>Schema.org</em> ou l'expression
      <em>données structurées</em>.
    </p>
    <p>
      Il s'agit de formats permettant d'apporter des indications supplémentaires sur la nature des
      informations présentes dans une page.
    </p>
    <p>
      Par exemple, certaines données structurées peuvent décrire une organisation, un article, un
      produit ou une entreprise locale.
    </p>
    <p>
      Google utilise certains types de données structurées pour mieux comprendre les contenus et
      permettre, dans des conditions précises, des affichages enrichis dans ses résultats.
    </p>
    <p>
      Mais il faut éviter une idée reçue :
      <strong
        >ajouter des données structurées ne garantit pas qu'une page sera citée par les moteurs
        IA</strong
      >.
    </p>
    <p>
      Google précise qu'aucun balisage spécial n'est requis pour apparaître dans ses fonctionnalités
      IA.
    </p>
    <p>
      Il indique également que les informations présentes dans les données structurées doivent
      rester cohérentes avec le contenu visible de la page.
    </p>
    <h3>Quand les données structurées sont-elles utiles ?</h3>
    <p>Imaginons que notre photographe possède un site présentant clairement son activité.</p>
    <p>
      Des données structurées adaptées peuvent éventuellement aider à décrire son entreprise ou
      certaines informations relatives à ses contenus.
    </p>
    <p>Mais elles doivent correspondre à des éléments réels et vérifiables.</p>
    <p>
      Il ne serait pas pertinent de déclarer des prestations inexistantes, d'inventer des avis
      clients ou de présenter de fausses distinctions professionnelles simplement pour enrichir le
      balisage.
    </p>
    <p>
      De plus, toutes les données structurées ne donnent pas accès à un affichage spécifique dans
      Google.
    </p>
    <p>Chaque fonctionnalité possède ses propres conditions.</p>
    <p>
      Pour un débutant, la priorité reste donc de présenter des informations claires dans les pages
      elles-mêmes.
    </p>
    <p>
      Les données structurées peuvent constituer une amélioration complémentaire lorsque leur usage
      est adapté et correctement implémenté.
    </p>
    <p>Elles ne doivent pas devenir une étape obligatoire de la stratégie GEO.</p>
    <h2>Faut-il créer un fichier llms.txt ?</h2>
    <p>
      Tu rencontreras peut-être des articles affirmant qu'il faut absolument créer un fichier
      <code>llms.txt</code> à la racine de son site pour être visible dans les moteurs IA.
    </p>
    <p>
      Ce fichier a été proposé comme un moyen de faciliter l'accès de certains outils à une
      présentation structurée des ressources importantes d'un site.
    </p>
    <p>
      L'idée est de proposer une forme de documentation destinée aux systèmes utilisant des modèles
      de langage.
    </p>
    <p>
      Mais il faut distinguer l'existence d'une proposition technique de son adoption effective par
      les principaux moteurs et assistants.
    </p>
    <p>
      À ce jour, il n'existe pas de preuve suffisante permettant d'affirmer qu'un fichier
      <code>llms.txt</code> améliore automatiquement les citations dans ChatGPT ou Gemini.
    </p>
    <p>
      Google indique explicitement qu'aucun fichier de ce type n'est nécessaire pour apparaître dans
      ses fonctionnalités IA, et que Google Search n'utilise pas <code>llms.txt</code> comme
      mécanisme spécifique d'optimisation.
    </p>
    <p>
      Il serait donc incorrect de présenter ce fichier comme un équivalent obligatoire du sitemap
      XML.
    </p>
    <h3>Que faire si ton site possède déjà un fichier llms.txt ?</h3>
    <p>
      Si ton site dispose déjà de ce fichier, il n'est pas nécessaire de le supprimer uniquement
      parce que son impact SEO n'est pas démontré.
    </p>
    <p>
      Il peut éventuellement répondre à un besoin documentaire ou être exploité par certains outils
      qui choisissent de le prendre en charge.
    </p>
    <p>Mais il ne faut pas considérer sa présence comme une garantie de citation.</p>
    <p>
      Pour un entrepreneur qui débute, il existe généralement des priorités plus importantes :
      vérifier que les pages stratégiques sont accessibles, améliorer la clarté des informations et
      publier des contenus utiles.
    </p>
    <p>
      L'objectif est d'investir son temps dans des améliorations dont l'intérêt est compréhensible.
    </p>
    <p>
      <strong
        >Ne transforme pas chaque nouveauté technique présentée comme une « révolution GEO » en une
        tâche obligatoire. Vérifie d'abord si son usage est réellement documenté et pertinent pour
        ton site.</strong
      >
    </p>
    <h2>La notoriété contribue-t-elle à la visibilité dans les moteurs IA ?</h2>
    <p>Dans le module 7, nous avons découvert le rôle des backlinks et des mentions externes.</p>
    <p>
      Ces éléments peuvent également être intéressants dans le contexte plus large de la découverte
      d'informations.
    </p>
    <p>
      Imaginons que notre photographe soit régulièrement présenté dans des publications
      professionnelles, participe à des événements et possède plusieurs réalisations documentées sur
      des sites partenaires.
    </p>
    <p>Ces références peuvent permettre à davantage de personnes de découvrir son activité.</p>
    <p>
      Elles peuvent également contribuer à rendre son nom professionnel et ses prestations plus
      présents dans les informations publiques accessibles sur le Web.
    </p>
    <p>
      Mais il serait excessif d'affirmer que chaque nouvelle mention augmente directement une note
      d'autorité GEO ou garantit sa présence dans les réponses générées.
    </p>
    <p>
      Les systèmes de recherche et de génération restent différents, et leurs mécanismes de
      sélection ne sont pas entièrement publics.
    </p>
    <p>
      La bonne approche consiste donc à poursuivre une stratégie de notoriété légitime, comme nous
      l'avons étudié dans les leçons précédentes.
    </p>
    <p>
      Un article de presse, une collaboration professionnelle ou une citation de source doit
      posséder un intérêt indépendant de son effet éventuel sur les moteurs IA.
    </p>
    <p>
      L'objectif est de renforcer une présence crédible et cohérente, plutôt que de fabriquer
      artificiellement des références.
    </p>
    <h2>Démonstration — Vérifions si le site de notre photographe est prêt à être découvert</h2>
    <p>Passons maintenant à une démonstration concrète.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et examiner l'une de ses
      pages stratégiques.
    </p>
    <p>
      Notre objectif n'est pas de vérifier qu'il apparaît déjà dans ChatGPT ou Gemini. Nous
      réaliserons ce travail dans la prochaine leçon.
    </p>
    <p>
      Nous allons plutôt identifier les éléments techniques et éditoriaux qui pourraient faciliter
      l'accès à ses contenus et leur compréhension.
    </p>
    <p>Les URL et les configurations présentées dans cet exemple sont fictives.</p>
    <h3>Étape 1 — Choisir une page importante</h3>
    <p>Commençons par sélectionner le guide consacré au choix d'un photographe de mariage.</p>
    <p>Nous utiliserons cette adresse fictive :</p>
    <p><code>https://exemple.fr/guides/choisir-photographe-mariage</code></p>
    <p>
      Cette page répond à une question importante pour les futurs clients et possède un lien naturel
      avec les prestations proposées.
    </p>
    <p>Elle constitue donc une bonne candidate pour notre premier contrôle.</p>
    <p>Nous commençons par l'ouvrir dans un navigateur.</p>
    <p>
      Nous vérifions qu'elle fonctionne, que son contenu est visible et qu'aucune connexion à un
      compte n'est nécessaire pour lire le guide.
    </p>
    <p>
      Si la page demande une authentification, le contenu privé ne pourra pas être consulté
      librement par les systèmes de recherche.
    </p>
    <p>
      Il faut donc distinguer les ressources volontairement publiques des contenus que l'entreprise
      souhaite réserver à certaines personnes.
    </p>
    <h3>Étape 2 — Vérifier l'indexation dans Google</h3>
    <p>Nous ouvrons maintenant Google Search Console et utilisons l'outil d'inspection d'URL.</p>
    <p>Nous renseignons l'adresse du guide.</p>
    <p>
      Imaginons que Search Console indique que la page est indexée et qu'aucune restriction
      importante n'empêche son exploration.
    </p>
    <p>Cette information confirme une partie de son accessibilité dans l'écosystème Google.</p>
    <p>
      Mais elle ne nous permet pas de conclure que ChatGPT ou d'autres assistants utilisent cette
      page.
    </p>
    <p>Chaque système possède ses propres mécanismes.</p>
    <p>Nous conservons donc simplement cette observation.</p>
    <p>
      Si la page n'était pas indexée, il faudrait examiner la raison de cette situation avant
      d'envisager une optimisation spécifique aux moteurs IA.
    </p>
    <h3>Étape 3 — Examiner le fichier robots.txt</h3>
    <p>Nous ouvrons ensuite l'adresse :</p>
    <p><code>https://exemple.fr/robots.txt</code></p>
    <p>Nous recherchons les éventuelles règles concernant Googlebot et les robots d'OpenAI.</p>
    <p>
      Imaginons que notre photographe ne découvre aucune restriction explicite visant
      <code>OAI-SearchBot</code>.
    </p>
    <p>
      Nous devons néanmoins tenir compte des autres règles éventuellement applicables et ne pas
      déduire automatiquement que tous les accès sont autorisés.
    </p>
    <p>
      Si une restriction spécifique est présente, nous pouvons noter qu'elle mérite une
      vérification.
    </p>
    <p>Mais nous ne la supprimons pas immédiatement.</p>
    <p>Il faut d'abord comprendre si elle correspond à un choix volontaire.</p>
    <p>
      Il faut également tenir compte d'éventuelles restrictions provenant du serveur, du pare-feu ou
      de l'hébergement, qui ne sont pas nécessairement visibles dans <code>robots.txt</code>.
    </p>
    <h3>Étape 4 — Examiner la clarté des informations</h3>
    <p>Nous retournons maintenant sur notre guide.</p>
    <p>
      Son titre permet-il de comprendre immédiatement le sujet ? Les premières explications
      répondent-elles réellement à la question principale ? Les différentes parties sont-elles
      organisées de manière cohérente ?
    </p>
    <p>
      Imaginons que notre photographe découvre un article intitulé « Le plus beau jour de votre vie
      », alors que son contenu explique en réalité comment sélectionner un prestataire.
    </p>
    <p>
      Il pourrait envisager un titre plus explicite : « Comment choisir son photographe de mariage ?
      »
    </p>
    <p>Cette modification ne garantit pas une citation dans un moteur IA.</p>
    <p>Elle permet surtout de clarifier le sujet pour les visiteurs.</p>
    <p>
      Nous examinons également les informations concernant l'auteur, les exemples utilisés et les
      éventuelles affirmations qui nécessitent une vérification.
    </p>
    <p>
      L'objectif est de repérer les passages qui pourraient être améliorés pour rendre le contenu
      plus précis et plus fiable.
    </p>
    <h3>Étape 5 — Vérifier les ressources complémentaires</h3>
    <p>Notre photographe possède également une page de prestation consacrée aux mariages.</p>
    <p>
      Nous vérifions si le guide permet naturellement d'accéder à cette page lorsque le lecteur
      souhaite découvrir ses services.
    </p>
    <p>
      Nous examinons également les autres contenus complémentaires, notamment celui consacré aux
      délais de réservation.
    </p>
    <p>
      Si les liens internes sont pertinents, ils peuvent faciliter la navigation et la découverte
      des informations.
    </p>
    <p>Nous ne cherchons pas à créer artificiellement un lien vers chaque page du site.</p>
    <p>L'objectif est de proposer un parcours cohérent.</p>
    <h3>Étape 6 — Identifier les premières améliorations</h3>
    <p>À partir de notre analyse, nous pouvons maintenant distinguer plusieurs situations.</p>
    <p>
      La page est techniquement accessible et indexée dans Google. Elle ne présente pas de
      restriction volontairement identifiée concernant <code>OAI-SearchBot</code>. Mais son titre
      pourrait être plus explicite et certains passages gagneraient à présenter des exemples
      concrets.
    </p>
    <p>Nous pouvons donc sélectionner une première amélioration éditoriale.</p>
    <p>
      Notre photographe pourrait notamment clarifier la réponse principale et ajouter un exemple
      réellement issu de son expérience.
    </p>
    <p>
      En revanche, il ne possède aucune raison particulière de créer immédiatement un fichier
      <code>llms.txt</code>, d'ajouter des données structurées sans usage identifié ou de modifier
      toutes les instructions de ses robots.
    </p>
    <p>
      Nous avons donc identifié une amélioration utile sans multiplier les changements techniques.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>Nous venons d'effectuer un premier contrôle GEO en partant des fondamentaux.</p>
    <p>
      Nous avons vérifié l'accessibilité de la page, examiné son indexation dans Google, consulté
      les éventuelles restrictions d'exploration et analysé la clarté du contenu.
    </p>
    <p>
      Nous avons également appris à distinguer une véritable amélioration éditoriale d'une
      optimisation présentée comme indispensable sans justification suffisante.
    </p>
    <p>
      À aucun moment nous n'avons affirmé que ces vérifications garantiraient une citation dans
      ChatGPT ou Gemini.
    </p>
    <p>
      <strong
        >La bonne démarche consiste à rendre les contenus accessibles et compréhensibles, puis à
        observer leur visibilité réelle plutôt que de supposer qu'une modification technique
        produira automatiquement un résultat.</strong
      >
    </p>
    <p>C'est maintenant à toi d'appliquer cette méthode.</p>
    <h2>À toi de jouer — Réalise un premier contrôle GEO de ton site</h2>
    <p>
      Dans la leçon précédente, tu as découvert les différentes formes de visibilité dans les
      moteurs IA et commencé à observer les réponses générées sur des questions liées à ton
      activité.
    </p>
    <p>
      Nous allons maintenant examiner une page importante de ton site pour identifier les
      éventuelles difficultés techniques ou éditoriales qui pourraient compliquer son accès ou sa
      compréhension.
    </p>
    <p>
      L'objectif n'est pas de réaliser un audit technique avancé ni de modifier des fichiers
      sensibles.
    </p>
    <p>
      Nous allons simplement reprendre les fondamentaux déjà étudiés dans la formation et les
      appliquer au contexte des moteurs IA.
    </p>
    <p><strong>Durée estimée : 15 à 20 minutes.</strong></p>
    <h3>Étape 1 — Sélectionne une page stratégique</h3>
    <p>Commence par choisir une page importante de ton site.</p>
    <p>
      Tu peux sélectionner une prestation, un guide pédagogique ou une ressource qui répond à une
      question fréquente de tes futurs clients.
    </p>
    <p>
      Ouvre cette page dans ton navigateur et vérifie qu'elle est accessible sans authentification,
      si elle est destinée au public.
    </p>
    <p>Observe également si son contenu principal est correctement affiché.</p>
    <p>Note les éventuelles difficultés rencontrées.</p>
    <h3>Étape 2 — Vérifie son accessibilité dans Google</h3>
    <p>Ouvre Google Search Console et utilise l'outil d'inspection d'URL.</p>
    <p>Vérifie si la page est indexée et consulte les éventuelles restrictions signalées.</p>
    <p>
      Si la page n'est pas indexée, note la situation sans en conclure automatiquement qu'il existe
      un problème GEO.
    </p>
    <p>Il faudra d'abord comprendre les raisons de l'absence d'indexation.</p>
    <p>
      Tu peux également consulter le fichier <code>robots.txt</code> de ton site pour repérer les
      éventuelles règles concernant les robots d'exploration.
    </p>
    <p>Ne modifie pas immédiatement ces instructions.</p>
    <h3>Étape 3 — Examine les règles concernant les robots IA</h3>
    <p>
      Dans ton fichier <code>robots.txt</code>, recherche notamment les éventuelles références à
      <code>OAI-SearchBot</code> et <code>GPTBot</code>.
    </p>
    <p>Essaie de comprendre la différence entre les deux.</p>
    <p>
      Le premier est associé à la recherche ChatGPT, tandis que le second concerne l'exploration de
      contenus susceptibles d'être utilisés pour l'entraînement des modèles OpenAI.
    </p>
    <p>
      Si aucune règle spécifique n'est présente, examine également les règles générales avant de
      tirer une conclusion.
    </p>
    <p>
      Si ton site utilise un pare-feu ou un service de protection contre les robots, note simplement
      qu'une vérification complémentaire pourrait être nécessaire en cas de problème d'accès
      suspecté.
    </p>
    <p>
      L'objectif est de comprendre ta configuration, pas de chercher à autoriser tous les robots
      indistinctement.
    </p>
    <h3>Étape 4 — Évalue la clarté de ton contenu</h3>
    <p>Retourne sur la page sélectionnée.</p>
    <p>
      Demande-toi si une personne qui découvre ton site peut comprendre rapidement le sujet, les
      informations principales et l'objectif du contenu.
    </p>
    <p>
      Vérifie si les titres sont suffisamment explicites, si les réponses importantes sont
      clairement formulées et si les informations peuvent être justifiées.
    </p>
    <p>
      Essaie également d'identifier les exemples concrets, les réalisations ou les sources qui
      pourraient renforcer la valeur du contenu.
    </p>
    <p>Si une amélioration te semble pertinente, note-la.</p>
    <p>Tu n'as pas besoin de réécrire toute la page.</p>
    <h3>Étape 5 — Sélectionne une amélioration prioritaire</h3>
    <p>Pour terminer, reprends tes observations.</p>
    <p>
      Tu peux avoir identifié un problème technique, une information trop vague ou une page qui
      gagnerait à être reliée à une ressource complémentaire.
    </p>
    <p>Choisis une seule amélioration prioritaire lorsque cela est nécessaire.</p>
    <p>
      Si aucune difficulté évidente n'apparaît, indique simplement que les premiers contrôles n'ont
      révélé aucun problème particulier.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir examiné l'accessibilité d'une page, compris les
      principales règles applicables aux robots de recherche et identifié une amélioration
      éventuelle pour rendre son contenu plus clair ou plus fiable.
    </p>
    <p>
      Ces observations viendront compléter l'action « Évaluer ma visibilité dans les moteurs IA »
      dans « Mon plan d'action ».
    </p>
    <p>
      Tu disposes désormais des éléments nécessaires pour réaliser des tests de visibilité plus
      structurés dans la prochaine leçon.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Rendre un site accessible, compréhensible et citable par les moteurs IA ne nécessite pas de
      reconstruire entièrement sa stratégie SEO.
    </p>
    <p>
      Les fondamentaux que nous avons étudiés restent importants : des pages accessibles, une
      architecture cohérente, des liens internes pertinents et des contenus utiles, fiables et
      clairement organisés.
    </p>
    <p>
      Nous avons découvert que les robots associés à certains services d'intelligence artificielle
      possèdent des fonctions différentes.
    </p>
    <p>
      Chez OpenAI, <code>OAI-SearchBot</code> intervient dans la recherche ChatGPT, tandis que
      <code>GPTBot</code> concerne l'exploration de contenus susceptibles d'être utilisés pour
      l'entraînement des modèles. <code>ChatGPT-User</code> peut intervenir lors de certaines
      consultations déclenchées par les utilisateurs.
    </p>
    <p>Ces usages ne doivent pas être confondus.</p>
    <p>
      Nous avons également appris que Google ne demande aucune optimisation technique spéciale pour
      apparaître dans ses Aperçus IA ou son Mode IA. Les exigences classiques d'exploration,
      d'indexation et de qualité restent pertinentes.
    </p>
    <p>
      Du côté éditorial, nous avons compris l'intérêt de présenter des informations explicites, de
      répondre clairement aux questions importantes et de fournir des éléments fiables permettant de
      comprendre l'origine des affirmations.
    </p>
    <p>
      Les données structurées peuvent être utiles lorsqu'elles correspondent à un usage réel, mais
      elles ne garantissent pas une citation.
    </p>
    <p>
      De même, un fichier <code>llms.txt</code> n'est pas une obligation universelle et ne possède
      pas d'effet démontré garantissant la visibilité dans les principaux moteurs IA.
    </p>
    <p>Enfin, nous avons vu qu'une stratégie GEO doit rester fondée sur des objectifs réalistes.</p>
    <p>
      <strong
        >Tu ne peux pas garantir qu'un assistant IA citera ton site. Mais tu peux rendre tes
        contenus plus faciles à consulter, à comprendre et à vérifier, ce qui améliore leur qualité
        bien au-delà du GEO.</strong
      >
    </p>
    <p>
      Tu possèdes désormais une méthode pour examiner les premiers éléments techniques et éditoriaux
      de ton site sans te disperser dans des optimisations incertaines.
    </p>
    <SeoLesson27Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu comprends désormais comment améliorer les conditions dans lesquelles ton site peut être
      découvert et consulté par les moteurs IA.
    </p>
    <p>
      Tu sais distinguer les principaux robots associés à OpenAI, vérifier les règles générales
      d'exploration et comprendre pourquoi les fondamentaux SEO restent importants dans les
      fonctionnalités IA de Google.
    </p>
    <p>
      Tu as également appris à reconnaître les optimisations éditoriales réellement utiles et à
      prendre du recul face aux fichiers ou aux balises présentés comme indispensables au GEO.
    </p>
    <p>
      Mais une question importante reste à explorer : comment savoir si ton entreprise ou tes
      contenus apparaissent réellement dans les réponses générées ?
    </p>
    <p>
      Dans la prochaine leçon, nous allons apprendre à observer ta visibilité dans plusieurs
      expériences de recherche utilisant l'intelligence artificielle.
    </p>
    <p>
      Nous découvrirons comment préparer des questions représentatives de ton activité, distinguer
      les mentions des citations et conserver un historique simple pour suivre les résultats dans le
      temps.
    </p>
    <p>
      Nous verrons également pourquoi un test isolé ne suffit pas à mesurer une visibilité stable et
      quelles précautions prendre lorsque les réponses varient d'un outil à l'autre.
    </p>
    <p>
      L'objectif ne sera pas de construire un indicateur artificiellement précis, mais de disposer
      d'une première méthode de suivi accessible, sans abonnement à un outil GEO spécialisé.
    </p>
    <p>
      <strong>Prochaine leçon : Mesurer sa visibilité et ses citations dans les moteurs IA.</strong>
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
