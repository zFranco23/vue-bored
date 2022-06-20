<template>
    <div class="container">
        <h1 class="title">Favorites</h1>
        <div>
            <router-link :to="{name : 'home'}">Go back</router-link>
        </div>
        <h2 class="subtitle" v-if="!store.activities.length">You don't have favs activities.</h2>
        <div v-if="store.activities.length">
            <div class="container__favorites">
                <div 
                    class="item_favorite" 
                    v-for="act in store.activities" 
                    :key="act.key"
                >
                    <ActivityCard :activity="{...act,editable: true}"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import ActivityCard from '../components/ActivityCard.vue';
export default {
    data() {
        return { store,a : store };
    },
    components: { ActivityCard }
}
</script>

<style scoped>
.title {
    font-weight: 700;
}
.title,
.subtitle {
    text-align: center;
}
.container__favorites {
    margin-top: 4rem;
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    gap: 16px;
}
.item__favorite {
    width: 100%;
    max-width: 100%;
}

@media (min-width : 768px){
    .item__favorite {
        max-width: 50%;
    }
}
@media (min-width : 1200px){
    .item__favorite {
        max-width: 33.3%;
    }
}
</style>