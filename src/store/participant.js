import { defineStore } from "pinia";

export const useParticipantStore = defineStore({
  id: "participant",
  state: () => ({
    participants: [
      { id: 1, name: "Antonin", trigram: "afo" },
      { id: 2, name: "Christophe", trigram: "cda" },
      { id: 3, name: "Hugo", trigram: "hro" },
      { id: 4, name: "Karine", trigram: "ksi" },
      { id: 5, name: "Kiki", trigram: "cde" },
      { id: 6, name: "Michael", trigram: "mil" },
      { id: 7, name: "Nicolas", trigram: "nmi" },
      { id: 8, name: "Philippe", trigram: "pst" },
      { id: 9, name: "Salim", trigram: "skf" },
      { id: 10, name: "Vincent", trigram: "vml" },
      { id: 11, name: "John", trigram: "jdo" },
      { id: 12, name: "Carole", trigram: "cpt" },
    ],
    remainingParticipants: [
      { id: 1, name: "Antonin", trigram: "afo" },
      { id: 2, name: "Christophe", trigram: "cda" },
      { id: 3, name: "Hugo", trigram: "hro" },
      { id: 4, name: "Karine", trigram: "ksi" },
      { id: 5, name: "Kiki", trigram: "cde" },
      { id: 6, name: "Michael", trigram: "mil" },
      { id: 7, name: "Nicolas", trigram: "nmi" },
      { id: 8, name: "Philippe", trigram: "pst" },
      { id: 9, name: "Salim", trigram: "skf" },
      { id: 10, name: "Vincent", trigram: "vml" },
      { id: 11, name: "John", trigram: "jdo" },
      { id: 12, name: "Carole", trigram: "cpt" },
    ],
    lastParticipantSelectedId: null,
    isLoading: false,
    isCounting: false,
  }),
  getters: {
    getRemainingParticipantsLength: (state) => state.remainingParticipants.length,
    getParticipantsLength: (state) => state.participants.length,
    getRemainingParticipants: (state) => state.remainingParticipants,
    getParticipants: (state) => state.participants,
    getParticipantById: (state) => (id) => {
      return state.participants.find((participant) => participant.id === id);
    },
    getLastParticipantSelected: (state) => {
      const lastParticipantSelected = state.participants.find(
        (participant) => participant.id === state.lastParticipantSelectedId
      );
      return lastParticipantSelected ? lastParticipantSelected : null;
    },
    getLastParticipantSelectedId: (state) => state.lastParticipantSelectedId,
    getIsLoading: (state) => state.isLoading,
    getIsCounting: (state) => state.isCounting,
    isParticipantAlreadySelected(state) {
      return (participant) =>
        !state.remainingParticipants.some((p) => p.id === participant.id);
    },
    isLastParticipantSelected(state) {
      return (participant) =>
        participant.id === state.lastParticipantSelectedId;
    },
  },
  actions: {
    selectRandomParticipant() {
      if (!this.isLoading) {
        this.isLoading = true;
        this.startCountdown();
        setTimeout(() => {
          if (this.remainingParticipants.length > 0) {
            this.removeRandomParticipant();
          } else {
            this.resetSession();
          }
          this.isLoading = false;
        }, 2000);
      }
    },
    removeRandomParticipant() {
      const index = Math.floor(
        Math.random() * this.remainingParticipants.length
      );
      const randomParticipantId = this.remainingParticipants[index].id;
      this.lastParticipantSelectedId = randomParticipantId;
      const indexToRemove = this.remainingParticipants.findIndex(
        (participant) => participant.id === randomParticipantId
      );
      this.remainingParticipants.splice(indexToRemove, 1);
    },
    startCountdown() {
      if (this.remainingParticipants.length === this.participants.length) {
        this.isCounting = true;
      }
    },
    resetSession() {
      this.$reset();
    },
  },
});
