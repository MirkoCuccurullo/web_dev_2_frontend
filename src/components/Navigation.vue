<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <a class="navbar-brand" href="/">Brunswick</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>      
        <li class="nav-item">
          <router-link to="/login"  class="nav-link" active-class="active"
            >Login</router-link
          >
        </li>
        <li v-if="this.store.isAuth" class="nav-item">
          <router-link to="/add/user"  class="nav-link" active-class="active"
            >Register User</router-link
          >
        </li>
        <li v-if="this.store.isAuth" class="nav-item">
          <router-link to="/add/lawyer" class="nav-link" active-class="active"
            >Add Lawyer</router-link
          >
        </li>
        <li v-if="this.store.isAuth" class="nav-item">
          <router-link to="/manage" class="nav-link" active-class="active"
            >Manage Appointments</router-link
          >
        </li>
      </ul>

<button class="form-control btn btn-primary m-2" @click="this.$router.push('/create/appointment')">Book Appointment </button>
<button class="form-control btn btn-primary m-2" @click="logout" v-if="this.store.isAuth">Logout </button>

    </div>
  </nav>
</template>

<script>
import { useUserSessionStore } from "../stores/userSession";
export default {

  setup() {
    return {
      store: useUserSessionStore(),
    };
  },
  methods: {
    logout() {
      this.store.logout();
    },
  },
  name: "Navigation",
};
</script>

<style scoped>
button{
  margin: 0 10px;
  width: 12%;
}
</style>