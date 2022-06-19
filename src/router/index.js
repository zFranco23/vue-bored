// import { defineAsyncComponent } from "vue";
const Home = () => import('../views/Activities.vue');
const Favorites = () => import('../views/Favorites.vue');


export const routes = [
    {
        path: '/',
        name : 'home',
        component : Home
    },
    {
        path: '/favorites',
        name: 'favorites',
    }
]