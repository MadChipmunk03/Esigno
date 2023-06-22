<template>
    <CenteredCard :cardWidth="cardWidth">
        <v-stepper v-model="logStep" style="background-color: transparent">
            <v-stepper-items>
                <v-stepper-content step="1">
                    <LoginStep @result="loginResult"  />
                </v-stepper-content>

                <v-stepper-content step="2">
                    <LoginSuccessful v-if="logResult" />
                    <LoginFailed v-else/>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </CenteredCard>
</template>

<script lang="ts">
import Vue from 'vue';
import CenteredCard from '@/components/CenteredCard.vue';
import LoginStep from '@/components/Login/LoginStep.vue';
import LoginSuccessful from '@/components/Login/LoginSuccessful.vue';
import LoginFailed from '@/components/Login/LoginFailed.vue';

export default Vue.extend({
    name: 'LoginView',
    components: { CenteredCard, LoginStep, LoginSuccessful, LoginFailed},
    data() {
        return {
            logStep: 1,
            logResult: true,
        };
    },
    computed: {
        cardWidth(): number {
            if(this.logStep === 2) return 400
            return 500;
        }
    },
    methods: {
        loginResult(result: boolean): void {
            this.logResult = result;
            this.logStep++;
        }
    }
});
</script>

<style scope lang="scss">

</style>