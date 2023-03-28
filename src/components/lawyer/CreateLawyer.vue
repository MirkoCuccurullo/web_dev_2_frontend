<template>
<header class="text-center"><h1> Register Lawyer </h1></header>

<div class="container d-flex flex-wrap justify-content-center">

    <div class="mb-3" >
        <label class='form-label' for="name"> Name:</label><br>
        <input class="form-control-5" type="text" v-model="name" id="name" name="name"><br>
        <label class="form-label" for="email"> Email:</label><br>
        <input class="form-control-5" type="text" id="email" v-model="email" name="email"><br>
        <label class="form-label" for="law area"> Law area:</label><br>
        <select name="law_area" class=" form-select my-3">
        <option value=""></option>
        </select><br>
        <button class="btn btn-primary" @click="register" > Register</button>
    </div>

</div>
</template>

<script>
import { useUserSessionStore } from "../../stores/userSession";
import axios from "../../axios-auth";
export default {
    name: "CreateLawyer",
    setup () {
        return {
            store: useUserSessionStore(),
        };
    },
    data() {
        return {
            name: "",
            email: "",
            law_area: "",
        };
    },
    methods: {
        register() {
            axios.post("lawyers", {
                name: this.name,
                email: this.email,
                law_area: this.law_area,
            });
        },
    },
}
</script>

<style >

</style>