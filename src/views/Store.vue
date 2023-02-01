<template>
  <div class="grey lighten-5">
    <TheNavBar />
    <div class="px-2">
      <v-row class="px-2 mt-12 px-md-12 ma-0">
        <v-col class="col-12">
          <h2 class="font-weight-light">Products</h2>
          <hr class="m-1 deep-purple" style="height: 2px; width: 34px" />
        </v-col>
        <template v-if="statusProducts == 'search'">
          <template v-for="value in 6">
            <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="value">
              <v-sheet>
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="100%"
                  type="image, article, actions"
                ></v-skeleton-loader>
              </v-sheet>
            </v-col>
          </template>
        </template>
        <template v-for="product in products">
          <v-col
            class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12"
            :key="product.id"
          >
            <ProductCard :product="product" />
          </v-col>
        </template>
        <template v-if="statusProducts == 'error'">
          <v-col cols="12">
            <h1 class="text-center font-weight-bolder">
              Upps.. Products not found
            </h1>
          </v-col>
        </template>
      </v-row>
    </div>
    <AddToCart />
  </div>
</template>
<script>
// @ is an alias to /src
import TheNavBar from "../components/TheNavBar.vue";
import ProductCard from "../components/ProductCard.vue";
import AddToCart from "../components/AddToCart.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    TheNavBar,
    ProductCard,
    AddToCart,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapMutations(["getProducts"]),
  },
  computed: {
    ...mapState(["user", "products", "statusProducts"]),
  },
};
</script>
