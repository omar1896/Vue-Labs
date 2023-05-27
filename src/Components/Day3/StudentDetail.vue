<template>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col ">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
     

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ state.student.id }}</th>
      <td>{{ state.student.first_name }}</td>
      <td>{{state.student.last_name}}</td>
      <!-- <td>{{ student.gender }}</td> -->
      
    </tr>
   
  </tbody>
</table>

    </div>
</template>
<script >
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
// import axios from 'axios';
  import {  getStudentbyId } from '../../API'
    export default {
        name:"StudentDetails",
       
        setup(){
          const route = useRoute();
            let state=reactive({student:{},
            id: route.params.id
          })
    getStudentbyId(state.id).then((res) => {
          console.log(res.data);
            state.student=  res.data
        })
        .catch((err) => console.log(err));
    
    return {state}
        }
    }
</script>

<!-- <script >

import { getAllData } from '@/API'
    const students= getAllData()
    console.log(this.students)
    
    
        
    
</script> -->



<style scoped>

</style>