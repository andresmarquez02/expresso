<template>
  <div class="grey lighten-5" v-if="product !== ''">
    <TheNavBar />
    <v-container :fluid="$vuetify.breakpoint.md ? true : false" class="mt-12">
      <v-card class="d-md-flex" elevation="0">
        <v-img height="100%" width="50%" :src="product.img"></v-img>
        <div class="pl-4">
          <v-card-title class="text-h5">{{ product.name }}</v-card-title>

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
              {{ product.price }} Lx • Italian, Cafe
            </div>

            <div class="text-body-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              autem magnam saepe sequi temporibus. Magnam, saepe dicta soluta
              minus ea corrupti quas sequi? Sapiente eaque natus nemo at et
              animi?
            </div>
            <div class="my-5 text-body-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              autem magnam saepe sequi temporibus. Magnam, saepe dicta soluta
              minus ea corrupti quas sequi? Sapiente eaque natus nemo at et
              animi?
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="py-4">
            <v-btn
              color="deep-purple lighten-1"
              text
              v-on:click="shop_detail()"
            >
              Add to Cart
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-container>
    <v-container :fluid="$vuetify.breakpoint.md ? true : false">
      <v-row class="mt-5 ma-0">
        <v-col class="mb-2 col-md-10 col-sm-9 col-12">
          <h2 class="font-weight-light">Discounts</h2>
          <hr class="m-1 deep-purple" style="height: 2px; width: 34px" />
        </v-col>
        <v-col class="mb-2 col-md-2 col-sm-3 col-12">
          <router-link :to="{ name: 'store' }">
            <v-btn color="deep-purple lighten-2" text>
              <v-icon>mdi-link</v-icon> See more..
            </v-btn>
          </router-link>
        </v-col>
        <template v-if="products === ''">
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
            v-if="product.discount > 0"
          >
            <ProductCard :product="product" />
          </v-col>
        </template>
      </v-row>
    </v-container>
    <AddToCart />
  </div>
</template>
<script>
import TheNavBar from "../components/TheNavBar.vue";
import ProductCard from "../components/ProductCard.vue";
import AddToCart from "../components/AddToCart.vue";
import { mapMutations, mapState } from "vuex";
import { createClient } from "pexels";

export default {
  components: {
    TheNavBar,
    ProductCard,
    AddToCart,
  },
  data() {
    return {
      product: "",
      id: 0,
    };
  },
  mounted() {
    this.getProducts();
    const client = createClient(
      "MFHpKhabVi4qN6ulEJcRw3EkmJ70bxEhrkUPVHoJsGmuuRpX4IS6E3gI"
    );
    client.photos.show({ id: this.$route.params.id }).then((photo) => {
      this.product = {
        id: photo.id,
        name: photo.alt,
        img: photo.src.original,
        imgLazy: photo.src.tiny,
        price: Math.floor(Math.random() * 20),
        discount: Math.floor(Math.random() * 100),
        speciality: Math.floor(Math.random() * 2) == 1 ? 1 : 0,
      };
      if (this.product === "") this.$router.push("/");
    });
  },
  methods: {
    ...mapMutations(["getProducts"]),

    shop_detail() {
      localStorage.setItem("productToCart", JSON.stringify(this.product));
      document.getElementById("add_cart").click();
    },
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>
