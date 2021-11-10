import { generateAdvice } from "./api";
import { createAdvice } from "./ui.js"

 
(()=>{

    const displayAdvice= () => {
        
        generateAdvice()
        .then((response) => {
                createAdvice(response.data.slip.advice)
        })
        .catch((error) =>{
            console.log(error + 'error'); 
        })
    
    }
    window.addEventListener('load',()=>{
        document.getElementById("adviceBtn")
        .addEventListener("click",displayAdvice)
    })
})();