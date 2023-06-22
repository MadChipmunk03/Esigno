<template>
    <div class="d-flex flex-column align-center pa-4">
        <v-img :src="require('@/assets/RobotHappy.png')" contain height="250"></v-img>
        <v-card-title class="font-weight-bold">Registrace proběhla úspěšně</v-card-title>
        <v-card-text class="text-center">Děkujeme váš profil byl úspěšně založen. Nyní můžete přejít do portálu Esigno.</v-card-text>
        <router-link :to="{ name: 'home' }">
            <v-btn color="primary" block>Přejít do Esigno</v-btn>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'RegistrationSuccessful',
});
</script>

<style scope lang="scss">

</style>