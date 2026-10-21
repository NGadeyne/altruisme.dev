<script setup lang="ts">
import SeoLesson23Quiz from './SeoLesson23Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Les internautes ne cherchent plus toujours une liste de liens</h2>
    <p>
      Imagine qu'une personne souhaite trouver un photographe pour son mariage à Bordeaux. Jusqu'à
      présent, elle aurait probablement ouvert Google, saisi une recherche comme « photographe
      mariage Bordeaux », puis consulté plusieurs résultats. Elle aurait comparé les sites, examiné
      les portfolios et lu les avis avant de contacter les professionnels qui lui semblaient
      correspondre à ses attentes.
    </p>
    <p>
      Aujourd'hui, cette personne peut également formuler une demande beaucoup plus détaillée à un
      assistant d'intelligence artificielle. Elle pourrait écrire : « Je prépare un mariage près de
      Bordeaux et je cherche un photographe qui propose des reportages naturels. Comment choisir un
      professionnel et quels critères faut-il comparer ? » L'outil pourrait alors lui présenter une
      réponse structurée, expliquer les éléments à vérifier et, selon ses fonctionnalités et les
      informations accessibles, proposer des sources ou des professionnels à découvrir.
    </p>
    <p>
      Le besoin reste globalement le même : obtenir des informations fiables pour prendre une
      décision. Mais la manière d'accéder à ces informations évolue. Au lieu de consulter
      immédiatement une liste de pages, l'utilisateur peut commencer par lire une réponse rédigée
      par une intelligence artificielle.
    </p>
    <p>
      Reprenons notre photographe professionnel à Bordeaux. Depuis le début de cette formation, nous
      avons travaillé son site pour qu'il puisse être découvert dans les moteurs de recherche
      traditionnels. Nous avons amélioré ses contenus, étudié leur indexation, organisé leur
      maillage interne et commencé à développer sa notoriété. Mais une nouvelle question apparaît :
      ses informations pourraient-elles également être utilisées ou mentionnées dans les réponses
      proposées par des outils comme ChatGPT ou Gemini ?
    </p>
    <p>
      Cette interrogation concerne de plus en plus d'entreprises. Certaines cherchent à comprendre
      pourquoi leur marque apparaît dans une réponse générée, tandis que d'autres souhaitent savoir
      comment faire découvrir leurs contenus à ces nouveaux outils.
    </p>
    <p>
      C'est dans ce contexte qu'on rencontre le terme <strong>GEO</strong>, pour
      <em>Generative Engine Optimization</em>. Il désigne généralement les démarches visant à
      améliorer la présence et la visibilité de contenus ou d'entités dans les expériences de
      recherche utilisant l'intelligence artificielle générative.
    </p>
    <p>
      Mais attention : le GEO ne constitue pas une discipline dotée de règles universelles et
      garanties. Les outils possèdent des fonctionnements différents, leurs systèmes évoluent et
      personne ne peut promettre qu'une page sera systématiquement mentionnée dans leurs réponses.
    </p>
    <p>
      <strong
        >Pour comprendre comment développer ta visibilité dans les moteurs IA, il faut d'abord
        distinguer ce qu'un modèle connaît, ce qu'il recherche sur le Web et les sources qu'il
        décide éventuellement de présenter à l'utilisateur.</strong
      >
    </p>
    <p>
      C'est précisément ce que nous allons étudier dans cette leçon. Nous ne chercherons pas encore
      à modifier ton site ni à installer de nouveaux fichiers techniques. Nous allons commencer par
      comprendre comment ces outils peuvent accéder à l'information, construire leurs réponses et
      sélectionner les références qu'ils affichent.
    </p>
    <h2>Comprendre la différence entre un moteur de recherche et une IA générative</h2>
    <p>
      Dans les premiers modules, nous avons découvert les grandes étapes du fonctionnement de Google
      : l'exploration, l'indexation et le classement.
    </p>
    <p>
      Lorsqu'une personne effectue une recherche classique, Google analyse sa requête et propose
      différentes pages qu'il considère comme pertinentes. L'utilisateur peut ensuite consulter les
      résultats pour accéder directement aux contenus.
    </p>
    <p>
      Une intelligence artificielle générative fonctionne différemment. Elle est capable de produire
      du texte en réponse à une consigne, de reformuler des informations, de comparer des éléments
      et de construire une explication adaptée à une question.
    </p>
    <p>Mais cela ne signifie pas qu'elle fonctionne nécessairement comme un moteur de recherche.</p>
    <p>
      Un assistant peut parfois répondre à partir des connaissances acquises pendant l'entraînement
      de son modèle. Dans d'autres situations, il peut utiliser un outil de recherche, consulter des
      documents fournis par l'utilisateur ou s'appuyer sur des informations récupérées depuis des
      systèmes externes.
    </p>
    <p>Ces différents mécanismes peuvent même être combinés.</p>
    <p>Imaginons que tu demandes à un assistant : « Qu'est-ce que le référencement naturel ? »</p>
    <p>
      Il peut être capable de fournir une explication générale sans effectuer de recherche sur
      Internet. Le SEO est un sujet largement documenté et les modèles de langage ont appris de
      nombreuses régularités sur ce domaine pendant leur entraînement.
    </p>
    <p>
      En revanche, si tu demandes : « Quels photographes proposent actuellement des prestations de
      mariage à Bordeaux ? », l'accès à des informations récentes et vérifiables devient beaucoup
      plus important.
    </p>
    <p>
      Un assistant disposant d'une fonctionnalité de recherche peut alors rechercher des sources sur
      le Web pour construire une réponse plus actuelle.
    </p>
    <p>
      Mais il ne faut pas supposer que chaque réponse déclenche automatiquement une recherche. Cela
      dépend notamment du produit utilisé, de ses fonctionnalités, de la demande et de son
      fonctionnement au moment de la consultation.
    </p>
    <h3>Un modèle de langage ne possède pas une bibliothèque parfaite de toutes ses sources</h3>
    <p>Pour comprendre cette distinction, revenons brièvement à l'entraînement.</p>
    <p>
      Un modèle de langage apprend à reconnaître des relations et des régularités à partir de
      grandes quantités de données. Cet apprentissage lui permet ensuite de produire des réponses
      dans de nombreux domaines.
    </p>
    <p>
      Mais il serait incorrect de considérer qu'il conserve une copie parfaitement organisée de
      chaque page consultée pendant cet entraînement, avec une référence exacte qu'il serait
      toujours capable de retrouver.
    </p>
    <p>
      Ses réponses peuvent s'appuyer sur des connaissances apprises sans qu'une source précise soit
      directement identifiable.
    </p>
    <p>
      Cela explique pourquoi un assistant peut parfois fournir une explication convaincante sans
      présenter de liens.
    </p>
    <p>
      Cela explique également pourquoi il peut se tromper, utiliser une information devenue obsolète
      ou produire une affirmation incorrecte.
    </p>
    <p>La fluidité d'une réponse n'est donc pas une preuve de fiabilité.</p>
    <p>
      <strong
        >Une réponse générée à partir des connaissances d'un modèle n'est pas équivalente à une
        réponse fondée sur une recherche Web récente accompagnée de sources vérifiables.</strong
      >
    </p>
    <p>Cette différence est fondamentale pour comprendre les enjeux du GEO.</p>
    <h2>Comment une IA peut-elle utiliser des sources externes ?</h2>
    <p>
      Certains assistants disposent de fonctionnalités leur permettant de rechercher ou de récupérer
      des informations au moment de répondre.
    </p>
    <p>
      On rencontre notamment le terme <em>RAG</em>, pour <em>Retrieval-Augmented Generation</em>,
      souvent traduit par « génération augmentée par récupération ».
    </p>
    <p>
      Le principe général consiste à compléter les capacités d'un modèle avec des informations
      récupérées depuis une source extérieure.
    </p>
    <p>
      Cette source peut être un document interne, une base de connaissances, un fichier fourni par
      l'utilisateur ou un contenu disponible sur le Web.
    </p>
    <p>
      Mais il faut éviter une généralisation : tous les moteurs IA n'utilisent pas exactement la
      même architecture RAG, et toutes leurs fonctionnalités ne suivent pas un fonctionnement
      identique.
    </p>
    <p>
      Pour simplifier, imaginons qu'un assistant disposant d'un outil de recherche reçoive une
      question sur les prestations photographiques à Bordeaux.
    </p>
    <p>
      Il peut commencer par interpréter le besoin, rechercher des informations pertinentes,
      récupérer certains résultats puis utiliser ces éléments pour préparer sa réponse.
    </p>
    <p>
      L'outil peut éventuellement présenter des liens vers des pages permettant d'approfondir les
      informations.
    </p>
    <p>
      Mais plusieurs décisions interviennent dans ce processus : quelles recherches effectuer,
      quelles informations récupérer, quels éléments utiliser pour la réponse et quelles sources
      afficher à l'utilisateur.
    </p>
    <p>Ces décisions ne sont pas nécessairement identiques d'un service à l'autre.</p>
    <p>Elles peuvent également changer lorsque la formulation de la question évolue.</p>
    <h3>La recherche ne garantit pas l'utilisation de toutes les pages trouvées</h3>
    <p>
      Imaginons que notre photographe possède un guide expliquant comment choisir son professionnel
      de mariage.
    </p>
    <p>Un assistant effectue une recherche sur ce sujet et identifie plusieurs publications.</p>
    <p>
      Le fait que notre guide figure parmi les pages accessibles ne signifie pas qu'il sera
      nécessairement utilisé pour produire la réponse.
    </p>
    <p>
      L'outil peut sélectionner d'autres sources, privilégier certains résultats ou considérer que
      des informations déjà disponibles suffisent.
    </p>
    <p>
      Il peut également récupérer une information provenant de notre guide sans forcément présenter
      son adresse parmi les liens visibles, selon son fonctionnement et les règles applicables.
    </p>
    <p>
      À l'inverse, une page peut être proposée comme ressource complémentaire sans que l'intégralité
      de son contenu ait été utilisée pour construire chaque phrase de la réponse.
    </p>
    <p>
      Il faut donc distinguer la découverte d'une page, son utilisation éventuelle et sa citation
      visible.
    </p>
    <p>Ce sont trois situations différentes.</p>
    <h2>Comment ChatGPT peut-il utiliser les sources ?</h2>
    <p>
      ChatGPT est un assistant conversationnel qui peut répondre à de nombreuses questions et,
      lorsqu'une fonctionnalité de recherche est utilisée, consulter des informations disponibles
      sur le Web.
    </p>
    <p>
      Avec ChatGPT Search, l'outil peut effectuer des recherches pour fournir des informations
      actuelles et proposer des liens vers des sources pertinentes.
    </p>
    <p>
      Ces liens peuvent apparaître dans la réponse ou dans une section permettant de consulter les
      sources associées.
    </p>
    <p>
      Imaginons qu'une personne demande : « Quels critères comparer avant de choisir un photographe
      de mariage à Bordeaux ? »
    </p>
    <p>
      ChatGPT pourrait proposer une explication générale concernant l'expérience du professionnel,
      le style photographique, les prestations comprises et les conditions de réservation.
    </p>
    <p>
      S'il utilise la recherche Web, il peut également récupérer des informations publiées par
      différentes ressources et présenter certaines références.
    </p>
    <p>
      Mais il est important de comprendre que ChatGPT ne fonctionne pas comme un annuaire qui
      afficherait automatiquement tous les professionnels correspondant à une recherche.
    </p>
    <p>
      La sélection des informations et des sources dépend de plusieurs facteurs. Une entreprise ne
      peut pas exiger d'être incluse simplement parce qu'elle possède une page optimisée.
    </p>
    <p>OpenAI précise d'ailleurs que le classement dans la recherche ChatGPT n'est pas garanti.</p>
    <h3>Être cité ne signifie pas avoir été utilisé pour entraîner le modèle</h3>
    <p>
      Une confusion fréquente consiste à penser qu'un site cité par ChatGPT a nécessairement été
      utilisé pendant l'entraînement de son modèle.
    </p>
    <p>Ce n'est pas une conclusion valable.</p>
    <p>
      Un assistant peut consulter une page disponible sur le Web au moment de produire une réponse,
      sans que cette consultation corresponde à l'entraînement du modèle.
    </p>
    <p>L'entraînement et la recherche sont deux opérations distinctes.</p>
    <p>
      De même, une entreprise peut être connue d'un modèle sans que son site soit actuellement
      accessible ou cité dans une recherche Web.
    </p>
    <p>
      Dans la prochaine leçon, nous approfondirons les mécanismes techniques permettant de gérer
      l'accès des robots, notamment les distinctions entre les robots associés à la recherche et
      ceux associés à d'autres usages.
    </p>
    <p>
      Pour le moment, retiens simplement que
      <strong
        >la présence dans une réponse, l'apparition d'un lien et l'utilisation des contenus pour
        entraîner un modèle ne constituent pas la même chose</strong
      >.
    </p>
    <h2>Comment Gemini et les fonctionnalités IA de Google utilisent-ils les sources ?</h2>
    <p>
      Google propose plusieurs expériences utilisant l'intelligence artificielle, mais elles ne
      doivent pas toutes être confondues.
    </p>
    <p>
      Il y a notamment les applications Gemini, qui permettent de dialoguer avec un assistant, et
      les fonctionnalités d'IA intégrées à la recherche Google, comme les Aperçus IA et le Mode IA.
    </p>
    <p>
      Ces expériences possèdent des objectifs proches, mais leurs interfaces et leurs mécanismes ne
      sont pas nécessairement identiques.
    </p>
    <p>
      Dans les applications Gemini, les réponses peuvent parfois présenter des sources et des liens
      associés. Ces références peuvent provenir de sites publics ou, selon les fonctionnalités
      utilisées, de documents fournis par l'utilisateur et de services connectés.
    </p>
    <p>Mais toutes les réponses de Gemini ne comportent pas nécessairement une liste de sources.</p>
    <p>
      L'absence de lien ne signifie donc pas automatiquement que la réponse a été inventée, tout
      comme la présence d'une source ne garantit pas que chaque affirmation est exacte.
    </p>
    <p>
      L'utilisateur doit toujours conserver un esprit critique, particulièrement lorsque les
      informations sont importantes.
    </p>
    <h3>Les Aperçus IA dans Google Search</h3>
    <p>
      Les Aperçus IA, parfois appelés <em>AI Overviews</em>, correspondent à des réponses générées
      par l'intelligence artificielle dans certaines pages de résultats Google.
    </p>
    <p>
      Ils peuvent proposer une synthèse d'informations et des liens permettant d'approfondir le
      sujet.
    </p>
    <p>
      Imaginons qu'une personne effectue une recherche sur les différentes étapes de réservation
      d'un photographe de mariage.
    </p>
    <p>
      Selon la requête et les fonctionnalités disponibles, Google peut afficher une réponse
      synthétique accompagnée de ressources complémentaires.
    </p>
    <p>Mais les Aperçus IA ne s'affichent pas pour toutes les recherches.</p>
    <p>
      Google indique qu'ils apparaissent lorsque ses systèmes estiment qu'une réponse générée
      apporte une valeur supplémentaire par rapport à une recherche classique.
    </p>
    <p>
      Il serait donc incorrect de considérer que chaque mot-clé possède désormais un résultat IA
      qu'il suffirait d'optimiser.
    </p>
    <h3>Le Mode IA dans Google Search</h3>
    <p>Le Mode IA est une autre expérience proposée dans la recherche Google.</p>
    <p>
      Il permet notamment d'explorer des questions plus complexes, de comparer plusieurs éléments et
      de poursuivre une recherche sous forme conversationnelle.
    </p>
    <p>
      Google explique que ses fonctionnalités IA peuvent décomposer certaines demandes en plusieurs
      recherches associées afin de traiter différents aspects du sujet.
    </p>
    <p>Imaginons qu'une personne cherche à organiser son mariage autour de Bordeaux.</p>
    <p>
      Elle pourrait demander une comparaison entre différents types de prestations photographiques,
      préciser son budget et approfondir certains critères.
    </p>
    <p>
      L'outil pourrait alors s'appuyer sur plusieurs recherches et proposer différents liens
      pertinents.
    </p>
    <p>
      Mais les résultats et les sources présentés peuvent varier selon les questions et les systèmes
      utilisés.
    </p>
    <p>
      Il est également important de distinguer ces fonctionnalités de l'application Gemini : même
      lorsqu'elles utilisent des technologies issues d'une même entreprise, elles ne constituent pas
      nécessairement une seule et même expérience de recherche.
    </p>
    <h3>Le SEO reste important pour les fonctionnalités IA de Google</h3>
    <p>
      Google précise qu'il n'existe pas d'optimisation spéciale obligatoire pour apparaître dans les
      Aperçus IA ou le Mode IA.
    </p>
    <p>
      Ses recommandations reposent notamment sur les fondamentaux du référencement : proposer des
      contenus utiles, permettre leur exploration, respecter les exigences techniques et faciliter
      la découverte des pages.
    </p>
    <p>
      Pour qu'une page soit éligible à une apparition comme lien de soutien dans ces
      fonctionnalités, Google indique qu'elle doit notamment être indexée et pouvoir être affichée
      dans les résultats avec un extrait.
    </p>
    <p>Mais cette éligibilité ne garantit pas qu'elle sera sélectionnée.</p>
    <p>C'est une information particulièrement importante pour notre formation.</p>
    <p>
      <strong
        >Le GEO ne remplace pas les fondamentaux du SEO. Dans les expériences de recherche de
        Google, ces fondamentaux restent directement pertinents.</strong
      >
    </p>
    <h2>Mention, citation et lien : trois formes de visibilité différentes</h2>
    <p>
      Lorsque tu commences à observer les réponses des moteurs IA, il faut apprendre à distinguer
      plusieurs situations.
    </p>
    <p>La première est la mention d'une marque ou d'une entreprise.</p>
    <p>
      Imaginons qu'une réponse présente le nom de notre photographe parmi plusieurs professionnels à
      découvrir dans la région bordelaise.
    </p>
    <p>Son activité est mentionnée.</p>
    <p>
      Mais si aucun lien n'accompagne cette mention, l'utilisateur ne dispose pas nécessairement
      d'un accès direct à son site.
    </p>
    <p>La deuxième situation correspond à une citation ou à une référence de contenu.</p>
    <p>
      Imaginons qu'une réponse explique comment organiser les photographies de groupe lors d'un
      mariage et présente le guide de notre photographe comme source associée.
    </p>
    <p>Son contenu bénéficie alors d'une visibilité comme ressource documentaire.</p>
    <p>La troisième situation concerne le lien cliquable.</p>
    <p>Il permet à l'utilisateur de consulter directement une page de son site.</p>
    <p>
      Dans certaines interfaces, une citation et un lien cliquable peuvent apparaître ensemble. Mais
      une mention de marque ne constitue pas nécessairement une citation de source.
    </p>
    <p>Ces distinctions sont importantes pour comprendre les résultats observés.</p>
    <p>
      Un assistant pourrait mentionner une entreprise sans utiliser son site comme source. Il
      pourrait également citer un guide publié par une entreprise sans recommander explicitement les
      prestations qu'elle propose.
    </p>
    <h3>Une citation n'est pas automatiquement une recommandation</h3>
    <p>
      Imaginons qu'un moteur IA cite un guide de notre photographe consacré au choix d'un
      professionnel.
    </p>
    <p>
      Cela peut signifier que la ressource a été présentée comme utile pour approfondir une
      information.
    </p>
    <p>
      Mais il serait incorrect d'en conclure que l'outil recommande nécessairement ce photographe
      comme meilleur prestataire de Bordeaux.
    </p>
    <p>Une source informative et une recommandation commerciale ne remplissent pas le même rôle.</p>
    <p>
      De même, une citation ne signifie pas que Google ou OpenAI garantit la qualité de
      l'entreprise.
    </p>
    <p>
      Les outils peuvent produire des réponses imparfaites, sélectionner des références
      insuffisantes ou présenter des informations devenues obsolètes.
    </p>
    <p>
      Il faut donc éviter de considérer une apparition dans une réponse IA comme une certification
      officielle.
    </p>
    <h3>Une mention sans lien peut-elle être intéressante ?</h3>
    <p>Oui, mais son intérêt reste plus difficile à mesurer.</p>
    <p>
      Imaginons qu'une personne demande à un assistant quels professionnels interviennent dans le
      secteur de la photographie de mariage à Bordeaux.
    </p>
    <p>
      Si notre photographe est mentionné, il peut potentiellement gagner en visibilité auprès de
      cette personne.
    </p>
    <p>
      Mais sans lien ni information permettant de vérifier cette mention, nous ne pouvons pas savoir
      si l'utilisateur découvrira réellement son site.
    </p>
    <p>
      Il serait donc trompeur de traiter toutes les mentions comme des visites ou des opportunités
      commerciales.
    </p>
    <p>
      C'est pourquoi la mesure du GEO nécessite de distinguer les apparitions observées, les liens
      visibles et le trafic éventuellement généré.
    </p>
    <p>Nous approfondirons cette méthode dans la leçon 25.</p>
    <h2>Pourquoi les réponses peuvent-elles changer d'une recherche à l'autre ?</h2>
    <p>
      L'une des principales différences entre l'observation des moteurs IA et celle des résultats
      classiques concerne la variabilité des réponses.
    </p>
    <p>
      Imaginons que notre photographe effectue une première demande à un assistant : « Comment
      trouver un bon photographe de mariage à Bordeaux ? »
    </p>
    <p>Il obtient une réponse présentant plusieurs critères de sélection et quelques ressources.</p>
    <p>
      Il pose ensuite une question proche : « Quels critères comparer avant de réserver un reportage
      photo de mariage en Gironde ? »
    </p>
    <p>Le sujet est similaire, mais les formulations ne sont pas identiques.</p>
    <p>
      L'outil peut comprendre différemment certaines intentions, utiliser d'autres recherches ou
      privilégier des informations complémentaires.
    </p>
    <p>Il peut donc afficher une réponse différente.</p>
    <p>
      Cette variabilité peut également dépendre de l'outil, de son modèle, des fonctionnalités
      activées, de la conversation en cours ou des informations disponibles au moment de la
      recherche.
    </p>
    <p>
      Même deux demandes identiques ne garantissent pas toujours une réponse strictement identique.
    </p>
    <p>
      Il serait donc dangereux de conclure qu'une entreprise possède une visibilité stable
      simplement parce qu'elle apparaît une fois dans une réponse.
    </p>
    <p>
      À l'inverse, l'absence d'une marque dans un test isolé ne prouve pas qu'elle n'est jamais
      mentionnée.
    </p>
    <h3>Pourquoi il n'existe pas de première position universelle dans les moteurs IA</h3>
    <p>
      Dans le référencement traditionnel, on peut examiner la position d'une page sur une requête
      donnée, même si les résultats peuvent déjà varier selon différents paramètres.
    </p>
    <p>Dans les réponses générées par IA, la situation peut être plus complexe.</p>
    <p>
      Une réponse peut présenter une liste d'entreprises, une synthèse sans recommandation,
      plusieurs sources documentaires ou aucune référence visible.
    </p>
    <p>Elle peut également évoluer au fil d'une conversation.</p>
    <p>
      Il n'existe donc pas nécessairement un classement stable et universel des dix meilleures
      ressources pour chaque question.
    </p>
    <p>
      Cela rend les promesses commerciales du type « Nous garantissons que ChatGPT recommandera ton
      entreprise en première position » particulièrement trompeuses.
    </p>
    <p>
      Aucun prestataire ne contrôle les décisions de sélection et de génération des différents
      outils.
    </p>
    <p>
      Pour mesurer sa présence, il faut donc adopter une approche prudente, fondée sur plusieurs
      observations plutôt que sur un résultat isolé.
    </p>
    <h2>Pourquoi les moteurs IA peuvent-ils se tromper ?</h2>
    <p>Un autre point doit être compris avant de chercher à développer sa visibilité.</p>
    <p>Les systèmes d'intelligence artificielle générative peuvent produire des erreurs.</p>
    <p>
      Ils peuvent notamment confondre des informations, utiliser des données anciennes, attribuer
      une affirmation à une mauvaise source ou présenter un élément inexact avec un ton convaincant.
    </p>
    <p>
      On parle parfois d'<em>hallucination</em> lorsqu'un modèle génère des informations qui ne
      correspondent pas aux faits.
    </p>
    <p>
      Imaginons qu'un assistant mentionne notre photographe et affirme qu'il propose une prestation
      particulière à un tarif précis.
    </p>
    <p>
      Si cette information est fausse, la mention pourrait créer une mauvaise compréhension de son
      activité.
    </p>
    <p>Il faut donc éviter de considérer automatiquement toute apparition comme positive.</p>
    <p>
      La présence d'une marque dans une réponse ne suffit pas : les informations présentées doivent
      également être correctes.
    </p>
    <h3>Vérifier les sources affichées</h3>
    <p>Lorsqu'une IA présente des citations, il est utile d'ouvrir les pages correspondantes.</p>
    <p>
      La source contient-elle réellement l'information annoncée ? Est-elle suffisamment récente ? Le
      contexte a-t-il été correctement compris ?
    </p>
    <p>
      Imaginons qu'une réponse cite un article consacré aux mariages pour justifier un conseil sur
      la réservation d'un photographe.
    </p>
    <p>
      Si l'article ne traite pas du sujet annoncé, la citation ne constitue pas une justification
      fiable.
    </p>
    <p>
      Cette vérification est importante pour les utilisateurs, mais aussi pour les propriétaires de
      sites qui cherchent à comprendre leur visibilité.
    </p>
    <p>
      Une source affichée dans une réponse n'est pas une preuve que toutes les informations ont été
      correctement interprétées.
    </p>
    <p>
      <strong
        >Une réponse IA peut être utile sans être parfaite. Une citation permet de vérifier une
        information, mais elle ne garantit pas automatiquement son exactitude.</strong
      >
    </p>
    <h2>Quelles conséquences pour les propriétaires de sites ?</h2>
    <p>
      Maintenant que nous comprenons les principales différences entre les réponses générées et les
      résultats classiques, nous pouvons nous demander ce que cela change pour une entreprise.
    </p>
    <p>Imaginons que notre photographe possède déjà un guide utile et bien structuré.</p>
    <p>
      Ce contenu peut être découvert par Google, consulté directement par des visiteurs et
      éventuellement utilisé ou présenté comme ressource dans certaines expériences de recherche
      utilisant l'IA.
    </p>
    <p>Les mêmes informations peuvent donc jouer plusieurs rôles.</p>
    <p>
      Une page peut attirer une visite depuis un résultat classique, servir de ressource
      complémentaire dans un assistant ou contribuer indirectement à faire connaître une entreprise.
    </p>
    <p>Mais ces résultats ne sont pas garantis.</p>
    <p>
      Il serait donc risqué d'abandonner le référencement traditionnel pour se concentrer
      exclusivement sur le GEO.
    </p>
    <p>
      À l'inverse, ignorer totalement les nouvelles expériences de recherche pourrait empêcher une
      entreprise de comprendre certaines évolutions dans la manière dont son public découvre les
      informations.
    </p>
    <p>
      L'approche la plus cohérente consiste à considérer le GEO comme une dimension complémentaire
      de la visibilité numérique.
    </p>
    <h3>Les fondamentaux de qualité restent essentiels</h3>
    <p>
      Depuis le début de la formation, nous avons appris à identifier les besoins des internautes,
      créer des contenus pertinents, organiser les pages et améliorer leur accessibilité.
    </p>
    <p>Ces compétences restent utiles.</p>
    <p>
      Un contenu clair, précis et fondé sur des informations fiables peut être intéressant pour les
      personnes qui le consultent directement, mais aussi pour des systèmes qui cherchent à
      identifier des ressources pertinentes.
    </p>
    <p>
      De même, une page inaccessible aux robots de recherche ne peut pas être récupérée de la même
      manière qu'une page publique correctement explorée.
    </p>
    <p>Il faut toutefois éviter de transformer ces constats en règles absolues.</p>
    <p>
      Un contenu excellent ne sera pas nécessairement cité. Un balisage technique particulier ne
      garantit pas davantage une mention. Et une entreprise très connue peut parfois apparaître dans
      des réponses sans qu'une page spécifique soit présentée comme source.
    </p>
    <p>
      <strong
        >L'objectif n'est pas de rédiger pour plaire à un modèle. Il reste de produire des
        informations utiles, fiables, accessibles et suffisamment explicites pour être
        comprises.</strong
      >
    </p>
    <p>C'est cette approche que nous approfondirons dans la prochaine leçon.</p>
    <h2>Le GEO doit-il remplacer le SEO ?</h2>
    <p>La réponse est non.</p>
    <p>
      Le SEO correspond à un ensemble de pratiques destinées à améliorer la visibilité d'un site
      dans les moteurs de recherche.
    </p>
    <p>
      Le GEO cherche plus particulièrement à comprendre et à développer sa présence dans les
      expériences de découverte et de réponse utilisant l'intelligence artificielle générative.
    </p>
    <p>
      Ces deux approches peuvent partager plusieurs fondamentaux, notamment la qualité des contenus,
      leur accessibilité, leur pertinence et la compréhension des informations publiées.
    </p>
    <p>Mais elles ne mesurent pas exactement les mêmes choses.</p>
    <p>
      En SEO, tu peux notamment observer l'indexation, les impressions, les clics et l'évolution des
      requêtes dans Google Search Console.
    </p>
    <p>
      En GEO, tu peux chercher à identifier les réponses dans lesquelles ta marque est mentionnée,
      les sources utilisées ou les liens proposés, avec davantage de limites liées à la variabilité
      des résultats.
    </p>
    <p>
      Cela ne signifie pas que le GEO constitue aujourd'hui un système parfaitement standardisé.
    </p>
    <p>
      Les méthodes de mesure évoluent, les outils ne publient pas tous les mêmes données et les
      résultats obtenus doivent être interprétés avec prudence.
    </p>
    <p>
      Pour une petite entreprise ou un indépendant, il n'est donc pas nécessaire de reconstruire
      entièrement sa stratégie.
    </p>
    <p>
      Le plus important est de conserver des bases SEO solides et de commencer à comprendre comment
      ses contenus apparaissent dans les nouvelles expériences de recherche.
    </p>
    <h2>Démonstration — Comment les moteurs IA peuvent répondre à une même question</h2>
    <p>Passons maintenant à une démonstration concrète.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et imaginer qu'il souhaite
      comprendre comment différents outils répondent à une recherche liée à son activité.
    </p>
    <p>
      L'objectif n'est pas de tester directement son positionnement ni de déterminer quel outil
      serait le meilleur.
    </p>
    <p>
      Nous allons simplement observer la manière dont une réponse peut être construite et les
      références éventuellement présentées.
    </p>
    <p>
      Les réponses décrites dans cet exemple sont fictives. Elles illustrent des comportements
      possibles et ne constituent pas des résultats réellement obtenus dans ChatGPT, Gemini ou
      Google.
    </p>
    <h3>Étape 1 — Définir une question représentative</h3>
    <p>Commençons par choisir une question correspondant à un besoin réel de notre public.</p>
    <p>Notre photographe pourrait utiliser celle-ci :</p>
    <p>
      « Comment choisir un photographe de mariage à Bordeaux et quels critères faut-il comparer
      avant de réserver ? »
    </p>
    <p>
      Cette formulation présente plusieurs intérêts. Elle précise une activité, une zone
      géographique et un besoin concret.
    </p>
    <p>Elle ne demande pas directement à l'outil de citer le site de notre photographe.</p>
    <p>
      C'est important, car nous souhaitons observer la manière dont l'assistant répond naturellement
      à une question, pas le pousser à mentionner une entreprise particulière.
    </p>
    <h3>Étape 2 — Observer une réponse générale sans recherche Web</h3>
    <p>
      Imaginons qu'un assistant réponde à partir de ses connaissances générales, sans lancer de
      recherche sur Internet.
    </p>
    <p>
      Il pourrait expliquer qu'il est intéressant de comparer les portfolios, le style
      photographique, les prestations incluses, les conditions de réservation et les échanges avec
      les professionnels.
    </p>
    <p>Cette réponse pourrait être utile.</p>
    <p>
      Mais elle ne présenterait pas nécessairement de prestataires locaux, ni de sources récentes.
    </p>
    <p>
      Nous ne pourrions donc pas en conclure que l'assistant a examiné les sites des photographes
      présents à Bordeaux.
    </p>
    <p>
      Il aurait simplement produit une réponse générale à partir des informations dont il dispose.
    </p>
    <p>
      Cette distinction est essentielle : une réponse pertinente ne signifie pas automatiquement
      qu'une recherche Web a été effectuée.
    </p>
    <h3>Étape 3 — Observer une réponse avec recherche et sources</h3>
    <p>
      Imaginons maintenant que nous utilisions une fonctionnalité permettant à l'assistant de
      rechercher des informations sur le Web.
    </p>
    <p>
      L'outil pourrait identifier plusieurs ressources concernant la photographie de mariage, les
      critères de sélection et les prestations proposées dans la région.
    </p>
    <p>Il pourrait ensuite présenter une réponse structurée, accompagnée de certains liens.</p>
    <p>Nous devrions alors examiner ces liens.</p>
    <p>
      Renvoient-ils vers des guides pédagogiques, des pages commerciales, des annuaires ou des
      articles spécialisés ?
    </p>
    <p>Les informations affichées correspondent-elles réellement au contenu des pages citées ?</p>
    <p>
      Il serait également intéressant de noter si la réponse mentionne des entreprises précises ou
      se limite à des critères généraux.
    </p>
    <p>
      Mais une absence de lien vers notre photographe ne signifierait pas que son site est
      techniquement inaccessible.
    </p>
    <p>L'outil aurait simplement sélectionné d'autres ressources pour cette réponse.</p>
    <h3>Étape 4 — Comparer avec les fonctionnalités IA de Google</h3>
    <p>Nous pouvons maintenant imaginer que la même question soit effectuée dans Google Search.</p>
    <p>
      Selon la disponibilité des fonctionnalités et le type de requête, Google pourrait afficher des
      résultats classiques, un Aperçu IA ou permettre d'explorer le sujet avec le Mode IA.
    </p>
    <p>
      Si une réponse générée est affichée, nous pouvons observer les liens proposés pour approfondir
      le sujet.
    </p>
    <p>Certains pourraient renvoyer vers des guides, d'autres vers des professionnels.</p>
    <p>
      Mais nous ne devons pas supposer que les sources seront identiques à celles présentées par
      ChatGPT.
    </p>
    <p>Les outils utilisent des systèmes et des méthodes différents.</p>
    <p>Il serait donc normal d'observer des résultats distincts.</p>
    <h3>Étape 5 — Distinguer les mentions des citations</h3>
    <p>
      Imaginons que l'un des assistants présente le nom de notre photographe dans une liste de
      professionnels.
    </p>
    <p>Nous disposons alors d'une mention de son activité.</p>
    <p>
      Mais si aucun lien vers son site n'est proposé, nous ne pouvons pas parler d'une citation
      cliquable vers sa page.
    </p>
    <p>
      Imaginons maintenant qu'un autre assistant affiche son guide comme source pour expliquer les
      critères de sélection d'un photographe.
    </p>
    <p>Nous disposons cette fois d'une référence documentaire vers son contenu.</p>
    <p>Les deux situations présentent un intérêt différent.</p>
    <p>Il est donc important de les noter séparément.</p>
    <h3>Étape 6 — Examiner la fiabilité des réponses</h3>
    <p>
      Pour terminer, nous allons vérifier les éventuelles informations concernant les entreprises
      citées.
    </p>
    <p>
      Les prestations mentionnées correspondent-elles à ce qui est réellement proposé ? Les
      informations géographiques sont-elles correctes ? Les liens dirigent-ils vers des pages
      fonctionnelles ?
    </p>
    <p>
      Si une réponse attribue à notre photographe une prestation qu'il ne propose pas, il faut
      relever l'erreur.
    </p>
    <p>
      Nous ne devons pas considérer qu'une mention est nécessairement positive simplement parce
      qu'elle apparaît dans une réponse.
    </p>
    <p>Notre analyse concerne également la qualité des informations présentées.</p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>Nous venons de découvrir plusieurs situations possibles à partir d'une même question.</p>
    <p>
      Un assistant peut répondre sans recherche Web, récupérer des informations récentes, présenter
      des sources ou mentionner des entreprises.
    </p>
    <p>Les réponses peuvent également varier selon les outils et les fonctionnalités utilisées.</p>
    <p>
      Nous avons surtout appris à distinguer les mentions de marques des citations de contenus, et à
      vérifier que les liens présentés correspondent réellement aux affirmations de la réponse.
    </p>
    <p>
      <strong
        >La première étape d'une démarche GEO ne consiste pas à chercher une recette pour apparaître
        dans toutes les réponses. Elle consiste à comprendre les différentes formes de visibilité et
        les limites de ce que l'on peut observer.</strong
      >
    </p>
    <h2>À toi de jouer — Découvre comment les moteurs IA traitent les questions de ton secteur</h2>
    <p>Nous allons maintenant appliquer cette méthode à ton activité.</p>
    <p>
      L'objectif n'est pas encore de mesurer précisément ta visibilité ni d'essayer d'optimiser ton
      site.
    </p>
    <p>
      Nous allons simplement comparer quelques réponses pour comprendre les différences entre les
      informations générales, les mentions d'entreprises et les sources présentées.
    </p>
    <p><strong>Durée estimée : 15 à 20 minutes.</strong></p>
    <h3>Étape 1 — Choisis trois questions représentatives</h3>
    <p>
      Commence par réfléchir aux questions que tes futurs clients pourraient poser à un assistant
      d'intelligence artificielle.
    </p>
    <p>
      Choisis trois demandes différentes, proches des besoins que tu as identifiés pendant la
      formation.
    </p>
    <p>
      Tu peux sélectionner une question pédagogique, une question de comparaison et une question
      liée à la recherche d'un prestataire ou d'une solution.
    </p>
    <p>
      Par exemple, un consultant SEO pourrait examiner comment vérifier l'indexation d'un site,
      comment comparer différentes prestations d'audit et comment choisir un consultant pour
      accompagner une PME.
    </p>
    <p>
      Essaie de formuler des questions naturelles, sans demander artificiellement à l'outil de
      mentionner ton entreprise.
    </p>
    <h3>Étape 2 — Consulte un ou deux outils utilisant l'IA</h3>
    <p>
      Ouvre un assistant auquel tu as accès, comme ChatGPT ou Gemini, et utilise les trois
      questions.
    </p>
    <p>
      Si l'outil propose une fonctionnalité de recherche Web, tu peux l'utiliser pour observer les
      sources présentées.
    </p>
    <p>
      Tu peux également comparer certaines réponses avec les fonctionnalités IA de Google Search
      lorsqu'elles sont disponibles.
    </p>
    <p>Tu n'as pas besoin de créer de compte payant ni de multiplier les tests.</p>
    <p>
      L'objectif est de comprendre le fonctionnement général, pas de produire un classement
      exhaustif des moteurs IA.
    </p>
    <h3>Étape 3 — Observe les différentes formes de réponse</h3>
    <p>Pour chaque question, examine la manière dont l'outil répond.</p>
    <p>
      Présente-t-il une explication générale ? Mentionne-t-il des entreprises ? Affiche-t-il des
      sources ou des liens cliquables ?
    </p>
    <p>
      Lorsque des citations sont disponibles, ouvre-en au moins une pour vérifier qu'elle correspond
      réellement au sujet traité.
    </p>
    <p>Note également si les informations semblent suffisamment précises et fiables.</p>
    <p>
      Si aucune source n'apparaît, ne suppose pas que l'outil n'a utilisé aucune information
      extérieure. Contente-toi de noter qu'aucune citation visible n'est proposée.
    </p>
    <h3>Étape 4 — Conserve tes premières observations</h3>
    <p>
      Pour terminer, note les questions utilisées, les outils consultés et les principales
      observations.
    </p>
    <p>
      Essaie d'identifier les types de ressources qui apparaissent : guides pédagogiques, pages
      commerciales, médias, publications spécialisées ou autres formats.
    </p>
    <p>
      Tu peux également noter si ton entreprise ou ton site sont mentionnés, mais ne cherche pas
      encore à tirer une conclusion définitive sur ta visibilité.
    </p>
    <p>Une seule réponse ne constitue pas une mesure suffisamment représentative.</p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir testé trois questions pertinentes, observé au
      moins un outil utilisant l'IA et compris la différence entre une réponse générale, une mention
      de marque et une citation de source.
    </p>
    <p>
      Ces observations constituent une première introduction au GEO. Elles seront utiles pour la
      leçon 25, consacrée à la mesure de ta visibilité.
    </p>
    <p>
      L'action « Évaluer ma visibilité dans les moteurs IA » de « Mon plan d'action » sera finalisée
      après les vérifications techniques et les tests plus structurés des prochaines leçons.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Les outils utilisant l'intelligence artificielle générative permettent aux internautes
      d'obtenir des réponses rédigées à partir de différents types d'informations.
    </p>
    <p>
      Certains assistants peuvent répondre grâce aux connaissances acquises pendant l'entraînement
      de leur modèle. D'autres fonctionnalités permettent de rechercher des informations sur le Web,
      de consulter des documents ou d'utiliser des ressources externes pour construire une réponse.
    </p>
    <p>Ces mécanismes sont différents et peuvent être combinés.</p>
    <p>
      Nous avons découvert que ChatGPT Search peut effectuer des recherches Web et présenter des
      liens vers des sources pertinentes. Nous avons également distingué les applications Gemini des
      fonctionnalités IA intégrées à Google Search, notamment les Aperçus IA et le Mode IA.
    </p>
    <p>
      Mais ces outils ne présentent pas nécessairement les mêmes réponses, les mêmes sources ou les
      mêmes entreprises.
    </p>
    <p>
      Nous avons aussi appris à distinguer une mention de marque, une citation documentaire et un
      lien cliquable.
    </p>
    <p>
      Une entreprise peut apparaître dans une réponse sans que son site soit cité. À l'inverse, un
      contenu peut être présenté comme source sans constituer une recommandation commerciale.
    </p>
    <p>
      Il est également essentiel de comprendre que les réponses générées peuvent comporter des
      erreurs.
    </p>
    <p>
      Les citations doivent donc être vérifiées, et la présence d'une entreprise ne garantit ni
      l'exactitude des informations ni la qualité de ses prestations.
    </p>
    <p>
      Enfin, nous avons découvert que le GEO constitue une approche complémentaire du SEO, sans le
      remplacer.
    </p>
    <p>
      Les fondamentaux du référencement restent essentiels : proposer des contenus pertinents,
      utiles, accessibles et fiables.
    </p>
    <p>
      <strong
        >Le bon objectif n'est pas de forcer les moteurs IA à citer ton entreprise. Il est de
        comprendre comment ils utilisent les informations et de construire des ressources qui
        méritent réellement d'être découvertes et consultées.</strong
      >
    </p>
    <p>
      Tu disposes désormais des bases nécessaires pour approfondir la visibilité de ton site dans
      les expériences de recherche utilisant l'intelligence artificielle.
    </p>
    <SeoLesson23Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu comprends désormais les principales différences entre un moteur de recherche traditionnel
      et les expériences de recherche utilisant l'intelligence artificielle générative.
    </p>
    <p>
      Tu sais qu'un assistant peut répondre à partir de ses connaissances ou s'appuyer sur des
      sources externes, et que la présence d'une entreprise dans une réponse ne signifie pas
      nécessairement que son site a été cité.
    </p>
    <p>
      Mais une question importante reste à explorer : comment rendre ton site suffisamment
      accessible et compréhensible pour que ses informations puissent être correctement découvertes
      et interprétées ?
    </p>
    <p>
      Dans la prochaine leçon, nous allons revenir à certains fondamentaux techniques du SEO pour
      les appliquer au contexte des moteurs IA.
    </p>
    <p>
      Nous étudierons notamment les conditions d'accès aux contenus, les différences entre certains
      robots d'exploration et l'importance de présenter des informations claires, cohérentes et
      vérifiables.
    </p>
    <p>
      Nous verrons également pourquoi il faut rester prudent face aux optimisations présentées comme
      indispensables pour le GEO, notamment lorsqu'aucune documentation officielle ne confirme leur
      intérêt.
    </p>
    <p>
      L'objectif ne sera pas d'installer une série de fichiers techniques sans comprendre leur rôle,
      mais de renforcer les qualités qui rendent déjà ton site accessible et utile aux internautes.
    </p>
    <p>
      <strong
        >Prochaine leçon : Rendre son site accessible, compréhensible et citable par les IA.</strong
      >
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
