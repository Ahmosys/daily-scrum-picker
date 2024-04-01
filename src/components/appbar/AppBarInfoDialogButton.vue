<template>
  <v-dialog 
    v-model="dialogIsOpened" 
    width="512"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn 
        icon="mdi-information-outline"
        v-bind="activatorProps"
      />
    </template>
    <v-card 
      title="Information" 
      prepend-icon="mdi-information-outline"
    >
      <v-card-text>
        This application was created by HRO to help teams during daily scrum
        meetings. The aim is to randomly select a participant to speak and
        never have the same speaking order. If you have any questions or
        suggestions, please don't hesitate to contact me at my professional
        e-mail address.
      </v-card-text>
      <v-card-actions>
        <v-btn 
          variant="plain" 
          block
          @click="setIsOpened"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialogIsOpened = ref(false);

const setIsOpened = () => {
  dialogIsOpened.value = !dialogIsOpened.value;
};
</script>