<template>
    <div class="pa-1">
        <ValidationForm :handleSubmit="registerMail" @form="(vld) => validator = vld">
            <v-row>
                <v-col><h2>Tvorba hesla</h2></v-col>
                <v-col><p class="float-right">Máte účet? Přihlásit se</p></v-col>
            </v-row>
            <v-card-text class="px-0">Děkujeme za vaše ověření. Nyní si můžete nastavit heslo. Dbejte prosím, aby heslo bylo dostatečně silné a neobsahovalo vaše iniciály či jiné snadno uhodnutelné slova.</v-card-text>
            <ValidationProvider  rules="required|min:10|incLetters|incNumber|notMail" v-slot="{ errors }" ref="passwordValidation">
                <v-text-field v-model="password" solo type="password" name="password" :error-messages="errors" />
                <!-- <ul>
                    <li v-for="error in errors.all()" :key="error">{{ error }}</li>
                </ul> -->
            </ValidationProvider>
            <v-btn block color="primary" type="submit" :disabled="!formIsValid">Pokračovat</v-btn>
        </ValidationForm>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import ValidationForm from '../ValidationForm.vue';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
    name: 'PasswordStep',
    props: {
        email: String
    },
    components: {ValidationForm, ValidationProvider},
    data() {
        return {
            password: '',
            formIsValid: false,
            validator: {} as any,
        };
    },
    watch: {
        password: {
            async handler(newVal) {
                console.log(this.$refs.passwordValidation);
                this.formIsValid = await this.validator.validate({silent: true});
            }
        }
    },
    methods: {
        registerMail(): void {
            axios.post(`https://userhw.sandbox.esigno.io/registration/${this.email}/password`, {
                password: this.password
            })
            .then((response) => {
                console.log(response);
                if(response.status == 200) this.$emit('add-password', this.password);
            })
            .catch((error) => {
                console.log('🧨', error);
            });
        }
    }
});
</script>

<style scope lang="scss">

</style>