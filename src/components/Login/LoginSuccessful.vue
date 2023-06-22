<template>
    <div class="d-flex flex-column align-center pa-4">
        <v-img :src="require('@/assets/RobotHappy.png')" contain height="250"></v-img>
        <v-card-title class="font-weight-bold">Přihlášení proběhlo úspěšně</v-card-title>
        <v-card-text class="text-center">Prosím vyčkejte na přesměrování....</v-card-text>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LoginSuccessful',
});
</script>

<style scope lang="scss">

</style>