<template>
  <div>
    <div class="text-center center-404">
      <h1 class="red--text error-404">404</h1>
      <h3 class=" display-1 text-uppercase font-weight-bold">Pagina no Encontrada!</h3>
      <h2 class="grey--text mb-9">Usted debe regresar al inicio</h2>
      <router-link :to="{name: 'Home'}">
        <v-btn color="red lighten-1 rounded-pill" dark>
            <v-icon>mdi-home</v-icon> Volver al Inicio
        </v-btn>
      </router-link>
    </div>
  </div>
</template>
