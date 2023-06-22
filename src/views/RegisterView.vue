<template>
    <div>
        <CenteredCard>
            <v-stepper v-model="regStep">
                <v-stepper-items>
                    <v-stepper-content step="1" v-model="form.email">
                        <EmailStep @add-mail="addMail" />
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <CodeStep :email="form.email" @next-step="regStep++" />
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <PasswordStep @add-password="addPassword" />
                    </v-stepper-content>

                    <v-stepper-content step="4">
                        <DetailsStep @next-step="regStep++" />
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </CenteredCard>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CenteredCard from '@/components/CenteredCard.vue';
import EmailStep from '@/components/Register/EmailStep.vue';
import CodeStep from '@/components/Register/CodeStep.vue';
import PasswordStep from '@/components/Register/PasswordStep.vue';
import DetailsStep from '@/components/Register/DetailsStep.vue';

export default Vue.extend({
    name: 'RegisterView',
    components: {CenteredCard, EmailStep, CodeStep, PasswordStep, DetailsStep},
    data() {
        return {
            message: 'RegisterView',
            regStep: 3,
            form: {
                email: 'a@b.cz',
                passwordHash: '',
                // givenName: String,
                // surname: String,
                // company: String
            }
        };
    },
    methods: {
        addMail(email: string): void {
            console.log('mail');
            this.form.email = email;
            this.regStep++;
        },
        addPassword(passwordHash: string): void {
            this.form.passwordHash = passwordHash;
        }
    }
});
</script>

<style scope lang="scss">

</style>