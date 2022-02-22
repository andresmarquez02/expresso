<template>
    <div v-if="init">
        <v-alert
            dismissible
            shaped
            :type="type"
            v-model="alerting"
            style="position:fixed;bottom:0;right:2%"
        >
            <div>{{msg || ""}}</div>
        </v-alert>
    </div>
</template>
<script>
export default {
    props: ['msg','type','init'],
    data() {
        return {
            alerting: '',
        }
    },
}
</script>