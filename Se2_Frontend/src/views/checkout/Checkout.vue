<template>
    <div class="div_class">
      <h3>You will be redirected to payment page</h3>
      <div class="alert alert-primary">
        While making payment use card number 4242 4242 4242 4242 and enter random
        date and cvv (3 digit)
      </div>
  
      <button class="btn btn-primary" @click="goToCheckout">Make Payment</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        stripeAPIToken: 'pk_test_51N3wTvL12NSAmRvsU78E4PGMH01JdECv4fLD8APY1qFQuB8JRz7cGYtsjp9tbQp1BuCTwHZ4ZWMerGZJyV19Gnsl00zneVk3X1',
        stripe: '',
        token: null,
        checkoutBodyArray: [],
      };
    },
    name: 'Checkout',
    props: ["baseURL"],
    methods: {
      getAllItems() {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((response) => {
            if (response.status == 200) {
              let products = response.data;
              for (let i = 0; i < products.cartItemDTOList.length; i++) {
                this.checkoutBodyArray.push({
                  price: products.cartItemDTOList[i].product.price,
                  quantity: products.cartItemDTOList[i].quantity,
                  productName: products.cartItemDTOList[i].product.name,
                  productId: products.cartItemDTOList[i].product.id,
                });
              }
            }
          })
          .catch((err) => console.log(err));
      },
      goToCheckout() {
        console.log('checkoutBodyArray', this.checkoutBodyArray);
        axios
          .post(
            `${this.baseURL}order/create-checkout-session`,
            this.checkoutBodyArray
          )
          .then((response) => {
            localStorage.setItem('sessionId', response.data.sessionId);
            console.log('session', response.data);
            this.stripe.redirectToCheckout({
              sessionId: response.data.sessionId,
            });
          })
          .catch((err) => console.log(err));
      },
    },
    mounted() {
      this.token = localStorage.getItem('token');
      this.stripe = window.Stripe(this.stripeAPIToken);
      this.getAllItems();
    },
  };
  </script>
  <style scoped>
  .alert {
    width: 50%;
  }
  .div_class {
    margin-top: 5%;
    margin-left: 30%;
  }
  .checkout_button {
    background-color: #5d3dec;
    margin: 10px;
  }
  </style>