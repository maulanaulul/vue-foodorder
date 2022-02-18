<template>
  <div class="home">
    <Navbar/>
    <div class="container">
      <Hero />
      
    </div>
    <div class="container-fluid">
      <Bestfood :products="products"/>
      
    </div>
    <div class="container pb-4">
      <div class="row mt-4">
        
        <div class="col-md-6">
          <img class="testimoni img-fluid ml-5" src="../assets/images/testi.svg" alt="">
        </div>
        <div class="col-md-6">
          <p class="text-warning font-weight-bold mt-5">What They Say</p>
          <h3 class="font-weight-bold">What Customer Say About us!</h3>
          <p>"OrderFood is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast services."</p>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Bestfood from '../components/Bestfood.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Bestfood
  },
  data(){
    return{
      products: []
    }
  },
  methods:{
    setProduct(data){
      this.products = data
    }
  },
  mounted(){
    axios.get('http://my-json-server.typicode.com/maulanaulul/jsonfoodorder/best-products')
  .then((response)=> this.setProduct(response.data))
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  }

}
</script>

<style>
  img.testimoni{
    margin-top: 80px;
    width: 70% !important;
  }

  
</style>

