<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LoginView',
    data() {
        return {
            message: 'LoginView'
        };
    },
});
</script>

<style scope lang="scss">

</style>