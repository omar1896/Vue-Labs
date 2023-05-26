<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark sticky-top">
  <div class="container-fluid">
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center gap-1">
        <li class="nav-item">
          <router-link to="/students" class="btn btn-outline-light">All Students</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/create" class="btn btn-outline-light">Add Student</router-link>
        </li>

      </ul>
    
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name:"headerComponent"
    }
</script>

<style scoped>

</style>