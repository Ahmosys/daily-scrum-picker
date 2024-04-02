<template>
  <participant-list-transition-group>
    <v-col
      v-for="(participant, index) in storeParticipants.getParticipants"
      :key="participant.id"
      :data-index="index"
      cols="3"
    >
      <participant-list-card 
        :participant="participant"
        class="participant-card"
      />
    </v-col>
  </participant-list-transition-group>
</template>

<script setup>
import { watch } from "vue";
import gsap from "gsap";

import ParticipantListCard from "@/components/participant/ParticipantListCard.vue";
import ParticipantListTransitionGroup from "@/components/participant/ParticipantListTransitionGroup.vue";

import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const animateParticipantCards = () => {
  gsap.to(".participant-card", {
    duration: 1,
    ease: "back.out(1.7)",
    scale: 0.9,
    stagger: {
      from: "random",
      amount: 0.5,
    },
    onComplete: () => {
      gsap.to(".participant-card", {
        ease: "back.out(1.7)",
        scale: 1,
      });
    }
  });
};

watch(
  () => storeParticipants.isLoading,
  (newValue, oldValue) => {
    if (newValue && !oldValue) {
      animateParticipantCards();
    }
  }
);
</script>