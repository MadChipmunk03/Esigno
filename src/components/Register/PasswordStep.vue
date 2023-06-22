<template>
    <div class="pa-1">
            <v-row>
                <v-col><h2>Tvorba hesla</h2></v-col>
                <v-col>
                    <p class="float-right"><router-link :to="{ name: 'login' }">Zpět na příhlášení</router-link></p>
                </v-col>
            </v-row>
            <v-card-text class="px-0">Děkujeme za vaše ověření. Nyní si můžete nastavit heslo. Dbejte prosím, aby heslo bylo dostatečně silné a neobsahovalo vaše iniciály či jiné snadno uhodnutelné slova.</v-card-text>
            <v-text-field 
                v-model="password" 
                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                class="mb-2" 
                @click:append="toggleShowPassword" 
                solo 
                :type="showPassword ? 'text': 'password'" 
            />
            <div v-for="(validation, key) in validations" :key="key" class="mt-1">
                <v-icon :color="validation.valid ? 'success' : 'grey'" size="18" class="mr-2"> mdi-check </v-icon> 
                <span :class="validation.valid ? 'success--text' : 'grey--text'"> {{ validation.msg }} {{ validation.valid }} </span>
            </div>
            <v-btn block color="primary" type="submit" class="mt-8" :disabled="!passwordIsValid" @click="registerMail">Pokračovat</v-btn>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
    name: 'PasswordStep',
    props: {
        email: String
    },
    data() {
        return {
            password: '',
            showPassword: false,
            validations: {
                minLength: { valid: false, msg: 'Obsahuje alespoň 10 znaků' },
                includesLetters: { valid: false, msg: 'Obsahuje jak malá písmena (a-z), tak velká (A-Z)' },
                includesNumber: { valid: false, msg: 'Obsahuje alespoň jednu číslici (0-9)' },
                includesSymbols: { valid: false, msg: 'Obsahuje alespoň jeden speciální znak (@, #, /)' },
                notMail: { valid: false, msg: 'Neobsahuje vaši e-mailovou adresu' }
            },
        };
    },
    computed: {
        //validations
        /* eslint-disable */
        minLength(): boolean {
            const result = this.password.length >= 10
            this.validations.minLength.valid = result;
            return result;
        },
        includesLetters(): boolean { 
            const result = Boolean(this.password.match('[a-z]')) && Boolean(this.password.match('[A-Z]'));
            this.validations.includesLetters.valid = result;
            return result;
        },
        includesNumber(): boolean { 
            const result = Boolean(this.password.match(`\\d`)); 
            this.validations.includesNumber.valid = result;
            return result;
        },
        includesSymbols(): boolean { 
            const result = Boolean(this.password.match(`(@|#|/)`)); 
            this.validations.includesSymbols.valid = result;
            return result;
        },
        notMail(): boolean { 
            const result = Boolean(!this.password.match(this.email.replace('.', '\\.')));
            this.validations.notMail.valid = result;
            return result;
        },
        passwordIsValid(): boolean {
            this.minLength; this.includesLetters; this.includesNumber; this.includesSymbols; this.notMail;
            return this.minLength && this.includesLetters && this.includesNumber && this.includesSymbols && this.notMail;
        }

    },
    methods: {
        async registerMail(): Promise<void> {
            const hashPassword = await this.generateHash(this.password);
            axios.post(`https://userhw.sandbox.esigno.io/registration/${this.email}/password`, {
                password: hashPassword
            })
            .then((response) => {
                if(response.status == 200) this.$emit('add-password', hashPassword);
            })
            .catch((error) => {
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
.v-messages, .v-text-field__details {
    display: none;
}
</style>