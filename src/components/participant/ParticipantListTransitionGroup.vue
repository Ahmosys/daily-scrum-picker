<template>
  <transition-group 
    :css="false" 
    appear
    @enter="onEnter" 
  >
    <slot />
  </transition-group>
</template>
  
<script setup>
import { ref } from "vue";
import gsap from "gsap";

const isFirstLoad = ref(true);

const onEnter = (el, done) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      translateY: -50,
    },
    {
      opacity: 1,
      translateY: 0,
      duration: 0.5,
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
  