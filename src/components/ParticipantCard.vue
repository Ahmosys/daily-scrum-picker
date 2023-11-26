<template>
  <v-card :color="isParticipantAlreadySelected(props.participant) ? 'primary' : ''" prepend-icon="mdi-account">
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
          {{ participant.trigram }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const props = defineProps({
  participant: {
    type: Object,
    required: true,
  },
});

const isParticipantAlreadySelected = (participant) =>
  storeParticipants.isParticipantAlreadySelected(participant);

const isLastParticipantSelected = (participant) =>
  storeParticipants.isLastParticipantSelected(participant);
</script>
