<template>
    <div class="container">
        <div class="py-3 sub-hold">
            <div class="mb-4 layout-column clearfix">
                <div id="navfilter" class="sticky-top left-column">
                    <div class="filter-panel">
                        <div class="admin w-100">
                            <h5 class="text-st">
                                <i class="fa-regular fa-circle-user fa-xl icon-st" style="color: #050505"></i>
                                Admin
                            </h5>
                        </div>
                        <div class="navbar-nav w-100">
                            <router-link to="/admin" class="rout-link">
                                <i class="fa fa-tachometer-alt me-2 ict" style="color: black"></i>
                                Dashboard
                            </router-link>
                            <router-link to="/admin/category" class="rout-link">
                                <i class="fa-solid fa-bookmark ic" style="color: black"></i>
                                Categories
                            </router-link>
                            <router-link to="/admin/product" class="rout-link">
                                <i class="fa-sharp fa-solid fa-bag-shopping ic" style="color: black"></i>
                                Products
                            </router-link>
                            <router-link to="admin/voucher" class="rout-link">
                                <i class="fa-solid fa-gift ic" style="color: black"></i>
                                Vouchers
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="right-column category-items">
                    <div class="row">
                        <div class="col-12 text-left ms-2">
                            <h3 class="pt-3">Ours Products</h3>
                            <router-link to="/admin/product/add">
                                <button class="btn btn-primary plus-btn">
                                    <i class="fa-solid fa-plus fa-2xl" style="
                      color: #ffffff;
                      transform: translateX(-2px) translateY(1px);
                    "></i>
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="align-middle text-center d-inline" v-for="product in products" :key="product.id">
                                <div class="d-inline-block align-top mb-4 product-inline-4">
                                    <div class="position-relative teaser">
                                        <div class="position-relative teaser-item-div">
                                            <div class="position-absolute badge badge-dark m-1 rounded-0 new-tag">
                                                New
                                            </div>
                                            <a>
                                                <figure class="overflow-hidden">
                                                    <img alt="Minimalist Beaded Two Tone Wedding Ring" class="img-fluid"
                                                        :src="product.imageUrl" />
                                                    <div class="text-center position-absolute btnquick-panel">
                                                        <!-- <div class="d-flex align-self-center">
                              <span
                                class="w-75 btn btn-primary btn-sm btnquick"
                                data-toggle="modal"
                                data-target="#quickProduct"
                                data-product-url="minimalist-beaded-two-tone-wedding-ring-1"
                              >
                                <span>+ Quick View</span>
                              </span>
                              <div class="w-75 d-block wishlist-button">
                                <div
                                  id="mywishlistadd319924"
                                  style="display: block"
                                >
                                  <router-link
                                    name="btn-addtowishlist"
                                    data-product-id="319924"
                                    data-logged-in="1"
                                    class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Add to wishlist"
                                    :to="{
                                      name: 'ShowDetails',
                                      params: { id: product.id },
                                    }"
                                  >
                                    + Add
                                  </router-link>
                                </div>
                                <div
                                  id="mywishlistadded319924"
                                  style="display: none"
                                >
                                  <span
                                    href="javascript:void(0)"
                                    name="btn-addtowishlist"
                                    data-product-id="319924"
                                    data-logged-in="1"
                                    class="d-block btn btn-primary btn-sm removerromwishlist"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Remove from wishlist"
                                  ></span>
                                </div>
                              </div>
                            </div> -->
                                                    </div>
                                                </figure>

                                                <div class="clearfix text-center product-list-title">
                                                    <div class="">
                                                        <router-link :to="{
                                                                name: 'ShowDetails',
                                                                params: { id: product.id },
                                                            }">
                                                            <div class="teaser-name" style="
                                  display: inline-block;
                                  max-width: 200px;
                                  overflow: hidden;
                                  text-overflow: ellipsis;
                                  white-space: nowrap;
                                  font-size: 12px;
                                ">
                                                                {{ product.name }}
                                                            </div>
                                                        </router-link>
                                                    </div>

                                                    <div class="price-varient-block">
                                                        <div class="ct-pdcvariant-hold"></div>
                                                        <div class="price-hold" style="font-size: 15px">
                                                            <span class="cut-price">
                                                                <span class="price-font">$</span>
                                                                40,000
                                                            </span>
                                                            &nbsp;
                                                            <span class="price text-danger">
                                                                <span class="price-font">$</span>
                                                                {{ product.price }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="button">
                                                        <router-link :to="{
                                                            name: 'EditProduct',
                                                            params: { id: product.id },
                                                        }">
                                                            <button class="btn btn-outline-dark"
                                                            style="pointer-events: none; font-size: 0.8rem">
                                                            <i class="fa-regular fa-pen-to-square fa-sm"
                                                                style="color: #000"></i>
                                                            Edit
                                                        </button>
                                                        </router-link>
                                                        
                                                        <button class="btn btn-outline-danger"
                                                            style="pointer-events: none; font-size: 0.8rem">
                                                            <span style="color: #dc3646">
                                                                <i class="fa-regular fa-trash-can fa-sm"
                                                                    style="color: #dc3646"></i>
                                                                Delete
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!--
     -->

                                <!--
     -->
                            </div>
                        </div>
                        <!-- <div class="row all-cards">
            <div v-for="product in products" :key = "product.id" class="col-xl-4 col-12 pt-3 col-md-6 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import ProductBox from "../../components/Product/ProductBox.vue";

export default {
    name: "Product",
    props: ["baseURL"],
    components: { ProductBox },
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async getProducts() {
            await axios
                .get(`${this.baseURL}product`)
                .then((res) => (this.products = res.data))
                .catch((err) => console.log(err));
        },
    },

    mounted() {
        this.getProducts();
    },
};
</script>
<style scoped>
.button {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.all-cards {
    margin-top: 0px;
    margin-bottom: 40px;
}

.plus-btn {
    float: right;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-right: 15px;
}

.row {
    margin-top: 15px;
}

.pt-3 {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>
<style scoped>
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

.view-all2 {
    margin-top: 20px;
}

.txt2 {
    margin-top: 70px;
}
</style>