<template>
    <div class="container">
    <div class="container">
      <div class="py-3 sub-hold">
        <div class="mb-4 layout-column clearfix">
            <SlideBarAdmin></SlideBarAdmin>
            <div class="right-column category-items">
                <div class="row">
           <div class="col-12 text-center">
               <h3 class="">Ours Categories</h3>
               <router-link to="/admin/category/add">
                   <button class="btn btn-primary" style="float:right">Add new category</button>
               </router-link>
           </div>
       </div>
       <div class="row all-cards">
           <div v-for="category in categories" :key = "category.id" class="col-xl-4 col-12 pt-3 col-md-6 d-flex">
               <CategoryBox :category="category"></CategoryBox>
           </div>
       </div>
            </div>
       
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import CategoryBox from '../../components/Category/CategoryBox.vue';
import SlideBarAdmin from "../SlideBarAdmin.vue"
export default{
    name: "Category",
  
    components: { CategoryBox, SlideBarAdmin },
    data(){
        return{
            categories:[]
        };
    },
    methods: {
        async getCategories(){
            await axios
            .get("http://localhost:8080/category/list")
            .then(res => this.categories=res.data)
            .catch(err => console.log(err))
        }      
    },

    mounted() {
        this.getCategories();
    }  
};
</script>
<style scoped>
.all-cards{
    margin-top: 10px;
    margin-bottom: 40px;
}
.pt-3{
    margin-top:15px;
    margin-bottom:15px;
}
</style>