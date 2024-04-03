<template>
  <v-container>
    <v-responsive>
      <div v-if="storeParticipants.getParticipantsLength > 0">
        <v-row>
          <participant-list />
        </v-row>
      </div>
      <div 
        v-else
        class="text-center"
      >
        <v-col cols="12">
          <p 
            ref="greetingText" 
            class="text-h3 font-weight-bold greeting"
          >
            Hey there! 👋
          </p>
          <p class="text-h6 font-weight-regular">
            To start, add your first participant by clicking on the button in the navigation bar. 
          </p>
        </v-col>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import gsap from "gsap";
import SplitType from 'split-type'
import confetti from "canvas-confetti";

import ParticipantList from "@/components/participant/ParticipantList.vue";

import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();
const greetingText = ref(null);

const triggerConfetti = () => {
  confetti({
    particleCount: 300,
    spread: 360,
    origin: {
      y : 0.5
    },
  });
};

onMounted(() => {
  storeParticipants.loadParticipantsFromLocalStorage();
  const splitGreetingText = new SplitType(greetingText.value, { types: "chars" });
  gsap.from(splitGreetingText.chars, {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.05,
  });
});

// Watch for changes in the areAllParticipantsSelected property
// and trigger the confetti animation when all participants are selected
watch(
  () => storeParticipants.areAllParticipantsSelected,
  (newValue, oldValue) => {
    if (newValue && !oldValue) {
      triggerConfetti();
    }
  }
);
</script>

<style scoped>
.greeting {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>