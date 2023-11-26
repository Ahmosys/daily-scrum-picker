<template>
  <v-col>
    <p class="text-h6 font-weight-bold">
      <v-icon icon="mdi-timer-sand"></v-icon>Remaining time
    </p>
    <p>
      <participant-countdown-timer />
    </p>
  </v-col>
</template>

<script setup>
import ParticipantCountdownTimer from './ParticipantCountdownTimer.vue';
</script>
