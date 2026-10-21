<script setup lang="ts">
import SeoLesson14Quiz from './SeoLesson14Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Une simple modification d'adresse peut avoir des conséquences importantes</h2>
    <p>
      Imagine que tu possèdes un site internet depuis plusieurs années. Tu as publié tes principales
      pages, rédigé plusieurs guides et commencé à attirer des visiteurs depuis Google. Certaines
      pages apparaissent sur des recherches pertinentes et plusieurs sites externes possèdent déjà
      des liens vers tes contenus.
    </p>
    <p>
      Tu décides alors de moderniser ton site. Tu souhaites organiser tes prestations dans une
      nouvelle rubrique, simplifier les adresses de tes pages et améliorer la navigation. Ton outil
      de création de site te permet de réaliser ces modifications en quelques clics. Tu renommes
      certaines URL, déplaces plusieurs contenus et publies la nouvelle version.
    </p>
    <p>
      Visuellement, tout semble fonctionner. Les nouvelles pages sont accessibles et les menus
      permettent de naviguer correctement. Pourtant, quelques jours plus tard, tu remarques que
      certains visiteurs rencontrent des erreurs lorsqu'ils utilisent d'anciens liens. Google Search
      Console commence également à signaler des URL introuvables, et certaines pages qui possédaient
      de la visibilité semblent avoir disparu des résultats.
    </p>
    <p>Que s'est-il passé ?</p>
    <p>
      En modifiant l'organisation de ton site, tu as également changé l'adresse de plusieurs
      contenus. Or, ces anciennes adresses pouvaient déjà être connues de Google, enregistrées dans
      les favoris de tes visiteurs ou utilisées comme liens depuis d'autres sites.
    </p>
    <p>
      Si aucune solution n'a été prévue pour relier les anciennes URL aux nouvelles, ces références
      peuvent devenir inutilisables.
    </p>
    <p>
      Prenons l'exemple de notre photographe professionnel à Bordeaux. Il possède une page consacrée
      aux reportages de mariage, accessible depuis plusieurs années à l'adresse
      <code>/mariages</code>. Souhaitant mieux organiser son site, il décide de déplacer cette
      prestation vers <code>/prestations/photographie-mariage</code>.
    </p>
    <p>
      Ce changement peut être parfaitement légitime. Mais si l'ancienne adresse cesse simplement de
      fonctionner, les personnes qui la connaissent encore risquent de ne plus retrouver la
      prestation.
    </p>
    <p>C'est précisément ce que nous allons apprendre à éviter.</p>
    <p>
      Dans la leçon précédente, nous avons découvert les principaux freins techniques : erreurs
      serveur, pages introuvables, restrictions d'accès et problèmes d'indexation. Nous allons
      maintenant approfondir un sujet complémentaire : la manière dont les adresses de ton site sont
      construites, organisées et maintenues lorsqu'un contenu évolue.
    </p>
    <p>
      <strong
        >Une bonne architecture ne consiste pas seulement à créer des pages bien rangées. Elle
        consiste aussi à leur donner des adresses cohérentes et à préserver leur accessibilité dans
        le temps.</strong
      >
    </p>
    <p>
      L'objectif de cette leçon n'est pas de te demander de modifier toutes les URL de ton site. Au
      contraire, nous allons apprendre à reconnaître les changements réellement utiles et à
      comprendre pourquoi il vaut parfois mieux conserver une adresse existante.
    </p>
    <h2>Comprendre ce qu'est une URL</h2>
    <p>
      Une URL, pour <em>Uniform Resource Locator</em>, correspond à une adresse permettant
      d'identifier et d'accéder à une ressource sur Internet.
    </p>
    <p>
      Lorsque tu consultes une page web, ton navigateur utilise son URL pour déterminer où envoyer
      la requête.
    </p>
    <p>Prenons une adresse fictive :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>Cette adresse contient plusieurs informations.</p>
    <p>
      La première partie, <code>https://</code>, indique le protocole utilisé pour accéder au site.
      HTTPS permet notamment de sécuriser les échanges entre le navigateur et le serveur.
    </p>
    <p>
      La deuxième partie, <code>exemple.fr</code>, correspond au nom de domaine. C'est l'adresse
      principale permettant d'identifier le site.
    </p>
    <p>
      Enfin, <code>/prestations/photographie-mariage</code> constitue le chemin de la ressource. Il
      permet d'identifier la page demandée à l'intérieur du site.
    </p>
    <p>
      Dans cet exemple, le chemin semble indiquer que la page appartient à une rubrique consacrée
      aux prestations et qu'elle présente plus précisément un service de photographie de mariage.
    </p>
    <p>Cette organisation est facilement compréhensible pour un visiteur.</p>
    <p>
      Mais attention : le chemin d'une URL ne correspond pas nécessairement à une véritable
      succession de dossiers physiques sur le serveur. De nombreux CMS et frameworks construisent
      leurs adresses à partir de règles de routage.
    </p>
    <p>
      Il s'agit donc avant tout d'une manière d'identifier les ressources et, lorsque cela est
      pertinent, d'exprimer leur organisation.
    </p>
    <h3>Pourquoi Google s'intéresse-t-il aux URL ?</h3>
    <p>
      Google utilise les URL pour identifier les ressources qu'il découvre, explorer leurs contenus
      et comprendre certaines relations entre elles.
    </p>
    <p>Une adresse descriptive peut également fournir des informations sur le sujet d'une page.</p>
    <p>Imaginons que notre photographe possède deux URL.</p>
    <p>
      La première est <code>/page?id=4827</code>. La seconde est
      <code>/prestations/photographie-mariage</code>.
    </p>
    <p>
      La deuxième permet de comprendre beaucoup plus facilement ce que le visiteur s'apprête à
      découvrir.
    </p>
    <p>Elle peut également aider à exprimer l'organisation générale du site.</p>
    <p>
      Google recommande d'ailleurs, lorsque cela est possible, d'utiliser des URL simples,
      descriptives et faciles à comprendre.
    </p>
    <p>
      Mais il faut éviter une idée reçue :
      <strong
        >une URL contenant exactement ton mot-clé principal ne garantit pas un meilleur
        référencement</strong
      >.
    </p>
    <p>
      Google est capable d'explorer et d'indexer des pages dont les adresses comportent des
      paramètres ou des identifiants techniques.
    </p>
    <p>
      Une URL descriptive constitue une bonne pratique d'organisation et de lisibilité, pas une
      formule magique pour obtenir de meilleures positions.
    </p>
    <h2>Construire des URL simples et cohérentes</h2>
    <p>
      Lorsque tu crées une nouvelle page, tu peux généralement choisir une partie de son adresse.
    </p>
    <p>
      Cette partie est parfois appelée <em>slug</em>, notamment dans les outils de gestion de
      contenu comme WordPress.
    </p>
    <p>
      Imaginons que tu publies un guide intitulé « Comment choisir son photographe de mariage ? ».
    </p>
    <p>Tu pourrais lui attribuer une adresse comme :</p>
    <p><code>https://exemple.fr/guides/choisir-photographe-mariage</code></p>
    <p>Cette URL est relativement courte, descriptive et facile à lire.</p>
    <p>Elle donne une indication sur le type de contenu et sur son sujet.</p>
    <p>
      À l'inverse, une adresse comme <code>/article-2849-version-finale-2026-10</code> serait
      probablement moins compréhensible pour le visiteur.
    </p>
    <p>
      Cela ne signifie pas qu'une URL longue ou technique empêchera nécessairement une page d'être
      indexée. Mais lorsque tu possèdes la possibilité de choisir une adresse claire, autant en
      profiter.
    </p>
    <h3>Utiliser des mots compréhensibles</h3>
    <p>Pour construire une nouvelle URL, commence par identifier le sujet principal de la page.</p>
    <p>
      Si tu présentes une prestation de photographie de mariage, une adresse comme
      <code>/photographie-mariage</code> peut parfaitement convenir.
    </p>
    <p>
      Si ton site regroupe plusieurs prestations dans une rubrique dédiée, tu pourrais préférer
      <code>/prestations/photographie-mariage</code>.
    </p>
    <p>Il n'est pas nécessaire d'ajouter toutes les variations de ton mot-clé dans l'adresse.</p>
    <p>
      Une URL comme
      <code>/photographe-mariage-bordeaux-photographie-mariage-gironde-reportage-mariage</code>
      serait inutilement longue et répétitive.
    </p>
    <p>Privilégie une formulation naturelle qui permet de reconnaître le contenu.</p>
    <p>
      Les mots peuvent généralement être séparés par des traits d'union. Google recommande cette
      convention plutôt que l'utilisation de traits de soulignement lorsqu'il s'agit de distinguer
      les termes d'une adresse.
    </p>
    <p>Tu peux également utiliser des mots correspondant à la langue de ton public.</p>
    <p>
      Pour un site francophone, une structure comme <code>/guides/referencement-naturel</code> est
      parfaitement compréhensible.
    </p>
    <h3>Éviter les modifications inutiles</h3>
    <p>
      Il existe cependant une différence importante entre choisir l'adresse d'une nouvelle page et
      modifier celle d'une page déjà publiée.
    </p>
    <p>Imaginons que notre photographe possède une page à l'adresse :</p>
    <p><code>https://exemple.fr/mariages</code></p>
    <p>Cette adresse est courte, compréhensible et correspond bien au contenu proposé.</p>
    <p>
      Il pourrait être tenté de la remplacer par
      <code>/photographe-mariage-bordeaux</code> simplement pour intégrer une expression plus
      précise.
    </p>
    <p>Mais est-ce réellement nécessaire ?</p>
    <p>Pas forcément.</p>
    <p>
      Si la page est déjà accessible, indexée et utilisée dans les liens internes, ce changement
      pourrait créer davantage de travail que de bénéfices.
    </p>
    <p>
      Il faudrait notamment mettre en place une redirection, modifier les liens existants et
      attendre que Google prenne connaissance de la nouvelle adresse.
    </p>
    <p>Tout cela pour un changement dont l'intérêt SEO reste incertain.</p>
    <p>
      <strong
        >La meilleure URL n'est pas nécessairement celle qui contient le plus de mots-clés. C'est
        aussi celle qui remplit correctement son rôle et reste stable dans le temps.</strong
      >
    </p>
    <p>
      Une bonne pratique consiste donc à réfléchir aux adresses lors de la création du site, puis à
      éviter de les modifier sans raison suffisante.
    </p>
    <h2>Organiser les adresses selon la structure du site</h2>
    <p>
      Nous avons déjà étudié l'architecture éditoriale et le maillage interne dans le module
      précédent.
    </p>
    <p>
      Il est maintenant utile de comprendre comment cette organisation peut se traduire dans les
      URL.
    </p>
    <p>
      Imaginons que notre photographe possède trois types de contenus : ses prestations, ses
      réalisations et ses guides pédagogiques.
    </p>
    <p>Il pourrait choisir une organisation comme celle-ci :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p><code>https://exemple.fr/prestations/portrait-professionnel</code></p>
    <p><code>https://exemple.fr/realisations/mariage-bordeaux</code></p>
    <p><code>https://exemple.fr/guides/choisir-photographe-mariage</code></p>
    <p>
      Les différents chemins permettent de comprendre à quelle catégorie appartient chaque contenu.
    </p>
    <p>
      Cette convention peut être particulièrement utile lorsque le site possède plusieurs dizaines
      ou centaines de pages.
    </p>
    <p>
      Elle facilite notamment la maintenance, l'organisation des contenus et la compréhension des
      adresses.
    </p>
    <p>Mais elle n'est pas obligatoire.</p>
    <p>
      Un petit site vitrine pourrait parfaitement posséder des pages accessibles directement à la
      racine du domaine, comme <code>/mariage</code>, <code>/portrait</code> et
      <code>/contact</code>.
    </p>
    <p>L'important est de conserver une organisation logique et relativement stable.</p>
    <h3>La profondeur d'une URL n'est pas la profondeur de navigation</h3>
    <p>
      Une confusion fréquente consiste à penser qu'une page est nécessairement moins importante
      lorsqu'elle possède plusieurs niveaux dans son adresse.
    </p>
    <p>Imaginons une URL comme :</p>
    <p><code>https://exemple.fr/prestations/mariage/reportage-naturel</code></p>
    <p>
      Elle contient plusieurs segments, mais cela ne signifie pas automatiquement que Google la
      considère comme moins importante.
    </p>
    <p>Il faut distinguer la profondeur de l'adresse et la profondeur réelle de navigation.</p>
    <p>
      Une page peut posséder une URL relativement longue tout en étant accessible directement depuis
      la page d'accueil.
    </p>
    <p>
      À l'inverse, une page accessible depuis <code>/mariage</code> peut être difficile à trouver si
      aucun lien interne ne permet d'y accéder.
    </p>
    <p>
      C'est pourquoi la longueur du chemin ne doit pas être confondue avec l'accessibilité du
      contenu.
    </p>
    <p>
      Nous l'avons vu dans la leçon précédente : les liens internes permettent aux visiteurs et aux
      robots de découvrir les pages.
    </p>
    <p>
      Une structure d'URL logique complète donc une bonne navigation, mais elle ne la remplace pas.
    </p>
    <h3>Attention aux changements de catégories</h3>
    <p>
      Imaginons que notre photographe ait publié plusieurs guides sous la rubrique
      <code>/blog</code>.
    </p>
    <p>Quelques mois plus tard, il décide de renommer cette section en <code>/guides</code>.</p>
    <p>
      Si les URL de ses articles contiennent le segment <code>/blog</code>, cette décision pourrait
      entraîner un changement d'adresse pour de nombreux contenus.
    </p>
    <p>
      Par exemple, <code>/blog/choisir-photographe-mariage</code> pourrait devenir
      <code>/guides/choisir-photographe-mariage</code>.
    </p>
    <p>
      Le changement paraît simple sur le plan éditorial, mais il possède une conséquence technique :
      l'ancienne URL et la nouvelle ne sont pas identiques.
    </p>
    <p>Il faudra donc réfléchir à la manière dont les anciennes adresses seront traitées.</p>
    <p>
      Avant de modifier une rubrique, demande-toi si le changement doit réellement concerner les
      URL.
    </p>
    <p>
      Dans certains cas, tu peux parfaitement renommer une rubrique dans la navigation sans modifier
      les adresses déjà publiées.
    </p>
    <p>
      Cette solution peut permettre d'améliorer la présentation du site sans engager une migration
      de plusieurs contenus.
    </p>
    <h2>Comprendre les différentes versions d'une même adresse</h2>
    <p>
      Tu as peut-être déjà remarqué qu'un site peut parfois être accessible par plusieurs variantes
      d'adresse.
    </p>
    <p>
      Par exemple, une page peut fonctionner avec ou sans <code>www</code>, ou avec une barre
      oblique finale.
    </p>
    <p>
      Il existe également des URL contenant des paramètres utilisés pour suivre des campagnes, trier
      des résultats ou afficher certaines variantes.
    </p>
    <p>
      Ces situations méritent d'être comprises, car elles peuvent parfois produire plusieurs
      adresses pour un contenu identique ou très similaire.
    </p>
    <h3>HTTPS et les variantes avec ou sans www</h3>
    <p>Prenons deux adresses :</p>
    <p><code>https://exemple.fr</code></p>
    <p><code>https://www.exemple.fr</code></p>
    <p>
      Elles peuvent toutes deux diriger vers le même site, mais elles ne constituent pas exactement
      la même URL.
    </p>
    <p>
      De même, <code>http://exemple.fr</code> et <code>https://exemple.fr</code> correspondent à
      deux variantes distinctes.
    </p>
    <p>
      Il est généralement préférable de proposer une version principale cohérente et de rediriger
      les variantes appropriées vers celle-ci.
    </p>
    <p>
      Cela permet notamment d'éviter que les visiteurs utilisent plusieurs adresses différentes pour
      accéder au même contenu.
    </p>
    <p>
      Mais si ton site fonctionne déjà correctement en HTTPS et que les variantes sont bien gérées,
      il n'y a aucune raison de modifier sa configuration simplement pour réaliser une optimisation
      SEO.
    </p>
    <h3>Les majuscules et les barres obliques</h3>
    <p>
      Certains serveurs distinguent également les majuscules des minuscules dans le chemin d'une
      URL.
    </p>
    <p>
      Par exemple, <code>/Mariage</code> et <code>/mariage</code> peuvent être interprétées comme
      deux adresses distinctes.
    </p>
    <p>
      De la même manière, <code>/mariage</code> et <code>/mariage/</code> peuvent correspondre à des
      URL différentes selon la configuration du site.
    </p>
    <p>
      Sur certains sites, les deux variantes dirigent vers le même contenu. Sur d'autres, l'une peut
      renvoyer une redirection ou une erreur.
    </p>
    <p>
      Le plus simple consiste à choisir une convention cohérente et à l'appliquer lors de la
      création des pages.
    </p>
    <p>
      Si plusieurs variantes existent déjà, il peut être utile d'examiner leur comportement avant de
      chercher à les corriger.
    </p>
    <p>
      L'objectif n'est pas de supprimer toutes les différences possibles, mais de permettre aux
      moteurs de recherche et aux visiteurs d'identifier clairement l'adresse principale d'un
      contenu.
    </p>
    <h3>Les paramètres d'URL</h3>
    <p>Tu rencontreras également des adresses contenant un point d'interrogation.</p>
    <p>Par exemple :</p>
    <p><code>https://exemple.fr/chaussures?couleur=noir</code></p>
    <p>La partie située après le point d'interrogation correspond à un paramètre de requête.</p>
    <p>
      Les paramètres peuvent avoir différentes fonctions. Sur une boutique en ligne, ils peuvent
      servir à filtrer les produits selon une couleur, une taille ou un prix.
    </p>
    <p>Ils peuvent également être utilisés pour le suivi de campagnes marketing.</p>
    <p>Tous les paramètres ne sont donc pas problématiques.</p>
    <p>
      En revanche, certains peuvent produire plusieurs URL affichant des contenus identiques ou très
      similaires.
    </p>
    <p>
      C'est une situation à surveiller sur les sites comportant de nombreux filtres, notamment les
      boutiques en ligne.
    </p>
    <p>
      Google peut découvrir différentes variantes et devoir déterminer celles qui méritent d'être
      explorées ou indexées.
    </p>
    <p>Nous aborderons plus précisément la notion d'URL canonique dans la prochaine leçon.</p>
    <p>
      Pour le moment, retiens qu'une même ressource peut parfois être accessible par plusieurs
      adresses et qu'il est utile de conserver une organisation cohérente.
    </p>
    <h2>Comprendre le rôle des redirections</h2>
    <p>Nous arrivons maintenant à la notion centrale de cette leçon.</p>
    <p>
      Une redirection permet d'envoyer automatiquement une personne ou un robot d'une ancienne
      adresse vers une autre.
    </p>
    <p>
      Elle est particulièrement utile lorsqu'une page change d'URL, lorsqu'un domaine évolue ou
      lorsqu'un contenu est remplacé par une nouvelle version.
    </p>
    <p>Reprenons notre photographe.</p>
    <p>Sa page de mariage était initialement accessible à l'adresse :</p>
    <p><code>https://exemple.fr/mariages</code></p>
    <p>Il décide maintenant de la déplacer vers :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>
      Si aucune redirection n'est prévue, les visiteurs qui utilisent l'ancienne adresse peuvent
      rencontrer une erreur.
    </p>
    <p>
      Mais si une redirection correctement configurée existe, ils seront automatiquement dirigés
      vers la nouvelle page.
    </p>
    <p>
      Cette redirection peut également permettre à Google de comprendre qu'un contenu a changé
      d'adresse.
    </p>
    <p>
      Il existe cependant plusieurs types de redirections, qui ne transmettent pas exactement la
      même information.
    </p>
    <h3>La redirection 301 : un déplacement permanent</h3>
    <p>
      La redirection <code>301</code> indique qu'une ressource a été déplacée de manière permanente
      vers une autre URL.
    </p>
    <p>Elle est couramment utilisée lorsqu'une page change définitivement d'adresse.</p>
    <p>
      Imaginons que notre photographe décide de conserver sa nouvelle URL et de ne plus utiliser
      l'ancienne.
    </p>
    <p>Il pourrait mettre en place une redirection 301 de :</p>
    <p><code>https://exemple.fr/mariages</code></p>
    <p>vers :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>
      Lorsqu'un visiteur utilise l'ancienne adresse, il est automatiquement envoyé vers la nouvelle.
    </p>
    <p>
      Pour Google, une redirection permanente constitue également un signal important indiquant que
      la destination doit être considérée comme la version principale du contenu.
    </p>
    <p>
      Cela ne signifie pas que le moteur de recherche mettra immédiatement à jour tous ses
      résultats.
    </p>
    <p>Il devra découvrir et traiter le changement, ce qui peut prendre du temps.</p>
    <p>
      Mais lorsque le déplacement est définitif, une redirection permanente constitue généralement
      la bonne approche.
    </p>
    <h3>La redirection 308 : une autre redirection permanente</h3>
    <p>Le code <code>308</code> correspond également à une redirection permanente.</p>
    <p>
      Il possède certaines différences techniques avec le code 301, notamment concernant la
      conservation de la méthode HTTP utilisée lors de la requête.
    </p>
    <p>Ces différences sont surtout importantes pour des usages techniques particuliers.</p>
    <p>
      Pour un entrepreneur qui souhaite simplement déplacer une page de contenu, il n'est
      généralement pas nécessaire de maîtriser tous ces détails.
    </p>
    <p>Google considère les redirections 301 et 308 comme des signaux de déplacement permanent.</p>
    <p>
      <strong
        >Pour retenir l'essentiel : lorsque tu déplaces définitivement une page, une redirection
        permanente côté serveur est généralement la solution à privilégier.</strong
      >
    </p>
    <h3>Les redirections 302 et 307 : un déplacement temporaire</h3>
    <p>D'autres codes permettent de signaler qu'une redirection est temporaire.</p>
    <p>C'est notamment le cas des codes <code>302</code> et <code>307</code>.</p>
    <p>
      Imaginons qu'une entreprise organise une opération particulière et redirige temporairement
      certains visiteurs vers une page spécifique.
    </p>
    <p>Elle prévoit ensuite de rétablir la destination initiale.</p>
    <p>Dans ce cas, une redirection temporaire peut être plus adaptée.</p>
    <p>
      Contrairement à une redirection permanente, elle n'indique pas à Google que l'adresse de
      destination doit nécessairement remplacer l'URL d'origine dans son index.
    </p>
    <p>
      Mais il faut rester prudent : la manière dont Google sélectionne une URL principale dépend de
      plusieurs signaux, pas uniquement du code de redirection.
    </p>
    <p>
      Pour cette formation, retiens surtout la distinction suivante : une redirection permanente
      correspond à un changement durable, tandis qu'une redirection temporaire correspond à une
      situation qui n'a pas vocation à rester définitive.
    </p>
    <p>Tu n'as pas besoin de configurer ces codes manuellement pour le moment.</p>
    <p>
      De nombreux CMS et services d'hébergement proposent des fonctionnalités permettant de gérer
      les redirections.
    </p>
    <h2>Les erreurs de redirection les plus fréquentes</h2>
    <p>Une redirection correctement configurée permet de préserver l'accès à un contenu.</p>
    <p>Mais certaines erreurs peuvent compliquer la navigation et l'exploration du site.</p>
    <p>
      La première consiste à envoyer les visiteurs vers une page qui ne correspond plus au contenu
      recherché.
    </p>
    <p>
      Imaginons qu'une ancienne page présente une prestation de photographie de mariage et qu'elle
      soit redirigée vers la page d'accueil, alors qu'une nouvelle page équivalente existe.
    </p>
    <p>Le visiteur se retrouve alors sur une page générale et doit recommencer sa recherche.</p>
    <p>
      Une solution plus cohérente consisterait à rediriger l'ancienne URL directement vers la
      nouvelle page consacrée aux mariages.
    </p>
    <h3>Éviter les redirections sans rapport avec le contenu</h3>
    <p>
      Il peut être tentant de rediriger toutes les anciennes pages vers la page d'accueil pour
      éviter les erreurs 404.
    </p>
    <p>Mais cette pratique n'est pas toujours appropriée.</p>
    <p>
      Si une ancienne page a été supprimée et qu'aucun contenu équivalent n'existe, une redirection
      vers une page sans rapport peut dérouter les visiteurs.
    </p>
    <p>
      Google peut également interpréter certaines redirections non pertinentes comme des erreurs de
      type <em>soft 404</em>.
    </p>
    <p>
      Il vaut donc mieux conserver une réponse 404 ou 410 appropriée lorsqu'un contenu a réellement
      disparu sans remplacement pertinent.
    </p>
    <p>
      À l'inverse, si une nouvelle page répond au même besoin, une redirection permanente peut
      constituer une bonne solution.
    </p>
    <p>
      <strong
        >La bonne destination d'une redirection n'est pas nécessairement la page d'accueil. C'est la
        page qui correspond réellement au contenu recherché.</strong
      >
    </p>
    <h3>Les chaînes de redirections</h3>
    <p>Une autre difficulté fréquente concerne les chaînes de redirections.</p>
    <p>Imaginons que notre photographe ait successivement modifié l'adresse d'une page.</p>
    <p>Au départ, elle se trouvait sur <code>/mariages</code>.</p>
    <p>
      Elle a ensuite été déplacée vers <code>/photographie-mariage</code>, puis vers
      <code>/prestations/photographie-mariage</code>.
    </p>
    <p>
      Si les anciennes règles n'ont pas été mises à jour, les visiteurs pourraient être redirigés
      successivement d'une adresse vers une deuxième, puis vers une troisième.
    </p>
    <p>Cette situation peut fonctionner, mais elle ajoute des étapes inutiles au chargement.</p>
    <p>
      Il est généralement préférable que l'ancienne URL renvoie directement vers l'adresse
      définitive.
    </p>
    <p>
      Google recommande d'ailleurs d'éviter les chaînes de redirections et de limiter leur longueur
      lorsque plusieurs étapes sont inévitables.
    </p>
    <h3>Les boucles de redirections</h3>
    <p>
      Une boucle apparaît lorsque plusieurs règles renvoient les visiteurs les unes vers les autres
      sans leur permettre d'atteindre une page définitive.
    </p>
    <p>
      Imaginons que <code>/mariages</code> redirige vers <code>/prestations/mariage</code>, tandis
      qu'une deuxième règle renvoie cette dernière adresse vers <code>/mariages</code>.
    </p>
    <p>Le navigateur peut alors détecter une boucle et afficher une erreur.</p>
    <p>La page devient inaccessible à travers ces chemins.</p>
    <p>
      Ce type de problème peut provenir d'une mauvaise configuration dans un CMS, un hébergement ou
      un service intermédiaire.
    </p>
    <p>
      La correction consiste à identifier les règles contradictoires et à définir une destination
      finale cohérente.
    </p>
    <p>
      Si tu rencontres cette situation, conserve les adresses concernées et évite de modifier
      plusieurs réglages à la fois sans comprendre leur fonctionnement.
    </p>
    <h2>Redirection et URL canonique : deux mécanismes différents</h2>
    <p>
      Lorsque plusieurs adresses correspondent à un même contenu, tu rencontreras également la
      notion d'URL canonique.
    </p>
    <p>Nous l'avons déjà évoquée dans les modules précédents.</p>
    <p>
      Une URL canonique correspond à la version considérée comme représentative lorsqu'il existe
      plusieurs pages identiques ou suffisamment similaires.
    </p>
    <p>
      Une page peut notamment utiliser une balise HTML <code>rel="canonical"</code> pour suggérer à
      Google quelle URL devrait être privilégiée.
    </p>
    <p>Mais une balise canonique ne fonctionne pas comme une redirection.</p>
    <p>Avec une redirection, le visiteur est automatiquement envoyé vers une autre adresse.</p>
    <p>
      Avec une balise canonique, la page reste généralement accessible à son adresse actuelle. La
      balise fournit simplement un signal concernant la version à privilégier pour l'indexation.
    </p>
    <p>
      Imaginons qu'une boutique en ligne affiche un même produit à travers plusieurs URL comportant
      des paramètres.
    </p>
    <p>
      Elle peut avoir besoin de conserver ces variantes accessibles tout en indiquant une version
      principale.
    </p>
    <p>Une URL canonique peut alors être pertinente.</p>
    <p>
      À l'inverse, lorsqu'une ancienne page a été définitivement remplacée par une nouvelle adresse,
      une redirection permanente est généralement plus adaptée.
    </p>
    <p>Il ne faut donc pas utiliser ces mécanismes de manière interchangeable.</p>
    <p>
      Nous approfondirons les URL canoniques dans la leçon suivante, consacrée aux fichiers et
      directives techniques.
    </p>
    <h2>Comment sécuriser un changement d'URL ?</h2>
    <p>
      Maintenant que nous connaissons le rôle des redirections, nous allons apprendre à préparer
      correctement un changement d'adresse.
    </p>
    <p>
      Cette étape est particulièrement importante lorsque ton site possède déjà des visiteurs, des
      liens externes ou des pages indexées.
    </p>
    <p>
      Avant toute modification, il faut d'abord comprendre pourquoi le changement est nécessaire.
    </p>
    <p>
      Une URL existante ne doit pas être remplacée simplement parce qu'une autre formulation semble
      légèrement plus intéressante pour le SEO.
    </p>
    <p>
      En revanche, une réorganisation complète des prestations, une fusion de contenus ou la
      suppression d'une ancienne page peuvent justifier un changement.
    </p>
    <h3>Conserver une correspondance entre les anciennes et les nouvelles adresses</h3>
    <p>
      La première précaution consiste à conserver l'ancienne URL et à identifier la nouvelle
      destination.
    </p>
    <p>
      Pour notre photographe, nous pourrions noter que <code>/mariages</code> doit désormais
      renvoyer vers <code>/prestations/photographie-mariage</code>.
    </p>
    <p>
      Si plusieurs pages changent d'adresse, nous pouvons préparer un tableau de correspondance.
    </p>
    <p>
      Cette démarche permet d'éviter les oublis et de vérifier que chaque ancienne page possède une
      destination appropriée.
    </p>
    <p>Mais il ne faut pas attribuer automatiquement une nouvelle destination à toutes les URL.</p>
    <p>
      Lorsqu'un contenu a été supprimé sans remplacement pertinent, il peut être préférable de
      conserver une réponse indiquant que la page n'existe plus.
    </p>
    <h3>Mettre à jour les liens internes</h3>
    <p>Dans le module précédent, nous avons appris à créer des liens internes pertinents.</p>
    <p>Lorsqu'une page change d'adresse, ces liens doivent également être examinés.</p>
    <p>Imaginons que plusieurs guides renvoient vers l'ancienne URL de notre page de mariage.</p>
    <p>
      Même si une redirection permet encore d'accéder au contenu, il est préférable de mettre à jour
      ces liens lorsqu'on en a la possibilité.
    </p>
    <p>Ils pourront ainsi diriger directement les visiteurs vers la nouvelle adresse.</p>
    <p>
      Cette mise à jour permet d'éviter des redirections inutiles et de conserver un maillage
      interne cohérent.
    </p>
    <p>
      Il ne faut toutefois pas supprimer la redirection simplement parce que les liens internes ont
      été corrigés.
    </p>
    <p>
      D'autres sites peuvent encore utiliser l'ancienne adresse, et celle-ci peut également rester
      connue de Google ou des visiteurs.
    </p>
    <h3>Vérifier les autres références à l'URL</h3>
    <p>
      Un changement d'adresse peut également nécessiter la mise à jour d'autres éléments du site.
    </p>
    <p>
      Par exemple, ton sitemap XML devrait idéalement présenter les URL définitives que tu souhaites
      voir explorées et indexées.
    </p>
    <p>
      Les éventuelles balises canoniques doivent également être cohérentes avec l'organisation
      retenue.
    </p>
    <p>
      Si tu disposes de liens dans des newsletters, des supports commerciaux ou des profils
      professionnels, il peut être utile de les mettre à jour lorsqu'ils pointent vers d'anciennes
      adresses.
    </p>
    <p>L'objectif est d'éviter de conserver plusieurs références contradictoires.</p>
    <p>Il n'est pas nécessaire de maîtriser immédiatement toute cette configuration.</p>
    <p>
      Mais comprendre qu'un changement d'URL concerne davantage que l'adresse visible dans ton
      navigateur constitue déjà une compétence importante.
    </p>
    <h3>Vérifier les modifications après publication</h3>
    <p>Une fois une redirection configurée, il faut vérifier qu'elle fonctionne réellement.</p>
    <p>Commence par ouvrir l'ancienne adresse dans ton navigateur.</p>
    <p>Tu dois être envoyé vers la destination prévue, si c'est bien le comportement attendu.</p>
    <p>Vérifie ensuite que la nouvelle page s'affiche correctement et présente le bon contenu.</p>
    <p>
      Cette première vérification permet de confirmer le parcours du visiteur, mais pas
      nécessairement le code HTTP utilisé par la redirection.
    </p>
    <p>
      Si tu souhaites vérifier qu'une redirection permanente renvoie bien un code 301 ou 308, tu
      peux utiliser un outil d'inspection des réponses HTTP ou les outils de développement du
      navigateur.
    </p>
    <p>
      Si tu ne maîtrises pas ces fonctionnalités, ton hébergeur ou ton prestataire technique peut
      effectuer cette vérification.
    </p>
    <p>
      Tu peux également utiliser Google Search Console pour inspecter la nouvelle adresse et
      observer son état d'indexation.
    </p>
    <p>Rappelle-toi que Google peut avoir besoin de temps pour traiter les changements.</p>
    <p>
      Il est normal que les anciennes et les nouvelles URL apparaissent temporairement dans
      différents rapports pendant la transition.
    </p>
    <p>
      <strong
        >Une migration d'URL ne se termine pas au moment où les redirections sont configurées. Elle
        doit également être vérifiée et suivie dans le temps.</strong
      >
    </p>
    <h2>Démonstration — Réorganisons les URL d'un site sans casser les liens</h2>
    <p>Passons maintenant à une démonstration concrète.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et imaginer qu'il souhaite
      améliorer l'organisation de son site.
    </p>
    <p>
      Jusqu'à présent, ses prestations sont présentées à travers plusieurs adresses créées au fil
      des années.
    </p>
    <p>Il souhaite désormais les regrouper dans une rubrique commune intitulée « Prestations ».</p>
    <p>
      Nous allons examiner la situation, décider quels changements sont utiles et préparer les
      redirections nécessaires.
    </p>
    <p>Les adresses utilisées sont fictives.</p>
    <h3>Étape 1 — Observer les URL existantes</h3>
    <p>Commençons par examiner les principales pages du site.</p>
    <p>
      Notre photographe possède une page d'accueil, une page consacrée aux mariages, une autre aux
      portraits professionnels et plusieurs guides.
    </p>
    <p>
      Ses prestations sont actuellement accessibles depuis <code>/mariages</code> et
      <code>/portrait-pro</code>.
    </p>
    <p>Ces adresses fonctionnent et présentent les bons contenus.</p>
    <p>Il n'existe donc pas nécessairement de problème technique.</p>
    <p>
      Mais notre photographe souhaite maintenant organiser ses prestations dans une rubrique dédiée,
      notamment pour faciliter la maintenance de son site et l'ajout de nouvelles offres.
    </p>
    <p>Il envisage les nouvelles adresses suivantes :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p><code>https://exemple.fr/prestations/portrait-professionnel</code></p>
    <p>Nous allons maintenant vérifier si ce changement est réellement nécessaire.</p>
    <h3>Étape 2 — Déterminer si les anciennes URL doivent être conservées</h3>
    <p>
      Avant d'appliquer les modifications, nous nous posons une question importante : faut-il
      absolument changer les adresses pour améliorer l'organisation du site ?
    </p>
    <p>Dans de nombreux cas, non.</p>
    <p>
      Notre photographe pourrait parfaitement créer une rubrique « Prestations » dans sa navigation
      tout en conservant les URL actuelles.
    </p>
    <p>
      Cela permettrait d'améliorer la structure visible du site sans modifier les adresses déjà
      utilisées.
    </p>
    <p>
      Mais imaginons qu'il décide tout de même d'effectuer cette réorganisation, parce qu'elle
      accompagne une refonte plus large de ses contenus et de leur gestion.
    </p>
    <p>Le changement peut alors être justifié.</p>
    <p>Nous allons simplement le préparer correctement.</p>
    <h3>Étape 3 — Construire une correspondance entre les anciennes et les nouvelles URL</h3>
    <p>Nous commençons par noter les anciennes adresses et leurs nouvelles destinations.</p>
    <div class="mt-6 overflow-x-auto rounded-xl border border-petrol/15">
      <table class="w-full min-w-[440px] border-collapse text-left text-sm">
        <thead class="bg-mist text-ink">
          <tr>
            <th scope="col" class="px-4 py-3 font-semibold">Ancienne URL</th>
            <th scope="col" class="px-4 py-3 font-semibold">Nouvelle URL</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-petrol/10">
          <tr>
            <td class="px-4 py-3"><code>/mariages</code></td>
            <td class="px-4 py-3"><code>/prestations/photographie-mariage</code></td>
          </tr>
          <tr>
            <td class="px-4 py-3"><code>/portrait-pro</code></td>
            <td class="px-4 py-3"><code>/prestations/portrait-professionnel</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Ce tableau représente notre première base de travail.</p>
    <p>Chaque ancienne page possède une nouvelle destination qui présente la même prestation.</p>
    <p>Nous pouvons donc envisager une redirection permanente pour chacune d'elles.</p>
    <p>
      Imaginons également que notre photographe possède une ancienne page
      <code>/portfolio-2023</code>, supprimée sans remplacement.
    </p>
    <p>Dans ce cas, nous ne cherchons pas automatiquement à la rediriger vers une prestation.</p>
    <p>Si aucun contenu équivalent n'existe, une réponse 404 ou 410 peut être plus appropriée.</p>
    <p>Nous distinguons ainsi les pages déplacées des contenus réellement supprimés.</p>
    <h3>Étape 4 — Préparer les redirections permanentes</h3>
    <p>
      Notre photographe souhaite désormais que les personnes utilisant <code>/mariages</code> soient
      automatiquement dirigées vers <code>/prestations/photographie-mariage</code>.
    </p>
    <p>Il peut donc prévoir une redirection permanente de type 301 ou 308.</p>
    <p>
      Selon son outil de création de site, cette redirection pourra être configurée depuis une
      fonctionnalité dédiée, une extension ou les paramètres d'hébergement.
    </p>
    <p>
      Il est important de ne pas inventer une règle de serveur ni de modifier une configuration
      sensible sans comprendre son fonctionnement.
    </p>
    <p>
      Dans notre exemple, nous supposons que notre photographe utilise une fonctionnalité de
      redirection adaptée à son site.
    </p>
    <p>
      Il configure la correspondance entre l'ancienne adresse et la nouvelle, puis répète
      l'opération pour la page de portraits professionnels.
    </p>
    <p>L'objectif est que chaque ancienne URL dirige directement vers sa destination définitive.</p>
    <h3>Étape 5 — Vérifier les liens internes</h3>
    <p>
      Une fois les redirections prévues, notre photographe examine les principales pages de son
      site.
    </p>
    <p>Il découvre que sa page d'accueil contient encore un lien vers <code>/mariages</code>.</p>
    <p>
      Il remarque également qu'un guide sur le choix d'un photographe utilise cette ancienne
      adresse.
    </p>
    <p>
      Même si la redirection permettrait aux visiteurs d'accéder au contenu, il décide de mettre à
      jour ces liens pour qu'ils renvoient directement vers
      <code>/prestations/photographie-mariage</code>.
    </p>
    <p>Il réalise la même vérification pour les portraits professionnels.</p>
    <p>
      Cette étape permet de conserver des liens internes propres et cohérents avec la nouvelle
      organisation.
    </p>
    <p>Elle évite également de multiplier inutilement les redirections.</p>
    <h3>Étape 6 — Vérifier les URL canoniques et le sitemap</h3>
    <p>Nous allons maintenant examiner les autres références techniques.</p>
    <p>
      Si notre photographe possède un sitemap XML, il doit vérifier que celui-ci présente les URL
      définitives.
    </p>
    <p>
      Il peut consulter la section consacrée aux sitemaps dans Google Search Console et examiner le
      fichier utilisé par son site.
    </p>
    <p>
      Il doit également s'assurer que les éventuelles indications canoniques correspondent bien aux
      nouvelles pages.
    </p>
    <p>
      Ces informations sont souvent gérées automatiquement par le CMS ou les outils SEO utilisés,
      mais elles méritent d'être vérifiées après une réorganisation.
    </p>
    <p>Nous n'allons pas modifier manuellement toutes ces informations dans cette démonstration.</p>
    <p>
      L'objectif est de comprendre qu'un changement d'adresse doit rester cohérent avec le reste de
      la configuration.
    </p>
    <h3>Étape 7 — Tester les anciennes et les nouvelles adresses</h3>
    <p>Notre photographe peut maintenant vérifier les modifications.</p>
    <p>Il ouvre d'abord l'ancienne URL :</p>
    <p><code>https://exemple.fr/mariages</code></p>
    <p>Si la redirection fonctionne, son navigateur doit l'envoyer vers :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>
      Il vérifie ensuite que cette nouvelle page s'affiche correctement et qu'elle contient les
      bonnes informations.
    </p>
    <p>Il répète cette vérification pour la prestation de portraits professionnels.</p>
    <p>
      Si une ancienne adresse entraîne une erreur ou si une redirection mène vers la mauvaise page,
      il faudra corriger la correspondance concernée avant de considérer la migration comme
      terminée.
    </p>
    <p>
      Enfin, lorsque cela est possible, nous vérifions que les redirections sont réellement
      permanentes et qu'elles ne passent pas par plusieurs étapes inutiles.
    </p>
    <h3>Étape 8 — Suivre la transition dans Search Console</h3>
    <p>La dernière étape consiste à observer l'évolution des URL dans Google Search Console.</p>
    <p>
      Notre photographe peut inspecter les nouvelles pages et vérifier qu'elles sont accessibles et
      indexables.
    </p>
    <p>
      Il peut également consulter les rapports d'indexation pour identifier d'éventuelles erreurs
      liées aux anciennes adresses.
    </p>
    <p>
      Il ne faut toutefois pas s'attendre à ce que Google remplace immédiatement toutes les URL dans
      ses résultats.
    </p>
    <p>Une migration nécessite une nouvelle exploration et un traitement des changements.</p>
    <p>La transition peut donc prendre du temps.</p>
    <p>
      Si les nouvelles pages fonctionnent correctement et que les redirections sont cohérentes,
      notre photographe peut continuer à suivre leur évolution sans multiplier inutilement les
      modifications.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous venons de découvrir comment préparer une réorganisation d'URL sans interrompre
      inutilement l'accès aux contenus.
    </p>
    <p>
      Nous avons commencé par examiner les adresses existantes, puis vérifié si le changement était
      réellement justifié.
    </p>
    <p>
      Nous avons ensuite construit une correspondance entre les anciennes et les nouvelles pages,
      préparé les redirections permanentes et identifié les liens internes à mettre à jour.
    </p>
    <p>
      Enfin, nous avons compris l'importance des vérifications après publication et du suivi dans
      Google Search Console.
    </p>
    <p>Mais la principale leçon de cette démonstration est peut-être ailleurs.</p>
    <p>
      <strong
        >Avant de modifier une URL, il faut toujours se demander si le changement apporte
        suffisamment de valeur pour justifier les précautions qu'il nécessite.</strong
      >
    </p>
    <p>
      Une adresse existante, compréhensible et fonctionnelle n'a pas besoin d'être remplacée
      simplement pour correspondre davantage à un mot-clé.
    </p>
    <p>
      En revanche, lorsqu'un changement est nécessaire, une bonne préparation permet d'en limiter
      les risques.
    </p>
    <h2>À toi de jouer — Vérifie l'organisation et les redirections de ton site</h2>
    <p>
      Maintenant que tu sais comment les URL sont construites et comment les redirections
      fonctionnent, il est temps d'examiner ton propre site.
    </p>
    <p>
      Dans les premiers modules, tu as identifié les pages stratégiques de ton activité. Nous allons
      reprendre ces mêmes pages pour observer leur adresse et vérifier si certaines redirections
      méritent ton attention.
    </p>
    <p>L'objectif n'est pas de modifier tes URL aujourd'hui.</p>
    <p>
      Nous allons simplement apprendre à reconnaître une organisation cohérente et à identifier les
      changements qui pourraient nécessiter une préparation particulière.
    </p>
    <p><strong>Durée estimée : 15 à 20 minutes.</strong></p>
    <h3>Étape 1 — Examine les URL de tes pages stratégiques</h3>
    <p>
      Commence par reprendre les trois pages importantes que tu as identifiées dans les premiers
      modules.
    </p>
    <p>Observe leurs adresses complètes.</p>
    <p>
      Leur sujet est-il facilement compréhensible ? Les chemins utilisés correspondent-ils à
      l'organisation générale de ton site ? Certaines URL comportent-elles des éléments inutilement
      complexes ?
    </p>
    <p>
      Essaie également de repérer les éventuelles différences de convention entre tes pages, comme
      l'utilisation de majuscules, de catégories ou de paramètres.
    </p>
    <p>Ne considère pas automatiquement ces différences comme des erreurs.</p>
    <p>L'objectif est simplement de comprendre comment tes adresses sont construites.</p>
    <h3>Étape 2 — Identifie les anciennes adresses éventuelles</h3>
    <p>Demande-toi maintenant si certaines pages ont déjà changé d'adresse.</p>
    <p>
      Tu as peut-être renommé une rubrique, déplacé un article ou remplacé une ancienne page de
      prestation.
    </p>
    <p>Si tu connais encore les anciennes URL, essaie de les ouvrir dans ton navigateur.</p>
    <p>
      Sont-elles automatiquement redirigées vers les nouvelles pages ? Renvoient-elles une erreur ?
      Mènent-elles vers un contenu qui ne correspond plus au sujet initial ?
    </p>
    <p>Note les situations qui te semblent importantes.</p>
    <p>
      Si ton site est récent et que tu n'as jamais modifié ses adresses, tu peux simplement passer à
      l'étape suivante.
    </p>
    <h3>Étape 3 — Vérifie la cohérence des liens et des destinations</h3>
    <p>
      Choisis maintenant une page stratégique et examine les principaux liens internes qui
      permettent d'y accéder.
    </p>
    <p>Vérifie qu'ils dirigent vers la bonne adresse.</p>
    <p>
      Si tu identifies un lien utilisant une ancienne URL, détermine si une redirection existe et si
      le lien pourrait être mis à jour directement.
    </p>
    <p>
      Tu peux également vérifier qu'une éventuelle redirection mène vers une page réellement
      pertinente.
    </p>
    <p>
      Par exemple, si une ancienne page de prestation a été remplacée par une nouvelle page
      équivalente, la redirection devrait normalement diriger vers ce nouveau contenu plutôt que
      vers une page sans rapport.
    </p>
    <p>
      Si tu sais modifier un lien interne sans risque, tu peux effectuer cette petite correction.
    </p>
    <p>
      En revanche, ne modifie pas les règles de redirection du serveur sans maîtriser leur
      fonctionnement.
    </p>
    <h3>Étape 4 — Conserve tes observations</h3>
    <p>
      Pour terminer, note les URL examinées et les éventuelles difficultés identifiées dans ta
      checklist d'audit technique.
    </p>
    <p>
      Si tu envisages de modifier une adresse à l'avenir, conserve l'ancienne URL, la nouvelle
      destination envisagée et la raison de ce changement.
    </p>
    <p>Indique également si une redirection permanente serait nécessaire.</p>
    <p>
      Si aucune difficulté n'a été identifiée, note simplement que tes principales URL semblent
      cohérentes et que les liens examinés fonctionnent correctement.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir vérifié l'organisation de trois URL importantes,
      examiné les éventuelles redirections existantes et identifié les corrections ou précautions
      nécessaires.
    </p>
    <p>Tu n'as pas besoin d'avoir réalisé une migration pour terminer cet exercice.</p>
    <p>
      L'objectif est d'apprendre à reconnaître les situations qui méritent ton attention et à
      préparer correctement les changements lorsque ceux-ci deviennent nécessaires.
    </p>
    <p>
      Ces observations alimenteront l'action « Réaliser un premier audit technique de mon site »
      dans « Mon plan d'action », que tu finaliseras à la fin du module 5.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>Une URL correspond à l'adresse permettant d'accéder à une ressource sur Internet.</p>
    <p>
      Son organisation peut aider les visiteurs et les moteurs de recherche à comprendre le sujet
      d'une page et sa place dans le site.
    </p>
    <p>
      Lorsque tu crées de nouveaux contenus, il est généralement préférable de choisir des adresses
      simples, descriptives et cohérentes avec la structure générale de ton site.
    </p>
    <p>
      Mais une URL existante n'a pas besoin d'être modifiée uniquement pour intégrer davantage de
      mots-clés.
    </p>
    <p>
      Un changement d'adresse peut avoir des conséquences sur les liens internes, les backlinks,
      l'exploration et l'indexation du contenu.
    </p>
    <p>C'est pourquoi nous avons découvert le rôle des redirections.</p>
    <p>
      Les redirections permanentes, comme les codes 301 et 308, permettent notamment d'indiquer
      qu'un contenu a changé durablement d'adresse. Les redirections temporaires, comme les codes
      302 et 307, correspondent à des situations où le déplacement n'est pas considéré comme
      définitif.
    </p>
    <p>
      Nous avons également appris à éviter plusieurs erreurs fréquentes : rediriger des pages vers
      des destinations sans rapport, multiplier les chaînes de redirections ou créer des boucles
      empêchant l'accès au contenu.
    </p>
    <p>Enfin, nous avons compris qu'une migration d'URL doit être préparée et vérifiée.</p>
    <p>
      Il est important de conserver une correspondance entre les anciennes et les nouvelles
      adresses, de mettre à jour les liens internes lorsque cela est possible et de vérifier la
      cohérence du sitemap et des indications canoniques.
    </p>
    <p>
      Google peut également avoir besoin de temps pour traiter les nouvelles URL et les
      redirections.
    </p>
    <p>
      <strong
        >Une bonne architecture SEO repose donc sur deux principes complémentaires : proposer des
        adresses compréhensibles et préserver leur accessibilité lorsque ton site évolue.</strong
      >
    </p>
    <p>
      Tu sais désormais pourquoi les changements d'URL doivent être réalisés avec méthode, et
      comment identifier les situations qui nécessitent une véritable intervention.
    </p>
    <SeoLesson14Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu comprends désormais comment les URL sont construites, pourquoi leur organisation mérite une
      attention particulière et comment préserver l'accès aux contenus lorsqu'une adresse change.
    </p>
    <p>
      Tu sais également distinguer les principales redirections et reconnaître les erreurs qui
      peuvent perturber la navigation ou l'exploration.
    </p>
    <p>Mais l'organisation des URL ne constitue qu'une partie du référencement technique.</p>
    <p>
      Un site possède également des fichiers et des instructions permettant de guider les robots, de
      signaler les pages importantes ou d'indiquer quelles versions d'un contenu doivent être
      privilégiées.
    </p>
    <p>
      C'est notamment le rôle du fichier <code>robots.txt</code>, du sitemap XML et des balises
      canoniques.
    </p>
    <p>
      Dans la prochaine leçon, nous allons apprendre à comprendre ces mécanismes et à vérifier leur
      fonctionnement.
    </p>
    <p>
      Nous verrons également pourquoi une instruction technique mal configurée peut empêcher
      l'exploration ou compliquer l'indexation de pages pourtant importantes.
    </p>
    <p><strong>Prochaine leçon : Comprendre robots.txt, sitemap et balises canoniques.</strong></p>
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
