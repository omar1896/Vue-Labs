<template>
    <div class="container-fluid">
<form  ref="myForm" @submit.prevent="addStudent" class="row d-flex justify-content-center">
    <h3 class="text-center">Fill Student Data</h3>
    <div class="col-5">
        <label for="fname ">first_name</label>
        <input type="text" class="form-control" id="fname" v-model="formValues.first_name">
    </div>
    <div class="col-5">
        <label for="lname">last_name</label>
        <input type="text" class="form-control" id="lname" v-model="formValues.last_name">
    </div>
    <div class="col-3">
        <label for="lname">Gender</label>
        <select  class="form-control" id="lname" v-model="formValues.gender">
            <option value="male">Male</option>
            <option value="female">Female</option>

        </select>
    </div>
    <div class=" col-12 d-flex justify-content-center p-1">
        <input class="btn btn-success" type="submit" value="ADD">
    </div>

</form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:"addStudent",
        data(){
            return{
                formValues:{
                 first_name:"",
                 last_name:"",
                 gender:""
            }}
        },
        methods:{
            addStudent(){
            axios.post('http://localhost:3000/students', 
           this.formValues
        )
    .then(function(response) {
      console.log(response);
      // Do something with the response
    })
    .catch(function(error) {
      console.log(error);
      // Handle the error
    });
    this.$refs.myForm.reset();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>