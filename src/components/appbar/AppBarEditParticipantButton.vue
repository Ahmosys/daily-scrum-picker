<template>
  <v-dialog 
    v-model="dialogIsOpened"
    max-width="700"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn 
        class="text-none font-weight-regular mr-2" 
        prepend-icon="mdi-account-multiple-minus"
        text="Edit" 
        variant="tonal" 
        v-bind="activatorProps"
        :disabled="storeParticipants.isCounting" 
      />
    </template>
    <v-card 
      title="Edit a participant" 
      prepend-icon="mdi-account-multiple-minus"
    >
      <v-card-text>
        <v-data-table 
          :items="storeParticipants.getParticipants" 
          :headers="headers"
        >
          <template #item.actions="{ item }">
            <v-icon
              class="me-2"
              size="small"
              color="primary"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              color="error"
              @click="deleteParticipant(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn 
          text="Close" 
          variant="plain"
          @click="setIsOpened" 
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

import { useParticipantStore } from "@/store/participant";

const storeParticipants = useParticipantStore();

const dialogIsOpened = ref(false);

const headers = ref([
  { title: "First Name", key: "name" },
  { title: "Nickname", key: "nickname" },
  { title: "Actions", key: "actions", sortable: false },
]);

const setIsOpened = () => {
  dialogIsOpened.value = !dialogIsOpened.value;
};

const deleteParticipant = (participant) => {
    storeParticipants.removeParticipantById(participant.id);
};
</script>
