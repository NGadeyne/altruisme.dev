<script setup lang="ts">
import SeoLesson15Quiz from './SeoLesson15Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Ton site donne-t-il les bonnes indications à Google ?</h2>
    <p>
      Imagine que tu possèdes un site internet sur lequel tu présentes plusieurs prestations. Tu as
      travaillé tes contenus, amélioré les titres de tes pages et créé des liens internes pour
      faciliter la navigation. Tu as également commencé à vérifier leur indexation dans Google
      Search Console. Pourtant, certaines pages importantes restent absentes des résultats de
      recherche, alors que d'autres semblent être considérées comme des versions secondaires de
      contenus déjà présents sur ton site.
    </p>
    <p>
      En essayant de comprendre ces situations, tu découvres plusieurs termes techniques :
      <code>robots.txt</code>, sitemap XML, balise canonique, <code>noindex</code>. Tu remarques
      également que certaines URL figurent dans ton sitemap, mais ne sont pas indexées, tandis que
      d'autres semblent bloquées par une instruction dont tu ignores l'origine.
    </p>
    <p>
      Faut-il modifier ton fichier <code>robots.txt</code> ? Ajouter toutes tes pages dans ton
      sitemap ? Supprimer les balises canoniques pour permettre à Google de tout indexer ?
    </p>
    <p>
      Ce sont des questions importantes, car ces différents mécanismes influencent la manière dont
      les moteurs de recherche découvrent et interprètent les contenus de ton site. Mais ils ne
      remplissent pas tous le même rôle, et une mauvaise modification peut parfois compliquer
      davantage la situation.
    </p>
    <p>
      Reprenons l'exemple de notre photographe professionnel à Bordeaux. Il possède une page
      consacrée à ses prestations de mariage, une autre aux portraits professionnels et plusieurs
      guides destinés à ses futurs clients. Son outil de création de site génère automatiquement un
      sitemap XML et différents paramètres techniques. Pourtant, notre photographe ne sait pas
      exactement à quoi servent ces éléments ni comment vérifier qu'ils sont correctement
      configurés.
    </p>
    <p>
      Son objectif n'est pas de devenir administrateur système. Il souhaite simplement s'assurer que
      Google peut découvrir ses pages importantes, qu'aucune instruction ne bloque leur exploration
      par erreur et que leurs différentes adresses sont interprétées de manière cohérente.
    </p>
    <p>
      <strong
        >C'est précisément ce que nous allons apprendre dans cette leçon : comprendre les
        principales instructions techniques envoyées aux moteurs de recherche et savoir vérifier
        qu'elles correspondent aux objectifs de ton site.</strong
      >
    </p>
    <p>
      Dans les deux leçons précédentes, nous avons découvert les erreurs techniques les plus
      fréquentes, l'organisation des URL et les redirections. Nous allons maintenant approfondir
      trois mécanismes complémentaires : le fichier <code>robots.txt</code>, le sitemap XML et les
      balises canoniques.
    </p>
    <h2>Trois mécanismes différents pour guider les moteurs de recherche</h2>
    <p>Avant d'examiner chaque élément, il est important de comprendre leur fonction générale.</p>
    <p>
      Le fichier <code>robots.txt</code> permet principalement d'indiquer aux robots d'exploration
      quelles parties d'un site ils peuvent ou ne peuvent pas explorer. Il intervient donc au niveau
      de l'accès des robots aux ressources.
    </p>
    <p>
      Le sitemap XML fournit une liste d'URL que le propriétaire du site souhaite faire découvrir
      aux moteurs de recherche. Il peut également transmettre certaines informations complémentaires
      sur ces ressources, notamment leur dernière modification.
    </p>
    <p>
      Enfin, les balises canoniques permettent de signaler une version préférée lorsque plusieurs
      URL proposent un contenu identique ou très similaire.
    </p>
    <p>
      Ces trois mécanismes peuvent donc contribuer à une exploration et à une indexation plus
      cohérentes, mais ils ne sont pas interchangeables.
    </p>
    <p>
      Imaginons que notre photographe possède une page importante consacrée à la photographie de
      mariage. Le sitemap peut signaler son adresse à Google. Le fichier
      <code>robots.txt</code> peut autoriser ou empêcher son exploration. Et une balise canonique
      peut indiquer si cette adresse constitue la version préférée du contenu ou si une autre URL
      doit être privilégiée.
    </p>
    <p>
      Mais aucun de ces éléments ne garantit à lui seul qu'une page sera indexée ou qu'elle
      obtiendra une bonne position.
    </p>
    <p>
      Google utilise également les liens, le contenu et de nombreux autres signaux pour découvrir,
      analyser et sélectionner les pages présentes dans ses résultats.
    </p>
    <p>
      <strong
        >L'objectif de ces mécanismes n'est donc pas de forcer Google à référencer ton site. Il est
        de lui fournir des indications cohérentes et d'éviter certaines difficultés
        techniques.</strong
      >
    </p>
    <h2>Comprendre le rôle du fichier robots.txt</h2>
    <p>
      Le fichier <code>robots.txt</code> est un fichier texte placé à un emplacement particulier
      d'un site internet. Il permet de communiquer des règles d'exploration aux robots qui
      respectent ce protocole.
    </p>
    <p>
      Sur un site comme celui de notre photographe, il est généralement accessible depuis une
      adresse comme :
    </p>
    <p><code>https://exemple.fr/robots.txt</code></p>
    <p>
      Ce fichier se trouve à la racine du nom d'hôte concerné. Les règles d'un fichier
      <code>robots.txt</code> ne s'appliquent pas automatiquement à tous les sous-domaines : un site
      principal et un sous-domaine peuvent posséder leurs propres fichiers et leurs propres règles.
    </p>
    <p>
      Lorsque Googlebot souhaite explorer une URL, il tient compte des règles pertinentes de ce
      fichier.
    </p>
    <p>
      Imaginons que notre photographe possède une fonctionnalité interne de recherche générant de
      nombreuses adresses sans intérêt particulier pour les moteurs. Dans certaines configurations,
      il pourrait être utile de limiter leur exploration afin d'éviter des demandes inutiles.
    </p>
    <p>Le fichier <code>robots.txt</code> peut notamment contribuer à ce type de gestion.</p>
    <p>
      Mais il faut immédiatement corriger une idée reçue :
      <strong
        >empêcher l'exploration d'une URL ne garantit pas qu'elle sera absente des résultats
        Google</strong
      >.
    </p>
    <p>
      Google peut connaître une adresse grâce à des liens présents sur d'autres pages, même
      lorsqu'il n'est pas autorisé à explorer directement son contenu. Dans certaines situations,
      l'URL peut donc apparaître dans les résultats sans que Google ait pu récupérer les
      informations de la page.
    </p>
    <p>
      C'est pourquoi <code>robots.txt</code> ne doit pas être utilisé comme une solution permettant
      de masquer des informations confidentielles ou de garantir la désindexation d'un contenu.
    </p>
    <h3>Comment lire les principales instructions ?</h3>
    <p>
      Un fichier <code>robots.txt</code> peut contenir différentes instructions, mais deux notions
      suffisent pour commencer : <code>User-agent</code> et <code>Disallow</code>.
    </p>
    <p>
      L'instruction <code>User-agent</code> permet de désigner les robots auxquels s'appliquent les
      règles suivantes. Lorsqu'elle utilise le caractère <code>*</code>, elle concerne généralement
      l'ensemble des robots compatibles qui ne sont pas visés par des règles plus spécifiques.
    </p>
    <p>
      L'instruction <code>Disallow</code> indique les chemins auxquels les robots concernés ne
      doivent pas accéder.
    </p>
    <p>
      Imaginons que notre photographe possède une section interne qui ne présente pas d'intérêt pour
      l'exploration. Son fichier pourrait contenir cet exemple :
    </p>
    <div class="code-example">
      <pre><code>
