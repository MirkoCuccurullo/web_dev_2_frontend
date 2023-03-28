<template>
<header class="text-center"><h1> Register Lawyer </h1></header>

<div class="container d-flex flex-wrap justify-content-center">

    <div class="mb-3" >
        <label class='form-label' required for="name"> Name:</label><br>
        <input class="form-control-5" type="text" v-model="name" id="name" name="name"><br>
        <label class="form-label" required for="email"> Email:</label><br>
        <input class="form-control-5" type="text" id="email" v-model="email" name="email"><br>
        <label class="form-label" required for="law area"> Law area:</label><br>


    <div id="app">
        <select v-model="law_area">
         <option v-for="item in areas" :value="item.type_id">{{item.description}}</option>
        </select>
    </div>
        <button class="btn btn-primary" @click="register"> Register</button>
    </div>

</div>
</template>

<script>
import { useUserSessionStore } from "../../stores/userSession";
import axios from "../../axios-auth";

export default {
    name: "CreateLawyer",

    setup () {
        const store = useUserSessionStore()
       
        return {
            store
        };

    },
    data() {
        return {
            name: "",
            email: "",
            law_area: "",
            areas: [],
        };
    },
    methods: {
        register() {
            const jwt = localStorage.getItem("jwt");
            axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
            axios.post("lawyers", {
                firstname: this.name,
                email: this.email,
                type: this.law_area,
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
                
            });
        }
    },
    mounted() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.store.getJwt;
        axios.get("lawareas")
            .then((response) => {
                this.areas = response.data;
            })

    },
}
</script>

<style >

</style>