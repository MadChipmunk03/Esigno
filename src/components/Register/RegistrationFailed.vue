<template>
    <div class="d-flex flex-column align-center pa-4">
        <v-img :src="require('@/assets/RobotSad.png')" contain height="250"></v-img>
        <v-card-title class="font-weight-bold text-h5">Registrace se nezdařila</v-card-title>
        <v-card-text class="text-center">Vás profil se nepodařilo založit z důvodu chyby na serveru. Prosím opakujte proces znovu nebo nás kontaktujte na e-mail <span class="font-weight-bold">podpora@esigno.com</span>.</v-card-text>
        <v-btn color="primary" block @click="goBack">Zkusit znovu</v-btn>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'RegistrationFailed',
    methods: {
        goBack(): void {
            this.$emit('go-back');
        }
    }
});
</script>

<style scope lang="scss">

</style>