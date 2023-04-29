import { createRouter, createWebHistory } from 'vue-router'

import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/Home.vue"
import Bracelets from "../views/Bracelets.vue"
import Rings from "../views/Rings.vue"
import Necklace from "../views/Necklace.vue"
import Earings from "../views/Earings.vue"
import About from "../views/About.vue"
import SignUp from "../components/SignUp.vue"
import Login from "../components/Login.vue"
import AddCategory from "../views/Category/AddCategory.vue"
import EditCategory from "../views/Category/EditCategory.vue"
import Category from "../views/Category/Category.vue"
import Admin from "../views/Admin.vue"
import Product from "../views/Product/Product.vue"
import EditProduct from "../views/Product/EditProduct.vue"
import AddProduct from "../views/Product/AddProduct.vue"
import Voucher from "../views/Voucher/Voucher.vue"
import AddVoucher from "../views/Voucher/AddVoucher.vue"

const routes = [{
        path: '/',
        component: Home
    }, {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/rings',
        component: Rings
    }, {
        path: '/earings',
        component: Earings
    }, {
        path: '/bracelets',
        component: Bracelets
    },
    {
        path: '/necklace',
        component: Necklace
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/login',
        component: Login
    },
    { 
        path: '/admin/category/add',
        component: AddCategory
    },
    {
        path: '/admin/category/edit',
        component: EditCategory
    },
    {
        path: '/admin/category',
        component: Category
    },
        //admin home page
    {
        path:'/admin',
        component: Admin
    },
    {
        path:'/admin/product',
        component: Product
    },
    {
        path: '/admin/product/add',
        component: AddProduct
    },
    {
        path: '/admin/product/edit',
        component: EditProduct
    },
    {
        path:'/admin/voucher',
        component: Voucher
    },
    {
        path: '/admin/voucher/add',
        component: AddVoucher
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router