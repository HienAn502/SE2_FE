<template>
    <div class="container">
        <div class="row head-ln">
            <div class="text-center">
                <h3>Edit Product</h3>
            </div>
        </div>
        <div class="row">
            <div class="text-center form-second">
                <form>
                    <div class="form-group">
                        <label for="" class="mg-text">Category</label>
                        <select name="" id="" class="form-control" v-model="categoryId">
                            <option v-for="category in categories" :key ="category.id"
                                    :value="category.id">{{category.categoryName}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Product Name</label>
                        <input type="text" class="form-control" v-model="name" />    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Product Description</label>
                        <textarea type="text" class="form-control" v-model="description"/>  
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Product Image</label>
                        <input type="text" class="form-control" v-model="imageURL"/>    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Product Price</label>
                        <input type="number" class="form-control" v-model="price"/>    
                    </div>
                    <button type="button" class="btn btn-primary" @click = "editProduct">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.head-ln{
    margin-top: 2rem;
    margin-bottom: 15px;
}
.form-second{
    margin-bottom: 1.5rem;
}
.form-group{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.form-control{
    margin: 0 auto;
    height:46px;
}
.mg-text{
    margin-bottom: 10px;
}
@media (min-width: 767px){
    .form-control{
        width: 600px;
    }
}

</style>
