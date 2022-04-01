<template>
  <div>
    <v-row class="ma-0 grey darken-4 white--text" style="height:5rem">
      <div class="col-md-8 col-6">
        <div class="pb-0 pa-3">
          <v-tooltip bottom class="mr-3 d-inline" v-model="show1">
            <template v-slot:activator="{ on, attrs }">
              <small v-bind="attrs" v-on="on">
                <v-icon class="white--text">mdi-phone</v-icon>
                <span class="d-none d-md-inline">&nbsp; +58-412-929-88-33</span>
              </small>
            </template>
            <span>+58-412-929-88-33</span>
          </v-tooltip>
          <v-tooltip class="mr-3 d-inline" bottom v-model="show">
            <template v-slot:activator="{ on, attrs }">
              <small v-bind="attrs" v-on="on">
                <v-icon class="white--text">mdi-google-maps</v-icon>
                <span class="d-none d-md-inline"
                  >&nbsp; Guarico, Venezuela</span
                >
              </small>
            </template>
            <span>Guarico, Venezuela</span>
          </v-tooltip>
          <v-tooltip bottom class="mr-3 d-inline" v-model="show2">
            <template v-slot:activator="{ on, attrs }">
              <small v-bind="attrs" v-on="on">
                <v-icon class="white--text">mdi-email</v-icon>
                <span class="d-none d-md-inline">
                  &nbsp; andresmarquez02@gmail.com</span
                >
              </small>
            </template>
            <span>andresmarquez02@gmail.com</span>
          </v-tooltip>
        </div>
      </div>
      <div class="justify-end d-flex col-md-4 col-6">
        <div class="pb-0 pa-3">
          <v-tooltip bottom class="d-inline" v-model="show3">
            <template v-slot:activator="{ on, attrs }">
              <small class="mr-3" v-bind="attrs" v-on="on">
                <v-icon class="white--text">mdi-account-circle</v-icon>
                <span class="d-none d-md-inline"
                  >&nbsp;{{
                    $store.state.usuario != ""
                      ? $store.state.usuario
                      : "Mi Cuenta"
                  }}</span
                >
              </small>
            </template>
            <span>{{
              $store.state.usuario != "" ? $store.state.usuario : "Mi Cuenta"
            }}</span>
          </v-tooltip>
          <v-tooltip bottom class="d-inline" v-model="show4">
            <template v-slot:activator="{ on, attrs }">
              <small class="mr-3" v-bind="attrs" v-on="on">
                <v-icon class="white--text">mdi-currency-usd</v-icon>
                <span class="d-none d-md-inline">&nbsp;Lexachange</span>
              </small>
            </template>
            <span>Lexachange</span>
          </v-tooltip>
          <span class="d-inline d-md-none">
            <v-tooltip bottom class="d-inline" v-model="show5">
              <template v-slot:activator="{ on, attrs }">
                <small class="mr-3" v-bind="attrs" v-on="on" style="position:relative">              
                  <span v-if="$store.state.enCarrito != ''">
                    <router-link :to="{ name: 'Comprar' }" class="link-comprar">
                        <v-icon class="white--text" dark>mdi-cart</v-icon>
                    </router-link>
                  </span>
                  <span v-else>
                    <v-icon class="white--text" dark>mdi-cart</v-icon>
                  </span>
                  <span
                    style="position:absolute;top:-15px;right:-15px"
                    v-if="$store.state.enCarrito != ''"
                  >
                    <v-chip
                      color="red"
                      text-color="white"
                      x-small
                      class="rounded-pill"
                    >{{ $store.state.enCarrito.length }}
                    </v-chip>
                  </span>
                  <span style="position:absolute;top:-10px;right:-10px" v-else>
                    <v-chip
                      color="red"
                      text-color="white"
                      x-small
                      class="rounded-pill"
                    >
                      0
                    </v-chip>
                  </span>
                </small>
              </template>
              <span>Carrito</span>
            </v-tooltip>
          </span>
        </div>
      </div>
    </v-row>
    <div class="py-4 bg-home-left">
      <div class="row ma-0">
        <div class="col-md-3">
          <h1
            class="pl-3 mb-3 text-center display-2 white--text font-weight-bold text-sm-text-md-left mb-md-0"
          >
            Expresso
          </h1>
        </div>
        <div class="col-md-7 col-12 px-md-0 px-7">
          <form class="w-85" v-on:submit.prevent="search">
            <div class="row ma-0">
              <div class="col-md-8 col-12">
                <v-text-field :rules="rules" class="mt-0 white--text" dark v-model="q" placeholder="Buscar Producto"></v-text-field>
              </div>
              <div  class="col-md-4 col-12">
                <v-btn color="red lighten-1" dark type="submit">
                  <v-icon>mdi-search-web</v-icon>
                  Buscar
                </v-btn>
              </div>
            </div>
          </form>
        </div>
        <div class="mt-4 white--text col-md-2 mt-md-0 d-md-flex align-items-center d-none"
        >
          <div class="text-center">
            <h2 class="ma-0" style="position:relative">
              <span v-if="$store.state.enCarrito != ''">
                <router-link :to="{ name: 'Comprar' }" class="link-comprar">
                    <v-icon class="white--text" dark>mdi-cart</v-icon>
                </router-link>
              </span>
              <span v-else>
                <v-icon class="white--text" dark>mdi-cart</v-icon>
              </span>
              <span
                style="position:absolute;top:-10px;right:-10px"
                v-if="$store.state.enCarrito != ''"
              >
                <v-chip
                  color="red"
                  text-color="white"
                  x-small
                  class="rounded-pill"
                >{{ $store.state.enCarrito.length }}
                </v-chip>
              </span>
              <span style="position:absolute;top:-10px;right:-10px" v-else>
                <v-chip
                   color="red"
                  text-color="white"
                  x-small
                  class="rounded-pill"
                >
                  0
                </v-chip>
              </span>
            </h2>
            <div>Carrito</div>
          </div>
        </div>
      </div>
    </div>
    <v-bottom-navigation color="error" horizontal>
      <v-btn>
        <router-link
          :to="{ name: 'Home' }"
          :class="link === 'Home' ? 'red--text' : 'grey--text'"
          >Inicio
        </router-link>
        <v-icon :class="link === 'Home' ? 'red--text' : 'grey--text'"
          >mdi-home</v-icon
        >
      </v-btn>

      <v-btn>
        <router-link
          :to="{ name: 'Tienda' }"
          :class="
            link === 'Tienda' || link === 'Buscar' || link === 'Detalles'
              ? 'red--text'
              : 'grey--text'
          "
        >
          Tienda
        </router-link>
        <v-icon
          :class="
            link === 'Tienda' || link === 'Buscar' || link === 'Detalles'
              ? 'red--text'
              : 'grey--text'
          "
          >mdi-store</v-icon
        >
      </v-btn>

      <v-btn v-if="$store.state.enCarrito != ''">
        <router-link
          :to="{ name: 'Comprar' }"
          :class="link === 'Comprar' ? 'red--text' : 'grey--text'"
        >
          Comprar
        </router-link>
        <v-icon :class="link === 'Comprar' ? 'red--text' : 'grey--text'"
          >mdi-cart</v-icon
        >
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      q: "",
      link: "",
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      error: "",
      alerting: false,
      rules: [
        value => !!value || 'El campo es requerido.',
      ],
    };
  },
  mounted() {
    this.link = this.$router.history.current.name;
  },
  methods: {
    search() {
      if (this.q !== "") {
        window.location.href = `../../buscar/producto/${this.q}`;
      }
    },
  },
  computed: {
    ...mapState(["el_carrito", "usuario"]),
  },
};
</script>
