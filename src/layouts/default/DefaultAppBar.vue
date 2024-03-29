<template>
  <v-app-bar flat scroll-behavior="hide">
    <!-- Title -->
    <v-app-bar-title>
      <v-icon icon="mdi-account-check" />
      Daily Scrum Picker
    </v-app-bar-title>
    <!-- Add participant dialog -->
    <v-dialog v-model="dialogAddParticipant" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular mr-2" prepend-icon="mdi-account-multiple-plus"
          text="Add participant" variant="tonal" v-bind="activatorProps"
          :disabled="storeParticipants.isCounting"></v-btn>
      </template>
      <v-card title="Add a new participant" prepend-icon="mdi-account-multiple-plus">
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field v-model="firstName" label="First name*" placeholder="John"
                :rules="[rules.required]" maxlength="10" variant="underlined" required counter></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="trigram" label="Trigram*" placeholder="jdo" :rules="[rules.required]"
                maxlength="3" variant="underlined" counter required></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="dialogAddParticipant = false"></v-btn>
          <v-btn color="primary" text="Save" variant="tonal" @click="handleAddParticipant"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const dialogInfo = ref(false);
const dialogAddParticipant = ref(false);

const firstName = ref("");
const trigram = ref("");
const rules = {
  required: value => !!value || 'Field is required',
};

const theme = useTheme();

const handleDialogState = () => (dialogInfo.value = !dialogInfo.value);

const handleThemeState = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("userTheme", newTheme);
};

const handleAddParticipant = () => {
  storeParticipants.addParticipant(firstName.value, trigram.value);
  dialogAddParticipant.value = false;
  firstName.value = "";
  trigram.value = "";
};
</script>
