<template>
    <div v-if="$store.state.init && type">
        <v-alert
            border="left"
            dismissible
            :type="type"
            v-model="$store.state.init"
            style="position:fixed;bottom:0;right:2%;min-width:20rem"
        >
            <div>{{msg || ""}}</div>
        </v-alert>
    </div>
</template>
<script>
export default {
    props: ['msg','type'],
}
</script>
