let links = document.querySelectorAll(".list")

links.forEach(element => {
    element.addEventListener("click", function(){
        links.forEach(el => el.classList.remove("active"));

        element.classList.add("active");
    })
    
});


