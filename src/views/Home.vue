
<template>
  <div>
    <Nav/>
    <div class="px-2">
      <v-row class="px-2 mt-5 px-md-12">
        <v-col class="col-md-10 col-sm-9 col-12">
          <h2 class="font-weight-bolder">Nuevos Productos</h2>
          <hr class="m-1 red" style="height:2px;width:34px">
        </v-col>
        <v-col class="col-md-2 col-sm-3 col-12">
          <router-link :to="{name:'Tienda'}">
            <v-btn color="red lighten-1" text>
              <v-icon>mdi-link</v-icon> Ver más..
            </v-btn>
          </router-link>
        </v-col>
        <template v-for="value in tienda">
          <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="value.id" v-if="value.favorito == 1">
            <Producto :producto="value" />
          </v-col>
        </template>
      </v-row>
    </div>
    <Info />
    <div class="px-2">
      <v-row class="px-2 mt-5 px-md-12">
        <v-col class="col-12">
          <h2 class="font-weight-bolder">Promociones Expressas</h2>
          <hr class="m-1 red" style="height:2px;width:34px">
        </v-col>
        <v-col class="col-12 col-md-6 col-xl-4" :key="value.id" v-for="(value, i) in promocion" >
          <template v-if="value.especialidad === 1 && i < 6">
            <Promocion :producto="value" />
          </template>
        </v-col>
      </v-row>
    </div>
    <div class="px-2">
      <v-row class="px-2 mt-5 px-md-12">
        <v-col class="col-12">
          <h2 class="font-weight-bolder">Más Productos</h2>
          <hr class="m-1 red" style="height:2px;width:34px">
        </v-col>
        <template v-for="(i, value) in tienda">
          <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="value.id" v-if="i.favorito != 1 && value < 7">
            <Producto :producto="i" />
          </v-col>
        </template>
      </v-row>
    </div>
    <Add/>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import Producto from '../components/Producto.vue'
import Promocion from '../components/Promocion.vue'
import Add from '../components/Add_carrito.vue'
import Info from '../components/Info.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Nav,
    Info,
    Producto,
    Promocion,
    Add
  },
  mounted () {
    for (const index of this.tienda) {
      if (index.especialidad === 1) {
        this.promocion.push(index)
      }
    }
  },
  data: function () {
    return {
      promocion: []
    }
  },
  computed: {
    ...mapState(['usuario', 'tienda'])
  }
}
</script>
