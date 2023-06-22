<template>
    <v-container class="pa-0">
        <v-row align="center" no-gutters style="height: 100vh;">
        <v-spacer />
        <v-col>
            <v-card width="500" elevation="12">
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
    data() {
        return {
            message: 'CenteredCard'
        };
    },
});
</script>

<style scope lang="scss">

</style>