<template>
  <v-btn 
    class="text-none font-weight-regular mr-2" 
    prepend-icon="mdi-account-multiple-minus"
    text="Edit" 
    variant="tonal"
    :disabled="storeParticipants.isCounting || storeParticipants.getParticipantsLength === 0"
  />
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();
</script>