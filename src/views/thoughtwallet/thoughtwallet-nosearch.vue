<template>
  <div class="wallet-container">
    <div><h1 class="title">{{ title }}</h1></div>
    <div class="sort">
      <div class="sort-arrow" v-on:click="sortWalletByScoreUp()">
        <i class="material-icons">trending_down</i>
      </div>
      <div class="sort-arrow" v-on:click="sortWalletByScoreDown()">
        <i class="material-icons">trending_up</i>
      </div>
      <div class="sort-arrow" v-on:click="sortWalletByName()">
        <i class="material-icons">sort</i>
      </div>
    </div>
    <div class="row">

      <div class="col-xl-4 col-md-6 thought-single-container" v-for="thought in thoughtWallet">
        <div class="thought-single">
          <div class="thought-content">{{ thought.content }}</div>
          <div class="thought-meta">
            <div class="meta-item thought-avatar"><img :src="thought.avatar"/></div>
            <div class="meta-item thought-author">{{ thought.author }}</div>
            <div class="meta-item thought-rep" :class="repColor(thought.rep)">{{ thought.rep }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  name: 'ThoughtWallet',
  data () {
    return {
      title: 'My ThoughtWallet',
      thoughtWallet: [],
    }
  },
  created: function() {
    this.loadThoughtWallet();
  },
  methods: {
    repColor: function(rep) {
      if (rep >= 0) {
        return 'blue';
      }
      return 'red';
    },
    sortWalletByScoreUp: function() {
      function compare(a, b) {
        if (a.rep > b.rep)
          return 1;
        if (a.rep < b.rep)
          return -1;
        return 0;
      }
      return this.thoughtWallet.sort(compare);
    },
    sortWalletByScoreDown: function() {
      function compare(a, b) {
        if (a.rep > b.rep)
          return -1;
        if (a.rep < b.rep)
          return 1;
        return 0;
      }
      return this.thoughtWallet.sort(compare);
    },
    sortWalletByName: function() {
      function compare(a, b) {
        if (a.author < b.author)
          return -1;
        if (a.author > b.author)
          return 1;
        return 0;
      }
      return this.thoughtWallet.sort(compare);
    },
    loadThoughtWallet: function() {
      let self = this;
      this.thoughtWallet = 'Loading...',
      axios.get('http://localhost:3000/api/thoughts').then(function(response) {
        console.log(response.data);
        self.thoughtWallet = response.data;
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .thought-single-container {
    padding: 15px;
  }
  .thought-single {
    padding: 15px;
    box-shadow: 5px 0px 20px #1a222b;
    color: #fff;
    min-height: 200px;
    overflow: hidden;
    position: relative;
    padding-bottom: 80px;
  }
  .thought-meta {
    position: absolute;
    bottom: 15px;
  }
  .thought-meta div img {
    height: 50px;
  }
  .meta-item {
    display: inline-block;
  }
  .thought-rep {
    padding: 0px 10px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px #1a222b;
  }
  .thought-rep.blue {
    background-image: linear-gradient(to right,#00b3ff,#08f);
  }
  .thought-rep.red {
    background-color: #db305b;
  }
  .sort {
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }
  .sort-arrow {
    display: inline-block;
    margin: 10px;
  }
</style>
