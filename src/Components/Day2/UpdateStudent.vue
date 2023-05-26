<template>
    <div class="container-fluid">
        <form ref="myForm" @submit.prevent="updateStudent" class="row d-flex justify-content-center">
            <h3 class="text-center">Update {{first_name}}</h3>
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
                <select class="form-control" id="lname" v-model="formValues.gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                </select>
            </div>
            <div class=" col-12 d-flex justify-content-center p-1">
                <input class="btn btn-success" type="submit" value="Update">
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "updatStudents",
    data() {
        return {
            id:"",
           
            formValues: {
                first_name: "",
                last_name: "",
                gender: ""
            }
        }
    },
    created() {
        this.getuserById()
    },
    methods: {
        updateStudent() {
            axios.put('http://localhost:3000/students'+this.$route.params.id,
                {first_name:this.formValues.first_name,
                last_name:this.formValues.last_name
        }
            )
                .then(function (response) {
                    console.log(response);
                    // Do something with the response
                })
                .catch(function (error) {
                    console.log(error);
                    // Handle the error
                });
            this.$refs.myForm.reset();
        },
        getuserById() {
            this.id = this.$route.params.id;
            console.log(this.id)
            axios.get(` http://localhost:3000/students/${this.id}`)
                .then((res) => {
                    console.log(res.data)
                    this.id = res.data.id
               
                })
                .catch((err) => console.log(err))
        },
        back() {
            this.$router.push('/users')
        }
    }
}
</script>

<style lang="scss" scoped></style>