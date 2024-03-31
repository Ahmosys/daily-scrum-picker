<template>
  <v-btn
    :loading="storeParticipants.getIsLoading"
    color="primary"
    @click="handleSelection"
  >
    {{ buttonText }}
  </v-btn>
</template>

<script setup>
import { computed } from "vue";
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const buttonText = computed(() => {
  return storeParticipants.areAllParticipantsSelected
    ? "Reset"
    : "Pick a random participant";
});

const emits = defineEmits(["select"]);

const handleSelection = () => {
  emits("select");
};
</script>
