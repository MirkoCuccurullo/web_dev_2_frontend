<template>
<div class="container flex-wrap justify-content-center">
    <h1>edit appointment</h1>

    <div class="wrapper">


        <div class="col-6">
            <div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label for="lawyer">Lawyer Area:</label><br>
                    <div id="app">
                    <select v-model="law_area" class="form-select my-3">
                        <option v-for="item in areas" :value="item.type_id">{{item.description}}</option>
                    </select>
                </div>
                </div>
                <div aria-readonly="true" class="form-group">
                    <label class='form-label' for="lawyer"> Lawyer:</label><br>
                    <div id="app">
                    <select v-model="lawyer" class="form-select my-3">
                        <option v-for="item in lawyers" :value="item.employee_id">{{item.firstname}}</option>
                    </select>
                </div>
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input class="form-control" required v-model="date">
                </div>
                <div class="form-group">
                    <label for="time">Time</label>
                    <input class="form-control" v-model="time_from" >
                    <span>TO</span>
                    <input  class="form-control" v-model="time_to" >
                </div> <br>
                <div class="form-group">
                    <button class="btn btn-primary" @click="editAppointment">Edit</button>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import axios from '../../axios-auth';
import { useUserSessionStore } from "../../stores/userSession";


export default {
    data() {
        return {
            id: "",
            name: "",
            law_area: "",
            lawyer: "",
            date: "",
            time_from: "",
            time_to: "",
            areas: [],
            lawyers: [],
        }
    },
    setup () {
        return{
            store: useUserSessionStore()
        }
    },
    mounted() {
        axios.get("appointments/" + this.$route.params.id).then((response) => {
            this.id = response.data.id;
            this.name = response.data.client_name;
            this.law_area = response.data.law_area;
            this.lawyer = response.data.lawyer;
            this.date = response.data.date;
            this.time_from = response.data.time_from;
            this.time_to = response.data.time_to;
        }).catch((error) => {
            console.log(error);
        });
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
    methods:{
        editAppointment(){
            const jwt = localStorage.getItem("jwt");
            axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
            axios.put('appointments/' + this.id, {
                client_name: this.name,
                date: this.date,
                lawyer_id: this.lawyer,
                time_from: this.time_from,
                time_to: this.time_to,
            }).then((response) => {
                console.log(response);
                this.$router.push("/manage");
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>