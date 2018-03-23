<template>
  <div class="wallet-container">
    <h1 class="title">{{ title }}</h1>
    <div class="row">

      <div class="col-xl-4 col-md-6 thought-single-container" v-for="thought in user.thoughts">
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

export default {

  name: 'ThoughtWallet',
  data () {
    return {
      title: 'My ThoughtWallet',
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
          {author: 'Trace McSorley', skin: 'red', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 245, content: 'Am I the only one that thinks Joe Paterno didn\'t know?', date: '03/20/2018'},
          {author: 'Bethel Nikole', skin: 'blue', avatar: 'https://images.pexels.com/photos/752528/pexels-photo-752528.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: -2, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC', date: '03/20/2018'},
          {author: 'Abhilasha Sandile', avatar: 'https://images.pexels.com/photos/801893/pexels-photo-801893.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 10230, content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words', date: '03/20/2018'},
          {author: 'Erik Gracelyn', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 14, content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', date: '03/20/2018'},
          {author: 'Valerie Dorothea', avatar: 'https://images.pexels.com/photos/929606/pexels-photo-929606.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: -8, content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', date: '03/20/2018'},
          {author: 'Cecilia Russel', skin: 'red', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: -34, content: 'The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', date: '03/20/2018'},
          {author: 'Judie Nena', avatar: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 132, content: 'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', date: '03/20/2018'},
          {author: 'Baldwin Troy', avatar: 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 4326, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC', date: '03/20/2018'},
          {author: 'Reuben Colin', skin: 'blue', avatar: 'https://images.pexels.com/photos/940880/pexels-photo-940880.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 78, content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', date: '03/20/2018'},
          {author: 'Maxene Merideth', avatar: 'https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', rep: 113, content: 'The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', date: '03/20/2018'}
        ]
      }
    }
  },
  methods: {
    repColor: function(rep) {
      if (rep > 0) {
        return 'blue';
      }
      return 'red';
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
    height: 200px;
    overflow: hidden;
    position: relative;
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
</style>
