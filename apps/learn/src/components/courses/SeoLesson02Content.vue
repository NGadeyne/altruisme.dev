<script setup lang="ts">
import SeoLesson02Quiz from './SeoLesson02Quiz.vue'
</script>

<template>
  <article class="seo-lesson-content">
    <h2>Ton site est en ligne. Pourquoi Google ne le trouve-t-il pas ?</h2>
    <p>
      Imagine que tu viennes de publier une nouvelle page sur ton site internet. Tu as pris le temps
      de rédiger un contenu intéressant, choisi un titre clair et ajouté quelques images pour
      illustrer tes propos. La page fonctionne parfaitement : lorsque tu renseignes son adresse dans
      ton navigateur, elle s'affiche immédiatement. Tu peux la partager avec tes proches, l'ajouter
      à ton menu et la consulter depuis ton téléphone.
    </p>
    <p>
      Pourtant, plusieurs jours passent et tu ne la retrouves toujours pas sur Google. Tu essaies
      différentes recherches, tu modifies quelques phrases et tu changes même son titre. Rien n'y
      fait. Tu commences alors à te demander si ton site possède un problème technique, si Google
      considère ton contenu comme insuffisant ou s'il faut simplement attendre davantage.
    </p>
    <p>
      Cette situation est particulièrement fréquente sur les sites récents, mais elle peut également
      concerner des sites qui existent depuis plusieurs années.
    </p>
    <p>
      Le problème vient souvent d'une confusion :
      <strong
        >une page accessible sur Internet n'est pas automatiquement une page connue, indexée ou
        visible sur Google</strong
      >. Lorsque tu publies un contenu, tu le rends disponible sur ton site. Mais cela ne signifie
      pas que les moteurs de recherche savent immédiatement qu'il existe, ni qu'ils décideront
      nécessairement de le proposer dans leurs résultats.
    </p>
    <p>
      Pour comprendre cette différence, il faut découvrir comment fonctionne réellement un moteur de
      recherche.
    </p>
    <p>
      Dans la première leçon, nous avons vu pourquoi le référencement naturel pouvait aider ton
      activité à être découverte par les bonnes personnes. Nous allons maintenant comprendre ce qui
      se passe entre la publication d'une page et son éventuelle apparition dans les résultats
      Google.
    </p>
    <p>
      Et tu vas voir qu'en maîtrisant trois notions relativement simples, tu seras déjà capable de
      mieux comprendre de nombreux problèmes de référencement.
    </p>
    <h2>Comment fonctionne réellement Google ?</h2>
    <p>
      Google est un moteur de recherche dont l'objectif est de proposer aux internautes des
      informations pertinentes en réponse à leurs recherches. Pour accomplir cette mission, il doit
      découvrir une quantité considérable de contenus disponibles sur Internet, les analyser et
      déterminer lesquels sont susceptibles de répondre aux besoins des utilisateurs.
    </p>
    <p>
      Contrairement à ce que l'on pourrait imaginer, Google ne parcourt pas l'ensemble du Web en
      temps réel chaque fois qu'une personne effectue une recherche. Une telle opération serait
      beaucoup trop complexe compte tenu du nombre de pages existantes.
    </p>
    <p>
      Pour pouvoir proposer rapidement des résultats, Google utilise des programmes automatisés qui
      découvrent et explorent régulièrement les contenus disponibles sur Internet. Il analyse
      ensuite ces informations et peut les enregistrer dans une immense base de données appelée
      <em>index</em>.
    </p>
    <p>
      Lorsqu'un internaute effectue une recherche, Google utilise notamment cet index et ses
      systèmes de classement pour sélectionner les résultats qu'il estime les plus pertinents.
    </p>
    <p>
      Pour comprendre cette mécanique, imaginons une immense bibliothèque. Avant qu'un lecteur
      puisse retrouver un livre, quelqu'un doit d'abord découvrir son existence, examiner son
      contenu et décider de l'ajouter au catalogue. Ensuite, lorsqu'un lecteur cherche un ouvrage
      sur un sujet précis, un système doit pouvoir identifier les livres qui correspondent à sa
      demande et lui proposer les plus intéressants.
    </p>
    <p>
      Le fonctionnement de Google repose sur une logique comparable, même si ses systèmes sont
      évidemment bien plus complexes.
    </p>
    <p>
      Nous pouvons le résumer en trois grandes étapes :
      <strong>l'exploration, l'indexation et le classement des résultats</strong>. Chacune possède
      un rôle différent, et une difficulté rencontrée à l'une de ces étapes peut avoir des
      conséquences sur la visibilité de ton site.
    </p>
    <h2>L'exploration : comment Google découvre tes pages</h2>
    <p>
      La première grande étape du fonctionnement de Google est appelée <em>exploration</em>, ou
      <em>crawling</em> en anglais.
    </p>
    <p>
      Google utilise des programmes automatisés, appelés robots d'exploration, pour parcourir le Web
      et découvrir les pages qui s'y trouvent. Le plus connu de ces robots est Googlebot, qui
      participe notamment à la découverte et à la récupération des contenus destinés à la recherche
      Google.
    </p>
    <p>
      Lorsqu'un robot explore une page, il peut récupérer son contenu et identifier de nouvelles
      adresses susceptibles d'être visitées. Cette activité permet à Google de découvrir
      progressivement de nouveaux sites, de nouvelles pages et des modifications apportées aux
      contenus existants.
    </p>
    <p>
      Mais une question se pose : comment Google sait-il quelles pages explorer alors qu'il n'existe
      aucun registre central recensant toutes les pages d'Internet ?
    </p>
    <p>
      La réponse repose notamment sur les liens, les adresses déjà connues et les informations
      fournies par les propriétaires de sites.
    </p>
    <h3>Les liens permettent de découvrir de nouvelles pages</h3>
    <p>
      Reprenons l'exemple de notre photographe professionnel à Bordeaux. Imaginons que son site
      possède une page d'accueil présentant son activité, son approche et ses principales
      prestations. Dans le menu principal, plusieurs liens permettent d'accéder aux pages «
      Prestations », « Portfolio », « À propos » et « Contact ».
    </p>
    <p>
      Lorsqu'un robot explore cette page d'accueil, il peut détecter ces liens et découvrir les
      adresses correspondantes. Sur la page consacrée aux prestations, il pourrait ensuite trouver
      un lien vers une page dédiée à la photographie de mariage, puis un autre vers une galerie de
      réalisations.
    </p>
    <p>
      De cette manière, Google peut progressivement découvrir les différentes pages d'un site en
      suivant les liens qui les relient.
    </p>
    <p>
      C'est l'une des raisons pour lesquelles la structure et le maillage interne sont importants en
      SEO. Les liens ne servent pas uniquement à permettre aux visiteurs de naviguer. Ils
      participent également à la découverte des contenus par les moteurs de recherche.
    </p>
    <p>
      Imaginons maintenant que notre photographe publie une nouvelle page consacrée aux portraits
      professionnels, mais qu'il n'ajoute aucun lien vers celle-ci. La page possède bien une adresse
      et fonctionne correctement, mais elle n'est accessible depuis aucune autre partie du site.
    </p>
    <p>
      Google pourrait malgré tout découvrir cette page par un autre moyen, notamment grâce à un
      sitemap ou à un lien provenant d'un autre site. Mais son absence de liens internes peut rendre
      sa découverte plus difficile.
    </p>
    <p>
      On parle parfois de <em>page orpheline</em> pour désigner une page qui ne reçoit aucun lien
      interne.
    </p>
    <p>
      Cela ne signifie pas qu'une page orpheline ne pourra jamais être indexée. Simplement,
      <strong
        >une organisation cohérente et des liens pertinents facilitent généralement la découverte
        des contenus importants</strong
      >.
    </p>
    <p>
      Nous apprendrons à améliorer le maillage interne dans le module consacré à l'optimisation des
      pages.
    </p>
    <h3>Le sitemap : une carte destinée aux moteurs de recherche</h3>
    <p>
      En complément des liens, Google peut également découvrir des pages grâce à un fichier appelé
      <em>sitemap</em>.
    </p>
    <p>
      Un sitemap est un fichier qui fournit aux moteurs de recherche des informations sur certaines
      pages et ressources présentes sur ton site. Il est généralement proposé au format XML, un
      format permettant de structurer des données.
    </p>
    <p>
      Tu peux considérer ce fichier comme une carte de ton site destinée aux robots d'exploration.
    </p>
    <p>
      Imaginons que notre photographe possède une trentaine de pages : ses différentes prestations,
      plusieurs galeries, des articles de conseils et quelques pages institutionnelles. Son sitemap
      pourrait contenir les adresses des pages qu'il souhaite faire connaître aux moteurs de
      recherche.
    </p>
    <p>
      Ce fichier peut être particulièrement utile lorsqu'un site possède un grand nombre de pages,
      une structure complexe ou peu de liens permettant de découvrir ses contenus.
    </p>
    <p>
      De nombreux outils de création de sites peuvent d'ailleurs générer automatiquement un sitemap.
      C'est notamment le cas de plusieurs CMS et extensions SEO.
    </p>
    <p>
      Il faut toutefois comprendre une nuance importante :
      <strong
        >présenter une page dans un sitemap ne garantit ni son exploration ni son indexation</strong
      >. Le sitemap permet de signaler des adresses à Google, mais ce dernier conserve la décision
      de les explorer ou non.
    </p>
    <p>
      Un sitemap ne constitue pas non plus un moyen d'améliorer automatiquement les positions d'un
      site dans les résultats.
    </p>
    <p>Il aide à la découverte des contenus. C'est son rôle principal.</p>
    <p>
      Nous reviendrons sur son utilisation lorsque nous commencerons à examiner les informations
      d'indexation avec Google Search Console.
    </p>
    <h3>Une page découverte n'est pas forcément explorée</h3>
    <p>
      Il existe une distinction importante entre connaître l'adresse d'une page et avoir réellement
      consulté son contenu.
    </p>
    <p>
      Google peut découvrir une URL sans l'explorer immédiatement. Il peut également décider de
      reporter son exploration, notamment en fonction de ses priorités ou des ressources
      disponibles.
    </p>
    <p>Certaines difficultés techniques peuvent aussi empêcher l'exploration.</p>
    <p>
      Par exemple, si le serveur d'un site est temporairement indisponible, Googlebot pourrait ne
      pas parvenir à récupérer le contenu demandé. Une page accessible uniquement après une
      connexion peut également être difficile ou impossible à explorer dans les conditions
      habituelles.
    </p>
    <p>D'autres limitations peuvent provenir des paramètres techniques du site.</p>
    <p>
      Tu entendras notamment parler d'un fichier appelé <code>robots.txt</code>. Il permet
      d'indiquer aux robots d'exploration certaines règles concernant les parties du site auxquelles
      ils peuvent accéder.
    </p>
    <p>
      Un fichier mal configuré peut empêcher Googlebot d'explorer des pages importantes. Il faut
      cependant distinguer le blocage de l'exploration de celui de l'indexation : une URL bloquée
      par <code>robots.txt</code> peut, dans certaines circonstances, être connue et même apparaître
      dans les résultats sans que Google ait pu consulter son contenu.
    </p>
    <p>
      Tu n'as pas besoin de maîtriser ces réglages techniques aujourd'hui. Nous les aborderons
      progressivement lorsque nous apprendrons à identifier les problèmes qui peuvent affecter ton
      site.
    </p>
    <p>
      Pour le moment, retiens simplement que la découverte d'une page ne garantit pas son
      exploration, et que son exploration ne garantit pas encore sa présence dans les résultats.
    </p>
    <p>C'est précisément ce qui nous amène à la deuxième étape.</p>
    <h2>L'indexation : comment Google analyse et enregistre tes pages</h2>
    <p>
      Une fois qu'une page a été explorée, Google peut analyser son contenu afin de comprendre de
      quoi elle parle et déterminer si elle doit être ajoutée à son index.
    </p>
    <p>Cette étape est appelée <em>indexation</em>.</p>
    <p>
      Reprenons notre comparaison avec une bibliothèque. Découvrir un livre ne suffit pas pour
      permettre à un lecteur de le retrouver facilement. Il faut également examiner son titre, son
      sujet et les informations qu'il contient, puis décider de l'ajouter au catalogue.
    </p>
    <p>Google suit une logique comparable avec les pages web.</p>
    <p>
      Lorsqu'il traite une page, il peut analyser son texte, ses titres, ses images et différents
      éléments techniques qui permettent de comprendre son contenu.
    </p>
    <p>
      Toutes ces informations peuvent contribuer à déterminer la manière dont la page sera prise en
      compte dans l'index.
    </p>
    <h3>Comment Google comprend le sujet d'une page</h3>
    <p>
      Imaginons que notre photographe possède une page intitulée « Photographe de mariage à Bordeaux
      ». Cette page présente son approche, les prestations proposées, des exemples de reportages et
      les modalités de réservation.
    </p>
    <p>Plusieurs éléments permettent à Google d'en comprendre le sujet.</p>
    <p>
      Le titre indique qu'il s'agit de photographie de mariage dans une zone géographique
      particulière. Les textes développent les prestations proposées et les besoins auxquels elles
      répondent. Les images peuvent illustrer les réalisations du photographe, tandis que les
      différents sous-titres contribuent à structurer les informations.
    </p>
    <p>
      Google utilise ses systèmes pour analyser ces contenus et comprendre ce qu'ils représentent.
    </p>
    <p>
      Cette capacité d'analyse explique pourquoi le SEO ne consiste pas uniquement à placer un
      mot-clé à un endroit précis. Une page possède un sujet, un contexte, une structure et des
      informations qui doivent former un ensemble cohérent.
    </p>
    <p>
      Une page qui parle clairement d'un sujet et répond aux attentes des internautes possède de
      meilleures bases qu'un contenu constitué d'expressions répétées artificiellement.
    </p>
    <p>Il ne suffit cependant pas que Google comprenne une page pour qu'il décide de l'indexer.</p>
    <h3>Pourquoi certaines pages ne sont-elles pas indexées ?</h3>
    <p>
      C'est une distinction essentielle :
      <strong>une page explorée n'est pas nécessairement une page indexée</strong>.
    </p>
    <p>
      Google peut parfaitement visiter une page, analyser son contenu et décider de ne pas
      l'intégrer à son index.
    </p>
    <p>Plusieurs situations peuvent expliquer ce résultat.</p>
    <p>
      Imaginons qu'un site possède différentes adresses permettant d'accéder à des contenus presque
      identiques. Par exemple, une boutique en ligne pourrait proposer plusieurs URL correspondant à
      des variantes d'un même produit.
    </p>
    <p>
      Google peut alors chercher à identifier une version représentative, appelée
      <em>URL canonique</em>, plutôt que de traiter toutes les variantes comme des pages
      indépendantes.
    </p>
    <p>
      Dans ce cas, certaines URL peuvent ne pas être indexées séparément, sans qu'il s'agisse
      nécessairement d'un problème.
    </p>
    <p>
      Il est également possible qu'une page comporte une instruction technique demandant aux moteurs
      de recherche de ne pas l'indexer. Cette directive est couramment appelée <code>noindex</code>.
    </p>
    <p>
      Elle peut être utilisée volontairement pour certaines pages, mais peut également devenir
      problématique lorsqu'elle est appliquée par erreur à un contenu important.
    </p>
    <p>
      Enfin, Google peut considérer qu'une page ne doit pas être retenue dans l'index, notamment
      lorsque son contenu est insuffisamment utile ou trop proche d'autres informations déjà
      disponibles.
    </p>
    <p>
      Ces différentes situations montrent qu'il ne faut pas considérer chaque page non indexée comme
      une anomalie.
    </p>
    <p>
      Un site peut parfaitement fonctionner avec certaines pages exclues volontairement de
      l'indexation.
    </p>
    <p>
      En revanche, si une page essentielle pour ton activité n'est pas indexée, il devient
      intéressant de comprendre pourquoi.
    </p>
    <p>
      Imaginons que notre photographe possède une page présentant sa principale prestation de
      mariage. Si cette page est accessible aux visiteurs mais absente de l'index Google, elle ne
      pourra pas apparaître normalement comme résultat organique pour les recherches que nous
      souhaitons cibler.
    </p>
    <p>
      Il faudra alors déterminer si le problème vient de son exploration, d'un réglage technique,
      d'un choix de version canonique ou d'une autre raison.
    </p>
    <p>
      C'est l'un des principaux intérêts de Google Search Console, que nous découvrirons dans le
      module suivant.
    </p>
    <h3>Être indexé ne signifie pas être bien positionné</h3>
    <p>
      Une autre confusion fréquente consiste à penser qu'une fois une page indexée, elle devrait
      automatiquement apparaître sur les recherches liées à son sujet.
    </p>
    <p>Mais les choses ne fonctionnent pas ainsi.</p>
    <p>
      Imaginons que la page « Photographe de mariage à Bordeaux » soit correctement indexée par
      Google.
    </p>
    <p>Cela signifie que Google a enregistré des informations à son sujet dans son index.</p>
    <p>
      Pourtant, lorsqu'un internaute recherche « photographe mariage Bordeaux », cette page peut
      apparaître loin derrière plusieurs autres résultats. Elle peut même ne pas être visible dans
      les résultats que tu consultes pour cette recherche.
    </p>
    <p>Cela ne signifie pas nécessairement qu'elle rencontre un problème d'indexation.</p>
    <p>
      La page peut être connue de Google et correctement indexée, mais ne pas être considérée comme
      l'une des réponses les plus pertinentes pour cette recherche.
    </p>
    <p>
      C'est pourquoi il faut distinguer deux questions : Google connaît-il ma page ? Et Google
      considère-t-il cette page comme pertinente pour les recherches que je souhaite cibler ?
    </p>
    <p>
      La première concerne principalement l'exploration et l'indexation. La seconde nous amène à la
      troisième étape : le classement.
    </p>
    <h2>Le classement : pourquoi Google affiche certaines pages avant d'autres</h2>
    <p>
      Lorsqu'un internaute effectue une recherche, Google doit sélectionner les résultats qu'il
      estime les plus susceptibles de répondre à sa demande.
    </p>
    <p>Cette étape correspond au classement, également appelé <em>ranking</em> en anglais.</p>
    <p>
      Pour comprendre son fonctionnement, il faut abandonner une idée assez répandue : une page ne
      possède pas une position unique et définitive sur Google.
    </p>
    <p>
      Une même page peut apparaître parmi les premiers résultats pour une recherche très précise,
      être beaucoup moins visible sur une recherche plus générale et ne pas apparaître du tout pour
      une autre expression.
    </p>
    <p>
      Le classement dépend notamment de la requête effectuée, de sa signification et du contexte
      dans lequel elle est réalisée.
    </p>
    <h3>La pertinence du contenu par rapport à la recherche</h3>
    <p>
      L'un des enjeux majeurs du classement consiste à identifier les pages capables de répondre aux
      attentes de l'internaute.
    </p>
    <p>Reprenons notre exemple du photographe.</p>
    <p>Imaginons deux pages.</p>
    <p>
      La première présente des prestations de photographie de mariage à Bordeaux, avec des exemples
      de réalisations, une description de l'accompagnement et des informations permettant de prendre
      contact.
    </p>
    <p>La seconde explique comment choisir un appareil photo pour commencer la photographie.</p>
    <p>
      Ces deux pages appartiennent au même univers, mais elles ne répondent pas du tout aux mêmes
      besoins.
    </p>
    <p>
      Pour une personne recherchant un photographe capable de réaliser son reportage de mariage, la
      première semble naturellement plus pertinente.
    </p>
    <p>
      À l'inverse, pour quelqu'un qui cherche des conseils afin d'acheter son premier appareil
      photo, la seconde possède davantage d'intérêt.
    </p>
    <p>
      Cette distinction peut sembler évidente, mais elle explique une grande partie du travail
      nécessaire en référencement naturel.
    </p>
    <p>
      <strong
        >Une page ne doit pas simplement parler d'un sujet. Elle doit répondre à une intention de
        recherche précise.</strong
      >
    </p>
    <p>
      C'est pourquoi nous apprendrons à identifier les recherches de tes futurs clients et à
      associer les bonnes pages aux bonnes intentions.
    </p>
    <p>
      Il est généralement plus intéressant de construire des contenus réellement adaptés à des
      besoins identifiés que de chercher à apparaître sur toutes les expressions possibles.
    </p>
    <h3>La qualité et la fiabilité des informations</h3>
    <p>
      La pertinence ne constitue pas le seul élément pris en compte par les systèmes de recherche.
    </p>
    <p>
      Google utilise de nombreux systèmes et signaux pour sélectionner les résultats qu'il estime
      les plus utiles. Il cherche notamment à proposer des contenus fiables, pertinents et adaptés
      aux besoins des utilisateurs.
    </p>
    <p>
      Imaginons que plusieurs photographes possèdent une page consacrée aux mariages à Bordeaux.
    </p>
    <p>
      L'un présente uniquement quelques phrases générales affirmant qu'il propose des prestations de
      qualité.
    </p>
    <p>
      Un autre explique précisément son approche, présente de véritables réalisations, décrit le
      déroulement de son accompagnement et fournit les informations nécessaires pour préparer une
      réservation.
    </p>
    <p>
      Le second propose probablement davantage d'éléments utiles à une personne qui souhaite
      comparer des professionnels.
    </p>
    <p>
      Cela ne signifie pas qu'une page plus longue ou plus détaillée sera automatiquement mieux
      classée.
    </p>
    <p>
      La longueur d'un contenu, le nombre de photographies ou la présence d'une FAQ ne garantissent
      aucune position particulière.
    </p>
    <p>L'objectif reste d'apporter une réponse adaptée au besoin exprimé.</p>
    <p>
      Google ne publie pas une formule complète permettant de calculer les positions, et il n'existe
      aucune liste de modifications garantissant la première place.
    </p>
    <p>
      Nous devons donc concentrer nos efforts sur les éléments que nous pouvons réellement améliorer
      : la pertinence des contenus, leur clarté, leur fiabilité et la qualité générale du site.
    </p>
    <h3>Le contexte de la recherche peut modifier les résultats</h3>
    <p>
      Les résultats Google peuvent également varier selon le contexte dans lequel une personne
      effectue une recherche.
    </p>
    <p>
      La localisation, la langue ou certains paramètres liés à la recherche peuvent notamment
      influencer les pages proposées.
    </p>
    <p>
      Imaginons qu'une personne recherche simplement « photographe mariage » depuis Bordeaux. Google
      peut chercher à proposer des résultats adaptés à cette localisation.
    </p>
    <p>
      Une autre personne effectuant la même recherche depuis Lille ne verra pas nécessairement les
      mêmes résultats.
    </p>
    <p>
      Cela peut être particulièrement important pour les activités locales, dont les clients
      recherchent des professionnels dans une zone géographique précise.
    </p>
    <p>
      Google peut également proposer différents types de résultats selon les recherches : pages web
      classiques, images, vidéos, résultats locaux ou autres fonctionnalités.
    </p>
    <p>
      Ces variations rendent l'analyse du positionnement plus complexe qu'une simple recherche
      manuelle.
    </p>
    <p>
      Si tu effectues une recherche depuis ton ordinateur et que ton site apparaît en cinquième
      position, cela ne signifie pas que tous les internautes verront exactement le même classement.
    </p>
    <p>
      C'est pourquoi nous utiliserons progressivement des outils comme Google Search Console pour
      observer les performances de ton site à partir de données plus représentatives.
    </p>
    <h3>Les bonnes positions ne sont jamais garanties</h3>
    <p>
      Même lorsque ton site est correctement exploré, que tes pages sont indexées et que tes
      contenus répondent à des recherches pertinentes, il n'existe aucune garantie d'obtenir une
      position particulière.
    </p>
    <p>
      D'autres sites peuvent proposer des réponses tout aussi intéressantes. Certains peuvent
      bénéficier d'une réputation plus établie, de contenus plus complets ou d'autres avantages
      selon les recherches concernées.
    </p>
    <p>Les systèmes de Google évoluent également dans le temps.</p>
    <p>
      Une page qui apparaît aujourd'hui parmi les premiers résultats peut gagner ou perdre des
      positions dans les semaines ou les mois suivants.
    </p>
    <p>C'est pourquoi le référencement naturel doit être considéré comme une démarche continue.</p>
    <p>
      Il ne s'agit pas simplement de créer une page, d'ajouter quelques mots-clés et d'attendre
      qu'elle conserve définitivement sa place sur Google.
    </p>
    <p>
      Il faut comprendre les besoins des internautes, construire des contenus pertinents, faciliter
      leur découverte et apprendre à suivre les résultats pour identifier les prochaines
      améliorations.
    </p>
    <h2>Les trois étapes fonctionnent ensemble</h2>
    <p>
      Maintenant que nous avons découvert l'exploration, l'indexation et le classement, reprenons
      notre exemple depuis le début.
    </p>
    <p>
      Notre photographe professionnel publie une nouvelle page consacrée aux prestations de mariage
      à Bordeaux.
    </p>
    <p>
      Dans un premier temps, Google doit découvrir son adresse. Il peut notamment y parvenir grâce à
      un lien présent sur la page d'accueil, dans le menu du site ou dans son sitemap. Après cette
      découverte, Google peut décider de l'explorer afin de récupérer son contenu.
    </p>
    <p>
      Ensuite, Google analyse la page. Il examine les informations qu'elle contient et détermine si
      elle doit être ajoutée à son index. Si une directive technique empêche son indexation ou si
      Google choisit une autre version canonique du contenu, cette URL peut ne pas être retenue
      séparément.
    </p>
    <p>
      Enfin, lorsqu'une personne recherche un photographe de mariage à Bordeaux, Google peut
      considérer cette page parmi les résultats susceptibles de répondre à sa demande. Son
      classement dépendra alors de nombreux éléments, notamment de la pertinence de son contenu et
      du contexte de la recherche.
    </p>
    <p>Ces trois étapes répondent donc à des questions différentes.</p>
    <p><strong>L'exploration :</strong> Google peut-il découvrir et consulter ma page ?</p>
    <p><strong>L'indexation :</strong> Google a-t-il enregistré ma page dans son index ?</p>
    <p>
      <strong>Le classement :</strong> Google considère-t-il ma page comme suffisamment pertinente
      pour la proposer sur les recherches que je cible ?
    </p>
    <p>
      Comprendre ces différences est essentiel, car toutes les difficultés de visibilité ne se
      résolvent pas de la même manière.
    </p>
    <p>
      Si une page importante n'est pas explorée parce qu'un problème technique empêche Google d'y
      accéder, réécrire son contenu ne résoudra pas nécessairement la situation.
    </p>
    <p>
      Si une page est correctement explorée mais n'est pas indexée, il faudra chercher à comprendre
      les raisons de cette exclusion.
    </p>
    <p>
      Et si une page est indexée mais n'apparaît pas sur les recherches qui comptent pour ton
      activité, il sera davantage question d'étudier sa pertinence, son contenu et son contexte
      concurrentiel.
    </p>
    <p>
      <strong
        >Avant de chercher à améliorer une page, il faut comprendre à quelle étape se situe
        réellement le problème.</strong
      >
    </p>
    <p>Cette logique constituera l'une des bases de notre premier diagnostic SEO.</p>
    <h2>Démonstration — Suis le parcours d'une page sur Google</h2>
    <p>
      Passons maintenant à une observation concrète. Nous allons découvrir comment une page peut
      être accessible depuis un site, comment rechercher des indices de sa présence dans Google et
      pourquoi cette présence ne garantit pas une bonne position.
    </p>
    <p>
      Nous n'allons pas encore utiliser Google Search Console. Nous apprendrons à le configurer et à
      exploiter ses rapports dans le module suivant. Pour cette première démonstration, un
      navigateur et Google suffisent.
    </p>
    <h3>Étape 1 — Choisis un site et une page</h3>
    <p>
      Ouvre ton site internet, ou celui d'une entreprise que tu connais si tu ne possèdes pas encore
      ton propre site.
    </p>
    <p>
      Depuis sa page d'accueil, cherche une page présentant un service, un produit ou un article.
      Pour notre photographe professionnel, nous pourrions sélectionner une page consacrée à ses
      prestations de mariage.
    </p>
    <p>
      Observe comment tu arrives jusqu'à cette page. Est-elle accessible directement depuis le menu
      principal ? Faut-il passer par une page intermédiaire ? Existe-t-il plusieurs liens permettant
      de la retrouver ?
    </p>
    <p>
      Cette première observation permet de comprendre le rôle des liens internes. Ils facilitent la
      navigation des visiteurs et peuvent aider les robots des moteurs de recherche à découvrir les
      différentes pages du site.
    </p>
    <p>
      Cela ne prouve pas que Google a effectivement exploré la page. Nous observons simplement l'un
      des moyens par lesquels il pourrait la découvrir.
    </p>
    <h3>Étape 2 — Recherche les pages du site sur Google</h3>
    <p>
      Ouvre maintenant Google et saisis la commande suivante, en remplaçant le domaine par celui de
      ton site :
    </p>
    <p><code>site:exemple.fr</code></p>
    <p>Cette commande permet de rechercher des résultats provenant d'un domaine particulier.</p>
    <p>
      Observe les pages qui apparaissent. Tu pourrais retrouver la page d'accueil, certaines pages
      de services, des articles ou d'autres contenus.
    </p>
    <p>Tu peux également cibler une partie précise du site, par exemple :</p>
    <p><code>site:exemple.fr/services/</code></p>
    <p>
      Cette recherche peut donner un premier aperçu des pages proposées par Google pour cette partie
      du site.
    </p>
    <p>
      Mais il faut comprendre une limite importante :
      <strong
        >l'opérateur <code>site:</code> ne constitue pas un inventaire exhaustif de toutes les pages
        indexées</strong
      >.
    </p>
    <p>
      Certaines URL peuvent ne pas apparaître dans les résultats proposés, sans que cela signifie
      nécessairement qu'elles sont absentes de l'index.
    </p>
    <p>
      Cette commande est donc intéressante pour effectuer une première observation, mais elle ne
      remplace pas un véritable diagnostic d'indexation.
    </p>
    <h3>Étape 3 — Recherche une page précise</h3>
    <p>Reviens maintenant sur la page sélectionnée à la première étape et relève son titre.</p>
    <p>
      Essaie ensuite de rechercher ce titre sur Google, en ajoutant éventuellement le nom de
      l'entreprise.
    </p>
    <p>Par exemple :</p>
    <p><code>"Photographe de mariage à Bordeaux" Mon Studio</code></p>
    <p>Les guillemets permettent ici de rechercher plus précisément une expression.</p>
    <p>
      Si tu retrouves la page dans les résultats, observe la manière dont elle est présentée. Son
      titre correspond-il à celui que tu as relevé ? Le texte affiché sous le résultat explique-t-il
      correctement son sujet ?
    </p>
    <p>
      Tu remarqueras peut-être que le titre ou la description ne correspond pas exactement aux
      éléments visibles sur la page. C'est une situation possible, car Google peut générer ou
      adapter certains éléments affichés dans ses résultats.
    </p>
    <p>
      Si tu ne retrouves pas la page, ne conclus pas immédiatement qu'elle n'est pas indexée. Une
      recherche manuelle possède ses limites, et plusieurs facteurs peuvent influencer les
      résultats.
    </p>
    <p>
      Nous apprendrons à vérifier plus précisément l'état d'une URL avec l'outil d'inspection de
      Google Search Console.
    </p>
    <h3>Étape 4 — Compare avec une recherche plus générale</h3>
    <p>
      Effectue maintenant une recherche correspondant à l'activité de la page, mais sans mentionner
      le nom de l'entreprise.
    </p>
    <p>Pour notre photographe, cela pourrait être :</p>
    <p><code>photographe mariage Bordeaux</code></p>
    <p>Observe les résultats proposés par Google.</p>
    <p>
      Retrouves-tu le site que tu viens d'examiner ? D'autres professionnels apparaissent-ils avant
      lui ? Les pages proposées correspondent-elles toutes au même besoin ?
    </p>
    <p>
      Tu constateras peut-être qu'un site peut être facilement retrouvé lorsqu'on recherche
      directement son nom, mais beaucoup moins visible lorsqu'on effectue une recherche plus
      générale.
    </p>
    <p>C'est une distinction particulièrement importante pour une entreprise.</p>
    <p>
      Apparaître sur son propre nom permet d'être découvert par les personnes qui connaissent déjà
      son activité. Apparaître sur des recherches liées à ses prestations peut également permettre
      de toucher des personnes qui ne la connaissent pas encore.
    </p>
    <p>
      <strong
        >Retrouver ton site sur Google ne signifie donc pas nécessairement qu'il est visible sur les
        recherches qui comptent réellement pour ton activité.</strong
      >
    </p>
    <h3>Étape 5 — Comprends ce que tu viens d'observer</h3>
    <p>
      Cette démonstration ne permet pas de réaliser un audit SEO complet. Elle nous aide néanmoins à
      comprendre plusieurs notions importantes.
    </p>
    <p>
      Nous avons d'abord observé comment une page pouvait être accessible depuis la navigation d'un
      site et comment les liens internes contribuaient à sa découverte.
    </p>
    <p>
      Nous avons ensuite utilisé Google pour rechercher des indices de la présence de certaines
      pages dans ses résultats, tout en comprenant les limites de cette méthode.
    </p>
    <p>
      Enfin, nous avons constaté qu'un site pouvait être retrouvé sur des recherches précises sans
      être particulièrement visible sur les requêtes concurrentielles correspondant à son activité.
    </p>
    <p>
      Ces observations illustrent les différences entre la découverte, l'indexation et le
      classement.
    </p>
    <p>
      Elles montrent également pourquoi il est essentiel de disposer d'outils adaptés avant de tirer
      des conclusions sur les performances d'un site.
    </p>
    <h2>À toi de jouer — Comprends comment Google peut découvrir ton site</h2>
    <p>
      Maintenant que tu connais les trois grandes étapes du fonctionnement de Google, il est temps
      de les appliquer à ton propre site.
    </p>
    <p>
      L'objectif de cet exercice n'est pas encore de corriger des problèmes techniques ni d'obtenir
      de meilleures positions. Il s'agit simplement de comprendre comment tes pages sont organisées
      et de commencer à identifier les premières questions que nous approfondirons lors de ton audit
      SEO.
    </p>
    <p><strong>Durée estimée : 10 à 15 minutes.</strong></p>
    <h3>1. Choisis une page importante</h3>
    <p>
      Sélectionne une page de ton site qui joue un rôle particulier dans ton activité. Il peut
      s'agir d'une page de service, d'un produit important ou d'un article destiné à attirer de
      futurs clients. Si tu ne possèdes pas encore de site, tu peux réaliser l'exercice sur celui
      d'une entreprise que tu connais.
    </p>
    <h3>2. Retrouve cette page depuis l'accueil</h3>
    <p>
      Ouvre la page d'accueil et essaie de retrouver le contenu que tu viens de sélectionner.
      Observe le chemin nécessaire pour y accéder : la page possède-t-elle un lien depuis le menu,
      une page de catégorie ou un autre contenu ? Est-elle facilement accessible pour quelqu'un qui
      découvre le site ?
    </p>
    <p>
      Tu n'as pas besoin de modifier quoi que ce soit. Essaie simplement de comprendre comment les
      pages sont reliées entre elles.
    </p>
    <h3>3. Observe sa présence dans Google</h3>
    <p>
      Effectue une recherche avec l'opérateur <code>site:</code> suivi du nom de domaine, puis
      essaie de retrouver la page en recherchant son titre accompagné du nom de l'entreprise.
    </p>
    <p>
      Si tu retrouves le résultat, tu disposes d'un premier indice de sa présence dans Google. Si tu
      ne le retrouves pas, note simplement cette observation sans conclure qu'il s'agit
      nécessairement d'un problème d'indexation.
    </p>
    <h3>4. Identifie une recherche pertinente</h3>
    <p>
      Imagine maintenant une recherche qu'un futur client pourrait effectuer pour découvrir cette
      page sans connaître ton entreprise. Effectue cette recherche sur Google et observe les
      premiers résultats naturels.
    </p>
    <p>
      Essaie de comprendre quels types de contenus sont proposés et s'ils répondent au même besoin
      que ta page.
    </p>
    <h3>5. Conserve tes premiers constats</h3>
    <p>
      À la fin de l'exercice, note ce que tu as observé concernant la découverte, la présence dans
      les résultats et la pertinence de ta page.
    </p>
    <p>
      Tu pourrais par exemple constater qu'une page importante est difficile à retrouver depuis
      l'accueil, que son titre apparaît sur Google ou que les résultats proposés pour une recherche
      pertinente semblent répondre à des attentes différentes.
    </p>
    <p>
      <strong>Ton résultat attendu :</strong> avoir sélectionné une page importante et relevé au
      moins un constat concernant sa découverte ou sa visibilité sur Google.
    </p>
    <p>
      Conserve ces observations. Nous les utiliserons lorsque nous apprendrons à vérifier
      l'indexation de tes pages avec Google Search Console.
    </p>
    <h2>Ce qu'il faut retenir</h2>
    <p>
      Google fonctionne selon trois grandes étapes : l'exploration, l'indexation et le classement
      des résultats.
    </p>
    <p>
      L'exploration permet à Google de découvrir les adresses des pages et de tenter d'accéder à
      leur contenu. Les liens internes et les sitemaps peuvent faciliter cette découverte, mais ils
      ne garantissent pas que les pages seront effectivement explorées.
    </p>
    <p>
      L'indexation correspond à l'analyse d'un contenu et à son éventuel enregistrement dans l'index
      Google. Une page explorée n'est pas nécessairement indexée, notamment lorsqu'une instruction
      technique empêche son indexation ou lorsque Google choisit une autre version d'un contenu.
    </p>
    <p>
      Enfin, le classement intervient lorsqu'un internaute effectue une recherche. Google utilise
      différents systèmes pour sélectionner les résultats qu'il estime les plus pertinents selon la
      requête et son contexte.
    </p>
    <p>
      Il faut donc comprendre qu'une page accessible sur Internet n'est pas forcément connue de
      Google, qu'une page connue n'est pas nécessairement indexée et qu'une page indexée ne
      bénéficie d'aucune garantie de classement favorable.
    </p>
    <p>
      <strong
        >Pour comprendre pourquoi une page manque de visibilité, il faut d'abord identifier si le
        problème concerne sa découverte, son indexation ou sa pertinence pour les recherches
        ciblées.</strong
      >
    </p>
    <p>
      Cette distinction constituera l'une des bases essentielles de notre méthode d'analyse SEO.
    </p>
    <SeoLesson02Quiz />
    <h2>Dans la prochaine leçon</h2>
    <p>
      Tu comprends désormais les trois grandes étapes qui permettent à Google de découvrir,
      d'analyser et de proposer des pages dans ses résultats.
    </p>
    <p>
      Tu sais notamment pourquoi une page peut être publiée sans apparaître sur Google, pourquoi une
      page explorée n'est pas nécessairement indexée et pourquoi l'indexation ne garantit pas une
      bonne visibilité sur les recherches qui comptent pour ton activité.
    </p>
    <p>
      Mais une question importante reste à explorer :
      <strong
        >sur quels éléments faut-il réellement travailler pour construire un référencement efficace
        ?</strong
      >
    </p>
    <p>
      Dans la prochaine leçon, nous allons découvrir les principales dimensions du SEO : la
      pertinence des recherches ciblées, la qualité des contenus, la structure du site, son
      fonctionnement technique et sa réputation.
    </p>
    <p>
      Nous verrons comment ces différents éléments se complètent et pourquoi il est important de ne
      pas chercher à tout optimiser en même temps.
    </p>
    <p>
      Tu réaliseras également une première action concrète en identifiant les pages les plus
      importantes de ton site, celles sur lesquelles nous concentrerons nos premières analyses.
    </p>
    <p><strong>Prochaine leçon : Les fondamentaux d'un référencement efficace.</strong></p>
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
</style>
