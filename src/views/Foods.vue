<template>
  <div>
    <Navbar />
    <div class="container-fluid pl-md-5   list-food">
        <div class="row mb-4">
            <div class="col-md-3">
                <h2>Choose <strong>Food</strong></h2>
            </div>

            <div class="col-md-9">
            <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search menu here..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              @keyup="searchProduct"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2"
                ><b-icon-search></b-icon-search></span
              >
            </div>
          </div>
            </div>
            
        </div>
        
        <div class="row ">
            <div class="col-md-3 col-12 p-3" v-for="product in products" :key="product.id">
        <div class="cards bestfood shadow m-auto m-md-0">
          <div class="image cards ">
            <img class="img-fluid" :src="'/assets/images/'+product.gambar" alt="">
          </div>
          <div class="text cards d-flex justify-content-center flex-column">
            <p class="text-center font-weight-bold">{{product.nama}}</p>
            <p class="text-center">Rp {{product.harga}}</p>
            <!-- <button class="btn btn-dark w-md-80 ">Buy</button> -->
            <router-link class="btn btn-dark w-md-80" :to="'/detilproduct/'+product.id">Buy </router-link>
          </div>
        </div>
      </div>
        </div>

    </div>

  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios"

export default {
  name: "Foods",
  components: {
    Navbar,
  },
  data(){
    return{
      products: [],
      search: ''
    }
  },
  methods:{
    setProduct(data){
      this.products = data
    },
    searchProduct(){
        axios.get('http://my-json-server.typicode.com/maulanaulul/jsonfoodorder/products?q='+this.search)
        .then((response)=> this.setProduct(response.data))
        .catch(function (error) {
        // handle error
        console.log(error);
    });
    }

  },
  mounted(){
    axios.get('http://my-json-server.typicode.com/maulanaulul/jsonfoodorder/products')
  .then((response)=> this.setProduct(response.data))
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  }
};
</script>

<style>
.list-food {
  margin-top: 100px;
  padding-right: 6% !important;
}

</style>