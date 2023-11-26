<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-row class="text-center">
        <participant-remaining-time-section />
        <v-divider inset vertical></v-divider>
        <participant-remaining-section />
        <v-divider inset vertical></v-divider>
        <participant-last-selected-section />
      </v-row>
      <v-row class="text-center">
        <participant-list />
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <participant-selection-button @select="selectRandomParticipant" />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

import ParticipantList from "@/components/ParticipantList.vue";
import ParticipantSelectionButton from "@/components/ParticipantSelectionButton.vue";
import ParticipantRemainingSection from "@/components/ParticipantRemainingSection.vue";
import ParticipantLastSelectedSection from "@/components/ParticipantLastSelectedSection.vue";
import ParticipantRemainingTimeSection from "@/components/ParticipantRemainingTimeSection.vue";

const storeParticipants = useParticipantStore();

const selectRandomParticipant = () =>
  storeParticipants.selectRandomParticipant();
</script>
