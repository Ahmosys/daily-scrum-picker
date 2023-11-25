<template>
    <v-btn @click="handleSelection" :loading="loading" color="primary">
        {{ buttonText }}
    </v-btn>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
    loading: {
        type: Boolean,
        required: true,
        default: false,
    },
    remainingParticipantsLength: {
        type: Number,
        required: true,
    },
});

const buttonText = computed(() => {
  return props.remainingParticipantsLength === 0 ? "Reset" : "Pick a random participant";
});

const emits = defineEmits(['select']);

const handleSelection = () => {
    emits('select');
};
</script>