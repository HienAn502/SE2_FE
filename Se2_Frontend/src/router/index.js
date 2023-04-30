import { createRouter, createWebHistory } from 'vue-router'

import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/Home.vue"
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
import ShowDetails from "../views/product/ShowDetails.vue"
import Cart from "../views/Cart.vue"
import ListProduct from "../views/category/ListProduct.vue"

const routes = [{
        path: '/',
        name: 'Home',
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
        path: '/admin/category/edit/:id',
        name: 'EditCategory',
        component: EditCategory
    },
    {
        path: '/admin/category',
        name: "Category",
        component: Category
    },
    //admin home page
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/admin/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/admin/product/add',
        component: AddProduct
    },
    {
        path: '/admin/product/edit/:id',
        name: 'EditProduct',
        component: EditProduct
    },
    {
        path: '/admin/voucher',
        component: Voucher
    },
    {
        path: '/admin/voucher/add',
        component: AddVoucher
    },
    {
        path: '/product/show/:id',
        name: 'ShowDetails',
        component: ShowDetails
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/category/show/:categoryName',
        name: 'ListProduct',
        component: ListProduct
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router