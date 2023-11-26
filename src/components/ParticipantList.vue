<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-row class="text-center">
        <v-col>
          <p class="text-h6 font-weight-bold">
            <v-icon icon="mdi-timer-sand"></v-icon>Remaining time
          </p>
          <p>
            <participant-list-countdown-timer />
          </p>
        </v-col>
        <v-divider class="" inset vertical></v-divider>
        <v-col>
          <p class="text-h6 font-weight-bold">
            <v-icon icon="mdi-account"></v-icon>Remaining participants
          </p>
          <span v-if="storeParticipants.getRemainingParticipantsLength == 0"
            >The daily is finished</span
          >
          <span v-else
            ><span class="text-error font-weight-bold">{{
              storeParticipants.getRemainingParticipantsLength
            }}</span>
            participants have to speak</span
          >
        </v-col>
        <v-divider class="" inset vertical></v-divider>
        <v-col>
          <p class="text-h6 font-weight-bold">
            <v-icon icon="mdi-account-settings"></v-icon>Last selected
            participant
          </p>
          <p>
            <span v-if="storeParticipants.getLastParticipantSelectedId"
              >It's your turn
              <span class="text-error font-weight-bold">{{
                getParticipantById(
                  storeParticipants.getLastParticipantSelectedId
                ).name.toUpperCase()
              }}</span></span
            >
            <span v-else>Not started yet</span>
          </p>
        </v-col>
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
import ParticipantListCountdownTimer from "./ParticipantCountdownTimer.vue";

const storeParticipants = useParticipantStore();

const getParticipantById = (id) => storeParticipants.getParticipantById(id);
const selectRandomParticipant = () => storeParticipants.selectRandomParticipant();
</script>
