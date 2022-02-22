<template>
  <div class="grey lighten-5">
    <Nav/>
    <div class="m-0 mt-5 row">
      <div class="px-7 col-md-6 col-12">
        <div class="mb-4">
          <h2 class="pt-2 text-center text-uppercase">Datos de Entrega</h2>
        </div>
        <v-card class="pa-4">
          <div>
            <div class="py-3">
              <v-text-field
                label="Nombre Completo"
                :rules="rules"
                hide-details="auto"
                v-model="nombre"
              ></v-text-field>
            </div>
            <div class="py-3">
              <v-text-field
                label="Telefono"
                :rules="rules"
                hide-details="auto"
                v-model="telefono"
              ></v-text-field>
            </div>
            <div class="py-3">
              <v-text-field
                label="Correo"
                :rules="rules"
                hide-details="auto"
                v-model="correo"
              ></v-text-field>
            </div>
            <div class="py-3">
              <v-text-field
                label="Ubicación"
                :rules="rules"
                hide-details="auto"
                v-model="ubicacion"
              ></v-text-field>
            </div>
            <div class="pt-3">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="planificado"
                    label="Fecha de Entrega"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="rules"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="planificado"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
            <div class="pb-3">
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="Hora de Entrega"
                    readonly
                    :rules="rules"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal2"
                  v-model="time"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="modal2 = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(time)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </div>
          </div>
        </v-card>
      </div>
      <div class="px-7 col-md-6 col-12">
        <div class="mb-4">
          <h2 class="pt-2 text-center text-uppercase">Tus Productos</h2>
        </div>
        <v-card
          elevation="2"
        >
          <div class="pa-4">
            <div class="row">
              <div class="text-start col-5 font-weight-bold text-uppercase">Producto</div>
              <div class="text-right col-5 font-weight-bold text-uppercase">Total</div>
              <template v-for="(carrito,i) in enCarrito">
                  <div class="py-2 col-5" :key="i+11000">{{carrito.cantidad}}X&nbsp;&nbsp;{{carrito.producto}}</div>
                  <div class="py-2 text-right col-5" :key="i-2000000">{{parseInt(carrito.precio * carrito.cantidad)}} Lx</div>
                  <div class="py-2 text-right col-2" :key="i+3">
                    <v-icon class="red--text lighten-1"  v-on:click="eliminar(carrito.id)">mdi-delete</v-icon>
                  </div>
              </template>
              <div class="py-2 col-6 text-uppercase font-weight-bold">Total</div>
              <div class="py-2 text-right col-6 h5 text-uppercase font-weight-bold">{{parseInt(recibo)}} Lx</div>
              <div class="py-2 col-6 text-uppercase font-weight-bold">Delivery</div>
              <div class="py-2 text-right col-6 h5 text-uppercase font-weight-bold">{{parseInt(recibo / 2)}} Lx</div>
              <div class="py-2 col-6 text-uppercase font-weight-bold">Total a pagar</div>
              <div class="py-2 text-right col-6 h4 text-uppercase font-weight-bold text-danger">{{parseInt(recibo + recibo / 2)}} Lx</div>

              <div class="py-5 col-12">
                <v-btn color="red lighten-2" text v-on:click="pagar()">Confirmar Orden</v-btn>
                <Pagar apiKey="3DywEb_ZBIXFYtC0#Rd#HslJKn%Ue1" ip="cgURN_Isdx7oqt#ZADe3uKwF8" :monto="parseInt(recibo + recibo / 2)" ejecute="limpiar_compra" />
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Pagar from '../components/Pagar.vue'

export default {
  components: {
    Pagar,
    Nav,
  },
  data () {
    return {
      enCarrito: [],
      planificado: '',
      recibo: 0,
      nombre: 'asdad',
      telefono: '124234',
      correo: 'aaa@gmail.com',
      ubicacion: '',
      time: null,
      menu2: false,
      modal2: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu3: false,
      rules: [
        value => !!value || 'El campo es requerido.',
      ],
      error: "",
      alerting: false
    }
  },
  created () {
    this.enCarrito = JSON.parse(localStorage.getItem('producto'))
    if (this.enCarrito === null) {
      window.location.pathname = 'tienda'
    }
  },
  mounted () {
    this.enCarrito = JSON.parse(localStorage.getItem('producto'))
    if (this.enCarrito === null) {
      window.location.pathname = 'tienda'
    }
    this.recibo_total()
    const carrito = JSON.parse(localStorage.getItem('producto')) === null ? [] : JSON.parse(localStorage.getItem('producto'))
    this.$store.state.enCarrito = carrito
    if (this.$store.state.usuario !== '') {
      this.correo = this.$store.state.usuario
    }
    document.querySelector('#button_pagar').classList.add('d-none')
  },
  methods: {
    eliminar (value) {
      const producto = JSON.parse(localStorage.getItem('producto'))
      for (var i = 0; i < producto.length; i++) {
        if (producto[i].id === value) {
          producto.splice(i, 1)
          this.alerting = "true";
          this.error = "Eliminado con exito";
          break
        }
      }
      localStorage.setItem('producto', JSON.stringify(producto))
      this.enCarrito = JSON.parse(localStorage.getItem('producto'))
      this.$store.state.enCarrito = JSON.parse(localStorage.getItem('producto'))
      this.recibo_total()
    },
    recibo_total () {
      let total = 0
      for (var i = 0; i < this.enCarrito.length; i++) {
        total += this.enCarrito[i].precio * this.enCarrito[i].cantidad
      }
      this.recibo = total
      if (parseInt(this.recibo) === 0) {
        this.$router.push('/')
      }
    },
    pagar () {
      const letras = /^[a-zA-ZÁ-ÿ\s]{1,20}$/
      const numeros = /^\d{9,15}$/
      const correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
      const tiempo = new Date(this.planificado)
      const tiempoActual = new Date()
      if (
        letras.test(this.nombre) &&
        this.telefono !== "" &&
        correo.test(this.correo) &&
        this.ubicacion !== "" &&
        this.planificado !== '' &&
        tiempo > tiempoActual &&
        this.time !== null
      ) {
        const pago = document.querySelector('#button_pagar')
        pago.click()
      } else {
        this.alerting = true;
        this.error = "Llena los datos antes de enviar";
      }
    }
  }
}
</script>
