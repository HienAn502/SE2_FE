<template>
    <div class="container-fluid">
        <div class="py-3 sub-hold">
            <div class="mb-4 layout-column clearfix">
                <div id="navfilter" class="sticky-top left-column">
                    <div class="filter-panel">
                        <div class="admin w-100">
                            <h5 class="text-st"><i class="fa-regular fa-circle-user fa-xl icon-st"
                                    style="color: #050505;"></i>Admin
                            </h5>
                        </div>
                        <div class="navbar-nav w-100">
                            <router-link to="/admin" class="rout-link"><i class="fa fa-tachometer-alt me-2 ict"
                                    style="color:black;"></i>Dashboard</router-link>
                            <router-link to="/admin/category" class="rout-link"><i class="fa-solid fa-bookmark ic"
                                    style="color:black;"></i>Categories</router-link>
                            <router-link to="admin/product" class="rout-link"><i
                                    class="fa-sharp fa-solid fa-bag-shopping ic" style="color:black;"></i>Products
                            </router-link>
                            <router-link to="admin/voucher" class="rout-link"><i class="fa-solid fa-gift ic"
                                    style="color:black;"></i>Vouchers</router-link>
                        </div>
                    </div>
                </div>

                <div class="right-column category-items">
                    <h5 class="wel-txt">Welcome back!</h5>
                    <div class="container-fluid">
                        <div class="txt-head" style="font-weight:bold;">Products</div>
                        <div class="product-inline-hold">
                            <div class="d-inline-block align-top mb-4 product-inline-4">
                                <div class="position-relative align-top teaser">
                                    <div class="position-relative teaser-item-div">
                                        <figure class="text-center">
                                            <img src="/src/assets/img/img-admin/ring1.jpg"
                                                alt="Vintage Citrine AA Gemstone Ring, Unique Bridal Wedding Ring"
                                                class="img-fluid">
                                        </figure>
                                        <div class="product-list-title">
                                            <div class="teaser-name">Vintage Citrine AA Gemstone Ring, Unique Bridal Wedding
                                                Ring</div>
                                            <div class="price-varient-block">
                                                <div class="ct-pdcpr-hold">
                                                    <span class="price-hold">
                                                        <span class="cut-price"><span
                                                                class="price-font">₹</span>40,000</span>&nbsp;
                                                        <span class="price text-danger"><span
                                                                class="price-font">₹</span>39,980</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-inline-block align-top mb-4 product-inline-4">
                                <div class="position-relative align-top teaser">
                                    <div class="position-relative teaser-item-div">
                                        <figure class="text-center">
                                            <img src="/src/assets/img/img-admin/ring 2.jpg"
                                                alt="Vintage Citrine AA Gemstone Ring, Unique Bridal Wedding Ring"
                                                class="img-fluid">
                                        </figure>
                                        <div class="product-list-title">
                                            <div class="teaser-name">Minimalist Beaded Two Tone Wedding Ring</div>
                                            <div class="price-varient-block">
                                                <div class="ct-pdcpr-hold">
                                                    <span class="price-hold">
                                                        <span class="cut-price"><span
                                                                class="price-font">₹</span>50,000</span>&nbsp;
                                                        <span class="price text-danger"><span
                                                                class="price-font">₹</span>49,982</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-inline-block align-top mb-4 product-inline-4">
                                <div class="position-relative align-top teaser">
                                    <div class="position-relative teaser-item-div">
                                        <figure class="text-center">
                                            <img src="/src/assets/img/img-admin/ring3.jpg"
                                                alt="Vintage Citrine AA Gemstone Ring, Unique Bridal Wedding Ring"
                                                class="img-fluid">
                                        </figure>
                                        <div class="product-list-title">
                                            <div class="teaser-name">Women statement ring band</div>
                                            <div class="price-varient-block">
                                                <div class="ct-pdcpr-hold">
                                                    <span class="price-hold">
                                                        <span class="cut-price"><span
                                                                class="price-font">₹</span>40,000</span>&nbsp;
                                                        <span class="price text-danger"><span
                                                                class="price-font">₹</span>39,980</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-inline-block align-top mb-4 product-inline-4">
                                <div class="position-relative align-top teaser">
                                    <div class="position-relative teaser-item-div">
                                        <figure class="text-center">
                                            <img src="/src/assets/img/img-admin/ring4.jpg"
                                                alt="Vintage Citrine AA Gemstone Ring, Unique Bridal Wedding Ring"
                                                class="img-fluid">
                                        </figure>
                                        <div class="product-list-title">
                                            <div class="teaser-name">Victoria celebrity ring</div>
                                            <div class="price-varient-block">
                                                <div class="ct-pdcpr-hold">
                                                    <span class="price-hold">
                                                        <span class="cut-price"><span
                                                                class="price-font">₹</span>40,000</span>&nbsp;
                                                        <span class="price text-danger"><span
                                                                class="price-font">₹</span>39,980</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="view-all">
                            <router-link to="/admin/product">
                                <button class="btn btn-primary" style="float:right">View All</button>
                            </router-link>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="txt-head txt2" style="font-weight:bold;">Categories</div>
                        <section class="home-category-hold">
                            <div class="row no-gutters mobile-fullwidth">
                                <div class="col-md-4 col-sm-4 col-6 col-xs-12">
                                    <div class="clearfix text-center home-category">
                                        <a href="/categories/rings" class="img-link">
                                            <figure><img src="/src/assets/img/img-admin/Ring.jpg"
                                                    alt="Rings" class="img-fluid"></figure>
                                            <div class="px-2 category-caption">
                                                <h4>Rings</h4>
                                                <p>
                                                    <br>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-6 col-xs-12">
                                    <div class="clearfix text-center home-category">
                                        <a href="/categories/earrings" class="img-link">
                                            <figure><img src="/src/assets/img/img-admin/Earings.jpg"
                                                    alt="Earrings" class="img-fluid"></figure>
                                            <div class="px-2 category-caption">
                                                <h4>Earrings</h4>
                                                <p>
                                                    <br>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-6 col-xs-12">
                                    <div class="clearfix text-center home-category">
                                        <a href="/categories/necklace" class="img-link">
                                            <figure><img src="/src/assets/img/img-admin/necklace.jpg"
                                                    alt="Necklace" class="img-fluid"></figure>
                                            <div class="px-2 category-caption">
                                                <h4>Necklace</h4>
                                                <p>
                                                    <br>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="clearfix"></div>

                            </div>
                        </section>
                        <div class="view-all2">
                            <router-link to="/admin/category">
                                <button class="btn btn-primary" style="float:right">View All</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="txt-head txt2" style="font-weight:bold;">Vouchers</div>
                        <div class="view-all2">
                            <router-link to="/admin/voucher">
                                <button class="btn btn-primary" style="float:right">View All</button>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
/*layout */

.admin {
    margin: auto;
}

.icon-st {
    padding: 20px;
}

.rout-link {
    color: black;
    text-decoration: none;
    font-size: smaller;

}

.rout-link:hover {
    color: #e58c82 !important;
}

.rout-link .ic {
    padding: 20px 22px;
}

.rout-link .ict {
    padding: 20px 12px 20px 21px;
}

.text-st {
    font-size: larger;
    font-weight: bold;
}

.wel-txt {
    margin: 30px auto;
}

.txt-head {
    margin-top: 20px;
    margin-bottom: 30px;
}
.view-all2{
    margin-top:20px;
}
.txt2 {
    margin-top: 70px;
}</style>