<script setup lang="ts">
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'
</script>

<template>
  <LegalPageLayout
    title="Mentions légales"
    description="Informations relatives à l’éditeur, à l’hébergement et à l’utilisation du site Acquisition."
    updated-at="19 août 2026"
  >
    <section>
      <h2>1. Éditeur du site</h2>

      <div class="mt-5 space-y-2">
        <p>Le site <strong>Acquisition</strong> est édité par :</p>

        <p>
          <strong>Altruisme</strong><br />
          Société par actions simplifiée unipersonnelle (SASU)<br />
          Capital social : <strong>500 €</strong><br />
          Siège social : <strong>14 RUE BAUSSET, 75015 PARIS</strong><br />
          SIREN : <strong>999318686</strong><br />
          RCS : <strong>999 318 6986 R.C.S Paris</strong>
        </p>

        <p>
          Adresse email :
          <a href="mailto:TON_EMAIL">contact@altruisme.dev</a>
        </p>

        <p>
          Directeur de la publication :
          <strong>Nicolas Gadeyne</strong>.
        </p>
      </div>
    </section>

    <section>
      <h2>2. Hébergement</h2>

      <div class="mt-5 space-y-2">
        <p>Le site est hébergé par :</p>

        <p>
          <strong>GANDI</strong><br />
          Adresse : <strong> 63-65 boulevard Masséna, 75013 Paris.</strong><br />
          Site internet : <strong>Gandi.net</strong>
        </p>
      </div>
    </section>

    <section>
      <h2>3. Propriété intellectuelle</h2>

      <div class="mt-5 space-y-4">
        <p>
          L’ensemble des contenus présents sur le site, notamment les textes, guides, éléments
          graphiques, logos, vidéos, ressources et supports pédagogiques, est protégé par les règles
          applicables en matière de propriété intellectuelle.
        </p>

        <p>
          Sauf mention contraire, ces contenus sont la propriété d’Altruisme. Toute reproduction,
          représentation, modification, diffusion ou exploitation, totale ou partielle, sans
          autorisation préalable est interdite, sauf dans les cas autorisés par la loi.
        </p>
      </div>
    </section>

    <section>
      <h2>4. Responsabilité</h2>

      <div class="mt-5 space-y-4">
        <p>
          Les informations publiées sur Acquisition ont une vocation informative et pédagogique.
          Elles ne constituent pas une garantie de résultat ni un conseil juridique, fiscal ou
          financier individualisé.
        </p>

        <p>
          Malgré le soin apporté aux contenus, Altruisme ne peut garantir que l’ensemble des
          informations disponibles sur le site soit exempt d’erreur ou constamment à jour.
        </p>
      </div>
    </section>

    <section>
      <h2>5. Liens externes</h2>

      <p class="mt-5">
        Le site peut contenir des liens vers des services ou sites tiers. Altruisme n’exerce aucun
        contrôle sur leur contenu et ne peut être tenu responsable de leur disponibilité, de leurs
        pratiques ou des informations qu’ils diffusent.
      </p>
    </section>

    <section>
      <h2>6. Données personnelles</h2>

      <p class="mt-5">
        Les modalités de collecte et de traitement des données personnelles sont détaillées dans la
        <RouterLink to="/politique-de-confidentialite"> politique de confidentialité </RouterLink>.
      </p>
    </section>

    <section>
      <h2>7. Cookies</h2>

      <p class="mt-5">
        Les informations relatives aux cookies et autres traceurs utilisés sur le site sont
        disponibles dans la
        <RouterLink to="/cookies"> politique de gestion des cookies </RouterLink>.
      </p>
    </section>
  </LegalPageLayout>
</template>
