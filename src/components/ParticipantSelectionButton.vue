<template>
    <v-btn @click="handleSelection" :loading="storeParticipants.getIsLoading" color="primary">
        {{ buttonText }}
    </v-btn>
</template>

<script setup>
import { computed } from 'vue';
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const buttonText = computed(() => {
  return storeParticipants.getRemainingParticipantsLength === 0 ? "Reset" : "Pick a random participant";
});

const emits = defineEmits(['select']);

const handleSelection = () => {
    emits('select');
};
</script>