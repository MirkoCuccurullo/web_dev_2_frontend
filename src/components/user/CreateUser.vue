
<template>
<header class="text-center"><h1> Register User </h1></header>
    <div class="container d-flex flex-wrap justify-content-center">
        <div>
            <label class='form-label' for="name"> Name:</label><br>
            <input class="form-control-5" type="text" v-model="name" id="name" name="name"><br>
            <label class="form-label" for="email"> Email:</label><br>
            <input class="form-control-5" type="text" v-model="email" id="email" name="email"><br>
            <label class="form-label" for="password">Password:</label><br>
            <input class="form-control-5" type="password" v-model="password" name="password" id="password"> <br><br>
            <button class="btn btn-primary" @click="register" >Register</button>

        </div>

    </div>
</template>

<script>
import { useUserSessionStore } from "../../stores/userSession";
import axios from "../../axios-auth";

export default {
    setup() {
        return {
            store: useUserSessionStore(),
        };
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {

        register() {  
            axios.post("users", {
                name: this.name,
                email: this.email,
                password: this.password,
            });
        },
    },
  name: "CreateUser",
};
</script>

<style >

</style>