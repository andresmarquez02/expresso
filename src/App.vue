<template>
  <div id="app">
    <v-app >
      <div class="grey lighten-5 d-flex justify-space-between flex-column" style="position: relative;min-height:100%;">
        <router-view />
        <template v-if="$router.history.current.name != '404'">
          <TheFooter />
        </template>
      </div>
    </v-app>
  </div>
</template>
<script>
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheFooter,
  }
};
</script>
<style lang="css">
@import "app.css";
</style>
