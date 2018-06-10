<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>
<template>
  <section>
    <Masthead></Masthead>
  <!-- Factories -->
    <div style="width:85%;height:auto;padding:30px;background-color:rgba(255,255,255,.9);position:absolute;top:100px;margin-left:10%;border-radius:5px;">
      <div style='width: 100%'>
        <div id='factory-logo'>
          <h1 style='font-size: 120pt'>FS</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            Factory Name: <i>{{this.selected_factory ? this.selected_factory.factory_name : 'loading...'}}</i>
          </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            Industry: <i>{{this.selected_factory ? this.selected_factory.industry : 'loading...'}}</i>
          </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            Est.: <i>{{this.selected_factory ? new Date(this.selected_factory.date_established).toLocaleDateString('en-ZA') : 'loading..'}}</i>
          </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            Delivery Range: <i>{{this.selected_factory ? this.selected_factory.delivery_range : 'loading'}}</i>
          </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            Minimun order eligible for delivery: <i>{{this.selected_factory ? this.selected_factory.delivery_min_order_cost : 'loading...'}}</i>
          </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            Rating: <i>{{this.selected_factory ? this.selected_factory.rating : 'loading...'}}</i>
          </p>
        </div>
      </div>
      <h1 style="font-size:30px;">Product Catalogue</h1>
      
      <!-- <div id="factories" class="row">
        
      </div>-->
    </div>
  </section>
</template>

<style scoped>
 /* .masthead{
   margin-top:-620px;
 } */
 #factory-logo
 {
   width: 200px;
   height: 200px;
   margin: -130px auto 0px auto;
   border: 1px solid #343434;
   border-radius: 50px;
   background-color: rgb(1, 38, 56);
   color: #fff;
 }
 
 .product
 {
   background-color: rgba(0,0,0,0.4);
   border-radius: 5px;
   border: 1px solid #3c3c3c;
 }
 .product:hover
 {
   background-color: rgba(0,0,0,0.8);
   border-radius: 6px;
   border: 1px solid #fff;
   color: #fff;
 }
</style>
<script>
import Masthead from './Masthead.vue';
import { HttpClient } from '../assets/js/HttpClient.js'
// import formatDate from '../assets/js/DateFormatter.js'
import SessionManager from '../assets/js/SessionManager.js'

export default
{
  name: 'Factories',
  components: { Masthead },
  data() {
    return {
      selected_factory: null
    }
  },
  mounted: function()
  {
    var masthead = document.querySelector('.masthead');
    masthead.style.position = 'absolute';
    masthead.style.top = '-500px';
    
    HttpClient.get('/factory/' + this.$route.params.id)
      .then(response =>
      {
        console.log('factory: ', response);
        if(response.data._embedded.factories && response.data._embedded.factories.length > 0)
          this.selected_factory = response.data._embedded.factories[0];
      })
      .catch( err =>
      {
        console.log('error: ', err);
      });
  }
}
</script>
