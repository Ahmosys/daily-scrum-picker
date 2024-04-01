<template>
  <v-dialog 
    v-model="dialogIsOpened"
    max-width="600"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn 
        class="text-none font-weight-regular mr-2" 
        prepend-icon="mdi-account-multiple-plus"
        text="Add" 
        variant="tonal" 
        v-bind="activatorProps"
        :disabled="storeParticipants.isCounting" 
      />
    </template>
    <v-form @submit="onSubmit">
      <v-card 
        title="Add a new participant" 
        prepend-icon="mdi-account-multiple-plus"
      >
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field 
                v-model="fields.firstName.value.value" 
                label="First name*" 
                placeholder="John"
                maxlength="10" 
                variant="underlined"
                :error-messages="fields.firstName.errorMessage.value" 
                counter 
              />
            </v-col>
            <v-col cols="12">
              <v-text-field 
                v-model="fields.trigram.value.value"
                label="Trigram*" 
                placeholder="jdo" 
                maxlength="3" 
                variant="underlined"
                :error-messages="fields.trigram.errorMessage.value" 
                counter
                @input="handleTrigramChange($event.target.value)"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn 
            text="Close" 
            variant="plain"
            @click="setIsOpened" 
          />
          <v-btn 
            color="primary" 
            text="Save" 
            variant="tonal" 
            type="submit"
          />
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
  <v-snackbar
    v-model="showSnackbar"
    location="bottom right"
    timeout="2000" 
  >
    Participant added successfully.
    <template #actions>
      <v-btn
        variant="text"
        @click="setShowSnackbar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref } from "vue";

import { useParticipantStore } from "@/store/participant";

import { useForm, useField } from "vee-validate";
import { toTypedSchema } from '@vee-validate/zod'
import { z } from "zod";

const storeParticipants = useParticipantStore();

const dialogIsOpened = ref(false);
const showSnackbar = ref(false);

const formSchema = toTypedSchema(
  z.object({
    firstName: z.string().min(1, { message: 'First name is required.' }).max(10, { message: 'First name must be at most 10 characters long.' }),
    trigram: z.string().length(3, { message: 'Trigram is required and must be exactly 3 characters long.' }) 
  })
);

const { handleSubmit, handleReset } = useForm({
  validationSchema: formSchema,
});

const fields = {
  firstName: useField("firstName", formSchema),
  trigram: useField("trigram", formSchema),
};

const onSubmit = handleSubmit((values) => {
  storeParticipants.addParticipant(values.firstName, values.trigram.toLowerCase());
  setShowSnackbar();
  setIsOpened();
  handleReset();
})

const handleTrigramChange = (value) => {
  // Force trigram to be lowercase
  fields.trigram.value.value = value.toLowerCase();
};

const setIsOpened = () => {
  dialogIsOpened.value = !dialogIsOpened.value;
};

const setShowSnackbar = () => {
  showSnackbar.value = !showSnackbar.value;
};
</script>
