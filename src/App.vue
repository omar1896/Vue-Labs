<template>
  <div>
    <!-- <form-component></form-component> -->
 <header-component v-if="!$route.meta.hideNavbar"></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from './Components/Day2/header.vue'
// import FormComponent from './Components/FormComponent.vue';

//s
export default {
  name:"App",
  components: {
    // 'form-component': FormComponent,
    'header-component':headerComponent
  }
}
</script>