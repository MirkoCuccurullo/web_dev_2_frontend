<template>
<div class="container">
    <header class="header my-3 text-center"> <h1> Appointment Management </h1></header>
    <div id="appointments" class="row">
  <div v-for="appointment in appointments" class="card col-md-4 col-sm-8 col-xl-3 text-bg-light m-5">
    <div class="card-body">
      <h2>{{appointment.client_name}}</h2>
      <p class="card-text">Date: {{appointment.date}}</p>
      <p class="card-text">Time from: {{appointment.time_from}} to {{appointment.time_to}}</p>
      <p class="card-text">Lawyer: {{appointment.lawyer_name}}</p>
    </div>
    <div class="card-footer text-bg-light">
        <div>
        <button @click="deleteItem(appointment.id)" class="btn btn-danger m-2" >Delete</button>
        <button class="btn btn-primary m-2" @click="editPage(appointment.id)">Edit</button>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import axios from "../../axios-auth";
import { useUserSessionStore } from "../../stores/userSession";

export default {
    data() {
        return {
            id: 0,
            client_name: "",
            law_area: "",
            lawyer: "",
            date: "",
            time_from: "",
            time_to: "",
            appointments: [],
        };
    },
    setup () {
        const userSessionStore = useUserSessionStore();
        return {
            userSessionStore
        }
        
    },
    mounted() {
        const jwt = localStorage.getItem("jwt");
        axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
        axios.get("appointments").then((response) => {
            console.log(response.data);
            this.appointments = response.data;
        });
    },
    methods: {
        deleteItem(id) {
            const jwt = localStorage.getItem("jwt");
            axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
            axios.delete("appointments/" + id).then((response) => {
                console.log(response);
                this.appointments = this.appointments.filter((appointment) => {
                    return appointment.id != id;
                });
            });
        },
        editPage(id) {
            this.$router.push("/editAppointment/" + id);
        },
    },
}
</script>

<style>

</style>