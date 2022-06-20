<script>
import { store } from './store';
export default {
  data(){
    return { activities : store.activities , hola:5}
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import './assets/base.css';

</style>
