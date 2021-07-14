<template>
  <div>
    <div class="mb-5 bg-tienda-left position-relative vh-tienda w-100 px-md-5 pt-md-3">
      <Nav/>
      <div class="d-flex justify-content-center align-items-center vh-tienda-title">
        <div class="text-center text-white w-md-50 pt-sm-3">
          <p>L A &nbsp; M A G I A &nbsp; Y &nbsp; E L &nbsp; S A B O R &nbsp; E N &nbsp; U N &nbsp; S O L O &nbsp; L U G A R.</p>
          <div class="display-4 title">
              Tienda <span class="font-weight-bold">Expresso</span>.
              Exelencia en platillos.
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 px-12">
        <div class="col-xl-3 col-md-4 col-sm-6 mb-3 d-flex" :key="value.id" v-for="value in tienda">
          <div class="d-flex">
            <div class="rounded-0 img_tienda bg-light text-dark bg-info-hover mb-2" role="button" data-toggle="modal"
            data-target="#modelId" v-on:click="shop(value)">
                <div class="overflow-hidden">
                    <img style="height:18rem" class="w-100" :src="value.img" alt="">
                </div>
                <div class="p-2 row m-0">
                    <div class="h4 col-6 font-weight-bold title">
                        {{value.producto}}
                    </div>
                    <div class="col-6 h4 d-flex justify-content-end font-weight-bold text_info">
                        <span>
                            {{value.precio}} Lx
                        </span>
                    </div>
                    <div class="col-12">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deleniti
                        laboriosam.
                        <br>
                        <small v-if="value.especialidad === 1" class="badge-dark mt-2 p-1">Producto en promocion</small>
                    </div>
                    <div class="col-12 d-flex justify-content-end text_info">
                        <i class="fas fa-shopping-cart "></i>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                          <label for="">Cantidad del producto</label>
                          <input type="number" class="form-control" v-on:keyup.Enter="add()" placeholder="Cantidad" v-model="cantidad" min="1" required>
                          <small id="helpId" :class="text">Obligatorio*</small>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-danger text-white rounded-0" data-dismiss="modal" v-on:click="add()">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="enCarrito != ''">
        <ul class="list-group fixed-bottom list-fixed hidexs" id="list_list">
            <li class="list-group-item pb-1 px-1 text-center">
                <div class="row m-0">
                    <div class="col-9">
                        Carrito
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <button type="button" class="btn btn-light btn-sm rounded-circle"
                        v-on:click="cerrar_abrir(1)">&times;</button>
                    </div>
                </div>
            </li>
            <li class="list-group-item pb-1">
                <div class="row m-0">
                    <div class="col-4">
                        Producto
                    </div>
                    <div class="col-4">
                        Precio
                    </div>
                    <div class="col-4">
                        Cantidad
                    </div>
                </div>
            </li>
            <li class="list-group-item no-hover-list py-1 px-1">
                <div class="row m-0" :key="carrito.producto" v-for="(carrito,i) in enCarrito">
                    <div class="col-12" v-if="i !== 0"><hr></div>
                    <div class="col-4">
                        {{carrito.producto}}
                    </div>
                    <div class="col-4">
                        {{carrito.precio}} Lx
                    </div>
                    <div class="col-4">
                        {{carrito.cantidad}}
                    </div>
                </div>
            </li>
            <li class="list-group-item py-1 px-1 d-flex justify-content-center">
                <div>
                    <button type="button" id="map_comprar" class="btn btn-light rounded-pill"
                    data-toggle="modal" data-target="#modelComprar" v-on:click="items(1)">Comprar</button>
                    <button type="button" id="map_comprar" class="btn btn-light rounded-pill"
                    v-on:click="cerrar_abrir(1)">Minimizar</button>
                </div>
            </li>
        </ul>
        <button type="button" class="btn btn-danger rounded-pill shows fixed-bottom list-fixed button-car" id="button_list"
        v-on:click="cerrar_abrir(2)"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Carrito</button>
    </div>
    <div class="modal fade" id="modelComprar" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <h5 class="modal-title">{{title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" id="cerrar_comprar" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <div :class="item_1">
                        <div class="row m-0">
                        <div class="col-4">
                            Producto
                        </div>
                        <div class="col-2">
                            Precio
                        </div>
                        <div class="col-2">
                            Cantidad
                        </div>
                        <div class="col-4">
                        </div>
                    </div>
                    <div class="row m-0" :key="carrito.producto" v-for="carrito in enCarrito">
                        <div class="col-4 py-2">
                            {{carrito.producto}}
                        </div>
                        <div class="col-2 py-2">
                            {{carrito.precio}} Lx
                        </div>
                        <div class="col-2 py-2">
                            {{carrito.cantidad}}
                        </div>
                        <div class="col-4 py-2">
                            <button type="button" class="btn btn-danger rounded-pill" v-on:click="eliminar(carrito.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i> Eliminar
                            </button>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-light rounded-pill shadow"
                        v-on:click="items(2)">Siguiente</button>
                    </div>
                    </div>
                    <div :class="item_2">
                        <div>Ubique el <i class="fa fa-location-arrow" aria-hidden="true"></i>
                        para saber donde quiere que se le entregue su pedido</div>
                        <Mapa />
                        <div class="modal-footer d-flex justify-content-center">
                           <div>
                                <button type="button" class="btn btn btn-light rounded-pill shadow"
                                v-on:click="items(1)">Atras</button>
                                <button type="button" class="btn btn-danger text-white rounded-pill shadow"
                                v-on:click="items(3)">Ver y pagar</button>
                           </div>
                        </div>
                    </div>
                    <div :class="item_3">
                        <div class="form-group">
                          <label for="">Tipo de entrega</label>
                          <select class="form-control" v-model="tipo_entrega" v-on:change="type()">
                            <option value="2">Planificar hora </option>
                            <option value="3">Planificar día</option>
                          </select>
                          <div v-if="tipo_entrega == 2">
                                <div class="form-group">
                                    <label for="">Ingresa la hora</label>
                                    <input type="time" class="form-control" placeholder="00:00"
                                    v-on:change="acceso()" v-model="planificado">
                                </div>
                          </div>
                          <div v-if="tipo_entrega == 3">
                                <div class="form-group">
                                    <label for="">Ingresa la hora</label>
                                    <input type="datetime-local" class="form-control" placeholder="00:00"
                                    v-on:change="acceso()" v-model="planificado">
                                </div>
                          </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <div>
                                <button type="button" class="btn btn-danger text-white rounded-pill shadow"
                                v-on:click="items(2)">Atras</button>
                                <form action="./pagar" method="post" class="d-inline">
                                    <input type="hidden" name="_token" :value="token">
                                    <button type="button" class="btn btn-light rounded-pill shadow" :class="button_access"
                                    v-on:click="items(4)">Pagar</button>
                                    <button type="submit" id="submit" class="btn btn-primary d-none"></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div :class="item_4">
                        <div v-if="recibo != 0">
                            <div class="row my-2">
                                <div class="col-6 d-flex justify-content-end">
                                    Total=
                                </div>
                                <div class="col-6">
                                    {{recibo}} Lx
                                </div>
                                <div class="col-6 d-flex justify-content-end">
                                    Delivery=
                                </div>
                                <div class="col-6">
                                    {{recibo / 2}} Lx
                                </div>
                                <div class="col-6 d-flex justify-content-end">
                                     Total a pagar=
                                </div>
                                <div class="col-6">
                                     {{parseFloat(recibo + recibo / 2)}} Lx
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <div>
                                    <button type="button" class="btn btn-danger text-white rounded-pill shadow"
                                    v-on:click="items(3)">Atras</button>
                                    <Pagar apiKey="3DywEb_ZBIXFYtC0#Rd#HslJKn%Ue1" ip="cgURN_Isdx7oqt#ZADe3uKwF8" :monto="recibo + recibo / 2" />
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <h2 class="text-center">
                                No tienes ningun producto en tu carrito
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import tienda from '../tienda/tienda.json'
import Pagar from '../components/Pagar.vue'
import Mapa from '../components/Mapa.vue'
export default {
  components: {
    Nav,
    Pagar,
    Mapa
  },
  name: 'Home',
  mounted () {
    this.products()
    this.$store.state.tienda = tienda
    this.tienda = tienda
  },
  data: function () {
    return {
      permiItem: true,
      info: [],
      tienda: '',
      cantidad: '',
      producto: '',
      text: 'text-muted',
      enCarrito: [],
      token: '',
      item_1: 'd-block',
      item_2: 'd-none',
      item_3: 'd-none',
      item_4: 'd-none',
      recibo: 0,
      title: '',
      tipo_entrega: [],
      item_seleccionado: 0,
      tu_entrega: 0,
      button_access: 'd-none',
      planificado: ''
    }
  },
  methods: {
    products () {
      const carrito = JSON.parse(localStorage.getItem('producto')) === null ? [] : JSON.parse(localStorage.getItem('producto'))
      this.enCarrito = carrito
      this.$store.state.enCarrito = carrito
    },
    shop (value) {
      this.producto = value
    },
    add () {
      const cantidad = parseInt(this.cantidad)
      if (this.cantidad !== '' && cantidad > 0) {
        let producto = JSON.parse(localStorage.getItem('producto'))
        if (producto === null || producto === '' || producto.length === 0) {
          producto = [{
            id: this.producto.id,
            producto: this.producto.producto,
            precio: this.producto.precio,
            cantidad: parseInt(this.cantidad)
          }]
        } else {
          let vall = false
          for (var i = 0; i < producto.length; i++) {
            if (this.producto.id === producto[i].id) {
              producto[i].cantidad += parseInt(this.cantidad)
              vall = true
              break
            }
          }
          if (vall === false) {
            producto.push({
              id: this.producto.id,
              producto: this.producto.producto,
              precio: this.producto.precio,
              cantidad: parseInt(this.cantidad)
            })
          }
        }
        this.text = 'text-muted'
        this.cantidad = ''
        localStorage.setItem('producto', JSON.stringify(producto))
        this.enCarrito = JSON.parse(localStorage.getItem('producto'))
        this.$store.state.enCarrito = JSON.parse(localStorage.getItem('producto'))
      } else {
        this.text = 'text-danger'
        alert('Cantidad incorrecta')
      }
    },
    eliminar (value) {
      const producto = JSON.parse(localStorage.getItem('producto'))
      for (var i = 0; i < producto.length; i++) {
        if (producto[i].id === value) {
          producto.splice(i, 1)
          alert('Eliminado con exito')
          break
        }
      }
      localStorage.setItem('producto', JSON.stringify(producto))
      this.enCarrito = JSON.parse(localStorage.getItem('producto'))
      this.$store.state.enCarrito = JSON.parse(localStorage.getItem('producto'))
    },
    items (value) {
      const modal = document.getElementById('cerrar_comprar')
      if (value === 1) {
        this.item_1 = 'd-block'
        this.item_2 = 'd-none'
        this.item_3 = 'd-none'
        this.item_4 = 'd-none'
        this.title = 'Su carrito'
      } else if (value === 2) {
        this.item_1 = 'd-none'
        this.item_2 = 'd-block'
        this.item_3 = 'd-none'
        this.item_4 = 'd-none'
        let total = 0
        for (var i = 0; i < this.enCarrito.length; i++) {
          total += this.enCarrito[i].precio * this.enCarrito[i].cantidad
        }
        this.recibo = Math.round(total)
        this.title = 'Su ubicación'
        if (this.recibo < 1) {
          alert('Total incorrecto. No hay productos en el carrito')
          modal.click()
        }
      } else if (value === 3) {
        this.item_1 = 'd-none'
        this.item_2 = 'd-none'
        this.item_3 = 'd-block'
        this.item_4 = 'd-none'
        this.title = 'Tipo de entrega'
      } else if (value === 4) {
        if (this.$store.state.enCarrito !== '' && this.recibo > 0) {
          this.item_1 = 'd-none'
          this.item_2 = 'd-none'
          this.item_3 = 'd-none'
          this.item_4 = 'd-block'
          this.title = 'Recibo de Pago'
        } else {
          alert('No tiene productos en el carrito')
          modal.click()
        }
      } else {
        alert('Error inesperado')
      }
    },
    cerrar_abrir (value) {
      const lista = document.getElementById('list_list')
      const boton = document.getElementById('button_list')
      if (value === 1) {
        lista.classList.add('hidexs')
        boton.classList.add('shows')
        lista.classList.remove('shows')
        boton.classList.remove('hidexs')
      } else {
        boton.classList.add('hidexs')
        lista.classList.add('shows')
        boton.classList.remove('shows')
        lista.classList.remove('hidexs')
      }
    },
    type () {
      if (this.tipo_entrega === 1) { this.button_access = 'd-inline-block' } else { this.button_access = 'd-none' }
    },
    acceso () {
      this.planificado !== '' ? this.button_access = 'd-inline-block' : this.button_access = 'd-none'
    }
  }
}
</script>
