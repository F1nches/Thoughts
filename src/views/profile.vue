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
      options: [
        {settings: '/static/img/settings.svg'},
        {signout: '/static/img/signout.svg'}
      ],
      user: {
        name: 'Fincherr',
        awards: [
          {name: '100+ rep', img: 'https://image.flaticon.com/icons/svg/771/771222.svg'},
          {name: '250+ rep', img: 'https://image.flaticon.com/icons/svg/771/771224.svg'},
          {name: '500+ rep', img: 'https://image.flaticon.com/icons/svg/771/771204.svg'},
          {name: '#1 User in Area', img: 'https://image.flaticon.com/icons/svg/771/771219.svg'},
          {name: '100+ given', img: 'https://image.flaticon.com/icons/svg/771/771202.svg'}
        ],
        thoughts: [
          {author: 'Trace McSorley', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 245, content: 'Am I the only one that thinks Joe Paterno didn\'t know?', date: '03/20/2018'},
          {author: 'Bethel Nikole', avatar: 'https://images.pexels.com/photos/752528/pexels-photo-752528.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: -2, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC', date: '03/20/2018'},
          {author: 'Abhilasha Sandile', avatar: 'https://images.pexels.com/photos/801893/pexels-photo-801893.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 10230, content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words', date: '03/20/2018'},
          {author: 'Erik Gracelyn', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 14, content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', date: '03/20/2018'},
          {author: 'Valerie Dorothea', avatar: 'https://images.pexels.com/photos/929606/pexels-photo-929606.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: -8, content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', date: '03/20/2018'},
          {author: 'Cecilia Russel', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: -34, content: 'The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', date: '03/20/2018'},
          {author: 'Judie Nena', avatar: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 132, content: 'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', date: '03/20/2018'},
          {author: 'Baldwin Troy', avatar: 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 4326, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC', date: '03/20/2018'},
          {author: 'Reuben Colin', avatar: 'https://images.pexels.com/photos/940880/pexels-photo-940880.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 78, content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', date: '03/20/2018'},
          {author: 'Maxene Merideth', avatar: 'https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 113, content: 'The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', date: '03/20/2018'}
        ]
      }
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
