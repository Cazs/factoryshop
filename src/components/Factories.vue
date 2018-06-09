<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>
<script>
</script>
<template>
  <section>
    <Masthead></Masthead>
  <!-- Factories -->
    <div style="width:80%;height:300px;background-color:lime;position:absolute;top:100px;margin-left:10%;border-radius:5px;">
      <h1 style="font-size:30px;">A list of factories</h1>
    </div>
  </section>
</template>

<style scoped>
 /* .masthead{
   margin-top:-620px;
 } */
</style>
<script>
import Masthead from './Masthead.vue';

export default
{
  name: 'Factories',
  components: { Masthead },
  mounted: function()
  {
    var masthead = document.querySelector('.masthead');
    // masthead.style.display='none';
    masthead.style.position = 'absolute';
    masthead.style.top = '-500px';
    // $('.masthead').css(display, 'none');
    console.log(masthead.style);
  }
}
</script>
