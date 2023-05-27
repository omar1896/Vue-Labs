<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col ">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Show</th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="student in state.students" :key="student.id">
          <th scope="row">{{ student.id }}</th>
          <td>{{ student.first_name }}</td>
          <td>{{ student.last_name }}</td>
          <!-- <td>{{ student.gender }}</td> -->
          <td>
            <router-link :to="`/students/${student.id}`" class="ms-4">see more ...</router-link>
          </td>


        </tr>

      </tbody>
    </table>

  </div>
</template>
<script >
import { reactive } from 'vue';
import { getAllData } from '../../API'
export default {
  name: "AllStudents",
  setup() {
    let state = reactive({
      students: {},
    })
    getAllData().then((res) => {
      
      state.students = res.data
    })
      .catch((err) => console.log(err));

    return { state }
  }
}
</script>

<!-- <script >

import { getAllData } from '@/API'
    const students= getAllData()
    console.log(this.students)
    
    
        
    
</script> -->



<style scoped></style>