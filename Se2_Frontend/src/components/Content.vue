<template>
  <router-view></router-view>
</template>

<script setup>
import { ref } from "vue";
import axios  from 'axios' 
// import {useRouter} from 'vue-router'
// const router = useRouter()
// function handleClick(){
//     router.push('/blog')
// }

// const infor = ref([]);
// // Sử dụng fetch()
// const getData = async () => {
//     // ghep api
//     const response = await fetch(
//       "https://limitless-lake-55070.herokuapp.com/product/"
//     );
//     const data = await response.json(); // lam cho data o dang object
//     infor.value = data.slice(0, 8);
// };
// getData();

// sử dụng axios
// const infor = ref([])
// const getData = async () => {
//    const repsonse = await axios.get('https://limitless-lake-55070.herokuapp.com/product/')
//    const data = await repsonse.data
//    infor.value = data.slice(0,8)
// }
// getData()
</script>

<style scoped> 
.background {
  background-color: antiquewhite;
}

.container img{
   width: 50%;
}
</style>
