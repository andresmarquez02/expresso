
<template>
  <div class="grey lighten-5">
    <Nav/>
    <div class="px-2">
      <v-row class="px-2 mt-5 px-md-12">
        <v-col class="col-12">
          <h2 class="font-weight-bolder">Productos</h2>
          <hr class="m-1 red" style="height:2px;width:34px">
        </v-col>
        <template v-for="value in tienda">
          <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="value.id">
            <Producto :producto="value" />
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
import Add from '../components/Add_carrito.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Nav,
    Producto,
    Add
  },
  computed: {
    ...mapState(['usuario', 'tienda'])
  }
}
</script>