User-agent: *
Disallow: /recherche-interne/
Sitemap: https://exemple.fr/sitemap.xml
      </code></pre>
    </div>
    <p>
      La première ligne désigne les robots concernés. La deuxième leur demande de ne pas explorer
      les URL correspondant au chemin indiqué. La troisième fournit l'adresse d'un sitemap.
    </p>
    <p>
      Il s'agit simplement d'un exemple pédagogique, pas d'une configuration à recopier
      automatiquement sur ton site.
    </p>
    <p>Chaque instruction doit correspondre à un besoin réel.</p>
    <p>
      Si notre photographe souhaitait empêcher les robots d'explorer toute sa rubrique
      <code>/prestations/</code>, une instruction comme
      <code>Disallow: /prestations/</code> pourrait poser un problème important, puisque cette
      rubrique contient justement les pages qu'il souhaite rendre visibles.
    </p>
    <p>
      À l'inverse, l'absence de règle <code>Disallow</code> n'est pas nécessairement une erreur. Un
      site dont toutes les pages publiques peuvent être explorées n'a pas besoin de créer
      artificiellement des restrictions.
    </p>
    <p>
      De nombreux CMS génèrent également ce fichier automatiquement. Selon ton outil de création de
      site, tu n'auras pas forcément besoin de le créer ou de le modifier manuellement.
    </p>
    <h3>robots.txt ne protège pas les informations privées</h3>
    <p>Une autre distinction est importante.</p>
    <p>
      Imaginons que notre photographe possède un espace privé permettant à ses clients de consulter
      leurs photographies après une prestation.
    </p>
    <p>
      Il serait dangereux de considérer qu'une instruction dans <code>robots.txt</code> suffit à
      protéger cet espace.
    </p>
    <p>
      Le fichier est public, et tous les robots ou utilisateurs ne sont pas obligés de respecter ses
      instructions. Une URL bloquée peut également rester accessible directement si le serveur ne
      met en place aucune protection.
    </p>
    <p>
      Pour protéger des contenus réellement confidentiels, il faut utiliser des mécanismes d'accès
      adaptés, comme une authentification.
    </p>
    <p>
      Le fichier <code>robots.txt</code> sert à gérer l'exploration. Il ne remplace pas la sécurité
      de ton site.
    </p>
    <h2>Comprendre la différence entre robots.txt et noindex</h2>
    <p>
      Dans les leçons précédentes, nous avons découvert l'instruction <code>noindex</code>, qui
      permet de demander aux moteurs de recherche compatibles de ne pas indexer une page.
    </p>
    <p>Il est important de comprendre sa différence avec le fichier <code>robots.txt</code>.</p>
    <p>
      Lorsqu'une page possède une instruction <code>noindex</code>, Google doit normalement pouvoir
      accéder à cette instruction pour la prendre en compte. Elle peut être présente dans une balise
      HTML ou dans un en-tête HTTP.
    </p>
    <p>
      Imaginons que notre photographe possède une page publique qu'il souhaite rendre accessible par
      un lien direct, mais qu'il ne souhaite pas voir apparaître dans Google.
    </p>
    <p>Une instruction <code>noindex</code> peut correspondre à ce besoin.</p>
    <p>
      En revanche, si cette même page est également bloquée par <code>robots.txt</code>, Google peut
      ne pas être capable d'explorer son contenu et donc de découvrir l'instruction
      <code>noindex</code>.
    </p>
    <p>
      Cette combinaison peut produire un résultat contraire à celui recherché : l'URL pourrait
      encore apparaître dans Google parce qu'elle est connue par d'autres moyens.
    </p>
    <p>
      <strong
        >Il faut donc retenir trois rôles distincts : <code>robots.txt</code> contrôle l'exploration
        des robots compatibles, <code>noindex</code> contrôle l'indexation lorsqu'il peut être lu,
        et une protection par authentification contrôle l'accès aux contenus privés.</strong
      >
    </p>
    <p>Ces mécanismes répondent à des objectifs différents.</p>
    <p>
      Lorsque tu identifies une instruction technique, commence toujours par te demander quel
      résultat elle cherche à obtenir. Ne la supprime pas simplement parce qu'elle semble empêcher
      une page d'apparaître dans Google.
    </p>
    <p>
      Certaines restrictions sont parfaitement légitimes. D'autres peuvent avoir été ajoutées par
      erreur.
    </p>
    <p>Le bon diagnostic consiste à distinguer ces deux situations.</p>
    <h2>Comprendre le rôle du sitemap XML</h2>
    <p>Passons maintenant au deuxième mécanisme : le sitemap XML.</p>
    <p>
      Un sitemap est un fichier qui permet de transmettre aux moteurs de recherche des informations
      sur les ressources importantes d'un site.
    </p>
    <p>
      Dans sa forme la plus courante, il contient une liste d'URL que le propriétaire souhaite
      rendre accessibles à l'exploration.
    </p>
    <p>
      Prenons l'exemple de notre photographe. Son site possède une page d'accueil, plusieurs
      prestations et différents guides. Le sitemap peut permettre à Google de découvrir plus
      facilement ces adresses.
    </p>
    <p>Un sitemap XML pourrait notamment contenir les URL suivantes :</p>
    <p><code>https://exemple.fr/</code></p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p><code>https://exemple.fr/prestations/portrait-professionnel</code></p>
    <p><code>https://exemple.fr/guides/choisir-photographe-mariage</code></p>
    <p>
      Ces adresses représentent les pages que notre photographe souhaite rendre visibles dans les
      moteurs de recherche.
    </p>
    <p>
      Le sitemap peut également contenir certaines informations complémentaires, comme la date de
      dernière modification significative d'une page.
    </p>
    <p>Mais il ne faut pas confondre cette liste avec l'index Google.</p>
    <p>
      <strong
        >Une URL présente dans un sitemap n'est pas nécessairement explorée, et une page explorée
        n'est pas nécessairement indexée.</strong
      >
    </p>
    <p>
      Le sitemap constitue une source d'informations pour les moteurs de recherche. Il ne représente
      ni un ordre ni une garantie.
    </p>
    <h3>Tous les sites ont-ils besoin d'un sitemap ?</h3>
    <p>
      Un sitemap est particulièrement intéressant lorsque le site possède un grand nombre de pages,
      des contenus difficiles à découvrir uniquement par les liens ou une structure relativement
      complexe.
    </p>
    <p>
      Il peut également être utile pour un site récent, qui ne possède pas encore beaucoup de liens
      externes, ou pour certaines ressources comme les vidéos, les images et les contenus
      d'actualité.
    </p>
    <p>
      Mais sur un petit site vitrine dont toutes les pages importantes sont correctement reliées
      entre elles, Google peut généralement découvrir les contenus sans dépendre exclusivement d'un
      sitemap.
    </p>
    <p>Cela ne signifie pas qu'il faut éviter d'en utiliser un.</p>
    <p>
      La plupart des CMS modernes proposent une génération automatique, ce qui rend son utilisation
      relativement simple.
    </p>
    <p>
      L'essentiel est de comprendre son rôle et de vérifier qu'il présente des informations
      cohérentes.
    </p>
    <p>
      Sur un site WordPress, par exemple, le sitemap peut être généré par le CMS ou une extension
      SEO. Sur d'autres outils, il peut être disponible directement dans les paramètres techniques
      ou publié automatiquement lors du déploiement.
    </p>
    <p>
      Son adresse n'est pas toujours <code>/sitemap.xml</code>. Tu peux également rencontrer un
      index de sitemaps, comme <code>/sitemap_index.xml</code>, ou d'autres chemins définis par ton
      outil.
    </p>
    <p>
      Il est donc préférable de consulter la configuration réelle de ton site plutôt que de supposer
      qu'une adresse particulière doit nécessairement exister.
    </p>
    <h3>Quelles URL faut-il inclure dans un sitemap ?</h3>
    <p>
      Lorsque tu examines un sitemap, l'objectif n'est pas de vérifier qu'il contient absolument
      toutes les URL accessibles sur ton domaine.
    </p>
    <p>
      Google recommande généralement d'y inclure les adresses préférées des contenus que tu
      souhaites voir apparaître dans ses résultats.
    </p>
    <p>
      Imaginons que notre photographe ait remplacé son ancienne page <code>/mariages</code> par
      <code>/prestations/photographie-mariage</code>.
    </p>
    <p>
      Si une redirection permanente a été mise en place, le sitemap devrait normalement privilégier
      la nouvelle adresse.
    </p>
    <p>
      De la même manière, il n'est généralement pas pertinent d'y ajouter volontairement des pages
      supprimées, des URL qui redirigent ou des contenus exclus de l'indexation par
      <code>noindex</code>.
    </p>
    <p>L'objectif est de présenter une liste cohérente d'URL que tu souhaites rendre indexables.</p>
    <p>
      Il faut également éviter de considérer les informations facultatives du sitemap comme des
      moyens de forcer Google à travailler plus rapidement.
    </p>
    <p>
      Par exemple, une date de dernière modification peut être utile lorsqu'elle reflète une
      véritable évolution significative du contenu. Mais indiquer artificiellement que toutes les
      pages ont été modifiées aujourd'hui ne garantit pas une nouvelle exploration ni une
      amélioration du référencement.
    </p>
    <p>
      Google ne prend pas non plus en compte les indications de fréquence de modification et de
      priorité comme des commandes lui imposant son rythme d'exploration.
    </p>
    <p>
      Privilégie donc des informations exactes plutôt qu'une configuration destinée à donner
      artificiellement davantage d'importance à certaines pages.
    </p>
    <h2>Vérifier son sitemap dans Google Search Console</h2>
    <p>
      Dans le module 2, nous avons appris à utiliser Google Search Console pour examiner
      l'indexation et les performances de ton site.
    </p>
    <p>L'outil permet également de transmettre et de consulter les sitemaps.</p>
    <p>
      Lorsque tu sélectionnes la propriété correspondant à ton site, tu peux accéder à la section «
      Sitemaps » pour consulter les fichiers soumis et les éventuels messages de traitement.
    </p>
    <p>
      Imaginons que notre photographe utilise un sitemap accessible depuis
      <code>https://exemple.fr/sitemap.xml</code>.
    </p>
    <p>
      Il peut renseigner son adresse dans Search Console pour le soumettre à Google, puis observer
      les informations disponibles.
    </p>
    <p>
      Si le fichier a été correctement récupéré et traité, Search Console peut afficher un état
      indiquant que son traitement a réussi.
    </p>
    <p>Mais ce résultat doit être interprété correctement.</p>
    <p>
      Un sitemap traité avec succès signifie que Google a pu prendre en compte le fichier selon les
      informations du rapport. Cela ne signifie pas que toutes les URL qu'il contient sont indexées.
    </p>
    <p>Pour vérifier une page précise, il faudra toujours utiliser l'inspection d'URL.</p>
    <p>
      Il est également possible qu'un sitemap soit déjà déclaré dans <code>robots.txt</code> ou
      découvert par Google sans intervention manuelle de ta part. Le soumettre dans Search Console
      permet notamment de disposer d'informations de suivi, mais cette démarche n'est pas une
      condition obligatoire de découverte.
    </p>
    <p>
      <strong
        >Le sitemap aide Google à connaître tes URL importantes. Search Console t'aide à vérifier le
        traitement du fichier. L'inspection d'URL permet d'examiner la situation d'une page
        particulière.</strong
      >
    </p>
    <p>Ces trois fonctions sont complémentaires.</p>
    <h2>Comprendre les balises canoniques</h2>
    <p>Nous arrivons maintenant au troisième mécanisme : les balises canoniques.</p>
    <p>Le terme peut sembler technique, mais le principe est relativement simple.</p>
    <p>Imaginons qu'un même contenu soit accessible depuis plusieurs URL différentes.</p>
    <p>
      Cela peut notamment arriver lorsqu'un site utilise des paramètres, propose plusieurs variantes
      d'un produit ou conserve des adresses différentes pour un contenu très similaire.
    </p>
    <p>Prenons un exemple.</p>
    <p>
      Notre photographe possède une page consacrée à ses prestations de mariage, accessible depuis :
    </p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>Mais imaginons qu'une campagne marketing utilise également cette adresse :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage?source=newsletter</code></p>
    <p>Les deux URL peuvent afficher exactement le même contenu.</p>
    <p>
      Le paramètre supplémentaire permet éventuellement de distinguer une provenance marketing, sans
      modifier la prestation présentée.
    </p>
    <p>
      Google peut alors considérer que ces deux adresses correspondent à une même page ou à des
      contenus suffisamment similaires pour être regroupés.
    </p>
    <p>C'est ici qu'intervient la notion d'URL canonique.</p>
    <p>
      Une URL canonique représente la version qu'un moteur de recherche choisit comme référence
      principale parmi plusieurs pages identiques ou très similaires.
    </p>
    <p>
      Le propriétaire du site peut également indiquer sa préférence grâce à une balise
      <code>rel="canonical"</code>.
    </p>
    <h3>Comment fonctionne une balise canonique ?</h3>
    <p>Une page HTML peut contenir une indication ressemblant à ceci :</p>
    <p>
      <code
        >&lt;link rel="canonical"
        href="https://exemple.fr/prestations/photographie-mariage"&gt;</code
      >
    </p>
    <p>Cette balise indique que l'adresse présentée constitue la version préférée du contenu.</p>
    <p>
      Dans notre exemple, la page utilisée pour une campagne marketing pourrait déclarer comme
      canonique l'adresse principale sans paramètre.
    </p>
    <p>
      Cela permet de signaler à Google que les différentes variantes correspondent au même contenu
      et que l'URL principale doit être privilégiée.
    </p>
    <p>
      Mais il faut comprendre une nuance essentielle :
      <strong
        >une balise canonique représente un signal de préférence, pas un ordre absolu imposé à
        Google</strong
      >.
    </p>
    <p>
      Le moteur de recherche peut examiner plusieurs indices, notamment les redirections, les liens,
      les sitemaps et la similarité des contenus, avant de choisir une URL canonique.
    </p>
    <p>
      Il peut donc sélectionner une adresse différente de celle indiquée par le propriétaire du
      site.
    </p>
    <p>Cela ne signifie pas nécessairement que la configuration est incorrecte.</p>
    <p>Il faut examiner les contenus concernés et les raisons possibles de cette décision.</p>
    <h3>Quand une balise canonique devient-elle problématique ?</h3>
    <p>Imaginons maintenant que notre photographe possède deux pages réellement différentes.</p>
    <p>
      La première présente ses reportages de mariage. La seconde est consacrée aux portraits
      professionnels.
    </p>
    <p>
      Ces deux pages correspondent à des prestations distinctes et répondent à des intentions de
      recherche différentes.
    </p>
    <p>
      Il ne serait donc pas cohérent que la page de portraits désigne automatiquement la page de
      mariage comme sa version canonique simplement parce qu'elles appartiennent au même site.
    </p>
    <p>
      Une telle configuration pourrait envoyer un signal inadapté à Google, en suggérant que deux
      contenus distincts devraient être traités comme des versions équivalentes.
    </p>
    <p>
      De la même manière, une page importante qui déclare comme canonique une URL inexistante ou
      sans rapport mérite une vérification.
    </p>
    <p>
      Cette situation peut notamment provenir d'un modèle mal configuré, d'une extension SEO ou d'un
      changement d'adresse qui n'a pas été correctement répercuté.
    </p>
    <p>
      Mais attention : une page non sélectionnée comme canonique ne constitue pas automatiquement
      une erreur.
    </p>
    <p>
      Si deux URL présentent réellement le même contenu, il peut être parfaitement normal que Google
      n'en conserve qu'une seule comme version principale.
    </p>
    <p>
      L'objectif n'est donc pas de forcer l'indexation de toutes les variantes, mais de s'assurer
      que Google dispose d'informations cohérentes pour identifier les bonnes versions.
    </p>
    <h2>Canonique, redirection et noindex : comment les distinguer ?</h2>
    <p>
      À ce stade, tu pourrais te demander pourquoi utiliser une balise canonique lorsqu'une
      redirection existe déjà.
    </p>
    <p>La distinction est importante.</p>
    <p>
      Une redirection envoie automatiquement le visiteur vers une autre adresse. Elle est
      généralement adaptée lorsqu'une ancienne page a été définitivement remplacée et ne doit plus
      être utilisée directement.
    </p>
    <p>
      Une balise canonique, en revanche, permet de conserver une URL accessible tout en indiquant
      une préférence pour une autre version du contenu.
    </p>
    <p>
      Enfin, l'instruction <code>noindex</code> demande aux moteurs de recherche compatibles de ne
      pas indexer la page concernée.
    </p>
    <p>Ces mécanismes répondent donc à des situations différentes.</p>
    <p>
      Imaginons que notre photographe déplace définitivement <code>/mariages</code> vers
      <code>/prestations/photographie-mariage</code>. Une redirection permanente constitue
      généralement la solution appropriée.
    </p>
    <p>
      S'il possède deux URL différentes affichant le même contenu en raison d'un paramètre
      marketing, une indication canonique peut être pertinente lorsque les deux adresses doivent
      rester accessibles.
    </p>
    <p>
      S'il possède une page publique qu'il ne souhaite pas voir apparaître dans les résultats de
      recherche, une instruction <code>noindex</code> peut correspondre à son objectif.
    </p>
    <p>
      Il ne faut donc pas utiliser automatiquement une instruction <code>noindex</code> pour
      résoudre un problème de contenus similaires. Google recommande plutôt d'utiliser les
      mécanismes de canonicalisation lorsque l'objectif est de regrouper les différentes versions
      d'un contenu.
    </p>
    <p>Cette distinction permet d'éviter de nombreuses erreurs de configuration.</p>
    <h2>Comment savoir quelle URL Google considère comme canonique ?</h2>
    <p>Pour terminer cette partie, nous allons revenir à Google Search Console.</p>
    <p>
      L'outil d'inspection d'URL permet notamment de consulter deux informations importantes lorsque
      les données correspondantes sont disponibles : l'URL canonique déclarée par le propriétaire du
      site et celle sélectionnée par Google.
    </p>
    <p>
      La première correspond à la préférence éventuellement indiquée dans la configuration du site.
    </p>
    <p>
      La deuxième correspond à la version que Google a choisie pour représenter le contenu, selon
      les informations disponibles dans son index.
    </p>
    <p>Imaginons que notre photographe inspecte sa page consacrée aux mariages.</p>
    <p>
      Si Search Console indique que l'adresse déclarée et celle sélectionnée par Google
      correspondent toutes les deux à <code>/prestations/photographie-mariage</code>, nous disposons
      d'un indice de cohérence.
    </p>
    <p>
      À l'inverse, si Google a sélectionné une autre URL, il peut être intéressant de comprendre
      pourquoi.
    </p>
    <p>
      Les deux pages présentent-elles le même contenu ? Une redirection existe-t-elle ? La balise
      canonique renvoie-t-elle vers une autre adresse ? Le sitemap présente-t-il une version
      différente ?
    </p>
    <p>Ces questions permettent d'orienter l'analyse.</p>
    <p>
      Il faut toutefois retenir que le test de l'URL active ne prédit pas quelle version Google
      choisira définitivement comme canonique. Pour consulter cette information, il faut examiner
      les données d'indexation disponibles dans Search Console.
    </p>
    <p>
      <strong
        >Le bon réflexe consiste donc à comparer la configuration souhaitée, les informations
        déclarées par le site et les décisions observables dans Google.</strong
      >
    </p>
    <h2>Démonstration — Vérifions les fichiers techniques d'un site</h2>
    <p>Passons maintenant à une démonstration concrète.</p>
    <p>
      Nous allons reprendre notre photographe professionnel à Bordeaux et examiner les principaux
      mécanismes qui permettent à Google de découvrir et d'interpréter ses pages.
    </p>
    <p>
      Notre objectif est de vérifier le fichier <code>robots.txt</code>, le sitemap XML et les
      informations canoniques d'une page stratégique.
    </p>
    <p>
      Nous allons volontairement rester dans une démarche d'observation. Il n'est pas nécessaire de
      modifier les fichiers techniques pour comprendre leur rôle ou identifier un problème
      potentiel.
    </p>
    <p>Les URL et configurations présentées dans cette démonstration sont fictives.</p>
    <h3>Étape 1 — Ouvre le fichier robots.txt</h3>
    <p>Commençons par ouvrir un navigateur et renseigner l'adresse suivante :</p>
    <p><code>https://exemple.fr/robots.txt</code></p>
    <p>
      Imaginons que le fichier existe et présente plusieurs instructions. Nous pouvons notamment y
      retrouver des règles destinées à certains robots et une indication concernant l'emplacement du
      sitemap.
    </p>
    <p>
      Nous allons commencer par rechercher les instructions <code>User-agent</code> et
      <code>Disallow</code>.
    </p>
    <p>
      Imaginons que notre photographe découvre une règle concernant la rubrique
      <code>/prestations/</code>.
    </p>
    <p>
      Cette observation mérite son attention, car cette rubrique contient justement les pages
      commerciales qu'il souhaite rendre visibles.
    </p>
    <p>
      Avant de conclure à une erreur, nous devons toutefois vérifier à quel robot la règle
      s'applique et si elle empêche réellement Googlebot d'explorer les URL concernées.
    </p>
    <p>
      Si elle bloque effectivement Googlebot sur une page stratégique, nous disposons d'un problème
      potentiel.
    </p>
    <p>
      En revanche, si elle concerne uniquement une section sans intérêt pour l'exploration, la
      situation peut être parfaitement normale.
    </p>
    <p>
      Si le fichier n'existe pas et que le serveur renvoie une réponse 404, cela ne constitue pas
      automatiquement un problème : en l'absence de règles bloquantes applicables, Google peut
      généralement explorer les URL du site.
    </p>
    <h3>Étape 2 — Retrouve le sitemap XML</h3>
    <p>Nous allons maintenant chercher le sitemap du site.</p>
    <p>Imaginons que notre photographe utilise un fichier accessible depuis :</p>
    <p><code>https://exemple.fr/sitemap.xml</code></p>
    <p>Nous ouvrons cette adresse dans notre navigateur.</p>
    <p>
      Selon le fonctionnement du site, nous pouvons découvrir directement une liste d'URL ou un
      index permettant d'accéder à plusieurs sitemaps.
    </p>
    <p>
      Le fichier est présenté dans un format technique, mais nous n'avons pas besoin de comprendre
      tous les éléments XML.
    </p>
    <p>Nous cherchons simplement à identifier les adresses des principales pages.</p>
    <p>
      Notre photographe peut notamment vérifier que sa page consacrée aux mariages apparaît dans le
      sitemap sous son URL actuelle.
    </p>
    <p>S'il retrouve uniquement une ancienne adresse redirigée, cela mérite une investigation.</p>
    <p>
      De même, si le fichier contient des pages volontairement exclues de l'indexation, il peut être
      intéressant de vérifier si cette configuration est cohérente.
    </p>
    <h3>Étape 3 — Consulte le sitemap dans Search Console</h3>
    <p>
      Ouvrons maintenant Google Search Console et sélectionnons la propriété correspondant au site.
    </p>
    <p>
      Dans la rubrique « Sitemaps », nous pouvons consulter les fichiers déjà soumis et les
      éventuels messages associés.
    </p>
    <p>
      Si le sitemap est absent de la liste, notre photographe peut renseigner son adresse pour le
      soumettre, à condition d'avoir identifié le bon fichier.
    </p>
    <p>Nous pouvons ensuite observer son état de traitement.</p>
    <p>
      Si Search Console indique que le fichier a été traité avec succès, cela constitue une
      information positive concernant sa récupération.
    </p>
    <p>
      Mais nous ne considérons pas pour autant que toutes les pages qu'il contient sont indexées.
    </p>
    <p>Pour vérifier une URL importante, nous devons utiliser l'outil d'inspection.</p>
    <h3>Étape 4 — Inspecte une page stratégique</h3>
    <p>Reprenons maintenant notre page consacrée aux prestations de mariage :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>Nous renseignons cette adresse dans l'outil d'inspection d'URL.</p>
    <p>
      Commençons par vérifier son état d'indexation, les informations d'exploration disponibles et
      les éventuelles restrictions.
    </p>
    <p>
      Si Google indique que l'exploration est bloquée par <code>robots.txt</code>, nous devons
      examiner les règles concernées.
    </p>
    <p>
      Si une instruction <code>noindex</code> empêche son indexation, il faudra vérifier si cette
      exclusion est volontaire.
    </p>
    <p>Si aucun blocage évident n'apparaît, nous pouvons poursuivre l'analyse.</p>
    <p>
      L'objectif n'est pas encore de comprendre toutes les décisions prises par Google, mais de
      vérifier que les principaux réglages correspondent à ce que nous souhaitons obtenir.
    </p>
    <h3>Étape 5 — Examine les URL canoniques</h3>
    <p>
      Dans les détails de l'inspection, recherchons maintenant les informations concernant les URL
      canoniques.
    </p>
    <p>Imaginons que notre photographe découvre que sa page déclare comme version canonique :</p>
    <p><code>https://exemple.fr/prestations/photographie-mariage</code></p>
    <p>Et que Google a également sélectionné cette adresse comme version représentative.</p>
    <p>Dans cette situation, les informations semblent cohérentes.</p>
    <p>
      Mais imaginons maintenant que la page déclare par erreur une autre URL, consacrée aux
      portraits professionnels.
    </p>
    <p>
      Cette configuration mériterait d'être examinée, puisque les deux pages correspondent à des
      prestations différentes.
    </p>
    <p>
      Nous pourrions alors vérifier les paramètres SEO du CMS et rechercher l'origine de cette
      indication.
    </p>
    <p>
      Il ne serait toutefois pas nécessaire de modifier directement le code sans comprendre la
      configuration.
    </p>
    <h3>Étape 6 — Identifie les éventuelles incohérences</h3>
    <p>Nous allons maintenant rapprocher les différentes observations.</p>
    <p>
      Imaginons que notre photographe découvre que sa page de mariage figure dans le sitemap, mais
      qu'une règle <code>robots.txt</code> empêche Googlebot de l'explorer.
    </p>
    <p>
      Nous avons identifié une incohérence : le site suggère à Google de découvrir une URL tout en
      lui interdisant d'accéder à son contenu.
    </p>
    <p>Le sitemap ne permet pas de contourner cette restriction.</p>
    <p>
      Imaginons une autre situation : le sitemap contient la nouvelle URL d'une prestation, mais sa
      balise canonique désigne encore une ancienne adresse.
    </p>
    <p>Là encore, les signaux semblent contradictoires et justifient une vérification.</p>
    <p>
      Enfin, si le sitemap contient une page supprimée qui renvoie une erreur 404, il pourrait être
      pertinent de retirer cette URL du fichier généré.
    </p>
    <p>
      Ces exemples montrent pourquoi il est utile d'examiner les mécanismes ensemble plutôt que
      séparément.
    </p>
    <h3>Étape 7 — Prépare les corrections sans agir à l'aveugle</h3>
    <p>
      Pour terminer, notre photographe conserve les observations réalisées dans sa checklist d'audit
      technique.
    </p>
    <p>Il note les URL concernées, les instructions identifiées et les éventuelles incohérences.</p>
    <p>
      Si une règle <code>robots.txt</code> bloque réellement une page stratégique par erreur, il
      pourra rechercher le paramètre à corriger dans son CMS ou demander l'intervention de la
      personne qui gère son site.
    </p>
    <p>
      Si le sitemap contient des URL obsolètes, il pourra vérifier comment son outil génère ce
      fichier.
    </p>
    <p>
      Enfin, si une balise canonique désigne une mauvaise adresse, il faudra examiner la
      configuration de la page avant de la modifier.
    </p>
    <p>
      Dans tous les cas, il est préférable de réaliser des corrections ciblées, puis de vérifier
      leur résultat.
    </p>
    <p>
      Il ne faut pas supprimer toutes les restrictions ou toutes les balises simplement parce
      qu'elles semblent complexes.
    </p>
    <h3>Ce que cette démonstration nous apprend</h3>
    <p>
      Nous venons de découvrir comment réaliser les principales vérifications concernant le fichier
      <code>robots.txt</code>, le sitemap XML et les balises canoniques.
    </p>
    <p>
      Nous avons appris à observer les restrictions d'exploration, à vérifier les URL proposées dans
      le sitemap et à consulter les informations canoniques disponibles dans Google Search Console.
    </p>
    <p>
      Nous avons également compris que ces mécanismes peuvent parfois envoyer des indications
      contradictoires.
    </p>
    <p>
      Une page peut être présente dans un sitemap tout en étant bloquée par <code>robots.txt</code>.
      Une URL peut être accessible, mais désigner une autre version comme canonique. Et une page
      peut être correctement configurée sans être immédiatement indexée.
    </p>
    <p>
      <strong
        >Le rôle d'un premier audit technique n'est pas de rendre toutes les URL indexables. Il est
        de vérifier que les instructions envoyées aux moteurs de recherche sont cohérentes avec le
        fonctionnement attendu du site.</strong
      >
    </p>
    <p>C'est maintenant à toi d'appliquer cette méthode.</p>
    <h2>À toi de jouer — Vérifie robots.txt, sitemap et canonicals</h2>
    <p>
      Nous allons maintenant reprendre ton propre site pour examiner les trois mécanismes étudiés
      dans cette leçon.
    </p>
    <p>
      Dans les premiers modules, tu as sélectionné des pages stratégiques et commencé à analyser
      leur situation dans Google Search Console.
    </p>
    <p>
      Nous allons utiliser ces mêmes pages pour effectuer un contrôle simple, sans modifier
      directement les fichiers techniques.
    </p>
    <p><strong>Durée estimée : 15 à 20 minutes.</strong></p>
    <h3>Étape 1 — Examine ton fichier robots.txt</h3>
    <p>Ouvre l'adresse de ton site suivie de <code>/robots.txt</code>.</p>
    <p>
      Si le fichier existe, cherche les principales instructions <code>User-agent</code> et
      <code>Disallow</code>.
    </p>
    <p>Essaie de repérer les éventuelles règles concernant les pages importantes de ton site.</p>
    <p>
      Si tu remarques un blocage qui semble concerner une rubrique stratégique, conserve cette
      observation.
    </p>
    <p>
      Ne modifie rien pour le moment. Il faudra d'abord vérifier que la règle s'applique réellement
      au robot concerné et qu'elle constitue une restriction involontaire.
    </p>
    <h3>Étape 2 — Retrouve et vérifie ton sitemap</h3>
    <p>Ouvre Google Search Console et consulte la rubrique « Sitemaps ».</p>
    <p>Retrouve l'adresse du fichier utilisé par ton site, puis ouvre-le dans ton navigateur.</p>
    <p>Essaie d'identifier les URL de tes principales pages.</p>
    <p>
      Vérifie notamment qu'elles correspondent aux adresses actuelles et qu'elles ne renvoient pas
      vers des contenus supprimés ou remplacés.
    </p>
    <p>
      Si aucun sitemap n'est configuré, note simplement cette information. Tu pourras ensuite
      vérifier si ton CMS en génère automatiquement un et s'il est utile de le soumettre à Google.
    </p>
    <h3>Étape 3 — Examine les informations canoniques</h3>
    <p>
      Dans Google Search Console, sélectionne une page stratégique et utilise l'outil d'inspection
      d'URL.
    </p>
    <p>
      Consulte les informations d'indexation disponibles, puis recherche les indications concernant
      l'URL canonique déclarée et celle sélectionnée par Google.
    </p>
    <p>Si les deux correspondent, conserve cette observation.</p>
    <p>
      Si elles diffèrent, demande-toi si une autre page présente un contenu identique ou très
      similaire.
    </p>
    <p>
      Si Google semble privilégier une URL qui ne correspond pas au contenu attendu, note cette
      situation pour une analyse complémentaire.
    </p>
    <p>
      Ne modifie pas immédiatement la balise canonique : une différence entre les deux adresses
      n'est pas nécessairement une erreur.
    </p>
    <h3>Étape 4 — Conserve ton diagnostic</h3>
    <p>Pour terminer, rassemble les observations réalisées dans ta checklist d'audit technique.</p>
    <p>
      Essaie de répondre à trois questions : tes pages importantes peuvent-elles être explorées ?
      Ton sitemap présente-t-il des URL cohérentes avec ton site actuel ? Les informations
      canoniques de tes pages stratégiques semblent-elles correspondre à leur contenu ?
    </p>
    <p>
      Si tu identifies une incohérence, note l'URL concernée, le problème supposé et la vérification
      ou la correction qui pourrait être nécessaire.
    </p>
    <p>
      Si aucune difficulté particulière n'apparaît, indique simplement que les premiers contrôles
      n'ont révélé aucun problème évident.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir examiné ton fichier <code>robots.txt</code>,
      retrouvé ton sitemap et vérifié les informations canoniques d'au moins une page stratégique.
    </p>
    <p>Tu n'as pas besoin d'avoir modifié un seul fichier pour valider cet exercice.</p>
    <p>
      L'essentiel est de comprendre ce que ton site communique aux moteurs de recherche et de savoir
      identifier les situations qui méritent une attention particulière.
    </p>
    <p>
      Ces observations viendront compléter l'action « Réaliser un premier audit technique de mon
      site » dans « Mon plan d'action », que tu finaliseras à la fin du module 5.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Le fichier <code>robots.txt</code>, le sitemap XML et les balises canoniques font partie des
      principaux mécanismes permettant de communiquer des informations techniques aux moteurs de
      recherche.
    </p>
    <p>Mais ils remplissent des fonctions différentes.</p>
    <p>
      Le fichier <code>robots.txt</code> permet de gérer l'exploration de certaines URL par les
      robots compatibles. Il ne garantit pas qu'une page sera absente des résultats Google et ne
      constitue pas une protection pour les informations privées.
    </p>
    <p>
      Le sitemap XML permet de signaler les URL que tu considères comme importantes et de
      transmettre certaines informations complémentaires sur tes contenus. Il facilite leur
      découverte, sans garantir leur exploration ni leur indexation.
    </p>
    <p>
      Les balises canoniques permettent, quant à elles, d'indiquer une version préférée lorsque
      plusieurs adresses présentent un contenu identique ou très similaire. Elles constituent un
      signal de préférence, mais Google peut choisir une autre URL canonique selon les informations
      dont il dispose.
    </p>
    <p>
      Nous avons également découvert l'importance de distinguer ces mécanismes des instructions
      <code>noindex</code> et des redirections.
    </p>
    <p>
      Une restriction d'exploration, une demande de non-indexation, une préférence canonique et un
      changement définitif d'adresse ne correspondent pas aux mêmes besoins.
    </p>
    <p>Enfin, il est essentiel de vérifier la cohérence de ces différents réglages.</p>
    <p>
      Une URL présente dans un sitemap ne devrait pas être bloquée involontairement si tu souhaites
      que Google explore son contenu. Une page importante ne devrait pas désigner comme canonique un
      contenu sans rapport. Et une restriction technique ne doit jamais être supprimée sans
      comprendre pourquoi elle existe.
    </p>
    <p>
      <strong
        >Un bon SEO technique ne consiste pas à multiplier les réglages. Il consiste à fournir des
        indications cohérentes, à éviter les contradictions et à permettre aux moteurs de recherche
        d'accéder correctement aux contenus importants.</strong
      >
    </p>
    <SeoLesson15Quiz />
    <p>
      Tu disposes désormais d'une méthode simple pour examiner ces éléments sans intervenir
      inutilement sur la configuration de ton site.
    </p>
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu comprends désormais comment les principaux fichiers et directives techniques contribuent à
      l'exploration et à l'indexation de ton site.
    </p>
    <p>
      Tu sais examiner un fichier <code>robots.txt</code>, comprendre le rôle d'un sitemap XML et
      vérifier les informations canoniques d'une page dans Google Search Console.
    </p>
    <p>
      Mais permettre à Google d'accéder à ton contenu ne suffit pas toujours à proposer une bonne
      expérience aux visiteurs.
    </p>
    <p>
      Une page peut être parfaitement indexable et pourtant mettre plusieurs secondes à afficher ses
      informations principales. Elle peut également réagir lentement aux interactions ou déplacer
      certains éléments pendant son chargement.
    </p>
    <p>Ces situations peuvent dégrader l'expérience d'utilisation, notamment sur mobile.</p>
    <p>
      Dans la prochaine leçon, nous allons découvrir comment analyser les performances de ton site
      grâce à PageSpeed Insights et comprendre les principaux indicateurs des Core Web Vitals.
    </p>
    <p>
      Nous apprendrons à distinguer les problèmes importants des recommandations secondaires et à
      identifier les optimisations qui peuvent réellement améliorer l'expérience de tes visiteurs.
    </p>
    <p><strong>Prochaine leçon : Améliorer PageSpeed, le mobile et les Core Web Vitals.</strong></p>
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

.seo-lesson-content .code-example {
  margin-top: 1.5rem;
  overflow-x: auto;
  border: 1px solid rgb(49 89 96 / 15%);
  border-radius: 0.75rem;
  background: #eef3ef;
  padding: 1rem;
}

.seo-lesson-content .code-example pre {
  margin: 0;
  line-height: 1.6;
}

.seo-lesson-content .code-example code {
  background: transparent;
  padding: 0;
  color: #315960;
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
