<template id="page-top">
  <div id="app">
    <Login></Login>
    <Register></Register>
    <Nav></Nav>
    <!--<About></About>-->
    <router-view/>
  </div>
</template>

<!-- JS dependencies -->
<!-- Bootstrap core JavaScript -->
<script src="./assets/vendor/jquery/jquery.min.js">
</script>
<script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Plugin JavaScript -->
<script src="./assets/vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for this template -->
<script src="./assets/js/grayscale.min.js"></script>

<!-- Setup meta tags -->
<script src="https://unpkg.com/vue-meta@1.5.0/lib/vue-meta.min.js"/>
<script>
import Nav from './components/Nav.vue'
import Masthead from './components/Masthead.vue'
import Home from './components/Home.vue'
import Factories from './components/Factories.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

this.session_id = "temp";

export default
{
  name: 'App',
  session: {session_id:'temp'},
  components: {Nav, Masthead, Home, Factories, Login, Register},
  metaInfo:
  {
    title:"Factoryshop SA",
    meta:[
      {charset: 'utf-8'},
      {name:'viewport', content:'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {name:'http-equiv', content:'IE=edge'},
      {name:'description', content: 'Factoryshop partners with some of South Africa\'s '
                                      +'best manufacturers to bring you South Africa\'s highest '
                                      +'quality products at a fraction of their retail price. '
                                      +'Buy directly from the factory on the Factoryshop platform.'},
                                      {name: 'author', content: 'Casper Ndlovu'},
                                      {name: 'theme-color', content: '#4DA5F4'}
    ],
    link:[
      {rel: 'shortcut icon', href: './assets/favicon.ico', type: 'image/x-icon'},
    ]
  }
}
</script>

<style src='./assets/css/bootstrap.min.css'></style>
<!-- <style src='./assets/css/grayscale.min.css'></style> -->
<style src='./assets/css/factoryshop.css'></style>
<!--<style src='./assets/css/modal.css'></style>-->
<style src='./assets/vendor/font-awesome/css/font-awesome.min.css'></style>

<style>
@import url('https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic');
@import url('https://fonts.googleapis.com/css?family=Cabin:700');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');
@import url('https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700');

#app
{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: 'Lora', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
}

html {
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Cabin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 35px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 25px;
}

@media (min-width: 768px) {
  p {
    font-size: 18px;
    line-height: 1.6;
    margin: 0 0 35px;
  }
}

a {
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #42DCA3;
}

a:focus, a:hover {
  text-decoration: none;
  color: #1d9b6c;
}

.btn-circle {
  font-size: 26px;
  width: 55px;
  height: 55px;
  margin-top: 15px;
  line-height: 45px;
  /*-webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;*/
  color: white;
  border: 2px solid white;
  border-radius: 100% !important;
  background: transparent;
}

.btn-circle:focus, .btn-circle:hover {
  color: white;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
}

.content-section {
  padding-top: 150px;
  padding-bottom: 150px;
}

.download-section {
  color: white;
  background: url("./assets/img/downloads-bg.jpg") no-repeat center center scroll;
  background-color: black;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#map {
  width: 100%;
  height: 300px;
}

@media (min-width: 992px) {
  .content-section {
    padding-top: 200px;
    padding-bottom: 200px;
  }
  #map {
    height: 350px;
  }
}

.btn {
  font-family: 'Cabin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  border-radius: 0;
}

.btn-default {
  color: #42DCA3;
  border: 1px solid #42DCA3;
  background-color: transparent;
}

.btn-default:focus, .btn-default:hover {
  color: black;
  border: 1px solid #42DCA3;
  outline: none;
  background-color: #42DCA3;
}

ul.banner-social-buttons {
  margin-top: 0;
}

@media (max-width: 1199px) {
  ul.banner-social-buttons {
    margin-top: 15px;
  }
}

@media (max-width: 767px) {
  ul.banner-social-buttons li {
    display: block;
    margin-bottom: 20px;
    padding: 0;
  }
  ul.banner-social-buttons li:last-child {
    margin-bottom: 0;
  }
}

footer {
  padding: 50px 0;
}

footer p {
  font-size: 14px;
  margin: 0;
}

::-moz-selection {
  background: #fcfcfc;
  background: rgba(255, 255, 255, 0.2);
  text-shadow: none;
}

::selection {
  background: #fcfcfc;
  background: rgba(255, 255, 255, 0.2);
  text-shadow: none;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}
</style>
