<template>
  <v-card :color="participantColor" prepend-icon="mdi-account" border="">
    <v-img
      :src="`https://api.dicebear.com/7.x/pixel-art/svg?seed=${participant.name}`"
      height="100"
    ></v-img>
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="12">
          <p class="text-h6 font-weight-bold">{{ participant.name }}</p>
        </v-col>
        <v-col cols="12">
          <p>{{ participant.trigram }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const props = defineProps({
  participant: {
    type: Object,
    required: true,
  },
});

const participantColor = computed(() => {
  // If the participant is already selected and is the last one
  if (
    isParticipantAlreadySelected(props.participant) &&
    isLastParticipantSelected(props.participant)
  ) {
    return "error";
  // If the participant is already selected but is not the last one
  } else if (isParticipantAlreadySelected(props.participant)) {
    return "primary";
  }
  // If the participant was not selected yet
  return "";
});

const isParticipantAlreadySelected = (participant) =>
  storeParticipants.isParticipantAlreadySelected(participant);

const isLastParticipantSelected = (participant) =>
  storeParticipants.isLastParticipantSelected(participant);
</script>
