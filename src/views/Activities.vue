<template>
    <div class="container">
        <h1 class="title">Are you bored?</h1>
        <h2 class="subtitle">Check for fun activities!</h2>
        <div class="container__btn">
            <button @click="getActivity" class="btn" :disabled="isLoading">
                Search 
            </button>
        </div>
        <div class="container__content">
            <div class="container__spinner">
                <Spinner v-if="isLoading"/>
            </div>
            <div class="container__activity">
                <ActivityCard v-if="activity" :activity="activity" />
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner.vue';
import { getActivitiesApi } from '../helpers/getBoredApi';
import ActivityCard from '../components/ActivityCard.vue';
export default {
    components: { Spinner, ActivityCard },
    data(){
        return { 
            activity: null,
            isLoading : false 
        }
    },
    methods: {
        async getActivity() {
            this.activity = null;
            this.isLoading= true;
            const activity = await getActivitiesApi();
            if(activity) this.activity = activity;
            this.isLoading= false
        }
    },
}
</script>

<style scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
    }
    .title, .subtitle {
        text-align: center;
    }
    .subtitle {
        color : lightgreen;
    }
    .container__btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn {
        cursor:pointer;
        border: 2px solid #333333;
        background: none;
        color : #333333;
        border-radius: 10px;
        font-weight: 600;
        padding: 8px 16px;
        font-family: Nunito;
    }
    .container__spinner {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }
    /* .input {
        width: 50%;
        margin: 0 auto; 
    } */
</style>