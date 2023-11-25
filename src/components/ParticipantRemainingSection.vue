<template>
  <v-col>
    <p class="text-h6 font-weight-bold">
      <v-icon icon="mdi-account"></v-icon> Remaining participants
    </p>
    <span v-if="remainingParticipantsLength === 0">
      The daily is finished
    </span>
    <span v-else>
      <span class="text-error font-weight-bold">{{
        remainingParticipantsLength
      }}</span>
      participants have to speak
    </span>
  </v-col>
</template>

<script>
const props = defineProps({
  remainingParticipantsLength: {
    type: Number,
    required: true,
  },
  participants: {
    type: Array,
    required: true,
  },
});

const getParticipantById = (id) =>
  participants.value.find((participant) => participant.id === id);
</script>