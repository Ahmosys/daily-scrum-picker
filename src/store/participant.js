import { defineStore } from "pinia";

export const useParticipantStore = defineStore({
  id: "participant",
  state: () => ({
    participants: [],
    remainingParticipants: [],
    lastParticipantSelectedId: null,
    isLoading: false,
    isCounting: false,
    isFinished: false,
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
    getIsFinished: (state) => state.remainingParticipants.length === 0,
    isParticipantAlreadySelected(state) {
      return (participant) =>
        !state.remainingParticipants.some((p) => p.id === participant.id);
    },
    isLastParticipantSelected(state) {
      return (participant) =>
        participant.id === state.lastParticipantSelectedId;
    },
    areAllParticipantsSelected(state) {
      return state.remainingParticipants.length === 0;
    }
  },
  actions: {
    selectRandomParticipant() {
      if (!this.isLoading) {
        this.isLoading = true;
        this.startCountdown();
        setTimeout(() => {
          if (this.remainingParticipants.length > 0) {
            this.removeRandomParticipant();
          }
          this.isLoading = false;
        }, 1000);
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
    addParticipant(name, trigram) {
      const newParticipant = { 
        id: this.participants.length + 1,
        name: name,
        trigram: trigram
      };
      this.participants.push(newParticipant);
      this.remainingParticipants.push(newParticipant);
      this.saveParticipantsToLocalStorage();
    },
    saveParticipantsToLocalStorage() {
      localStorage.setItem('participants', JSON.stringify(this.participants));
    },
    loadParticipantsFromLocalStorage() {
      const savedParticipants = localStorage.getItem('participants');
      if (savedParticipants) {
        this.participants = JSON.parse(savedParticipants);
        this.remainingParticipants = [...this.participants];
      }
    },
    startCountdown() {
      if (this.remainingParticipants.length === this.participants.length) {
        this.isCounting = true;
      }
    },
    resetSession() {
      this.lastParticipantSelectedId = null;
      this.isLoading = false;
      this.isCounting = false;
      this.isFinished = false;
      this.remainingParticipants = [...this.participants];
    },
  },
});
