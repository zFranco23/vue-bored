<template>
    <div class="container">
        <div class="card">
            <div class="image">
                <img
                    alt="random activity" 
                    :src="`https://picsum.photos/1024/819?random=${activity.key}`"
                >
                <button v-if="activity.editable"  class="close-button" @click="removeFavorite">
                    X
                </button>
            </div>
            <div class="content">
                <h3 class="card__title">{{activity.activity}}</h3>
                <h5 class="card__type">{{activity.type}}</h5>
                <div>
                    <p>Price : {{activity.price}}</p>
                     <p>Accesibility : {{activity.accessibility}}</p>
                     <a 
                        v-if="activity.link" 
                        class="link"
                        target="_blank"
                        :href="activity.link"
                    >
                        See more
                    </a>
                </div>
                
                <button 
                    v-if="!activity.editable" 
                    class="btn_favorites" 
                    @click="addFavorite"
                >Add to favorites</button>
                <!-- <a v-else class="link">
                    Share 
                    <img src="../assets/wssp-icon.png" alt="wssp icon" />
                </a> -->
            </div>
        </div>
    </div>
</template>

<script>

import { store } from '../store';

export default {
    data() {
        return { store }
    },
    props: {
        activity: {
            type: Object,
            required: true
        }
    },
    methods: {
        addFavorite(){
            this.store.addFavoriteActivity(this.activity);
            this.$emit('getActivity');
        },
        removeFavorite(){
            this.store.removeFavoriteActivity(this.activity.key);
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.container .card {
    max-width: 100%;
    position: relative;
    /* max-width: 300px; */
    height: 215px;
    background-color: #fff;
    margin: 30px 10px;
    padding: 20px 15px;

    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(250,179,252,1) 0%, rgba(196,204,205,1) 100%);
}

.container .card:hover {
    height: 330px;
}

.container .card .image {
    max-width: 100%;
    position: relative;
    width: 260px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -40%;
    /* left: 8px; */
    z-index: 1;
}

.container .card .image img {
    max-width: 100%;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;
    filter: grayscale(1)
}
.container .card:hover .image img {
    filter: grayscale(0)
}
.container .card .content {
    max-width: 260px;
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;

    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;

}

.container .card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;

}
.card__title {
    font-weight: 600;
}
.card__type {
    text-transform: uppercase;
}
.btn_favorites {
    margin: 1rem 0;
    cursor: pointer;
    border:2px solid #333333;
    background: none;
    font-family: Nunito;
    font-weight: 600;
    border-radius: 10px;
    padding: 8px 16px;
}
.link {
    text-decoration: none;
    color :#333333;
    border-bottom: 1px solid transparent;
    cursor:pointer;
    display: inline-block;
    transition:all 0.5s ease-in-out;
}
.link:hover {
    border-bottom: 1px solid #333333;
}
.link img {
    width:1.25rem;
}
.close-button {
    z-index: 10;
    position: absolute;
    border: 2px solid #F2F2F2;
    color :#F2F2F2;
    top: 8px;
    right : 8px;
    cursor: pointer;
    background: none;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    display: none;
}
.container .card:hover .close-button {
    display: block;
}
</style>