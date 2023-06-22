<template>
    <v-container class="pa-0">
        <v-row align="center" no-gutters style="height: 100vh;">
        <v-spacer />
        <v-col>
            <v-card :width="cardWidth" elevation="12" color="#F7F9FA">
                <slot></slot>
            </v-card>
        </v-col>
        <v-spacer />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'CenteredCard',
    props: {
        cardWidth: {
            type: Number,
            default: 500
        }
    }
});
</script>

<style scope lang="scss">

</style>