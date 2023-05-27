import axios from "axios";
// import {created} from 'vue';

export  function getAllData() {
    
      return  axios
        .get("  http://localhost:3000/students")
        
       
    }

   export function getStudentbyId(id) {
    
        return  axios
          .get(` http://localhost:3000/students/${id}`)

    }
   