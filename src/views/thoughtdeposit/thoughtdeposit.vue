<template>
  <div class="deposit-wrapper">

        <div class="form-container">
          <form class="form">
            <label>What's on your mind?</label>
            <textarea v-model="content"></textarea>
            <label>Tags</label>
            <input type="text" v-model="tags">
            <div class="skin-container">
              <input class="skin" type="radio" name="skin" v-bind:style="{ background: skin }" v-for="skin in userSkins"/>
            </div>
            <button type="submit" class="btn btn-primary submit" v-on:click.prevent="getFormData()">Submit</button>
          </form>
          <div class="message">{{ responseMessage }}</div>
        </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ThoughtDeposit',
  data () {
    return {
      title: 'ThoughtDeposit',
      tags: '',
      content: '',
      userSkins: ['#1851a7', '#ff9f43', '#5f27cd', '#1dd1a1'],
      responseMessage: ''
    }
  },
  methods: {
    getFormData: function() {

      let self = this;

      var tagArr = this.tags.split(' ');

      if (this.content) {
        axios.post('http://localhost:3000/api/thoughts', {
          author: 'Fincherr',
          tags: tagArr,
          content: this.content
        }).then(response => {self.responseMessage = 'Your thought is now successfully floating out there in cyber land. Thanks for contributing.'}).catch(e => {
          this.errors.push(e);
          self.responseMessage = 'Error submitting your thought. Please try again.';
        })

        // Reset form data after submitting
        this.tags = '';
        this.content = '';
      } else {
        self.responseMessage = 'Forgot to enter a thought? Please enter a thought and try again.';
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  margin-top: 25px;
}

textarea, input {
  width: 100%;
  background: none;
  border: 0;
  box-shadow: 0px 0px 20px #1a222b;
  color: #fff;
  padding: 10px;
}

textarea {
  height: 300px;
}

button.submit {
  margin-top: 25px;
}

button.submit, button.btn.submit:active {
  background-image: -webkit-gradient(linear,left top,right top,from(#00d9bf),to(#00d977));
  background-image: linear-gradient(to right,#00d9bf,#00d977);
  -webkit-box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
  box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
  text-shadow: 0 1px 3px rgba(0,0,0,.3);
  border: none;
  line-height: calc((1rem * 1.25) + 4px);
  transition: 0.2s;
  width: 100%;
  padding: 10px;
}

button.submit:hover {
  box-shadow: 0 3px 0 0 #00bb85, 0 0 0 0 #00d99b, 0 4px 10px 0 rgba(33,7,77,.5);
  transition: 0.2s;
}

button.btn.submit:active {
  box-shadow: 0 !important;
  -webkit-box-shadow: 0 !important;
}

.message {
  text-align: center;
  margin-top: 25px;
}

.deposit-wrapper {
  position: relative;
  height: 100%;
}

.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 1000px) {
  .form-container {
    width: 100%;
  }
}

input[type="radio"] {
  appearance: none;
  margin: 0 5px;
  width: 36px;
  height: 36px;
  background: #eeeeee;
  border-radius: 3px;
  transition: .2s;
  cursor: pointer;
  color: #363945;
}
input[type="radio"]:hover, input[type="radio"]:checked {
   box-shadow: inset 0 0 0 2px #222F3E, 0 0 0 2px #3f536b;
}
input[type="radio"]:checked {
   box-shadow: inset 0 0 0 2px #222F3E, 0 0 0 2px #3f536b;
}
input[type="radio"]:focus {
  outline: 0;
}

.skin-container {
  text-align: center;
  margin-top: 25px;
}
</style>
