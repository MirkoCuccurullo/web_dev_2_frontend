<template>
  <section>
    <div class="text-center my-4">
<div class="form-signin ml-10">
    <div class="d-flex flex-wrap justify-content-center">
    <div >
        <img class="mb-4" src="https://picsum.photos/id/4/5000/3333" alt="" width="350" height="150">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input type="email" name="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" name="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button @click="login" class="btn my-3 btn-lg btn-primary">Sign in</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
      </div>
    </div>
</div>
</div>
  </section>
</template>

<script>
import {useUserSessionStore} from "../stores/userSession";

export default {
  setup() {
    return{
      store: useUserSessionStore()
    }
  },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.store.login(this.email, this.password)
      .then(() => {
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
      });
    },
  }
};
</script>



<style>

</style>