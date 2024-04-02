<template>
  <v-btn
    color="error"
    variant="flat"
    :disabled="!storeParticipants.isCounting || storeParticipants.isLoading"
    @click="storeParticipants.resetSession"
  > 
    Reset
  </v-btn>
</template>
  
<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

</script>
