<template>
  <div>
    <div v-if="enCarrito != ''">
        <ul class="list-group fixed-bottom list-fixed hidexs" id="list_list">
            <li class="px-1 pb-1 text-center list-group-item">
                <div class="m-0 row">
                    <div class="col-9">
                        Carrito
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <button type="button" class="btn btn-light btn-sm rounded-circle"
                        v-on:click="cerrar_abrir(1)">&times;</button>
                    </div>
                </div>
            </li>
            <li class="pb-1 list-group-item">
                <div class="m-0 row">
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
            <li class="px-1 py-1 list-group-item no-hover-list">
                <div class="m-0 row" :key="carrito.producto" v-for="(carrito,i) in enCarrito">
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
            <li class="px-1 py-1 list-group-item d-flex justify-content-center">
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
  </div>
</template>
<script>
export default {

}
</script>
