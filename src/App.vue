<template>
  <div id="app">
    <v-app>
      <div class="grey lighten-5">
        <router-view/>
        <div v-if="$router.history.current.name != '404'">
          <Footer/>
        </div>
      </div>
    </v-app>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import Footer from '@/components/Footer.vue'

  export default {
    components:{
      Footer
    },
    mounted () {
      this.getUser()
    },
    methods: {
      ...mapMutations(['getUser'])
    }
  }
</script>
<style lang="css">
  @import "app.css";
</style>