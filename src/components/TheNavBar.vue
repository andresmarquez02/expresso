<template>
  <div>
    <v-app-bar color="white" dense elevation="0" height="85">
      <v-toolbar-title>Expresso</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-md-flex d-none">
        <router-link :to="{ name: 'Home' }">
          <span class="pl-7 text-body-1 text-uppercase text--secondary">
            <v-icon>mdi-home</v-icon> Home
          </span>
        </router-link>
        <router-link :to="{ name: 'Store' }">
          <span class="pl-7 text-body-1 text-uppercase text--secondary">
            <v-icon>mdi-store</v-icon> Store
          </span>
        </router-link>
        <router-link :to="{ name: 'Cart' }" v-if="inCart != ''">
          <v-badge color="red darken-1" dot>
            <span class="pl-7 text-body-1 text-uppercase text--secondary">
              <v-icon>mdi-cart</v-icon> Cart
            </span>
          </v-badge>
        </router-link>
        <span
          class="pl-7 text-body-1 text-uppercase text--secondary pointer"
          @click="dialog = true"
        >
          <v-icon>mdi-magnify</v-icon> Search
        </span>
      </div>
      <div class="d-flex d-md-none">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-title>Expresso</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <router-link :to="{ name: 'Home' }">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link :to="{ name: 'Store' }">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-store</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Store</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link :to="{ name: 'Cart' }" v-if="inCart != ''">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Cart</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <v-list-item @click="setDialog">
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Search</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Search :dialog="dialog" :setDialog="setDialog" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Search from "./SearchForm.vue";

export default {
  components: {
    Search,
  },
  data() {
    return {
      dialog: false,
      drawer: null,
    };
  },
  methods: {
    setDialog() {
      this.dialog = !this.dialog;
      this.drawer = null;
    },
  },
  computed: {
    ...mapState(["inCart"]),
  },
};
</script>
