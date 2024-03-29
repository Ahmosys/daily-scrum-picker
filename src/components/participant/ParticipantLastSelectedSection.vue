<template>
  <v-col>
    <p class="text-h6 font-weight-bold">
      <v-icon icon="mdi-flag-checkered" />Last selected participant
    </p>
    <p>
      <span v-if="storeParticipants.getLastParticipantSelectedId">
        It's your turn
        <span class="text-error font-weight-bold">{{ lastSelectedParticipantName }}</span>
      </span>
      <span v-else>Not started yet</span>
    </p>
  </v-col>
</template>

<script setup>
import { computed } from "vue";
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const lastSelectedParticipantName = computed(() => {
  return storeParticipants.getLastParticipantSelected.name.toUpperCase();
});
</script>
