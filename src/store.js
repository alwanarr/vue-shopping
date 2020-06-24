import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { getField, updateField } from 'vuex-map-fields';

export const store = new Vuex.Store({
    state: {
        forSale: [
            { invId: 1, name: 'Java Coffe', image: 'https://images.robertharding.com/preview/RF/RH_RF/HORIZONTAL/851-852.jpg', price: 10000, qty: 1 },
            { invId: 2, name: 'Aceh Gayo Coffe', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVak44yo6jCH9ehwG7JfP7v02LHi1pxriq_1Tj5J8vxgd8nyMS&usqp=CAU', price: 15000, qty: 1 },
            { invId: 3, name: 'Toraja Coffe', image: 'https://cashbac.com/blog/wp-content/uploads/2018/08/kopi-toraja-759x500.jpg', price: 20000, qty: 1 },
            { invId: 4, name: 'Luwak Coffe', image: 'https://magazine.bluekarmasecrets.com/wp-content/uploads/2019/10/1.-aman-kuba-coffee-manfaat-kopi.jpg', price: 18000, qty: 1 },
        ],
        inCart: [],
    },
    getters: {
        getProducts(state){
            return state.forSale;
        },
        getIncart(state){
            return [...new Set(state.inCart)];
        },

        getField
    },
    actions: {
        addToCart(context, id){
           context.commit('SET_INCART', id);
        },
        removeCart(context, id){
           context.commit('REMOVE_INCART', id);
        }
    },
    mutations: {
        SET_INCART(state, payload) {
            state.inCart.push(payload);
        },
        REMOVE_INCART(state, payload){
            state.inCart.splice(payload, 1);
        },
        CLEAR_ALL(state){
            state.inCart = [];
        },
        updateField
    }
})