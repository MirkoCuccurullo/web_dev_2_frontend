
<template>
<header class="text-center"><h1> Register User </h1></header>
    <div class="container d-flex flex-wrap justify-content-center">
        <div>
            <label class='form-label' for="name"> Name:</label><br>
            <input class="form-control-5" type="text" v-model="name" required><br>
            <label class="form-label" for="email"> Email:</label><br>
            <input class="form-control-5" type="text" v-model="email" required><br>
            <label class="form-label" for="password">Password:</label><br>
            <input class="form-control-5" type="password" v-model="password" required> <br><br>
            <button class="btn btn-primary" @click="register" >Register</button>

        </div>
        <br>
                <label v-if="this.created"> User has been registered! </label>

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
            firstname: "",
            email: "",
            password: "",
            created: false,
        };
    },
    methods: {
        register() { 
            const jwt = localStorage.getItem("jwt"); 
            axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
            axios.post("/users", {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            .then((response) => {
                console.log(response);
                this.created = true;
            })
            .catch((error) => {
                console.log(error);
            });

            
        },
    },
  name: "CreateUser",
};
</script>

<style >

</style>