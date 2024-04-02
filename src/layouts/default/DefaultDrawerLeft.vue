<template>
  <v-navigation-drawer 
    :width="350"
  >
    <div class="">
      <participant-remaining-time-section />
      <v-divider length="65%" />
      <participant-last-selected-section />
      <v-divider length="65%" />
      <participant-remaining-section />
    </div>
    <template #append>
      <div class="pa-3">
        <participant-selection-button @select="selectRandomParticipant" />
        <participant-reset-button class="ml-2" />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import ParticipantRemainingTimeSection from "@/components/participant/ParticipantRemainingTimeSection.vue";
import ParticipantRemainingSection from "@/components/participant/ParticipantRemainingSection.vue";
import ParticipantLastSelectedSection from "@/components/participant/ParticipantLastSelectedSection.vue";
import ParticipantSelectionButton from "@/components/participant/ParticipantSelectionButton.vue";
import ParticipantResetButton from "@/components/participant/ParticipantResetButton.vue";

import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const selectRandomParticipant = () => {
  storeParticipants.selectRandomParticipant();
};
</script>