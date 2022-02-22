<template>
  <div class="grey lighten-5" v-if="producto !== ''">
    <Nav/>
    <div class="px-4 py-5 row">
      <div class="col-md-7 col-12">
        <img :src="producto.img" class="rounded img-product-detail">
        <div class="mt-4">
          <p>
            <v-chip
              class="mr-2 white--text"
              color="red"
            >
              #Gourmet
            </v-chip>
            <v-chip
              class="mr-2"
              color="grey lighten-3"
            >
              #Delivery
            </v-chip>
            <v-chip
              class="mr-2 white--text"
              color="red"
            >
              #Portfolio
            </v-chip>
          </p>
        </div>
      </div>
      <div class="col-md-5 col-12">
        <div class="px-md-5 ">
          <v-card class="pa-4">
            <div class="pb-1">
              <small>Nuevo | En estock</small>
              <span class="font-weight-bold h4 d-block">{{producto.producto}}</span>
            </div>
            <div class="justify-space-between d-flex">
              <div class="yellow--text">
                <v-icon v-for="i in 5" :key="i" class="yellow--text">mdi-star</v-icon>
              </div>
              <small>
                Calificacion de usuarios
              </small>
            </div>
            <h2 class="mt-2">{{producto.precio}}Lx</h2>
            <div class="my-3">
                <h5 class="font-weight-light red--text">
                  <v-icon>mdi-truck</v-icon>
                  Metodo de Envio
                </h5>
                <div>
                    <span>Delivery</span>
                </div>
            </div>
            <div class="my-3">
                <h5 class="font-weight-light red--text">
                  <v-icon>mdi-credit-card</v-icon>
                  Metodo de Pago
                </h5>
                <div>
                    <span>Lexachange</span>
                </div>
            </div>
            <div class="mt-4">
              <v-btn color="red lighten-1" text v-on:click="shop_detail()">
                  <v-icon>mdi-cart-</v-icon>
                  Agregar al Carrito
              </v-btn>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="px-2">
      <v-row class="px-2 mt-5 px-md-12">
        <v-col class="col-12">
          <h2 class="font-weight-bolder">Productos que te Pueden Interesar</h2>
          <hr class="m-1 red" style="height:2px;width:34px">
        </v-col>
        <template v-for="(value,i) in tienda">
          <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="i+3" v-if="i < 6">
            <Producto :producto="value" />
          </v-col>
        </template>
      </v-row>
    </div>
    <Add/>
  </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Producto from '../components/Producto.vue'
import Add from '../components/Add_carrito.vue'
export default {
  components: {
    Nav,
    Producto,
    Add
  },
  data () {
    return {
      tienda: [],
      producto: '',
      id: 0,
    }
  },
  mounted () {
    for (const element of this.$store.state.tienda) {
      if (parseInt(this.$router.history.current.params.id) === element.id) {
        this.producto = element
      } else {
        this.tienda.push(element)
      }
    }
    if (this.producto === '') this.$router.push('/')
    
  },
  methods: {
    shop_detail () {
      localStorage.setItem('producto_a_carrito', JSON.stringify(this.producto))
      document.getElementById("add_cart").click();
    }
  },
}
</script>
