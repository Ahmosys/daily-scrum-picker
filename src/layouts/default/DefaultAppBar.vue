<template>
  <v-app-bar flat scroll-behavior="hide">
    <v-app-bar-title>
      <v-icon icon="mdi-account-check" />
      Daily Scrum Picker
    </v-app-bar-title>
    <v-btn icon="mdi-information-outline" @click="handleDialogState"></v-btn>
    <v-dialog v-model="dialog" width="512">
      <v-card title="Information" prepend-icon="mdi-information-outline">
        <v-card-text>
          This application was created by ? to help teams during daily scrum
          meetings. The aim is to randomly select a participant to speak and
          never have the same speaking order. If you have any questions or
          suggestions, please don't hesitate to contact me at my professional
          e-mail address.
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" block @click="handleDialogState">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);

const handleDialogState = () => (dialog.value = !dialog.value);
</script>
