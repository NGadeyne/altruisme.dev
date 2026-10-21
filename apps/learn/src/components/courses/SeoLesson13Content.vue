<script setup lang="ts">
import SeoLesson13Quiz from './SeoLesson13Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Ton contenu est prêt. Mais ton site permet-il vraiment à Google d'y accéder ?</h2>
    <p>
      Imagine que tu possèdes un site internet depuis plusieurs mois. Tu as rédigé tes principales
      pages, sélectionné des mots-clés pertinents et commencé à améliorer tes contenus. Tes titres
      sont plus clairs, tes prestations sont mieux expliquées et tu as créé des liens internes pour
      faciliter la navigation.
    </p>
    <p>
      Pourtant, certaines pages importantes restent absentes des résultats Google. Tu as vérifié
      leur contenu, comparé tes titres avec ceux d'autres sites et demandé leur indexation dans
      Google Search Console. Malgré ces efforts, la situation ne semble pas évoluer.
    </p>
    <p>
      Tu pourrais alors penser que tes textes ne sont pas suffisamment bons, que ton site manque
      d'autorité ou que la concurrence est trop importante. Mais le problème se trouve peut-être
      ailleurs : dans le fonctionnement technique de ton site.
    </p>
    <p>
      Imaginons que notre photographe professionnel à Bordeaux possède une page consacrée à ses
      prestations de mariage. Elle présente ses réalisations, répond aux questions des futurs mariés
      et permet de demander un devis. Pourtant, lorsqu'un robot de Google essaie de consulter son
      adresse, le serveur renvoie une erreur. Dans cette situation, améliorer encore les paragraphes
      de la page ne résoudra pas nécessairement le problème.
    </p>
    <p>Il faudrait d'abord permettre au moteur de recherche d'accéder correctement au contenu.</p>
    <p>
      C'est précisément le rôle du SEO technique :
      <strong
        >s'assurer que les moteurs de recherche peuvent découvrir, explorer et interpréter les pages
        importantes dans de bonnes conditions</strong
      >.
    </p>
    <p>
      Dans les premiers modules, nous avons déjà abordé certaines notions techniques. Nous avons
      découvert le fonctionnement de Google, appris à utiliser Search Console et identifié les
      principales situations de non-indexation. Nous allons maintenant approfondir ces connaissances
      pour comprendre les problèmes les plus fréquents et les premières corrections possibles.
    </p>
    <p>
      L'objectif n'est pas de faire de toi un développeur web. Tu n'as pas besoin de maîtriser la
      configuration d'un serveur ou de connaître tous les codes HTTP pour améliorer ton
      référencement.
    </p>
    <p>
      En revanche, tu dois être capable de reconnaître un problème important, de comprendre ses
      conséquences et de savoir quelles vérifications effectuer avant de modifier ton site.
    </p>
    <h2>Comprendre ce qu'est un frein technique au référencement</h2>
    <p>
      Le référencement naturel repose sur plusieurs dimensions complémentaires. Nous avons notamment
      travaillé la pertinence des contenus, les intentions de recherche et la manière dont les pages
      sont reliées entre elles.
    </p>
    <p>
      Mais même un excellent contenu peut rencontrer des difficultés de visibilité si Google ne
      parvient pas à y accéder ou à l'interpréter correctement.
    </p>
    <p>
      Un frein technique correspond à une configuration, une erreur ou un fonctionnement du site qui
      peut compliquer sa découverte, son exploration, son indexation ou son utilisation.
    </p>
    <p>
      Il peut s'agir d'une page inaccessible, d'une instruction empêchant son indexation, d'une
      redirection incorrecte ou d'un contenu qui ne s'affiche pas correctement lorsque Google essaie
      de le consulter.
    </p>
    <p>
      Certains problèmes concernent uniquement une page. D'autres peuvent affecter une partie
      importante du site, voire l'ensemble de ses contenus.
    </p>
    <p>Prenons un exemple.</p>
    <p>
      Si une ancienne page supprimée renvoie une erreur 404, cela ne constitue pas nécessairement un
      problème. Le serveur indique simplement que le contenu demandé n'existe plus.
    </p>
    <p>
      En revanche, si ta principale page de prestation renvoie cette même erreur alors qu'elle
      devrait être accessible, la situation est différente.
    </p>
    <p>Le code technique est identique, mais les conséquences ne le sont pas.</p>
    <p>
      <strong
        >Un problème technique ne doit donc jamais être évalué uniquement à partir de son nom ou du
        message affiché par un outil. Il faut comprendre quelles pages sont concernées et ce qui
        devrait normalement se produire.</strong
      >
    </p>
    <p>
      C'est une notion essentielle pour éviter de chercher à corriger toutes les alertes sans
      distinction.
    </p>
    <h3>Revenir aux trois étapes du fonctionnement de Google</h3>
    <p>
      Dans le premier module, nous avons découvert les trois grandes étapes permettant à Google de
      proposer des pages dans ses résultats : l'exploration, l'indexation et le classement.
    </p>
    <p>
      Ces étapes permettent également de comprendre les conséquences possibles d'un problème
      technique.
    </p>
    <p>
      Lors de l'exploration, Google cherche à accéder aux URL découvertes pour récupérer leur
      contenu. Si le serveur ne répond pas correctement, si une restriction empêche l'accès ou si
      certaines ressources essentielles ne peuvent pas être chargées, cette étape peut être
      perturbée.
    </p>
    <p>
      Lors de l'indexation, Google analyse les informations récupérées et détermine notamment si la
      page peut être conservée dans son index. Certaines instructions techniques, comme
      <code>noindex</code>, peuvent lui demander explicitement de ne pas l'indexer.
    </p>
    <p>
      Enfin, lors du classement, Google sélectionne les résultats qu'il estime pertinents pour une
      recherche. Les problèmes techniques peuvent limiter les informations dont ses systèmes
      disposent, mais une page techniquement correcte n'obtient pas automatiquement de bonnes
      positions.
    </p>
    <p>
      Cette distinction permet de comprendre pourquoi le SEO technique ne suffit pas, à lui seul, à
      rendre un site visible.
    </p>
    <p>
      Il contribue à rendre tes contenus accessibles et exploitables. Leur pertinence, leur utilité
      et les autres éléments du référencement restent essentiels.
    </p>
    <h2>Comprendre les réponses envoyées par un serveur</h2>
    <p>
      Pour reconnaître certains problèmes techniques, il est utile de comprendre ce qui se passe
      lorsqu'un navigateur ou un robot demande une page.
    </p>
    <p>
      Lorsque tu ouvres une adresse Internet, ton navigateur envoie une requête au serveur qui
      héberge le site. Le serveur lui renvoie une réponse contenant notamment un code d'état HTTP.
    </p>
    <p>Ce code permet d'indiquer ce qui s'est produit.</p>
    <p>
      Tu n'as pas besoin de les mémoriser tous. Quelques familles de codes suffisent pour comprendre
      une grande partie des situations que tu pourrais rencontrer.
    </p>
    <h3>Le code 200 : la requête a réussi</h3>
    <p>
      Le code <code>200</code> indique généralement que le serveur a traité la demande avec succès.
    </p>
    <p>
      Imaginons que tu ouvres la page consacrée aux mariages de notre photographe. Si le serveur
      répond avec un code 200 et fournit correctement son contenu, cela signifie que la requête a
      abouti.
    </p>
    <p>
      C'est généralement ce que nous attendons d'une page publique que nous souhaitons rendre
      accessible et indexable.
    </p>
    <p>Mais attention : un code 200 ne signifie pas automatiquement que Google indexera la page.</p>
    <p>
      Le contenu peut comporter une instruction <code>noindex</code>, être considéré comme une
      version secondaire d'une autre URL ou ne pas être retenu dans l'index pour d'autres raisons.
    </p>
    <p>
      Le code HTTP nous renseigne donc sur la réponse du serveur, pas sur l'ensemble de la situation
      SEO.
    </p>
    <h3>Les codes 301 et 308 : une page a été déplacée</h3>
    <p>Certains codes indiquent qu'une ressource doit être consultée à une autre adresse.</p>
    <p>
      C'est notamment le rôle des redirections permanentes, comme les codes <code>301</code> et
      <code>308</code>.
    </p>
    <p>
      Imaginons que notre photographe remplace une ancienne page <code>/mariage</code> par une
      nouvelle adresse <code>/prestations/mariage</code>.
    </p>
    <p>
      Une redirection appropriée permet aux visiteurs qui utilisent l'ancienne adresse d'être
      automatiquement envoyés vers la nouvelle.
    </p>
    <p>
      Ces redirections peuvent également aider les moteurs de recherche à comprendre qu'un contenu a
      changé d'adresse.
    </p>
    <p>
      Une redirection n'est donc pas nécessairement une erreur. Elle peut au contraire faire partie
      du fonctionnement normal d'un site.
    </p>
    <p>
      En revanche, une redirection qui mène vers la mauvaise page, qui provoque une boucle ou qui ne
      fonctionne plus peut créer des difficultés.
    </p>
    <p>Nous approfondirons les redirections et l'organisation des URL dans la prochaine leçon.</p>
    <h3>Le code 404 : la page demandée n'existe pas</h3>
    <p>Le code <code>404</code> indique que le serveur ne trouve pas la ressource demandée.</p>
    <p>C'est l'une des erreurs les plus connues sur Internet.</p>
    <p>
      Imaginons qu'un visiteur utilise un ancien lien vers une page supprimée. Si cette page
      n'existe plus et qu'aucun contenu équivalent ne la remplace, un code 404 peut être
      parfaitement normal.
    </p>
    <p>Google ne considère pas automatiquement chaque erreur 404 comme une pénalité SEO.</p>
    <p>Mais prenons une autre situation.</p>
    <p>
      Notre photographe possède une page présentant ses principales prestations de mariage. Cette
      page existe toujours dans son outil de création de site, mais son adresse a été modifiée sans
      que les liens internes soient mis à jour.
    </p>
    <p>Lorsqu'un visiteur clique depuis la page d'accueil, il arrive sur une erreur 404.</p>
    <p>Cette fois, nous avons identifié un véritable problème de navigation.</p>
    <p>
      La première correction consiste à vérifier l'adresse de destination et à rétablir un lien
      fonctionnel vers la page prévue. Si l'ancienne URL a réellement été remplacée par une nouvelle
      page équivalente, une redirection permanente peut également être appropriée.
    </p>
    <p>
      Mais il ne faut pas rediriger automatiquement toutes les erreurs 404 vers la page d'accueil.
    </p>
    <p>
      Si aucun contenu équivalent n'existe, conserver une véritable réponse 404 ou 410 peut être
      plus cohérent.
    </p>
    <p>
      <strong
        >Une erreur 404 devient surtout préoccupante lorsqu'elle concerne un contenu qui devrait
        être disponible ou lorsqu'elle empêche les visiteurs et les moteurs de recherche d'accéder à
        une page importante.</strong
      >
    </p>
    <h3>Les codes 5xx : le serveur rencontre un problème</h3>
    <p>
      Les codes de la famille <code>5xx</code> signalent des difficultés du côté du serveur ou de
      l'infrastructure qui traite la requête.
    </p>
    <p>
      Tu pourrais notamment rencontrer des erreurs <code>500</code>, <code>502</code>,
      <code>503</code> ou <code>504</code>.
    </p>
    <p>
      Ces codes correspondent à des situations différentes, mais ils possèdent un point commun : le
      serveur ou un intermédiaire n'a pas réussi à fournir normalement la réponse attendue.
    </p>
    <p>
      Imaginons que notre photographe publie une nouvelle version de son site et qu'une erreur de
      configuration empêche temporairement l'accès à certaines pages.
    </p>
    <p>Lorsqu'un utilisateur essaie de les consulter, il reçoit une erreur serveur.</p>
    <p>
      Si le problème est ponctuel et rapidement résolu, ses conséquences peuvent rester limitées.
    </p>
    <p>
      En revanche, si Google rencontre régulièrement ces erreurs lorsqu'il essaie d'explorer les
      pages, leur récupération peut devenir difficile. Des problèmes persistants peuvent également
      affecter leur présence dans l'index.
    </p>
    <p>
      Il est donc important de prendre ces erreurs au sérieux lorsqu'elles concernent des contenus
      essentiels.
    </p>
    <p>
      Pour les corriger, il peut être nécessaire de vérifier l'hébergement, le CMS, les extensions,
      la configuration du serveur ou les services intermédiaires.
    </p>
    <p>
      Tu n'as pas besoin de réaliser toutes ces vérifications toi-même. Si tu utilises un
      hébergement administré ou un prestataire technique, tu peux lui transmettre les adresses
      concernées, les messages observés et le moment auquel les erreurs sont apparues.
    </p>
    <p>Un diagnostic précis lui permettra généralement d'intervenir plus efficacement.</p>
    <h2>Reconnaître les restrictions d'accès</h2>
    <p>
      Toutes les difficultés d'exploration ne proviennent pas d'une page supprimée ou d'un serveur
      qui ne fonctionne plus.
    </p>
    <p>
      Parfois, le site répond correctement aux visiteurs habituels, mais limite l'accès de certains
      utilisateurs ou robots.
    </p>
    <p>
      Ces restrictions peuvent être volontaires, notamment pour protéger des contenus privés ou
      empêcher des usages abusifs.
    </p>
    <p>Mais elles peuvent également affecter des pages publiques qui devraient être accessibles.</p>
    <h3>L'erreur 403 : l'accès est refusé</h3>
    <p>Le code <code>403</code> indique que le serveur refuse l'accès à la ressource demandée.</p>
    <p>
      Il peut apparaître lorsqu'une page est protégée par une règle de sécurité ou lorsque certaines
      requêtes sont bloquées.
    </p>
    <p>
      Imaginons qu'un entrepreneur configure un système de protection particulièrement strict sur
      son site.
    </p>
    <p>
      Ses visiteurs habituels parviennent à consulter les pages, mais certaines requêtes
      automatisées rencontrent un refus d'accès.
    </p>
    <p>
      Selon la configuration, un robot d'exploration pourrait donc être empêché de récupérer
      certains contenus.
    </p>
    <p>
      Les protections anti-bots, les pare-feu applicatifs et certains services CDN peuvent
      contribuer à cette situation lorsqu'ils sont mal configurés.
    </p>
    <p>
      Cela ne signifie pas qu'il faut désactiver les protections de sécurité pour améliorer son SEO.
    </p>
    <p>
      L'objectif est de vérifier que les robots légitimes peuvent accéder aux contenus publics qui
      doivent être explorés, tout en conservant les protections nécessaires.
    </p>
    <p>
      Si tu constates une erreur de ce type, commence par vérifier les informations disponibles dans
      Search Console, puis examine les paramètres de sécurité concernés avec ton hébergeur ou ton
      prestataire technique.
    </p>
    <h3>Les pages protégées par connexion</h3>
    <p>
      Il existe une autre situation très simple à comprendre : les pages auxquelles on ne peut
      accéder qu'après s'être connecté.
    </p>
    <p>
      Imaginons que tu possèdes un espace client, une plateforme de formation ou un tableau de bord
      réservé à tes utilisateurs.
    </p>
    <p>Il est normal que certaines pages soient protégées par authentification.</p>
    <p>
      Dans ce cas, Googlebot ne pourra généralement pas accéder aux contenus privés comme un
      utilisateur connecté.
    </p>
    <p>Cela ne constitue pas nécessairement un problème.</p>
    <p>
      En revanche, si tu souhaites référencer une page de présentation publique et qu'elle nécessite
      involontairement une connexion, il faudra corriger son accessibilité.
    </p>
    <p>
      Il est donc important de distinguer les contenus qui doivent rester privés de ceux que tu
      souhaites rendre visibles dans les résultats Google.
    </p>
    <h2>Comprendre les restrictions d'indexation</h2>
    <p>Une page peut également être accessible aux visiteurs, sans être destinée à l'indexation.</p>
    <p>C'est notamment le rôle de certaines instructions techniques.</p>
    <p>
      Nous avons déjà découvert la balise <code>noindex</code> dans le module consacré à Google
      Search Console. Nous allons maintenant comprendre comment une mauvaise configuration peut
      affecter une page stratégique.
    </p>
    <h3>Le cas d'une instruction noindex ajoutée par erreur</h3>
    <p>
      Imaginons que notre photographe utilise un CMS qui propose une option permettant de demander
      aux moteurs de recherche de ne pas indexer certaines pages.
    </p>
    <p>
      Pendant la construction de son site, il active cette option pour éviter que les contenus
      provisoires apparaissent dans Google.
    </p>
    <p>Une fois son site publié, il oublie de la désactiver sur sa page consacrée aux mariages.</p>
    <p>
      La page est pourtant accessible dans un navigateur. Les visiteurs peuvent consulter les
      photographies, découvrir les prestations et envoyer une demande de contact.
    </p>
    <p>
      Mais lorsqu'il explore la page, Google peut lire une instruction <code>noindex</code> qui lui
      demande de ne pas conserver ce contenu dans son index.
    </p>
    <p>Dans ce cas, la qualité du texte n'est pas le problème principal.</p>
    <p>
      La correction consiste à vérifier si l'exclusion est volontaire, puis à supprimer
      l'instruction si la page doit effectivement pouvoir être indexée.
    </p>
    <p>
      Selon le CMS utilisé, cette modification peut parfois être réalisée directement depuis les
      paramètres SEO de la page.
    </p>
    <p>Il faut néanmoins rester prudent.</p>
    <p>
      Certaines pages possèdent une instruction <code>noindex</code> pour de bonnes raisons,
      notamment lorsqu'elles ne doivent pas figurer dans les résultats de recherche.
    </p>
    <p>
      <strong
        >Il ne faut jamais supprimer toutes les instructions noindex d'un site sans comprendre leur
        rôle.</strong
      >
    </p>
    <h3>Ne pas confondre noindex et robots.txt</h3>
    <p>Une distinction mérite également d'être rappelée.</p>
    <p>
      Le fichier <code>robots.txt</code> permet d'indiquer aux robots d'exploration certaines URL
      auxquelles ils ne doivent pas accéder.
    </p>
    <p>
      L'instruction <code>noindex</code>, quant à elle, demande aux moteurs de recherche compatibles
      de ne pas afficher une ressource dans leurs résultats.
    </p>
    <p>Ces deux mécanismes n'ont donc pas le même rôle.</p>
    <p>
      Il faut même faire attention à leur combinaison : si Google ne peut pas explorer une page
      parce qu'elle est bloquée par <code>robots.txt</code>, il peut être incapable de lire une
      instruction <code>noindex</code> présente sur cette page.
    </p>
    <p>
      Il serait donc incorrect de considérer que bloquer une URL dans
      <code>robots.txt</code> garantit sa disparition des résultats Google.
    </p>
    <p>Nous apprendrons à examiner ces fichiers et les balises canoniques dans la leçon 15.</p>
    <p>
      Pour le moment, retiens surtout que les restrictions d'exploration et les restrictions
      d'indexation doivent être analysées séparément.
    </p>
    <h2>Quand une page fonctionne dans ton navigateur, mais pas pour Google</h2>
    <p>
      Il existe une situation plus difficile à remarquer : une page peut sembler fonctionner
      parfaitement lorsqu'on la consulte, alors que Google rencontre des difficultés pour accéder à
      certaines informations.
    </p>
    <p>Cela peut notamment arriver sur des sites dont le contenu dépend fortement de JavaScript.</p>
    <p>
      JavaScript est un langage de programmation couramment utilisé pour ajouter des fonctionnalités
      et afficher des contenus dynamiques.
    </p>
    <p>Tu n'as pas besoin de savoir programmer pour comprendre le principe.</p>
    <p>
      Imaginons qu'un site affiche ses prestations uniquement après l'exécution de plusieurs
      scripts. Lorsqu'un visiteur ouvre la page dans son navigateur, ces scripts peuvent charger les
      informations nécessaires et afficher correctement le contenu.
    </p>
    <p>Google est capable d'exécuter JavaScript et de traiter de nombreux sites modernes.</p>
    <p>
      Mais certaines erreurs peuvent empêcher l'affichage ou la récupération des informations
      essentielles.
    </p>
    <p>
      Un script qui ne fonctionne pas, une ressource bloquée ou un contenu nécessitant une
      interaction particulière peuvent, selon le fonctionnement du site, compliquer l'analyse de la
      page.
    </p>
    <h3>Pourquoi le rendu d'une page est important</h3>
    <p>
      Lorsqu'on parle de rendu, on désigne le processus permettant de transformer les ressources
      d'une page en contenu utilisable et affichable.
    </p>
    <p>Pour un visiteur, ce travail est généralement réalisé automatiquement par le navigateur.</p>
    <p>
      Pour Google, il est également important de pouvoir récupérer et interpréter les informations
      présentes dans la page.
    </p>
    <p>
      Imaginons que notre photographe possède une page de mariage dont le titre s'affiche
      normalement, mais que les prestations et les descriptions soient chargées uniquement par un
      script défaillant.
    </p>
    <p>
      Si Google ne parvient pas à récupérer ces informations, il pourrait analyser une page dont le
      contenu principal est incomplet.
    </p>
    <p>
      Dans certains cas, une page peut même être considérée comme une erreur de type
      <em>soft 404</em> lorsqu'elle renvoie un code 200, mais que le contenu récupéré ressemble à
      une page vide ou à une erreur.
    </p>
    <p>
      Cela ne signifie pas que tous les sites utilisant JavaScript rencontrent des problèmes de
      référencement.
    </p>
    <p>
      Il faut simplement vérifier que les contenus importants restent accessibles et correctement
      interprétables.
    </p>
    <h3>Utiliser Search Console pour examiner la page vue par Google</h3>
    <p>
      L'outil d'inspection d'URL de Google Search Console permet d'effectuer un test sur la version
      actuelle d'une page.
    </p>
    <p>
      Après avoir lancé ce test, tu peux consulter certaines informations sur son exploration et,
      lorsque l'outil le permet, afficher une capture de la page telle que Google-InspectionTool l'a
      rendue.
    </p>
    <p>Cette fonctionnalité peut être utile lorsque tu soupçonnes un problème d'affichage.</p>
    <p>
      Par exemple, si ta page semble complète dans ton navigateur, mais que la version rendue dans
      l'outil d'inspection ne contient pas certaines informations essentielles, nous avons une piste
      à approfondir.
    </p>
    <p>
      Il faudra alors vérifier les ressources chargées, les éventuelles erreurs JavaScript ou les
      restrictions qui empêchent certains éléments de fonctionner.
    </p>
    <p>
      Ce type de correction peut nécessiter des compétences techniques. Dans ce cas, l'objectif sera
      surtout de documenter le problème pour pouvoir le transmettre à la personne qui gère ton site.
    </p>
    <p>Il faut également garder à l'esprit qu'un test d'URL active ne garantit pas l'indexation.</p>
    <p>
      Il permet de vérifier certains aspects de l'accessibilité et de l'indexabilité, mais ne
      remplace pas l'ensemble des décisions prises par les systèmes de Google.
    </p>
    <h2>Comment déterminer si un problème technique mérite une correction ?</h2>
    <p>
      Tu connais maintenant plusieurs situations susceptibles d'affecter un site : erreurs 404,
      problèmes serveur, restrictions d'accès, instructions <code>noindex</code> et difficultés
      d'affichage.
    </p>
    <p>
      Mais cela ne signifie pas qu'il faut chercher à corriger immédiatement chaque message présenté
      dans un outil SEO.
    </p>
    <p>Un site peut posséder plusieurs URL non indexées sans rencontrer de problème majeur.</p>
    <p>
      Certaines anciennes pages ont été supprimées volontairement. D'autres ont été remplacées par
      des redirections. Certaines ressources sont privées, tandis que d'autres ne présentent aucun
      intérêt pour les résultats de recherche.
    </p>
    <p>
      La question importante est donc de savoir si la situation correspond au fonctionnement
      attendu.
    </p>
    <h3>Commencer par les pages stratégiques</h3>
    <p>
      Dans les premiers modules, tu as identifié les pages qui possèdent le plus d'intérêt pour ton
      activité.
    </p>
    <p>Ce sont généralement celles qu'il faut examiner en priorité.</p>
    <p>Imaginons que notre photographe découvre deux erreurs.</p>
    <p>
      La première concerne une ancienne page supprimée qui ne possède plus de contenu équivalent.
    </p>
    <p>
      La deuxième concerne sa principale page de photographie de mariage, qui renvoie une erreur
      serveur.
    </p>
    <p>
      La deuxième situation est naturellement plus préoccupante, puisqu'elle affecte directement un
      service important.
    </p>
    <p>
      Notre première question doit donc être :
      <strong
        >ce problème empêche-t-il les visiteurs ou Google d'accéder à une page qui devrait
        fonctionner ?</strong
      >
    </p>
    <p>Si la réponse est oui, il mérite une attention particulière.</p>
    <p>
      Si la situation est volontaire et cohérente avec l'organisation du site, aucune correction
      n'est nécessairement attendue.
    </p>
    <h3>Distinguer les problèmes bloquants des améliorations secondaires</h3>
    <p>Tous les problèmes techniques ne possèdent pas le même niveau d'urgence.</p>
    <p>
      Une page stratégique totalement inaccessible représente généralement une difficulté plus
      importante qu'une ancienne URL supprimée volontairement.
    </p>
    <p>
      De même, une instruction <code>noindex</code> ajoutée par erreur sur une page commerciale
      mérite probablement d'être examinée avant une amélioration mineure de son organisation.
    </p>
    <p>Il peut être utile de distinguer trois situations.</p>
    <p>
      D'abord, les problèmes qui empêchent réellement l'accès ou l'indexation d'une page importante.
    </p>
    <p>
      Ensuite, les difficultés qui perturbent certaines fonctionnalités ou rendent la navigation
      moins efficace.
    </p>
    <p>
      Enfin, les éléments qui pourraient être améliorés, mais ne semblent pas empêcher le
      fonctionnement normal du site.
    </p>
    <p>Il ne s'agit pas d'une classification officielle de Google.</p>
    <p>
      C'est simplement une méthode de travail qui t'aide à concentrer ton attention sur les
      difficultés les plus importantes.
    </p>
    <h3>Corriger sans créer de nouveaux problèmes</h3>
    <p>
      L'une des erreurs les plus fréquentes consiste à modifier la configuration d'un site sans
      comprendre précisément les conséquences.
    </p>
    <p>
      Imaginons qu'un entrepreneur remarque plusieurs URL non indexées dans Search Console. Il
      décide alors de supprimer toutes les instructions techniques qu'il ne comprend pas, de
      modifier son fichier <code>robots.txt</code> et de changer les adresses de plusieurs pages.
    </p>
    <p>
      Il pourrait involontairement rendre certaines ressources accessibles alors qu'elles devaient
      rester privées, créer des liens cassés ou perturber l'organisation de son site.
    </p>
    <p>La meilleure démarche consiste à procéder progressivement.</p>
    <p>
      Commence par identifier le problème, vérifier les pages concernées et déterminer le
      comportement attendu.
    </p>
    <p>
      Effectue ensuite une correction ciblée, lorsque tu sais comment intervenir sans risque
      excessif.
    </p>
    <p>
      Enfin, vérifie que la page fonctionne correctement et conserve une trace de la modification
      réalisée.
    </p>
    <p>
      Lorsque le problème concerne une configuration sensible, comme les paramètres du serveur, les
      règles de sécurité ou les fichiers techniques, il peut être préférable de demander
      l'intervention d'une personne compétente.
    </p>
    <p>
      <strong
        >Savoir reconnaître une correction qui dépasse ses compétences fait aussi partie d'une bonne
        démarche SEO.</strong
      >
    </p>
    <h2>Démonstration — Diagnostiquons les problèmes techniques d'un site</h2>
    <p>Passons maintenant à une démonstration concrète.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et imaginer qu'il rencontre
      plusieurs difficultés sur son site.
    </p>
    <p>
      Certaines pages semblent correctement indexées, tandis que d'autres présentent des messages
      dans Google Search Console.
    </p>
    <p>
      Notre objectif sera de comprendre ces messages et de déterminer quelles situations nécessitent
      réellement une action.
    </p>
    <p>
      Les URL et les problèmes rencontrés dans cet exemple sont fictifs. Ils servent uniquement à
      illustrer la méthode.
    </p>
    <h3>Étape 1 — Ouvrir le rapport d'indexation</h3>
    <p>
      Commençons par ouvrir
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
        >Google Search Console</a
      >
      et sélectionner la propriété correspondant au site.
    </p>
    <p>Dans la section consacrée à l'indexation, nous ouvrons le rapport « Pages ».</p>
    <p>
      Nous observons les différents motifs présentés pour les URL qui ne figurent pas dans l'index.
    </p>
    <p>
      Imaginons que nous découvrions trois situations : une page avec redirection, une page
      introuvable et une URL exclue par une instruction <code>noindex</code>.
    </p>
    <p>
      À ce stade, nous ne considérons pas automatiquement ces trois éléments comme des erreurs à
      corriger.
    </p>
    <p>Nous allons examiner les adresses concernées et comprendre leur rôle dans le site.</p>
    <h3>Étape 2 — Vérifier une ancienne page redirigée</h3>
    <p>Imaginons que la première URL soit :</p>
    <p><code>https://exemple.fr/mariage</code></p>
    <p>Cette page a été remplacée il y a plusieurs mois par une nouvelle adresse :</p>
    <p><code>https://exemple.fr/prestations/mariage</code></p>
    <p>
      Lorsque nous ouvrons l'ancienne URL, notre navigateur nous dirige automatiquement vers la
      nouvelle page.
    </p>
    <p>Cette situation semble correspondre à une redirection volontaire.</p>
    <p>
      Dans Search Console, nous pouvons examiner l'ancienne URL et vérifier les informations
      disponibles sur son état.
    </p>
    <p>
      Nous pouvons également inspecter directement la nouvelle adresse pour comprendre sa situation
      dans l'index Google.
    </p>
    <p>
      Si la redirection est cohérente et que la page de destination fonctionne correctement, il
      n'est pas nécessaire de chercher à réindexer l'ancienne URL.
    </p>
    <p>Nous pouvons simplement conserver cette observation.</p>
    <h3>Étape 3 — Examiner une erreur 404</h3>
    <p>Imaginons maintenant que Search Console présente une erreur concernant :</p>
    <p><code>https://exemple.fr/portfolio-2023</code></p>
    <p>
      Notre photographe nous explique qu'il a supprimé cette ancienne page et qu'il ne souhaite plus
      présenter les photographies qu'elle contenait.
    </p>
    <p>Aucun contenu équivalent n'a été créé.</p>
    <p>Dans cette situation, le code 404 peut être normal.</p>
    <p>Il indique simplement que la ressource n'existe plus.</p>
    <p>
      Nous pouvons toutefois vérifier si le site possède encore des liens internes vers cette
      adresse.
    </p>
    <p>
      Si un ancien article ou une page de navigation renvoie toujours vers ce portfolio, il serait
      pertinent de mettre à jour ou de retirer le lien.
    </p>
    <p>
      En revanche, il ne serait pas nécessaire de créer artificiellement une nouvelle page
      uniquement pour faire disparaître le message 404 de Search Console.
    </p>
    <p>
      Nous avons donc identifié une situation qui ne nécessite pas forcément de correction de l'URL
      elle-même, mais qui peut justifier une amélioration de la navigation.
    </p>
    <h3>Étape 4 — Inspecter une page importante non indexable</h3>
    <p>Passons maintenant à la troisième URL :</p>
    <p><code>https://exemple.fr/prestations/mariage</code></p>
    <p>Cette fois, nous savons qu'il s'agit d'une page stratégique.</p>
    <p>
      Notre photographe souhaite qu'elle puisse apparaître dans Google, puisqu'elle présente l'une
      de ses principales prestations.
    </p>
    <p>Nous utilisons l'outil d'inspection d'URL pour examiner les informations disponibles.</p>
    <p>
      Imaginons que Search Console indique que l'indexation n'est pas autorisée en raison d'une
      instruction <code>noindex</code>.
    </p>
    <p>
      Nous avons identifié une différence entre le fonctionnement attendu et la configuration
      actuelle.
    </p>
    <p>La page devrait pouvoir être indexée, mais une instruction demande à Google de l'exclure.</p>
    <p>Nous allons donc vérifier si cette restriction est intentionnelle.</p>
    <p>
      Notre photographe nous explique qu'il avait activé une option de confidentialité pendant la
      création de son site et qu'il ne l'a jamais désactivée sur cette page.
    </p>
    <p>
      Si son outil de création de site permet de modifier ce paramètre, il pourra supprimer
      l'instruction après avoir confirmé que la page doit bien être publique et indexable.
    </p>
    <p>Il devra ensuite vérifier que la nouvelle configuration est correctement publiée.</p>
    <h3>Étape 5 — Tester la version actuelle de la page</h3>
    <p>
      Imaginons que notre photographe ait corrigé le réglage responsable du <code>noindex</code>.
    </p>
    <p>
      Nous retournons dans l'outil d'inspection de Google Search Console et lançons un test de l'URL
      active.
    </p>
    <p>
      Ce test permet de vérifier certains aspects de l'accessibilité et de l'indexabilité de la
      version actuellement disponible.
    </p>
    <p>
      Si le résultat indique désormais que l'indexation est autorisée, nous avons un premier indice
      que la correction a fonctionné.
    </p>
    <p>Mais cela ne signifie pas encore que Google a ajouté la page à son index.</p>
    <p>Il faudra attendre qu'il la réexplore et traite à nouveau son contenu.</p>
    <p>
      Si la page est importante et que sa configuration est désormais correcte, une demande
      d'indexation peut être appropriée. Elle ne garantit toutefois ni l'indexation ni sa rapidité.
    </p>
    <p>
      Nous conservons donc la date de correction et le résultat du test, afin de pouvoir vérifier la
      situation ultérieurement.
    </p>
    <h3>Étape 6 — Examiner un problème d'affichage éventuel</h3>
    <p>
      Profitons de cette inspection pour examiner la page telle qu'elle peut être récupérée et
      rendue par l'outil Google.
    </p>
    <p>
      Nous consultons les informations disponibles sur la version testée et, si possible, sa capture
      d'écran.
    </p>
    <p>
      Imaginons que le titre, les paragraphes et les principales informations de prestation soient
      correctement présents.
    </p>
    <p>Cela constitue un signal rassurant concernant la récupération du contenu lors du test.</p>
    <p>
      À l'inverse, si la capture ne montrait qu'une page vide ou si des ressources essentielles ne
      pouvaient pas être chargées, nous disposerions d'une nouvelle piste d'investigation.
    </p>
    <p>
      Dans ce deuxième cas, il serait utile de conserver les détails techniques du test et de les
      transmettre à la personne qui gère le site.
    </p>
    <p>
      Nous ne chercherions pas à modifier directement les scripts ou le serveur sans comprendre
      l'origine du problème.
    </p>
    <h3>Étape 7 — Classer les observations par priorité</h3>
    <p>Nous disposons maintenant de trois constats.</p>
    <p>
      L'ancienne page de mariage possède une redirection volontaire vers une nouvelle adresse.
      Aucune correction n'est nécessaire si la destination fonctionne correctement.
    </p>
    <p>
      Le portfolio supprimé renvoie une erreur 404 cohérente avec sa suppression. Nous devons
      simplement vérifier que les liens internes encore présents ne dirigent pas inutilement vers
      cette adresse.
    </p>
    <p>
      Enfin, la page stratégique consacrée aux mariages possède une instruction
      <code>noindex</code> ajoutée par erreur. Cette situation mérite une correction prioritaire,
      puisqu'elle empêche normalement son indexation.
    </p>
    <p>
      Nous venons donc de réaliser un premier diagnostic sans chercher à corriger toutes les URL non
      indexées.
    </p>
    <p>
      Nous avons simplement comparé les informations présentées par Google avec le fonctionnement
      attendu du site.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous venons de découvrir une méthode simple pour analyser les principales difficultés
      techniques d'un site.
    </p>
    <p>
      Nous avons commencé par identifier les pages concernées, puis examiné leur situation dans
      Google Search Console.
    </p>
    <p>
      Nous avons appris à distinguer une redirection volontaire, une erreur 404 normale et un
      problème d'indexation qui concerne une page importante.
    </p>
    <p>
      Nous avons également compris qu'une correction doit être vérifiée et qu'un test d'URL active
      ne garantit pas l'indexation immédiate.
    </p>
    <p>
      <strong
        >Un bon diagnostic technique ne consiste pas à faire disparaître tous les messages d'erreur.
        Il consiste à comprendre lesquels révèlent un véritable problème pour les visiteurs et les
        moteurs de recherche.</strong
      >
    </p>
    <p>C'est cette démarche que nous allons maintenant appliquer à ton site.</p>
    <h2>À toi de jouer — Identifie tes premiers freins techniques</h2>
    <p>
      Maintenant que tu connais les principales situations pouvant affecter l'exploration et
      l'indexation d'un site, il est temps de réaliser un premier contrôle.
    </p>
    <p>
      Dans les modules précédents, tu as identifié trois pages stratégiques et commencé à les
      optimiser.
    </p>
    <p>
      Nous allons reprendre ces mêmes pages pour vérifier leur accessibilité et identifier les
      éventuelles difficultés techniques qu'elles rencontrent.
    </p>
    <p>
      L'objectif n'est pas encore de réaliser un audit technique complet. Nous poursuivrons ce
      travail dans les prochaines leçons consacrées aux URL, aux fichiers techniques et aux
      performances.
    </p>
    <p><strong>Durée estimée : 15 à 20 minutes.</strong></p>
    <h3>Étape 1 — Vérifie l'accessibilité de tes pages</h3>
    <p>
      Commence par ouvrir les trois pages stratégiques que tu as sélectionnées dans le premier
      module.
    </p>
    <p>Vérifie qu'elles s'affichent correctement et que leur contenu principal est disponible.</p>
    <p>Profites-en pour consulter les liens qui permettent d'y accéder depuis ton site.</p>
    <p>
      Si tu rencontres une erreur, une redirection inattendue ou un contenu qui ne s'affiche pas
      correctement, conserve l'adresse concernée et décris brièvement ce que tu observes.
    </p>
    <p>Ne modifie rien pour le moment.</p>
    <h3>Étape 2 — Consulte leurs informations dans Search Console</h3>
    <p>
      Ouvre Google Search Console et utilise l'outil d'inspection d'URL pour examiner chacune de tes
      pages.
    </p>
    <p>
      Vérifie leur état d'indexation et les éventuels messages concernant l'exploration ou les
      restrictions d'accès.
    </p>
    <p>Si une page n'est pas indexée, essaie de comprendre le motif présenté.</p>
    <p>
      Est-elle volontairement redirigée ? Possède-t-elle une instruction <code>noindex</code> ?
      Google rencontre-t-il une erreur lorsqu'il essaie de la récupérer ?
    </p>
    <p>
      Lorsque cela est utile, tu peux également utiliser le test de l'URL active pour examiner la
      configuration actuellement publiée.
    </p>
    <h3>Étape 3 — Distingue les problèmes des situations normales</h3>
    <p>Reprends maintenant les observations réalisées.</p>
    <p>
      Pour chaque page, demande-toi si le comportement constaté correspond à ce que tu souhaites
      obtenir.
    </p>
    <p>
      Une page stratégique accessible et correctement indexable ne nécessite peut-être aucune
      intervention.
    </p>
    <p>Une ancienne URL redirigée volontairement ne constitue pas nécessairement une difficulté.</p>
    <p>
      En revanche, une page importante inaccessible ou exclue de l'index par erreur mérite
      probablement une investigation.
    </p>
    <p>Essaie d'identifier jusqu'à trois situations qui pourraient nécessiter une action.</p>
    <p>
      Si tu n'en trouves aucune, note simplement que ces premières vérifications n'ont révélé aucun
      problème évident.
    </p>
    <h3>Étape 4 — Prépare une première correction</h3>
    <p>
      Si tu as identifié une difficulté, choisis celle qui semble la plus importante pour ton
      activité.
    </p>
    <p>Essaie de déterminer la correction adaptée.</p>
    <p>
      Il pourrait s'agir de mettre à jour un lien interne qui ne fonctionne plus, de vérifier un
      paramètre d'indexation ou de transmettre une erreur serveur à ton hébergeur.
    </p>
    <p>
      Si tu maîtrises la modification et que ses conséquences sont claires, tu peux réaliser une
      correction simple.
    </p>
    <p>
      En revanche, ne modifie pas les réglages sensibles du serveur, les règles de sécurité ou les
      fichiers techniques sans avoir suffisamment compris le problème.
    </p>
    <p>
      Conserve l'adresse concernée, le message observé et l'action envisagée dans ta checklist
      d'audit.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir vérifié jusqu'à trois pages stratégiques,
      identifié les éventuels freins techniques et préparé au moins une correction lorsque cela est
      nécessaire.
    </p>
    <p>
      Tu n'as pas besoin d'avoir résolu un problème pour terminer l'exercice. Savoir distinguer une
      erreur importante d'une situation normale constitue déjà une compétence essentielle.
    </p>
    <p>
      Ces observations alimenteront l'action « Réaliser un premier audit technique de mon site »
      dans « Mon plan d'action », que tu pourras finaliser à la fin du module 5.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Le SEO technique regroupe les éléments qui permettent notamment aux moteurs de recherche de
      découvrir, d'explorer et d'interpréter les contenus d'un site.
    </p>
    <p>
      Même lorsqu'une page possède un contenu pertinent, certaines difficultés techniques peuvent
      limiter son accessibilité ou empêcher son indexation.
    </p>
    <p>
      Nous avons découvert plusieurs codes HTTP importants. Le code 200 indique généralement une
      réponse réussie, les redirections permettent d'orienter les visiteurs vers une autre adresse,
      les erreurs 404 signalent des ressources introuvables et les codes 5xx correspondent à des
      difficultés du côté du serveur.
    </p>
    <p>Mais ces codes ne doivent pas être interprétés isolément.</p>
    <p>
      Une page supprimée volontairement peut parfaitement renvoyer une erreur 404, tandis qu'une
      page stratégique qui devient inaccessible représente une situation beaucoup plus préoccupante.
    </p>
    <p>
      Nous avons également découvert les restrictions d'accès et d'indexation, notamment les erreurs
      403 et les instructions <code>noindex</code>.
    </p>
    <p>
      Certaines restrictions sont nécessaires pour protéger des contenus privés ou organiser
      correctement un site. D'autres peuvent avoir été ajoutées par erreur et empêcher Google de
      prendre en compte des pages importantes.
    </p>
    <p>
      Enfin, nous avons compris qu'une page peut sembler fonctionner normalement dans un navigateur
      tout en rencontrant des difficultés lorsqu'elle est récupérée ou rendue par un robot.
    </p>
    <p>
      Google Search Console constitue donc un outil essentiel pour comprendre ces situations et
      vérifier les principales informations disponibles.
    </p>
    <p>
      Mais un résultat positif au test de l'URL active ne garantit pas qu'une page sera indexée, ni
      qu'elle obtiendra une bonne position.
    </p>
    <p>
      <strong
        >Le bon réflexe en SEO technique consiste à identifier la page concernée, comprendre le
        problème, vérifier ses conséquences et réaliser une correction adaptée.</strong
      >
    </p>
    <p>Tu n'as pas besoin de maîtriser toute la technique pour appliquer cette méthode.</p>
    <p>
      Il suffit de commencer par les pages importantes, de conserver des observations fiables et de
      ne pas modifier des éléments sensibles sans comprendre leur rôle.
    </p>
    <SeoLesson13Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu comprends désormais pourquoi certaines difficultés techniques peuvent empêcher Google
      d'accéder correctement aux contenus de ton site.
    </p>
    <p>
      Tu sais reconnaître plusieurs codes HTTP, identifier les restrictions d'accès et d'indexation,
      et utiliser Google Search Console pour examiner une page importante.
    </p>
    <p>
      Mais le fonctionnement technique d'un site ne dépend pas uniquement de la disponibilité de ses
      pages.
    </p>
    <p>
      Il dépend également de la manière dont leurs adresses sont organisées et de la façon dont les
      anciennes URL sont remplacées lorsqu'un contenu évolue.
    </p>
    <p>
      Une mauvaise redirection peut envoyer les visiteurs vers une page inadaptée. Une structure
      d'URL peu cohérente peut compliquer la navigation. Et certaines modifications d'adresses
      peuvent avoir des conséquences sur les liens existants et la découverte des contenus.
    </p>
    <p>
      Dans la prochaine leçon, nous allons apprendre à mieux comprendre l'architecture technique
      d'un site, l'organisation de ses URL et le rôle des redirections.
    </p>
    <p>
      Nous verrons comment examiner ces éléments sans prendre le risque de modifier inutilement des
      adresses déjà en place.
    </p>
    <p>
      <strong>Prochaine leçon : Organiser son architecture, ses URL et ses redirections.</strong>
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
