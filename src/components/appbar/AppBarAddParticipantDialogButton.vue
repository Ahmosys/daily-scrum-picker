<template>
  <v-dialog 
    v-model="dialogIsOpened"
    max-width="600"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn 
        class="text-none font-weight-regular mr-2" 
        prepend-icon="mdi-account-multiple-plus"
        text="Add" 
        variant="tonal" 
        v-bind="activatorProps"
        :disabled="storeParticipants.isCounting" 
      />
    </template>
    <v-card 
      title="Add a new participant" 
      prepend-icon="mdi-account-multiple-plus"
      @keyup.enter="handleAddParticipant"
    >
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field 
              v-model="firstName" 
              label="First name*" 
              placeholder="John"
              :rules="[rules.required]" 
              maxlength="10" 
              variant="underlined"
              required 
              counter 
            />
          </v-col>
          <v-col cols="12">
            <v-text-field 
              v-model="trigram" 
              label="Trigram*" 
              placeholder="jdo" 
              :rules="[rules.required]"
              maxlength="3" 
              variant="underlined" 
              counter 
              required
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn 
          text="Close" 
          variant="plain"
          @click="setIsOpened" 
        />
        <v-btn 
          color="primary" 
          text="Save" 
          variant="tonal" 
          @click="handleAddParticipant" 
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const dialogIsOpened = ref(false);
const firstName = ref("");
const trigram = ref("");
const rules = {
  required: value => !!value || 'Field is required',
};

const setIsOpened = () => {
  dialogIsOpened.value = !dialogIsOpened.value;
};

const resetTextFields = () => {
  firstName.value = "";
  trigram.value = "";
};

const handleAddParticipant = () => {
  storeParticipants.addParticipant(firstName.value, trigram.value);
  setIsOpened();
  resetTextFields();
};
</script>