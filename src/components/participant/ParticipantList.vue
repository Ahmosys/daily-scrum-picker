<template>
  <participant-list-transition-group>
    <v-col
      v-for="(participant, index) in storeParticipants.getParticipants"
      :key="participant.id"
      :data-index="index"
      cols="2"
    >
      <participant-list-card :participant="participant" />
    </v-col>
  </participant-list-transition-group>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

import ParticipantListCard from "@/components/participant/ParticipantListCard.vue";
import ParticipantListTransitionGroup from "@/components/participant/ParticipantListTransitionGroup.vue";

const storeParticipants = useParticipantStore();
</script>