<template>
  <div>
    <div class="row hero">
      <div class="col-md-6 col-12 align-self-center">
        <div class="div ">
        <div class="btn btn-warning more mb-3">More Then Faster</div>
        <div class="text-hero">
          <h1>
            Be The Fastest <br> In Serving Your
            <span class="text-warning">Foods</span>
          </h1>
          <p class="mt-3">
            Our job is filling your tummy with delicious food and fast
          </p>
          <!-- <button class="btn btn-warning m-auto">Let's Buy</button> -->
          <router-link class="btn btn-warning m-auto" to="/foods">Let's Buy</router-link>
        </div>
        </div>
      </div>

      <div class="col-md-6 col-12 d-flex ">
        <img class=" hero m-auto" src="../assets/images/hero.svg" alt="">
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
.row.hero{
  height: 85vh;
  margin-top:85px;
}
.btn-warning.more {
  background-color: rgba(255, 166, 0, 0.295) !important;
  border-radius: 20px !important;
}
.text-hero h1 {
  font-weight: 800;
}
img.hero{
  width: 70%;
}

@media (max-width:767.98px) { 
  img.hero{
    display: none;
  }
 }
</style>