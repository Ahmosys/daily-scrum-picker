<template>
  <v-col>
    <p class="text-h6 font-weight-bold">
      <v-icon icon="mdi-account-settings"></v-icon>Last selected participant
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
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const getParticipantById = (id) => storeParticipants.getParticipantById(id);
</script>
