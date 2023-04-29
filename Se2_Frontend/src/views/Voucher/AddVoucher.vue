<template>
    <div class="container">
        <div class="row head-ln">
            <div class="text-center">
                <h3>Add New Voucher</h3>
            </div>
        </div>

        <div class="row">
            <div class="text-center form-second">
                <form>
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Name</label>
                        <input type="text" class="form-control" />    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Created Date</label>
                        <input type="datetime" class="form-control" />  
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Expired Date</label>
                        <input type="datetime" class="form-control" />    
                    </div>
                    <div class="form-group">
                        <label for="" class="mg-text">Voucher Rate</label>
                        <input type="number" class="form-control" />    
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
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