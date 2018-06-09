<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template>
  <div>
    <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/">Factoryshop</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link js-scroll-trigger" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link js-scroll-trigger" to="/factories">Factories</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link js-scroll-trigger" to="#contact">Contact</router-link>
              </li>
              <li class="nav-item" style="margin-top:-7px;">
                <!--<router-link class="nav-link js-scroll-trigger" to="/admin"></router-link>-->
                <!-- <b-btn v-b-popover.click.blur.bottom.html="'<div><a href=#/admin>Overview</a><br/><a href=#/admin/factories>Manage Factories</a></div>'" title="Popover Title">
                  Dashboard
                </b-btn> -->
                <b-dropdown id="dashboard" text="Dashboard" class="m-md-2" style="background-color:#343434;">
                  <b-dropdown-item>
                    <b-btn v-b-modal.loginModal class="btn btn-success">Login</b-btn>
                    <b-btn v-b-modal.signupModal class="btn btn-default">Sign Up</b-btn>
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>
                    <router-link to='/admin' style="color:black;">Overview</router-link>
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>
                    <router-link to='/admin/factories' style="color:black;">Manage Factories</router-link>
                  </b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
</template>

<style>
.popover
{
  position: absolute !important;
  top: 0px;
  margin-top:-10px !important;
}

#mainNav
{
  font-family: 'Cabin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 0;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: black;
}

#mainNav .navbar-toggler
{
  font-size: 14px;
  padding: 11px;
  color: white;
  border: 1px solid white;
}

#mainNav .navbar-brand
{
  font-weight: 700;
}

#mainNav a
{
  color: white;
}

#mainNav .navbar-nav .nav-item
{
  /*-webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;*/
}

#mainNav .navbar-nav .nav-item:hover
{
  color: fade(white, 80%);
  outline: none;
  background-color: transparent;
}

#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus
{
  outline: none;
  background-color: transparent;
}

@media (min-width: 992px)
{
  #mainNav
  {
    padding-top: 20px;
    padding-bottom: 20px;
    /*-webkit-transition: background 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s;
    -moz-transition: background 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s;
    transition: background 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s;*/
    letter-spacing: 1px;
    border-bottom: none;
    background: transparent;
  }

  #mainNav.navbar-shrink
  {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    background: black;
  }

  #mainNav .nav-link.active
  {
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }

  #mainNav .nav-link.active:hover
  {
    color: white;
  }
}
</style>
<script src='../assets/vendor/jquery/jquery.min.js'></script>
<script src='https://unpkg.com/popper.js/dist/umd/popper.min.js'></script>
<script src='https://unpkg.com/tooltip.js/dist/umd/tooltip.min.js'></script>

<script>
import { HttpClient } from '../assets/js/HttpClient.js'

export default
{
  name: 'Nav',
  methods: {},
  mounted: function(){}
}
</script>
