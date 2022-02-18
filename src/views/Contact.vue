<template>
    <div>
  <Navbar/>
  <div class="container contact-page">
      <h3 class="text-center"><strong>Contact Us</strong></h3>
      <p class="text-center">Any questions or remarks? just write us a message</p>

      <div class="row shadow row-contact mt-3 mb-3">
          <div class="col-md-5 left-contact p-4">
               <h4 class="text-white"><strong>Contact Information</strong></h4>
              <p class="mt-2 text-white">I will up the form and our team will getback to you within 24 ours</p>
              <p class="text-white  mt-3"><b-icon-telephone-plus-fill class="mr-4"></b-icon-telephone-plus-fill> 085880609799</p>
              <p class="text-white  mt-3"><b-icon-mailbox2 class="mr-4"></b-icon-mailbox2> me@gmail.com</p>
              <img class="img-contact img-fluid" src="../assets/images/hero.svg" alt="">
          </div>
          <div class="col-md-6 p-4">
             <form action="">
                 <label for="">Your Name</label>
                 <input type="text" class="form-control" placeholder="John Doe">
                 <label class="mt-2" for="">Phone Number</label>
                 <input type="number" class="form-control" placeholder="085xxxx">
                 <label class="mt-2" for="">Email Address</label>
                 <input type="email" class="form-control" placeholder="john@gmail.com">
                 <label class="mt-2" for="">Message</label>
                 <textarea class="form-control"></textarea>
                 <router-link class="btn btn-warning mt-3" to="/contact">Submit</router-link>
             </form>
          </div>
      </div>

  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Contact',
    components: {
        Navbar
    }
}
</script>

<style>
    .contact-page{
        margin-top:100px;
    }
    .row-contact{
        border-radius:20px;
    }
    .row-contact .bgwarning{
        border-radius: 20px;
    }
    .left-contact{
        background-color: rgba(245, 163, 11, 0.712);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    img.img-contact{
        /* height: 200px !important; */
        width: 50% !important;
        margin-left: 20%;
        
    }

</style>