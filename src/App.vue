<template>
  <div id="app" class="container-fluid">
    <div class="d-flex justify-content-center my-5">
      <h1 style="font-size: 50px">BC Coffe</h1>
    </div>
    <div class="row">
      <div class="col-lg-7 col-md-6  box-shadow rounded bg-light pt-3 ">
          <div class="row">
            <div class="col-lg-4 col-12"  v-for="item in getProducts" :key="item.invId" >
                <card-component 
                    :img="item.image"
                    :name="item.name"
                    :price="item.price"
                    :id="item.invId">
            </card-component>
            </div>
          </div>
      </div>
      <div class="col-lg-5 col-md-6">
        <transaksi-component></transaksi-component>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import Card from './components/CardComponent.vue';
import Transaksi from './components/TransaksiComponent.vue';
import swal from 'sweetalert2';
export default {
  name: 'app',
  components: {
    'card-component': Card,
    'transaksi-component': Transaksi,
  },
  computed: {
      getProducts () {
        return this.$store.getters.getProducts;
      },
  },
  created(){
    this.$swal('hallow world');
    console.log('created!');
    console.log(this.$swal);
    console.log(swal);
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style>
 .border-bottom{
   border-bottom: 1px solid rgba(0, 0, 0, 0.2)
 }

 .img-res{
   object-fit: cover; object-position: top;
 }

 .animation__card{
   animation-name: shopping;
   animation-duration: 2s;
 }
 .button__color{
   background-color: forestgreen;
   outline: forestgreen !important;
   border-color: forestgreen;
 }

 .button__color:hover{
   background-color: limegreen !important;
   border-color: limegreen;

 }

 .button__color:focus{
   box-shadow: none;
   border-color: limegreen;
   outline: limegreen !important;
   
 }

 .button__color:active{
   box-shadow: none;
   border-color: limegreen !important;
  
 }

 .box-shadow{
   box-shadow: 0 3px 20px -11px rgba(0,0,0,0.9);
 }
 

 @media (max-width: 800px){
   .img-res{
     width: 100%;
   }
 }

 @media (max-width: 400px) {
   .img-res{
    width: 100%;
   }
 }



 @keyframes shopping {
   from{
     opacity: 0;
   }

   to{
     opacity: 1;
   }
 }
</style>
