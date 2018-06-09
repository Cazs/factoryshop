<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template>
  <!-- Intro Header -->
    <header class="masthead">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="brand-heading"></h1>
              <p class="intro-text">
                <br>
              </p>
              <a href="#about" class="btn btn-circle js-scroll-trigger">
                <i class="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>
<style>
.masthead {
  display: table;
  width: 100%;
  height: auto;
  padding: 200px 0;
  text-align: center;
  color: white;
  background: url("../assets/img/intro-bg.jpg") no-repeat bottom center scroll;
  background-color: black;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.masthead .intro-body {
  display: table-cell;
  vertical-align: middle;
}

.masthead .intro-body .brand-heading {
  font-size: 50px;
}

.masthead .intro-body .intro-text {
  font-size: 18px;
}

@media (min-width: 768px) {
  .masthead {
    height: 100%;
    padding: 0;
  }
  .masthead .intro-body .brand-heading {
    font-size: 100px;
  }
  .masthead .intro-body .intro-text {
    font-size: 22px;
  }
}
</style>

<script>
export default {
  name: 'Masthead'
}
</script>
