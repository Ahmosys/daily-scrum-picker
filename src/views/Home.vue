<template>
  <v-container class="fill-height">
    <v-responsive
      v-if="storeParticipants.getParticipantsLength > 0"
      class="align-center fill-height"
    >
      <v-row class="text-center">
        <participant-remaining-time-section />
        <v-divider 
          inset 
          vertical 
        />
        <participant-last-selected-section />
        <v-divider 
          inset 
          vertical 
        />
        <participant-remaining-section />
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

import { onMounted } from "vue";

import ParticipantList from "@/components/participant/ParticipantList.vue";
import ParticipantSelectionButton from "@/components/participant/ParticipantSelectionButton.vue";
import ParticipantRemainingSection from "@/components/participant/ParticipantRemainingSection.vue";
import ParticipantLastSelectedSection from "@/components/participant/ParticipantLastSelectedSection.vue";
import ParticipantRemainingTimeSection from "@/components/participant/ParticipantRemainingTimeSection.vue";

const storeParticipants = useParticipantStore();

const selectRandomParticipant = () =>
  storeParticipants.selectRandomParticipant();

onMounted(() => {
  storeParticipants.loadParticipantsFromLocalStorage();
});
</script>
