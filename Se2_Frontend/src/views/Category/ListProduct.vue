<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div aria-label="breadcrumb">
            <ol
              class="bg-transparent pl-0 py-1 m-0 breadcrumb"
              itemscope=""
              itemtype="http://schema.org/BreadcrumbList"
            >
              <li
                class="breadcrumb-item"
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a itemprop="item" href="/">
                  <span itemprop="name">Home</span>
                  <meta itemprop="position" content="1" />
                </a>
              </li>
              <li
                class="breadcrumb-item"
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a itemprop="item" href="/categories/show/{{ categoryName }}">
                  <span itemprop="name">{{ categoryName }}</span>
                  <meta itemprop="position" content="2" />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="heading">
            <h1 class="text-center">{{ categoryName }}</h1>
          </div>
        </div>
      </div>
      <div id="sticky-filter"></div>
      <div class="d-flex justify-content-end filters-div">
        <div class="mr-2 fl-toggle">
          <div class="fl-toggle-bar d-block">
            <span class="d-block border bg-white px-3 btn-filter-icon">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <polygon
                  points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                ></polygon>
              </svg>
              Filters
            </span>
          </div>
        </div>
        <div class="position-relative d-inline-block select-hold align-top">
          <div class="input select">
            <select
              name="data[sort_by]"
              class="border position-relative"
              id="sort_by"
            >
              <option
                value="sort_by=sort_order&amp;order=ASC"
                selected="selected"
              >
                Sort By
              </option>
              <option value="sort_by=price&amp;order=ASC">
                Price (Low &gt; High)
              </option>
              <option value="sort_by=price&amp;order=DESC">New Arrival</option>
              <option value="sort_by=product&amp;order=ASC">
                Name (A - Z)
              </option>
              <option value="sort_by=product&amp;order=DESC">
                Name (Z - A)
              </option>
            </select>
          </div>
          <div class="position-absolute select__arrow"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div
          class="align-middle text-center d-inline"
          v-for="product in ListProduct"
          :key="product.id"
        >
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
                      :src="product.imageUrl"
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
                          <div id="mywishlistadd319924" style="display: block">
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
                                params: { id: product.id }
                              }"
                            >
                              + Add
                            </router-link>
                          </div>
                          <div id="mywishlistadded319924" style="display: none">
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
                      </div>
                    </div>
                  </figure>

                  <div class="clearfix text-center product-list-title">
                    <div class="">
                      <router-link
                        :to="{
                          name: 'ShowDetails',
                          params: { id: product.id }
                        }"
                      >
                        <div
                          class="teaser-name"
                          style="
                            display: inline-block;
                            max-width: 300px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 12px;
                          "
                        >
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
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ListProduct: ""
    };
  },
  props: ["categories", "baseURL"],
  methods: {
    async getProductList() {
      await axios
        .get(`${this.baseURL}category/${this.categoryName}`)
        .then((res) => {
          this.ListProduct = res.data;
        })
        .catch((err) => console.log("err", err));
    }
  },
  mounted() {
    this.categoryName = this.$route.params.categoryName;
    // this.category = this.categories.find(category => category.id == this.id)
    // if (this.category.products.length == 0) {
    //     this.msg = "no products found"
    // } else if (this.category.products.length == 1) {
    //     this.msg = "Only 1 product found"
    // } else {
    //     this.msg = this.category.products.length + " products found"
    // }
    this.getProductList();
  }
};
</script>
