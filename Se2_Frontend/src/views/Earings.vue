<template>
  <div class="text-center category-banner">
      <img src="http://victoria.shopaccino.com/uploads/victoria/categories/ering-665833_l.jpg" alt="Rings" class="img-fluid" /> 
  </div>


       

    <section class="py-4 ">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="text-center mb-3 heading"><h2>Earings</h2></div>
        </div>
    
          <div class="input select">
            <select name="data[sort_by]" class="border position-relative" id="sort_by">
<option value="sort_by=sort_order&amp;order=ASC" selected="selected">Sort By</option>
<option value="sort_by=price&amp;order=ASC">Price (Low &gt; High)</option>
<option value="sort_by=price&amp;order=DESC">New Arrival</option>
<option value="sort_by=product&amp;order=ASC">Name (A - Z)</option>
<option value="sort_by=product&amp;order=DESC">Name (Z - A)</option>
            </select>
          </div>                             
        

        <div class="col-12">
          <div class="align-middle text-center d-inline" v-for="product in infor" :key="product.id">
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a>
                    <figure class="overflow-hidden">
                      <img
                        alt="Minimalist Beaded Two Tone Wedding Ring"
                        class="img-fluid"
                        :src="product.imageURL"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
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
                              <span
                                
                                name="btn-addtowishlist"
                                data-product-id="319924"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                              + Wishlist
                              </span>
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
                              >
                                
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name" style="display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px ;">
                          {{ product.name }} 
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold" style="font-size: 15px;">
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
      </div>
    </div>
  </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import {useRouter} from 'vue-router'
  const infor = ref([]);
// Sử dụng fetch()
  const getData = async () => {
    // ghep api
    const response = await fetch(
      "https://limitless-lake-55070.herokuapp.com/product/"
    );
    const data = await response.json(); // lam cho data o dang object
    infor.value = data.slice(0, 8);
  };
  getData();
  </script>
  
<style scoped>
.input{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
  margin-bottom: 10px;
}

.position-relative {
    position: relative!important;
}

select-hold select {
    cursor: pointer;
    min-width: 50px;
    line-height: 30px;
}
.product-list-title:hover{ 
  color: #e58c82 !important;
}
.cut-price:hover{
  color: #e58c82 !important;
}
</style>