<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template>
  <!-- About -->
    <section id="home">
      <Masthead></Masthead>
    </section>
</template>

<style scoped>
 /* .masthead{
   margin-top:-220px;
 } */
</style>

<script>
import Masthead from './Masthead.vue'

export default
{
  name: 'Home',
  components: { Masthead },
  mounted: function()
  {
    var masthead = document.querySelector('.masthead');
    masthead.style.position = 'fixed';
    masthead.style.top = 0;
  }
}
</script>
