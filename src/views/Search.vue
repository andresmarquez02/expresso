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
        <template v-for="(product, i) in productsSearch">
          <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="i">
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
import { mapState } from "vuex";
import { createClient } from "pexels";

export default {
  components: {
    TheNavBar,
    ProductCard,
    AddToCart,
  },
  data() {
    return {
      productsSearch: [],
    };
  },
  mounted() {
    this.searchProducts(this.$route.params.q);
  },
  watch: {
    $route(to, from) {
      this.searchProducts(this.$route.params.q);
    },
  },
  methods: {
    searchProducts(q) {
      this.productsSearch = [];
      this.$store.state.statusProducts = "search";
      const client = createClient(
        "MFHpKhabVi4qN6ulEJcRw3EkmJ70bxEhrkUPVHoJsGmuuRpX4IS6E3gI"
      );
      const query = "Food";
      client.photos
        .search({ query, per_page: 39 })
        .then((photos) => {
          let countDiscount = 0,
            countSpeciality = 0;
          photos.photos.forEach((element, i) => {
            let discount = 0,
              speciality = 0;
            if (Math.floor(Math.random() * 2) == 1 && countDiscount < 9) {
              discount = Math.floor(Math.random() * 100);
              countDiscount++;
            } else if (countSpeciality < 8) {
              speciality = 1;
              countSpeciality++;
            }

            if (
              element.alt.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) >=
              0
            ) {
              this.productsSearch.push({
                id: element.id,
                name: element.alt,
                img: element.src.original,
                imgLazy: element.src.tiny,
                price: Math.floor(Math.random() * 20),
                discount,
                speciality,
              });
            }
          });
          if (this.productsSearch.length === 0) {
            this.$store.state.statusProducts = "error";
          } else {
            this.$store.state.statusProducts = "success";
          }
        })
        .finally(() => {
          if (this.productsSearch.length === 0) {
            this.$store.state.statusProducts = "error";
          } else {
            this.$store.state.statusProducts = "success";
          }
        });
    },
  },
  computed: {
    ...mapState(["statusProducts"]),
  },
};
</script>
