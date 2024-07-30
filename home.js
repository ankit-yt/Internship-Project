var images = document.querySelectorAll(".slide");
var currentIndex = 0;

function cycleImages() {
    images.forEach((element, index) => {
        if (index === currentIndex) {
            element.style.zIndex = '1';
            element.classList.add("zoom")
            // element.style.filter = `blur(0px)`
        } else {
            element.style.zIndex = '0';
            element.classList.remove("zoom");
        }
        
    });
    currentIndex = (currentIndex + 1) % images.length;
    
}

setInterval(cycleImages, 8000);

// document.addEventListener("DOMContentLoaded", function(){
//     setTimeout(() => {
//         document.querySelector(".loading img").style.display = "none"
//     }, 3000);

// });


