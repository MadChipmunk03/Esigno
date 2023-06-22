<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  // TO-DO uncomment for darkMode support
  // beforeMount() {
  //   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  //     this.$vuetify.theme.dark = true;
  // }
});
</script>

<style scope lang="scss">
html {
  min-height: 100%;
  overflow-y: auto;
}
body {
  min-height: 100%;
}
</style>