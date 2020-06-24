<template>
    <div class="card w-100 " >
        <div class="card-header d-flex">
        <h1 class="text-center">Transaksi</h1>
        <button class="btn btn-danger" 
                style="margin-left: auto; font-size: 24px" 
                @click="clearAll"
                :disabled="getProductsInCart.length == 0"
                >
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        </div>
          
          
        <div class="card-body"  v-for="(item, index) in getProductsInCart" :key="index">  
            <div class="row border-bottom animation__card">
              <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                <img class="img-fluid img-res" :src="item.image" :alt="item.name" style=" margin-bottom: 10px;">
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                <p class="card-title" style="display: inline-block">{{item.name}}</p>
                <button class="btn btn-danger card-button" @click="removeCart(index, item.name)" style="float: right;">
                <i class="fa fa-remove"></i> 
                </button>

                <p class="color-limegreen">Rp.{{item.price}}</p>
                <div class="d-flex">
                
                <input class="card-input" type="number" v-model="forSale[item.invId-1].qty" min="1" style="width:100%;">
                </div>
               </div>
            </div>
        </div>

        <div class="card-body"  v-if="getProductsInCart.length == 0">
            <h5 class="card-title">Pesanan Kosong</h5>      
        </div>

        <div class="button-transaksi" 
            v-if="getProductsInCart.length != 0">
            <p style="align-self:center">TOTAL: <span class="color-limegreen">Rp.{{total}}</span></p>
            <button class="btn btn-primary button__color  mb-1" style="width: 93%;" 
                    @click="orderNow">Order</button>
            
        </div>

        </div>
</template>
<script>
import { mapMultiRowFields } from "vuex-map-fields";
import swal from 'sweetalert2';
export default {
    computed: {
      getProducts () {
        return this.$store.getters.getProducts;
      },
      getInCart(){
        return this.$store.getters.getIncart;
      },
      getProductsInCart(){
        return this.$store.getters.getIncart.map((cart) => {
          return this.$store.getters.getProducts.find((product) => {
            return cart == product.invId;
          })
        })
      },
      total(){
        return this.getProductsInCart.reduce((curr, accu) => {
          return   (accu.price*accu.qty) + curr;
        }, 0)
      },

      ...mapMultiRowFields(['forSale']),
    },
    methods: {
    
    removeCart(id, produk){
      swal.fire({
          title: 'Apakah Anda Yakin?',
					text: `Anda Ingin Menghapus ${produk} Dari Transaksi`,
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Ya!'
      }).then((response) => { // <--
          if (response.value) { // <-- if confirmed
              this.$store.dispatch('removeCart', id);  
          }
      });
    },
    clearAll(){
      swal.fire({
        title: 'Apakah Anda Ingin Menghapus Semua Transaksi?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText:  'Ya!'
      }).then((response) => {
        if(response.value){
          this.$store.commit('CLEAR_ALL');  
        }
      })
    },
    orderNow(){
      swal.fire({
        title: 'Thankss',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
      }).then((res) => {
        if(res.value){
          this.$store.commit('CLEAR_ALL');
        }
      })
    }
  }
}
</script>
<style scoped>
.button-transaksi{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 34px;
}

.color-limegreen{
    color: limegreen;
}
</style>