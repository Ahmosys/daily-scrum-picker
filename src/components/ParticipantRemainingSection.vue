<template>
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
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();
</script>
