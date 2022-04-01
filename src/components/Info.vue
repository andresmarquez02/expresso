<template>
  <div style="overflow-x: hidden;">
    <div class="grey lighten-4 d-flex info-box">
      <div class="ma-0 row w-100">
          <div class="col-12" style="position:relative">
            <div style="z-index:10;position:relative">
              <h1 class="text-center display-2 font-weight-bold">
                Bienvenido a Expresso
              </h1>
              <h3 class="text-center">
                Aprovecha el 50% de  <br> descuento en productos
              </h3>
              <div class="justify-center mt-6 d-flex">
                <router-link :to="{name: 'Tienda'}">
                  <v-btn text color="red" class="rounded-pill">
                    <v-icon>mdi-store</v-icon>
                    Ir a Tienda
                  </v-btn>
                </router-link>
                <button type="button" class="text-white btn btn-danger rounded-pill"><i class="ti-home"></i> </button>
              </div>
            </div>
            <img src="../assets/bienvenido.png" class="img-info-one">
            <img src="../assets/bienvenido.png" class="img-info-two">
          </div>
      </div>
    </div>
    <br><br><br>
  </div>
</template>
<script>
