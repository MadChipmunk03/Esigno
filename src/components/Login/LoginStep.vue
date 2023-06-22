<template>
    <div class="pa-1">
        <v-row class="mb-2">
            <v-col cols="4"><h2>Přihlášení</h2></v-col>
            <v-col cols="8"><p class="float-right">Jste nový uživatel? <router-link :to="{ name: 'register' }">Registrovat se</router-link></p></v-col>
        </v-row>

        <v-text-field :outlined="invalidLogin" v-model="form.email" class="my-4" :class="{'error-input': invalidLogin}" solo label="E-mail" />
        <v-text-field 
            v-model="form.password"
            :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            class="my-4" 
            :class="{'error-input': invalidLogin}" 
            @click:append="toggleShowPassword" 
            label="Heslo" 
            :outlined="invalidLogin" 
            solo 
            :type="showPassword ? 'text': 'password'" 
        />
        <v-checkbox v-model="form.rememberLogin" class="my-4" label="Zapamatovat přihlášení" ></v-checkbox>
        <v-btn block color="primary" type="submit" @click="registerMail">Pokračovat</v-btn>

        <MessageBox v-if="messageBox.show" :message="messageBox.message" :type="messageBox.type" />
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import MessageBox from '../MessageBox.vue';
import { MessageTypes } from '@/types/all'

export default Vue.extend({
    name: 'LoginStep',
    components: { MessageBox },
    data() {
        return {
            invalidLogin: false,
            showPassword: false,
            form: {
                email: '',
                password: '',
                rememberLogin: false
            },
            messageBox: {
                show: false,
                message: 'Zadali jste nesprávné přihlašovací údaje.',
                type: MessageTypes.Error
            }
        };
    },
    beforeMount() {
        //fulfill "remember me"
        if(localStorage.getItem('email') != null) {
            this.form.email = localStorage.getItem('email') || '';
            this.form.password = localStorage.getItem('password') || '';
        }
    },
    methods: {
        async registerMail(): Promise<void> {
            const hashPassword = await this.generateHash(this.form.password);
            axios.post('https://userhw.sandbox.esigno.io/users', {
                email: this.form.email,
                password: hashPassword
            })
            .then((response) => {
                if(response.status == 200) {
                    if(this.form.rememberLogin) { //remember me
                        localStorage.setItem('email', this.form.email);
                        localStorage.setItem('password', hashPassword);
                    }
                    this.$emit('result', true);
                }
                else this.$emit('result', false);
            })
            .catch((error) => {
                this.invalidLogin = true;
                this.messageBox.show = true;
            });
        },
        async generateHash(value: string): Promise<string> {
            const encoder = new TextEncoder();
            const data = encoder.encode(value);
            const hash = await crypto.subtle.digest("SHA-256", data);
            const hashArray = Array.from(new Uint8Array(hash));
            const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
            return hashHex;
        },
        toggleShowPassword(): void {
            this.showPassword = !this.showPassword;
        }
    }
});
</script>

<style scope lang="scss">
.error-input fieldset {
    border: 1.5px solid var(--v-error-base) !important;
}
</style>