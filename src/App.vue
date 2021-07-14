<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapMutations(['getUser'])
  }
}
</script>
<style lang="css">
@import '~leaflet/dist/leaflet.css';

body{
  background-color:#ffff;
}
.form-control{
  background: #f2f2f2;
}
.form-control:focus{
  box-shadow: 0 0 0 black;
}
.svg{
    background-repeat:  no-repeat;
    background-size: 100% 100%;
    min-height:4.5rem;
    max-height:4.6rem;
}
.bike{
  background-image: url('./assets/bike_88253.svg');
}
.earth{
  background-image: url('./assets/day-and-night.svg');
}
.money{
  background-image: url('./assets/inflation_icon_155908.svg');
}
.casa{
  background-image: url('./assets/casa.svg');
}
.vh-100-title{
  height: calc(100vh - 6.1rem);
}
.ubic_information{
    margin-left: -2%;
    margin-top: -4px;
    z-index: 1020;
    position: relative;
    width: 100%;
}
@media (min-width: 980px) {
  .ubic_information{
    margin-left: -10%;
    margin-top: -70px;
    z-index: 1020;
    position: relative;
    width: 100%;
  }
}
.cursor-pointer{
    cursor: pointer;
}
.overflow-hidden{
    overflow: hidden;
}
.img_tienda{
    overflow: hidden;
    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
}
.vh-40{
  height:40vh;
}
.img_tienda img{
    transition: all .3s;
}

.text_info{
    transition: all .6s;
    color: #9b0000;
    -webkit-transition: all .6s;
    -moz-transition: all .6s;
    -ms-transition: all .6s;
    -o-transition: all .6s;
}
.img_tienda:hover{
    transition: all .6s;
    box-shadow: 1px 1px 10px #0000001e;
}
.img_tienda:hover img{
    transition: all .6s;
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
}
.bg-info-hover{
    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
}
.bg-info-hover:hover{
    background: #9b0000 !important;
    color: white !important;
    transition: all .6s;
    -webkit-transition: all .6s;
    -moz-transition: all .6s;
    -ms-transition: all .6s;
    -o-transition: all .6s;
}
.img_tienda:hover .text_info{
    transition: all .6s;
    -webkit-transition: all .6s;
    -moz-transition: all .6s;
    -ms-transition: all .6s;
    -o-transition: all .6s;
    color: white !important;
}
.no-hover-list{
  max-height: 65vh;
  overflow-y:auto;
}
.list-fixed{
  right: 0px;
  width: 32%;
  bottom:20px;
}
.vh-tienda{
  height:85vh;
}
.vh-tienda-title{
  height: calc(85vh - 7.1rem);
}
.hidexs{
  left: 105%;
  transition: all .3s;
}
.shows{
  left: 66.5%;
  transition: all .3s;
}
.bg-home-left{
    background-image: linear-gradient(90deg, rgba(49, 42, 42, 0.301),rgba(49, 42, 42, 0.301)), url('./assets/tienda_expresso.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
}
.bg-tienda-left{
    background-image: linear-gradient(90deg, rgba(49, 42, 42, 0.301),rgba(49, 42, 42, 0.301)), url('./assets/tienda_expresso.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
}
.h4{
    font-size: 1.35rem !important;
}
  .px-8{
    padding-left:10rem;
    padding-right:10rem;
  }
  .pedidos{
    width:20px;
    height:20px;
    border-bottom:20px #26272e solid;
    border-left:20px #0000ff00 solid;
    border-right:20px #0000ff00 solid;
    top: 82%;
    left: 48%
  }
    @media(min-width:900px){
        .px-12{
          padding-left:6rem;
          padding-right:6rem;
        }
        .w-md-50{
          width: 75%;
        }
    }
@media (max-width:1120px){
    .display-4{
        font-size:3rem !important
    }
    .form-group{
        margin-bottom: .2rem !important;
    }
    h1,
    .h1 {
      font-size: 2rem;
    }

    h2,
    .h2 {
      font-size: 1.5rem;
    }

    h3,
    .h3 {
      font-size: 1.2rem;
    }

    h4,
    .h4 {
      font-size: 1.1rem;
    }

    h5,
    .h5 {
      font-size: 0.9rem;
    }

    h6,
    .h6 {
      font-size: 0.7rem;
    }
    .btn-lg, .btn-group-lg > .btn {
        padding: 0.5rem .7rem;
        font-size: .9rem !important;
        line-height: 1;
        border-radius: 0.3rem;
    }
}
@media (max-width:768px){
    .display-4{
        font-size:3.2rem !important
    }
}
@media (max-width:800px){
    .shows {
       left: 9.5%;
       transition: all .3s;
    }
    .list-fixed {
       right: 0px;
       width: 88%;
       bottom: 20px;
    }
    .button-car{
        width:20%
    }
}
</style>
