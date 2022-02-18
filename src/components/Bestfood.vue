<template>
  <div>
    <div class="row bestfood">
      <div class=" col-12 col-md-12 pt-5 pb-3">
        <p class="what-we-serve text-center">WHAT WE SERVE</p>
        <h2 class="text-center our-best-food">
          Our Best Food <br />
          Choosen by Customer
        </h2>
      </div>
    </div>

     <div class="row bestfood pl-5  pr-5 pb-4" >
      <div class="col-md-3 col-12 p-3" v-for="product in products" :key="product.id">
        <div class="cards ml-auto m-md-0 bestfood shadow">
          <div class="image cards">
            <img class="img-fluid" :src="'/assets/images/'+product.gambar" alt="">
          </div>
          <div class="text cards d-flex justify-content-center flex-column">
            <p class="text-center font-weight-bold">{{product.nama}}</p>
            <p class="text-center">Rp {{product.harga}}</p>
            <!-- <button class="btn btn-dark w-md-80 ">Buy</button> -->
            <router-link class="btn btn-dark w-md-80 " :to="'/detilproduct/'+product.id">Buy</router-link>
          </div>
        </div>
      </div>



      
      

      
    </div>
  </div>
</template>

<script>
export default {
  name: "Bestfood",
  props: ['products']
};
</script>

<style>
.bestfood {
  background-color: rgba(255, 166, 0, 0.144);
}
.what-we-serve {
  color: orange;
  font-weight: 600;
}
.our-best-food {
  font-weight: 600;
}

.cards.bestfood{
  width: 90%;
  height: 290px;
  background-color: rgba(255, 166, 0, 0.582);
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.image.cards{
  flex: 50%;
}
.image.cards img{
  border-radius: 10px;
  height: 140px;
  width: 100%;
  margin-bottom:2px ;
}
.text.cards{
  flex: 50%;
  padding-top: 0;
}
</style>