
<template>
  <div>
    <Nav/>
    <div class="px-4 m-0 mt-5 row ma-0">
        <div class="col-12 text-uppercase ">
          <h2 class="font-weight-bolder">Productos</h2>
        </div>
        <div class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="value.id" v-for="value in tienda">
          <Producto :producto="value" />
        </div>
    </div>
    <div class="row ma-0" v-if="error">
      <div class="py-5 text-center col-12 h1 font-weight-bold">No se encontraron coincidencias.. </div>
    </div>
    <Add/>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import Producto from '../components/Producto.vue'
import Add from '../components/Add_carrito.vue'
export default {
  components: {
    Nav,
    Producto,
    Add
  },
  mounted () {
    for (const element of this.$store.state.tienda) {
      if (element.producto.toLocaleLowerCase().indexOf(this.$router.history.current.params.q.toLocaleLowerCase()) >= 0) {
        this.tienda.push(element)
      }
    }
    if (this.tienda.length === 0) {
      this.error = true
    }
  },
  data: function () {
    return {
      tienda: [],
      error: false
    }
  }
}
</script>
