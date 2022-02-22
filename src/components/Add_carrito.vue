<template>
  <div>
    <v-dialog v-model="dialog" max-width="320">
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
        <v-card-title class="text-h5"> Agregar al carrito </v-card-title>
        <v-card-text class="my-3">
          <v-text-field
            label="Cantidad del Producto"
            :rules="rules"
            hide-details="auto"
            v-model="cantidad"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red lighten-2" text @click="dialog = false">
            Cerrar
          </v-btn>
          <v-btn color="red lighten-2" text v-on:click="add()">Agregar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        cantidad: "",
        dialog: false,
        rules: [
          (value) => !!value || "Requerido."
        ],
        msg: '',
        typeAlert: '',
        initAlert: false
      };
    },
    methods: {
      add() {
        this.dialog = false;
        this.$store.state.producto_a_carrito = JSON.parse(
          localStorage.getItem("producto_a_carrito")
        );
        if (this.$store.state.producto_a_carrito == null) {
          return 0;
        }
        const cantidad = parseInt(this.cantidad);
        if (this.cantidad !== "" && cantidad > 0) {
          let producto = JSON.parse(localStorage.getItem("producto"));
          if (producto === null || producto === "" || producto.length === 0) {
            producto = [
              {
                id: this.$store.state.producto_a_carrito.id,
                producto: this.$store.state.producto_a_carrito.producto,
                precio: this.$store.state.producto_a_carrito.precio,
                cantidad: parseInt(this.cantidad),
              },
            ];
          } else {
            let vall = false;
            for (var i = 0; i < producto.length; i++) {
              if (this.$store.state.producto_a_carrito.id === producto[i].id) {
                producto[i].cantidad += parseInt(this.cantidad);
                vall = true;
                break;
              }
            }
            if (vall === false) {
              producto.push({
                id: this.$store.state.producto_a_carrito.id,
                producto: this.$store.state.producto_a_carrito.producto,
                precio: this.$store.state.producto_a_carrito.precio,
                cantidad: parseInt(this.cantidad),
              });
            }
          }
          this.cantidad = "";
          localStorage.setItem("producto", JSON.stringify(producto));
          this.$store.state.enCarrito = JSON.parse(
            localStorage.getItem("producto")
          );
          this.msg = "Producto Agregado al Carrito";
          this.typeAlert = "success";
          this.initAlert = true;

        } else {
          this.msg = "Cantidad incorrecta";
          this.typeAlert = "error";
          this.initAlert = true;
        }
      },
    },
  };
</script>
