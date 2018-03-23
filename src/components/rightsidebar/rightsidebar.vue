<template>
  <div class="sidebar">
    <h5>Filter thought categories</h5>
    <div class="categories-container">
      <i class="material-icons">face</i>
      <i class="material-icons">brush</i>
      <i class="material-icons">code</i>
      <i class="material-icons">album</i>
      <i class="material-icons">brightness_5</i>
      <i class="material-icons">business</i>
      <i class="material-icons">child_care</i>
      <i class="material-icons">blur_on</i>
      <i class="material-icons">cloud_queue</i>
    </div>
    <h5>Top Thoughts</h5>
    <div class="col-xs-12 thought-single-container" v-for="thought in topThoughts">
      <div class="thought-single">
        <div class="thought-content">{{ thought.content }}</div>
        <div class="thought-meta">
          <div class="meta-item thought-avatar"><img :src="thought.avatar"/></div>
          <div class="meta-item thought-author">{{ thought.author }}</div>
          <div class="meta-item thought-rep">{{ thought.rep }}</div>
        </div>
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
      topThoughts: [
        {author: 'Trace McSorley', skin: 'red', avatar: 'https://images.pexels.com/photos/945813/pexels-photo-945813.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 10234, content: 'Am I the only one that thinks Joe Paterno didn\'t know?', date: '03/20/2018'},
        {author: 'Bethel Nikole', skin: 'blue', avatar: 'https://images.pexels.com/photos/752528/pexels-photo-752528.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 9345, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC', date: '03/20/2018'},
        {author: 'Abhilasha Sandile', avatar: 'https://images.pexels.com/photos/801893/pexels-photo-801893.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb', rep: 9210, content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words', date: '03/20/2018'}
      ]
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
      box-shadow: -5px 0px 20px #1a222b;
    }
  }

  .material-icons {
    font-size: 36px;
    margin: 10px;
  }

  .thought-single-container {
    margin: 20px 0;
  }

  .thought-single {
    padding: 15px;
    box-shadow: -5px 0px 20px #1a222b;
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
</style>
