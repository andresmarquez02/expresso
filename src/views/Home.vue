<template>
  <div>
    <TheNavBar />
    <div class="mx-2 mt-9">
      <v-card elevation="0" width="100%">
        <v-img
          src="../assets/home.jpg"
          height="440"
          width="100%"
          class="object-cover"
          alt="Image of Home"
        >
        </v-img>
        <div class="text-home">
          <div class="w-home">
            <h1 class="mb-4 text-h3 font-weight-thin">Expresso</h1>
            <h3 class="text-h5 font-weight-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              atque temporibus id odit maxime animi, veritatis ab consectetur
              fuga dignissimos.
            </h3>
          </div>
        </div>
      </v-card>
    </div>
    <v-container :fluid="$vuetify.breakpoint.md ? true : false">
      <v-row class="mt-5 ma-0">
        <v-col class="mb-2 col-md-10 col-sm-9 col-12">
          <h2 class="font-weight-light">Discounts</h2>
          <hr class="m-1 deep-purple" style="height: 2px; width: 34px" />
        </v-col>
        <v-col class="mb-2 col-md-2 col-sm-3 col-12">
          <router-link :to="{ name: 'Store' }">
            <v-btn color="deep-purple lighten-2" text>
              <v-icon>mdi-link</v-icon> See more..
            </v-btn>
          </router-link>
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
        <template v-for="product in productsInDiscount">
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
    </v-container>
    <CardInformation />
    <v-container :fluid="$vuetify.breakpoint.md ? true : false">
      <v-row class="mt-5 ma-0">
        <v-col class="col-12">
          <h2 class="font-weight-light">Promotions</h2>
          <hr class="m-1 deep-purple" style="height: 2px; width: 34px" />
        </v-col>
        <template v-if="statusProducts == 'search'">
          <template v-for="value in 6">
            <v-col class="mb-3 col-xl-3 col-md-4 col-sm-6 col-12" :key="value">
              <v-sheet>
                <v-skeleton-loader type="article, actions"></v-skeleton-loader>
              </v-sheet>
            </v-col>
          </template>
        </template>
        <template v-for="product in productsInPromotion">
          <v-col cols="12" md="6" xl="4" :key="product.id">
            <PromotionCard :product="product" />
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
      <v-row class="mt-12 ma-0" v-if="users.length > 0">
        <v-col class="col-12">
          <h2 class="text-center font-weight-light">Clients Satisfieds</h2>
        </v-col>
        <v-col>
          <v-carousel
            cycle
            height="auto"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="itemCarousel in 2" :key="itemCarousel">
              <v-row class="ma-0">
                <v-col
                  cols="12"
                  md="6"
                  lg="4"
                  v-for="client in 3"
                  :key="client"
                >
                  <ClientCard :users="users" :id="client" />
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <StoreAssociated />
    </v-container>
    <AddToCart />
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar.vue";
import ProductCard from "@/components/ProductCard.vue";
import PromotionCard from "@/components/PromotionCard.vue";
import AddToCart from "@/components/AddToCart.vue";
import CardInformation from "@/components/CardInformation.vue";
import ClientCard from "@/components/ClientCard.vue";
import StoreAssociated from "@/components/StoreAssociated.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    TheNavBar,
    CardInformation,
    ProductCard,
    PromotionCard,
    AddToCart,
    ClientCard,
    StoreAssociated,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["user", "products", "statusProducts"]),
    productsInDiscount() {
      return this.products.filter((product) => {
        return product.discount > 0;
      });
    },
    productsInPromotion() {
      return this.products.filter((product) => {
        return product.speciality === 1;
      });
    },
  },
  async mounted() {
    const api = await fetch("https://randomuser.me/api/?results=10");
    this.users = await api.json();
    this.users = this.users.results;
    this.getProducts();
  },
  methods: {
    ...mapMutations(["getProducts"]),
  },
};
</script>
