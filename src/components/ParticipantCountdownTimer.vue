<template>
    <vue-countdown v-if="storeParticipants.getIsCounting" :time="COUNTDOWN_TIME" v-slot="{ minutes, seconds }">
        <span class="text-error font-weight-bold">{{ minutes }}</span>
        minutes and
        <span class="text-error font-weight-bold">{{ seconds }}</span>
        seconds
    </vue-countdown>
    <span v-else>Not started yet</span>
</template>

<script setup>
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const COUNTDOWN_TIME = 15 * 60 * 1000; // In milliseconds (15 minutes)
</script>