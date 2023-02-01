<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          id="add_cart"
          class="d-none"
        >
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Add to cart </v-card-title>
        <v-form ref="formAddCart" v-on:submit.prevent="add">
          <v-card-text class="mt-3 mb-1">
            <v-text-field
              label="quantity del Products"
              outlined
              dense
              :rules="rules"
              hide-details="auto"
              v-model="quantity"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple lighten-2" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="deep-purple lighten-2" text type="submit">Add </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <Alert :type="typeAlert" :msg="msg" />
  </div>
</template>
<script>
import Alert from "@/components/Alert.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Alert,
  },
  data() {
    return {
      quantity: "",
      dialog: false,
      rules: [(value) => !!value || "The field is required"],
      msg: "",
      typeAlert: "",
    };
  },
  methods: {
    add() {
      this.msg = "";
      this.typeAlert = "";
      this.setAlert(false);
      this.dialog = false;

      this.$store.state.productToCart = JSON.parse(
        localStorage.getItem("productToCart")
      );

      this.quantity = parseInt(this.quantity);

      if (this.productToCart == null) {
        return 0;
      }

      if (this.quantity !== "" && this.quantity > 0) {
        let products = JSON.parse(localStorage.getItem("products"));
        if (products === null || products === "" || products.length === 0) {
          products = [
            {
              id: this.productToCart.id,
              name: this.productToCart.name,
              price: this.productToCart.price,
              quantity: this.quantity,
            },
          ];
        } else {
          let productExistInCart = false;
          products.forEach((item, index) => {
            if (this.productToCart.id === item.id) {
              products[index].quantity += this.quantity;
              productExistInCart = true;
              return;
            }
          });

          if (productExistInCart === false) {
            products.push({
              id: this.productToCart.id,
              name: this.productToCart.name,
              price: this.productToCart.price,
              quantity: parseInt(this.quantity),
            });
          }
        }
        localStorage.setItem("products", JSON.stringify(products));
        this.$store.state.inCart = JSON.parse(localStorage.getItem("products"));
        this.msg = "Product add to cart";
        this.typeAlert = "success";
        this.setAlert(true);
      } else {
        this.msg = "quantity incorrect";
        this.typeAlert = "error";
        this.setAlert(true);
      }
      this.$refs.formAddCart.reset();
    },
    ...mapMutations(["setAlert"]),
  },
  computed: {
    ...mapState(["productToCart"]),
  },
};
</script>
