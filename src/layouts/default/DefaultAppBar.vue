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
    <!-- Edit participant -->
    <v-btn 
      class="text-none font-weight-regular mr-2" 
      prepend-icon="mdi-account-multiple-minus"
      text="Edit" 
      variant="tonal"
    />
    <v-divider 
      class="mx-2 my-auto ms-3 me-2" 
      style="height: 20px;" 
      vertical 
    />
    <!-- Theme switcher -->
    <app-bar-theme-switcher-button />
    <!-- Info dialog -->
    <app-bar-info-dialog-button />
    <!-- Settings -->
    <v-btn icon="mdi-cog-outline" />
  </v-app-bar>
</template>

<script setup>

import AppBarAddParticipantDialogButton from "@/components/appbar/AppBarAddParticipantDialogButton.vue";
import AppBarInfoDialogButton from "@/components/appbar/AppBarInfoDialogButton.vue";
import AppBarThemeSwitcherButton from "@/components/appbar/AppBarThemeSwitcherButton.vue";

</script>
