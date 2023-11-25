<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-row class="text-center">
        <v-col>
          <p class="text-h6 font-weight-bold">
            <v-icon icon="mdi-timer-sand"></v-icon>Remaining time
          </p>
          <p>
            <vue-countdown
              v-if="isCounting"
              :time="15 * 60 * 1000"
              v-slot="{ minutes, seconds }"
            >
            <span class="text-error font-weight-bold">{{ minutes }}</span> minutes and <span class="text-error font-weight-bold">{{ seconds }}</span> seconds
            </vue-countdown>
            <span v-else>Not started yet</span>
          </p>
        </v-col>
        <v-divider class="" inset vertical></v-divider>
        <v-col>
          <p class="text-h6 font-weight-bold">
            <v-icon icon="mdi-account"></v-icon>Remaining participants
          </p>
          <span v-if="remainingParticipants.length == 0"
            >The daily is finished</span
          >
          <span v-else
            ><span class="text-error font-weight-bold">{{ remainingParticipants.length }}</span> participants have to speak</span
          >
        </v-col>
        <v-divider class="" inset vertical></v-divider>
        <v-col>
          <p class="text-h6 font-weight-bold">
            <v-icon icon="mdi-account-settings"></v-icon>Last selected participant
          </p>
          <p>
            <span v-if="lastParticipantSelectedId"
              >It's your turn <span class="text-error font-weight-bold">{{ getParticipantById(lastParticipantSelectedId).name.toUpperCase() }}</span></span
            >
            <span v-else>Not started yet</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col
          v-for="participant in participants"
          :key="participant.id"
          cols="2"
        >
          <participant-card
            :participant="participant"
            :is-already-selected="isParticipantAlreadySelected(participant)"
            :is-last-selected="isLastParticipantSelected(participant)"
          />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <participant-selection-button
            :loading="isLoading"
            :remaining-participants-length="remainingParticipants.length"
            @select="selectRandomParticipant"
          />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

import ParticipantCard from "./ParticipantCard.vue";
import ParticipantSelectionButton from "./ParticipantSelectionButton.vue";

const participants = ref([
  { id: 1, name: "Antonin", trigram: "afo" },
  { id: 2, name: "Christophe", trigram: "cda" },
  { id: 3, name: "Hugo", trigram: "hro" },
  { id: 4, name: "Karine", trigram: "ksi" },
  { id: 5, name: "Kiki", trigram: "cde" },
  { id: 6, name: "Michael", trigram: "mil" },
  { id: 7, name: "Nicolas", trigram: "nmi" },
  { id: 8, name: "Philippe", trigram: "pst" },
  { id: 9, name: "Salim", trigram: "skf" },
  { id: 10, name: "Vincent", trigram: "vml" },
  { id: 11, name: "John", trigram: "jdo" },
  { id: 12, name: "Carole", trigram: "cpt" },
]);

const remainingParticipants = ref([...participants.value]);
const lastParticipantSelectedId = ref(null);
const isLoading = ref(false);
const isCounting = ref(false);

const isParticipantAlreadySelected = (participant) =>
  !remainingParticipants.value.some((p) => p.id === participant.id);

const isLastParticipantSelected = (participant) =>
  participant.id === lastParticipantSelectedId.value;

const getParticipantById = (id) =>
  participants.value.find((participant) => participant.id === id);

const selectRandomParticipant = () => {
  if (!isLoading.value) {
    isLoading.value = true;
    startCountdown();
    setTimeout(() => {
      if (remainingParticipants.value.length > 0) {
        removeRandomParticipant();
      } else {
        resetGame();
      }
      isLoading.value = false;
    }, 2000);
  }
};

const removeRandomParticipant = () => {
  const index = Math.floor(Math.random() * remainingParticipants.value.length);
  const randomParticipantId = remainingParticipants.value[index].id;
  lastParticipantSelectedId.value = randomParticipantId;

  const indexToRemove = remainingParticipants.value.findIndex(
    (participant) => participant.id === randomParticipantId
  );

  remainingParticipants.value.splice(indexToRemove, 1);
};

const startCountdown = () => {
  if (remainingParticipants.value.length === participants.value.length) {
    isCounting.value = true;
  }
};

const stopCountdown = () => {
  isCounting.value = false;
};

const resetGame = () => {
  stopCountdown();
  remainingParticipants.value = [...participants.value];
  lastParticipantSelectedId.value = null;
};  
</script>
