<template>
  <v-app-bar flat scroll-behavior="hide">
    <!-- Title -->
    <v-app-bar-title>
      <v-icon icon="mdi-account-check" />
      Daily Scrum Picker
    </v-app-bar-title>
    <!-- Add participant dialog -->
    <app-bar-add-participant-dialog-button />
    <!-- Theme switcher -->
    <v-btn 
      :icon="theme.global.current.value.dark
        ? 'mdi-weather-night'
        : 'mdi-weather-sunny'"
      @click="handleThemeState" 
    />
    <!-- Info dialog -->
    <app-bar-info-dialog-button />
  </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";

import AppBarAddParticipantDialogButton from "@/components/appbar/AppBarAddParticipantDialogButton.vue";
import AppBarInfoDialogButton from "@/components/appbar/AppBarInfoDialogButton.vue";

const theme = useTheme();

const handleThemeState = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("userTheme", newTheme);
};
</script>
