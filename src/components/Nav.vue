<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light mx-md-4 py-4">
        <span class="navbar-brand font-weight-bolder h4 text-dark">Expresso</span>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <router-link :to="{name: 'Home'}" class="nav-link h6 text-uppercase">INICIO <span class="sr-only">Inicio</span>
                    </router-link>
                </li>
                <li class="nav-item ">
                    <router-link :to="{name: 'About'}" class="nav-link h6 text-uppercase">TIENDA <span class="sr-only">Tienda</span>
                    </router-link>
                </li>
                <li class="nav-item ">
                    <a href="#home_expresso" class="nav-link h6 text-uppercase">{{usuario.nombre !== undefined ? usuario.nombre : "SUBSCRIBIRME"}} <span class="sr-only">subscribirme</span>
                    </a>
                </li>
                <li class="nav-item" :class="el_carrito">
                    <span class="position-relative h6 nav-link" v-if="$store.state.enCarrito != ''">
                        <i class="fa fa-shopping-cart text-dark" role="button" v-on:click="map_created()" aria-hidden="true"></i><span class="badge badge-danger mr-2">{{$store.state.enCarrito.length}}</span>
                    </span>
                    <span class="position-relative h6 nav-link" v-else>
                        <i class="fa fa-shopping-cart text-dark" role="button" v-on:click="map_created()" aria-hidden="true"></i><span class="badge badge-danger mr-2">0</span>
                    </span>
                </li>
                <li class="nav-item ">
                    <span class=" nav-link h6">
                        <i class="fa fa-bell mr-2" role="button" aria-hidden="true" v-on:click="alert()"></i>
                    </span>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    map_created () {
      if (this.$store.state.enCarrito.length > 0) {
        const map = document.getElementById('map_comprar')
        map.click()
      } else {
        alert('No tiene productos en su carrito')
      }
    }
  },
  computed: {
    ...mapState(['el_carrito', 'usuario'])
  }
}
</script>
