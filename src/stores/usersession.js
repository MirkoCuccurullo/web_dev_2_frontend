import { defineStore } from 'pinia'
import axios from '../axios-auth'

export const useUserSessionStore = defineStore('userSession', {
  state: () => ({
    jwt: '',
    email: ''
  }),
  getters: {
    isAuth: (state) => {
        state.jwt !== ''
    },
    getJwt(state){
        return state.jwt
    },
    loggedIn(state){
        return state.jwt !== ''
    }
  },
  actions: {
    localLogin() {
        if (localStorage.getItem('jwt') && localStorage.getItem('email')) {

        //get data from local storage
        this.jwt = localStorage["jwt"];
        this.username = localStorage.getItem("email");
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.jwt;
        console.log("Logged in automatically from local storage");
        
        }
    },
    login(email, password) {
        return new Promise((resolve, reject) => {
        axios.post("users/login", {
            email: email,
            password: password,
          })
          .then((res) => {
            this.jwt = res.data.jwt;
            this.email = res.data.username;

            //access local storage to store the values tw different implementations
            localStorage["jwt"] = this.jwt;
            localStorage.setItem("email", this.email);

            console.log(this.jwt);
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.jwt;
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject(err.response.data.errorMessage);
          })
        })
    },
    autoLogin() {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      if (token && username) {
      axios.defaults.headers.common["Authorization"] = 
      "Bearer " + token;
      this.token = token;
      this.username = username;
      }
    },      
  },
})