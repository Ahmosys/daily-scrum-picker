<template>
  <v-app-bar 
    flat 
    scroll-behavior="hide"
  >
    <!-- Title -->
    <v-app-bar-title>
      <v-icon icon="mdi-account-check" />
      Daily Scrum Picker
    </v-app-bar-title>
    <!-- Add participant dialog -->
    <app-bar-add-participant-dialog-button />
    <!-- Theme switcher -->
    <app-bar-theme-switcher-button />
    <!-- Info dialog -->
    <app-bar-info-dialog-button />
  </v-app-bar>
</template>

<script setup>

import AppBarAddParticipantDialogButton from "@/components/appbar/AppBarAddParticipantDialogButton.vue";
import AppBarInfoDialogButton from "@/components/appbar/AppBarInfoDialogButton.vue";
import AppBarThemeSwitcherButton from "@/components/appbar/AppBarThemeSwitcherButton.vue";

</script>
