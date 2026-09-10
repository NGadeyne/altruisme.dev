import type { LearningSection } from '@/types/course'

export const trainingSections: LearningSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description:
      'Comprends le fonctionnement de l’accompagnement et la stratégie que nous allons suivre ensemble.',
    lessons: [
      {
        id: 'fonctionnement-accompagnement',
        slug: 'comment-fonctionne-accompagnement',
        title: 'Comment fonctionne l’accompagnement',
        type: 'text',
        durationInMinutes: 3,
        content: `
        <p>
          Tu es ici dans une <strong>formation guidée</strong> conçue pour t'aider
          à avancer étape par étape vers ta prochaine mission.
        </p>

        <p>
          L'objectif n'est pas de consommer le plus de contenu possible.
          Il est de travailler les bons sujets, dans le bon ordre, puis de les appliquer.
        </p>

        <h2>Avance dans l'ordre</h2>

        <p>
          La formation suit un chemin volontairement simple :
        </p>

        <ul>
          <li><strong>Fondations</strong> pour clarifier ton positionnement et ton offre.</li>
          <li><strong>Accélération</strong> pour créer davantage d'opportunités.</li>
          <li><strong>Signature</strong> pour transformer ces opportunités en missions.</li>
        </ul>

        <p>
          Évite de sauter d'un sujet à l'autre. Termine une étape, applique-la,
          puis passe à la suivante.
        </p>

        <h2>Utilise l'accompagnement quand tu en as besoin</h2>

        <p>
          Si ton offre inclut l'accompagnement, tu as également accès à des espaces
          complémentaires à la formation.
        </p>

        <ul>
          <li>
            <strong>Le coaching individuel</strong> pour débloquer une situation,
            prendre du recul ou travailler un sujet précis avec moi.
          </li>
          <li>
            <strong>La communauté WhatsApp</strong> pour poser tes questions,
            partager tes avancées et échanger avec les autres freelances.
          </li>
          <li>
            <strong>Les ateliers de groupe</strong> pour travailler certains sujets
            ensemble de manière plus pratique.
          </li>
        </ul>

        <p>
          Les replays des ateliers restent accessibles directement depuis Learn.
        </p>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            Ne cherche pas à avancer seul dans ton coin. Suis le parcours,
            applique ce que tu apprends et utilise les espaces d'accompagnement
            dès qu'un blocage apparaît.
          </p>
        </div>
      `,
      },

      {
        id: 'pourquoi-ca-bloque',
        slug: 'comprendre-pourquoi-ca-bloque',
        title: 'Comprendre pourquoi ça bloque aujourd’hui',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Si tu es freelance tech sans mission, ou avec trop peu d'opportunités,
          le problème n'est généralement pas ton niveau.
        </p>

        <p>
          Le blocage vient plus souvent d'un manque de structure :
          <strong>tu fais des efforts, mais sans système clair pour transformer
          ton expertise en mission signée.</strong>
        </p>

        <p>
          Tu peux alors avoir la sensation d'être actif sans réellement savoir
          quelles actions produisent des résultats.
        </p>

        <h2>1. Compter uniquement sur la visibilité</h2>

        <p>
          Tu optimises ton profil, tu publies parfois et tu restes visible.
          C'est utile, mais insuffisant.
        </p>

        <p>
          Être vu ne veut pas dire être compris. Et être compris ne veut pas
          forcément dire être contacté.
        </p>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            La visibilité soutient ton acquisition. Elle ne remplace pas une
            stratégie pour créer des opportunités.
          </p>
        </div>

        <h2>2. Avoir un positionnement trop flou</h2>

        <p>
          « Product Manager », « DevOps » ou « Consultant IT » décrivent un métier.
          Mais ils expliquent rarement pourquoi un client devrait te choisir.
        </p>

        <p>
          Avec un positionnement trop générique, tu deviens facilement interchangeable.
        </p>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            Un client ne cherche pas seulement un intitulé de poste.
            Il cherche quelqu'un capable de l'aider dans un contexte précis.
          </p>
        </div>

        <h2>3. Parler de toi avant de parler du client</h2>

        <p>
          Tes compétences, ton expérience et tes outils comptent.
          Mais ce ne sont pas les premières questions que se pose un prospect.
        </p>

        <p>
          Il cherche surtout à savoir :
          <strong>« Est-ce que cette personne comprend ce que je vis et peut m'aider ? »</strong>
        </p>

        <p>
          Ton profil et ton discours doivent rendre cette réponse évidente.
        </p>

        <h2>4. Multiplier les actions sans stratégie</h2>

        <p>
          LinkedIn, Malt, candidatures, messages, contenu...
          Pris séparément, chacun de ces leviers peut être utile.
        </p>

        <p>
          Le problème apparaît lorsqu'ils sont utilisés sans cohérence.
          Tu dépenses beaucoup d'énergie sans créer de dynamique cumulative.
        </p>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            Une mission se signe rarement grâce à une action isolée.
            Elle est généralement le résultat d'un système cohérent.
          </p>
        </div>

        <h2>5. Manquer de régularité</h2>

        <p>
          Beaucoup de recherches de mission fonctionnent par à-coups :
          beaucoup d'actions lorsque l'urgence monte, puis presque plus rien.
        </p>

        <p>
          Cette irrégularité empêche de construire un flux d'opportunités stable.
        </p>

        <p>
          Tu n'as pas nécessairement besoin d'en faire davantage.
          Tu as surtout besoin d'en faire <strong>un peu, régulièrement</strong>.
        </p>

        <h2>6. Attendre que tout soit parfait</h2>

        <p>
          Un profil parfait, un message parfait ou un positionnement définitif
          n'existent pas.
        </p>

        <p>
          Chercher la perfection peut devenir une manière de repousser le moment
          où tu confrontes réellement ton offre au marché.
        </p>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            La clarté vient aussi de l'action. Tu testes, tu observes et tu ajustes.
          </p>
        </div>

        <h2>7. Obtenir des échanges sans savoir les convertir</h2>

        <p>
          Générer des appels n'est qu'une partie du travail.
        </p>

        <p>
          Si le besoin est mal compris, si ta valeur reste floue ou si la suite
          n'est pas claire, l'opportunité peut s'arrêter là.
        </p>

        <p>
          L'objectif n'est donc pas d'accumuler les rendez-vous.
          Il est de savoir transformer les bons échanges en missions.
        </p>

        <h2>Le vrai problème : l'absence de système</h2>

        <p>
          Si ta recherche de mission bloque aujourd'hui, tu n'as probablement pas
          besoin d'une nouvelle technique miracle.
        </p>

        <p>
          Tu as besoin d'un système comprenant :
        </p>

        <ul>
          <li>un positionnement clair ;</li>
          <li>une stratégie cohérente ;</li>
          <li>des actions régulières ;</li>
          <li>une méthode pour transformer les opportunités en missions.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La bonne nouvelle</strong>
          <p>
            Tout cela se construit. La suite de la formation va justement te
            permettre de le faire étape par étape.
          </p>
        </div>
      `,
      },

      {
        id: 'strategie-prochaine-mission',
        slug: 'strategie-prochaine-mission',
        title: 'La stratégie complète pour signer ta prochaine mission',
        type: 'text',
        durationInMinutes: 4,
        content: `
        <p>
          L'idée de cette formation est simple :
          <strong>nous n'allons pas multiplier les actions, mais travailler les
          bonnes choses dans le bon ordre.</strong>
        </p>

        <p>
          Signer une mission ne repose pas uniquement sur un bon profil LinkedIn,
          un message de prospection ou une plateforme comme Malt.
        </p>

        <p>
          Ces éléments sont utiles uniquement lorsqu'ils font partie d'un système cohérent.
        </p>

        <h2>Une stratégie en 3 étapes</h2>

        <p>
          Ta recherche de mission va s'organiser autour de trois grands blocs :
        </p>

        <ol>
          <li><strong>Fondations</strong></li>
          <li><strong>Accélération</strong></li>
          <li><strong>Signature</strong></li>
        </ol>

        <p>
          L'ordre est important. Chaque étape facilite la suivante.
        </p>

        <h2>1. Fondations — devenir évident à comprendre</h2>

        <p>
          Avant de chercher davantage de missions, tu dois être capable de répondre
          simplement à une question :
        </p>

        <blockquote>
          Pourquoi quelqu'un devrait-il te contacter, toi ?
        </blockquote>

        <p>
          Nous allons notamment travailler :
        </p>

        <ul>
          <li>ton positionnement ;</li>
          <li>ton offre ;</li>
          <li>tes profils LinkedIn et plateformes ;</li>
          <li>ton dossier de compétences ;</li>
          <li>la manière dont tu présentes ta valeur.</li>
        </ul>

        <p>
          L'objectif est qu'en quelques secondes, une personne comprenne
          ce que tu fais, pour qui et dans quel contexte tu es particulièrement utile.
        </p>

        <h2>2. Accélération — créer des opportunités</h2>

        <p>
          Une fois les fondations en place, il faut provoquer des rencontres
          avec les bonnes personnes.
        </p>

        <p>
          Nous travaillerons notamment sur :
        </p>

        <ul>
          <li>le ciblage ;</li>
          <li>la prospection ;</li>
          <li>la création de contenu ;</li>
          <li>les relances ;</li>
          <li>une routine d'acquisition simple et régulière.</li>
        </ul>

        <p>
          L'objectif est de dépendre moins du hasard et davantage d'un système
          capable de créer régulièrement de nouvelles conversations.
        </p>

        <h2>3. Signature — transformer une opportunité en mission</h2>

        <p>
          Avoir des conversations ne suffit pas. Il faut ensuite savoir reconnaître
          les bonnes opportunités et les faire avancer.
        </p>

        <p>
          Nous verrons notamment :
        </p>

        <ul>
          <li>comment qualifier une mission ;</li>
          <li>comment réussir un échange avec une ESN ;</li>
          <li>comment réussir un échange avec un client final ;</li>
          <li>comment présenter ta valeur ;</li>
          <li>comment défendre ton prix ;</li>
          <li>comment sécuriser l'accord.</li>
        </ul>

        <h2>Les trois blocs fonctionnent ensemble</h2>

        <p>
          Une acquisition solide repose sur l'équilibre entre ces trois éléments.
        </p>

        <ul>
          <li>Sans bonnes fondations, tes actions convertissent difficilement.</li>
          <li>Sans accélération, tu manques d'opportunités.</li>
          <li>Sans capacité à signer, les opportunités ne deviennent pas des missions.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le système</strong>
          <p>
            Être clair. Créer des opportunités. Savoir les convertir.
            C'est ce système que tu vas construire tout au long de la formation.
          </p>
        </div>
      `,
      },

      {
        id: 'etapes-dans-ordre',
        slug: 'etapes-a-suivre',
        title: 'Les étapes à suivre dans l’ordre',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Tu connais maintenant la logique globale. Voyons le chemin concret
          qui va te permettre de passer de
          <strong>« je cherche une mission »</strong> à
          <strong>« j'ai une vraie opportunité à faire avancer »</strong>.
        </p>

        <p>
          Tu n'as pas besoin de tout travailler simultanément.
          Avance simplement étape par étape.
        </p>

        <h2>1. Clarifier ton positionnement</h2>

        <p>
          Commence par déterminer où ton expertise apporte le plus de valeur.
        </p>

        <p>Tu dois pouvoir préciser :</p>

        <ul>
          <li>les missions que tu recherches ;</li>
          <li>les contextes dans lesquels tu es particulièrement pertinent ;</li>
          <li>les problèmes sur lesquels tu peux intervenir ;</li>
          <li>la valeur que ton intervention peut apporter.</li>
        </ul>

        <p>
          <strong>Objectif :</strong> devenir compréhensible en quelques secondes.
        </p>

        <h2>2. Construire des supports qui donnent confiance</h2>

        <p>
          Une fois ton positionnement défini, il doit se retrouver partout où
          un prospect peut te découvrir.
        </p>

        <p>
          LinkedIn, Malt, dossier de compétences et autres plateformes doivent
          raconter la même histoire.
        </p>

        <p>
          <strong>Objectif :</strong> permettre au prospect de comprendre rapidement
          qui tu aides, sur quels sujets et pourquoi ton profil est pertinent.
        </p>

        <h2>3. Définir précisément qui contacter</h2>

        <p>
          Une bonne prospection commence avant le premier message.
        </p>

        <p>
          Tu dois déterminer les entreprises, les interlocuteurs et les contextes
          où ton expertise a le plus de chances d'être utile.
        </p>

        <p>
          <strong>Objectif :</strong> arrêter de parler à tout le monde pour être
          beaucoup plus pertinent auprès de quelques personnes bien choisies.
        </p>

        <h2>4. Créer des conversations</h2>

        <p>
          La prospection n'a pas pour objectif de vendre une mission dans le
          premier message.
        </p>

        <p>
          Elle sert d'abord à ouvrir une conversation.
        </p>

        <p>
          Nous chercherons donc des approches simples, naturelles et contextualisées,
          loin des scripts agressifs.
        </p>

        <p>
          <strong>Objectif :</strong> obtenir des réponses et engager de vrais échanges.
        </p>

        <h2>5. Installer une routine</h2>

        <p>
          Une bonne stratégie ne sert à rien si elle n'est appliquée qu'une fois
          toutes les trois semaines.
        </p>

        <p>
          Tu vas mettre en place un rythme réaliste comprenant par exemple :
        </p>

        <ul>
          <li>de nouveaux contacts ;</li>
          <li>des relances ;</li>
          <li>du contenu lorsque c'est pertinent ;</li>
          <li>le suivi de tes opportunités.</li>
        </ul>

        <p>
          <strong>Objectif :</strong> créer une dynamique régulière sans passer
          tes journées à prospecter.
        </p>

        <h2>6. Transformer les conversations en rendez-vous</h2>

        <p>
          Lorsqu'un échange devient pertinent, la suite logique est souvent de
          passer de l'écrit à une vraie conversation.
        </p>

        <p>
          L'objectif n'est pas de forcer un rendez-vous, mais de savoir reconnaître
          le bon moment pour le proposer.
        </p>

        <h2>7. Mener un échange utile</h2>

        <p>
          Un rendez-vous ne doit pas devenir une récitation de ton CV.
        </p>

        <p>
          Tu dois comprendre :
        </p>

        <ul>
          <li>ce que cherche réellement ton interlocuteur ;</li>
          <li>pourquoi le sujet existe maintenant ;</li>
          <li>ce qui bloque ;</li>
          <li>ce qui ferait qu'une collaboration serait pertinente.</li>
        </ul>

        <p>
          <strong>Objectif :</strong> comprendre avant de chercher à convaincre.
        </p>

        <h2>8. Positionner clairement ta valeur</h2>

        <p>
          Lorsque le besoin est compris, tu peux montrer simplement comment ton
          expérience et ton approche répondent à la situation.
        </p>

        <p>
          Pas besoin d'une longue démonstration. Il faut surtout rendre le lien
          entre leur besoin et ta valeur évident.
        </p>

        <h2>9. Sécuriser la mission</h2>

        <p>
          Une opportunité n'est pas gagnée tant que les éléments importants
          ne sont pas confirmés.
        </p>

        <p>
          Tarif, disponibilité, périmètre, processus de décision et prochaines
          étapes doivent être suffisamment clairs pour éviter les
          « on se recontacte » sans suite.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le chemin à retenir</strong>
          <p>
            Être clair → cibler → créer des conversations → générer des opportunités
            → les transformer en missions.
          </p>
        </div>

        <p>
          Toute la suite de la formation consiste maintenant à approfondir chacune
          de ces étapes et à les appliquer à ta propre situation.
        </p>
      `,
      },

      {
        id: 'maximum-accompagnement',
        slug: 'tirer-maximum-accompagnement',
        title: 'Tirer le maximum de cet accompagnement',
        type: 'text',
        durationInMinutes: 4,
        content: `
        <p>
          Cette formation peut te donner une méthode, de la clarté et un cadre.
          Mais les résultats viennent lorsque ce cadre rencontre l'action.
        </p>

        <p>
          Ton rôle n'est donc pas de terminer toutes les leçons le plus vite possible.
          Il est de <strong>mettre progressivement en pratique ce que tu apprends</strong>.
        </p>

        <h2>Une responsabilité partagée</h2>

        <p>
          Dans le cadre d'un accompagnement, chacun a un rôle précis.
        </p>

        <h3>De mon côté</h3>

        <ul>
          <li>te donner une stratégie claire ;</li>
          <li>simplifier les étapes ;</li>
          <li>t'aider à prendre du recul ;</li>
          <li>identifier les blocages ;</li>
          <li>t'aider à ajuster ce qui doit l'être.</li>
        </ul>

        <h3>De ton côté</h3>

        <ul>
          <li>appliquer les étapes ;</li>
          <li>passer à l'action ;</li>
          <li>tester ;</li>
          <li>faire les ajustements nécessaires ;</li>
          <li>rester suffisamment régulier pour obtenir du feedback du marché.</li>
        </ul>

        <h2>Ne cherche pas la perfection</h2>

        <p>
          Un piège fréquent consiste à attendre d'avoir un profil, un message
          ou une stratégie parfaite avant d'agir.
        </p>

        <p>
          Ici, nous allons préférer un cycle beaucoup plus efficace :
        </p>

        <blockquote>
          Faire simple → tester → observer → ajuster.
        </blockquote>

        <p>
          Ton positionnement évoluera peut-être. Tes messages aussi.
          C'est parfaitement normal.
        </p>

        <h2>Privilégie la régularité</h2>

        <p>
          Tu n'as pas besoin d'être extrêmement motivé chaque matin.
        </p>

        <p>
          Une petite quantité d'actions réalisée chaque semaine produit généralement
          davantage qu'une grosse session de prospection suivie de deux semaines
          d'inactivité.
        </p>

        <p>
          Construis un rythme que tu peux réellement tenir.
        </p>

        <h2>Ne laisse pas un blocage s'installer</h2>

        <p>
          Si quelque chose ne fonctionne pas, ne passe pas plusieurs semaines
          à tourner autour du problème.
        </p>

        <p>
          Cela peut concerner ton positionnement, un message, une opportunité,
          ton prix ou simplement ton organisation.
        </p>

        <p>
          Si tu disposes de l'accompagnement, utilise le coaching et la communauté
          pour obtenir rapidement du recul.
        </p>

        <h2>Ce qui fonctionne rarement</h2>

        <ul>
          <li>consommer les contenus sans les appliquer ;</li>
          <li>attendre que les opportunités arrivent seules ;</li>
          <li>agir uniquement lorsque l'urgence devient forte ;</li>
          <li>changer complètement de stratégie toutes les semaines.</li>
        </ul>

        <h2>Ce qui fonctionne beaucoup mieux</h2>

        <ul>
          <li>appliquer les étapes progressivement ;</li>
          <li>rester régulier ;</li>
          <li>observer les retours du marché ;</li>
          <li>ajuster sans repartir de zéro ;</li>
          <li>continuer suffisamment longtemps pour créer une dynamique.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La règle la plus importante</strong>
          <p>
            La formation te donne le chemin. Les résultats viennent lorsque
            tu commences réellement à le parcourir.
          </p>
        </div>

        <h2>Tu peux maintenant commencer</h2>

        <p>
          Tu sais pourquoi une recherche de mission peut se bloquer.
          Tu connais la stratégie globale et l'ordre dans lequel nous allons avancer.
        </p>

        <p>
          La prochaine étape est donc simple :
          <strong>construire tes fondations.</strong>
        </p>
      `,
      },
    ],
  },

  {
    id: 'fondations',
    title: 'Fondations',
    description:
      'Construis les bases nécessaires pour être clair, crédible et attractif auprès de tes futurs clients.',
    lessons: [
      {
        id: 'positionnement',
        slug: 'positionnement-clair-differenciant',
        title: 'Un positionnement clair et différenciant',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          S'il y a une idée à retenir ici, c'est celle-ci :
          <strong>un bon positionnement ne sert pas à être original à tout prix.
          Il sert d'abord à être compris rapidement.</strong>
        </p>

        <h2>Le problème des positionnements trop larges</h2>

        <p>
          Beaucoup de freelances se présentent uniquement avec leur métier :
        </p>

        <ul>
          <li>DevOps ;</li>
          <li>Product Manager ;</li>
          <li>Tech Lead ;</li>
          <li>Consultant IT.</li>
        </ul>

        <p>
          Ces intitulés sont utiles, mais ils restent trop larges pour expliquer
          pourquoi un client devrait te contacter, toi plutôt qu'un autre.
        </p>

        <p>
          Avec un positionnement trop générique :
        </p>

        <ul>
          <li>le client comprend mal dans quel contexte tu es utile ;</li>
          <li>tu parais facilement interchangeable ;</li>
          <li>ton message génère moins de conversations pertinentes.</li>
        </ul>

        <h2>Ce qu'un client cherche réellement</h2>

        <p>
          Un client ne cherche pas uniquement un intitulé de poste.
        </p>

        <p>
          Il cherche surtout quelqu'un qui :
        </p>

        <ul>
          <li>comprend son contexte ;</li>
          <li>identifie rapidement son problème ;</li>
          <li>peut l'aider de manière crédible et concrète.</li>
        </ul>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            Ton positionnement doit permettre à un prospect de comprendre
            rapidement dans quelle situation tu es particulièrement pertinent.
          </p>
        </div>

        <h2>Une structure simple</h2>

        <p>
          Tu peux t'appuyer sur cette formule :
        </p>

        <blockquote>
          J'aide [type de client] à [résultat ou problème] dans des contextes de [situation précise].
        </blockquote>

        <p>
          L'objectif n'est pas de remplir absolument chaque case, mais de rendre
          ton message plus concret.
        </p>

        <h3>Quelques exemples</h3>

        <p><strong>Trop générique :</strong></p>

        <ul>
          <li>DevOps ;</li>
          <li>Développeur React ;</li>
          <li>Product Owner.</li>
        </ul>

        <p><strong>Plus clair :</strong></p>

        <ul>
          <li>
            J'aide des équipes tech à stabiliser leur infrastructure lorsque
            les incidents deviennent fréquents.
          </li>
          <li>
            J'aide des équipes produit à améliorer des interfaces devenues
            difficiles à utiliser et à maintenir.
          </li>
          <li>
            J'aide des équipes produit à remettre de la clarté dans leur roadmap
            lorsque tout devient prioritaire.
          </li>
        </ul>

        <p>
          Dans ces exemples, le métier reste identifiable, mais il est replacé
          dans un contexte concret.
        </p>

        <h2>Les erreurs classiques</h2>

        <h3>Vouloir parler à tout le monde</h3>

        <p>
          Dire que tu peux intervenir partout et sur tout rassure rarement.
          Cela dilue surtout ton message.
        </p>

        <h3>Être trop technique</h3>

        <p>
          Kubernetes, Terraform, AWS ou React peuvent avoir leur place dans ton profil.
          Mais ils ne doivent pas remplacer la compréhension du problème que tu résous.
        </p>

        <p>
          La technologie décrit souvent le moyen. Le client, lui, pense d'abord
          au résultat.
        </p>

        <h3>Copier le positionnement d'un autre freelance</h3>

        <p>
          Ton positionnement doit partir de ce que tu as réellement vécu :
        </p>

        <ul>
          <li>tes missions ;</li>
          <li>tes contextes ;</li>
          <li>les problèmes sur lesquels tu es régulièrement utile ;</li>
          <li>les compétences pour lesquelles on vient naturellement te chercher.</li>
        </ul>

        <h2>Comment trouver ton positionnement</h2>

        <p>
          Pose-toi ces quatre questions :
        </p>

        <ul>
          <li>Dans quels contextes suis-je particulièrement utile ?</li>
          <li>Quels problèmes ai-je déjà résolus plusieurs fois ?</li>
          <li>Dans quelles situations fait-on naturellement appel à moi ?</li>
          <li>Qu'est-ce que mes meilleures missions ont en commun ?</li>
        </ul>

        <p>
          Tu n'as pas besoin d'inventer une nouvelle identité.
          Tu dois surtout clarifier ce qui existe déjà dans ton parcours.
        </p>

        <h2>Le test le plus simple</h2>

        <p>
          Ton positionnement fonctionne lorsqu'une personne peut se dire :
        </p>

        <blockquote>
          Je vois exactement dans quel type de situation je pourrais faire appel à lui.
        </blockquote>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le bon niveau de précision</strong>
          <p>
            Ton positionnement n'a pas besoin d'être définitif.
            Mieux vaut une version simple, claire et testable qu'une formulation
            parfaite qui reste trop vague.
          </p>
        </div>

        <p>
          Une fois ce positionnement clarifié, il faut maintenant le traduire
          en quelque chose de concret pour le client : <strong>ton offre</strong>.
        </p>
      `,
      },

      {
        id: 'offre',
        slug: 'offre-comprehensible-attractive',
        title: 'Une offre compréhensible et attractive',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Avoir un positionnement clair est essentiel.
          Mais le client doit aussi comprendre ce que tu vas faire concrètement
          une fois en mission.
        </p>

        <h2>Positionnement et offre : deux rôles différents</h2>

        <p>
          Les deux notions sont proches, mais elles ne répondent pas à la même question.
        </p>

        <ul>
          <li>
            <strong>Le positionnement :</strong> dans quel type de situation
            est-ce pertinent de faire appel à toi ?
          </li>
          <li>
            <strong>L'offre :</strong> qu'est-ce que tu vas concrètement apporter
            une fois que tu interviens ?
          </li>
        </ul>

        <h2>Une liste de compétences n'est pas une offre</h2>

        <p>
          Beaucoup de freelances présentent leur offre en expliquant :
        </p>

        <ul>
          <li>les outils qu'ils maîtrisent ;</li>
          <li>les missions qu'ils ont déjà réalisées ;</li>
          <li>les sujets sur lesquels ils peuvent intervenir.</li>
        </ul>

        <p>
          Ces éléments sont utiles, mais ils ne répondent pas encore à la question
          du client :
        </p>

        <blockquote>
          Concrètement, qu'est-ce qu'on va faire ensemble ?
        </blockquote>

        <h2>Ce que le client doit comprendre</h2>

        <p>
          Ton offre doit permettre de comprendre rapidement :
        </p>

        <ul>
          <li>ce que tu vas faire ;</li>
          <li>comment tu vas aider ;</li>
          <li>dans quel cadre ;</li>
          <li>vers quel résultat vous allez avancer.</li>
        </ul>

        <p>
          Il n'a pas besoin de tous les détails à ce stade.
          Il doit surtout pouvoir se projeter.
        </p>

        <h2>Une structure simple</h2>

        <blockquote>
          J'interviens pour [objectif ou résultat], en [approche],
          dans des contextes de [situation].
        </blockquote>

        <h3>DevOps</h3>

        <p><strong>Trop flou :</strong></p>

        <p>
          Je fais du DevOps, Kubernetes et CI/CD.
        </p>

        <p><strong>Plus clair :</strong></p>

        <p>
          J'interviens pour stabiliser l'infrastructure et fiabiliser les
          déploiements, en structurant la plateforme et les processus CI/CD,
          lorsque l'environnement devient difficile à maintenir.
        </p>

        <h3>Développeur React</h3>

        <p><strong>Trop flou :</strong></p>

        <p>
          Je développe des applications en React.
        </p>

        <p><strong>Plus clair :</strong></p>

        <p>
          J'interviens pour remettre de la structure dans un frontend devenu
          difficile à faire évoluer, en simplifiant les composants et l'architecture.
        </p>

        <h3>Product Owner</h3>

        <p><strong>Trop flou :</strong></p>

        <p>
          Je gère le backlog et les sprints.
        </p>

        <p><strong>Plus clair :</strong></p>

        <p>
          J'interviens pour clarifier les priorités et fluidifier le delivery,
          en structurant la roadmap, le backlog et les échanges produit-tech
          lorsque tout devient prioritaire.
        </p>

        <h2>Les erreurs fréquentes</h2>

        <h3>Être trop vague</h3>

        <p>
          « J'accompagne les entreprises dans leurs projets » laisse trop peu
          d'éléments au client pour se projeter.
        </p>

        <h3>Être trop technique</h3>

        <p>
          Une succession d'outils et de frameworks explique comment tu travailles,
          mais rarement pourquoi ton intervention est utile.
        </p>

        <h3>Ne donner aucun cadre</h3>

        <p>
          Si le client ne comprend ni ce que tu vas prendre en charge,
          ni comment tu vas intervenir, la décision devient plus difficile.
        </p>

        <h2>Le bon niveau de détail</h2>

        <p>
          Ton offre doit rester :
        </p>

        <ul>
          <li>simple à comprendre ;</li>
          <li>concrète ;</li>
          <li>orientée résultat ;</li>
          <li>sans jargon inutile.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Le test</strong>
          <p>
            Ton offre est suffisamment claire si un prospect peut dire :
            « Je comprends ce qu'il pourrait venir faire chez nous. »
          </p>
        </div>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Pas besoin d'une offre parfaite</strong>
          <p>
            Elle doit surtout être suffisamment claire pour démarrer une conversation.
            Tu préciseras ensuite le périmètre avec le client.
          </p>
        </div>

        <p>
          Ton positionnement et ton offre sont maintenant plus lisibles.
          La prochaine étape consiste à apporter des preuves :
          <strong>ton dossier de compétences</strong>.
        </p>
      `,
      },

      {
        id: 'dossier-competences',
        slug: 'dossier-competences',
        title: 'Un dossier de compétences qui inspire confiance',
        type: 'text',
        durationInMinutes: 7,
        content: `
        <p>
          Ton positionnement et ton offre permettent au client de comprendre
          pourquoi ton profil peut être pertinent.
        </p>

        <p>
          Il va ensuite se poser une autre question :
          <strong>« Est-ce que je peux lui faire confiance sur ce sujet ? »</strong>
        </p>

        <p>
          C'est précisément le rôle de ton dossier de compétences.
        </p>

        <h2>Un dossier n'est pas un CV plus long</h2>

        <p>
          Beaucoup de dossiers ressemblent à une succession de missions,
          de technologies et de responsabilités.
        </p>

        <p>
          Le problème n'est pas le manque d'informations.
          C'est souvent le manque de preuves et de contexte.
        </p>

        <p>
          Ton dossier doit montrer :
        </p>

        <ul>
          <li>ce que tu as réellement fait ;</li>
          <li>dans quel contexte ;</li>
          <li>sur quel problème ;</li>
          <li>avec quel impact.</li>
        </ul>

        <h2>Ce que le client cherche à vérifier</h2>

        <ul>
          <li>As-tu déjà travaillé dans un contexte proche du sien ?</li>
          <li>Comprends-tu les contraintes de ce type de mission ?</li>
          <li>As-tu déjà produit des résultats sur des sujets similaires ?</li>
        </ul>

        <p>
          Plus ton dossier répond clairement à ces questions,
          plus il devient rassurant.
        </p>

        <h2>Une structure simple</h2>

        <ol>
          <li>Accroche ;</li>
          <li>Forces clés ;</li>
          <li>Expériences ;</li>
          <li>Compétences ;</li>
          <li>Éléments de crédibilité ;</li>
          <li>Disponibilité et cadre.</li>
        </ol>

        <h2>1. Une accroche claire</h2>

        <p>
          Commence par quelques lignes qui reconnectent immédiatement ton dossier
          à ton positionnement.
        </p>

        <blockquote>
          J'aide [type de client] à [résultat] dans des contextes de [situation].
          J'interviens principalement sur [type de missions].
        </blockquote>

        <p>
          Le lecteur doit comprendre ton profil avant même de parcourir tes expériences.
        </p>

        <h2>2. Tes forces clés</h2>

        <p>
          Trois à cinq points suffisent.
        </p>

        <p>
          L'objectif n'est pas d'afficher une longue liste de technologies,
          mais de guider la lecture vers ce que tu sais particulièrement bien faire.
        </p>

        <p>Par exemple :</p>

        <ul>
          <li>structuration de plateformes Cloud complexes ;</li>
          <li>stabilisation d'environnements de production ;</li>
          <li>amélioration du delivery ;</li>
          <li>intervention dans des contextes sous tension.</li>
        </ul>

        <h2>3. Tes expériences : le cœur du dossier</h2>

        <p>
          Pour chaque expérience importante, utilise quatre éléments.
        </p>

        <h3>Contexte</h3>

        <p>
          Quel type d'organisation ? Quelle équipe ? Quelle complexité ?
        </p>

        <h3>Problème</h3>

        <p>
          Pourquoi ton intervention était-elle nécessaire ?
        </p>

        <h3>Actions</h3>

        <p>
          Qu'as-tu réellement pris en charge ou mis en place ?
        </p>

        <h3>Résultats</h3>

        <p>
          Qu'est-ce qui s'est amélioré grâce à ton intervention ?
        </p>

        <p>
          Lorsque c'est possible, ajoute des chiffres, des ordres de grandeur
          ou un avant / après concret.
        </p>

        <h3>Exemple DevOps</h3>

        <p>
          <strong>Contexte :</strong> scale-up SaaS en croissance avec une
          infrastructure Kubernetes devenue complexe à maintenir.
        </p>

        <p>
          <strong>Problème :</strong> incidents fréquents et déploiements instables.
        </p>

        <p>
          <strong>Actions :</strong> structuration du CI/CD, standardisation
          de l'infrastructure et amélioration de la gestion des environnements.
        </p>

        <p>
          <strong>Résultats :</strong> déploiements plus fiables,
          réduction des incidents et meilleure autonomie des équipes.
        </p>

        <h3>Exemple Product Owner</h3>

        <p>
          <strong>Contexte :</strong> produit SaaS avec plusieurs équipes
          et une roadmap devenue difficile à lire.
        </p>

        <p>
          <strong>Problème :</strong> priorités floues et manque d'alignement
          entre produit et tech.
        </p>

        <p>
          <strong>Actions :</strong> restructuration du backlog,
          clarification des priorités et animation des échanges produit-tech.
        </p>

        <p>
          <strong>Résultats :</strong> roadmap plus lisible,
          meilleure coordination et delivery plus fluide.
        </p>

        <h2>4. Les compétences</h2>

        <p>
          Reste synthétique.
        </p>

        <p>
          Par exemple :
        </p>

        <ul>
          <li>Cloud : AWS, GCP ;</li>
          <li>Infrastructure : Kubernetes, Terraform ;</li>
          <li>CI/CD : GitHub Actions, GitLab CI.</li>
        </ul>

        <p>
          Le but est de rassurer, pas de remplir une page entière de mots-clés.
        </p>

        <h2>5. Les éléments de crédibilité</h2>

        <p>
          Ajoute-les uniquement s'ils renforcent réellement ton profil :
        </p>

        <ul>
          <li>certifications ;</li>
          <li>références reconnues ;</li>
          <li>missions particulièrement complexes ;</li>
          <li>résultats significatifs.</li>
        </ul>

        <h2>6. Disponibilité et cadre</h2>

        <p>
          Termine avec quelques informations pratiques :
        </p>

        <ul>
          <li>date de disponibilité ;</li>
          <li>remote, hybride ou présentiel ;</li>
          <li>zone géographique ;</li>
          <li>TJM indicatif si tu souhaites l'afficher.</li>
        </ul>

        <h2>Les erreurs à éviter</h2>

        <ul>
          <li>décrire longuement l'entreprise au lieu de ton rôle ;</li>
          <li>énumérer uniquement des tâches ;</li>
          <li>utiliser des formulations trop vagues ;</li>
          <li>oublier les résultats ;</li>
          <li>surcharger le dossier de technologies.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le bon réflexe</strong>
          <p>
            Pour chaque expérience, demande-toi :
            pourquoi suis-je intervenu, qu'ai-je fait et qu'est-ce que cela a changé ?
          </p>
        </div>

        <p>
          Ton dossier doit rassurer en profondeur.
          Tes profils en ligne vont maintenant jouer le même rôle,
          mais dans un format beaucoup plus immédiat.
        </p>
      `,
      },

      {
        id: 'profils',
        slug: 'profils-generent-opportunites',
        title: 'Des profils (LinkedIn, Malt, Le Hibou, Collective) qui génèrent des opportunités',
        type: 'text',
        durationInMinutes: 7,
        content: `
        <p>
          Une fois tes fondations en place, tes profils deviennent des points
          d'entrée majeurs vers de nouvelles opportunités.
        </p>

        <p>
          LinkedIn, Malt, LeHibou ou Collective ne doivent pas seulement être
          propres et complets.
          Ils doivent aider le bon interlocuteur à comprendre rapidement
          pourquoi il devrait te contacter.
        </p>

        <h2>Un profil n'est pas un CV en ligne</h2>

        <p>
          Beaucoup de profils sont bien remplis mais génèrent peu de conversations.
        </p>

        <p>
          Ils sont souvent :
        </p>

        <ul>
          <li>trop génériques ;</li>
          <li>trop centrés sur le parcours ;</li>
          <li>trop techniques ;</li>
          <li>pas assez orientés vers les problématiques du client.</li>
        </ul>

        <h2>Les trois questions auxquelles ton profil doit répondre</h2>

        <ul>
          <li>Que fait cette personne ?</li>
          <li>Dans quelle situation est-elle particulièrement utile ?</li>
          <li>Pourquoi devrais-je lui parler ?</li>
        </ul>

        <p>
          Si ces trois réponses sont évidentes, tu as déjà fait une grande partie du travail.
        </p>

        <h2>Être trouvé grâce aux bons mots-clés</h2>

        <p>
          Tes profils servent également de moteurs de recherche.
        </p>

        <p>
          Recruteurs, ESN et clients utilisent des termes précis :
        </p>

        <ul>
          <li>DevOps Kubernetes ;</li>
          <li>Product Owner SaaS ;</li>
          <li>Développeur React freelance ;</li>
          <li>Product Manager Cloud.</li>
        </ul>

        <p>
          Tes mots-clés importants doivent donc apparaître naturellement dans :
        </p>

        <ul>
          <li>ton titre ;</li>
          <li>ta description ;</li>
          <li>tes expériences ;</li>
          <li>tes compétences.</li>
        </ul>

        <p>
          L'objectif n'est pas de surcharger le profil,
          mais de rendre ton expertise identifiable par les moteurs de recherche internes.
        </p>

        <h2>La photo : créer un premier niveau de confiance</h2>

        <p>
          Avant même de lire ton titre, on voit ton visage.
        </p>

        <p>
          Une bonne photo doit être :
        </p>

        <ul>
          <li>nette ;</li>
          <li>simple ;</li>
          <li>professionnelle sans être figée ;</li>
          <li>humaine et accessible.</li>
        </ul>

        <p>
          Évite les selfies flous, les fonds trop chargés ou les photos
          excessivement corporate.
        </p>

        <h2>Le titre et la description</h2>

        <p>
          Ce sont les éléments qui doivent porter ton positionnement.
        </p>

        <p>
          Une structure efficace peut être :
        </p>

        <ol>
          <li>un titre métier clair ;</li>
          <li>une phrase qui exprime le résultat recherché ;</li>
          <li>les clients ou contextes que tu aides ;</li>
          <li>la manière dont tu interviens ;</li>
          <li>quelques preuves de crédibilité.</li>
        </ol>

        <h3>Exemple trop générique</h3>

        <blockquote>
          Freelance Product Manager | Agile | SaaS
        </blockquote>

        <h3>Exemple plus clair</h3>

        <blockquote>
          Product & Delivery Manager | Cloud, SaaS & plateformes techniques
        </blockquote>

        <p>
          Puis :
        </p>

        <blockquote>
          J'aide les entreprises à structurer leur delivery produit,
          clarifier les priorités et sécuriser la livraison de plateformes
          techniques complexes.
        </blockquote>

        <p>
          Le lecteur comprend immédiatement le métier, le contexte et la valeur.
        </p>

        <h2>Les missions types</h2>

        <p>
          Ajouter quelques missions types facilite énormément la projection.
        </p>

        <p>Par exemple :</p>

        <ul>
          <li>structuration du delivery ;</li>
          <li>clarification des priorités ;</li>
          <li>coordination produit-tech ;</li>
          <li>mise en place d'un pilotage produit.</li>
        </ul>

        <p>
          Le client peut alors rapidement se dire :
          « C'est exactement le type de sujet que nous avons. »
        </p>

        <h2>Les expériences : la preuve</h2>

        <p>
          Reprends la même logique que dans ton dossier de compétences,
          mais dans une version plus courte.
        </p>

        <ul>
          <li>Contexte ;</li>
          <li>Problème ;</li>
          <li>Actions ;</li>
          <li>Résultats.</li>
        </ul>

        <h3>Exemple</h3>

        <p>
          <strong>France Travail — Plateforme DBaaS</strong>
        </p>

        <p>
          <strong>Contexte :</strong> plateforme Cloud interne permettant
          la création de bases de données en self-service.
        </p>

        <p>
          <strong>Problème :</strong> delivery complexe et coordination
          entre plusieurs équipes produit, Cloud et infrastructure.
        </p>

        <p>
          <strong>Actions :</strong> structuration du delivery,
          clarification des priorités et coordination des parties prenantes.
        </p>

        <p>
          <strong>Résultats :</strong> création de plus de 150 bases en autonomie
          via un parcours simplifié et réduction du délai de provisioning.
        </p>

        <h2>Une structure, plusieurs plateformes</h2>

        <p>
          Tu n'as pas besoin de reconstruire ton discours de zéro pour LinkedIn,
          Malt, LeHibou et Collective.
        </p>

        <p>
          Construis une structure solide une première fois,
          puis adapte-la aux contraintes de chaque plateforme.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le test</strong>
          <p>
            Un bon profil permet à quelqu'un de comprendre rapidement
            pourquoi il devrait te parler et lui donne suffisamment confiance
            pour engager la conversation.
          </p>
        </div>
      `,
      },

      {
        id: 'legitimite',
        slug: 'legitimite',
        title: 'Ta légitimité',
        type: 'text',
        durationInMinutes: 4,
        content: `
        <p>
          Tu peux avoir de l'expérience, de vraies compétences et un bon profil,
          tout en continuant à douter de ta légitimité.
        </p>

        <p>
          Ce sentiment est fréquent. Il ne doit simplement pas devenir un frein
          permanent à l'action.
        </p>

        <h2>Tu n'as pas besoin d'être le meilleur</h2>

        <p>
          Beaucoup de freelances pensent :
        </p>

        <ul>
          <li>je ne suis pas assez expert ;</li>
          <li>il y aura toujours quelqu'un de meilleur ;</li>
          <li>je dois encore apprendre avant de me présenter comme spécialiste ;</li>
          <li>je ne suis pas encore prêt.</li>
        </ul>

        <p>
          Le problème est que cette logique n'a pas vraiment de point d'arrivée.
        </p>

        <p>
          Il existera toujours quelqu'un de plus expérimenté ou de plus spécialisé.
        </p>

        <h2>Ce que cherche réellement un client</h2>

        <p>
          Dans la majorité des missions, le client ne cherche pas
          « le meilleur expert du marché ».
        </p>

        <p>
          Il cherche quelqu'un qui :
        </p>

        <ul>
          <li>comprend sa situation ;</li>
          <li>est fiable ;</li>
          <li>sait intervenir sur le problème ;</li>
          <li>communique clairement ;</li>
          <li>connaît ses propres limites.</li>
        </ul>

        <div class="lesson-callout">
          <strong>À retenir</strong>
          <p>
            Tu n'as pas besoin d'être le meilleur DevOps de France.
            Tu dois pouvoir être la bonne personne pour cette infrastructure,
            dans ce contexte, maintenant.
          </p>
        </div>

        <h2>La pertinence compte davantage que la perfection</h2>

        <p>
          La bonne question n'est pas :
        </p>

        <blockquote>
          Suis-je suffisamment bon pour mériter cette mission ?
        </blockquote>

        <p>
          Elle est plutôt :
        </p>

        <blockquote>
          Est-ce que mon expérience et mes compétences peuvent réellement aider
          cette personne sur ce sujet ?
        </blockquote>

        <p>
          Si la réponse est oui, tu es légitime pour avoir la conversation.
        </p>

        <h2>La légitimité se construit aussi par l'action</h2>

        <p>
          Les échanges avec le marché permettent de progresser énormément.
        </p>

        <p>
          Tu découvres :
        </p>

        <ul>
          <li>les problèmes réellement rencontrés ;</li>
          <li>les mots utilisés par les clients ;</li>
          <li>ce qui les rassure ;</li>
          <li>les situations dans lesquelles ton expertise est la plus utile.</li>
        </ul>

        <p>
          Plus tu échanges, plus ton positionnement devient précis
          et plus ta confiance repose sur des faits.
        </p>

        <h2>Être honnête sur ses limites</h2>

        <p>
          Se sentir légitime ne signifie pas prétendre tout savoir.
        </p>

        <p>
          Tu peux parfaitement dire :
        </p>

        <blockquote>
          Ce sujet précis sort de mon expertise, mais sur cette partie-là,
          je peux clairement vous aider.
        </blockquote>

        <p>
          Cette honnêteté renforce souvent la confiance au lieu de la diminuer.
        </p>

        <h2>Ce qui bloque vraiment</h2>

        <p>
          Le doute devient problématique lorsqu'il entraîne :
        </p>

        <ul>
          <li>l'inaction ;</li>
          <li>la sous-valorisation ;</li>
          <li>une suranalyse permanente ;</li>
          <li>le refus d'opportunités pourtant pertinentes.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La règle</strong>
          <p>
            Cherche à être utile, pertinent et honnête.
            Pas à être parfait.
          </p>
        </div>

        <p>
          Tes fondations sont maintenant en place.
          La suite consiste à les confronter au marché et à créer
          davantage d'opportunités.
        </p>
      `,
      },

      {
        id: 'fondations-suite',
        slug: 'fondations-et-maintenant',
        title: 'Et maintenant ?',
        type: 'text',
        durationInMinutes: 2,
        content: `
        <p>
          Tu as maintenant posé les bases essentielles de ta recherche de mission.
        </p>

        <p>
          À ce stade, tu dois progressivement disposer de :
        </p>

        <ul>
          <li>un positionnement clair ;</li>
          <li>une offre compréhensible ;</li>
          <li>un dossier de compétences crédible ;</li>
          <li>des profils cohérents et rassurants ;</li>
          <li>une meilleure compréhension de ta propre valeur.</li>
        </ul>

        <p>
          Ces éléments ne signent pas une mission à ta place.
          Leur rôle est de rendre toutes les actions suivantes beaucoup plus efficaces.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La suite</strong>
          <p>
            Tu es maintenant suffisamment clair et crédible pour commencer
            à créer activement des opportunités.
          </p>
        </div>

        <p>
          Direction : <strong>Accélération</strong>.
        </p>
      `,
      },
    ],
  },

  {
    id: 'acceleration',
    title: 'Accélération',
    description:
      'Mets en place une mécanique simple pour créer régulièrement de nouvelles opportunités.',
    lessons: [
      {
        id: 'deux-canaux',
        slug: 'deux-canaux',
        title: 'Les 2 canaux pour signer une mission',
        type: 'text',
        durationInMinutes: 4,
        content: `
        <p>
          Pour signer une mission en freelance, il existe deux grands canaux :
          <strong>les intermédiaires</strong> et <strong>le direct</strong>.
        </p>

        <p>
          Comprendre la différence entre les deux est important, car tu ne joues
          pas exactement le même jeu selon le canal utilisé.
        </p>

        <h2>1. Passer par des intermédiaires</h2>

        <p>
          Cela comprend notamment :
        </p>

        <ul>
          <li>les ESN ;</li>
          <li>les cabinets de recrutement ;</li>
          <li>les plateformes comme Malt, LeHibou ou Collective.</li>
        </ul>

        <h3>Les avantages</h3>

        <ul>
          <li>accès à des missions déjà existantes ;</li>
          <li>moins d'effort commercial à fournir ;</li>
          <li>processus souvent plus rapide ;</li>
          <li>bon levier pour sécuriser du court terme.</li>
        </ul>

        <h3>Les limites</h3>

        <ul>
          <li>concurrence importante ;</li>
          <li>moins de contrôle sur la relation avec le client final ;</li>
          <li>plus difficile de se différencier ;</li>
          <li>présence d'un intermédiaire dans la chaîne de valeur.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Quand l'utiliser</strong>
          <p>
            Les intermédiaires sont particulièrement utiles lorsque tu veux
            retrouver une mission rapidement ou sécuriser ton activité à court terme.
          </p>
        </div>

        <h2>2. Trouver des missions en direct</h2>

        <p>
          Le direct consiste à créer une relation sans intermédiaire avec
          l'entreprise qui pourrait avoir besoin de toi.
        </p>

        <p>
          Cela peut passer par :
        </p>

        <ul>
          <li>ton réseau ;</li>
          <li>LinkedIn ;</li>
          <li>la prospection ;</li>
          <li>la création de contenu ;</li>
          <li>les recommandations.</li>
        </ul>

        <h3>Les avantages</h3>

        <ul>
          <li>relation directe avec le client ;</li>
          <li>meilleur contrôle sur ton positionnement ;</li>
          <li>plus de liberté dans la négociation ;</li>
          <li>possibilité de construire une acquisition plus durable.</li>
        </ul>

        <h3>Les limites</h3>

        <ul>
          <li>demande davantage de structure ;</li>
          <li>nécessite de créer les opportunités soi-même ;</li>
          <li>les résultats peuvent prendre plus de temps ;</li>
          <li>demande plus de régularité.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Quand l'utiliser</strong>
          <p>
            Le direct devient particulièrement intéressant lorsque tu veux
            gagner en indépendance et construire ton activité sur le moyen terme.
          </p>
        </div>

        <h2>Tu n'as pas besoin de choisir</h2>

        <p>
          Une erreur fréquente consiste à opposer les deux approches.
        </p>

        <p>
          Tu peux parfaitement utiliser :
        </p>

        <ul>
          <li><strong>les intermédiaires</strong> pour créer des opportunités rapidement ;</li>
          <li><strong>le direct</strong> pour construire progressivement davantage d'autonomie.</li>
        </ul>

        <p>
          Les deux canaux peuvent se renforcer au lieu de se concurrencer.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le principe à retenir</strong>
          <p>
            Les intermédiaires peuvent t'apporter de la vitesse.
            Le direct peut t'apporter davantage de contrôle.
            Utilise les deux de manière complémentaire.
          </p>
        </div>
      `,
      },

      {
        id: 'ciblage',
        slug: 'ciblage',
        title: 'Le ciblage (trop sous-côté)',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Tu peux avoir un excellent profil, une bonne offre et un message bien écrit.
          Si tu t'adresses aux mauvaises personnes, tes résultats resteront faibles.
        </p>

        <p>
          Le ciblage est donc l'une des étapes les plus importantes de ta prospection.
        </p>

        <h2>Le principe</h2>

        <p>
          La performance d'un message dépend autant de son contenu
          que de la personne qui le reçoit.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La question à te poser</strong>
          <p>
            Qui vit réellement le problème que je sais résoudre ?
          </p>
        </div>

        <h2>Cibler les intermédiaires</h2>

        <p>
          Lorsque tu cherches une mission via une ESN ou un cabinet,
          tu veux parler aux personnes qui portent réellement les opportunités.
        </p>

        <h3>Les Business Managers et ingénieurs d'affaires</h3>

        <p>
          Ce sont souvent eux qui :
        </p>

        <ul>
          <li>connaissent les besoins des clients ;</li>
          <li>recherchent activement des freelances ;</li>
          <li>gèrent la relation commerciale ;</li>
          <li>peuvent rapidement te positionner sur une mission.</li>
        </ul>

        <p>
          Dans beaucoup de cas, ils seront donc plus pertinents à contacter
          qu'un recruteur généraliste.
        </p>

        <h3>Commence localement</h3>

        <p>
          Tu peux commencer par identifier :
        </p>

        <ul>
          <li>les ESN de ta région ;</li>
          <li>les cabinets spécialisés ;</li>
          <li>les interlocuteurs qui travaillent sur ton domaine d'expertise.</li>
        </ul>

        <p>
          La proximité géographique n'est pas obligatoire,
          mais elle peut faciliter certains échanges et besoins hybrides.
        </p>

        <h2>Cibler les clients finaux</h2>

        <p>
          En direct, l'objectif est différent :
          tu dois identifier les personnes qui vivent le problème au quotidien.
        </p>

        <p>
          Le dirigeant n'est pas toujours la meilleure porte d'entrée.
          Dans beaucoup d'organisations, le besoin naît plus bas dans la structure.
        </p>

        <h3>Quelques exemples</h3>

        <p><strong>Tech et infrastructure :</strong></p>

        <ul>
          <li>CTO ;</li>
          <li>Head of Engineering ;</li>
          <li>Engineering Manager ;</li>
          <li>Tech Lead.</li>
        </ul>

        <p><strong>Produit :</strong></p>

        <ul>
          <li>CPO ;</li>
          <li>Head of Product ;</li>
          <li>Product Lead.</li>
        </ul>

        <p><strong>Delivery et organisation :</strong></p>

        <ul>
          <li>Delivery Manager ;</li>
          <li>Engineering Manager ;</li>
          <li>responsables de programme ou de transformation selon ton expertise.</li>
        </ul>

        <h2>Pourquoi les opérationnels sont intéressants</h2>

        <p>
          Ces interlocuteurs :
        </p>

        <ul>
          <li>ressentent directement les difficultés ;</li>
          <li>comprennent les conséquences du problème ;</li>
          <li>peuvent identifier rapidement si ton expertise est pertinente ;</li>
          <li>sont souvent à l'origine du besoin de renfort.</li>
        </ul>

        <h3>Exemple</h3>

        <p>
          Si ton expertise porte sur la stabilisation d'infrastructures complexes,
          contacter aléatoirement le CEO d'une scale-up sera souvent moins pertinent
          que parler au CTO confronté quotidiennement aux incidents.
        </p>

        <h2>Ce qu'il faut éviter</h2>

        <ul>
          <li>contacter tout le monde sans distinction ;</li>
          <li>viser un intitulé uniquement parce qu'il semble décisionnaire ;</li>
          <li>utiliser le même ciblage pour toutes les offres ;</li>
          <li>négliger les personnes directement confrontées au problème.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Raccourci simple</strong>
          <p>
            Via intermédiaires : cherche ceux qui portent les missions.
            En direct : cherche ceux qui vivent le problème.
          </p>
        </div>

        <p>
          Une fois les bonnes personnes identifiées,
          la prospection devient beaucoup plus simple.
        </p>
      `,
      },

      {
        id: 'prospection',
        slug: 'prospection-simple-efficace',
        title: 'Une prospection simple et efficace',
        type: 'text',
        durationInMinutes: 8,
        content: `
        <p>
          Tu sais maintenant qui contacter et ce que tu peux apporter.
          Il reste une étape essentielle : <strong>démarrer des conversations</strong>.
        </p>

        <h2>La prospection n'est pas forcément une vente</h2>

        <p>
          Beaucoup de freelances évitent la prospection parce qu'ils l'associent
          à une démarche commerciale agressive.
        </p>

        <p>
          Pourtant, une bonne prospection peut être beaucoup plus simple :
        </p>

        <blockquote>
          Contacter une personne pertinente avec une raison crédible de démarrer un échange.
        </blockquote>

        <p>
          Ton premier message n'a pas besoin de vendre ta mission.
          Son rôle est simplement d'obtenir une réponse.
        </p>

        <h2>Une séquence courte</h2>

        <p>
          Une structure simple peut suffire :
        </p>

        <ol>
          <li>une première question ;</li>
          <li>un élément de contexte ou de crédibilité ;</li>
          <li>une dernière relance légère.</li>
        </ol>

        <h2>Prospection auprès des intermédiaires</h2>

        <p>
          Avec les ESN, tu peux être relativement direct.
          Leur métier consiste justement à identifier des profils disponibles.
        </p>

        <h3>Message 1 — ouvrir la discussion</h3>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Est-ce que tu travailles actuellement avec des freelances
          sur des sujets [DevOps / Product / React] ?
        </blockquote>

        <h3>Message 2 — donner du contexte</h3>

        <blockquote>
          Bonjour [Prénom],<br><br>
          De mon côté, j'interviens comme [rôle] sur des contextes de [problème précis].<br><br>
          J'accompagne notamment des équipes sur [1 ou 2 sujets concrets].
        </blockquote>

        <h3>Message 3 — indiquer ta disponibilité</h3>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Je te partage simplement ma disponibilité avant de te laisser tranquille.<br><br>
          Je suis disponible prochainement sur des missions [type de mission / contexte].<br><br>
          N'hésite pas si tu as un besoin pertinent.
        </blockquote>

        <p>
          Cette approche fonctionne bien avec les intermédiaires car elle est
          directe, courte et adaptée à leur fonctionnement.
        </p>

        <h2>Prospection auprès des clients finaux</h2>

        <p>
          En direct, évite d'arriver immédiatement avec ton offre.
        </p>

        <p>
          Pars plutôt d'une situation concrète qui concerne ton interlocuteur.
        </p>

        <h3>Message 1 — partir d'une situation</h3>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Je me permets une question rapide : est-ce qu'aujourd'hui,
          [situation positive] ou est-ce que vous rencontrez plutôt [problème] ?
        </blockquote>

        <h3>Message 2 — expliquer pourquoi tu poses la question</h3>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Je pose la question car j'accompagne des équipes dans ce type de situation,
          notamment lorsque [problème reformulé simplement].
        </blockquote>

        <h3>Message 3 — proposer une ressource ou une suite légère</h3>

        <blockquote>
          Bonjour [Prénom],<br><br>
          J'ai structuré une approche simple autour de [résultat recherché].<br><br>
          Je peux te la partager si le sujet est d'actualité chez vous.
        </blockquote>

        <h2>Exemple Product</h2>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Je me permets une question rapide : votre roadmap est-elle aujourd'hui
          plutôt claire, ou avez-vous beaucoup de sujets qui s'accumulent côté produit ?
        </blockquote>

        <p>
          Puis :
        </p>

        <blockquote>
          Je pose la question car j'accompagne des équipes lorsque les priorités
          deviennent difficiles à arbitrer et que le delivery perd en lisibilité.
        </blockquote>

        <h2>Exemple DevOps</h2>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Votre infrastructure est-elle aujourd'hui plutôt stable,
          ou devient-elle parfois difficile à piloter au quotidien ?
        </blockquote>

        <p>
          Puis :
        </p>

        <blockquote>
          Je pose la question car j'interviens dans des environnements où la
          complexité de la plateforme commence à générer des incidents ou à ralentir les équipes.
        </blockquote>

        <h2>Exemple frontend</h2>

        <blockquote>
          Bonjour [Prénom],<br><br>
          Votre frontend reste-t-il aujourd'hui facile à faire évoluer,
          ou commence-t-il à devenir difficile à maintenir ?
        </blockquote>

        <h2>Ce qu'il faut éviter</h2>

        <ul>
          <li>écrire des messages trop longs ;</li>
          <li>présenter toute ton offre dès le premier contact ;</li>
          <li>surpersonnaliser au point de ne jamais envoyer ;</li>
          <li>utiliser des scripts artificiels ;</li>
          <li>chercher à convaincre avant même d'avoir une conversation.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Ton seul objectif au départ</strong>
          <p>
            Obtenir une réponse pertinente.
            La mission se construit ensuite au fil de la conversation.
          </p>
        </div>

        <p>
          Si ton message paraît compliqué, raccourcis-le.
          La simplicité est généralement un avantage.
        </p>
      `,
      },

      {
        id: 'contenu',
        slug: 'contenu-inspire-confiance',
        title: 'Créer du contenu qui inspire confiance',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          La prospection crée des conversations.
          Le contenu peut rendre ces conversations plus faciles à démarrer.
        </p>

        <p>
          Tu n'as pas besoin de devenir créateur de contenu.
          Ton objectif est simplement de montrer que tu comprends les problèmes
          sur lesquels tu veux être sollicité.
        </p>

        <h2>Le vrai rôle du contenu</h2>

        <p>
          Le contenu n'a pas pour priorité de générer des likes ou de construire
          une grande audience.
        </p>

        <p>
          Il sert surtout à :
        </p>

        <ul>
          <li>rassurer ;</li>
          <li>rendre ton expertise visible ;</li>
          <li>montrer ta compréhension du terrain ;</li>
          <li>donner une raison supplémentaire de te contacter.</li>
        </ul>

        <h2>Le lien avec la prospection</h2>

        <p>
          Lorsqu'une personne reçoit ton message, elle peut aller consulter ton profil.
        </p>

        <p>
          Quelques publications pertinentes peuvent alors confirmer :
        </p>

        <ul>
          <li>que tu connais réellement le sujet ;</li>
          <li>que tu comprends les situations qu'elle rencontre ;</li>
          <li>que ton approche est concrète.</li>
        </ul>

        <p>
          Le contenu devient donc une forme de preuve complémentaire.
        </p>

        <h2>De quoi parler ?</h2>

        <p>
          Commence simplement par des situations réelles rencontrées dans ton domaine.
        </p>

        <h3>1. Une situation terrain</h3>

        <blockquote>
          Je vois régulièrement des équipes où tout devient prioritaire
          et où la roadmap finit par perdre toute lisibilité.
        </blockquote>

        <h3>2. Le problème</h3>

        <blockquote>
          Le problème n'est pas forcément le manque de travail.
          C'est souvent l'absence d'arbitrage suffisamment clair.
        </blockquote>

        <h3>3. Ton analyse</h3>

        <p>
          Explique ce que tu observes et pourquoi la situation se produit.
        </p>

        <h3>4. Une piste concrète</h3>

        <blockquote>
          Avant d'ajouter un nouvel outil ou un nouveau processus,
          commence par clarifier ce qui produit réellement de l'impact.
        </blockquote>

        <h2>Une structure facile à réutiliser</h2>

        <ol>
          <li>Situation réelle ;</li>
          <li>Problème ;</li>
          <li>Analyse ;</li>
          <li>Piste concrète.</li>
        </ol>

        <h2>Les erreurs fréquentes</h2>

        <h3>Parler uniquement de soi</h3>

        <p>
          Ton expérience est intéressante lorsqu'elle permet d'éclairer
          une situation utile pour ton lecteur.
        </p>

        <h3>Être trop technique</h3>

        <p>
          Si ton client idéal ne comprend pas ton contenu,
          il aura du mal à y voir une preuve de valeur.
        </p>

        <h3>Être trop générique</h3>

        <p>
          Les grandes leçons abstraites fonctionnent moins bien que des observations
          précises issues du terrain.
        </p>

        <h3>Attendre le post parfait</h3>

        <p>
          Une publication simple et utile vaut davantage qu'un brouillon parfait
          qui reste dans tes notes.
        </p>

        <h2>À quelle fréquence publier ?</h2>

        <p>
          Pour beaucoup de freelances, une à deux publications par semaine
          sont largement suffisantes.
        </p>

        <p>
          La régularité et la pertinence comptent davantage que le volume.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le rôle du contenu</strong>
          <p>
            La prospection déclenche la conversation.
            Le contenu aide à créer de la confiance avant même le premier échange.
          </p>
        </div>
      `,
      },

      {
        id: 'routine',
        slug: 'routine-simple-indispensable',
        title: 'Une routine simple et indispensable',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Une bonne stratégie ne produit pas grand-chose si elle n'est appliquée
          que lorsque tu es particulièrement motivé.
        </p>

        <p>
          La régularité est ce qui transforme une série d'actions isolées
          en véritable système d'acquisition.
        </p>

        <h2>Le problème des pics d'activité</h2>

        <p>
          Beaucoup de freelances fonctionnent par cycles :
        </p>

        <ul>
          <li>la recherche devient urgente ;</li>
          <li>ils multiplient les actions pendant quelques jours ;</li>
          <li>la motivation retombe ;</li>
          <li>la prospection s'arrête ;</li>
          <li>l'urgence revient quelques semaines plus tard.</li>
        </ul>

        <p>
          Cette logique crée beaucoup de stress et peu de visibilité.
        </p>

        <h2>L'objectif de ta routine</h2>

        <p>
          Tu ne cherches pas à faire énormément.
        </p>

        <p>
          Tu cherches à faire :
        </p>

        <ul>
          <li>les bonnes actions ;</li>
          <li>en quantité raisonnable ;</li>
          <li>avec suffisamment de régularité.</li>
        </ul>

        <h2>1. Prospection</h2>

        <p>
          Prévois régulièrement un petit volume de nouveaux contacts.
        </p>

        <p>
          Une base possible :
        </p>

        <ul>
          <li>5 à 10 nouveaux messages ;</li>
          <li>quelques relances ;</li>
          <li>réponse aux conversations en cours.</li>
        </ul>

        <p>
          Le volume exact dépendra de ton marché et de ta disponibilité.
        </p>

        <h2>2. Suivi</h2>

        <p>
          Les opportunités viennent rarement d'un seul message.
        </p>

        <p>
          Pense à :
        </p>

        <ul>
          <li>répondre rapidement lorsque c'est pertinent ;</li>
          <li>relancer les conversations ;</li>
          <li>noter les prochaines actions ;</li>
          <li>éviter de laisser une opportunité disparaître par oubli.</li>
        </ul>

        <h2>3. Contenu</h2>

        <p>
          Une ou deux publications par semaine peuvent largement suffire
          si elles renforcent ton positionnement.
        </p>

        <h2>4. Pilotage</h2>

        <p>
          Une fois par semaine, regarde quelques indicateurs simples :
        </p>

        <ul>
          <li>combien de personnes as-tu contactées ?</li>
          <li>combien ont répondu ?</li>
          <li>combien de conversations ont réellement démarré ?</li>
          <li>combien de rendez-vous ou d'opportunités ont émergé ?</li>
        </ul>

        <p>
          Le but n'est pas de produire un reporting complexe,
          mais de comprendre où ton système bloque.
        </p>

        <h2>Un exemple de routine légère</h2>

        <ul>
          <li>30 minutes de prospection ;</li>
          <li>10 minutes de suivi ;</li>
          <li>une publication dans la semaine ;</li>
          <li>un point rapide de pilotage en fin de semaine.</li>
        </ul>

        <p>
          Une routine simple que tu tiens pendant plusieurs semaines
          vaut davantage qu'un programme ambitieux impossible à maintenir.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La règle</strong>
          <p>
            Ne cherche pas à faire le maximum.
            Cherche à faire suffisamment, régulièrement.
          </p>
        </div>

        <p>
          C'est cette répétition qui transforme progressivement
          « j'espère trouver une mission » en « je génère des opportunités ».
        </p>
      `,
      },

      {
        id: 'passage-action',
        slug: 'passe-a-action',
        title: 'Passe à l’action (le vrai blocage)',
        type: 'text',
        durationInMinutes: 4,
        content: `
        <p>
          À ce stade, tu disposes déjà de beaucoup d'éléments :
        </p>

        <ul>
          <li>un positionnement ;</li>
          <li>une offre ;</li>
          <li>un ciblage ;</li>
          <li>des messages ;</li>
          <li>une routine.</li>
        </ul>

        <p>
          Autrement dit : tu sais globalement quoi faire.
        </p>

        <h2>Le prochain blocage n'est souvent plus stratégique</h2>

        <p>
          Il peut devenir beaucoup plus simple :
          <strong>tu repousses le moment d'agir</strong>.
        </p>

        <p>
          Cela peut prendre différentes formes :
        </p>

        <ul>
          <li>« Mon profil n'est pas encore assez bon. »</li>
          <li>« Je dois retravailler mon message. »</li>
          <li>« Je commencerai demain. »</li>
          <li>« Je dois encore réfléchir à mon ciblage. »</li>
        </ul>

        <p>
          Certaines améliorations peuvent être pertinentes.
          Mais à partir d'un certain niveau, elles deviennent surtout une manière
          de retarder le feedback du marché.
        </p>

        <h2>Tu n'as pas besoin d'être parfaitement prêt</h2>

        <p>
          Tes premiers messages ne seront probablement pas parfaits.
        </p>

        <p>
          Certains seront ignorés.
          Certaines conversations ne mèneront nulle part.
        </p>

        <p>
          C'est normal.
        </p>

        <p>
          Mais c'est également grâce à ces premiers échanges que tu vas comprendre :
        </p>

        <ul>
          <li>ce qui intéresse réellement ton marché ;</li>
          <li>ce qui génère des réponses ;</li>
          <li>ce qui doit être clarifié ;</li>
          <li>comment améliorer ton approche.</li>
        </ul>

        <h2>La confiance vient souvent après l'action</h2>

        <p>
          Attendre de se sentir parfaitement confiant avant de commencer
          peut prendre très longtemps.
        </p>

        <p>
          Le mécanisme fonctionne souvent dans l'autre sens :
        </p>

        <blockquote>
          Action → feedback → ajustement → confiance.
        </blockquote>

        <h2>Ton objectif immédiat</h2>

        <p>
          Ne cherche pas à signer une mission aujourd'hui.
        </p>

        <p>
          Cherche simplement à démarrer.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>À faire maintenant</strong>
          <p>
            Identifie 5 personnes pertinentes et envoie 5 premiers messages.
            L'objectif est de sortir de la préparation et d'entrer dans le marché.
          </p>
        </div>

        <p>
          Une fois cette première action réalisée, la suivante devient généralement
          beaucoup plus facile.
        </p>
      `,
      },

      {
        id: 'acceleration-suite',
        slug: 'acceleration-et-maintenant',
        title: 'Et maintenant ?',
        type: 'text',
        durationInMinutes: 2,
        content: `
        <p>
          Tu sais maintenant :
        </p>

        <ul>
          <li>quels canaux utiliser ;</li>
          <li>qui contacter ;</li>
          <li>comment démarrer une conversation ;</li>
          <li>comment utiliser le contenu pour renforcer ta crédibilité ;</li>
          <li>comment installer une routine régulière.</li>
        </ul>

        <p>
          L'objectif d'Accélération est de créer un flux réel d'opportunités.
        </p>

        <p>
          Mais une opportunité n'est pas encore une mission.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La prochaine étape</strong>
          <p>
            Apprendre à qualifier les bonnes opportunités,
            réussir les échanges et transformer un intérêt en mission signée.
          </p>
        </div>

        <p>
          Direction : <strong>Signature</strong>.
        </p>
      `,
      },
    ],
  },

  {
    id: 'signature',
    title: 'Signature',
    description:
      'Apprends à qualifier les bonnes opportunités et à les transformer naturellement en missions.',
    lessons: [
      {
        id: 'qualifier-mission',
        slug: 'qualifier-mission',
        title: 'Qualifier une mission (avant de dire oui)',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Lorsqu'une opportunité arrive, le réflexe naturel est souvent d'aller vite
          et de chercher à sécuriser la mission.
        </p>

        <p>
          C'est particulièrement vrai après une période sans mission.
          Pourtant, accepter trop vite peut t'exposer à des contextes flous,
          instables ou simplement mal alignés avec ce que tu veux.
        </p>

        <h2>Une mission se choisit</h2>

        <p>
          Tu n'es pas uniquement là pour être évalué.
          Tu dois aussi évaluer la mission, le contexte et les attentes.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le bon réflexe</strong>
          <p>
            Avant de dire oui, prends le temps de qualifier l'opportunité.
          </p>
        </div>

        <h2>1. Le problème est-il réellement clair ?</h2>

        <p>
          Commence par comprendre pourquoi l'entreprise cherche quelqu'un aujourd'hui.
        </p>

        <p>
          Demande-toi :
        </p>

        <ul>
          <li>quel est le problème concret ?</li>
          <li>pourquoi ce besoin existe-t-il maintenant ?</li>
          <li>qu'est-ce qui ne fonctionne pas aujourd'hui ?</li>
        </ul>

        <p>
          Des formulations comme « on a besoin de renfort » ou « on verra en arrivant »
          peuvent indiquer que le besoin n'a pas encore été suffisamment cadré.
        </p>

        <h2>2. Le rôle est-il suffisamment précis ?</h2>

        <p>
          Tu dois savoir ce qu'on attend réellement de toi.
        </p>

        <ul>
          <li>Quel est ton périmètre ?</li>
          <li>Quelles responsabilités te seront confiées ?</li>
          <li>Qu'est-ce qui reste hors de ton rôle ?</li>
        </ul>

        <p>
          Un poste qui mélange plusieurs fonctions sans priorité claire
          mérite d'être creusé avant de t'engager.
        </p>

        <h2>3. Le contexte semble-t-il sain ?</h2>

        <p>
          Le contenu de la mission compte autant que l'environnement dans lequel
          elle va se dérouler.
        </p>

        <p>
          Essaie de comprendre :
        </p>

        <ul>
          <li>comment l'équipe est organisée ;</li>
          <li>comment les décisions sont prises ;</li>
          <li>comment fonctionne le delivery ;</li>
          <li>quels sont les principaux points de tension.</li>
        </ul>

        <p>
          Le désordre n'est pas forcément un mauvais signe : certaines missions
          existent justement pour remettre de la structure.
        </p>

        <p>
          En revanche, un contexte très flou combiné à des attentes élevées
          doit t'inciter à approfondir.
        </p>

        <h2>4. Les attentes sont-elles réalistes ?</h2>

        <p>
          Vérifie ce qu'on attend de toi dans les premières semaines et avec quels moyens.
        </p>

        <ul>
          <li>Quel résultat est attendu ?</li>
          <li>Dans quel délai ?</li>
          <li>Avec quelle équipe ?</li>
          <li>Quelles dépendances existent ?</li>
        </ul>

        <p>
          Une mission peut être très intéressante tout en ayant besoin d'un recadrage
          sur les attentes.
        </p>

        <h2>Les questions qui t'aident à qualifier</h2>

        <ul>
          <li>Qu'est-ce qui vous a amené à chercher quelqu'un aujourd'hui ?</li>
          <li>Qu'est-ce qui bloque concrètement aujourd'hui ?</li>
          <li>Qu'attendez-vous de cette mission dans les premières semaines ?</li>
          <li>Comment est organisé le delivery actuellement ?</li>
          <li>Qu'est-ce qui ferait que la mission soit considérée comme réussie ?</li>
        </ul>

        <h2>Les erreurs fréquentes</h2>

        <ul>
          <li>dire oui par peur de perdre l'opportunité ;</li>
          <li>ne poser aucune question ;</li>
          <li>chercher à se vendre avant d'avoir compris le besoin ;</li>
          <li>ignorer des signaux faibles parce que la mission semble attractive.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Raccourci simple</strong>
          <p>
            Si quelque chose est flou, creuse.
            Si le flou persiste sur les éléments essentiels, considère que c'est une information en soi.
          </p>
        </div>

        <p>
          Une bonne mission n'est pas simplement une mission disponible.
          C'est une mission dans laquelle le problème, le rôle et les attentes
          sont suffisamment clairs pour que tu puisses réellement apporter de la valeur.
        </p>
      `,
      },

      {
        id: 'echange-esn',
        slug: 'echange-esn',
        title: 'Réussir l’échange avec une ESN',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Un échange avec une ESN n'a pas exactement le même objectif qu'un échange
          avec le client final.
        </p>

        <p>
          À ce stade, ton objectif principal est d'être suffisamment clair et crédible
          pour que l'intermédiaire puisse te présenter facilement au client.
        </p>

        <h2>Ce que cherche l'ESN</h2>

        <p>
          Le Business Manager ou l'ingénieur d'affaires veut généralement comprendre rapidement :
        </p>

        <ul>
          <li>ce que tu fais ;</li>
          <li>sur quels contextes tu es pertinent ;</li>
          <li>si ton profil correspond à la mission ;</li>
          <li>s'il peut te présenter simplement au client final.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Ton objectif</strong>
          <p>
            Être simple, clair et positionnable.
          </p>
        </div>

        <h2>1. Présente-toi en quelques phrases</h2>

        <p>
          Évite de dérouler chronologiquement ton CV.
        </p>

        <p>
          Une structure simple peut suffire :
        </p>

        <blockquote>
          Je suis [rôle], spécialisé dans [type de contexte].<br><br>
          J'interviens principalement lorsque [problème ou enjeu].<br><br>
          J'accompagne notamment les équipes sur [types de missions concrètes].
        </blockquote>

        <h3>Exemple Product & Delivery</h3>

        <blockquote>
          Je suis Product & Delivery Manager spécialisé dans les environnements Cloud et SaaS.<br><br>
          J'interviens principalement lorsque le delivery devient difficile à piloter.<br><br>
          J'aide les équipes à remettre de la clarté dans les priorités et à sécuriser la livraison.
        </blockquote>

        <h2>2. Comprends la mission</h2>

        <p>
          Ne reste pas uniquement dans une posture de réponse.
          Pose quelques questions pour comprendre ce que l'ESN sait réellement du besoin.
        </p>

        <ul>
          <li>Qu'est-ce qui a amené le client à ouvrir cette mission ?</li>
          <li>Qu'est-ce qui bloque aujourd'hui ?</li>
          <li>Qu'attend le client dans les premières semaines ?</li>
        </ul>

        <p>
          Tu montres ainsi que tu ne cherches pas simplement « une mission »,
          mais que tu essaies de comprendre si ton expertise est pertinente.
        </p>

        <h2>3. Relie ton expérience au besoin</h2>

        <p>
          Une fois le contexte compris, reformule-le puis crée le lien avec ton expérience.
        </p>

        <blockquote>
          Ce que tu décris, je le retrouve souvent dans des contextes où [reformulation].<br><br>
          J'interviens justement pour [valeur apportée].
        </blockquote>

        <h3>Exemple</h3>

        <blockquote>
          Ce que tu décris arrive souvent lorsque la roadmap devient difficile à prioriser
          et que le delivery perd en lisibilité.<br><br>
          C'est justement le type de contexte sur lequel j'interviens pour remettre
          de la clarté dans les priorités et le pilotage.
        </blockquote>

        <h2>4. Aide l'ESN à se projeter</h2>

        <p>
          Donne un aperçu très simple de ta manière d'aborder la situation.
        </p>

        <blockquote>
          Dans ce type de contexte, je commence généralement par [première action].<br><br>
          L'objectif est de [résultat].
        </blockquote>

        <p>
          Il ne s'agit pas de détailler tout ton plan.
          Tu montres simplement que tu sais comment commencer.
        </p>

        <h2>5. Termine simplement</h2>

        <blockquote>
          Si cela correspond à ce que recherche le client,
          je serai ravi d'échanger directement avec lui.
        </blockquote>

        <h2>Les erreurs fréquentes</h2>

        <ul>
          <li>réciter son CV ;</li>
          <li>entrer trop vite dans des détails techniques ;</li>
          <li>ne poser aucune question ;</li>
          <li>essayer de convaincre avant d'avoir compris la mission.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Le test</strong>
          <p>
            À la fin de l'échange, l'ESN doit pouvoir expliquer simplement au client
            pourquoi ton profil est pertinent.
          </p>
        </div>
      `,
      },

      {
        id: 'echange-client-final',
        slug: 'echange-client-final',
        title: 'Réussir l’échange avec le client final',
        type: 'text',
        durationInMinutes: 7,
        content: `
        <p>
          Un échange avec le client final n'est pas seulement un entretien.
        </p>

        <p>
          C'est surtout une discussion permettant de comprendre un problème
          et de déterminer si tu es réellement la bonne personne pour intervenir.
        </p>

        <h2>Le client ne cherche pas uniquement un bon CV</h2>

        <p>
          Ton expérience compte, mais ce qui crée réellement de la confiance
          est souvent ta capacité à comprendre sa situation.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le principe</strong>
          <p>
            Plus tes questions sont pertinentes, plus l'échange devient utile
            pour toi comme pour le client.
          </p>
        </div>

        <h2>1. Cadre l'échange</h2>

        <p>
          Tu peux commencer simplement :
        </p>

        <blockquote>
          Merci pour votre temps.<br><br>
          Pour bien comprendre votre besoin, je vais d'abord vous poser quelques questions
          sur le contexte et les enjeux de la mission.
        </blockquote>

        <p>
          Cela installe immédiatement une posture de consultant plutôt que de candidat passif.
        </p>

        <h2>2. Comprends le contexte</h2>

        <ul>
          <li>Qu'est-ce qui vous a amené à ouvrir cette mission aujourd'hui ?</li>
          <li>Dans quel contexte s'inscrit-elle ?</li>
          <li>Comment l'équipe est-elle organisée aujourd'hui ?</li>
        </ul>

        <p>
          Tu cherches ici à comprendre l'environnement global avant d'entrer dans les détails.
        </p>

        <h2>3. Identifie le vrai problème</h2>

        <p>
          Cette partie est souvent la plus importante.
        </p>

        <ul>
          <li>Qu'est-ce qui bloque concrètement aujourd'hui ?</li>
          <li>Qu'est-ce qui est le plus difficile à gérer au quotidien ?</li>
          <li>Quelles sont les conséquences si rien ne change ?</li>
        </ul>

        <p>
          Le besoin exprimé au départ n'est pas toujours le problème réel.
          Tes questions doivent t'aider à faire la différence.
        </p>

        <h2>4. Comprends les attentes</h2>

        <ul>
          <li>Qu'attendez-vous de cette mission dans les premières semaines ?</li>
          <li>Qu'est-ce qui ferait que cette mission soit réussie ?</li>
          <li>Qu'attendez-vous de la personne qui va intervenir ?</li>
        </ul>

        <h2>5. Identifie les contraintes</h2>

        <ul>
          <li>Y a-t-il des contraintes particulières à connaître ?</li>
          <li>Des dépendances importantes ?</li>
          <li>Des sujets sensibles côté organisation ou technique ?</li>
        </ul>

        <h2>6. Reformule</h2>

        <p>
          Une bonne reformulation montre que tu as compris et permet au client
          de corriger immédiatement une éventuelle mauvaise interprétation.
        </p>

        <blockquote>
          Si je résume, vous êtes aujourd'hui dans un contexte où [problème].<br><br>
          L'objectif est de [résultat].<br><br>
          Et les principaux enjeux sont [éléments clés].
        </blockquote>

        <h2>7. Positionne-toi</h2>

        <p>
          Une fois le besoin compris, crée le lien avec ce que tu sais faire.
        </p>

        <blockquote>
          Ce que vous décrivez correspond à des contextes sur lesquels j'interviens régulièrement.<br><br>
          J'aide notamment les équipes à [valeur apportée].
        </blockquote>

        <h2>8. Aide le client à se projeter</h2>

        <blockquote>
          Dans ce type de situation, je commence généralement par [première étape].<br><br>
          L'objectif est de [résultat concret].
        </blockquote>

        <h2>Quelques exemples de questions</h2>

        <h3>Produit</h3>

        <ul>
          <li>Comment les priorités sont-elles définies aujourd'hui ?</li>
          <li>La roadmap est-elle claire pour l'ensemble des équipes ?</li>
          <li>Où se situent les principales tensions ?</li>
        </ul>

        <h3>Infrastructure</h3>

        <ul>
          <li>Quels types d'incidents rencontrez-vous ?</li>
          <li>Qu'est-ce qui est aujourd'hui le plus difficile à piloter ?</li>
          <li>Comment gérez-vous actuellement la fiabilité de la plateforme ?</li>
        </ul>

        <h3>Frontend</h3>

        <ul>
          <li>Le frontend est-il encore facile à faire évoluer ?</li>
          <li>Rencontrez-vous des ralentissements côté delivery ?</li>
          <li>Comment gérez-vous actuellement la qualité et la maintenabilité ?</li>
        </ul>

        <h2>Les erreurs fréquentes</h2>

        <ul>
          <li>parler trop tôt de soi ;</li>
          <li>rester en surface ;</li>
          <li>ne pas reformuler ;</li>
          <li>présenter sa solution avant d'avoir compris le problème.</li>
        </ul>

        <div class="lesson-callout">
          <strong>Le bon objectif</strong>
          <p>
            À la fin de l'échange, le client doit surtout avoir le sentiment
            que tu as compris sa situation et que ton intervention a du sens.
          </p>
        </div>
      `,
      },

      {
        id: 'transformer-echange',
        slug: 'transformer-echange-mission',
        title: 'Transformer l’échange en mission',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Un bon échange est nécessaire, mais il ne garantit pas que l'opportunité
          avance réellement.
        </p>

        <p>
          Beaucoup de freelances terminent par :
          « Je vous laisse revenir vers moi ».
        </p>

        <p>
          Le problème est que la suite devient alors floue.
        </p>

        <h2>Ton rôle : rendre la prochaine étape évidente</h2>

        <p>
          Le client doit pouvoir comprendre :
        </p>

        <ul>
          <li>ce que tu as compris ;</li>
          <li>ce que tu proposes ;</li>
          <li>où cela peut l'emmener ;</li>
          <li>quelle est la prochaine étape.</li>
        </ul>

        <h2>1. Reformule une dernière fois</h2>

        <blockquote>
          Si je résume, vous êtes aujourd'hui dans un contexte où [problème].<br><br>
          L'objectif est de [résultat].
        </blockquote>

        <p>
          Cela permet de valider que vous parlez bien du même problème.
        </p>

        <h2>2. Propose une direction simple</h2>

        <p>
          Tu peux présenter une approche en quelques étapes.
        </p>

        <blockquote>
          Dans ce type de situation, je proposerais de commencer par :<br><br>
          1. [Étape simple]<br>
          2. [Étape simple]<br>
          3. [Étape simple]
        </blockquote>

        <p>
          Par exemple :
        </p>

        <ul>
          <li>clarifier les priorités ;</li>
          <li>structurer le delivery ;</li>
          <li>sécuriser l'exécution.</li>
        </ul>

        <p>
          L'objectif n'est pas de fournir un plan de mission complet gratuitement.
          Il est de montrer que tu vois une direction crédible.
        </p>

        <h2>3. Aide le client à se projeter</h2>

        <blockquote>
          L'idée est qu'en quelques semaines,
          vous retrouviez [résultat concret].
        </blockquote>

        <p>
          Plus le résultat paraît concret, plus la décision devient simple à envisager.
        </p>

        <h2>4. Propose la prochaine étape</h2>

        <p>
          Termine avec une suite claire.
        </p>

        <blockquote>
          Si cette approche vous semble pertinente,
          je peux vous proposer de démarrer à partir de [date / disponibilité].
        </blockquote>

        <p>
          Ou, si un autre échange est nécessaire :
        </p>

        <blockquote>
          La prochaine étape pourrait être de valider le périmètre et les modalités ensemble.
        </blockquote>

        <h2>Les erreurs fréquentes</h2>

        <ul>
          <li>ne proposer aucune suite ;</li>
          <li>rester trop vague ;</li>
          <li>donner trop de détails et perdre le client ;</li>
          <li>forcer une décision qui n'est pas encore mûre.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le principe</strong>
          <p>
            Compréhension → direction → projection → prochaine étape.
          </p>
        </div>
      `,
      },

      {
        id: 'faire-accepter-prix',
        slug: 'faire-accepter-prix',
        title: 'Faire accepter ton prix naturellement',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Lorsqu'un client discute ton prix, le sujet n'est pas toujours le montant lui-même.
        </p>

        <p>
          Il peut aussi s'agir d'un manque de clarté sur la valeur de ton intervention,
          d'une contrainte budgétaire réelle ou simplement d'une phase normale de négociation.
        </p>

        <h2>Ton prix doit être cohérent avec la valeur perçue</h2>

        <p>
          Un client évalue rarement uniquement ton nombre d'années d'expérience.
        </p>

        <p>
          Il regarde aussi :
        </p>

        <ul>
          <li>si tu comprends son problème ;</li>
          <li>si ton expérience semble pertinente ;</li>
          <li>si ton intervention paraît claire ;</li>
          <li>si le risque de travailler avec toi semble faible.</li>
        </ul>

        <h2>1. Comprends bien le problème</h2>

        <p>
          Plus ton diagnostic est précis, plus ton prix est replacé dans un contexte concret.
        </p>

        <h2>2. Reformule avec clarté</h2>

        <p>
          Une bonne reformulation peut permettre au client de mieux comprendre
          lui-même ce qui est réellement en jeu.
        </p>

        <blockquote>
          Si je comprends bien, le vrai sujet n'est pas seulement la charge de travail,
          mais surtout le manque de visibilité sur les priorités.
        </blockquote>

        <h2>3. Présente une approche simple</h2>

        <p>
          Ton client n'a pas besoin d'un discours compliqué.
          Il doit comprendre ce que tu vas venir améliorer.
        </p>

        <h2>4. Rends le résultat concret</h2>

        <blockquote>
          L'objectif est de retrouver rapidement des priorités claires
          et un delivery plus fluide.
        </blockquote>

        <h2>Comment annoncer ton tarif</h2>

        <p>
          Fais-le simplement, sans justification excessive.
        </p>

        <blockquote>
          Sur ce type de mission, mon TJM est de [montant] €.
        </blockquote>

        <p>
          Puis laisse ton interlocuteur réagir.
        </p>

        <p>
          Tu n'as pas besoin de remplir immédiatement le silence
          avec une longue justification.
        </p>

        <h2>Si le client hésite</h2>

        <p>
          Ne baisse pas automatiquement ton prix.
          Commence par comprendre ce qui pose problème.
        </p>

        <blockquote>
          Qu'est-ce qui vous fait hésiter sur ce point ?
        </blockquote>

        <p>
          La réponse peut révéler :
        </p>

        <ul>
          <li>une vraie limite budgétaire ;</li>
          <li>un manque de compréhension de ton rôle ;</li>
          <li>une comparaison avec d'autres profils ;</li>
          <li>un périmètre qui mérite d'être ajusté.</li>
        </ul>

        <p>
          Tu peux alors décider s'il faut ajuster le cadre, le volume,
          le périmètre ou maintenir ta proposition.
        </p>

        <h2>Les erreurs fréquentes</h2>

        <ul>
          <li>justifier excessivement son tarif ;</li>
          <li>baisser immédiatement au premier signe d'hésitation ;</li>
          <li>entrer dans une comparaison personnelle avec d'autres freelances ;</li>
          <li>confondre négociation et remise automatique.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>À retenir</strong>
          <p>
            Un prix se défend beaucoup plus facilement lorsque le client comprend
            clairement ce que ton intervention peut changer pour lui.
          </p>
        </div>
      `,
      },

      {
        id: 'securiser-mission',
        slug: 'securiser-mission',
        title: 'Sécuriser la mission',
        type: 'text',
        durationInMinutes: 6,
        content: `
        <p>
          Une mission peut sembler acquise tout en restant fragile tant que
          les principaux éléments ne sont pas clairement définis.
        </p>

        <p>
          Sécuriser une mission ne signifie pas rendre la collaboration rigide.
          Cela signifie simplement <strong>poser un cadre suffisamment clair dès le départ</strong>.
        </p>

        <h2>1. Le tarif et les conditions de paiement</h2>

        <p>
          Vérifie notamment :
        </p>

        <ul>
          <li>le TJM ;</li>
          <li>le volume de jours prévu ;</li>
          <li>les modalités de facturation ;</li>
          <li>les délais de paiement ;</li>
          <li>les éventuels frais ou conditions particulières.</li>
        </ul>

        <p>
          Ces éléments doivent être compris avant le démarrage.
        </p>

        <h2>2. Le rythme de la mission</h2>

        <p>
          Clarifie :
        </p>

        <ul>
          <li>le nombre de jours par semaine ;</li>
          <li>les jours ou plages attendus ;</li>
          <li>le niveau de présentiel ou de remote ;</li>
          <li>les déplacements éventuels.</li>
        </ul>

        <h2>3. Le périmètre</h2>

        <p>
          C'est l'un des éléments les plus importants.
        </p>

        <p>
          Tu dois comprendre ce que tu prends réellement en charge
          et quelles responsabilités restent ailleurs.
        </p>

        <p>
          Un périmètre peut évoluer au cours d'une mission,
          mais cette évolution doit rester consciente et discutée.
        </p>

        <h2>4. Le contrat</h2>

        <p>
          Évite de démarrer une mission importante sans cadre contractuel clair.
        </p>

        <p>
          Vérifie au minimum :
        </p>

        <ul>
          <li>la durée ou le mode de renouvellement ;</li>
          <li>les conditions d'arrêt ;</li>
          <li>les modalités de paiement ;</li>
          <li>le périmètre général ;</li>
          <li>les clauses qui peuvent réellement t'engager.</li>
        </ul>

        <p>
          En cas de doute sur une clause importante, fais-la relire par un professionnel adapté.
        </p>

        <h2>5. Le fonctionnement de la collaboration</h2>

        <p>
          Identifie rapidement :
        </p>

        <ul>
          <li>qui priorise ;</li>
          <li>qui valide ;</li>
          <li>qui prend les décisions importantes ;</li>
          <li>qui sera ton interlocuteur principal.</li>
        </ul>

        <p>
          Cela évite beaucoup de confusion une fois la mission commencée.
        </p>

        <h2>Une manière simple de cadrer</h2>

        <blockquote>
          Pour que le démarrage soit fluide,
          je préfère qu'on clarifie quelques points avant de commencer.
        </blockquote>

        <p>
          Puis passe simplement en revue le tarif, le rythme, le périmètre
          et les modalités contractuelles.
        </p>

        <h2>Les erreurs fréquentes</h2>

        <ul>
          <li>démarrer avant que le cadre soit suffisamment défini ;</li>
          <li>éviter les sujets inconfortables par peur de compliquer la relation ;</li>
          <li>accepter un périmètre très flou ;</li>
          <li>laisser des décisions importantes uniquement à l'oral.</li>
        </ul>

        <div class="lesson-callout lesson-callout--strong">
          <strong>Le principe</strong>
          <p>
            Un cadre clair protège les deux parties et facilite généralement la collaboration.
          </p>
        </div>
      `,
      },

      {
        id: 'comprendre-valeur',
        slug: 'comprendre-valeur',
        title: 'Comprendre ta valeur (et ne plus la brader)',
        type: 'text',
        durationInMinutes: 5,
        content: `
        <p>
          Même avec de bonnes opportunités, un positionnement clair et des échanges réussis,
          il reste facile de douter de sa propre valeur.
        </p>

        <p>
          Cela peut te conduire à accepter trop vite un tarif,
          un périmètre ou des conditions qui ne te conviennent pas réellement.
        </p>

        <h2>Ta valeur ne se résume pas à ton CV</h2>

        <p>
          Ton expérience compte, mais elle ne constitue pas toute ta valeur.
        </p>

        <p>
          Celle-ci vient aussi de ta capacité à :
        </p>

        <ul>
          <li>comprendre rapidement une situation ;</li>
          <li>structurer un problème complexe ;</li>
          <li>prendre de bonnes décisions ;</li>
          <li>faire avancer une équipe ;</li>
          <li>produire un résultat utile.</li>
        </ul>

        <h2>Passer d'une posture de candidat à une posture de partenaire</h2>

        <p>
          Une posture fragile ressemble à :
        </p>

        <blockquote>
          J'espère qu'ils vont me choisir.
        </blockquote>

        <p>
          Une posture plus saine ressemble plutôt à :
        </p>

        <blockquote>
          Je veux comprendre si cette mission me correspond et si je peux réellement apporter de la valeur.
        </blockquote>

        <p>
          Cette nuance change beaucoup de choses dans la manière dont tu échanges.
        </p>

        <h2>Ne te définis pas uniquement par ton prix</h2>

        <p>
          Si ton seul argument est d'être moins cher,
          tu entres dans une comparaison qui t'est rarement favorable sur le long terme.
        </p>

        <p>
          Ton objectif est plutôt de rendre ta pertinence suffisamment claire
          pour que le prix soit évalué dans ce contexte.
        </p>

        <h2>Tu peux aussi dire non</h2>

        <p>
          Comprendre ta valeur signifie également accepter que toutes les missions
          ne sont pas faites pour toi.
        </p>

        <p>
          Avant de t'engager, demande-toi :
        </p>

        <ul>
          <li>Est-ce que je comprends réellement le problème ?</li>
          <li>Est-ce que je sais comment contribuer ?</li>
          <li>Est-ce que le contexte me permet de faire du bon travail ?</li>
          <li>Est-ce que les conditions me semblent suffisamment justes ?</li>
        </ul>

        <h2>Évite la comparaison permanente</h2>

        <p>
          Il existera toujours quelqu'un de plus expérimenté,
          de plus spécialisé ou moins cher.
        </p>

        <p>
          La vraie question reste :
          <strong>es-tu pertinent pour ce besoin précis ?</strong>
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La bonne posture</strong>
          <p>
            Tu ne cherches pas à convaincre tout le monde.
            Tu cherches les situations dans lesquelles ton expertise crée réellement de la valeur.
          </p>
        </div>

        <p>
          Plus cette valeur devient claire pour toi,
          plus il devient naturel de présenter ton tarif et tes conditions sans te sous-vendre.
        </p>
      `,
      },

      {
        id: 'signature-suite',
        slug: 'signature-et-maintenant',
        title: 'Et maintenant ?',
        type: 'text',
        durationInMinutes: 2,
        content: `
        <p>
          Tu as maintenant parcouru l'ensemble du système :
        </p>

        <ul>
          <li>clarifier ton positionnement ;</li>
          <li>construire une offre crédible ;</li>
          <li>créer des opportunités ;</li>
          <li>qualifier les missions ;</li>
          <li>réussir les échanges ;</li>
          <li>présenter ton prix ;</li>
          <li>sécuriser la collaboration.</li>
        </ul>

        <p>
          L'objectif n'est pas que chaque opportunité se transforme en mission.
        </p>

        <p>
          L'objectif est de disposer d'un processus suffisamment clair
          pour comprendre pourquoi une opportunité avance, bloque ou doit être abandonnée.
        </p>

        <div class="lesson-callout lesson-callout--strong">
          <strong>La suite</strong>
          <p>
            Répète le processus, observe ce qui fonctionne et améliore-le progressivement.
            Avec le temps, tu ne subis plus autant ta recherche de mission :
            tu apprends à mieux choisir tes opportunités.
          </p>
        </div>
      `,
      },
    ],
  },
]

export const lessons = trainingSections.flatMap((section) => section.lessons)

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug)
}

export function getLessonSection(lessonId: string) {
  return trainingSections.find((section) =>
    section.lessons.some((lesson) => lesson.id === lessonId),
  )
}
