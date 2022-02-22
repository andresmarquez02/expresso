<template>
  <div>
    <v-card class="mx-auto" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <div class="relative">
        <v-img height="250" :src="item.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <v-card-title>{{ item.producto }}</v-card-title>
        </v-img>
        <div class="product-label" v-if="item.favorito == 1">
          <v-chip
          class="ma-2"
          color="red"
          text-color="white"
        >
          <span class="sale">30%</span>
          <span class="ml-2"> DESCUENTO</span>
        </v-chip>
        </div>
      </div>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ms-4">4.5</div>
        </v-row>
        <div class="my-4 text-subtitle-1">Precio: {{ item.precio }} Lx</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <a :href="'../detalles/' + item.id">
          <v-btn color="red lighten-2" text> Ver </v-btn>
        </a>
        <v-btn color="red lighten-1" text v-on:click="shop(item)"> Agregar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["producto"],
  data() {
    return {
      item: this.producto,
    };
  },
  methods: {
    shop(value) {
      localStorage.setItem("producto_a_carrito", JSON.stringify(value));
      document.getElementById("add_cart").click();
    },
  },
};
</script>
