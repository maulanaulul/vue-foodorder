<template>
  <div class="div">
    <Navbar />
    <div class="container detilProduct">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item text-dark"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item text-dark"><router-link to="/foods">Foods</router-link></li>
          <li class="breadcrumb-item active" aria-current="page"><strong>Detil Product</strong></li>
        </ol>
      </nav>
      <div class="row mt-3">
        <div class="col-md-6 col-12 mt-2">
          <img
            class="detilImage img-fluid"
            :src="'/assets/images/' + product.gambar"
            alt=""
          />
        </div>

        <div class="col-md-6 col-12 mt-2">
          <h3>
            <strong>{{ product.nama }}</strong>
          </h3>
          <hr>
          <h5>Price <strong>Rp {{product.harga}}</strong></h5>
          <form action="" class="mt-3">
              <label for="" >Buy quantiy</label>
              <input type="number" class="form-control">
              <label for="">Message</label>
              <textarea class="form-control" placeholder="type your message here.." ></textarea>
              <router-link class="btn btn-warning mt-3" to="/foods">Buy Now</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetilProduct",
  components: {
    Navbar,
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get(
        "http://my-json-server.typicode.com/maulanaulul/jsonfoodorder/products/" +
          this.$route.params.id
      )
      .then((response) => this.setProduct(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style>
.detilProduct {
  margin-top: 100px;
}
img.detilImage {
  border-radius: 20px;
}
</style>