<template>
  <div class="row thought-row justify-content-md-center">
    <div class="col-md-12 thought-container" id="thought-container">
      <div class="circle slideIn" id="circle">
        <div class="box box1 rotating" id="box1"></div>
        <div class="box box2 rotating-back" id="box2"></div>
        <div class="thought-text">
          <div class="text-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
          <div class="controls">

            <div class="pass" id="pass">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
                <g>
                  <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" style="fill: rgb(255, 255, 255);"></path>
                  <path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36   s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293   c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z" style="fill: rgb(255, 255, 255);"></path>
                </g>
              </svg>
            </div>

            <div class="pick" id="pick">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
                <g>
                  <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" style="fill: rgb(255, 255, 255);"></path>
                  <path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z" style="fill: rgb(255, 255, 255);"></path>
                </g>
              </svg>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ThoughtSwipe',
  data () {
    return {
      title: 'ThoughtSwipe',
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
  },
  methods: {
    picked: function() {
      if (!circle.classList.contains('save') && !circle.classList.contains('reject')) {
        circle.className += ' save';
        boxOne.className += ' save';
        boxTwo.className += ' save';
      }
      circle.addEventListener("animationend", newThought, false);
    },
    reject: function() {
      if (!circle.classList.contains('reject') && !circle.classList.contains('save')) {
        circle.className += ' reject';
        boxOne.className += ' reject';
        boxTwo.className += ' reject';
      }
      circle.addEventListener("animationend", newThought, false);
    },
    newThought: function() {
      // Get random thought from thoughts array
      var newThought = thoughtArr[Math.floor(Math.random() * thoughtArr.length)].content;
      circle.querySelector('.text-content').innerHTML = newThought;
      circle.classList.remove('save');
      boxOne.classList.remove('save');
      boxTwo.classList.remove('save');
      circle.classList.remove('reject');
      boxOne.classList.remove('reject');
      boxTwo.classList.remove('reject');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle {
  width: 500px;
  height: 500px;
  position: relative;
}

@media screen and (max-width: 48em) {
  .circle {
    width: 350px;
    height: 350px;
    position: relative;
  }
}

.box {
  position: absolute;
  mix-blend-mode: darken;
  height: 100%;
  width: 100%;
  border-radius: 45%;
  opacity: 0.7;
}

.box1 {
  background: #00d2d3;
  transition: 0.3s;
}

.box2 {
  background: #54a0ff;
  transform: rotate(45deg);
  transition: 0.3s;
}

.box1.save, .box2.save {
  transition: 0.3s;
}

#box1.save {
  background: green;
}

#box2.save {
  background: lightgreen;
}

#box1.reject {
  background: red;
}

#box2.reject {
  background: purple;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -30px 0 0 -30px;
  z-index: 1000;
}

.logo h1 {
  line-height: 100px;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 10s linear infinite;
  -moz-animation: rotating 10s linear infinite;
  -ms-animation: rotating 10s linear infinite;
  -o-animation: rotating 10s linear infinite;
  animation: rotating 10s linear infinite;
}

@-webkit-keyframes rotating-back /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@keyframes rotating-back {
  from {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
.rotating-back {
  -webkit-animation: rotating-back 13s ease-in infinite;
  -moz-animation: rotating-back 13s ease-in infinite;
  -ms-animation: rotating-back 13s ease-in infinite;
  -o-animation: rotating-back 13s ease-in infinite;
  animation: rotating-back 13s ease-in infinite;
}

.thought-row {
  overflow: hidden;
  height: 100%;
}
.thought-container {
  overflow: hidden;
  height: 100%;
  position: relative;
}

.circle {
  transition: 0.2s;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  top: 0;
  bottom: 0;
}

.circle.slideIn {
  animation: slideIn 0.7s forwards;
}

.circle.save {
  animation: save 0.4s forwards;
}

.circle.reject {
  animation: reject 0.4s forwards;
}


.circle:hover {
  transition: 0.4s;
}

.thought-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  width: 75%;
}

.controls {
  margin-top: 25px;
  text-align: center;
}

.controls svg {
  width: 100%;
  height: 100%;
}

.controls div {
  display: inline-block;
  transition: 0.2s;
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 50%;
  background: none;
}

.controls div:hover {
  transform: scale(1.2);
  transition: 0.2s;
  background: #222f3e;
}

.controls div:not(:last-of-type) {
  margin-right: 25px;
}

#pass:hover svg path {
  fill: #ff6b6b !important;
}

#pick:hover svg path {
  fill: #1dd1a1 !important;
}

@keyframes slideIn {
  0% {
    right: -100%;
    transform: scale3d(1.2,0.6,1);
    opacity: 0;
  }
  30% {
    transform: scale3d(1.1,0.4,1);
  }
  90% {
    transform: scale3d(1.1,1.2,1);
  }
  100% {
    right: 0;
    transform: scale3d(1,1,1);
    opacity: 1;
  }
}

@keyframes save {
  0% {
    top: default;
    transform: scale3d(1.0,1,1);
  }
  30% {
    transform: scale3d(0.8,1,1);
  }
  90% {
    transform: scale3d(1.2,1,1);
  }
  100% {
    top: -400px;
    transform: scale3d(1.0,1,1);
    opacity: 0;
  }
}

@keyframes reject {
  0% {
    top: default;
    transform: scale3d(1.0,1,1);
  }
  30% {
    transform: scale3d(0.8,1,1);
  }
  90% {
    transform: scale3d(1.2,1,1);
  }
  100% {
    top: 400px;
    transform: scale3d(1.0,1,1);
    opacity: 0;
  }
}
</style>
