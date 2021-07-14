<template>
    <div class="mt-4">
        <div :class="fomSubscripcion">
            <div class="row m-0 h-100 pt-5 px-md-5 px-3 text-secondary" id="home_expresso">
                <div class="col-12 mb-3 text-center">
                    <h1 class="font-weight-light ">Suscribete</h1>
                </div>
                <div class="col-md-3 p-0">
                    <div class="form-group">
                        <input type="text" class="form-control border-0 rounded-0" v-model="nombre" placeholder="Nombre" minlength="4"
                        maxlength="255">
                        <small class="text_info" :class="errores">El nombre debe tener al menos 5 caracteres.</small>
                    </div>
                </div>
                <div class="col-md-3 p-0">
                    <div class="form-group">
                        <input type="email" class="form-control border-0 rounded-0" v-model="correo" placeholder="Correo"
                        minlength="4" maxlength="255">
                        <small class="text_info" :class="errores">Recuerde @ y .com en su correo</small>
                    </div>
                </div>
                <div class="col-md-3 p-0 mb-3">
                    <div class="form-group">
                        <input type="number" class="form-control border-0 rounded-0" v-model="telefono" v-on:keyup.Enter="subscripcion()"
                        placeholder="Num° Telefono">
                        <small class="text_info" :class="errores">El num° de telefono debe tener al menos 7 digitios</small>
                    </div>
                </div>
                <div class="col-md-3 p-0">
                        <button type="button" class="btn btn-danger btn-block rounded-0" v-on:click="subscripcion()">Suscribirme</button>
                </div>
            </div>
        </div>
        <div>
            <footer class="row m-0 text-secondary h-auto pb-5" id="footer">
                <div class="col-md-12 d-flex justify-content-center">
                    <div class="w-md-50 mt-4">
                        <h1 class="display-4 text-center my-3 font-weight-bold ">Expresso</h1>
                        <div class="text-muted text-center my-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti
                            laboriosam! Illum hic accusantium error neque atque maxime nobis modi iure
                            dicta, odio asperiores magnam itaque voluptates beatae facere necessitatibus?
                        </div>
                    </div>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <span>Politicas de privacidad. | Politicas de uso. | Cookies y permisos. </span>
                </div>
            </footer>
        </div>
      </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: function () {
    return {
      count: 1,
      nombre: '',
      telefono: '',
      correo: '',
      errores: 'd-none',
      vh_form: ''
    }
  },
  methods: {
    subscripcion () {
      const v = {
        nombres: /^[a-zA-ZÁ-ÿ\s]{5,255}$/,
        telefono: /^\d{7,50}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
      }
      if (v.nombres.test(this.nombre) && v.telefono.test(this.telefono) && v.correo.test(this.correo)) {
        const usuario = {
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo
        }
        sessionStorage.setItem('usuario', JSON.stringify(usuario))
        alert('Presione aceptar para finalizar la subscripcion.')
        this.errroes = 'd-none'
        this.nombre = ''
        this.correo = ''
        this.telefono = ''
      } else {
        this.errores = 'd-block'
      }
    }
  },
  computed: {
    ...mapState(['fomSubscripcion'])
  }
}
</script>
