<template>
  <div class="mt-12">
    <v-container
      class="justify-center mb-10 d-flex"
      v-if="$store.state.usuario == ''"
    >
      <v-form v-on:submit.prevent="subscripcion()" class="w-md-50 w-80">
        <div>
          <h2 class="mb-6 grey--text">Subcribete a Expresso</h2>
          <v-text-field
            v-model="correo"
            :rules="emailRules"
            label="Correo"
            required
            class="d-inline"
          ></v-text-field>
          <v-btn color="red darken-4" type="submit" text class="d-inline"> subcribirme </v-btn>
        </div>
      </v-form>
    </v-container>
    <v-card>
      <v-footer class="pa-0">
        <v-card flat tile width="100%" class="text-center white accent-1">
          <v-card-text>
            <a :href="icon.link" target="_blank" rel="noopener noreferrer" v-for="icon in icons" :key="icon.icon" >
              <v-btn bag class="mx-4" icon>
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </v-btn>
            </a>
          </v-card-text>
          <div class="px-4 d-flex justify-content-center">
            <v-divider class="red lighten-4"></v-divider>
          </div>
          <v-card-text>
            {{ new Date().getFullYear() }} — <strong class="red--text">Expresso</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
    <Alert :init="initAlert" :type="typeAlert" :msg="msg" />
  </div>
</template>
<script>
  import Alert from '@/components/Alert.vue'

  export default {
    components:{
      Alert
    },
    data() {
      return {
        correo: "",
        icons: [
          {icon: "mdi-facebook", link: "https://www.facebook.com/andresmarquez02/"},
          {icon: "mdi-instagram", link: "https://www.instagram.com/andres_marquez02"}, 
          {icon: "mdi-whatsapp", link: "https://api.whatsapp.com/send/?phone=%2B584129298833&text&app_absent=0"}, 
          {icon: "mdi-github", link: "https://github.com/andresmarquez02"}
        ],
        emailRules: [
          (value) => !!value || "Requerido.",
          (value) => {
            const pattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Correo invalido";
          },
        ],
        msg: '',
        typeAlert: '',
        initAlert: false
      };
    },
    methods: {
      subscripcion() {
        const email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
        if (this.correo !== "" && email.test(this.correo)) {
          localStorage.setItem("usuario", this.correo);
          this.$store.state.usuario = this.correo;
        } else {
          this.msg = "Correo Electronico invalido";
          this.typeAlert = "error";
          this.initAlert = true;
        }
      },
    },
  };
</script>
