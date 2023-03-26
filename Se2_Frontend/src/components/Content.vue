<template>
    <!-- <nav>
        <h1>My Vue Router</h1>
        <ul>
            <li><router-link to="/">Homepage</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <button @click="handleClick">Add 1 number</button>
        </ul>
    </nav>
   -->
   <router-view></router-view>
</template>

<script setup>
import Home from "../views/Home.vue"
import Blog from "../views/Blog.vue"
// import {useRouter} from 'vue-router'
// const router = useRouter()
// function handleClick(){
//     router.push('/blog')
// }
</script>

<style>

</style>