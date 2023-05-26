<template>
   <div class="container d-flex justify-content-center p-2">
    <div class="row">
        <h2 class="text-center">Admins</h2>
    <table class="table">
  <thead>
    <tr>
        <th scope="col">Name</th>
       <th scope="col">Age</th>
       <th scope="col">Delete</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, index) in adminData" :key="index">
        <td>{{ value.name }}</td>
        <td>{{ value.age }}</td>
       <td> <button class="btn btn-outline-dark" @click="$emit('send',index)">Delete</button></td>
     </tr>
   
  </tbody>
</table>
   </div>
   </div>
</template>
  
<script>
export default {
    name: "AdminsTable",
    props:['adminData'],
    emits:['send'],
    data() {
        return {

        }
    },
    methods:{
        deleteAdmin(){
       
        }
    }
}
</script>
  
<style ></style>
  
  
  