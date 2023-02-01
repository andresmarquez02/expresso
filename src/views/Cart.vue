<template>
  <div>
    <TheNavBar />
    <v-row class="mt-10 ma-0">
      <v-col lg="6" md="5" cols="12">
        <h2 class="pt-2 mb-4 text-center text-uppercase grey--text">
          Delivery Data
        </h2>
        <v-card elevation="0">
          <v-row class="ma-0 pa-4">
            <v-col cols="12" md="6">
              <v-text-field
                label="Fullname"
                :rules="rules"
                v-model="fullname"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Phone"
                :rules="rules"
                outlined
                clearable
                v-model="phone"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Delivery Location"
                :rules="rules"
                outlined
                clearable
                v-model="location"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                clearable
                :rules="rules"
                name="description"
                label="Delivery Description"
                v-model="description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col lg="6" md="7" cols="12">
        <h2 class="pt-2 mb-4 text-center text-uppercase grey--text">
          Your Products
        </h2>
        <v-card elevation="0">
          <v-row class="ma-0 pa-4">
            <v-col cols="12">
              <v-simple-table>
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cart, i) in inCart" :key="i">
                    <td>{{ cart.quantity }}</td>
                    <td>{{ cart.name }}</td>
                    <td>{{ cart.price }}</td>
                    <td>{{ cart.price * cart.quantity }}</td>
                    <td>
                      <v-btn
                        icon
                        text
                        color="deep-purple lighten-1"
                        v-on:click="eliminar(cart.id)"
                      >
                        <v-icon light> mdi-delete </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
            <v-col
              cols="6"
              class="pt-5 pb-1 text-uppercase font-weight-bold grey--text text--darken-1"
            >
              Total
            </v-col>
            <v-col cols="6" class="pt-5 pb-1 text-right font-weight-bold">
              {{ parseInt(receiptOfPayment) }}Lx
            </v-col>
            <v-col
              cols="6"
              class="py-1 text-uppercase font-weight-bold grey--text text--darken-1"
            >
              Delivery
            </v-col>
            <v-col cols="6" class="py-1 text-right font-weight-bold">
              {{ parseInt(receiptOfPayment / 2) }}Lx
            </v-col>
            <v-col
              cols="6"
              class="py-1 text-uppercase font-weight-bold grey--text text--darken-1"
            >
              Total to pay
            </v-col>
            <v-col cols="6" class="py-1 text-right font-weight-bold">
              {{ parseInt(receiptOfPayment + receiptOfPayment / 2) }}Lx
            </v-col>
            <v-col cols="12" class="red--text text--lighten-3">{{ error }}</v-col>
            <v-col cols="12" class="py-3">
              <v-btn color="deep-purple lighten-1" block text v-on:click="pay()"
                >Confirm Order</v-btn
              >
              <Pay
                apiKey="JOr5b3I8ovLag7Ytkq#EUQZ1eimNdz"
                ip="cb%3jsoQ6geYRmWywIX4Lu2S@"
                :monto="parseInt(receiptOfPayment + receiptOfPayment / 2)"
                ejecute="limpiar_compra"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TheNavBar from "../components/TheNavBar.vue";
import Pay from "../components/Pay.vue";

export default {
  components: {
    Pay,
    TheNavBar,
  },
  data() {
    return {
      receiptOfPayment: 0,
      fullname: "",
      phone: "",
      location: "",
      description: "",
      rules: [(value) => !!value || "The field is required."],
      error: "",
    };
  },
  created() {
    if (this.inCart === null) {
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    this.totalToPay();
    document.querySelector("#button_pagar").classList.add("d-none");
  },
  methods: {
    eliminar(value) {
      for (var i = 0; i < this.inCart.length; i++) {
        if (this.inCart[i].id === value) {
          this.inCart.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("products", JSON.stringify(this.inCart));
      this.totalToPay();
    },
    totalToPay() {
      this.receiptOfPayment = 0;
      this.inCart.forEach((cart) => {
        this.receiptOfPayment += parseInt(cart.price) * parseInt(cart.quantity);
      });
      if (this.receiptOfPayment === 0) {
        this.$router.push("/");
      }
    },
    pay() {
      this.error = "";
      const validator = /^[a-zA-ZÁ-ÿ\s]{1,20}$/;
      console.log(this.description);
      if (
        validator.test(this.fullname) &&
        this.phone !== "" &&
        this.location !== "" &&
        this.description !== ""
      ) {
        const pay = document.querySelector("#button_pagar");
        pay.click();
      } else {
        this.error = "Fill in the fields correctly";
      }
    },
  },
  computed: {
    ...mapState(["inCart"]),
  },
};
</script>
