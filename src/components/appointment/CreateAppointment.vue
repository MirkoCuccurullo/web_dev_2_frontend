<template>
<div class="container flex-wrap justify-content-center">
    <h1>ADD EVENT TO GOOGLE CALENDAR</h1>

    <div class="wrapper">

        <div class="col-6">
<div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" class="form-control" name="client_name" v-model="name" required="">
                </div>
                <div class="form-group">
                    <label for="lawyer">Lawyer Area:</label><br>
                <div id="app">
                    <select v-model="law_area" class="form-select my-3">
                        <option v-for="item in areas" :value="item.type_id">{{item.description}}</option>
                    </select>
                </div>
                </div>
                <div class="form-group">
                    <label class='form-label' for="lawyer"> Lawyer:</label><br>
                    <div id="app">
                    <select v-model="lawyer" class="form-select my-3">
                        <option v-for="item in lawyers" :value="item.employee_id">{{item.firstname}}</option>
                    </select>
                </div>
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input  type="date" v-model="date" class="form-control">
                </div>
                <div class="form-group">
                    <label for="time">Time</label>
                    <input type="time" id="time_from" v-model="time_from" class="form-control"  >
                    <span>TO</span>
                    <input type="time" id="time_to" v-model="time_to"  class="form-control" >
                </div> <br>
                <div class="form-group">
                    <button type="submit" @click="takeAppointment" class="btn btn-primary">Add Appointment</button>
                </div> <br>
                <label v-if="this.created"> Appointment has been booked! </label>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import axios from "../../axios-auth";
export default {
    data() {
        return {
            name: "",
            law_area: "",
            lawyer: "",
            date: "",
            time_from: "",
            time_to: "",
            areas: [],
            lawyers: [],
            created: false
        };
    },
    methods: {
        takeAppointment() {
            axios.post("appointments", {
                client_name: this.name,
                date: this.date,
                lawyer_id: this.lawyer,
                time_from: this.time_from,
                time_to: this.time_to,
            }).then((response) => {
                console.log(response);
                this.created = true;
            }).catch((error) => {
                console.log(error);    
            });
        },
    },
    mounted() {
        axios.get("lawareas").then((response) => {
            this.areas = response.data;
        }).catch((error) => {
            console.log(error);
        });
        axios.get("lawyers").then((response) => {
            this.lawyers = response.data;
        }).catch((error) => {
            console.log(error);
        });
    },

}
</script>

<style>

</style>