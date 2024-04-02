<template>
  <v-col>
    <p class="text-h6">
      <v-icon icon="mdi-account" />Remaining participants
    </p>
    <span v-if="storeParticipants.areAllParticipantsSelected">The daily is finished</span>
    <span v-else>
      <span class="text-primary font-weight-bold">{{ storeParticipants.getRemainingParticipantsLength }}</span>
      participants have to speak
    </span>
  </v-col>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();
</script>
