<template>
  <CenteredCard :cardWidth="400">
    <div class="d-flex flex-column align-center pa-8">
        <v-img :src="require('@/assets/RobotHappy.png')" contain height="250"></v-img>
        <v-card-title class="font-weight-bold">Výtejte v portálu Esigno</v-card-title>
        <v-row>
          <v-col>
            <router-link :to="{ name: 'register' }">
              <v-btn color="primary">Registrovat se</v-btn>
            </router-link>
          </v-col>
          <v-col>
            <router-link :to="{ name: 'login' }">
              <v-btn color="primary">Přihlásit se</v-btn>
            </router-link>
          </v-col>
        </v-row>
    </div>
  </CenteredCard>
</template>

<script lang="ts">
import Vue from 'vue';
import CenteredCard from '@/components/CenteredCard.vue';

export default Vue.extend({
  name: 'HomeView',
  components: { CenteredCard, }
});
</script>
