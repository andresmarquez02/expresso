import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    fomSubscripcion: '',
    vh_form: 'vh-75',
    tienda: [],
    el_carrito: '',
    enCarrito: ''
  },
  mutations: {
    getUser (state) {
      const DatosUsuario = sessionStorage.getItem('usuario')
      if (DatosUsuario != null) {
        state.usuario = JSON.parse(DatosUsuario)
      }
      if (state.usuario !== '') {
        state.fomSubscripcion = 'd-none'
        state.vh_form = ''
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
    }
  },
  actions: {
  },
  modules: {
  }
})
