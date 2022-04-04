<template>
  <div>
    <v-card style="width:100%" class="mb-4">
      <v-row class="ma-0">
        <v-col cols="6 py-2 my-auto">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <div class="relative">
            <v-img height="150" :src="item.img"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
            </v-img>
          </div>
        </v-col>
        <v-col cols="6">
          <v-card-title class="pa-0">{{ item.producto }}</v-card-title>
          <v-card-text class="pa-0">
            <div class="mt-2">Precio: {{ item.precio }} Lx</div>
          </v-card-text>
          <v-card-actions>
            <a :href="'../detalles/' + item.id">
              <v-btn color="red lighten-2" text> Ver </v-btn>
            </a>
            <v-btn color="red lighten-1" text v-on:click="shop(item)"> Agregar </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  props: [
    'producto'
  ],
  data () {
    return {
      item: this.producto
    }
  },
  methods: {
    shop (value) {
      localStorage.setItem('producto_a_carrito', JSON.stringify(value));
      document.getElementById("add_cart").click();
    }
  }
}
</script>
