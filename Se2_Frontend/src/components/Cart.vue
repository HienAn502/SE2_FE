<template>
  <div id="cd-shadow-layer" class=""></div>
  <div id="cd-cart" class="position-fixed speed-in">
    <div class="cd-cart-trigger">
      <a href="#" class="m-0 p-0 display-4 position-absolute panel-close">×</a>
    </div>
    <h4 class="text-center text-muted">Cart</h4>
    <div class="col-12 shopping-empty-state ng-scope clearfix">
      <div class="cart-empty mb-3 mt-2">
        <div class="text-center">
          <svg
            class="bi bi-circle-slash mb-2"
            width="2em"
            height="2em"
            viewBox="0 0 20 20"
            fill="#ccc"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM5.071 4.347a7.5 7.5 0 0110.582 10.582L5.071 4.347zm-.724.724a7.5 7.5 0 0010.582 10.582L4.347 5.071z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <br />
          Your shopping cart is empty.
        </div>
      </div>
    </div>
    <div class="clearfix text-center px-4">
      <a
        href="#0"
        class="btn btn-lg btn-primary btn-block checkout-btn"
        onclick="window.location.href = '/store_orders/checkout';"
      >
        Checkout
      </a>
      <p class="py-2 cd-go-to-cart">
        <a href="#0" onclick="window.location.href = '/store_carts/cart';">
          Go to cart page
        </a>
      </p>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
