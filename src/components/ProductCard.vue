<template>
  <div>
    <v-card elevation="0">
      <div class="relative">
        <v-img
          height="300"
          :src="productItem.img"
          :lazy-src="productItem.imgLazy"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div class="product-label" v-if="productItem.discount > 0">
          <v-chip class="ma-2" color="deep-purple lighten-2" text-color="white">
            <span class="sale text-caption">{{ productItem.discount }}%</span>
            <span class="ml-2 text-caption"> Descuento</span>
          </v-chip>
        </div>
      </div>

      <v-card-title>{{ productItem.name }}</v-card-title>

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

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          Precio: {{ productItem.price }} Lx • Italian, Cafe
        </div>

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa earum
          facere iusto aut, aperiam....
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions class="py-4">
        <router-link :to="{ name: 'Details', params: { id: productItem.id } }">
          <v-btn color="deep-purple lighten-2" text> View </v-btn>
        </router-link>
        <v-btn color="deep-purple lighten-1" text v-on:click="shop(productItem)">
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      productItem: this.product,
    };
  },
  methods: {
    shop(value) {
      localStorage.setItem("productToCart", JSON.stringify(value));
      document.getElementById("add_cart").click();
    },
  },
};
</script>
