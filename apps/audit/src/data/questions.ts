import type { Question } from '@/types/audit'

const scale = (labels: string[]) => labels.map((label, score) => ({ label, value: String(score), score }))

export const questions: Question[] = [
  {
    id: 'job',
    label: 'Quel est ton métier principal ?',
    type: 'choice',
    scored: false,
    required: true,
    answers: ['Développement', 'Data', 'Produit', 'Design', 'DevOps / Cloud', 'Cybersécurité', 'Autre'].map((label) => ({ label, value: label })),
  },
  {
    id: 'freelance_experience',
    label: 'Depuis combien de temps es-tu freelance ?',
    type: 'choice', scored: false, required: true,
    answers: ['Pas encore freelance', 'Moins d’un an', '1 à 3 ans', '3 à 7 ans', '7 ans et +'].map((label) => ({ label, value: label })),
  },
  {
    id: 'search_duration',
    label: 'Depuis combien de temps cherches-tu une mission ?',
    type: 'choice', scored: false, required: true,
    answers: [
      { label: 'Je ne cherche pas actuellement', value: 'not_searching' },
      { label: 'Moins d’un mois', value: 'less_1_month' },
      { label: '1 à 2 mois', value: '1_2_months' },
      { label: '2 à 4 mois', value: '2_4_months' },
      { label: 'Plus de 4 mois', value: '4_months_plus' },
    ],
  },
  {
    id: 'target_daily_rate', label: 'Quel est ton TJM cible ?', helper: 'En euros HT / jour.', type: 'number', scored: false, required: false,
  },
  {
    id: 'urgency',
    label: 'Dans combien de temps dois-tu idéalement signer ?',
    type: 'choice', scored: false, required: true,
    answers: [
      { label: 'Moins de 2 semaines', value: '2_weeks' },
      { label: 'Dans le mois', value: '1_month' },
      { label: 'Dans 2 à 3 mois', value: '2_3_months' },
      { label: 'Pas d’urgence particulière', value: 'no_urgency' },
    ],
  },

  { id: 'positioning_sentence', label: 'Quand on te demande ce que tu fais, arrives-tu à l’expliquer en une phrase claire ?', dimension: 'positionnement', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Non, j’ai du mal à l’expliquer', 'Je liste surtout mes compétences', 'Mon rôle et mes expertises sont clairs', 'J’explique clairement qui j’aide et sur quels sujets', 'Ma proposition est claire, spécifique et mémorisable']) },
  { id: 'target_clarity', label: 'Sais-tu précisément quel type de client ou d’entreprise tu veux cibler ?', dimension: 'positionnement', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Pas du tout', 'Je reste ouvert à presque tout', 'J’ai quelques préférences', 'J’ai une cible clairement définie', 'Je connais précisément ma cible, ses enjeux et les interlocuteurs à contacter']) },
  { id: 'differentiation', label: 'Ton positionnement permet-il de comprendre pourquoi on devrait te choisir plutôt qu’un freelance similaire ?', dimension: 'positionnement', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Non', 'Pas vraiment', 'J’ai quelques éléments différenciants', 'Oui, ma différence est assez claire', 'Oui, elle est claire et soutenue par des preuves concrètes']) },
  { id: 'mission_fit', label: 'Les missions que tu recherches sont-elles cohérentes avec ton expérience et tes preuves actuelles ?', dimension: 'positionnement', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Pas vraiment', 'Souvent assez éloignées de mon expérience', 'Cela dépend des opportunités', 'Oui, globalement', 'Oui, ma légitimité est immédiatement évidente']) },

  { id: 'value_explanation', label: 'Quand tu échanges avec un prospect, sais-tu expliquer le résultat concret que ton intervention peut apporter ?', dimension: 'offre', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Non, je parle surtout de mes compétences', 'J’explique surtout ce que je vais faire', 'J’arrive parfois à parler des bénéfices', 'Oui, je rattache mon travail à des résultats', 'Oui, avec des résultats très concrets adaptés au client']) },
  { id: 'proofs', label: 'As-tu des réalisations ou résultats précis pour prouver ta valeur ?', dimension: 'offre', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Aucun', 'Quelques expériences difficiles à présenter', 'Quelques exemples concrets', 'Plusieurs réalisations solides', 'Plusieurs preuves fortes, chiffrées et pertinentes pour ma cible']) },
  { id: 'rate_confidence', label: 'Ton TJM est-il construit et défendable ?', dimension: 'offre', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Je ne sais pas vraiment quoi facturer', 'Je me base surtout sur ce que proposent les clients', 'Je me suis basé sur le marché', 'Mon TJM est cohérent avec mon expérience et mon marché', 'Je peux clairement expliquer et défendre la valeur correspondant à mon TJM']) },
  { id: 'offer_filter', label: 'Face à une mission, sais-tu rapidement déterminer si elle correspond à ton offre ?', dimension: 'offre', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Non, j’accepte presque toutes les discussions', 'J’ai du mal à filtrer', 'J’ai quelques critères', 'Oui, j’ai des critères assez précis', 'Oui, je sais rapidement dire oui ou non selon le rôle, le contexte, le TJM et les enjeux']) },

  { id: 'linkedin_profile', label: 'Ton profil LinkedIn permet-il de comprendre immédiatement ce que tu proposes ?', dimension: 'visibilite', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Non / il n’est pas travaillé', 'Il ressemble surtout à un CV', 'Mon métier et mes compétences sont clairs', 'Ma cible, mon expertise et ma valeur sont claires', 'Il est construit pour transformer des visiteurs en opportunités']) },
  { id: 'platform_profiles', label: 'Tes profils sur les plateformes pertinentes sont-ils optimisés ?', helper: 'Malt, LeHibou, Collective, Free-Work…', dimension: 'visibilite', weight: 1, scored: true, required: true, type: 'choice', answers: scale(['Je n’en utilise aucune', 'J’ai des profils peu travaillés', 'Ils sont correctement remplis', 'Ils sont optimisés et cohérents avec mon positionnement', 'Ils sont différenciants et régulièrement entretenus']) },
  { id: 'social_proof', label: 'Lorsqu’un prospect consulte ton profil, trouve-t-il facilement des éléments qui rassurent sur ton expertise ?', dimension: 'visibilite', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Très peu', 'Principalement mon CV / mes expériences', 'Quelques recommandations ou réalisations', 'Plusieurs preuves crédibles', 'Un ensemble solide : recommandations, cas clients, projets, contenus ou réalisations']) },
  { id: 'inbound', label: 'Aujourd’hui, reçois-tu spontanément des demandes ou prises de contact professionnelles ?', dimension: 'visibilite', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Jamais', 'Très rarement', 'Quelques-unes par an', 'Plusieurs par mois', 'Régulièrement chaque semaine']) },

  { id: 'weekly_prospects', label: 'Combien de nouveaux prospects qualifiés contactes-tu en moyenne chaque semaine lorsque tu cherches une mission ?', dimension: 'prospection', weight: 3, scored: true, required: true, type: 'choice', answers: [
    { label: '0', value: 'none', score: 0 },
    { label: '1 à 5', value: 'low', score: 1 },
    { label: '6 à 15', value: 'medium', score: 2 },
    { label: '16 à 30', value: 'good', score: 3 },
    { label: 'Plus de 30', value: 'high', score: 4 },
  ] },
  { id: 'prospecting_regular', label: 'À quel point ta prospection est-elle régulière ?', dimension: 'prospection', weight: 3, scored: true, required: true, type: 'choice', answers: [
    { label: 'Je ne prospecte pas', value: 'none', score: 0 },
    { label: 'Seulement lorsque j’ai besoin d’une mission', value: 'reactive', score: 1 },
    { label: 'Par périodes', value: 'irregular', score: 2 },
    { label: 'Plusieurs fois par semaine', value: 'regular', score: 3 },
    { label: 'J’ai une routine définie et je la respecte', value: 'system', score: 4 },
  ] },
  { id: 'targeting_quality', label: 'Comment choisis-tu les personnes que tu contactes ?', dimension: 'prospection', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Je contacte un peu au hasard', 'Je contacte surtout les personnes qui recrutent', 'J’utilise quelques critères de ciblage', 'Je cible précisément entreprises + interlocuteurs', 'Je cible en fonction de signaux concrets indiquant un potentiel besoin']) },
  { id: 'message_personalization', label: 'Tes messages de prospection sont-ils personnalisés au prospect ?', dimension: 'prospection', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Même message pour tout le monde', 'Je change seulement le prénom ou l’entreprise', 'Je personnalise légèrement', 'Je m’appuie généralement sur le contexte du prospect', 'Chaque prise de contact part d’un élément pertinent et donne une vraie raison d’échanger']) },
  { id: 'followups', label: 'Relances-tu les prospects qui ne répondent pas ?', dimension: 'prospection', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Jamais', 'Rarement', 'Une fois de temps en temps', 'Généralement oui', 'Oui, j’ai une séquence ou un système de relance']) },
  { id: 'conversations_30d', label: 'Combien de conversations réellement liées à une potentielle mission as-tu eues au cours des 30 derniers jours ?', dimension: 'prospection', weight: 3, scored: true, required: true, type: 'choice', answers: [
    { label: '0', value: 'none', score: 0 },
    { label: '1 à 2', value: '1_2', score: 1 },
    { label: '3 à 5', value: '3_5', score: 2 },
    { label: '6 à 10', value: '6_10', score: 3 },
    { label: 'Plus de 10', value: '10_plus', score: 4 },
  ] },

  { id: 'discovery_first', label: 'Quand une opportunité apparaît, cherches-tu à comprendre le besoin avant de parler de ton profil ou de ton TJM ?', dimension: 'conversion', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Rarement', 'Je présente surtout mon expérience', 'Je pose quelques questions', 'Oui, j’essaie d’abord de comprendre le besoin', 'Oui, j’ai une vraie méthode de qualification']) },
  { id: 'business_problem', label: 'Lors d’un échange, sais-tu identifier le problème business ou opérationnel derrière la mission ?', dimension: 'conversion', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Non', 'Rarement', 'Parfois', 'Généralement', 'Oui, et je reformule ensuite ma valeur en fonction de ce problème']) },
  { id: 'rate_objection', label: 'Lorsqu’un prospect remet en question ton TJM, sais-tu le défendre ?', dimension: 'conversion', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Je baisse généralement mon tarif', 'Je suis assez mal à l’aise', 'J’arrive à donner quelques arguments', 'Oui, je sais défendre mon tarif', 'Oui, je rattache le tarif au contexte, au risque, aux résultats et aux alternatives']) },
  { id: 'next_step', label: 'Quand une opportunité n’avance plus, as-tu généralement une prochaine action définie ?', dimension: 'conversion', weight: 2, scored: true, required: true, type: 'choice', answers: scale(['Non', 'Rarement', 'Cela dépend', 'Généralement oui', 'Toujours : relance, décision attendue, date ou prochaine étape']) },
  { id: 'proposal_rate', label: 'Sur tes dernières opportunités sérieuses, à quelle fréquence es-tu arrivé jusqu’à une proposition concrète ou une validation finale ?', dimension: 'conversion', weight: 3, scored: true, required: true, type: 'choice', answers: scale(['Presque jamais', 'Rarement', 'Environ 1 fois sur 4', 'Environ 1 fois sur 2', 'La majorité du temps']) },

  {
    id: 'perceived_blocker',
    label: 'Selon toi, qu’est-ce qui bloque le plus ta recherche de mission aujourd’hui ?',
    helper: 'Cette réponse n’est pas scorée. Elle nous permet de comparer ton ressenti avec le diagnostic.',
    type: 'choice', scored: false, required: true,
    answers: ['Je ne sais pas quoi cibler', 'Mon positionnement', 'Mon profil / ma visibilité', 'Je n’ai pas assez d’opportunités', 'Peu de réponses à ma prospection', 'J’obtiens des échanges mais ils n’aboutissent pas', 'Mon TJM', 'Je manque de régularité', 'Je ne sais pas', 'Autre'].map((label) => ({ label, value: label })),
  },
]
