<template>
  <div>
    <div class="row m-0 p-0 text-dark my-2 py-md-5 px-lg-4 px-md-2 px-1">
        <div class="col-md-5 pl-md-1 pl-3 d-flex align-items-center">
            <div>
                <h5 class="text_info">Importante</h5>
                <h1 class="font-weight-light ">{{usuario.nombre !== undefined ? `${usuario.nombre}. En expresso queremos failitar tu vida` : "Expresso te facilita la vida"}}</h1>
                <div class="w-75">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti
                    laboriosam! Illum hic accusantium error neque atque maxime nobis modi       iure
                    dicta.
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="row m-0">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 px-3 mb-5 d-flex">
                    <div class="p-2 bg-light shadow-sm">
                        <div class="svg bike my-4">
                        </div>
                        <h4 class="text-center font-weight-light ">Delivery a tu medida</h4>
                        <small class="px-xl-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti
                        </small>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 px-3 mb-5 d-flex">
                    <div class="p-2 bg-light shadow-sm">
                        <div class="svg money my-4">
                        </div>
                        <h4 class="text-center font-weight-light ">Planificacion de tiempo.</h4>
                        <small class="px-xl-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti
                        </small>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 px-3 mb-5 d-flex">
                    <div class="p-2 bg-light shadow-sm">
                        <div class="svg earth my-4">
                        </div>
                        <h4 class="text-center font-weight-light ">Envios Internacionales</h4>
                        <small class="px-xl-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row m-0 px-md-5">
        <div class="col-12 text-center text-dark py-3">
            <h1 class="font-weight-light ">
                Acerca de <span class="text_info">Nosotros</span>
            </h1>
        </div>
        <div class="col-md-4 col-sm-12 px-md-3 px-4 pb-5" :key="ll.id" v-for="ll in info">
            <div class="px-lg-3">
                <div class="px-0 position-relative">
                    <img :src="ll.img" class="w-100 rounded vh-40" alt="">
                </div>
                <div class="d-block position-relative w-100">
                    <div class="p-3 rounded shadow-sm bg-white ubic_information">
                        <h4 class="font-weight-light ">{{ll.titulo}}</h4>
                        <small class="text_info">
                            Expresso tu mejor opcion
                        </small>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum hic accusantium
                            error neque atque maxime nobis modi iure dicta.
                        </div>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: function () {
    return {
      info: [
        { id: 1, img: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?cs=srgb&dl=pexels-norma-mortenson-4393668.jpg&fm=jpg', titulo: 'Repartidores' },
        { id: 2, img: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', titulo: 'Subscripcion' },
        { id: 3, img: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', titulo: 'Compras' }
      ]
    }
  },
  computed: {
    ...mapState(['usuario'])
  }
}
</script>
