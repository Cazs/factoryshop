<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template class="fixed-nav sticky-footer">
    <section>
        <Masthead></Masthead>
        <Nav></Nav>
    </section>
</template>

<script>
import Nav from '../Nav.vue';
import Masthead from '../Masthead.vue';

export default {
  name: 'Dashboard',
  components: { Nav, Masthead },
  mounted: function() {
    var masthead = document.querySelector('.masthead');
    masthead.style.position = 'fixed';
    masthead.style.top = 0;
  }
}
</script>

