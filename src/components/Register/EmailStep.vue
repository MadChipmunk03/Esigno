<template>
    <div class="pa-1">
        <ValidationForm :handleSubmit="registerMail" @form="(vld) => validator = vld">
            <v-row>
                <v-col><h2>Registrace</h2></v-col>
                <v-col><p class="float-right">Máte účet? Přihlásit se</p></v-col>
            </v-row>
            <v-card-text class="px-0">Na e-mail Vám bude zaslán ověřovací kód. Po ověření prosím pokračujte v dalších krocích registrace.</v-card-text>
            <ValidationProvider  rules="required|email" v-slot="{ errors }">
                <v-text-field v-model="email" solo label="Email" :error-messages="errors" />
            </ValidationProvider>
            <v-btn block color="primary" type="submit" :disabled="!formIsValid">Pokračovat</v-btn>

            <MessageBox v-if="messageBox.show" :message="messageBox.message" :type="messageBox.type" />
        </ValidationForm>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { PropType } from 'vue';
import Vue from 'vue';
import ValidationForm from '../ValidationForm.vue';
import { ValidationProvider  } from 'vee-validate';
import MessageBox from '../MessageBox.vue';
import { MessageTypes } from '@/types/all'

export default Vue.extend({
    name: 'EmailStep',
    components: {ValidationForm, ValidationProvider, MessageBox},
    data() {
        return {
            email: '',
            formIsValid: false,
            validator: {} as any,
            messageBox: {
                show: false,
                message: 'Účet se zadaným e-mailem existuje, prosím přihlašte se nebo změňte heslo.',
                type: MessageTypes.Warning
            }
        };
    },
    watch: {
        email: {
            async handler(newVal) {
                this.formIsValid = await this.validator.validate({silent: true});
            }
        }
    },
    methods: {
        registerMail(): void {
            axios.post('https://userhw.sandbox.esigno.io/registration', {
                email: this.email
            })
            .then((response) => {
                console.log(response);
                if(response.status == 200) this.$emit('add-mail', this.email);
            })
            .catch((error) => {
                // console.log('🧨', error);
                if(error.response.status == 400) this.messageBox.show = true;
            });
        }
    }
});
</script>

<style scope lang="scss">

</style>