<script>
import axios from "axios";

import swal from "sweetalert";
export default{
  props: ["baseURL"],
  data() {
    return{
      showPassword: false,
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e){
      e.preventDefault();
      const body = {
        email: this.email,
        password: this.password,
      };
      await axios.post('${this.baseURL}user/signin', body)
      .then( () => {
        this.$router.replace("/");
        swal({
          text: "User signup successfull, please login",
          icon: "success",
        });
      })
      .catch((err) => console.log("err", err));
    },
    computed: {
      buttonLabel() {
        return (this.showPassword) ? "Hide" : "Show"
      }
    },
    methods: {
      toggleShow() {
        this.showPassword = !this.showPassword;
      }
    }

  }
}
</script>

<template>
 <section class = "container-fluid body">
    <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-background">
            <div class="container">
                <div class="row">
                <div class="col-xs-1 col-sm-1 col-md-2 col-lg-3"></div>
                <div class="col-xs-10 col-sm-10 col-md-8 col-lg-7">
                    <div class="row"> 
                        <h2>Login</h2>
                        <form name="login" id="signin" method='POST'>
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item ">
                                     
                                    <div>
                                        <input v-model="email" type="email" name="Email" class="form-control" autocomplete="off" placeholder="Email" tabindex="1" title="Please enter valid email" required="required"/>
                                    </div>
                                    </div>
                            </div>
            
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item password">
                                    <input v-if="showPassword" v-model="password" type="password" name="password" class="form-control" placeholder="Password" tabindex="2" title="Please enter valid password" required="required"/>
                                    <input v-else v-model="password" type="password" name="password" class="form-control" placeholder="Password" tabindex="2" title="Please enter valid password" required="required"/>
                                    
                                    <span><i @click="toggleShow" class="fas" :class="{'fa-eye-slash': showPassword, 'fa-eye': !showPassword}"></i></span>
                                  
                                </div>
                            </div>
            
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign In</button>
                            </div>

                            <div class="form-group forgot-password">
                                <div class=" form-item resetPassword">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>
            
                        </form>
                    </div>
                  </div>
                  <div class="col-xs-1 col-sm-1 col-md-2 col-lg-2"></div>
                </div>
            </div>
          
        </div>
        <div class="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="container">
                <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-2 col-lg-3"></div>
                    <div class="col-xs-9 col-sm-9 col-md-7 col-lg-6 register">
                        <h4>Create an account with us and you will be able to:</h4>
                        <ul class="list py-2 ">
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Check out faster</li>      
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Access your order history</li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Track new orders</li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Save items to your wish list</li>
                        </ul>
                        <div class="registernow">
                          <p>Don't Have an Account?</p>
                          <router-link to="/signup" class="btn btn-outline-danger button-signup">
                            Sign Up
                          </router-link>
                        </div>
                    </div>
                    <div class="col-xs-1 col-sm-1 col-md-2 col-lg-2"></div>    
                </div>
            </div>
        </div>
    </div>   
    </section>
</template>

<style scoped>
.container-fluid{
    background-color: #FFF9F9;
    font-size: 13px;
    margin-bottom: 20px;
  }
  .form-background{
    margin-top: 20px;
  }
  
  h2{
    text-align: left;
    margin-top: 0px;
    font-size: 3.2em;
  }

  h2,h4{
    margin-bottom: 1rem;
    font-family: 'Libre Caslon Text', serif;
  }

.form-item{
    margin-bottom: 15px;
}


.form-control{
    width:100%;
    height:auto;
    padding:14px 12px;
    border: solid 1px #ccc;
    border-radius: 0;
}

i {
  font-size: 11px;
}

input{
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 13px;
}

.password{
    position: relative;
} 

.password span{
   position: absolute;
   right: 15px;
   top: 50%;
   transform: translateY(-50%);
   font-size: 20px;
   color: #000000;
   cursor: pointer;
   display: block;
 }




.resetPassword{
    text-align: right;
  }
.btn-primary{
    background-color: #E58C82 !important;
    border-color: #E58C82 !important;
    color: #ffffff !important;
}
  
.btn-block {
    display: block;
    width: 100%;
}
.btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem
}

  .list{
    font-size: 14px;
    
  }
  
  .register{
    margin-top: 30px;
  }

  .registernow{
    
    margin-top: -5px;
    margin-bottom: 10px;

  }
.button-signup{
  margin-top: -5px;
  padding: 0.35rem 0.5rem;
    font-size: 0.85rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    
}
  
.forgot-password{
    margin-top: 10px;
}



ul {
    padding-left: 0;
    list-style: none;
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
}

p {
  
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

li {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

</style>