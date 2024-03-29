<template>
  <v-col
    v-for="participant in storeParticipants.getParticipants"
    :key="participant.id"
    cols="2"
  >
    <participant-list-card :participant="participant" />
  </v-col>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

import ParticipantListCard from "@/components/participant/ParticipantListCard.vue";

const storeParticipants = useParticipantStore();
</script>
