<template>
  <v-app-bar 
    flat 
    scroll-behavior="hide"  
    class="border-b"
  >
    <!-- Title -->
    <v-app-bar-title>
      <v-icon icon="mdi-account-check" />
      Daily Scrum Picker
    </v-app-bar-title>
    <!-- Add participant dialog -->
    <app-bar-add-participant-dialog-button />
    <!-- Edit participant btn -->
    <app-bar-edit-participant-button />
    <!-- Divider -->
    <app-bar-divider />
    <!-- Theme switcher -->
    <app-bar-theme-switcher-button />
    <!-- Info dialog -->
    <app-bar-info-dialog-button />
    <!-- Settings btn -->
    <app-bar-settings-button />
  </v-app-bar>
</template>

<script setup>

import AppBarAddParticipantDialogButton from "@/components/appbar/AppBarAddParticipantDialogButton.vue";
import AppBarEditParticipantButton from "@/components/appbar/AppBarEditParticipantButton.vue";
import AppBarSettingsButton from "@/components/appbar/AppBarSettingsButton.vue";
import AppBarInfoDialogButton from "@/components/appbar/AppBarInfoDialogButton.vue";
import AppBarThemeSwitcherButton from "@/components/appbar/AppBarThemeSwitcherButton.vue";
import AppBarDivider from "@/components/appbar/AppBarDivider.vue";

</script>