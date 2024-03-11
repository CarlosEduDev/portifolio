import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const chkbutton = document.getElementById("check")

chkbutton.addEventListener("change", () =>{
    document.body.classList.toggle('dark')
})