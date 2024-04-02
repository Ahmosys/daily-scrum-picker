<template>
  <v-btn
    color="primary"
    variant="flat"
    :loading="storeParticipants.getIsLoading"
    :disabled="storeParticipants.areAllParticipantsSelected"
    @click="handleSelection"
  >
    Pick
  </v-btn>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const emits = defineEmits(["select"]);

const handleSelection = () => {
  emits("select");
};
</script>
