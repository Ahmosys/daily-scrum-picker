<template>
  <v-btn 
    :icon="theme.global.current.value.dark
      ? 'mdi-weather-night'
      : 'mdi-weather-sunny'"
    @click="handleThemeState" 
  />
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

const handleThemeState = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("userTheme", newTheme);
};
</script>