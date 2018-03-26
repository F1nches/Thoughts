<template>
  <div class="landing">

    <div class="form-container">

      <div class="form-row row center-xs middle-xs">

        <div class="login-form-wrapper col-xs-10 col-md-3">

          <div class="logo-box">
            <div class="box box1 rotating"></div>
            <div class="box box2 rotating-back"></div>
            <router-link to="profile"><div class="logo"><img src="static/img/brain.svg"/></div></router-link>
          </div>

          <div class="login-form-container">

            <form class="login-form register-form">
              <input type="text" placeholder="username" v-model="username"/>
              <input type="email" placeholder="email" v-model="email"/>
              <input type="password" placeholder="password" v-model="password"/>
              <input type="password" placeholder="re-enter password" v-model="repassword"/>
              <button class="form-submit-btn" type="submit" v-on:click.prevent="submitUser()">Register</button>
              <div class="login-register-switch">
                <p>Already have an account? <span class="switch login-switch-btn">Login here.</span></p>
              </div>
            </form>
          </div>
          <div class="message">{{ responseMessage }} <router-link to="profile" v-if="profileLink">Go to my profile</router-link></div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Signup',
  data () {
    return {
      title: 'Signup',
      username: '',
      email: '',
      password: '',
      repassword: '',
      responseMessage: '',
      profileLink: false
    }
  },
  methods: {
    submitUser: function() {
      let self = this;

      if (this.username && this.email && this.password && this.password === this.repassword) {
        axios.post('http://localhost:3000/api/users/register', {
          username: this.username,
          email: this.email,
          password: this.password
        }).then(function(response){
          self.responseMessage = 'New user successfully registered.';
          self.profileLink = true;
        }).catch(e => {
          this.errors.push(e);
          self.responseMessage = 'Error submitting your user information. Please try again.';
        })

        // Reset form data after submitting
        this.username = '';
        this.email = '';
        this.password = '';
      } else {
        self.responseMessage = 'Missing some vital information. Please try again.';
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100%;
  width: 100%;
}

body {
  font-family: "Coustard", sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

p {
  font-size: 12px;
}

.form-container {
  height: 100%;
  width: 100%;
}

.form-row {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.login-form-wrapper {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.login-form {
  padding: 25px;
}

.login-form input {
  font-family: "Coustard", sans-serif;
  outline: 0;
  background: #ececec;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: #444;
}

.form-submit-btn {
  width: 100%;
  padding: 15px;
  background: #2c3e50;
  border: 0;
  color: #fff;
  font-family: "Coustard", sans-serif;
  transition: 0.2s;
}

.form-submit-btn:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07), 0 2px 6px rgba(0, 0, 0, 0.11);
  background: #34495e;
  transform: scale(1.05);
  cursor: pointer;
}

.login-register-switch {
  margin: 35px auto 12px;
}

.switch {
  color: #2ecc71;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;
}

.switch:hover {
  color: #2c3e50;
}

.logo-box {
  position: relative;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.box {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 38px;
  opacity: 0.9;
}

.box1 {
  background: #8e44ad;
  opacity: 0.9;
}

.box2 {
  background: #2c3e50;
  border-radius: 39px;
  transform: rotate(45deg);
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.logo h1 {
  line-height: 100px;
}

.logo img {
  width: 100%;
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
.message {
  color: #222f3e;
  text-align: center;
  margin: 10px;
  margin-top: 0;
}
.login-register-switch {
  color: #222f3e;
  text-align: center;
}
</style>
