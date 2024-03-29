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
    <v-btn :icon="theme.global.current.value.dark
      ? 'mdi-weather-night'
      : 'mdi-weather-sunny'
      " @click="handleThemeState"></v-btn>
    <!-- Info dialog -->
    <v-btn icon="mdi-information-outline" @click="handleDialogState"></v-btn>
    <v-dialog v-model="dialogInfo" width="512">
      <v-card title="Information" prepend-icon="mdi-information-outline">
        <v-card-text>
          This application was created by HRO to help teams during daily scrum
          meetings. The aim is to randomly select a participant to speak and
          never have the same speaking order. If you have any questions or
          suggestions, please don't hesitate to contact me at my professional
          e-mail address.
        </v-card-text>
        <v-card-actions>
          <v-btn variant="plain" block @click="handleDialogState">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

import AppBarAddParticipantDialogButton from "@/components/appbar/AppBarAddParticipantDialogButton.vue";
 
const dialogInfo = ref(false);

const theme = useTheme();

const handleDialogState = () => (dialogInfo.value = !dialogInfo.value);

const handleThemeState = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("userTheme", newTheme);
};
</script>
