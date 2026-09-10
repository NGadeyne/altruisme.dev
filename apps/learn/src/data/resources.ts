// src/data/resources.ts

import type { Resource } from '@/types/course'

export interface ResourceWithContent extends Resource {
  content: string
}

export const resources: ResourceWithContent[] = [
  {
    id: 'template-malt',
    slug: 'template-profil-malt',
    title: 'Template de profil Malt',
    description:
      '5 exemples de profils Malt à adapter selon ton métier, ton expérience et ton positionnement.',
    content: `
      <p>
        Ces modèles ne sont pas faits pour être copiés mot pour mot.
      </p>

      <p>
        Utilise-les comme une base pour structurer ton profil plus rapidement,
        puis adapte-les avec :
      </p>

      <ul>
        <li>tes compétences et technologies réelles ;</li>
        <li>tes expériences ;</li>
        <li>tes types de clients ;</li>
        <li>tes résultats ;</li>
        <li>ta manière de travailler.</li>
      </ul>

      <div class="lesson-callout lesson-callout--strong">
        <strong>Le principe</strong>
        <p>
          Le meilleur profil n'est pas celui qui copie exactement un modèle.
          C'est celui qui utilise une bonne structure tout en restant fidèle
          à ton expérience et à ton positionnement.
        </p>
      </div>

      <h2>Développeur Frontend / React</h2>

      <h3>1. Titre Malt</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        Développeur React | SaaS & Interfaces B2B
      </blockquote>

      <p><strong>Variante</strong></p>

      <blockquote>
        Développeur Frontend | React & TypeScript
      </blockquote>

      <h3>2. Accroche</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        J'aide les équipes produit et tech à construire des interfaces React
        fiables, maintenables et agréables à utiliser.
      </blockquote>

      <p><strong>Variante SaaS</strong></p>

      <blockquote>
        J'aide les startups et scale-ups SaaS à concevoir, améliorer et maintenir
        des interfaces React prêtes à évoluer.
      </blockquote>

      <p><strong>Variante technique</strong></p>

      <blockquote>
        J'interviens sur des applications React / TypeScript pour améliorer
        la qualité du frontend, structurer les composants et fiabiliser
        les parcours utilisateurs.
      </blockquote>

      <h3>3. Introduction de la description</h3>

      <blockquote>
        J'accompagne principalement des startups, scale-ups et équipes produit
        sur des applications web SaaS ou B2B.
      </blockquote>

      <p>
        Cette introduction sert de point de départ. Tu peux ensuite développer
        les missions que tu prends en charge, ton expertise et tes expériences.
      </p>

      <h3>4. Exemple d'expérience</h3>

      <blockquote>
        Intervention dans une scale-up SaaS B2B en forte croissance.
      </blockquote>

      <p>
        Développe ensuite cette expérience avec la structure vue dans la formation :
        contexte, problème, actions et résultats.
      </p>

      <h3>5. Compétences et mots-clés</h3>

      <ul>
        <li><strong>Compétence principale :</strong> React</li>
        <li><strong>Compétences spécifiques :</strong> TypeScript, Next.js</li>
        <li><strong>Contextes :</strong> SaaS, B2B, applications web</li>
      </ul>

      <h3>6. Appel à l'action</h3>

      <blockquote>
        Si tu as besoin de renforcer ton équipe frontend sur une application React,
        je serai ravi d'échanger sur ton contexte.
      </blockquote>

      <p>Ou :</p>

      <blockquote>
        Si tu cherches un développeur React freelance pour améliorer,
        maintenir ou faire évoluer ton application web,
        tu peux me contacter directement via Malt.
      </blockquote>


      <h2>Développeur Fullstack</h2>

      <h3>1. Titre Malt</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        Développeur Fullstack | React & Node.js
      </blockquote>

      <p><strong>Variante</strong></p>

      <blockquote>
        Développeur Fullstack | SaaS & Apps web
      </blockquote>

      <h3>2. Accroche</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        J'aide les équipes produit et tech à construire des applications web
        fiables, maintenables et prêtes à évoluer.
      </blockquote>

      <p><strong>Variante SaaS</strong></p>

      <blockquote>
        J'aide les startups et scale-ups SaaS à développer,
        améliorer et maintenir leurs applications web de bout en bout.
      </blockquote>

      <p><strong>Variante technique</strong></p>

      <blockquote>
        J'interviens sur des applications React / Node.js pour structurer
        le frontend, fiabiliser le backend et fluidifier les échanges
        entre produit, design et tech.
      </blockquote>

      <h3>3. Introduction de la description</h3>

      <blockquote>
        J'accompagne principalement des startups, scale-ups et équipes produit
        sur des applications web SaaS ou B2B.
      </blockquote>

      <h3>4. Exemple d'expérience</h3>

      <blockquote>
        Intervention dans une startup SaaS B2B en phase d'accélération.
      </blockquote>

      <h3>5. Compétences et mots-clés</h3>

      <ul>
        <li><strong>Frontend :</strong> React, Next.js, TypeScript</li>
        <li><strong>Backend :</strong> Node.js, API REST</li>
        <li><strong>Contextes :</strong> SaaS, B2B, applications web</li>
      </ul>

      <h3>6. Appel à l'action</h3>

      <blockquote>
        Si tu as besoin d'un développeur Fullstack freelance pour renforcer
        ton équipe et faire évoluer ton application web,
        je serai ravi d'échanger sur ton contexte.
      </blockquote>

      <p>Ou :</p>

      <blockquote>
        Si tu cherches un profil autonome pour intervenir à la fois
        sur le frontend, le backend et les API,
        tu peux me contacter directement via Malt.
      </blockquote>


      <h2>DevOps / Cloud Engineer</h2>

      <h3>1. Titre Malt</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        DevOps Engineer | Cloud, Kubernetes & CI/CD
      </blockquote>

      <p><strong>Variante</strong></p>

      <blockquote>
        Cloud Engineer | AWS, Terraform & CI/CD
      </blockquote>

      <h3>2. Accroche</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        J'aide les équipes tech à fiabiliser leurs déploiements,
        automatiser leur infrastructure et mieux maîtriser leurs environnements cloud.
      </blockquote>

      <p><strong>Variante plateforme</strong></p>

      <blockquote>
        J'aide les équipes produit et tech à construire des plateformes cloud
        fiables, automatisées et faciles à maintenir.
      </blockquote>

      <p><strong>Variante technique</strong></p>

      <blockquote>
        J'interviens sur des environnements Cloud / Kubernetes pour améliorer
        les pipelines CI/CD, automatiser l'infrastructure
        et renforcer la stabilité des déploiements.
      </blockquote>

      <h3>3. Introduction de la description</h3>

      <blockquote>
        J'accompagne principalement des startups, scale-ups et équipes tech
        sur des environnements Cloud, DevOps ou plateformes internes.
      </blockquote>

      <h3>4. Exemple d'expérience</h3>

      <blockquote>
        Intervention auprès d'une scale-up SaaS sur une plateforme Cloud en production.
      </blockquote>

      <h3>5. Compétences et mots-clés</h3>

      <ul>
        <li><strong>Cloud :</strong> AWS, GCP, Azure</li>
        <li><strong>Infrastructure :</strong> Kubernetes, Docker, Terraform</li>
        <li><strong>Delivery :</strong> CI/CD, GitLab CI, GitHub Actions</li>
        <li><strong>Contextes :</strong> SaaS, plateformes Cloud, infrastructure</li>
      </ul>

      <h3>6. Appel à l'action</h3>

      <blockquote>
        Si tu as besoin de fiabiliser tes déploiements,
        automatiser ton infrastructure ou mieux maîtriser tes environnements Cloud,
        je serai ravi d'échanger sur ton contexte.
      </blockquote>

      <p>Ou :</p>

      <blockquote>
        Si tu cherches un DevOps / Cloud Engineer freelance
        pour renforcer ton équipe et sécuriser ton infrastructure Cloud,
        tu peux me contacter directement via Malt.
      </blockquote>


      <h2>Data Analyst / Data Engineer</h2>

      <h3>1. Titre Malt</h3>

      <p><strong>Option Data Analyst</strong></p>

      <blockquote>
        Data Analyst | Dashboards & Pilotage
      </blockquote>

      <p><strong>Variante</strong></p>

      <blockquote>
        Data Analyst | SQL, BI & Dashboards
      </blockquote>

      <h3>2. Accroche</h3>

      <p><strong>Option Data Analyst</strong></p>

      <blockquote>
        J'aide les équipes business et produit à transformer leurs données
        en dashboards clairs pour mieux piloter leurs décisions.
      </blockquote>

      <p><strong>Variante métier</strong></p>

      <blockquote>
        J'aide les équipes métier à rendre leurs données plus lisibles,
        plus fiables et plus utiles au quotidien.
      </blockquote>

      <p><strong>Variante Data Engineer</strong></p>

      <blockquote>
        J'aide les équipes data et tech à construire des pipelines fiables
        pour rendre les données propres, accessibles et exploitables.
      </blockquote>

      <h3>3. Introduction de la description</h3>

      <blockquote>
        J'accompagne principalement des startups, scale-ups et équipes métier
        sur leurs sujets data, reporting et pilotage.
      </blockquote>

      <h3>4. Exemple d'expérience</h3>

      <blockquote>
        Intervention dans une scale-up SaaS avec plusieurs sources de données
        et des besoins forts en pilotage business.
      </blockquote>

      <h3>5. Compétences et mots-clés</h3>

      <ul>
        <li><strong>Data :</strong> SQL, Data Analysis, Data Engineering</li>
        <li><strong>Développement :</strong> Python</li>
        <li><strong>BI :</strong> Power BI, Tableau, Looker</li>
        <li><strong>Contextes :</strong> SaaS, reporting, pilotage, analytics</li>
      </ul>

      <h3>6. Appel à l'action</h3>

      <blockquote>
        Si tu as besoin de fiabiliser tes dashboards,
        automatiser tes reportings ou mieux exploiter tes données,
        je serai ravi d'échanger sur ton contexte.
      </blockquote>

      <p>Ou :</p>

      <blockquote>
        Si tu cherches un Data Analyst / Data Engineer freelance
        pour rendre tes données plus fiables et plus utiles,
        tu peux me contacter directement via Malt.
      </blockquote>


      <h2>Product Manager / Product Owner</h2>

      <h3>1. Titre Malt</h3>

      <p><strong>Option Product Manager</strong></p>

      <blockquote>
        Product Manager | Roadmap & Delivery
      </blockquote>

      <p><strong>Variante Product Owner</strong></p>

      <blockquote>
        Product Owner | Backlog, Roadmap & Delivery
      </blockquote>

      <h3>2. Accroche</h3>

      <p><strong>Option principale</strong></p>

      <blockquote>
        J'aide les équipes produit et tech à clarifier leur roadmap,
        prioriser les bons sujets et sécuriser leur delivery.
      </blockquote>

      <p><strong>Variante SaaS</strong></p>

      <blockquote>
        J'aide les startups et scale-ups SaaS à structurer leur produit,
        clarifier leurs priorités et mieux piloter leur delivery.
      </blockquote>

      <p><strong>Variante Product Owner</strong></p>

      <blockquote>
        J'interviens auprès des équipes produit et tech pour cadrer les besoins,
        structurer le backlog et fluidifier la livraison des fonctionnalités.
      </blockquote>

      <h3>3. Introduction de la description</h3>

      <blockquote>
        J'accompagne principalement des startups, scale-ups et équipes produit
        sur des produits SaaS, B2B ou plateformes techniques.
      </blockquote>

      <h3>4. Exemple d'expérience</h3>

      <blockquote>
        Intervention dans une scale-up SaaS B2B avec une roadmap dense
        et plusieurs équipes impliquées.
      </blockquote>

      <h3>5. Compétences et mots-clés</h3>

      <ul>
        <li><strong>Produit :</strong> Product Management, Product Ownership</li>
        <li><strong>Méthodes :</strong> Discovery, Roadmap, Priorisation</li>
        <li><strong>Delivery :</strong> Backlog, Agile, coordination produit-tech</li>
        <li><strong>Contextes :</strong> SaaS, B2B, plateformes techniques</li>
      </ul>

      <h3>6. Appel à l'action</h3>

      <blockquote>
        Si tu as besoin de clarifier ta roadmap,
        prioriser tes sujets ou sécuriser ton delivery produit,
        je serai ravi d'échanger sur ton contexte.
      </blockquote>

      <p>Ou :</p>

      <blockquote>
        Si tu cherches un Product Manager / Product Owner freelance
        pour faire le lien entre produit, tech et business,
        tu peux me contacter directement via Malt.
      </blockquote>

      <div class="lesson-callout lesson-callout--strong">
        <strong>À toi de jouer</strong>
        <p>
          Choisis le modèle le plus proche de ton profil,
          puis adapte chaque partie avec tes propres mots,
          tes expériences et tes résultats.
        </p>
      </div>
    `,
  },

  {
    id: 'template-prospection',
    slug: 'template-prospection',
    title: 'Template de prospection',
    description: 'Des séquences simples à adapter pour prospecter les ESN et les clients finaux.',
    content: `
      <p>
        Ces templates ne sont pas faits pour être envoyés mécaniquement
        à des centaines de personnes.
      </p>

      <p>
        Utilise-les comme une base, puis adapte-les avec :
      </p>

      <ul>
        <li>ton positionnement ;</li>
        <li>ton métier ;</li>
        <li>ton type de client ;</li>
        <li>le problème que tu résous ;</li>
        <li>ta disponibilité.</li>
      </ul>

      <div class="lesson-callout lesson-callout--strong">
        <strong>Le principe</strong>
        <p>
          Une bonne prospection ne cherche pas à vendre dès le premier message.
          Elle cherche d'abord à démarrer une conversation avec la bonne personne.
        </p>
      </div>


      <h2>Prospecter les ESN et intermédiaires</h2>

      <p>
        Avec une ESN, un cabinet ou un intermédiaire, tu peux être relativement direct.
      </p>

      <p>
        Leur métier consiste déjà à identifier des freelances pour répondre
        aux besoins de leurs clients.
      </p>

      <p>
        Ton objectif est donc surtout d'être :
      </p>

      <ul>
        <li>clair ;</li>
        <li>facile à positionner ;</li>
        <li>rapide à comprendre ;</li>
        <li>simple à recontacter lorsqu'un besoin apparaît.</li>
      </ul>

      <h3>La séquence recommandée</h3>

      <ol>
        <li>Une question simple</li>
        <li>Ton positionnement et ton expertise</li>
        <li>Ta disponibilité</li>
      </ol>

      <div class="lesson-callout">
        <strong>À retenir</strong>
        <p>
          Avec une ESN, inutile d'écrire un roman.
          En quelques secondes, ton interlocuteur doit comprendre ce que tu fais
          et sur quelles missions il peut te positionner.
        </p>
      </div>


      <h2>Développeur Frontend / React — ESN</h2>

      <h3>Message 1 — Ouvrir la conversation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Est-ce que tu travailles actuellement avec des freelances React / Frontend ?
      </blockquote>

      <h3>Message 2 — Positionnement</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        De mon côté, j'interviens comme développeur Frontend spécialisé React / TypeScript,
        principalement sur des applications SaaS ou B2B.<br><br>
        J'aide notamment les équipes à faire évoluer leur frontend,
        structurer les composants et améliorer la maintenabilité.
      </blockquote>

      <h3>Message 3 — Disponibilité</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je te partage simplement ma disponibilité avant de te laisser tranquille.<br><br>
        Je suis disponible pour des missions React / TypeScript,
        notamment sur des produits SaaS ou des applications web complexes.<br><br>
        N'hésite pas si tu as un besoin pertinent.
      </blockquote>


      <h2>Développeur Fullstack — ESN</h2>

      <h3>Message 1 — Ouvrir la conversation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Est-ce que tu travailles actuellement avec des freelances Fullstack React / Node.js ?
      </blockquote>

      <h3>Message 2 — Positionnement</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'interviens comme développeur Fullstack React / Node.js,
        principalement sur des applications SaaS et web B2B.<br><br>
        J'accompagne les équipes sur le frontend, le backend et les API,
        avec une approche orientée maintenabilité et autonomie.
      </blockquote>

      <h3>Message 3 — Disponibilité</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je te partage simplement ma disponibilité.<br><br>
        Je suis disponible pour des missions Fullstack React / Node.js,
        avec une forte autonomie sur les applications web et SaaS.<br><br>
        N'hésite pas si tu as un besoin.
      </blockquote>


      <h2>DevOps / Cloud Engineer — ESN</h2>

      <h3>Message 1 — Ouvrir la conversation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Est-ce que tu travailles actuellement avec des freelances DevOps / Cloud ?
      </blockquote>

      <h3>Message 2 — Positionnement</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'interviens sur des environnements Cloud et Kubernetes,
        notamment sur des sujets d'infrastructure, CI/CD et automatisation.<br><br>
        J'aide les équipes à fiabiliser les déploiements,
        automatiser l'infrastructure et mieux maîtriser leurs environnements Cloud.
      </blockquote>

      <h3>Message 3 — Disponibilité</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je te partage simplement ma disponibilité.<br><br>
        Je suis disponible sur des missions DevOps / Cloud,
        notamment Kubernetes, Terraform, CI/CD et plateformes Cloud.<br><br>
        N'hésite pas si tu as un besoin correspondant.
      </blockquote>


      <h2>Data Analyst / Data Engineer — ESN</h2>

      <h3>Message 1 — Ouvrir la conversation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Est-ce que tu travailles actuellement avec des freelances Data ?
      </blockquote>

      <h3>Message 2 — Positionnement</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'interviens sur des sujets Data Analysis / Data Engineering,
        notamment autour de SQL, Python, reporting et pipelines de données.<br><br>
        J'aide les équipes à rendre leurs données plus fiables,
        accessibles et utiles au pilotage.
      </blockquote>

      <h3>Message 3 — Disponibilité</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je te partage simplement ma disponibilité.<br><br>
        Je suis disponible pour des missions Data,
        notamment autour de SQL, Python, BI, reporting ou pipelines.<br><br>
        N'hésite pas si tu as un besoin pertinent.
      </blockquote>


      <h2>Product Manager / Product Owner — ESN</h2>

      <h3>Message 1 — Ouvrir la conversation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Est-ce que tu travailles actuellement avec des freelances Product Manager / Product Owner ?
      </blockquote>

      <h3>Message 2 — Positionnement</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'interviens comme Product Manager / Product Owner
        sur des environnements SaaS, B2B et plateformes techniques.<br><br>
        J'aide notamment les équipes à clarifier les priorités,
        structurer la roadmap et fluidifier le delivery produit-tech.
      </blockquote>

      <h3>Message 3 — Disponibilité</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je te partage simplement ma disponibilité.<br><br>
        Je suis disponible pour des missions Product / Delivery,
        notamment sur des sujets roadmap, backlog, priorisation
        et coordination produit-tech.<br><br>
        N'hésite pas si tu as un besoin.
      </blockquote>


      <h2>Prospecter les clients finaux</h2>

      <p>
        En direct, la logique change.
      </p>

      <p>
        Tu ne contactes plus quelqu'un dont le métier est de trouver des freelances.
        Tu contactes une personne qui vit potentiellement un problème opérationnel.
      </p>

      <p>
        Ton message doit donc partir davantage de son contexte
        que de ta disponibilité.
      </p>

      <h3>La séquence recommandée</h3>

      <ol>
        <li>Une question liée à une situation réelle</li>
        <li>Une explication rapide de ta pertinence</li>
        <li>Une ouverture vers une ressource ou une discussion</li>
      </ol>

      <div class="lesson-callout">
        <strong>Ton objectif</strong>
        <p>
          Ne cherche pas à présenter toute ton offre.
          Cherche d'abord à obtenir une réponse et à vérifier
          si le problème existe réellement chez ton interlocuteur.
        </p>
      </div>


      <h2>Développeur Frontend / React — Client final</h2>

      <h3>Message 1 — Situation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je me permets une question rapide :
        votre frontend reste-t-il aujourd'hui facile à faire évoluer,
        ou commence-t-il à devenir difficile à maintenir ?
      </blockquote>

      <h3>Message 2 — Expertise</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je pose la question car j'interviens justement sur des applications React
        lorsque le frontend commence à ralentir le delivery
        ou que les composants deviennent difficiles à faire évoluer.
      </blockquote>

      <h3>Message 3 — Ouverture</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'ai structuré quelques bonnes pratiques simples
        pour remettre de la clarté dans un frontend React devenu complexe.<br><br>
        Je peux te les partager si le sujet est d'actualité chez vous.
      </blockquote>


      <h2>Développeur Fullstack — Client final</h2>

      <h3>Message 1 — Situation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je me permets une question :
        est-ce qu'aujourd'hui votre application web reste simple à faire évoluer,
        ou commencez-vous à avoir des frictions entre frontend, backend et API ?
      </blockquote>

      <h3>Message 2 — Expertise</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je pose la question car j'interviens sur des applications Fullstack
        lorsque les évolutions deviennent plus lentes
        ou que la complexité technique commence à freiner le produit.
      </blockquote>

      <h3>Message 3 — Ouverture</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'ai une approche assez simple pour identifier rapidement
        les principaux points de friction côté frontend, backend et API.<br><br>
        Je peux te la partager si le sujet est pertinent chez vous.
      </blockquote>


      <h2>DevOps / Cloud Engineer — Client final</h2>

      <h3>Message 1 — Situation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je me permets une question rapide :
        votre infrastructure est-elle aujourd'hui plutôt stable,
        ou devient-elle parfois difficile à piloter au quotidien ?
      </blockquote>

      <h3>Message 2 — Expertise</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je pose la question car j'interviens justement dans des environnements
        où la plateforme devient complexe,
        avec des incidents, des déploiements difficiles
        ou trop de tâches manuelles côté infrastructure.
      </blockquote>

      <h3>Message 3 — Ouverture</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'ai structuré une approche simple pour identifier
        les principaux points de fragilité d'une plateforme Cloud
        et les prioriser.<br><br>
        Je peux te la partager si le sujet est d'actualité chez vous.
      </blockquote>


      <h2>Data Analyst / Data Engineer — Client final</h2>

      <h3>Message 1 — Situation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je me permets une question :
        vos équipes ont-elles aujourd'hui facilement accès aux bonnes données,
        ou avez-vous encore beaucoup de reporting manuel
        ou de données difficiles à fiabiliser ?
      </blockquote>

      <h3>Message 2 — Expertise</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je pose la question car j'interviens sur ce type de contexte,
        lorsque les données existent mais restent difficiles à exploiter
        pour le pilotage ou la prise de décision.
      </blockquote>

      <h3>Message 3 — Ouverture</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'ai structuré une approche simple pour identifier
        ce qui bloque entre les sources de données,
        les reportings et les besoins métier.<br><br>
        Je peux te la partager si le sujet est pertinent chez vous.
      </blockquote>


      <h2>Product Manager / Product Owner — Client final</h2>

      <h3>Message 1 — Situation</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je me permets une question rapide :
        votre roadmap est-elle aujourd'hui plutôt claire,
        ou avez-vous beaucoup de sujets qui s'accumulent
        et deviennent difficiles à prioriser ?
      </blockquote>

      <h3>Message 2 — Expertise</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        Je pose la question car j'interviens justement auprès d'équipes produit
        lorsque les priorités deviennent difficiles à arbitrer
        et que le delivery perd en lisibilité.
      </blockquote>

      <h3>Message 3 — Ouverture</h3>

      <blockquote>
        Bonjour [Prénom],<br><br>
        J'ai structuré une approche simple pour remettre de la clarté
        dans la roadmap et le delivery produit.<br><br>
        Je peux te la partager si le sujet est d'actualité chez vous.
      </blockquote>


      <h2>Comment adapter les messages</h2>

      <p>
        Ne cherche pas à personnaliser chaque message pendant vingt minutes.
      </p>

      <p>
        Adapte surtout :
      </p>

      <ul>
        <li>le rôle de ton interlocuteur ;</li>
        <li>le problème que tu veux tester ;</li>
        <li>le type d'entreprise ;</li>
        <li>le vocabulaire utilisé dans son secteur.</li>
      </ul>

      <p>
        La personnalisation doit améliorer la pertinence,
        pas rendre ta prospection impossible à tenir.
      </p>

      <h2>Les relances</h2>

      <p>
        Une absence de réponse au premier message ne signifie pas nécessairement
        que la personne n'est pas intéressée.
      </p>

      <p>
        Une séquence courte de deux ou trois messages suffit généralement.
      </p>

      <p>
        L'objectif n'est pas de harceler.
        Chaque message doit rester léger et apporter un minimum de contexte supplémentaire.
      </p>

      <h2>Les erreurs à éviter</h2>

      <ul>
        <li>écrire des messages trop longs ;</li>
        <li>présenter tout ton CV dès le départ ;</li>
        <li>envoyer immédiatement ton dossier de compétences sans contexte ;</li>
        <li>demander systématiquement un rendez-vous dans le premier message ;</li>
        <li>faire semblant d'avoir étudié profondément une entreprise si ce n'est pas le cas ;</li>
        <li>surpersonnaliser au point de ne plus prospecter ;</li>
        <li>abandonner après quelques messages sans réponse.</li>
      </ul>

      <h2>Les indicateurs à regarder</h2>

      <p>
        Ne juge pas ta prospection uniquement au nombre de missions signées.
      </p>

      <p>
        Observe également :
      </p>

      <ul>
        <li>le nombre de messages envoyés ;</li>
        <li>le nombre de réponses ;</li>
        <li>le nombre de conversations pertinentes ;</li>
        <li>le nombre d'opportunités créées ;</li>
        <li>le nombre d'entretiens obtenus.</li>
      </ul>

      <p>
        Si tu obtiens peu de réponses, regarde d'abord ton ciblage
        et ton premier message.
      </p>

      <p>
        Si tu obtiens des réponses mais peu d'opportunités,
        regarde plutôt la qualité des conversations et ton positionnement.
      </p>

      <div class="lesson-callout lesson-callout--strong">
        <strong>À retenir</strong>
        <p>
          ESN : sois clair, direct et facile à positionner.<br><br>
          Client final : pars d'un problème concret
          et cherche d'abord à créer une conversation.
        </p>
      </div>
    `,
  },

  {
    id: 'templates-linkedin',
    slug: 'templates-contenus-linkedin',
    title: 'Templates de contenus LinkedIn',
    description:
      'Deux approches complémentaires pour créer du contenu : rassurer avec ton expertise et gagner en visibilité.',
    content: `
      <p>
        Créer du contenu sur LinkedIn peut servir deux objectifs très différents :
        <strong>rassurer</strong> ou <strong>te faire connaître</strong>.
      </p>

      <p>
        Les deux sont utiles.
        Mais ils ne fonctionnent pas de la même manière
        et ne doivent pas être écrits avec la même intention.
      </p>

      <div class="lesson-callout lesson-callout--strong">
        <strong>Le principe</strong>
        <p>
          Le contenu d'expertise montre que tu comprends les problèmes de tes clients.<br><br>
          Le contenu de visibilité permet à davantage de personnes de te découvrir
          et de se souvenir de toi.
        </p>
      </div>


      <h2>1. Le contenu d'expertise</h2>

      <p>
        Son objectif principal est de <strong>rassurer</strong>.
      </p>

      <p>
        Il montre que tu :
      </p>

      <ul>
        <li>comprends les problèmes de ton marché ;</li>
        <li>as une lecture pertinente du terrain ;</li>
        <li>sais expliquer simplement des sujets complexes ;</li>
        <li>peux apporter de la valeur dans un contexte concret.</li>
      </ul>

      <p>
        Ce type de contenu devient particulièrement puissant lorsqu'une personne
        découvre ton profil après une prospection, une recommandation ou une recherche.
      </p>

      <p>
        Elle ne voit plus seulement ton titre ou ton CV.
        Elle peut constater directement ta manière de réfléchir.
      </p>

      <h3>Structure simple</h3>

      <ol>
        <li>Un hook basé sur un problème réel</li>
        <li>Une situation terrain</li>
        <li>Une explication du problème</li>
        <li>Ton analyse</li>
        <li>Une piste concrète</li>
      </ol>

      <h3>Template de contenu d'expertise</h3>

      <blockquote>
        [Hook fort sur une situation fréquente]<br><br>

        Je vois régulièrement [situation terrain].<br><br>

        Le problème n'est pas forcément [explication évidente].<br>
        Le vrai problème, c'est souvent [cause plus profonde].<br><br>

        Dans ce type de contexte, je commence généralement par [approche simple].<br><br>

        Avant de [solution complexe], commence par [première action concrète].
      </blockquote>

      <h3>Exemple Product</h3>

      <blockquote>
        Une roadmap avec 40 priorités n'est pas une roadmap.<br><br>

        Je vois régulièrement des équipes produit où tout est urgent.<br>
        Chaque stakeholder a sa priorité.<br>
        Chaque sujet semble important.<br><br>

        Le problème n'est pas le manque de travail.<br>
        C'est l'absence d'arbitrage clair.<br><br>

        Avant d'ajouter un nouvel outil de priorisation,
        commence par définir ce que vous êtes prêts à ne pas faire.
      </blockquote>


      <h2>Hooks d'expertise</h2>

      <p>
        Un bon hook d'expertise doit permettre à la bonne personne
        de se reconnaître immédiatement dans le problème.
      </p>


      <h3>Développeur Frontend / React</h3>

      <ul>
        <li><strong>« Votre frontend n'est probablement pas lent à cause de React. »</strong></li>
        <li><strong>« Le vrai problème commence quand personne n'ose toucher à un composant. »</strong></li>
        <li><strong>« Un frontend qui fonctionne peut déjà être en train de ralentir votre produit. »</strong></li>
        <li><strong>« Plus votre design system grossit, plus il peut devenir votre problème. »</strong></li>
        <li><strong>« Si chaque nouvelle feature casse quelque chose, le problème n'est plus la feature. »</strong></li>
      </ul>

      <h3>Développeur Fullstack</h3>

      <ul>
        <li><strong>« Le problème n'est pas toujours votre dette technique. C'est parfois votre architecture de décision. »</strong></li>
        <li><strong>« Une application peut être simple pour l'utilisateur et infernale à maintenir. »</strong></li>
        <li><strong>« Si chaque petite évolution demande trois équipes, votre architecture vous ralentit déjà. »</strong></li>
        <li><strong>« Le vrai coût d'une API mal conçue apparaît souvent six mois plus tard. »</strong></li>
        <li><strong>« Une architecture complexe n'est pas forcément une architecture mature. »</strong></li>
      </ul>

      <h3>DevOps / Cloud Engineer</h3>

      <ul>
        <li><strong>« Kubernetes ne résout pas une infrastructure mal pensée. Il peut simplement la rendre plus complexe. »</strong></li>
        <li><strong>« Si vos déploiements vous stressent encore, votre CI/CD n'est peut-être pas aussi fiable que vous le pensez. »</strong></li>
        <li><strong>« Une infra stable n'est pas une infra sans incidents. »</strong></li>
        <li><strong>« Le Cloud devient cher bien avant que la facture ne devienne problématique. »</strong></li>
        <li><strong>« Un bon incident n'existe pas. Mais un incident incompréhensible est encore pire. »</strong></li>
      </ul>

      <h3>Data Analyst / Data Engineer</h3>

      <ul>
        <li><strong>« Un dashboard faux est parfois pire qu'aucun dashboard. »</strong></li>
        <li><strong>« Si trois équipes ont trois chiffres différents, vous n'avez pas seulement un problème de BI. »</strong></li>
        <li><strong>« Plus vous avez de données, moins vous êtes forcément data-driven. »</strong></li>
        <li><strong>« Le vrai problème n'est pas de collecter la donnée. C'est de pouvoir lui faire confiance. »</strong></li>
        <li><strong>« Un reporting manuel est souvent un symptôme, pas le problème. »</strong></li>
      </ul>

      <h3>Product Manager / Product Owner</h3>

      <ul>
        <li><strong>« Une roadmap avec 40 priorités n'est pas une roadmap. »</strong></li>
        <li><strong>« Votre équipe ne manque peut-être pas de vélocité. Elle manque peut-être de décisions. »</strong></li>
        <li><strong>« Quand tout est prioritaire, le delivery finit par devenir politique. »</strong></li>
        <li><strong>« Le problème d'un backlog de 500 tickets n'est pas sa taille. »</strong></li>
        <li><strong>« Ajouter un Product Manager ne réparera pas une organisation qui ne sait pas arbitrer. »</strong></li>
      </ul>


      <h2>Idées de contenus d'expertise</h2>

      <h3>Développeur Frontend / React</h3>

      <ul>
        <li>Les signes qu'un frontend commence à devenir difficile à maintenir</li>
        <li>Quand créer un composant partagé et quand ne pas le faire</li>
        <li>Pourquoi un design system peut ralentir une équipe</li>
        <li>Les causes d'un frontend devenu lent à faire évoluer</li>
        <li>Comment reprendre un projet React ancien sans tout réécrire</li>
        <li>Ce que tu regardes en premier lorsque tu découvres une codebase React</li>
      </ul>

      <h3>Développeur Fullstack</h3>

      <ul>
        <li>Les signes d'une architecture devenue trop couplée</li>
        <li>Pourquoi certaines petites features prennent anormalement longtemps</li>
        <li>Les erreurs fréquentes dans la conception des API</li>
        <li>Comment éviter qu'un MVP devienne impossible à maintenir</li>
        <li>Quand refactorer et quand continuer à livrer</li>
        <li>Les signaux qu'une équipe a besoin d'un profil Fullstack autonome</li>
      </ul>

      <h3>DevOps / Cloud Engineer</h3>

      <ul>
        <li>Les signes d'une infrastructure devenue difficile à piloter</li>
        <li>Pourquoi les déploiements restent risqués malgré une CI/CD</li>
        <li>Les erreurs fréquentes lors d'une migration Kubernetes</li>
        <li>Comment réduire le temps passé à gérer les incidents</li>
        <li>Ce qui rend une plateforme réellement autonome pour les développeurs</li>
        <li>Les dépenses Cloud inutiles les plus fréquentes</li>
      </ul>

      <h3>Data Analyst / Data Engineer</h3>

      <ul>
        <li>Pourquoi deux dashboards peuvent afficher des chiffres différents</li>
        <li>Les signes d'un pipeline data fragile</li>
        <li>Comment construire une source de vérité fiable</li>
        <li>Pourquoi certains dashboards ne sont jamais utilisés</li>
        <li>Quand automatiser un reporting manuel</li>
        <li>Les erreurs classiques dans la définition des KPIs</li>
      </ul>

      <h3>Product Manager / Product Owner</h3>

      <ul>
        <li>Pourquoi une roadmap devient illisible</li>
        <li>Comment reconnaître un backlog qui n'a plus de valeur</li>
        <li>Les signes d'un delivery mal piloté</li>
        <li>Pourquoi certaines équipes terminent rarement leurs sprints</li>
        <li>Comment arbitrer lorsque tout le monde considère son sujet prioritaire</li>
        <li>La différence entre urgence réelle et urgence organisationnelle</li>
      </ul>


      <h2>2. Le contenu de visibilité</h2>

      <p>
        Son objectif principal est de <strong>te faire connaître</strong>.
      </p>

      <p>
        Il sert notamment à :
      </p>

      <ul>
        <li>toucher davantage de personnes ;</li>
        <li>créer de l'identification ;</li>
        <li>faire mémoriser ton nom ;</li>
        <li>montrer davantage ta personnalité ;</li>
        <li>augmenter progressivement la portée de ton profil.</li>
      </ul>

      <p>
        Il peut être plus personnel, plus narratif et plus accessible
        que ton contenu d'expertise.
      </p>

      <p>
        Il doit néanmoins rester cohérent avec l'image professionnelle
        que tu veux construire.
      </p>

      <div class="lesson-callout">
        <strong>La différence</strong>
        <p>
          Expertise : « cette personne comprend vraiment son sujet ».<br><br>
          Visibilité : « je connais cette personne, je vois régulièrement ses contenus
          et je me souviens d'elle ».
        </p>
      </div>

      <h3>Les formats intéressants</h3>

      <ul>
        <li>une histoire vécue ;</li>
        <li>une erreur ou un échec ;</li>
        <li>une opinion forte mais argumentée ;</li>
        <li>une observation sur le freelancing ou le travail ;</li>
        <li>un apprentissage personnel ;</li>
        <li>une comparaison avec une autre discipline ;</li>
        <li>une situation dans laquelle beaucoup de professionnels peuvent se reconnaître.</li>
      </ul>


      <h3>Template visibilité — Histoire</h3>

      <blockquote>
        [Hook qui crée de la curiosité]<br><br>

        Il y a [période], [situation concrète].<br><br>

        À ce moment-là, je pensais [ancienne croyance].<br><br>

        Puis [événement / problème].<br><br>

        J'ai compris quelque chose de simple : [apprentissage].<br><br>

        Depuis, [nouvelle manière de faire].<br><br>

        Et c'est probablement la principale leçon que je retiens de cette expérience.
      </blockquote>


      <h3>Template visibilité — Opinion</h3>

      <blockquote>
        [Opinion forte]<br><br>

        Pas parce que [mauvaise raison].<br>
        Mais parce que [vraie raison].<br><br>

        Je vois régulièrement [observation].<br><br>

        À mon sens, le bon réflexe est plutôt de [approche].<br><br>

        [Conclusion courte et mémorisable].
      </blockquote>


      <h3>Template visibilité — Avant / Après</h3>

      <blockquote>
        Avant : [situation].<br>
        Aujourd'hui : [situation opposée].<br><br>

        Entre les deux, je n'ai pas découvert une technique magique.<br><br>

        J'ai simplement [changement concret].<br><br>

        [Développement].<br><br>

        La différence vient rarement de [élément évident].<br>
        Elle vient souvent de [insight].
      </blockquote>


      <h2>Hooks de visibilité</h2>

      <p>
        Ici, le hook peut intéresser des personnes au-delà
        de ton expertise technique immédiate.
      </p>

      <h3>Développeur Frontend / React</h3>

      <ul>
        <li><strong>« J'ai déjà passé 3 heures à corriger un bug causé par une ligne de CSS. »</strong></li>
        <li><strong>« Le meilleur code que j'ai écrit cette année est du code que j'ai supprimé. »</strong></li>
        <li><strong>« J'ai longtemps pensé qu'être un bon développeur, c'était coder vite. »</strong></li>
        <li><strong>« Le bug le plus difficile que j'ai corrigé n'était pas technique. »</strong></li>
        <li><strong>« Il y a une compétence en développement qu'on ne m'a jamais apprise en formation. »</strong></li>
      </ul>

      <h3>Développeur Fullstack</h3>

      <ul>
        <li><strong>« Être Fullstack ne veut pas dire tout maîtriser. »</strong></li>
        <li><strong>« J'ai déjà cassé une feature en voulant améliorer le code. »</strong></li>
        <li><strong>« Le plus gros piège quand on sait toucher à tout : vouloir tout faire soi-même. »</strong></li>
        <li><strong>« J'ai longtemps confondu autonomie et solitude. »</strong></li>
        <li><strong>« La meilleure décision technique est parfois de ne rien changer. »</strong></li>
      </ul>

      <h3>DevOps / Cloud Engineer</h3>

      <ul>
        <li><strong>« À 2h du matin, personne ne trouve Kubernetes sexy. »</strong></li>
        <li><strong>« Un incident en production peut apprendre plus qu'une semaine de formation. »</strong></li>
        <li><strong>« J'ai longtemps pensé que plus d'automatisation voulait toujours dire moins de problèmes. »</strong></li>
        <li><strong>« Le DevOps, ce n'est pas empêcher tous les incidents. »</strong></li>
        <li><strong>« La meilleure infrastructure est souvent celle à laquelle personne ne pense. »</strong></li>
      </ul>

      <h3>Data Analyst / Data Engineer</h3>

      <ul>
        <li><strong>« J'ai déjà vu trois réunions partir en débat à cause d'un seul KPI. »</strong></li>
        <li><strong>« Avoir plus de données ne rend pas forcément une décision plus simple. »</strong></li>
        <li><strong>« Le chiffre le plus dangereux est parfois celui auquel tout le monde fait confiance. »</strong></li>
        <li><strong>« J'ai longtemps cru que mon travail était de produire des dashboards. »</strong></li>
        <li><strong>« Excel n'est pas le problème. Le problème, c'est parfois ce qu'on lui fait faire. »</strong></li>
      </ul>

      <h3>Product Manager / Product Owner</h3>

      <ul>
        <li><strong>« J'ai déjà passé une journée entière en réunion sans faire avancer le produit. »</strong></li>
        <li><strong>« Le plus dur en Product Management n'est pas de dire oui. »</strong></li>
        <li><strong>« J'ai longtemps cru qu'une bonne roadmap devait être précise. »</strong></li>
        <li><strong>« Une des meilleures décisions produit peut être de ne rien développer. »</strong></li>
        <li><strong>« Le backlog n'est pas une liste de promesses. »</strong></li>
      </ul>


      <h2>Idées de contenus de visibilité</h2>

      <h3>Développeur Frontend / React</h3>

      <ul>
        <li>Le bug absurde qui t'a pris plusieurs heures</li>
        <li>Une croyance que tu avais en début de carrière</li>
        <li>Ce que travailler avec des designers t'a appris</li>
        <li>Une fois où tu as beaucoup trop complexifié une solution</li>
        <li>Pourquoi tu préfères parfois supprimer du code qu'en écrire</li>
      </ul>

      <h3>Développeur Fullstack</h3>

      <ul>
        <li>Ce que signifie réellement être autonome</li>
        <li>Une erreur qui t'a appris à moins sur-engineerer</li>
        <li>Le dilemme entre vitesse et qualité</li>
        <li>Pourquoi savoir dire « je ne sais pas » est utile</li>
        <li>Ce que le freelancing t'a appris sur la responsabilité</li>
      </ul>

      <h3>DevOps / Cloud Engineer</h3>

      <ul>
        <li>Une histoire d'incident en production</li>
        <li>Ce que l'astreinte t'a appris</li>
        <li>Une automatisation qui a créé plus de problèmes qu'elle n'en a résolus</li>
        <li>Une erreur Cloud coûteuse ou particulièrement instructive</li>
        <li>Pourquoi la simplicité devient plus importante avec l'expérience</li>
      </ul>

      <h3>Data Analyst / Data Engineer</h3>

      <ul>
        <li>Une réunion où personne n'avait le même chiffre</li>
        <li>Le KPI le plus inutile que tu aies rencontré</li>
        <li>Une décision prise avec trop peu ou trop de données</li>
        <li>Pourquoi les métiers et les équipes data se comprennent parfois mal</li>
        <li>Ce que tu as appris en expliquant une analyse à un profil non-technique</li>
      </ul>

      <h3>Product Manager / Product Owner</h3>

      <ul>
        <li>Une feature que tu aurais préféré ne jamais construire</li>
        <li>Une décision difficile de priorisation</li>
        <li>Une fois où dire non a amélioré le produit</li>
        <li>Ce que le terrain t'a appris que les frameworks ne t'avaient pas appris</li>
        <li>Une erreur de roadmap</li>
        <li>Une situation absurde entre produit, tech et business</li>
      </ul>


      <h2>Comment combiner expertise et visibilité</h2>

      <p>
        Tu n'as pas besoin de choisir entre les deux.
      </p>

      <p>
        Ton profil peut alterner :
      </p>

      <ul>
        <li>des contenus ciblés qui rassurent tes prospects ;</li>
        <li>des contenus plus larges qui augmentent ta visibilité.</li>
      </ul>

      <p>
        Une base très simple peut être :
      </p>

      <blockquote>
        1 contenu d'expertise<br>
        1 contenu de visibilité<br>
        chaque semaine
      </blockquote>

      <p>
        Ce rythme n'est pas une obligation.
        La régularité compte davantage que le volume.
      </p>


      <h2>Comment choisir ton angle</h2>

      <p>
        Avant d'écrire, pose-toi simplement cette question :
      </p>

      <blockquote>
        Est-ce que je veux que ce post me fasse connaître,
        ou qu'il fasse comprendre pourquoi je suis pertinent ?
      </blockquote>

      <p>
        Si tu veux rassurer : pars d'un problème client.
      </p>

      <p>
        Si tu veux gagner en visibilité : pars d'une histoire,
        d'une observation ou d'une idée qui crée davantage d'identification.
      </p>


      <h2>Les erreurs à éviter</h2>

      <ul>
        <li>chercher à faire expertise et visibilité dans chaque post ;</li>
        <li>écrire uniquement pour l'algorithme ;</li>
        <li>utiliser des hooks spectaculaires sans rapport avec le contenu ;</li>
        <li>faire des posts techniques illisibles par ton client idéal ;</li>
        <li>transformer chaque publication en pitch commercial ;</li>
        <li>copier le style d'autres créateurs au point de perdre ta propre voix ;</li>
        <li>passer plusieurs heures à perfectionner chaque publication.</li>
      </ul>

      <div class="lesson-callout lesson-callout--strong">
        <strong>À retenir</strong>
        <p>
          Expertise = rassurer.<br>
          Visibilité = te faire connaître.<br><br>

          Les deux sont complémentaires :
          suffisamment de visibilité pour être découvert,
          suffisamment d'expertise pour donner confiance.
        </p>
      </div>
    `,
  },
]

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug)
}
