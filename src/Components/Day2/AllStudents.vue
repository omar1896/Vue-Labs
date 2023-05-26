<template>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col ">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Show</th>
      <th scope="col">update</th>

      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="student in students" :key="student.id">
      <th scope="row">{{ student.id }}</th>
      <td>{{ student.first_name }}</td>
      <td>{{student.last_name}}</td>
      <!-- <td>{{ student.gender }}</td> -->
       <td> 
        <router-link :to="`/students/${student.id}`" class="ms-4">see more ...</router-link>
    </td>
    <td><router-link :to="`/update/${student.id}`" class="ms-4">Update</router-link></td>
      <td>
        <button class="btn btn-sm btn-danger" @click="deleteStudent(student.id)">delete</button>
      </td>
    </tr>
   
  </tbody>
</table>

    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allStudents",
  created() {
    this.getallstudents();
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    getallstudents() {
      axios
        .get("  http://localhost:3000/students")
        .then((res) => {
          console.log(res.data);
          this.students = res.data
        })
        .catch((err) => console.log(err));
    },
    deleteStudent(id){
        axios.delete(`  http://localhost:3000/students/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallstudents()
        })
        .catch((err)=>console.log(err))
    }

  },
};
</script>

<style scoped>

</style>