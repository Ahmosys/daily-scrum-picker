<template>
  <v-col>
    <p class="text-h6 font-weight-bold">
      <v-icon icon="mdi-timer-sand" />Remaining time
    </p>
    <p>
      <participant-countdown-timer />
    </p>
  </v-col>
</template>

<script setup>
import ParticipantCountdownTimer from '@/components/participant/ParticipantCountdownTimer.vue';
</script>
