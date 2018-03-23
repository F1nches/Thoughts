<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/">
        <img v-bind:src="logo"/>
      </router-link>
    </div>
    <div class="user-info">
      <div class="user-avatar">
        <router-link to="/profile">
          <img v-bind:src="user.avatar"/>
        </router-link>
      </div>
      <div class="user-name">
        <router-link to="/profile">
          <h4>{{ user.name }}</h4>
        </router-link>
      </div>
      <div class="user-awards">
        <ul>
          <li v-for="award in user.awards">
            <img v-bind:alt="award.name" v-bind:src="award.img"/>
            <div class="tips">{{ award.name }}</div>
          </li>
        </ul>
      </div>
      <div class="favorite-thought">
        {{ user.favoriteThought.content }}
      </div>
      <div class="thought-buttons-container">
        <router-link to="/profile/wallet">
          <div class="thought-wallet">
            My thoughtwallet
          </div>
        </router-link>
        <router-link to="/profile/swipe">
          <div class="thought-withdrawal">
            Thought Withdrawal
          </div>
        </router-link>
        <router-link to="/profile/deposit">
          <div class="thought-deposit">
            Thought Deposit
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data () {
    return {
      logo: '/static/img/thoughtbank-logo-draft.svg',
      user: {
        name: 'Fincherr',
        avatar: 'https://images.pexels.com/photos/709068/pexels-photo-709068.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
        favoriteThought: {author: 'Bethel Nikole', avatar: 'https://images.pexels.com/photos/752528/pexels-photo-752528.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: -2, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC', date: '03/20/2018'},
        awards: [
          {name: '100+ rep', img: 'https://image.flaticon.com/icons/svg/771/771222.svg'},
          {name: '250+ rep', img: 'https://image.flaticon.com/icons/svg/771/771224.svg'},
          {name: '500+ rep', img: 'https://image.flaticon.com/icons/svg/771/771204.svg'},
          {name: '#1 User in Area', img: 'https://image.flaticon.com/icons/svg/771/771219.svg'},
          {name: '100+ given', img: 'https://image.flaticon.com/icons/svg/771/771202.svg'}
        ]
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    padding: 20px;
    height: 100%;
    min-height: 100vh;
    color: #fff;
  }

  @media screen and (min-width: 48em) {
    .sidebar {
      box-shadow: 5px 0px 20px #1a222b;
    }
  }

  .logo {
    margin-bottom: 20px;
  }

  .logo img {
    width: 100%;
  }

  .user-avatar img {
    width: 100%;
  }

  .user-name {
    margin-top: 10px;
  }

  .user-awards ul {
    text-align: center;
  }

  .user-info, .favorite-thought {
    text-align: center;
  }

  .user-awards ul li {
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

  .user-awards ul li:hover .tips {
    display: block;
  }

  .favorite-thought {
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: italic;
  }

  .thought-cats ul li, .thought-buttons-container div {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: 0.2s;
    border-radius: 3px;
    cursor: pointer;
  }

  .thought-cats ul li {
    background: #2e86de;
  }

  .thought-buttons-container div {
    text-align: center;
  }

  .thought-buttons-container div.thought-withdrawal {
    background-image: -webkit-gradient(linear,left top,right top,from(#fc0),to(#ffa100));
    background-image: linear-gradient(to right,#fc0,#ffa100);
    -webkit-box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33,7,77,.5);
    box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33,7,77,.5);
    text-shadow: 0 1px 3px rgba(0,0,0,.3);
    border: none;
    line-height: calc((1rem * 1.25) + 4px);
    transition: 0.2s;
  }

  .thought-buttons-container div.thought-withdrawal:hover {
    box-shadow: 0 3px 0 0 #db9d00, 0 0 0 0 #ffb600, 0 4px 10px 0 rgba(33,7,77,.5);
    transition: 0.2s;
  }

  .thought-buttons-container div.thought-deposit {
    background-image: -webkit-gradient(linear,left top,right top,from(#00d9bf),to(#00d977));
    background-image: linear-gradient(to right,#00d9bf,#00d977);
    -webkit-box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
    box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
    text-shadow: 0 1px 3px rgba(0,0,0,.3);
    border: none;
    line-height: calc((1rem * 1.25) + 4px);
    transition: 0.2s;
  }

  .thought-buttons-container div.thought-deposit:hover {
    box-shadow: 0 3px 0 0 #00bb85, 0 0 0 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
    transition: 0.2s;
  }


  .thought-buttons-container div.thought-wallet {
    background-image: -webkit-gradient(linear,left top,right top,from(#ad59ff),to(#7659ff));
    background-image: linear-gradient(to right,#ad59ff,#7659ff);
    -webkit-box-shadow: 0 3px 0 0 #7e4ddb, 0 2px 8px 0 #9259ff, 0 4px 10px 0 rgba(33,7,77,.5);
    box-shadow: 0 3px 0 0 #7e4ddb, 0 2px 8px 0 #9259ff, 0 4px 10px 0 rgba(33,7,77,.5);
    text-shadow: 0 1px 3px rgba(0,0,0,.3);
    border: none;
    line-height: calc((1rem * 1.25) + 4px);
    transition: 0.2s;
  }

  .thought-buttons-container div.thought-wallet:hover {
    box-shadow: 0 3px 0 0 #7e4ddb, 0 0 0 0 #9259ff, 0 4px 0 0 rgba(33,7,77,.5);
    transition: 0.2s;
  }

  .thought-cats ul li:hover {
    background: #54a0ff;
    transition: 0.2s;
  }

  .thought-buttons-container div {
    color: #fff;
  }

  .router-link-active div {
    color: #fff;
  }
</style>
