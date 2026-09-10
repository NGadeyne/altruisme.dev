<script setup lang="ts">
import LegalPageLayout from '@/components/legal/LegalPageLayout.vue'
</script>

<template>
  <LegalPageLayout
    title="Politique de confidentialité"
    description="Cette politique explique quelles données personnelles peuvent être collectées sur Acquisition et comment elles sont utilisées."
    updated-at="19 août 2026"
  >
    <section>
      <h2>1. Responsable du traitement</h2>

      <div class="mt-5 space-y-4">
        <p>Le responsable des traitements de données réalisés via le site Acquisition est :</p>

        <p>
          <strong>Altruisme</strong><br />
          SASU<br />
          Adresse : <strong>14 RUE BAUSSET, 75015 PARIS</strong><br />
          Email :
          <a href="mailto:TON_EMAIL">contact@altruisme.dev</a>
        </p>
      </div>
    </section>

    <section>
      <h2>2. Données susceptibles d’être collectées</h2>

      <div class="mt-5 space-y-4">
        <p>Selon les services que tu utilises, nous pouvons notamment traiter :</p>

        <ul class="list-disc space-y-2 pl-5">
          <li>ton nom et ton prénom ;</li>
          <li>ton adresse email ;</li>
          <li>ton numéro de téléphone lorsqu’il est communiqué ;</li>
          <li>les informations que tu renseignes lors d’une prise de rendez-vous ;</li>
          <li>
            les informations renseignées lors d’une inscription à une masterclass ou à une formation
            ;
          </li>
          <li>les informations nécessaires à la gestion d’une commande ou d’un accompagnement ;</li>
          <li>
            certaines données techniques relatives à ta navigation, selon les outils utilisés sur le
            site.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>3. Finalités et bases légales</h2>

      <div class="mt-6 overflow-x-auto">
        <table class="w-full min-w-[620px] text-left text-sm">
          <thead>
            <tr class="border-b border-[#4f7774]/15 text-[#46504d]">
              <th class="py-3 pr-6 font-semibold">Traitement</th>

              <th class="py-3 pr-6 font-semibold">Finalité</th>

              <th class="py-3 font-semibold">Base légale</th>
            </tr>
          </thead>

          <tbody class="text-[#64706c]">
            <tr class="border-b border-[#4f7774]/10">
              <td class="py-4 pr-6">Prise de rendez-vous</td>

              <td class="py-4 pr-6">Organiser et gérer un échange avec toi</td>

              <td class="py-4">Mesures précontractuelles / intérêt légitime selon le contexte</td>
            </tr>

            <tr class="border-b border-[#4f7774]/10">
              <td class="py-4 pr-6">Masterclass</td>

              <td class="py-4 pr-6">
                Gérer ton inscription et t’envoyer les informations liées au live
              </td>

              <td class="py-4">Exécution de ta demande</td>
            </tr>

            <tr class="border-b border-[#4f7774]/10">
              <td class="py-4 pr-6">Formation / accompagnement</td>

              <td class="py-4 pr-6">
                Gérer la relation contractuelle et fournir les services achetés
              </td>

              <td class="py-4">Exécution du contrat</td>
            </tr>

            <tr>
              <td class="py-4 pr-6">Mesure d’audience</td>

              <td class="py-4 pr-6">
                Comprendre l’utilisation du site et améliorer son fonctionnement
              </td>

              <td class="py-4">Consentement lorsqu’il est requis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>4. Destinataires des données</h2>

      <div class="mt-5 space-y-4">
        <p>
          Les données sont accessibles uniquement aux personnes et prestataires qui en ont besoin
          pour les finalités décrites ci-dessus.
        </p>

        <p>
          Selon les fonctionnalités utilisées, certains traitements peuvent notamment impliquer des
          prestataires tels que :
        </p>

        <ul class="list-disc space-y-2 pl-5">
          <li>Calendly pour la prise de rendez-vous ;</li>
          <li>YouTube lorsqu’une vidéo intégrée est affichée ;</li>
          <li>le prestataire d’hébergement du site ;</li>
          <li>les futurs prestataires de paiement ou d’emailing utilisés.</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>5. Durée de conservation</h2>

      <div class="mt-5 space-y-4">
        <p>
          Les données ne sont conservées que pendant la durée nécessaire aux finalités pour
          lesquelles elles ont été collectées, puis archivées ou supprimées conformément aux
          obligations légales applicables.
        </p>

        <p>
          Les durées précises peuvent varier selon qu’il s’agit d’un simple prospect, d’un
          participant à une masterclass ou d’un client.
        </p>
      </div>
    </section>

    <section>
      <h2>6. Tes droits</h2>

      <div class="mt-5 space-y-4">
        <p>
          Selon les traitements concernés, tu peux notamment disposer d’un droit d’accès, de
          rectification, d’effacement, d’opposition, de limitation et, lorsque les conditions sont
          réunies, d’un droit à la portabilité de tes données.
        </p>

        <p>
          Tu peux exercer tes droits en écrivant à :
          <a href="mailto:TON_EMAIL"> TON_EMAIL </a>.
        </p>

        <p>
          Tu disposes également du droit d’introduire une réclamation auprès de la CNIL si tu
          considères que le traitement de tes données ne respecte pas la réglementation applicable.
        </p>
      </div>
    </section>

    <section>
      <h2>7. Transferts hors Union européenne</h2>

      <p class="mt-5">
        Certains prestataires utilisés peuvent traiter des données depuis des pays situés hors de
        l’Union européenne. Lorsque cela est le cas, ces transferts doivent être encadrés par les
        mécanismes prévus par la réglementation applicable en matière de protection des données.
      </p>
    </section>

    <section>
      <h2>8. Mise à jour de cette politique</h2>

      <p class="mt-5">
        Cette politique peut être modifiée afin de tenir compte de l’évolution du site, des services
        proposés, des prestataires utilisés ou de la réglementation applicable.
      </p>
    </section>
  </LegalPageLayout>
</template>
