<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>
<template>
  <section>
    <Masthead></Masthead>
  <!-- Factories -->
    <div style="width:85%;height:auto;padding:30px;background-color:rgba(255,255,255,.9);position:absolute;top:100px;margin-left:10%;border-radius:5px;">
      <h1 style="font-size:30px;">List of factories</h1>
      <div id="factories" class="row">
        <div v-bind:key="factory._id" v-for="factory in factories" class="col-lg-4 col-md-6 col-sm-12 factory">
          <p style='font-size: 16px; font-weight: bold'>
            <i>{{factory.factory_name}}</i>
          </p>
          <p style='font-size: 16px; font-weight: bold'>
            Industry: <i>{{factory.industry}}</i>
          </p>
          <p style='font-size: 16px; font-weight: bold'>
            Est.: <i>{{new Date(factory.date_established).toLocaleDateString('en-ZA')}}</i>
          </p>
          <p style='font-size: 16px; font-weight: bold'>
            Delivery Range: <i>{{factory.delivery_range}}</i>
          </p>
          <p style='font-size: 16px; font-weight: bold'>
            Minimun order eligible for delivery: <i>{{factory.delivery_min_order_cost}}</i>
          </p>
          <p style='font-size: 16px; font-weight: bold'>
            Rating: <i>{{factory.rating}}</i>
          </p>
          <i>click to view more info &amp; product catalog</i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
 /* .masthead{
   margin-top:-620px;
 } */
 .factory
 {
   background-color: rgba(0,0,0,0.4);
   border-radius: 5px;
   border: 1px solid #3c3c3c;
 }
 .factory:hover
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
      factories: []
    }
  },
  mounted: function()
  {
    var masthead = document.querySelector('.masthead');
    // masthead.style.display='none';
    masthead.style.position = 'absolute';
    masthead.style.top = '-500px';
    // $('.masthead').css(display, 'none');
    console.log(masthead.style);

    HttpClient.get('/factories')
      .then(response =>
      {
        console.log('factories: ', response);
        this.factories = response.data._embedded.factories;
      }).catch( err =>
      {
        console.log('error: ', err);
      });
  }
}
</script>
