<template>
    <CenteredCard :cardWidth="cardWidth">
        <v-stepper v-model="regStep" style="background-color: transparent">
            <v-stepper-items>
                <v-stepper-content step="1" v-model="form.email">
                    <EmailStep @add-mail="addMail" />
                </v-stepper-content>

                <v-stepper-content step="2">
                    <CodeStep :email="form.email" @next-step="regStep++" />
                </v-stepper-content>

                <v-stepper-content step="3">
                    <PasswordStep :email="form.email" @add-password="addPassword" />
                </v-stepper-content>

                <v-stepper-content step="4">
                    <DetailsStep :email="form.email" @result="registrationResult" />
                </v-stepper-content>

                <v-stepper-content step="5">
                    <RegistrationSuccessful v-if="regResult" @go-back="regStep = 1"/>
                    <RegistrationFailed v-else @go-back="regStep = 1"/>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </CenteredCard>
</template>

<script lang="ts">
import Vue from 'vue';
import CenteredCard from '@/components/CenteredCard.vue';
import EmailStep from '@/components/Register/EmailStep.vue';
import CodeStep from '@/components/Register/CodeStep.vue';
import PasswordStep from '@/components/Register/PasswordStep.vue';
import DetailsStep from '@/components/Register/DetailsStep.vue';
import RegistrationSuccessful from '@/components/Register/RegistrationSuccessful.vue';
import RegistrationFailed from '@/components/Register/RegistrationFailed.vue'

export default Vue.extend({
    name: 'RegisterView',
    components: { CenteredCard, EmailStep, CodeStep, PasswordStep, DetailsStep, RegistrationSuccessful, RegistrationFailed },
    data() {
        return {
            regStep: 1,
            regResult: false,
            form: {
                email: '',
                passwordHash: '',
            }
        };
    },
    computed: {
        cardWidth(): number {
            if(this.regStep === 5) return 400
            return 500;
        }
    },
    methods: {
        addMail(email: string): void {
            this.form.email = email;
            this.regStep++;
        },
        addPassword(passwordHash: string): void {
            this.form.passwordHash = passwordHash;
            this.regStep++;
        },
        registrationResult(result: boolean): void {
            this.regResult = result;
            this.regStep++;
        }
    }
});
</script>

<style scope lang="scss">

</style>