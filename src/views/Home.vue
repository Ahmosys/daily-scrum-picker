<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <div v-if="storeParticipants.getParticipantsLength > 0">
        <v-row class="text-center">
          <participant-remaining-time-section />
          <v-divider inset vertical />
          <participant-last-selected-section />
          <v-divider inset vertical />
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
      </div>
      <div 
        v-else 
        class="text-center"
      >
        <v-col cols="12">
          <p class="text-h3 font-weight-bold">
            Hey there! 👋
          </p>
          <p class="text-h6 font-weight-regular">
            To start, add your first participant by clicking on the button in the navigation bar. 
          </p>
        </v-col>
      </div>
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
