import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeComponent from '../Page/Home'
import CartComponent from '../Page/Cart'
import ProductComponent from '../Page/Product'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeComponent,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartComponent,
    },
    {
        path: '/product',
        name: 'product',
        component: ProductComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;