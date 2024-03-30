<template>
  <transition-group 
    :css="false" 
    appear
    @enter="participantCardOnEnter" 
  >
    <v-col
      v-for="(participant, index) in storeParticipants.getParticipants"
      :key="participant.id"
      :data-index="index"
      cols="2"
    >
      <participant-list-card :participant="participant" />
    </v-col>
  </transition-group> 
</template>

<script setup>
import { ref } from "vue";

import { useParticipantStore } from "@/store/participant";

import ParticipantListCard from "@/components/participant/ParticipantListCard.vue";

import gsap from "gsap";

const storeParticipants = useParticipantStore();

const isFirstLoad = ref(true);

const participantCardOnEnter = (el, done) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      translateY: -30,
    },
    {
      opacity: 1,
      translateY: 0,
      duration: 1,
      delay: isFirstLoad.value ? el.dataset.index * 0.2 : 0,
      onComplete: () => {
        if (isFirstLoad.value) {
          isFirstLoad.value = false;
        }
        done();
      }
    }
  )
}
</script>
