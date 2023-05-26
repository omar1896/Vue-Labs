import { createApp } from 'vue'
import App from './App.vue'
import allStudents from './Components/Day2/AllStudents.vue'
import studentsDetails from './Components/Day2/StudentDetails.vue'
import errorComponent from './Components/Day2/error.vue'
import addStudent from './Components/Day2/AddStudents.vue'
import updateStudents from './Components/Day2/UpdateStudent.vue'




import { createWebHistory,createRouter } from 'vue-router';


const routes = [
    {
        path:'/',component:allStudents,alias:'/students'
      
    },
    {
        path:'/students/:id',component:studentsDetails
    },
    {
        path:'/:NotFound(.*)*',component:errorComponent,meta:{hideNavbar:true}
    },
    {
        path:'/create',component:addStudent
    },
    {
        path:'/update/:id',component:updateStudents
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

