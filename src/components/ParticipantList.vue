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
        <v-col
          v-for="participant in storeParticipants.getParticipants"
          :key="participant.id"
          cols="2"
        >
          <participant-card :participant="participant" />
        </v-col>
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

import ParticipantCard from "./ParticipantCard.vue";
import ParticipantSelectionButton from "./ParticipantSelectionButton.vue";
import ParticipantRemainingSection from "./ParticipantRemainingSection.vue";
import ParticipantLastSelectedSection from "./ParticipantLastSelectedSection.vue";
import ParticipantRemainingTimeSection from "./ParticipantRemainingTimeSection.vue";

const storeParticipants = useParticipantStore();

const selectRandomParticipant = () =>
  storeParticipants.selectRandomParticipant();
</script>
