<template>
    <v-sheet class="mb-4 mt-8 pa-4" :color="`${color} lighten-4`" rounded>
        <v-row no-gutters>
            <div class="mr-4">
                <v-icon :color="color"> {{ icon }} </v-icon>
            </div>
            <v-col><p class="mb-0" :class="`${color}--text`">{{ message }}</p></v-col>
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
            type: String as PropType<MessageTypes>
        },
        type: {
            type: String,
            default: 'Info'
        }
    },
    computed: {
        color(): string{
            switch(this.type) {
                case MessageTypes.Success:
                    return 'light-green'
                case MessageTypes.Info:
                    return 'blue'
                case MessageTypes.Warning:
                    return 'orange'
                case MessageTypes.Error:
                    return 'pink'
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