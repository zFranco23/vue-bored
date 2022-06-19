
import { reactive } from 'vue'
// import { ref }  -> crea un objeto reactivo, con la propiedad value, donde almacenará el contenido
// ref -> usado para datos primitivos (number,boolean,)
//puedo usar el reactive, sin embargo es mas usado para datos no primitivos
//funcicon computed -> crear propiedad computada
export const store = reactive({
  activities : [],
//   methods: {}
})