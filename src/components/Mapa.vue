<template>

  <div>
    <div>
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 300px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="marker" />
      <l-icon-default :image-path="path" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LIconDefault } from 'vue2-leaflet'

export default {
  name: 'Mapa',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault
  },
  data () {
    return {
      zoom: 13,
      path: '/images/',
      center: [9.868145199999999, -66.3486736],
      url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      attribution:
        '',
      marker: latLng(9.868145199999999, -66.3486736)
    }
  }
}
</script>
      //   const providers = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      //   const providers2 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      //   const providers3 = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
