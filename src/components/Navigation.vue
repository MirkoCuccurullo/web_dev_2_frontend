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
          <router-link to="/login" class="nav-link" active-class="active"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/manage" class="nav-link" active-class="active"
            >Manage</router-link
          >
        </li>
      </ul>
      <form action="/addAppointment" method="post">

<input class="form-control btn btn-primary m-2" type="submit" value="Book Appointment"/>

</form>
    </div>
  </nav>
</template>

<script>
import { useUserSessionStore } from "../stores/userSession";
export default {
  default() {
    return {
      store: useUserSessionStore(),
    };
  },
  name: "Navigation",
};
</script>

<style>
</style>