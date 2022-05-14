<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Toggle button -->
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>

                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/product">Product</router-link>
                </li>
            </ul>
            </div>

            <!-- Right elements -->
            <div class="d-flex align-items-center">
            <router-link class="text-reset me-3" to="/cart">
                <i class="fas fa-shopping-cart"></i>
                <small class="badge badge-danger" style="font-size:9px">{{cart.length}}</small>
            </router-link>
            </div>   
        </div>
        </nav>
    </div>
</template>

<script>
export default{
    name:'NavComponent',
    data(){
        return{
            cart:[],
        };
    },
    created(){
        this.cart=this.$root.cart;
    },
};
</script>   