<template>
  <div class="profile-container">

    <div class="row">

      <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12 about-box">
        <app-sidebar></app-sidebar>
      </div>

      <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12 main-container">
        <router-view/>
      </div>

      <div class="col-lg-2 col-md-3 d-none d-md-block">
        <app-right-sidebar></app-right-sidebar>
      </div>

    </div>
  </div>
</template>

<script>

import Sidebar from '../components/sidebar/sidebar.vue'
import RightSidebar from '../components/rightsidebar/rightsidebar.vue'

export default {
  components: {
    'app-sidebar': Sidebar,
    'app-right-sidebar': RightSidebar
  },
  name: 'Profile',
  data () {
    return {
      title: 'Profile',
      images: [
        {background: '/static/img/home-svg.svg'}
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #222f3e;
  }

  .main-container {
    padding: 20px;
  }

  .landing {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }

  .about-box {
    text-align: center;
  }

  .name-container {
    background: #222f3e;
    height: 150px;
    color: #fff;
    text-align: center;
    padding-top: 20px;
  }

  .avatar {
    width: 150px;
    height: 150px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: -75px;
    border: 5px solid #fff;
  }

  .avatar img {
    width: auto;
    height: 150px;
  }

  .awards ul {
    text-align: center;
  }

  .awards ul li {
    width: 30px;
    height: 30px;
    position: relative;
  }

  .tips {
    display: none;
    position: absolute;
    top: 35px;
    left: -20px;
    padding: 5px;
    background: black;
    color: #fff;
    z-index: 2;
    white-space: nowrap;
  }

  .awards ul li:hover .tips {
    display: block;
  }

  .favorite-thought {
    margin-top: 25px;
  }

  .thought-box {
    border-bottom: 1px solid #c8d6e5;
    padding: 25px;
  }

  .thought-content {
    font-style: italic;
  }

  .thought-meta {
    margin-top: 20px;
    color: #2e86de;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .thought-meta-info img {
    height: 25px;
    width: auto;
  }

  .thought-meta-info .thought-avatar {
    display: inline-block;
    width: 25px;
    height: 25px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .thought-meta-info .thought-author, .thought-meta-info .thought-rep {
    display: inline-block;
  }

  .thought-rep {
    color: #fff;
    padding: 1px 3px;
    background: #2e86de;
    font-size: 10px;
  }

  span.date {
    float: right;
  }

  .options img {
    width: 50px;
    height: 50px;
  }
</style>
