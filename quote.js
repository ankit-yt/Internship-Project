let fir_label = document.querySelector(".fir_label");
let sec_label = document.querySelector(".sec_label");
let fir_input = document.getElementById("fir_input");
let sec_input = document.getElementById("sec_input");
let quote_line = document.querySelector(".quote_line p");
let input = document.querySelector(".input");
let next_butt = document.querySelector(".btn button");
let btn_container = document.querySelector(".btn");

let step = 0;

next_butt.addEventListener("click", function () {
    console.log("Next button clicked. Step:", step);
    if ((step < 4 && fir_input.value.trim() !== "" && sec_input.value.trim() !== "") || step >= 4) {

        next_butt.classList.add("active");
        const img = document.querySelector(".active img");
        img.src = "quote png/right-arrow (1).png";
        setTimeout(() => {
            next_butt.classList.remove("active");
            document.querySelector(".btn button img").src = "quote png/next (1).png";
        }, 500);

        // Animate current content out
        gsap.to([fir_label, sec_label, fir_input, sec_input, quote_line], {
            x: 100, // Translate out to the right
            opacity: 0,
            duration: 0.5,
            onComplete: function () {
                fir_input.value = "";
                sec_input.value = "";

                step++;
                console.log("Current Step after increment:", step);

                if (step === 1) {
                    fir_label.textContent = "Name";
                    fir_input.placeholder = "Enter your name";
                    sec_label.textContent = "Email Address";
                    sec_input.placeholder = "Enter your email address";
                    quote_line.textContent = "Just a few more questions!";
                } else if (step === 2) {
                    const labels = document.querySelectorAll(".reveal label");
                    labels.forEach(label => label.style.width = "300px");
                    fir_label.textContent = "Phone Number";
                    fir_input.outerHTML = '<input type="email" required id="fir_input" placeholder="Enter your phone number">';
                    sec_label.textContent = "Preferred Moving Date";
                    sec_input.outerHTML = '<input type="date" id="sec_input" placeholder="Select preferred moving date">';
                    quote_line.textContent = "Almost done! Just a few more details.";

                    // Update the references to the new input elements
                    fir_input = document.getElementById("fir_input");
                    sec_input = document.getElementById("sec_input");
                } else if (step === 3) {
                    fir_label.textContent = "Type of Move";
                    fir_input.outerHTML = `
                        <select id="fir_input">
                            <option value="" disabled selected>Select type of move</option>
                            <option value="local">Local</option>
                            <option value="interstate">Interstate</option>
                            <option value="international">International</option>
                        </select>`;
                    sec_label.textContent = "Size of the Move";
                    sec_input.outerHTML = `
                        <select id="sec_input">
                            <option value="" disabled selected>Select size of the move</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>`;
                    quote_line.textContent = "What type of move are you planning?";

                    // Update the references to the new select elements
                    fir_input = document.getElementById("fir_input");
                    sec_input = document.getElementById("sec_input");
                } else if (step === 4) {
                    fir_label.textContent = "Special Instructions";
                    sec_label.textContent = "Additional Services Needed";
                    quote_line.textContent = "Any special instructions or additional services needed?";


                    const labels = document.querySelectorAll(".reveal label");
                    labels.forEach(label => label.style.width = "400px");

                    fir_input.outerHTML = '<textarea id="fir_input" placeholder="Enter any special instructions"></textarea>';
                    sec_input.outerHTML = '<textarea id="sec_input" placeholder="Enter additional services needed"></textarea>';

                    
                    fir_input = document.getElementById("fir_input");
                    sec_input = document.getElementById("sec_input");

                } else if (step === 5) {
                    
                    alert("Thank you! We will contact you shortly.");

                    // Reset the form fields and labels
                    step = 0;
                    fir_label.textContent = "Moving From";
                    sec_label.textContent = "Moving To";

                    fir_input.outerHTML = '<input type="text" id="fir_input" placeholder="Enter origin">';
                    sec_input.outerHTML = '<input type="text" id="sec_input" placeholder="Enter destination">';

                    // Update the references to the new input elements
                    fir_input = document.getElementById("fir_input");
                    sec_input = document.getElementById("sec_input");

                    const labels = document.querySelectorAll(".reveal label");
                    labels.forEach(label => label.style.width = "auto");
                }

                // Animate new content in
                gsap.fromTo([fir_label, sec_label, fir_input, sec_input, quote_line], {
                    x: -100, // Start from the left
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5
                });
            }
        });
    } else {
        alert("Please fill in both fields.");
    }
});

gsap.to(".cover3",{
    rotateY: 360,
    y: "-40%",
    scale: 2,
    scrollTrigger:{
        trigger:".quickquote", 
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"bottom -20%",
        scrub:3,
        pin:true
    }
})
