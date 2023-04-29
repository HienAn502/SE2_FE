<template>
    <div class="container">
        <div class="row head-ln">
            <div class="text-center">
                <h3>Edit Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="text-center form-second">
                <form >
                    <div class="form-group">
                        <label for="" class="mg-text">Category Name</label>
                        <input type="text" class="form-control" required/>    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Category Description</label>
                        <textarea type="text" class="form-control" required/>    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Category Image URL</label>
                        <input type="text" class="form-control"  required/>    
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
export default{
    data(){
        return{
            category: null,
            id:null,
            categories:[]
        }
    },
    created(){
        axios.get(`https://limitless-lake-55070.herokuapp.com/category/`)
        .then(res => {this.categories = res.data})
        .catch(err => {console.log(err)});
    },
    methods:{
        async editCategory(){
            delete this.category["products"]
            console.log('category', this.category)
            await axios.post(`https://limitless-lake-55070.herokuapp.com/category/update/${this.id}`,  this.category)
            .then((res) => {
                swal({
                    text: "Category has been updated successfully",
                    icon: "success"
                })
            }).catch(err => console.log('err', err))
        }
    },
    mounted(){
        this.category = this.categories.find(category => category.id = this.id)
    }
}
</script>
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