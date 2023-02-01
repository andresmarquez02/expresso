import Vue from 'vue'
import Vuex from 'vuex'
import { createClient } from 'pexels';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    products: [],
    statusProducts: 'search',
    cart: '',
    init: false,
    inCart: JSON.parse(localStorage.getItem('products')) === null ? [] : JSON.parse(localStorage.getItem('products')),
    productToCart: []
  },
  mutations: {
    getUser (state) {
      const dataUser = localStorage.getItem('user')
      if (dataUser != null) {
        state.user = dataUser
      }
    },
    fede (state) {
      state.cart = ''
    },
    no_fede (state) {
      state.cart = 'd-none'
    },
    inYouCart (state) {
      state.inCart = JSON.parse(localStorage.getItem('products'))
      if (state.inCart == null) {
        const productos = []
        localStorage.setItem('products', JSON.stringify(productos))
        state.inCart = []
      }
    },
    deleteBuy (state) {
      state.inCart = ''
      localStorage.removeItem('products')
    },
    setAlert(state, status){
        state.init = status;
    },
    getProducts(state){
        state.products = [];
        state.statusProducts = "search";
        const client = createClient("MFHpKhabVi4qN6ulEJcRw3EkmJ70bxEhrkUPVHoJsGmuuRpX4IS6E3gI");
        const query = 'Food';
        client.photos.search({ query, per_page: 39}).then(photos => {
            let countDiscount = 0, countSpeciality = 0;
            photos.photos.forEach((element, i) => {
                let discount = 0, speciality = 0;
                if((Math.floor(Math.random() * 2)) == 1 && countDiscount < 9){
                    discount = Math.floor(Math.random() * 100);
                    countDiscount++;
                } else if(countSpeciality < 8) {
                    speciality = 1;
                    countSpeciality++;
                }

                state.products.push({
                    id: element.id,
                    name: element.alt,
                    img: element.src.original,
                    imgLazy: element.src.tiny,
                    price: Math.floor(Math.random() * 20),
                    discount,
                    speciality
                });
            });
            if(state.products.length === 0){
                state.statusProducts = "error";
            } else{
                state.statusProducts = "success";
            }
        }).finally(()=>{
            if(state.products.length === 0){
                state.statusProducts = "error";
            } else{
                state.statusProducts = "success";
            }
        });
    }
  }
})
