<template>
  <div>
    
    <!-- <form-component></form-component> -->
    <header-component ></header-component>
    <router-view></router-view>
    <test-directive></test-directive>
    <!-- <student-detail></student-detail> -->
    <!-- <all-students></all-students> -->
  </div>
</template>

<script>
// import AllStudentsVue from './Components/Day2/AllStudents.vue'
import headerComponent from './Components/Day2/header.vue'
// import FormComponent from './Components/FormComponent.vue';
// import AllStudents from './Components/Day3/AllStudents.vue'
import testDirective from './Components/Day3/testDirective.vue'
// import StudentDetails from './Components/Day3/StudentDetail.vue'



export default {
  name:"App",
  components: {
    // 'form-component': FormComponent,
    'header-component':headerComponent,
    'test-directive':testDirective,
    // 'all-students':AllStudents,
    // 'student-detail':StudentDetails
  }
}
</script>