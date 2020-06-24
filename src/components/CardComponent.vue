<template>
    <div class="card mb-5">
        <img class="img-fluid img-res" :src="img" :alt="name" style="">
        <div class="card-body">
            <h4 class="card-title">{{name}} 1</h4>
            <div class="card-text mb-2 " > <b style="color: limegreen;">Rp.{{price}}</b></div>
            <button class="btn btn-primary button__color w-100" @click="addToCart(id)">Beli</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['img', 'name', 'price', 'id'],
    methods:{
        addToCart(id){
            this.$store.dispatch('addToCart', id);
        },
    }
}
</script>