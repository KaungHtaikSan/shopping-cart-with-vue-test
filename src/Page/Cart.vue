<template>
    <MasterComponent/>
    <div class="container">
        <table class="table table-striped">
            <tr>
                <td>Name</td>
                <td>Image</td>
                <td>+ -</td>
                <td>Qty</td>
                <td>Price</td>
                <td>Total</td>
            </tr>
            <tr v-for="(p,i) in cart" :key='i'>
                <td>{{p.title}}</td>
                <td><img :src="p.image" width="150" height="100" alt=""></td>
                <td>
                    <button @click="addQty(p)" type="button" class="btn btn-outline-success" data-mdb-ripple-color="dark">+</button>
                    <button @click="reduceQty(p)" type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark">-</button>

                </td>
                <td>{{p.qty}}</td>
                <td>{{p.qty*p.price}}</td>

            </tr>
        </table>
    </div>
</template>

<script>
import MasterComponent from '../Layout/Master';
    export default{
        name:'CartComponent',
        components: {MasterComponent},
        data(){
            return {
                cart:[]
            };
        },
        created(){
            this.cart=this.$root.cart;
        },
        methods:{
            addQty(p){
                p.qty++;
            },
            reduceQty(p){
                p.qty--;
            },
        }
    };
</script>
