<template>
    <div class="card w-100 h-100" style="margin-top: 10px">
        <div class=" embed-responsive-16by9">
            <img :src="category.imageUrl" alt="" class="card-img-top">
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">{{ category.description }}</p>
            <router-link to="/admin/category/edit" :to="{params: {id: category.id} }">
                <button class="btn btn-primary css-button txt">Edit</button>
            </router-link>
            <button class="btn btn-primary css-button1 txt">Delete</button>
        </div>
    </div>
</template>

<script>
export default{
    name:"CategoryBox",
    props:["category"],
    methods:{},
}
</script>
<style scoped>
.card-img-top{
    object-fit: cover;
}
.css-button{
    position: absolute;
    bottom:6px;
    right:6px;
    height: 30px;
    line-height:19px;
}
.css-button1{
    position: absolute;
    bottom:6px;
    left:6px;
    height:30px;
    line-height:16px;
}

</style>