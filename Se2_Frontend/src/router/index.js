import { createRouter, createWebHistory } from 'vue-router'

import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/Home.vue"
import Bracelets from "../views/Bracelets.vue"
import Rings from "../views/Rings.vue"
import Necklace from "../views/Necklace.vue"
import Earings from "../views/Earings.vue"
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
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router