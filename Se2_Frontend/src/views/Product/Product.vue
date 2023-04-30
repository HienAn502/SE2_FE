<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Ours Products</h3>
                <router-link to="/admin/product/add">
                    <button class="btn btn-primary" style="float:right">Add new product</button>
                </router-link>
            </div>
        </div>
        <div class="row all-cards">
            <div v-for="product in products" :key = "product.id" class="col-xl-4 col-12 pt-3 col-md-6 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ProductBox from '../../components/Product/ProductBox.vue';

export default{
    name: "Product",
    props: ["baseURL"],
    components: { ProductBox },
    data(){
        return{
            products:[]
        };
    },
    methods: {
        async getProducts(){
            await axios
            .get(`${this.baseURL}product`)
            .then(res => this.products=res.data,)
            .catch(err => console.log(err))
        }      
    },

    mounted() {
        this.getProducts();
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