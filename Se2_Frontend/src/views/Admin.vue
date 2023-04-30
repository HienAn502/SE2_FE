<template>
  <div class="container-fluid">
    <div class="py-3 sub-hold">
      <div class="mb-4 layout-column clearfix">
        <div id="navfilter" class="sticky-top left-column">
          <div class="filter-panel">
            <div class="admin w-100">
              <h5 class="text-st">
                <i
                  class="fa-regular fa-circle-user fa-xl icon-st"
                  style="color: #050505"
                ></i>
                Admin
              </h5>
            </div>
            <div class="navbar-nav w-100">
              <router-link to="/admin" class="rout-link">
                <i
                  class="fa fa-tachometer-alt me-2 ict"
                  style="color: black"
                ></i>
                Dashboard
              </router-link>
              <router-link to="/admin/category" class="rout-link">
                <i class="fa-solid fa-bookmark ic" style="color: black"></i>
                Categories
              </router-link>
              <router-link to="/admin/product" class="rout-link">
                <i
                  class="fa-sharp fa-solid fa-bag-shopping ic"
                  style="color: black"
                ></i>
                Products
              </router-link>
              <router-link to="admin/voucher" class="rout-link">
                <i class="fa-solid fa-gift ic" style="color: black"></i>
                Vouchers
              </router-link>
            </div>
          </div>
        </div>

        <div class="right-column category-items" v-if="this.token">
          <h5 class="wel-txt">Welcome back!</h5>
          <div class="container-fluid">
            <div class="txt-head" style="font-weight: bold">Products</div>
            <div class="product-inline-hold">
              <div
                class="d-inline-block align-top mb-4 product-inline-4"
                v-for="product in shuffle(products)"
                :key="product.id"
              >
                <div class="position-relative align-top teaser">
                  <div class="position-relative teaser-item-div">
                    <figure class="text-center">
                      <img
                        :src="product.imageUrl"
                        :alt="product.name"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="product-list-title">
                      <div
                        class="teaser-name"
                        style="
                          text-overflow: ellipsis;
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
                      <div class="price-varient-block">
                        <div class="ct-pdcpr-hold">
                          <span class="price-hold">
                            <span class="cut-price">
                              <span class="price-font">₹</span>
                              40,000
                            </span>
                            &nbsp;
                            <span class="price text-danger">
                              <span class="price-font">₹</span>
                              {{ product.price }}
                            </span>
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
                <button class="btn btn-primary" style="float: right">
                  View All
                </button>
              </router-link>
            </div>
          </div>

          <div class="container-fluid">
            <div class="txt-head txt2" style="font-weight: bold">
              Categories
            </div>
            <section class="home-category-hold">
              <div class="row no-gutters mobile-fullwidth">
                <div
                  class="col-md-4 col-sm-4 col-6 col-xs-12"
                  v-for="category in categories"
                  :key="category.id"
                >
                  <div class="clearfix text-center home-category">
                    <router-link
                      class="img-link"
                      :to="{
                        name: 'ListProduct',
                        params: { categoryName: category.categoryName }
                      }"
                    >
                      <figure>
                        <img
                          :src="category.imageUrl"
                          alt="Rings"
                          class="img-fluid"
                        />
                      </figure>
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
            </section>
            <div class="view-all2">
              <router-link to="/admin/category">
                <button class="btn btn-primary" style="float: right">
                  View All
                </button>
              </router-link>
            </div>
          </div>
          <div class="container-fluid">
            <div class="txt-head txt2" style="font-weight: bold">Vouchers</div>
            <div class="view-all2">
              <router-link to="/admin/voucher">
                <button class="btn btn-primary" style="float: right">
                  View All
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["baseURL", "products", "categories"],
  data() {
    return {
        token: ""
    };
  },
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
      }
      return array.slice(0, 8);
    }
  },
  mounted() {
    this.token = localStorage.getItem("token")
    if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "please login to first",
          icon: "error",
        });
        return;
      }
  }
};
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
.view-all2 {
  margin-top: 20px;
}
.txt2 {
  margin-top: 70px;
}
</style>
