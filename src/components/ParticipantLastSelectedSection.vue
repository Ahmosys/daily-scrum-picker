<template>
    <v-col>
      <p class="text-h6 font-weight-bold">
        <v-icon icon="mdi-account-settings"></v-icon> Last selected participant
      </p>
      <p>
        <span v-if="lastParticipantSelectedId">
          It's your turn <span class="text-error font-weight-bold">{{ getParticipantNameById(lastParticipantSelectedId).toUpperCase() }}</span>
        </span>
        <span v-else>
          Not started yet
        </span>
      </p>
    </v-col>
  </template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  lastParticipantSelectedId: {
    type: Number,
    required: true,
  },
});
</script>
