<template>
  <div class="mt-12">
    <v-card elevation="0">
      <v-footer class="pa-0">
        <v-card
          flat
          tile
          width="100%"
          elevation="0"
          color="white"
          class="pt-12 accent-1"
        >
          <v-row class="px-10 ma-0">
            <v-col cols="12" md="6" lg="4" class="pr-lg-8">
              <h3 class="mb-4 font-weight-light text-h4">Expresso</h3>
              <p class="grey--text text--darken-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, nemo suscipit provident consectetur unde alias
                repellendus.
              </p>
            </v-col>
            <v-col cols="12" sm="6" md="3" lg="2">
              <h3 class="mb-4 grey--text text--darken-2">Quick Links</h3>
              <router-link :to="{ name: 'Home' }" class="mb-3 d-block">
                <span class="grey--text text--darken-1">Home</span>
              </router-link>
              <router-link :to="{ name: 'Store' }" class="mb-3 d-block">
                <span class="grey--text text--darken-1">Store</span>
              </router-link>
              <router-link
                class="mb-3 d-block"
                :to="{ name: 'Cart' }"
                v-if="$store.state.inCart != ''"
              >
                <span class="grey--text text--darken-1">Cart</span>
              </router-link>
            </v-col>
            <v-col cols="12" sm="6" md="3" lg="2">
              <h3 class="mb-4 grey--text text--darken-2">Security</h3>
              <div class="mb-3 d-block">
                <span class="grey--text text--darken-1 pointer">Licence</span>
              </div>
              <div class="mb-3 d-block">
                <span class="grey--text text--darken-1 pointer">Payments</span>
              </div>
              <div class="mb-3 d-block">
                <span class="grey--text text--darken-1 pointer"
                  >Politique & Use</span
                >
              </div>
            </v-col>
            <v-col cols="12" lg="4">
              <h3 class="mb-4 grey--text text--darken-2">Newsletter</h3>
              <v-form ref="form" v-on:submit.prevent="subscripcion()">
                <div>
                  <div class="v-input__slot" style="align-items: start">
                    <v-text-field
                      elevation="0"
                      placeholder="Email address"
                      outlined
                      dense
                      v-model="email"
                      :rules="emailRules"
                    ></v-text-field>
                    <div class="pl-2">
                      <v-btn
                        elevation="0"
                        color="deep-purple lighten-1 white--text"
                        type="submit"
                        outlined
                        text
                        height="40"
                      >
                        Subscribe
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-form>
              <a
                :href="icon.link"
                target="_blank"
                rel="noopener noreferrer"
                v-for="icon in icons"
                :key="icon.icon"
              >
                <v-btn bag class="mx-2" icon>
                  <v-icon size="24px">
                    {{ icon.icon }}
                  </v-icon>
                </v-btn>
              </a>
            </v-col>
          </v-row>
          <div class="px-10 mt-12 d-flex justify-content-center">
            <v-divider class="grey lighten-2"></v-divider>
          </div>
          <div class="text-center py-7 text-title">
            {{ new Date().getFullYear() }} -
            <strong class="deep-purple--text">Expresso </strong>
            - Created by
            <v-icon color="red">mdi-heart</v-icon>
            <a
              href="https://andresmarquez02.github.io"
              style="color: rgba(0, 0, 0, 0.87)"
              >Andres Marquez</a
            >
          </div>
        </v-card>
      </v-footer>
    </v-card>
    <Alert :init="initAlert" :type="typeAlert" :msg="msg" />
  </div>
</template>
<script>
import Alert from "@/components/Alert.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Alert,
  },
  data() {
    return {
      email: "",
      icons: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/andresmarquez02/",
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/andres_marquez02",
        },
        {
          icon: "mdi-whatsapp",
          link: "https://api.whatsapp.com/send/?phone=%2B584129298833&text&app_absent=0",
        },
        { icon: "mdi-github", link: "https://github.com/andresmarquez02" },
      ],
      emailRules: [
        (value) => !!value || "The field is required",
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "The field is required";
        },
      ],
      msg: "",
      typeAlert: "",
      initAlert: false,
    };
  },
  methods: {
    subscripcion() {
      this.initAlert = false;
      const email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
      if (email.test(this.email)) {
        this.getUser();
        this.msg = "Thank you by register";
        this.typeAlert = "success";
        this.initAlert = true;
        this.$refs.form.reset()
      } else {
        this.msg = "The email is invalid";
        this.typeAlert = "error";
        this.initAlert = true;
      }
    },
    ...mapMutations(["getUser"]),
  },
};
</script>
