<template>
  <div class="main-content">
    <div class="row justify-content-center">
      <div class="logo col-md-4">
        <img src="/static/img/thoughtbank-logo-draft.svg"/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2>Have something to say? Want to see what others are talking about?</h2>
        <p>Submit your thoughts and view/save other people's thoughts with ThoughtBank. Gain reputation and unlock exclusive badges and skins with popular thoughts.</p>
        <router-link to="register"><div class="get-started">Get started</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Landing',
  data () {
    return {
      title: 'Landing'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  max-width: 1280px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.row {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.get-started {
  margin-top: 20px;
  background-image: -webkit-gradient(linear,left top,right top,from(#00d9bf),to(#00d977));
  background-image: linear-gradient(to right,#00d9bf,#00d977);
  -webkit-box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
  box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
  text-shadow: 0 1px 3px rgba(0,0,0,.3);
  border: none;
  line-height: calc((1rem * 1.25) + 4px);
  transition: 0.2s;
  padding: 10px;
  color: #fff;
  border-radius: 3px;
}

.get-started:hover {
  box-shadow: 0 3px 0 0 #00bb85, 0 0 0 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
  transition: 0.2s;
}

</style>
