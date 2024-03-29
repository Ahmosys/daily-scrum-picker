<template>
  <vue-countdown
    v-if="storeParticipants.getIsCounting"
    ref="countdownRef"
    v-slot="{ minutes, seconds }"
    :time="countdownTime" 
  >
    <span class="text-error font-weight-bold">{{ minutes }}</span>
    minutes and
    <span class="text-error font-weight-bold">{{ seconds }}</span>
    seconds
  </vue-countdown>
  <span v-else>Not started yet</span>
</template>

<script setup>
import { ref, watch } from "vue";
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const countdownTime = 15 * 60 * 1000;
const countdownRef = ref(null);

// Abort countdown when no more participants are left (pause)
watch(() => storeParticipants.getIsFinished,(isFinished) => {
    if (isFinished) {
      countdownRef.value.abort();
    }
  }
);
</script>
