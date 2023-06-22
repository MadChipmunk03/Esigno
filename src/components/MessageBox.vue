<template>
    <v-sheet class="mb-4 mt-8 pa-4" :color="`${backgroundColor}`" rounded width="100%">
        <v-row no-gutters>
            <div class="mr-4">
                <v-icon :color="textColor"> {{ icon }} </v-icon>
            </div>
            <v-col><p class="mb-0" :class="`${textColor}--text`">{{ message }}</p></v-col>
        </v-row>
    </v-sheet>
</template>

<script lang="ts">
import { PropType } from 'vue';
import Vue from 'vue';
import { MessageTypes } from '@/types/all'

export default Vue.extend({
    name: 'MessageBox',
    props: {
        message: {
            type: String
        },
        type: {
            type: String as PropType<MessageTypes>,
            default: 'Info'
        }
    },
    computed: {
        textColor(): string{
            switch(this.type) {
                case MessageTypes.Success:
                    return 'successText'
                case MessageTypes.Info:
                    return 'primaryText'
                case MessageTypes.Warning:
                    return 'warningText'
                case MessageTypes.Error:
                    return 'errorText'
                default:
                    return 'primary'
            }
        },
        backgroundColor(): string {
            switch(this.type) {
                case MessageTypes.Success:
                    return 'successBg'
                case MessageTypes.Info:
                    return 'primaryBg'
                case MessageTypes.Warning:
                    return 'warningBg'
                case MessageTypes.Error:
                    return 'errorBg'
                default:
                    return 'primary'
            }
        },
        icon(): string {
            switch(this.type) {
                case MessageTypes.Success:
                    return 'mdi-check'
                case MessageTypes.Info:
                case MessageTypes.Warning:
                    return 'mdi-information-outline'
                case MessageTypes.Error:
                    return 'mdi-close'
                default:
                    return 'mdi-help'
            }
        }
    }
});
</script>

<style scope lang="scss">

</style>