<template>
  <participant-list-transition>
    <v-col
      v-for="(participant, index) in storeParticipants.getParticipants"
      :key="participant.id"
      :data-index="index"
      cols="2"
    >
      <participant-list-card :participant="participant" />
    </v-col>
  </participant-list-transition>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

import ParticipantListCard from "@/components/participant/ParticipantListCard.vue";
import ParticipantListTransition from "@/components/participant/ParticipantListTransition.vue";

const storeParticipants = useParticipantStore();
</script>
