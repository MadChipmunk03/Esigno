<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'DetailsStep',
    data() {
        return {
            message: 'DetailsStep'
        };
    },
});
</script>

<style scope lang="scss">

</style>