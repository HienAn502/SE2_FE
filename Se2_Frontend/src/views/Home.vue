<template>
  <div class="home-slider">
    <div
      id="carousel-example-generic"
      class="carousel carousel-fade slide"
      data-ride="carousel"
      data-interval="4000"
    >
      <!-- Indicators -->
      <ol class="m-0 carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          class=""
        ></li>
        <li
          data-target="#carousel-example-generic"
          data-slide-to="1"
          class="active"
        ></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item" style="background: FFFFFF">
          <a href="/">
            <img
              src="../assets/img/Slider_1.jpg"
              alt=""
              class="img-fluid w-100 mx-auto"
            />
          </a>
          <div class="position-absolute p-0 carousel-caption caption_center">
            <h2 class="m-0 p-0 font-weight-bold display-4"></h2>
            <p></p>
          </div>
        </div>
        <div class="carousel-item active" style="background: FFFFFF">
          <a href="/">
            <img
              src="../assets/img/Slider_2.jpg"
              alt=""
              class="img-fluid w-100 mx-auto"
            />
          </a>
          <div class="position-absolute p-0 carousel-caption caption_center">
            <h2 class="m-0 p-0 font-weight-bold display-4"></h2>
            <p></p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a
        class="carousel-control-prev"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="text-center my-4 hm-banner-hold">
    <div class="home-banner">
      <router-link to="/rings" class="d-block">
        <img
          src="../assets/img/banner_1.jpg"
          alt=""
          class="img-fluid w-100 mx-auto"
        />
      </router-link>
    </div>
    <div class="home-banner">
      <router-link to="/bracelets" class="d-block">
        <img
          src="../assets/img/banner_2.jpg"
          alt=""
          class="img-fluid w-100 mx-auto"
        />
      </router-link>
    </div>
  </div>
  <!-- Welcome text -->
  <section class="py-4 text-center welcome-text">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="clearfix">
            <div>
              <div class="text-center mb-3 heading">
                <h2>Shop by Category</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="home-category-hold">
    <div class="row no-gutters mobile-fullwidth">
      <div class="col-md-4 col-sm-4 col-6 col-xs-12">
        <div class="clearfix text-center home-category">
          <router-link class="img-link" to="/rings">
            <figure>
              <img
                src="../assets/img/category_rings.jpg"
                alt="Rings"
                class="img-fluid"
              />
            </figure>
            <div class="px-2 category-caption">
              <h4>Rings</h4>
              <p>
                <br />
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-6 col-xs-12">
        <div class="clearfix text-center home-category">
          <router-link class="img-link" to="/earings">
            <figure>
              <img
                src="../assets/img/category_earings.jpg"
                alt="Earrings"
                class="img-fluid"
              />
            </figure>
            <div class="px-2 category-caption">
              <h4>Earrings</h4>
              <p>
                <br />
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-6 col-xs-12">
        <div class="clearfix text-center home-category">
          <router-link class="img-link" to="/necklace">
            <figure>
              <img
                src="../assets/img/category_necklace.jpg"
                alt="Necklace"
                class="img-fluid"
              />
            </figure>
            <div class="px-2 category-caption">
              <h4>Necklace</h4>
              <p>
                <br />
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </section>
  <!-- Product display -->
  <section class="py-4 home-featured-panel">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="text-center mb-3 heading"><h2>Featured Products</h2></div>
        </div>
        <div class="col-12">
          <div class="align-middle product-inline-hold text-center">
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a href="/products/minimalist-beaded-two-tone-wedding-ring-1">
                    <figure class="overflow-hidden">
                      <img
                        alt="Minimalist Beaded Two Tone Wedding Ring"
                        class="img-fluid"
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
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd319924"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="319924"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
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
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Minimalist Beaded Two Tone Wedding Ring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            40,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            39,980
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a href="/products/antique-bridesmaid-wedding-ring">
                    <figure class="overflow-hidden">
                      <img
                        
                        alt="Antique Bridesmaid Wedding Ring"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="antique-bridesmaid-wedding-ring"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd304099"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="304099"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded304099"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="304099"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Antique Bridesmaid Wedding Ring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            40,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            39,980
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a href="/products/victoria-forever-eternity-ring">
                    <figure class="overflow-hidden">
                      <img
                       
                        alt="Victoria Forever Eternity Ring"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="victoria-forever-eternity-ring"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd290207"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="290207"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded290207"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="290207"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Victoria Forever Eternity Ring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            50,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            49,982
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 out-of-stock"
                  >
                    <span>Popular</span>
                  </div>
                  <a href="/products/victoria-green-diamond-earring">
                    <figure class="overflow-hidden">
                      <img
                    
                        alt="Victoria Green Diamond Earring"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="victoria-green-diamond-earring"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd291158"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="291158"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded291158"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="291158"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Victoria Green Diamond Earring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            60,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            59,985
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a
                    href="/products/vintage-citrine-aa-gemstone-ring-unique-bridal-wedding-ring"
                  >
                    <figure class="overflow-hidden">
                      <img
                      
                        alt="Vintage Citrine AA Gemstone Ring, Unique Bridal Wedding Ring"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="vintage-citrine-aa-gemstone-ring-unique-bridal-wedding-ring"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd319927"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="319927"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded319927"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="319927"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Vintage Citrine AA Gemstone Ring, Unique Bridal
                          Wedding Ring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            40,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            39,980
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a
                    href="/products/14k-yellow-gold-diamond-screw-back-earring"
                  >
                    <figure class="overflow-hidden">
                      <img
                      
                        alt="14k Yellow Gold Diamond Screw Back Earring"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="14k-yellow-gold-diamond-screw-back-earring"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd315743"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="315743"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded315743"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="315743"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          14k Yellow Gold Diamond Screw Back Earring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            60,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            59,985
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a href="/products/vintage-gold-floral-earrings-for-her">
                    <figure class="overflow-hidden">
                      <img
                       
                        alt="Vintage Gold Floral Earrings for Her"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="vintage-gold-floral-earrings-for-her"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd315744"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="315744"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded315744"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="315744"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Vintage Gold Floral Earrings for Her
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            60,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            59,985
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
            <div class="d-inline-block align-top mb-4 product-inline-4">
              <div class="position-relative teaser">
                <div class="position-relative teaser-item-div">
                  <div
                    class="position-absolute badge badge-dark m-1 rounded-0 new-tag"
                  >
                    New
                  </div>
                  <a
                    href="/products/heart-shape-gemstone-stud-earring-statement-bridal-partywear-earring"
                  >
                    <figure class="overflow-hidden">
                      <img
                      
                        alt="Heart Shape Gemstone Stud Earring, Statement Bridal Partywear Earring"
                        class="img-fluid"
                      />
                      <div class="text-center position-absolute btnquick-panel">
                        <div class="d-flex align-self-center">
                          <span
                            class="w-75 btn btn-primary btn-sm btnquick"
                            data-toggle="modal"
                            data-target="#quickProduct"
                            data-product-url="heart-shape-gemstone-stud-earring-statement-bridal-partywear-earring"
                          >
                            <span>+ Quick View</span>
                          </span>
                          <div class="w-25 d-block wishlist-button">
                            <div
                              id="mywishlistadd320141"
                              style="display: block"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="320141"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm addtowishlistfromlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Add to wishlist"
                              >
                                <i class="fa fa-heart-o"></i>
                              </span>
                            </div>
                            <div
                              id="mywishlistadded320141"
                              style="display: none"
                            >
                              <span
                                href="javascript:void(0)"
                                name="btn-addtowishlist"
                                data-product-id="320141"
                                data-logged-in="1"
                                class="d-block btn btn-primary btn-sm removerromwishlist"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Remove from wishlist"
                              >
                                <i class="fa fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>

                    <div class="clearfix text-center product-list-title">
                      <div class="">
                        <div class="teaser-name">
                          Heart Shape Gemstone Stud Earring, Statement Bridal
                          Partywear Earring
                        </div>
                      </div>

                      <div class="price-varient-block">
                        <div class="ct-pdcvariant-hold"></div>
                        <div class="price-hold">
                          <span class="cut-price">
                            <span class="price-font">₹</span>
                            60,000
                          </span>
                          &nbsp;
                          <span class="price text-danger">
                            <span class="price-font">₹</span>
                            59,985
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
          </div>

          <div
            id="loginModal"
            class="modal fade loginpopup-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="loginModal"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xs clearfix">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="loginModal">Login/ Register</h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div id="modal-signup" style="display: none">
                    <a
                      class="mb-3 d-block clearfix"
                      href="javascript:;"
                      onclick="$('div#m-login-otp, div#modal-signup, div#accept-term-popup').hide(50); $('div#loginwithemail, div#login-motp, div#btn-notaccount, div#hidebutton-otp, div#popup-social').show(50);"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                      Login with email
                    </a>
                    <div class="py-1">
                      <div>
                        <div class="margintop15">
                          <div class="row marginbottom20">
                            <div class="col-md-12">
                              <div class="clearfix">
                                <form
                                  action="/customers/register"
                                  class="form-horizontal cd-form floating-labels"
                                  role="form"
                                  autocomplete="off"
                                  id="CustomerHomeForm"
                                  method="post"
                                  accept-charset="utf-8"
                                >
                                  <div style="display: none">
                                    <input
                                      type="hidden"
                                      name="_method"
                                      value="POST"
                                    />
                                    <input
                                      type="hidden"
                                      name="data[_Token][key]"
                                      value="a7d6689c3a1d52557e472df31715a5c2495e8df9ccf3ea62d37e887534b7c8b77bd6973b23d489dc4d02994fcbb3196c07d2ae5490575e1bc867b57fbae16919"
                                      id="Token1997301570"
                                    />
                                  </div>
                                  <input
                                    type="hidden"
                                    name="data[Customer][token]"
                                    id="token"
                                  />
                                  <div class="field-form-hold clearfix">
                                    <div class="field field--half clearfix">
                                      <div class="field__input-wrapper">
                                        <label class="field__label" for="email">
                                          Email
                                          <span class="text-danger">*</span>
                                        </label>
                                        <input
                                          name="data[Customer][email]"
                                          id="email"
                                          class="form-control field__input email"
                                          title="Please enter valid email"
                                          placeholder="Email"
                                          type="email"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                    <div class="field field--half clearfix">
                                      <div class="field__input-wrapper">
                                        <label
                                          class="field__label"
                                          for="password"
                                        >
                                          Password
                                          <span class="text-danger">*</span>
                                        </label>
                                        <input
                                          name="data[Customer][password]"
                                          id="password"
                                          autocomplete="off"
                                          class="form-control field__input"
                                          minlength="6"
                                          title="Please enter password at least 6 characters"
                                          placeholder="Password"
                                          type="password"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="field field--half clearfix">
                                      <div class="field__input-wrapper">
                                        <label
                                          class="field__label"
                                          for="first_name"
                                        >
                                          First Name
                                          <span class="text-danger">*</span>
                                        </label>
                                        <input
                                          name="data[Customer][first_name]"
                                          id="first_name"
                                          class="form-control field__input"
                                          title="Please enter first name"
                                          placeholder="First Name"
                                          type="text"
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                    <div class="field field--half clearfix">
                                      <div class="field__input-wrapper">
                                        <label
                                          class="field__label"
                                          for="last_name"
                                        >
                                          Last Name
                                          <span class="text-danger">*</span>
                                        </label>
                                        <input
                                          name="data[Customer][last_name]"
                                          id="last_name"
                                          class="form-control field__input"
                                          title="Please enter last name"
                                          placeholder="Last Name"
                                          type="text"
                                          required="required"
                                        />
                                      </div>
                                    </div>

                                    <div class="clearfix"></div>
                                    <div class="field field--half clearfix">
                                      <div class="field__input-wrapper">
                                        <label class="field__label" for="phone">
                                          Mobile
                                          <span class="text-danger">*</span>
                                        </label>
                                        <input
                                          name="data[Customer][phone]"
                                          id="phone"
                                          class="form-control field__input"
                                          title="Please enter valid mobile no"
                                          placeholder="Mobile"
                                          maxlength="20"
                                          onkeyup="allow_numeric(this);"
                                          type="text"
                                          required="required"
                                        />
                                      </div>
                                    </div>

                                    <div class="clearfix"></div>
                                  </div>

                                  <div class="my-3 cd-checkbox">
                                    <div class="input checkbox required">
                                      <input
                                        type="checkbox"
                                        name="data[Customer][agree]"
                                        value="1"
                                        required="required"
                                        title="Please agree to the terms &amp; conditions"
                                        id="CustomerAgree"
                                      />
                                      <label for="CustomerAgree">
                                        I have read and agree to the
                                        <a
                                          href="/policies/terms-conditions"
                                          target="_blank"
                                          class="text-primary"
                                        >
                                          Terms &amp; Conditions.
                                        </a>
                                      </label>
                                    </div>
                                    <div class="input checkbox">
                                      <input
                                        type="checkbox"
                                        name="data[Customer][subscribe]"
                                        value="1"
                                        checked="checked"
                                        id="CustomerSubscribe"
                                      />
                                      <label for="CustomerSubscribe">
                                        Subscribe for newsletter
                                      </label>
                                    </div>
                                  </div>

                                  <div class="row text-center margintop20">
                                    <div
                                      class="col-md-4 col-md-offset-4 col-sm-12 col-xs-12"
                                    >
                                      <button
                                        type="submit"
                                        class="btn btn-primary btn-lg btn-block"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>

                                  <div style="display: none">
                                    <input
                                      type="hidden"
                                      name="data[_Token][fields]"
                                      value="cd64c91a47cec5923d1f4f0af89573ccc3260375%3ACustomer.token"
                                      id="TokenFields452189879"
                                    />
                                    <input
                                      type="hidden"
                                      name="data[_Token][unlocked]"
                                      value=""
                                      id="TokenUnlocked768968724"
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="text-center text-muted mt-2 or">
                      Or Sign up with1
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="w-100">
                      <div id="loginwithemail">
                        <form
                          action="/customers/login"
                          class="form-horizontal"
                          autocomplete="off"
                          id="CustomerIndexFormPopup"
                          method="post"
                          accept-charset="utf-8"
                        >
                          <div style="display: none">
                            <input type="hidden" name="_method" value="POST" />
                            <input
                              type="hidden"
                              name="data[_Token][key]"
                              value="a7d6689c3a1d52557e472df31715a5c2495e8df9ccf3ea62d37e887534b7c8b77bd6973b23d489dc4d02994fcbb3196c07d2ae5490575e1bc867b57fbae16919"
                              id="Token331546380"
                            />
                          </div>
                          <input
                            type="hidden"
                            name="data[Customer][redirect_url]"
                            id="redirect_url_popup"
                            value="/"
                          />
                          <div class="clearfix">
                            <div
                              id="login_err"
                              class="alert alert-danger"
                              role="alert"
                              style="display: none"
                            >
                              <span
                                class="glyphicon glyphicon-exclamation-sign"
                                aria-hidden="true"
                              ></span>
                              <span class="sr-only">Error:</span>
                              Username or password is incorrect.
                            </div>
                            <div
                              id="login_success"
                              class="alert alert-success"
                              role="alert"
                              style="display: none"
                            >
                              <span
                                class="glyphicon glyphicon-ok"
                                aria-hidden="true"
                              ></span>
                              <span class="sr-only">Success:</span>
                              Logged in successfully.
                            </div>
                            <div class="form-group">
                              <label for="email">
                                Email
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                name="data[Customer][email]"
                                id="email_popup"
                                class="form-control required email"
                                placeholder="Please enter email"
                                type="email"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="clearfix">
                            <div class="form-group">
                              <label for="full_name">
                                Password
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                name="data[Customer][password]"
                                id="password_popup"
                                class="form-control required"
                                placeholder="Please enter password"
                                type="password"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="text-center">
                            <button
                              type="submit"
                              id="btnloginsubmit"
                              name="btnloginsubmit"
                              class="btn btn-lg btn-block btn-primary"
                            >
                              Submit
                            </button>
                          </div>

                          <div style="display: none">
                            <input
                              type="hidden"
                              name="data[_Token][fields]"
                              value="b8ed15a1166685b094fbb7da960d0cc13d958dc4%3ACustomer.redirect_url"
                              id="TokenFields1435835342"
                            />
                            <input
                              type="hidden"
                              name="data[_Token][unlocked]"
                              value=""
                              id="TokenUnlocked1187114238"
                            />
                          </div>
                        </form>
                      </div>

                      <div
                        id="accept-term-popup"
                        class="text-center py-3"
                        style="display: none"
                      >
                        By signing up you agree to the
                        <a href="/policies/terms-conditions" class="text-links">
                          Terms of Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Us -->
  <section class="py-4 text-center homepage_additional_text">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <div
              class="row flex-row-reverse d-flex justify-content-center align-items-center"
            >
              <div class="col-md-6 col-12">
                <figure>
                  <img
                    style=""
                    src="../assets/img/about_us.jpg"
                    class="img-responsive"
                  />
                </figure>
              </div>
              <div class="col-md-5 col-12 mx-auto text-left">
                <p class="my-1 font-weight-bold">Welcome at</p>
                <h3 class="h3">DAS&DAB Theme</h3>
                <p>
                  As a team of software engineers, we are excited to attend this
                  Software Engineer course. Our team has a wide range of
                  experience in software development, and we are eager to expand
                  our skills and knowledge in this field. We believe that this
                  course will provide us with valuable insights into software
                  engineering practices and emerging technologies. We are
                  looking forward to collaborating with other software engineers
                  in the course and learning from experienced instructors. We
                  are confident that the skills we will gain from this course
                  will help us to become better software engineers and
                  contribute to the software development community. We are
                  grateful for this opportunity to learn and grow, and we are
                  committed to making the most out of this course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog -->
  <div class="my-4 home-blogsection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="heading">
            <h2 class="text-center">Blog Feed</h2>
          </div>
        </div>
      </div>
      <div class="my-3 home_blog">
        <div class="row no-gutters blog-hold card-deck">
          <div class="col-sm-4 col-12 rounded-0 card">
            <a href="/blog/victoria-a-wonderful-jewellery-for-women-2">
              <figure>
                <img
                  src="../assets/img/blog_1.jpg"
                  class="img-fluid w-100"
                  alt=" A wonderful jewellery for women"
                />
              </figure>
            </a>
            <div class="card-body">
              <span class="text-muted">April 16th, 2020</span>
              <h5 class="card-title">
                <a href="/blog/victoria-a-wonderful-jewellery-for-women-2">
                   A wonderful jewellery for women
                </a>
              </h5>
              <p class="card-text">
                We're delighted to announce that Rachel Boston has won Designer
                of the Year at the UK Jewellery at the UK Jewellery...
              </p>

              <a
                href="/blog/victoria-a-wonderful-jewellery-for-women-2"
                class="btn btn-sm btn-link text-primary pl-0 pr-0 btn-blog"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="col-sm-4 col-12 rounded-0 card">
            <a href="/blog/victoria-a-wonderful-jewellery-for-women-1">
              <figure>
                <img
                  src="../assets/img/blog_2.jpg"
                  class="img-fluid w-100"
                  alt=" A wonderful jewellery for women"
                />
              </figure>
            </a>
            <div class="card-body">
              <span class="text-muted">April 16th, 2020</span>
              <h5 class="card-title">
                <a href="/blog/victoria-a-wonderful-jewellery-for-women-1">
                  A wonderful jewellery for women
                </a>
              </h5>
              <p class="card-text">
                We're delighted to announce that Rachel Boston has won Designer
                of the Year at the UK Jewellery at the UK Jewellery...
              </p>

              <a
                href="/blog/victoria-a-wonderful-jewellery-for-women-1"
                class="btn btn-sm btn-link text-primary pl-0 pr-0 btn-blog"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="col-sm-4 col-12 rounded-0 card">
            <a href="/blog/victoria-a-wonderful-jewellery-for-women">
              <figure>
                <img
                  src="../assets/img/blog_3.jpg"
                  class="img-fluid w-100"
                  alt="A wonderful jewellery for women"
                />
              </figure>
            </a>
            <div class="card-body">
              <span class="text-muted">April 16th, 2020</span>
              <h5 class="card-title">
                <a href="/blog/victoria-a-wonderful-jewellery-for-women">
                  A wonderful jewellery for women
                </a>
              </h5>
              <p class="card-text">
                We're delighted to announce that Rachel Boston has won Designer
                of the Year at the UK Jewellery at the UK Jewellery...
              </p>

              <a
                href="/blog/victoria-a-wonderful-jewellery-for-women"
                class="btn btn-sm btn-link text-primary pl-0 pr-0 btn-blog"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-title a{
  text-decoration: none;
  color: black;
  font-size: larger;
}
</style>
