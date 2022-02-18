<template>
  <div class="fixed-top shadow-sm ">
    <b-navbar class="pl-md-5 pr-md-5" toggleable="lg" type="dark" variant="warning">
    <div>
          <a class="navbar-brand" href="#"><strong>Food</strong>Order</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     <div class="navbar-nav ml-auto ">
            
            <router-link class="nav-link text-white" to="/" >Home</router-link>
            <router-link class="nav-link text-white" to="/foods">Foods</router-link>
            <router-link class="nav-link text-white " to="/contact">Contact Us</router-link>
            
        </div>

        <div class="d-flex ml-auto">
        <router-link class="nav-link text-dark " to="/keranjang">Cart
        <b-icon-bag></b-icon-bag>
         <span class="badge ml-1">0</span>
        </router-link>
          
        </div>
    </b-collapse>
  </b-navbar>
    <!-- <nav class="navbar navbar-expand-lg navbar-light mt-3 ">

      <div class="container d-flex justify-content-between">
        <div>
          <a class="navbar-brand" href="#"><strong>Food</strong>Order</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        

        <div class="navbar-nav ml-auto ">
            
            <router-link class="nav-link" to="/" >Home</router-link>
            <router-link class="nav-link " to="/foods">Foods</router-link>
            <router-link class="nav-link " to="/contact">Contact Us</router-link>
            
        </div>

        <div class="d-flex ml-auto">
        <router-link class="nav-link text-dark " to="/keranjang">Keranjang
        <b-icon-bag></b-icon-bag>
         <span class="badge ml-1">0</span>
        </router-link>
          
        </div>
        
    

        

      </div>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
    
    .nav-link{
        widows: 30px !important;
        padding: 10px !important;
    }
    .router-link-exact-active{
        background-color: rgba(255, 166, 0, 0.829);
        color: white !important;
        border-radius: 10px;
    }
    .badge{
        background-color: rgba(255, 166, 0, 0.747) !important;
        color: white;
    }
    .navbar-brand{
        font-size: 150% !important;
    }
   
</style>
