<template>
  <v-col
    v-for="participant in storeParticipants.getParticipants"
    :key="participant.id"
    cols="2"
  >
    <participant-card :participant="participant" />
  </v-col>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

import ParticipantCard from "@/components/participant/ParticipantCard.vue";

const storeParticipants = useParticipantStore();
</script>
