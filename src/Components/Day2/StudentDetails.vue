<template>
    
        <div class="card" >
  <div class="card-body">
    <h3 class="card-title text-center alert alert-dark"> Student ID:{{ id }}</h3>
    <h5 class="card-title text-center"> First Name:{{ first_name }}</h5>
    <h5 class="card-title text-center">Last Name:{{ last_name }}</h5>
    <h5 class="card-title text-center">Gender:{{ gender }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  class="btn btn-primary" @click="back">Go to Users</button>
  </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:"studentDetails",
    
    data(){
    return{
        id:'',
        first_name:'',
        last_name:'',
        gender:''
    }
  },
  created(){
    this.getuserById()
  },
  methods:{
    getuserById(){
      this.id = this.$route.params.id;
      console.log(this.id)
      axios.get(` http://localhost:3000/students/${this.id}`)
      .then((res)=>{
        console.log(res.data)
        this.id = res.data.id
        this.first_name = res.data.first_name
        this.last_name = res.data.last_name
        this.gender = res.data.gender
      })
      .catch((err)=>console.log(err))
    },
    back(){
        this.$router.push('/users')
    }
  }
};
</script>

<style lang="scss" scoped>

</style>