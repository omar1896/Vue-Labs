<template>
    <div class="container d-flex justify-content-center p-2">
     <div class="row">
        <h1></h1>
        <h2 class="text-center">Users</h2>
     <table class="table">
   <thead>
     <tr>
       <!-- <th scope="col">#</th> -->
       <th scope="col">Name</th>
       <th scope="col">Age</th>
       <th scope="col">Delete</th>
     </tr>
   </thead>
   <tbody>
    <tr v-for="(value, index) in userData" :key="index">
        <td>{{ value.name }}</td>
        <td>{{ value.age }}</td>
       <td> <button @click="$emit('send',index)" class="btn btn-outline-dark">Delete</button></td>
     </tr>
   
   </tbody>
 </table>
    </div>
    </div>
    <div>
    
  </div>
 </template>
   
 <script>
 export default {
     name: "UsersTable",
     props:['userData'],
     emits:['send'],
     data() {
         return {
             allUsers:[]
 
            }
        },
        computed:{
            // appendData(){
            //     if(this.allUsers.length)
            //     // this.allUsers.push(this.userData)
            //     return console.log("compute",JSON.stringify(this.allUsers))
            // }
            
        },
        watch:{
            // appendData(){
            //     this.allUsers.appendData(this.userData)
            //     return console.log("compute",JSON.stringify(this.allUsers))
            // }
        }
    }
    // console.log(this.userData)
    </script>
   
 <style ></style>
   
   
   