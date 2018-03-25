<template>
  <div class="profile-home">
    <img v-bind:src="image"/>
  </div>
</template>

<script>

export default {
  name: 'ProfileHome',
  data () {
    return {
      title: 'ProfileHome',
      image: '/static/img/home-svg.svg'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-home {
  height: 100%;
  width: 100%;
}
.profile-home img {
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.01;
}

</style>
