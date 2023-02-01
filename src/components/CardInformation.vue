<template>
  <div>
    <v-card
      class="d-flex overflow-hidden my-4"
      height="25rem"
      elevation="0"
      color="grey lighten-4"
    >
      <v-row class="ma-0">
        <v-col cols="3">
          <img src="../assets/info.png" class="mt-image-info ml-image-info"/>
        </v-col>
        <v-col
          style="height:25rem"
          cols="6"
          class="justify-center align-center d-flex"
        >
          <div>
            <h1 class="text-center display-2 font-weight-light">
              Welcome to Expresso
            </h1>
            <h2 class="text-center font-weight-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere beatae exercitationem.
            </h2>
            <div class="justify-center mt-6 d-flex">
              <router-link :to="{ name: 'Store' }">
                <v-btn color="deep-purple lighten-1" class="white--text" elevation="0">
                  <v-icon>mdi-store</v-icon>
                  See store
                </v-btn>
              </router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <img src="../assets/info.png" class="mt-image-info"/>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
<style>
    .mt-image-info{
        margin-top: -2rem;
    }
    .ml-image-info{
        margin-left: -14rem;
    }
</style>
