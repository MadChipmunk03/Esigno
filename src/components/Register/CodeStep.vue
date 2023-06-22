<template>
    <div class="pa-1">
            <v-row>
                <v-col><h2>Zadejte kód</h2></v-col>
                <v-col><p class="float-right">Máte účet? Přihlásit se</p></v-col>
            </v-row>
            <v-card-text class="px-0">Potřebujeme ověřit vaši identitu, zadejte prosím ověřovací PIN kód, který jsme vám poslali na e-mail <span class="font-weight-bold">{{ email }}</span></v-card-text>

            <v-row class="mb-4">
                <v-col>
                    <v-row>  
                        <v-col class="d-flex justify-center pb-0 mt-4">
                            <PincodeInput :class="{'pincode-wrapper': invalidCode}" v-model="code"/>
                        </v-col>    
                    </v-row>
                    <v-row>
                        <v-col>
                            <p v-if="invalidCode" class="text-center mx-10 error--text">Nesprávný ověřovací kód. Prosím zkontrolujte jeho správnost nebo požádejte o nový.</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-btn block color="primary" :disabled="code.length !== 4" @click="verifyCode">Ověřit a pokračovat</v-btn>

            <v-divider class="my-4"/>

            <p class="mb-0">Nepřišel Vám e-mail? Prosím zkontrolujte spam.</p>
            <a class="text-decoration-underline" @click="resendCode">Zaslat znovu kód</a>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import PincodeInput from 'vue-pincode-input';

export default Vue.extend({
    name: 'CodeStep',
    props: {
        email: String
    },
    components: {PincodeInput},
    data() {
        return {
            code: '',
            invalidCode: false
        };
    },
    watch: {
        code: {
            handler(newVal): void {
                if(newVal.length === 4) this.verifyCode();
            }
        }
    },
    methods: {
        verifyCode(): void {
            axios.post(`https://userhw.sandbox.esigno.io/registration/${this.email}/verify`, {
                code: this.code
            })
            .then((response) => {
                console.log(response);
                if(response.status === 200) this.$emit('next-step');
            })
            .catch((error) => {
                console.log(error);
                if(error.response.status === 400) this.invalidCode = true
            });
        },
        resendCode(): void {
            console.error('🧨 Not Implemented')
        }
    }
});
</script>

<style scope lang="scss">
input.vue-pincode-input {
    font-size: 50px;
    min-width: 60px !important;
    margin: 0 15px;
    border-radius: 15px;
}
.pincode-wrapper input.vue-pincode-input {
    border: 2px solid var(--v-error-base) !important;
}
</style>