function openNav() {
        document.getElementById("navBar").classList.toggle("start-0");
        document.body.classList.toggle("overflow-hidden");
        document.querySelector(".menu").classList.toggle("cross")
    }
    
    function removeoverflow(){
        document.getElementById("navBar").classList.toggle("start-0");
        document.body.classList.remove("overflow-hidden");
        document.querySelector(".menu").classList.toggle("cross") 
        document.body.classList.remove("overflow-hidden") 
    }