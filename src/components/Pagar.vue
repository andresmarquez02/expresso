<template>
  <div>
    <button type="button" class="btn btn-danger w-100 rounded-pill" id="button_pagar" v-on:click="show(0)">Confirmar Orden</button>
    <div class="lxmodal23 no-scale" id="Lexachange12#er">
    <div class="lxdialogo23">
        <div class="lxcontainer23">
            <div class="lxcabecera23">
                <h2 class="lxtitulo23">Lexachange</h2>
                    <button type="button" class="lxclose23" v-on:click="show(1)">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="lxbody23">
                <form action="" method="post" v-on:submit.prevent="formulario()" id="lxformsub23">
                    <div class="lxcmpos23">
                        <input type="text" maxlenght=25 minlenght=25 name="mi_ip" placeholder="Ip de su cartera">
                        <small class="lxerror23"></small>
                    </div>
                    <div class="lxcmpos23">
                        <input type="email" maxlenght=200 name="email" placeholder="Email">
                        <small class="lxerror23"></small>
                    </div>
                    <div class="lxbutton23">
                        <button type="submit" class="lxsubmit23">Pagar</button>
                    </div>
                    <div class="lxcmpos23">
                        <small class="lxgeneralerror23"></small>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
      <div class="lxloader23 lxnone-preload">
      <div class="lxpreloader23"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Pagar',
  props: ['apiKey', 'ip', 'monto', 'ejecute'],
  methods: {
    show (value) {
      const modal = document.querySelector('.lxmodal23')
      if (value === 0) {
        modal.style.display = 'flex'
        setTimeout(() => {
          modal.classList.add('scale')
          modal.classList.remove('no-scale')
        }, 200)
      } else {
        modal.classList.add('no-scale')
        modal.classList.remove('scale')
        setTimeout(() => {
          modal.style.display = 'none'
        }, 605)
      }
    },
    formulario () {
      const formulario = document.querySelector('#lxformsub23')
      const div = document.querySelector('.lxloader23')
      div.classList.remove('lxnone-preload')
      const regular = {
        ip: /^.{25,25}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
      }
      if (regular.ip.test(formulario.elements[0].value) && regular.email.test(formulario.elements[1].value)) {
        this.sender()
      } else {
        const error = document.querySelectorAll('.lxerror23')
        if (!regular.ip.test(formulario.elements[0].value)) {
          error.forEach((el, i) => {
            i === 0 ? el.textContent = 'Su ip es invalida' : el.textContent = ''
          })
        } else if (!regular.email.test(formulario.elements[1].value)) {
          error.forEach((el, i) => {
            i === 1 ? el.textContent = 'Su direcion de correo es invalida' : el.textContent = ''
          })
        } else {
          error.forEach(el => {
            el.textContent = 'Sus datos son incorrectos'
          })
        }
        div.classList.add('lxnone-preload')
      }
    },
    async sender () {
      const formulario = document.querySelector('#lxformsub23')
      const div = document.querySelector('.lxloader23')
      const form = new FormData()
      form.append('api_key', this.apiKey)
      form.append('ip', this.ip)
      form.append('monto', this.monto)
      form.append('mi_ip', formulario.elements[0].value)
      form.append('email', formulario.elements[1].value)
      // http://localhost/Lexachange/public/api/transferencia/lexa
      const c = await fetch('http://localhost/Lexachange/public/api/transferencia/lexa', {
        method: 'POST',
        body: form
      })
      const r = await c.json()
      if (c.status === 403) {
        document.querySelector('.lxgeneralerror23').style.color = 'red'
        document.querySelector('.lxgeneralerror23').textContent = r.mensaje
      } else if (c.status === 200) {
        document.querySelector('.lxgeneralerror23').style.color = 'green'
        document.querySelector('.lxgeneralerror23').textContent = r.mensaje
        formulario.elements[0].value = ''
        formulario.elements[1].value = ''
        if (this.ejecute !== 'none') {
          this.limpiar_compra()
        }
        if (document.getElementById('lxR')) {
          const redirect = document.getElementById('lxR')
          location.href = redirect
        } else {
          localStorage.removeItem('producto')
          this.$store.state.el_carrito = []
          this.$store.state.enCarrito = []
        }
      } else {
        document.querySelector('.lxgeneralerror23').style.color = 'red'
        document.querySelector('.lxgeneralerror23').textContent = 'Error inseperado, vuelva a intentar. (Si el error persiste contacte con la empresa a cargo)'
      }
      const error = document.querySelectorAll('.lxerror23')
      error.forEach(el => {
        el.textContent = ''
      })
      div.classList.add('lxnone-preload')
    },
    ...mapMutations(['limpiar_compra'])
  }
}
</script>
