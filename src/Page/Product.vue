<template>
    <MasterComponent/>
        <!-- Loader -->
        <LoaderComponent v-show="isLoad"/>
        <!-- Content -->
        <div v-show="!isLoad" class="container" height="200">
            <div class="row">
                <div v-for="p in products" :key="p.id" class="col-md-4">
                    <div class="card p-3 m-3">
                        <div class="card-header">{{p.title}}</div>
                        <div class="card-body">
                            <img width="100" height="100" :src="p.image" alt="">
                        </div>
                        <div class="card-footer">
                            <span>Price:<small>${{p.price}}</small></span><br>
                            <a @click="addToCart(p)" class="btn btn-sm btn-dark float-right">Add to Cart</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
</template>


<script>
import MasterComponent from '../Layout/Master';
import LoaderComponent from '../Component/Loader';
import axios from 'axios';

    export default{
        name:'ProductComponent',
        components:{MasterComponent,LoaderComponent},
        data(){
            return {
                isLoad:true,
                products:[]
            };
        },
        created(){
            axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                this.products=res.data;
                this.isLoad=false;
            });
        },
        methods:{
            addToCart(p){
                var cart=this.$root.cart;
                var isInCart=cart.find((v)=>{
                    return v.title==p.title;
                });
                if(isInCart){
                    isInCart.qty++;
                }
                else{
                    cart.push({...p,qty:1});
                }
            },
        },
    };
</script>