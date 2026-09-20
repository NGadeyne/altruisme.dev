import type { GuideSection } from '@/types/guide'

export default {
  id: 'partie-3',
  title: 'Administratif, juridique et protection de l’activité',
  intro: [
    {
      type: 'paragraph',
      text: 'L’administratif fait partie des sujets qui inquiètent le plus au moment de devenir freelance. Entre le choix du statut, les cotisations, la TVA, les contrats, les assurances et les obligations comptables, il est facile d’avoir l’impression qu’il faut devenir juriste et comptable avant d’envoyer sa première facture.',
    },
    {
      type: 'paragraph',
      text: 'Ce n’est heureusement pas le cas.',
    },
    {
      type: 'paragraph',
      text: 'L’objectif n’est pas de tout connaître. Il est de comprendre suffisamment le fonctionnement de son entreprise pour savoir ce que l’on signe, ce que l’on doit payer, ce que l’on doit conserver et à quel moment il devient préférable de demander l’aide d’un professionnel.',
    },
    {
      type: 'paragraph',
      text: 'Il faut également garder une précaution importante en tête : les règles administratives et fiscales évoluent. Les seuils et dispositifs présentés dans ce chapitre correspondent à la réglementation française applicable en 2026. Ils donnent des repères utiles, mais doivent être vérifiés lorsqu’une décision importante est prise.',
    },
    {
      type: 'paragraph',
      text: 'Une fois cette réserve posée, l’administratif devient beaucoup moins intimidant. Dans la plupart des activités de service, le système repose finalement sur quelques fondamentaux : choisir une structure adaptée, séparer correctement l’argent de l’entreprise, facturer proprement, contractualiser les missions importantes et anticiper les risques plutôt que de les découvrir lorsqu’un problème apparaît.',
    },
  ],
  subsections: [
    {
      id: 'partie-3-choisir-un-cadre-juridique-adapte',
      title: 'Choisir un cadre juridique adapté',
      blocks: [
        {
          type: 'paragraph',
          text: 'L’une des premières décisions consiste à choisir la manière dont l’activité va juridiquement exister. En France, un freelance travaillant seul rencontre principalement quatre grandes possibilités : la micro-entreprise, l’entreprise individuelle au régime réel, la société unipersonnelle comme l’EURL ou la SASU, et le portage salarial.',
        },
        {
          type: 'paragraph',
          text: 'La difficulté vient du fait que ces solutions sont souvent comparées comme s’il existait un statut objectivement supérieur aux autres. Ce n’est pas le cas. Le bon choix dépend du niveau de chiffre d’affaires envisagé, des dépenses de l’activité, du besoin de simplicité, de la protection sociale recherchée, de la manière dont on souhaite se rémunérer et de l’évolution prévue de l’entreprise.',
        },
        {
          type: 'paragraph',
          text: 'La micro-entreprise est généralement la plus facile à comprendre. Juridiquement, il s’agit d’une entreprise individuelle bénéficiant de régimes fiscal et social simplifiés. Les cotisations sont calculées à partir du chiffre d’affaires encaissé et les obligations comptables restent relativement légères. Cette simplicité explique pourquoi elle constitue souvent un excellent point d’entrée pour tester une activité ou lancer une activité de service avec peu de dépenses professionnelles.',
        },
        {
          type: 'paragraph',
          text: 'Elle possède néanmoins des limites. Le régime micro fonctionne avec un plafond de chiffre d’affaires et ne permet pas de déduire ses charges réelles de la même manière qu’un régime au réel. Pour les prestations de services, le [seuil permettant de relever du régime micro](https://entreprendre.service-public.gouv.fr/vosdroits/F32353) est fixé à 83 600 euros de chiffre d’affaires hors taxes pour les revenus 2026.',
        },
        {
          type: 'paragraph',
          text: 'Il faut surtout éviter une confusion très fréquente : le plafond de la micro-entreprise et les seuils de TVA sont deux choses différentes. Dépasser un seuil de franchise de TVA ne signifie pas automatiquement devoir quitter la micro-entreprise. Un micro-entrepreneur peut parfaitement facturer de la TVA tout en restant au régime micro tant qu’il respecte les conditions propres à ce régime.',
        },
        {
          type: 'paragraph',
          text: 'L’entreprise individuelle au réel constitue une autre possibilité. Elle permet notamment de tenir compte des charges réelles de l’activité. Depuis 2022, le patrimoine professionnel de l’entrepreneur individuel est en principe séparé automatiquement de son patrimoine personnel, même si cette protection connaît des exceptions, notamment dans certaines situations fiscales ou sociales.',
        },
        {
          type: 'paragraph',
          text: 'Créer une société ajoute une couche supplémentaire. L’EURL est une SARL avec un seul associé. Lorsque cet associé unique est une personne physique, elle relève en principe de l’impôt sur le revenu mais peut opter pour l’impôt sur les sociétés. Le gérant associé unique relève généralement du statut de travailleur non salarié.',
        },
        {
          type: 'paragraph',
          text: 'La SASU fonctionne différemment. Son président rémunéré relève du régime général en tant qu’assimilé salarié, sans pour autant bénéficier automatiquement de l’assurance chômage attachée à un contrat de travail classique. La société permet notamment de séparer davantage la personne physique de la structure et offre une grande souplesse de fonctionnement, mais elle implique davantage de formalisme et généralement davantage de coûts administratifs qu’une micro-entreprise.',
        },
        {
          type: 'paragraph',
          text: 'Il serait pourtant dangereux de résumer le choix à une opposition entre une EURL qui coûterait moins cher et une SASU qui protégerait mieux. La réalité dépend fortement du bénéfice, de la rémunération souhaitée, des dividendes éventuels, de la situation familiale et des autres revenus du foyer. À partir d’un certain niveau d’activité, quelques centaines d’euros consacrés à une simulation avec un expert-comptable peuvent éviter une décision prise sur la base d’un comparatif trouvé en ligne qui ne correspond pas à ta situation.',
        },
        {
          type: 'paragraph',
          text: 'Le portage salarial répond encore à une autre logique. Une société de portage facture le client, transforme une partie du chiffre d’affaires en salaire et gère une grande partie de l’administratif. En échange, elle prélève des frais et le coût global de la structure réduit naturellement ce qui reste au consultant. Le modèle peut être particulièrement intéressant pour quelqu’un qui souhaite tester l’indépendance, répondre aux exigences d’un grand compte ou déléguer presque totalement la partie administrative.',
        },
        {
          type: 'paragraph',
          text: 'Le choix du statut doit donc partir de la réalité économique de l’activité et non de l’image que l’on souhaite donner. Créer immédiatement une société parce que cela paraît plus professionnel n’a pas forcément de sens si l’activité démarre doucement et génère très peu de charges. À l’inverse, rester dans un régime devenu inadapté uniquement parce qu’il est familier peut finir par coûter cher.',
        },
        {
          type: 'paragraph',
          text: 'Le statut est un outil. Il doit accompagner l’activité, et il pourra évoluer lorsque celle-ci changera.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-comprendre-les-cotisations-limpot-et-la-tva',
      title: 'Comprendre les cotisations, l’impôt et la TVA',
      blocks: [
        {
          type: 'paragraph',
          text: 'L’une des habitudes les plus importantes à prendre en freelance consiste à ne jamais confondre l’argent encaissé avec l’argent disponible.',
        },
        {
          type: 'paragraph',
          text: 'Lorsqu’un client verse 5 000 euros sur le compte de l’entreprise, ces 5 000 euros ne constituent pas nécessairement un revenu personnel. Une partie pourra servir à payer les cotisations sociales, la fiscalité, la TVA lorsque l’entreprise la collecte, les dépenses professionnelles et la trésorerie nécessaire au fonctionnement de l’activité.',
        },
        {
          type: 'paragraph',
          text: 'Cette distinction paraît évidente, mais elle explique une grande partie des problèmes financiers rencontrés au démarrage. Le compte bancaire monte après une grosse facture et l’entrepreneur commence naturellement à considérer cette somme comme disponible. Quelques mois plus tard arrivent les échéances fiscales et sociales.',
        },
        {
          type: 'paragraph',
          text: 'La bonne approche consiste à raisonner dès l’encaissement en plusieurs enveloppes mentales ou bancaires. Une partie appartient réellement au fonctionnement de l’entreprise. Une autre devra être reversée. Ce qui reste pourra ensuite financer la rémunération et la constitution de réserves.',
        },
        {
          type: 'paragraph',
          text: 'Le fonctionnement exact dépend du régime choisi. En micro-entreprise, les cotisations sociales sont calculées proportionnellement au chiffre d’affaires encaissé, avec un taux qui dépend de la nature précise de l’activité. Pour une entreprise au réel ou une société, les mécanismes sont différents et peuvent dépendre du bénéfice ou de la rémunération. Depuis 2026, le calcul de certaines cotisations des travailleurs indépendants a d’ailleurs évolué, ce qui renforce encore l’intérêt d’utiliser les simulateurs officiels ou de faire valider les hypothèses lorsque les montants deviennent significatifs.',
        },
        {
          type: 'paragraph',
          text: 'La TVA mérite une attention particulière parce qu’elle est souvent mal comprise. Lorsqu’une entreprise facture 1 000 euros hors taxes avec 20 % de TVA, elle encaisse 1 200 euros, mais les 200 euros supplémentaires ne constituent pas du chiffre d’affaires disponible. L’entreprise collecte cette somme pour le compte de l’État, puis déduit éventuellement la TVA qu’elle a elle-même payée sur ses dépenses avant de reverser la différence.',
        },
        {
          type: 'paragraph',
          text: 'Certaines petites entreprises bénéficient de la franchise en base de TVA et ne la facturent donc pas tant que les conditions sont respectées. Pour les autres prestations de services, le seuil de référence est de 37 500 euros sur l’année précédente, avec un seuil majoré de 41 250 euros en cours d’année. Lorsque ce seuil majoré est dépassé, la franchise cesse de s’appliquer à compter de la date de dépassement.',
        },
        {
          type: 'paragraph',
          text: 'Cette distinction peut avoir des conséquences commerciales. Pour un client professionnel qui récupère la TVA, le passage de 500 euros hors taxes à 500 euros hors taxes plus TVA change généralement peu le coût économique réel. Pour un particulier ou une organisation qui ne récupère pas cette TVA, l’impact peut être beaucoup plus visible.',
        },
        {
          type: 'paragraph',
          text: 'La fiscalité ne doit pas devenir une obsession d’optimisation au démarrage. Une structure légèrement moins optimale mais parfaitement comprise est souvent préférable à un montage complexe que l’on ne maîtrise pas. L’objectif des premières années est d’abord de construire une activité rentable, de bien provisionner ses obligations et de ne pas subir les échéances.',
        },
        {
          type: 'paragraph',
          text: 'L’optimisation devient intéressante lorsqu’il existe réellement quelque chose à optimiser.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-facturer-correctement-et-organiser-son-administratif',
      title: 'Facturer correctement et organiser son administratif',
      blocks: [
        {
          type: 'paragraph',
          text: 'La facture est probablement le document administratif que tu utiliseras le plus souvent. Elle doit donc être traitée comme un processus normal de l’activité, pas comme une corvée à réaliser lorsque tu y penses.',
        },
        {
          type: 'paragraph',
          text: 'Une facture professionnelle doit permettre d’identifier clairement les parties, la prestation réalisée, le montant, les taxes applicables, les conditions de règlement et les principales mentions obligatoires correspondant à la situation de l’entreprise. Les exigences précises peuvent évoluer selon le type de client, la nature de la prestation et le régime de TVA. L’utilisation d’un logiciel de facturation adapté évite une bonne partie des erreurs manuelles.',
        },
        {
          type: 'paragraph',
          text: 'Il est surtout important de facturer rapidement. Terminer une mission le 31 mars puis attendre le 20 avril pour envoyer la facture revient à accorder presque trois semaines de crédit supplémentaire au client sans aucune raison.',
        },
        {
          type: 'paragraph',
          text: 'Le délai de paiement commence ensuite à jouer. Entre professionnels, lorsqu’aucun autre délai n’a été prévu, le délai par défaut est de 30 jours à compter de l’exécution de la prestation ou de la réception des marchandises. Les parties peuvent convenir d’autres conditions dans les limites prévues par la réglementation, notamment 60 jours à compter de la facture ou 45 jours fin de mois.',
        },
        {
          type: 'paragraph',
          text: 'Cela signifie qu’un consultant qui travaille tout le mois de janvier avec paiement à 60 jours peut réaliser sa prestation bien avant que l’argent n’arrive réellement sur son compte. Plus les délais sont longs et les montants importants, plus la trésorerie nécessaire augmente.',
        },
        {
          type: 'paragraph',
          text: 'Ce décalage explique pourquoi les conditions de paiement font partie de la négociation commerciale. Un tarif très élevé avec paiement très tardif peut créer davantage de tension qu’une prestation légèrement moins chère avec un acompte et des échéances courtes.',
        },
        {
          type: 'paragraph',
          text: 'Les factures professionnelles doivent également prévoir les conséquences d’un retard, notamment les pénalités applicables et l’indemnité forfaitaire de recouvrement de 40 euros lorsque le dispositif s’applique.',
        },
        {
          type: 'paragraph',
          text: 'En 2026, la facturation connaît par ailleurs une évolution importante en France. Depuis le 1er septembre 2026, les entreprises concernées doivent être capables de recevoir des factures électroniques. Les grandes entreprises et les ETI sont également entrées dans l’obligation d’émission à cette date ; les PME, TPE et micro-entreprises doivent à leur tour pouvoir émettre leurs factures électroniques à compter du 1er septembre 2027. La réforme concerne aussi les entreprises assujetties à la TVA bénéficiant de la franchise en base pour les obligations qui leur sont applicables.',
        },
        {
          type: 'paragraph',
          text: 'Au-delà de ces règles, une bonne organisation administrative peut rester très simple. Les contrats sont rangés au même endroit, les factures émises sont suivies, les justificatifs sont conservés, les échéances importantes figurent dans un calendrier et le compte professionnel est consulté régulièrement.',
        },
        {
          type: 'paragraph',
          text: 'Le but n’est pas d’aimer l’administratif. Il est de le rendre suffisamment prévisible pour qu’il cesse de prendre de la place mentalement.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-les-contrats-qui-protegent-reellement',
      title: 'Les contrats qui protègent réellement',
      blocks: [
        {
          type: 'paragraph',
          text: 'Une mission peut parfaitement bien se dérouler sans contrat complexe. Le problème est que le contrat devient surtout utile lorsque les choses ne se déroulent pas comme prévu.',
        },
        {
          type: 'paragraph',
          text: 'C’est pour cette raison qu’il ne faut pas le considérer comme un signe de méfiance. Son rôle principal est de mettre par écrit ce que les deux parties pensent avoir accepté.',
        },
        {
          type: 'paragraph',
          text: 'Plus une prestation est importante, longue ou risquée, plus ce cadrage devient essentiel.',
        },
        {
          type: 'paragraph',
          text: 'Le premier sujet à clarifier est le périmètre. Beaucoup de conflits commerciaux naissent simplement d’une définition différente de ce qui était inclus. Le client pense avoir acheté un résultat complet tandis que le prestataire pensait avoir vendu un nombre précis de jours ou certains livrables seulement.',
        },
        {
          type: 'paragraph',
          text: 'Un bon contrat ou une bonne proposition commerciale doit donc permettre de comprendre ce qui est inclus, mais aussi ce qui ne l’est pas. Sur une mission au forfait, cette précision devient particulièrement importante puisque toute demande supplémentaire peut directement réduire la rentabilité.',
        },
        {
          type: 'paragraph',
          text: 'Le deuxième sujet concerne la rémunération. Le contrat doit préciser le prix, la manière dont il est calculé, la fréquence de facturation, les éventuels acomptes, les frais et les délais de règlement. Plus les règles sont définies avant le démarrage, moins il faut les négocier lorsque la relation est déjà en cours.',
        },
        {
          type: 'paragraph',
          text: 'La résiliation mérite également de l’attention, notamment sur les missions longues. Un freelance qui réserve cinq jours par semaine pendant six mois pour un client prend un risque important si celui-ci peut arrêter la mission du jour au lendemain sans aucune conséquence. Prévoir un délai de préavis peut permettre d’équilibrer cette relation.',
        },
        {
          type: 'paragraph',
          text: 'La responsabilité constitue un autre point sensible. Les contrats proposés par de grandes entreprises peuvent parfois faire porter au prestataire un niveau de risque disproportionné par rapport à la valeur de la mission. Accepter automatiquement une responsabilité illimitée sur une prestation facturée quelques milliers d’euros peut créer une asymétrie importante. Lorsque les enjeux deviennent significatifs, faire relire certains contrats par un juriste ou un avocat est une dépense de protection, pas un luxe.',
        },
        {
          type: 'paragraph',
          text: 'La propriété intellectuelle doit elle aussi être comprise. Lorsqu’un freelance crée un logiciel, un design, un contenu, une méthodologie ou un autre élément protégeable, il faut déterminer précisément ce qui est transféré au client et dans quelles conditions. Il faut notamment distinguer ce qui a été créé spécifiquement pour la mission de ce qui existait déjà avant celle-ci.',
        },
        {
          type: 'paragraph',
          text: 'Cette distinction devient particulièrement importante lorsqu’on utilise ses propres composants, frameworks, méthodes ou outils dans plusieurs missions. Un client peut légitimement vouloir les droits nécessaires pour exploiter ce qu’il a commandé sans pour autant devenir propriétaire de toute la boîte à outils développée par le consultant au cours de sa carrière.',
        },
        {
          type: 'paragraph',
          text: 'Les clauses de confidentialité sont courantes et généralement compréhensibles. Les clauses de non-concurrence, de non-sollicitation ou de non-contournement méritent davantage d’attention lorsqu’elles sont très larges. Une clause qui empêcherait pratiquement un freelance de travailler dans tout son secteur pendant plusieurs années ne doit pas être acceptée machinalement.',
        },
        {
          type: 'paragraph',
          text: 'Enfin, un contrat ne doit jamais être lu uniquement par rapport à la probabilité qu’un conflit survienne. Il faut regarder l’impact que la clause aurait si le scénario défavorable se produisait réellement.',
        },
        {
          type: 'paragraph',
          text: 'C’est une bonne règle de gestion du risque en général.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-donnees-personnelles-securite-et-confidentialite',
      title: 'Données personnelles, sécurité et confidentialité',
      blocks: [
        {
          type: 'paragraph',
          text: 'Un freelance peut manipuler beaucoup plus d’informations sensibles qu’il ne le réalise. Une liste de prospects contient des données personnelles. Un CRM en contient également. Une mission IT peut donner accès aux bases de données du client. Un consultant RH, marketing ou Product peut manipuler des informations concernant des salariés ou des utilisateurs.',
        },
        {
          type: 'paragraph',
          text: 'Le RGPD n’est donc pas réservé aux grandes entreprises.',
        },
        {
          type: 'paragraph',
          text: 'Lorsqu’un prestataire traite des données personnelles pour le compte de son client, il peut être considéré comme sous-traitant au sens du RGPD et avoir des obligations spécifiques, notamment en matière de sécurité, de confidentialité, de traçabilité et de contractualisation. La CNIL rappelle notamment que la relation entre responsable de traitement et sous-traitant doit être encadrée contractuellement et que le sous-traitant doit présenter des garanties suffisantes.',
        },
        {
          type: 'paragraph',
          text: 'Dans la pratique quotidienne, beaucoup de risques peuvent déjà être réduits par une bonne hygiène numérique. Utiliser des mots de passe uniques, activer l’authentification multifacteur, maintenir ses appareils à jour, séparer les comptes clients, limiter les accès aux seules données réellement nécessaires et sauvegarder correctement ses fichiers évite une grande partie des erreurs les plus élémentaires.',
        },
        {
          type: 'paragraph',
          text: 'L’arrivée massive des outils d’intelligence artificielle ajoute un nouveau réflexe à prendre. Copier une base de données client, un contrat confidentiel ou des informations personnelles dans un outil externe n’est pas un geste anodin. Avant d’utiliser un service d’IA ou n’importe quel SaaS avec des données professionnelles, il faut comprendre ce que l’on transmet, dans quel cadre, et si le client l’autorise.',
        },
        {
          type: 'paragraph',
          text: 'La confidentialité dépasse d’ailleurs largement les données personnelles. Une roadmap, une architecture technique, une stratégie commerciale ou les difficultés financières d’un client peuvent être extrêmement sensibles sans relever nécessairement de la même catégorie juridique.',
        },
        {
          type: 'paragraph',
          text: 'Un bon principe consiste à considérer les informations du client comme privées par défaut. Une mission intéressante ne devient pas automatiquement une étude de cas publiable sur LinkedIn. Un logo n’est pas nécessairement utilisable commercialement. Un résultat ne doit pas être attribué publiquement sans vérifier ce qui peut être communiqué.',
        },
        {
          type: 'paragraph',
          text: 'Cette prudence protège le client, mais aussi ta réputation.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-prevenir-les-impayes-et-les-situations-a-risque',
      title: 'Prévenir les impayés et les situations à risque',
      blocks: [
        {
          type: 'paragraph',
          text: 'Le meilleur moyen de gérer un impayé reste encore d’en réduire la probabilité avant le début de la mission.',
        },
        {
          type: 'paragraph',
          text: 'Cela commence par la qualification du client. Une entreprise qui semble désorganisée pendant la phase commerciale, refuse de formaliser la prestation, change constamment d’interlocuteur et reste vague sur son processus de paiement mérite davantage de vigilance qu’un client capable d’expliquer clairement comment fonctionne son onboarding fournisseur.',
        },
        {
          type: 'paragraph',
          text: 'Pour une prestation au forfait, demander un acompte peut réduire fortement l’exposition. Il valide l’engagement du client et évite de financer entièrement plusieurs semaines de travail avant le premier encaissement. Sur une mission récurrente, la facturation mensuelle permet de limiter progressivement le montant à risque.',
        },
        {
          type: 'paragraph',
          text: 'Il faut également comprendre le processus administratif du client avant de commencer. Certaines grandes entreprises ont besoin d’un bon de commande avant de pouvoir payer une facture. D’autres demandent de déposer les documents sur une plateforme précise. Découvrir cette procédure après avoir réalisé deux mois de mission peut retarder fortement l’encaissement.',
        },
        {
          type: 'paragraph',
          text: 'Lorsqu’une facture arrive à échéance sans paiement, la première relance peut rester très simple. Beaucoup de retards sont administratifs et ne nécessitent pas immédiatement une confrontation. Il faut simplement agir rapidement, vérifier que la facture a été reçue et obtenir une date de règlement.',
        },
        {
          type: 'paragraph',
          text: 'Si les relances restent sans effet, le ton peut progressivement devenir plus formel. Les pénalités prévues, l’indemnité applicable et les procédures de recouvrement existent précisément pour ces situations. Continuer à travailler pendant plusieurs mois pour un client qui ne paie plus augmente en revanche l’exposition et mérite une décision beaucoup plus ferme.',
        },
        {
          type: 'paragraph',
          text: 'La même logique de prévention s’applique aux assurances. Une responsabilité civile professionnelle peut être obligatoire dans certaines professions et simplement fortement recommandée dans d’autres. Dans tous les cas, il faut comprendre ce que couvre réellement le contrat, les exclusions et les plafonds. Une assurance qui semble suffisante pour des petites missions peut devenir inadaptée lorsque l’on commence à intervenir sur des projets à plusieurs centaines de milliers d’euros.',
        },
        {
          type: 'paragraph',
          text: 'Le risque juridique ne peut jamais être supprimé totalement. L’objectif est simplement de ne pas accepter inconsciemment un risque énorme pour une rémunération faible.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-garder-le-systeme-aussi-simple-que-possible',
      title: 'Garder le système aussi simple que possible',
      blocks: [
        {
          type: 'paragraph',
          text: 'À mesure que l’activité se développe, il est tentant d’ajouter des outils et des processus à chaque nouveau problème. Un logiciel pour les contrats, un autre pour les dépenses, un troisième pour les factures, plusieurs comptes bancaires, des tableaux de bord et des automatisations.',
        },
        {
          type: 'paragraph',
          text: 'Une partie de cette organisation peut devenir très utile, mais elle doit suivre la réalité de l’activité.',
        },
        {
          type: 'paragraph',
          text: 'Un freelance qui émet quatre factures par mois n’a pas besoin de recréer le département financier d’une entreprise de 500 personnes. Il a surtout besoin de savoir quelles factures sont envoyées, lesquelles sont payées, combien il doit provisionner et quelles échéances arrivent.',
        },
        {
          type: 'paragraph',
          text: 'Le même principe vaut pour le juridique. Tous les contrats ne nécessitent pas trois heures d’analyse par un avocat. En revanche, un engagement inhabituel, une responsabilité très élevée, un contrat international ou une cession de propriété intellectuelle importante peuvent parfaitement justifier un accompagnement spécialisé.',
        },
        {
          type: 'paragraph',
          text: 'La maturité administrative ne consiste pas à tout gérer seul. Elle consiste aussi à savoir reconnaître les sujets sur lesquels l’erreur coûte plus cher que le conseil.',
        },
        {
          type: 'paragraph',
          text: 'Un expert-comptable, un avocat, un assureur ou un spécialiste de la protection sociale n’ont pas vocation à remplacer ta compréhension de ton entreprise. Ils permettent de sécuriser les décisions qui dépassent ton niveau de compétence.',
        },
        {
          type: 'paragraph',
          text: 'Tu dois toujours être capable de comprendre les grandes lignes de ton activité : ce que tu encaisses, ce que tu dois, les engagements que tu prends et les risques principaux auxquels tu es exposé.',
        },
        {
          type: 'paragraph',
          text: 'Le reste peut être accompagné.',
        },
      ],
      kind: 'content',
    },
    {
      id: 'partie-3-a-retenir',
      title: 'À retenir',
      blocks: [
        {
          type: 'paragraph',
          text: 'L’administratif et le juridique ne sont pas des activités annexes au freelancing. Ils constituent une partie de l’infrastructure qui permet de travailler sereinement.',
        },
        {
          type: 'paragraph',
          text: 'Le choix du statut doit correspondre à la réalité économique de l’activité et peut évoluer. La micro-entreprise offre une grande simplicité, tandis que l’entreprise individuelle au réel, l’EURL, la SASU ou le portage répondent à d’autres besoins. Il ne faut pas choisir uniquement sur la base des cotisations affichées ou d’un comparatif générique.',
        },
        {
          type: 'paragraph',
          text: 'L’argent encaissé ne doit jamais être confondu avec le revenu personnel. Cotisations, fiscalité, TVA, dépenses et trésorerie doivent être anticipées dès le départ.',
        },
        {
          type: 'paragraph',
          text: 'Les contrats, quant à eux, doivent surtout éliminer les ambiguïtés. Périmètre, prix, paiement, résiliation, responsabilité, confidentialité et propriété intellectuelle méritent d’être définis avant que la relation ne devienne compliquée.',
        },
        {
          type: 'paragraph',
          text: 'Enfin, protéger les données, suivre ses factures et anticiper les risques ne demande pas nécessairement une organisation lourde. Quelques processus simples suffisent déjà à éviter une grande partie des problèmes.',
        },
        {
          type: 'paragraph',
          text: 'Le but n’est pas de devenir expert de toutes les règles qui entourent l’entreprise. Il est de construire un cadre suffisamment solide pour pouvoir se concentrer sur ce qui fait réellement vivre l’activité : créer de la valeur pour ses clients.',
        },
        {
          type: 'paragraph',
          text: 'Dans la prochaine partie, nous allons nous attaquer à l’une des décisions qui influencent directement cette activité : combien faire payer son travail, comment déterminer un TJM réellement rentable et comment défendre son prix sans tomber dans une négociation permanente.',
        },
      ],
      kind: 'takeaway',
    },
  ],
  kind: 'chapter',
  number: 3,
} satisfies GuideSection
