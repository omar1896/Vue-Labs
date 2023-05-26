
<template>
  <div class="container  ">
    <div class="row">

      <div class="container">
        <div class="row gap-2 d-flex justify-content-center p-2">
          <button @click="flag=1" class="btn btn-outline-dark col-2 ">Form</button>
          <button  @click="flag=2" class="btn btn-outline-dark col-2">Users</button>
          <button  @click="flag=3" class="btn btn-outline-dark col-2">Admins</button>
        </div>
      </div>
      <div v-if="flag == 1" class="container d-flex justify-content-center p-2">
        <div class=" row d-flex justify-content-center border rounded-2 p-3 ">
          <form ref="myForm" class=" p-2" @submit.prevent="handelForm">

            <h4 class="text-center">Form</h4>

            <div class="col-8" >
              <label for="name">Name </label>
              <input  type="text" id="name form-control" v-model="formValues.name" />
            </div>

            <div class="col-8">
              <label for="age">Age</label>
              <input  type="text" id="age" v-model.number="formValues.age" />
            </div>

            <div class=" col-8 p-2 m-2">
              <label for="role">Role</label>
              <select class="form-conrol bg-dark text-light p-1 m-1" type="text" id="role" v-model="formValues.role">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <div class="col-8 d-flex justify-content-center" > 
              <input  type="submit" class="btn btn-outline-dark">
            </div>
          </form>
        </div>
      </div>
      <users-table  :userData="userData" v-else-if="flag == 2" @send="handleEventUser"></users-table>
      <admins-table :adminData="adminData" v-else-if="flag == 3" @send="handleEventAdmin"></admins-table>
    </div>
  </div>
</template>

<script>
import AdminsTable from './Admins.vue'
import UsersTable from './Users.vue'

export default {
  name: "FormComponent",
  components: {
    'admins-table': AdminsTable,
    'users-table': UsersTable,

  },

  data() {
    return {
      flag: 1,
      formValues:{
        name:"",
        age:"",
        role:"",
      },
      adminData:[],
      userData:[],

    }
   
  },
  methods:{
    handelForm() {
  const data = Object.assign({}, this.formValues); // or const data = {...this.formValues};
  if (this.formValues.role == "Admin") {
    this.adminData.push(data);
  } else {
    this.userData.push(data);
    console.log(this.userData)
  }
  this.$refs.myForm.reset();
},
handleEventUser(index){
this.userData.splice(index,1)
console.log(this.userData)
},
handleEventAdmin(index){
this.adminData.splice(index,1)
console.log(this.adminData)
}
   

},
watch:{
  userData(newData){
    console.log(newData)
  }
}
}
</script>

<style ></style>


