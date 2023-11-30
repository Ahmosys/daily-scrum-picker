<template>
  <v-card prepend-icon="mdi-account" :border="true" :color="participantColor" :disabled="participantDisabled" >
    <v-avatar
      :image="`https://i.pravatar.cc/250?u=${participant.name}`"
      size="100"
    ></v-avatar>
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="12">
          <p class="text-h6 font-weight-bold">{{ participant.name }}</p>
        </v-col>
        <v-col cols="12">
          <p>{{ participant.trigram }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const props = defineProps({
  participant: {
    type: Object,
    required: true,
  },
});


const isParticipantSelected = computed(() =>
  storeParticipants.isParticipantAlreadySelected(props.participant)
);
const isLastParticipant = computed(() =>
  storeParticipants.isLastParticipantSelected(props.participant)
);

const participantColor = computed(() => {
  const selected = isParticipantSelected.value;
  const lastParticipant = isLastParticipant.value;

  return selected
    ? lastParticipant
      ? "error"
      : "primary"
    : "";
});

const participantDisabled = computed(() => {
  const selected = isParticipantSelected.value;
  const lastParticipant = isLastParticipant.value;

  return selected ? !lastParticipant : false;
});
</script>

