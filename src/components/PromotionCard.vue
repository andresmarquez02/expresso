<template>
  <div>
    <v-card max-width="100%" elevation="0">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline">PROMOTION</div>
          <v-list-item-title class="mb-1 text-h5">
            {{ item.name }} • {{ item.price }} Lx
          </v-list-item-title>
          <v-list-item-subtitle
            >Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar height="120" width="120" tile>
          <v-img
            height="120"
            width="120"
            :src="item.img"
            :lazy-src="item.imgLazy"
            aspect-ratio="1"
            class="rounded-lg grey lighten-2"
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
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions class="pb-3">
        <a :href="'../detalles/' + item.id">
          <v-btn color="deep-purple lighten-1" rounded text> Details </v-btn>
        </a>
        <v-btn color="deep-purple lighten-1" rounded text v-on:click="shop(item)">
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
      item: this.product,
    };
  },
  methods: {
    shop(value) {
      localStorage.setItem("productToCart", JSON.stringify(value));
    },
  },
};
</script>
