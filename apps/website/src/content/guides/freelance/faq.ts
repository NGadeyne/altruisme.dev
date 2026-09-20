import type { GuideSection } from '@/types/guide'

export default {
  id: 'faq',
  title: 'Les questions que l’on se pose encore sur le freelancing',
  intro: [
    {
      type: 'paragraph',
      text: 'Même après avoir parcouru l’ensemble du livre, certaines questions restent naturellement ouvertes. Non pas parce qu’elles n’ont pas été traitées, mais parce qu’elles reviennent sous une forme très concrète au moment de prendre une décision : faut-il vraiment se lancer maintenant ? Combien mettre de côté ? Faut-il accepter cette mission ? Est-ce grave de revenir au salariat ? À partir de quand peut-on considérer que l’activité fonctionne ?',
    },
    {
      type: 'paragraph',
      text: 'Cette FAQ rassemble ces interrogations sans chercher à leur donner une réponse universelle. Le freelancing dépend beaucoup du métier, du marché, de la situation financière et des priorités personnelles. L’objectif est donc surtout de fournir des repères pour décider avec davantage de lucidité.',
    },
  ],
  subsections: [
    {
      id: 'faq-avant-de-se-lancer',
      title: 'Avant de se lancer',
      blocks: [
        {
          type: 'question',
          text: 'Est-ce qu’il faut être expert avant de devenir freelance ?',
        },
        {
          type: 'paragraph',
          text: 'Non. Il faut en revanche être suffisamment autonome sur ce que tu souhaites vendre. Un client ne paie généralement pas pour financer ton apprentissage des fondamentaux du métier. Cela ne signifie pas qu’il faut attendre dix ans avant de se lancer. Une personne avec quelques années d’expérience solide peut parfaitement devenir indépendante si elle connaît ses limites et choisit des missions adaptées.',
        },
        {
          type: 'paragraph',
          text: 'Le niveau nécessaire dépend aussi du type de prestation. Intégrer une équipe sur une mission encadrée ne demande pas la même maturité que vendre du conseil stratégique à une direction générale. Plus tu montes dans la chaîne de valeur, plus l’expérience, le jugement et la capacité à prendre des décisions deviennent importants.',
        },
        {
          type: 'question',
          text: 'Combien faut-il avoir de côté avant de commencer ?',
        },
        {
          type: 'paragraph',
          text: 'Il n’existe pas de montant universel. La bonne question est plutôt de savoir combien de temps tu peux vivre correctement sans nouveau revenu. Une personne ayant peu de charges, un conjoint avec un revenu stable et une première mission presque sécurisée ne prend pas le même risque qu’une personne dont tout le foyer dépend immédiatement de l’activité.',
        },
        {
          type: 'paragraph',
          text: 'Plus tu possèdes de marge, plus tu peux éviter de prendre de mauvaises décisions sous pression. Plusieurs mois de sécurité personnelle constituent donc un avantage important, auxquels peut progressivement s’ajouter une réserve propre à l’entreprise.',
        },
        {
          type: 'question',
          text: 'Faut-il trouver une mission avant de quitter son emploi ?',
        },
        {
          type: 'paragraph',
          text: 'Lorsque c’est possible, cela réduit évidemment beaucoup le risque. Mais ce n’est pas toujours réaliste. Certains contrats empêchent de lancer une activité en parallèle, certaines entreprises veulent une disponibilité immédiate et certaines personnes ont simplement besoin de temps pour construire leur projet.',
        },
        {
          type: 'paragraph',
          text: 'Il faut surtout comprendre la contrepartie. Se lancer sans mission demande généralement davantage de trésorerie et une acquisition beaucoup plus active dès les premières semaines.',
        },
        {
          type: 'question',
          text: 'Est-ce qu’il faut un site web pour commencer ?',
        },
        {
          type: 'paragraph',
          text: 'Non. Un profil professionnel clair, quelques preuves et un moyen simple de te contacter peuvent largement suffire pour signer les premières missions. Le site devient plus intéressant lorsqu’il sert réellement une stratégie : présenter des cas clients, construire du référencement, centraliser plusieurs offres ou développer une acquisition inbound.',
        },
        {
          type: 'paragraph',
          text: 'Le site n’est donc pas une condition de lancement. Il devient un actif lorsque son rôle dans le système commercial est clair.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'faq-trouver-des-clients-et-vendre',
      title: 'Trouver des clients et vendre',
      blocks: [
        {
          type: 'question',
          text: 'Quel est le meilleur canal pour trouver ses premiers clients ?',
        },
        {
          type: 'paragraph',
          text: 'Très souvent, le réseau existant. Les anciens collègues, managers, clients, recruteurs et partenaires connaissent déjà une partie de ton travail. La confiance nécessaire est donc beaucoup plus faible qu’avec un inconnu.',
        },
        {
          type: 'paragraph',
          text: 'Ensuite viennent généralement la prospection directe, les plateformes et les intermédiaires. Le contenu est extrêmement intéressant sur le long terme, mais il demande souvent davantage de temps avant de produire des opportunités régulières.',
        },
        {
          type: 'paragraph',
          text: 'Le meilleur système n’est finalement pas un canal unique. C’est une combinaison de quelques sources suffisamment complémentaires pour que l’activité ne dépende pas entièrement de l’une d’entre elles.',
        },
        {
          type: 'question',
          text: 'Combien de prospects faut-il contacter ?',
        },
        {
          type: 'paragraph',
          text: 'Assez pour obtenir des données réelles. Trois messages envoyés sans réponse ne permettent presque aucune conclusion. À l’inverse, contacter des milliers de personnes de manière générique n’est pas non plus une stratégie très utile.',
        },
        {
          type: 'paragraph',
          text: 'Le bon volume dépend du prix de la prestation, de la taille du marché et du niveau de personnalisation nécessaire. Une offre stratégique à plusieurs dizaines de milliers d’euros peut justifier un travail beaucoup plus approfondi sur quelques entreprises qu’une prestation standardisée destinée à un marché très large.',
        },
        {
          type: 'paragraph',
          text: 'Il faut surtout suivre les taux de réponse, les rendez-vous obtenus et les signatures afin de comprendre progressivement le volume nécessaire dans ton propre marché.',
        },
        {
          type: 'question',
          text: 'Dois-je afficher mes prix ?',
        },
        {
          type: 'paragraph',
          text: 'Cela dépend du type d’offre. Pour une prestation très standardisée, afficher un prix peut qualifier efficacement les prospects et simplifier la vente. Pour une mission complexe dont le périmètre dépend fortement du contexte, afficher un tarif fixe peut être difficile.',
        },
        {
          type: 'paragraph',
          text: 'Il existe aussi une position intermédiaire : donner un prix de départ, une fourchette ou simplement annoncer son TJM. Le plus important est d’éviter les écarts énormes entre ce que le prospect imagine et ce que tu proposes après plusieurs rendez-vous.',
        },
        {
          type: 'question',
          text: 'Faut-il baisser son tarif pour obtenir sa première mission ?',
        },
        {
          type: 'paragraph',
          text: 'Pas nécessairement. Un tarif légèrement inférieur peut être une décision stratégique si la mission apporte une excellente référence, une compétence importante ou plusieurs mois de sécurité. Mais se sous-vendre uniquement par manque de confiance peut être difficile à corriger ensuite.',
        },
        {
          type: 'paragraph',
          text: 'Le prix doit rester économiquement viable. Une première mission qui oblige à travailler énormément pour presque aucune marge peut créer davantage de problèmes qu’elle n’en résout.',
        },
        {
          type: 'question',
          text: 'Que faire si personne ne répond à ma prospection ?',
        },
        {
          type: 'paragraph',
          text: 'Avant de conclure que le marché ne veut pas de toi, il faut regarder la chaîne complète. La cible est-elle correcte ? Le problème évoqué est-il réellement important ? Le message explique-t-il clairement pourquoi tu contactes cette personne ? Le canal est-il adapté ? Ton positionnement est-il compréhensible ?',
        },
        {
          type: 'paragraph',
          text: 'Lorsque le volume devient suffisant et que personne ne répond, quelque chose doit probablement évoluer en amont de la vente. Mais il faut modifier une variable à la fois afin de comprendre ce qui améliore réellement le résultat.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'faq-missions-prix-et-clients',
      title: 'Missions, prix et clients',
      blocks: [
        {
          type: 'question',
          text: 'Comment savoir si une mission est bonne ?',
        },
        {
          type: 'paragraph',
          text: 'Le tarif compte, mais il ne suffit pas. Une bonne mission peut aussi apporter de l’apprentissage, une excellente référence, des relations intéressantes, une forte autonomie ou simplement de très bonnes conditions de travail.',
        },
        {
          type: 'paragraph',
          text: 'À l’inverse, une mission très bien rémunérée peut être mauvaise si elle impose une pression excessive, un mauvais environnement ou un rôle complètement éloigné de ce que tu veux construire.',
        },
        {
          type: 'paragraph',
          text: 'Avec le temps, il devient utile d’évaluer les missions sur plusieurs dimensions : revenu, intérêt, apprentissage, réputation, réseau et qualité de vie.',
        },
        {
          type: 'question',
          text: 'Dois-je accepter un client qui négocie beaucoup ?',
        },
        {
          type: 'paragraph',
          text: 'La négociation n’est pas un problème en soi. Certaines entreprises négocient presque systématiquement. Ce qui importe davantage est la manière dont elles le font.',
        },
        {
          type: 'paragraph',
          text: 'Un client qui discute du prix tout en respectant ton travail et en acceptant des compromis peut être excellent. Un prospect qui cherche à obtenir toujours plus, refuse toute limite et remet déjà en cause les conditions avant le démarrage mérite davantage de prudence.',
        },
        {
          type: 'paragraph',
          text: 'La phase commerciale donne souvent un aperçu assez fidèle de la future relation.',
        },
        {
          type: 'question',
          text: 'Quand faut-il augmenter son TJM ?',
        },
        {
          type: 'paragraph',
          text: 'Lorsque plusieurs signaux indiquent que le tarif actuel devient relativement facile à vendre : agenda bien rempli, forte demande, expertise plus spécialisée, preuves plus solides ou responsabilités plus importantes.',
        },
        {
          type: 'paragraph',
          text: 'Il n’est pas nécessaire d’attendre une date particulière. Les nouveaux clients sont généralement le moyen le plus simple de tester progressivement un nouveau niveau de prix.',
        },
        {
          type: 'question',
          text: 'Vaut-il mieux une mission longue ou plusieurs petits clients ?',
        },
        {
          type: 'paragraph',
          text: 'Les deux modèles ont leurs avantages. Une mission longue simplifie énormément l’activité et apporte une forte visibilité financière. Plusieurs clients réduisent la dépendance et peuvent produire davantage de diversité.',
        },
        {
          type: 'paragraph',
          text: 'Le meilleur compromis dépend de la manière dont tu souhaites travailler. Certains indépendants adorent s’intégrer plusieurs mois dans une équipe. D’autres préfèrent plusieurs missions courtes et davantage de variété.',
        },
        {
          type: 'paragraph',
          text: 'Il faut simplement comprendre le risque du modèle choisi. Plus un client représente une grande partie de ton chiffre d’affaires, plus sa disparition doit pouvoir être absorbée.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'faq-argent-organisation-et-stabilite',
      title: 'Argent, organisation et stabilité',
      blocks: [
        {
          type: 'question',
          text: 'À partir de quand peut-on considérer que l’activité fonctionne ?',
        },
        {
          type: 'paragraph',
          text: 'Une première facture prouve qu’un client était prêt à acheter. Plusieurs missions montrent qu’il ne s’agissait probablement pas d’un hasard. Mais une activité devient réellement solide lorsque plusieurs éléments fonctionnent simultanément : acquisition, qualité du delivery, rentabilité, trésorerie et capacité à obtenir de nouvelles opportunités.',
        },
        {
          type: 'paragraph',
          text: 'Il n’existe pas de seuil précis. Le vrai changement apparaît lorsque la prochaine mission cesse progressivement d’être une question de survie immédiate.',
        },
        {
          type: 'question',
          text: 'Combien de mois de trésorerie faut-il viser ?',
        },
        {
          type: 'paragraph',
          text: 'Cela dépend énormément du niveau de risque. Une activité avec des revenus très prévisibles peut fonctionner avec une réserve plus faible qu’une activité irrégulière ou fortement dépendante d’un gros client.',
        },
        {
          type: 'paragraph',
          text: 'L’objectif doit aussi évoluer. Au début, avoir seulement quelques semaines d’avance représente déjà un progrès. Ensuite, plusieurs mois de sécurité peuvent devenir une priorité. La trésorerie n’a pas uniquement pour fonction de couvrir les problèmes ; elle augmente aussi la capacité à négocier, investir et prendre du recul.',
        },
        {
          type: 'question',
          text: 'Est-ce grave d’avoir un seul gros client ?',
        },
        {
          type: 'paragraph',
          text: 'Non, tant que cette dépendance est consciente et compensée. Une mission longue avec un excellent client peut être extrêmement intéressante. Le risque vient surtout du fait de croire que ce revenu continuera nécessairement.',
        },
        {
          type: 'paragraph',
          text: 'Si un client représente presque tout le chiffre d’affaires, il devient utile de maintenir davantage de trésorerie et un minimum de relations commerciales actives. L’objectif n’est pas nécessairement de multiplier artificiellement les clients, mais d’être capable d’absorber une fin de mission.',
        },
        {
          type: 'question',
          text: 'Comment savoir si je travaille trop ?',
        },
        {
          type: 'paragraph',
          text: 'Le nombre d’heures est un indicateur, mais pas le seul. Il faut aussi regarder la capacité à récupérer, la concentration, l’irritabilité, la qualité du travail et la place laissée au reste de la vie.',
        },
        {
          type: 'paragraph',
          text: 'Une période très chargée peut être parfaitement acceptable si elle est volontaire et temporaire. Le problème apparaît lorsque le fonctionnement exceptionnel devient permanent et qu’aucune récupération n’est réellement possible.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'faq-et-apres',
      title: 'Et après ?',
      blocks: [
        {
          type: 'question',
          text: 'Faut-il forcément créer une agence pour évoluer ?',
        },
        {
          type: 'paragraph',
          text: 'Non. C’est probablement l’une des idées les plus importantes du livre. Un freelance peut augmenter ses revenus, sa spécialisation et son niveau de responsabilité tout en restant seul.',
        },
        {
          type: 'paragraph',
          text: 'Créer une agence signifie changer partiellement de métier. Il faut alors recruter, vendre davantage, organiser le delivery et gérer d’autres personnes. Cela peut être passionnant, mais ce n’est pas automatiquement une évolution supérieure.',
        },
        {
          type: 'paragraph',
          text: 'Grandir peut aussi signifier travailler moins, mieux choisir ses clients ou devenir extrêmement spécialisé.',
        },
        {
          type: 'question',
          text: 'Est-ce un échec de revenir au salariat ?',
        },
        {
          type: 'paragraph',
          text: 'Non. Le freelancing n’est pas une compétition dont le salariat serait la défaite. Ce sont deux modes d’organisation professionnelle différents.',
        },
        {
          type: 'paragraph',
          text: 'Une personne peut revenir au salariat pour retrouver davantage de stabilité, rejoindre un projet particulièrement intéressant, développer de nouvelles compétences ou simplement parce que ses priorités ont changé. Elle pourra éventuellement redevenir indépendante plus tard.',
        },
        {
          type: 'paragraph',
          text: 'L’expérience acquise en freelance reste d’ailleurs souvent très utile : autonomie, vente, compréhension financière, négociation et gestion client sont des compétences transférables.',
        },
        {
          type: 'question',
          text: 'Comment savoir s’il faut arrêter le freelancing ?',
        },
        {
          type: 'paragraph',
          text: 'Lorsque l’activité ne correspond plus à ce que tu veux construire, malgré plusieurs tentatives raisonnables d’ajustement. Cela peut venir du marché, des finances, de la fatigue ou simplement d’une évolution personnelle.',
        },
        {
          type: 'paragraph',
          text: 'La décision doit idéalement être prise à partir d’une situation réelle plutôt que dans le pire moment émotionnel d’une mauvaise semaine. Regarder les chiffres, le pipeline, la trésorerie, l’envie de continuer et les alternatives permet généralement d’y voir plus clair.',
        },
        {
          type: 'paragraph',
          text: 'Arrêter une activité qui ne correspond plus à ses objectifs peut être une décision beaucoup plus saine que continuer uniquement pour préserver une identité de freelance.',
        },
        {
          type: 'question',
          text: 'Et si je ne sais pas encore quel type de freelance je veux devenir ?',
        },
        {
          type: 'paragraph',
          text: 'C’est normal.',
        },
        {
          type: 'paragraph',
          text: 'Une partie des réponses n’apparaît qu’en travaillant. Les premières missions permettent de découvrir les clients que l’on apprécie, les problèmes sur lesquels on est particulièrement bon, le niveau de risque que l’on accepte et la manière dont on veut organiser ses semaines.',
        },
        {
          type: 'paragraph',
          text: 'Il n’est pas nécessaire de décider dès le premier jour de ce que sera l’activité dans dix ans. Il faut surtout construire suffisamment de sécurité et d’expérience pour pouvoir faire évoluer le modèle progressivement.',
        },
        {
          type: 'paragraph',
          text: 'C’est finalement tout l’intérêt de l’indépendance : ne pas être obligé de figer immédiatement sa trajectoire.',
        },
        {
          type: 'paragraph',
          text: 'Cette FAQ ferme le livre sur la même idée que celle qui l’a traversé du début à la fin. Il existe beaucoup de bonnes pratiques, de méthodes et de repères, mais très peu de réponses universelles. Le freelancing reste une succession d’arbitrages entre revenu, sécurité, autonomie, intérêt du travail et qualité de vie.',
        },
        {
          type: 'paragraph',
          text: 'Le but n’est donc pas d’appliquer parfaitement tout ce que tu viens de lire. Il est de comprendre suffisamment bien ton activité pour savoir quelles règles te sont utiles, lesquelles doivent être adaptées et lesquelles peuvent parfois être ignorées.',
        },
        {
          type: 'paragraph',
          text: 'C’est à ce moment-là que le freelancing cesse d’être simplement un statut et devient réellement une manière de construire sa propre trajectoire professionnelle.',
        },
      ],
      kind: 'content',
    },
  ],
  kind: 'faq',
} satisfies GuideSection
