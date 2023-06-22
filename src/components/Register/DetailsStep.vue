<template>
    <div class="pa-1">
        <ValidationForm :handleSubmit="registerMail" @form="(vld) => validator = vld">
            <h2>Údaje k registrovanému účtu</h2>
            <v-card-text class="px-0">Pro úspěšnou registraci prosím vyplňte následující údaje k vašemu účtu.</v-card-text>
            <v-row class="my-1">
                <v-col>
                    <ValidationProvider  rules="required">
                        <v-text-field v-model="form.givenName" solo label="Jméno" />
                    </ValidationProvider>
                </v-col>
                <v-col>
                    <ValidationProvider  rules="required">
                        <v-text-field v-model="form.surname" solo label="Příjmení" />
                    </ValidationProvider>
                </v-col>
            </v-row>
            <v-row no-gutters class="mb-4">
                <v-col>
                    <ValidationProvider  rules="required">
                        <v-text-field v-model="form.company" solo label="Společnost" />
                    </ValidationProvider>
                </v-col>
            </v-row>
            <p>Registrací vyjadřujete souhlas s <a href="https://example.com/">všeobecnými obchodními podmínkami</a> a <a href="https://example.com/">zásadami ochrany osobních údajů</a>.</p>
            <v-btn block color="primary" type="submit" :disabled="!formIsValid">Pokračovat</v-btn>
        </ValidationForm>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import ValidationForm from '../ValidationForm.vue';
import { ValidationProvider  } from 'vee-validate';

export default Vue.extend({
    name: 'EmailStep',
    components: {ValidationForm, ValidationProvider},
    props: {
        email: String
    },
    data() {
        return {
            form: {
                givenName: '',
                surname: '',
                company: ''
            },
            formIsValid: false,
            validator: {} as any,
        };
    },
    watch: {
        form: {
            async handler(newVal) {
                this.formIsValid = await this.validator.validate({silent: true});
            },
            deep: true
        }
    },
    methods: {
        registerMail(): void {
            axios.post(`https://userhw.sandbox.esigno.io/registration/${this.email}/details`, {
                givenName: this.form.givenName,
                surname: this.form.surname,
                company: this.form.company
            })
            .then((response) => {
                if(response.status == 200) this.$emit('result', true)
                else this.$emit('result', false)
            })
            .catch((error) => {
                this.$emit('result', false)
            });
        }
    }
});
</script>

<style scope lang="scss">

</style>