import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid"; 

export const useParticipantStore = defineStore({
  id: "participant",
  state: () => ({
    participants: [],
    remainingParticipants: [],
    lastParticipantSelectedId: null,
    isLoading: false,
    isCounting: false,
    isFinished: false,
    loadingTime: 1500,
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
        }, this.loadingTime);
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
    addParticipant(name, nickname) {
      const newParticipant = { 
        id: uuidv4(),
        name: name,
        nickname: nickname
      };
      this.participants.push(newParticipant);
      this.remainingParticipants.push(newParticipant);
      this.saveParticipantsToLocalStorage();
    },
    removeParticipantById(id) {
      const indexToRemove = this.participants.findIndex(
        (participant) => participant.id === id
      );
      this.participants.splice(indexToRemove, 1);
      this.remainingParticipants = [...this.participants];
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
