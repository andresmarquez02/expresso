import Vue from 'vue'
import Vuex from 'vuex'
import tienda from '@/tienda/tienda.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    tienda: tienda || [],
    el_carrito: '',
    enCarrito: JSON.parse(localStorage.getItem('producto')) === null ? [] : JSON.parse(localStorage.getItem('producto')),
    producto_a_carrito: []
  },
  mutations: {
    getUser (state) {
      const DatosUsuario = localStorage.getItem('usuario')
      if (DatosUsuario != null) {
        state.usuario = DatosUsuario
      }
    },
    fede (state) {
      state.el_carrito = ''
    },
    no_fede (state) {
      state.el_carrito = 'd-none'
    },
    deleteSub (state) {
      sessionStorage.removeItem('usuario')
      state.usuario = ''
      state.fomSubscripcion = ''
      state.vh_form = 'vh-75'
    },
    alert () {
      alert('Esta función no esta disponible')
    },
    enTucarrito (state) {
      state.enCarrito = JSON.parse(localStorage.getItem('producto'))
      if (state.enCarrito == null) {
        const productos = []
        localStorage.setItem('producto', JSON.stringify(productos))
        state.enCarrito = []
      }
    },
    limpiar_compra (state) {
      state.enCarrito = ''
      localStorage.removeItem('producto')
      window.location.pathname = 'about'
    }
  }
})
