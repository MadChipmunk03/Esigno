<template>
    <div class="d-flex flex-column align-center pa-4">
        <v-img :src="require('@/assets/RobotSad.png')" contain height="250"></v-img>
        <v-card-title class="font-weight-bold text-h5">Přihlášení se nezdařilo</v-card-title>
        <v-card-text class="text-center">Přihlášení neproběhlo z důvodu chyby na serveru. Prosím opakujte proces znovu nebo nás kontaktujte na e-mail <span class="font-weight-bold">podpora@esigno.com</span>.</v-card-text>
        <v-btn color="primary" block>Zkusit znovu</v-btn>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LoginFailed',
});
</script>

<style scope lang="scss">

</style>