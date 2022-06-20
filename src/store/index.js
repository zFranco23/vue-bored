
import { reactive, watchEffect } from 'vue'
// import { ref }  -> crea un objeto reactivo, con la propiedad value, donde almacenará el contenido
// ref -> usado para datos primitivos (number,boolean,)
//puedo usar el reactive, sin embargo es mas usado para datos no primitivos
//funcicon computed -> crear propiedad computada

const initializeActivities = () => {
  if(window){
    return localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')): [];
  }
  return [];
}

export const store = reactive({
  activities : initializeActivities(),
  addFavoriteActivity( activity ) {
      if(!this.activities.find( el => el.key === activity.key)){
        this.activities = [...this.activities,activity]
        localStorage.setItem('activities',JSON.stringify(this.activities))
      }
  },
  removeFavoriteActivity(key){
    this.activities = this.activities.filter( act => act.key!==key)

  }
})

 watchEffect(()=>{
  if(store && store.activities){
    localStorage.setItem('activities',JSON.stringify(store.activities))
  }
 },[store])
