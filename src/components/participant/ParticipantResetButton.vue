<template>
  <v-btn
    color="error"
    :disabled="!storeParticipants.isCounting"
    @click="storeParticipants.resetSession"
  > 
    Reset
  </v-btn>
</template>
  
<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();
</script>
