<template>
  <v-card
    class="text-center"
    prepend-icon="mdi-account"
    elevation="0"
    :border="true"
    :color="participantColor"
    :disabled="isParticipantDisabled"
  >
    <v-avatar
      :image="`https://i.pravatar.cc/250?u=${participant.name}`"
      size="100"
    />
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="12">
          <p class="text-h6 font-weight-bold">
            {{ participant.name }}
          </p>
        </v-col>
        <v-col cols="12">
          <p>{{ participant.nickname }}</p>
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

const isParticipantDisabled = computed(() => {
  const selected = isParticipantSelected.value;
  const lastParticipant = isLastParticipant.value;

  return selected ? !lastParticipant : false;
});

const participantColor = computed(() => {
  const selected = isParticipantSelected.value;
  const lastParticipant = isLastParticipant.value;

  return selected ? (lastParticipant ? "primary" : "grey-darken-3") : "";
});
</script>
