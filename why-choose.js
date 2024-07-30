gsap.to(".why-choose-us .feature-box",{
    transform:"translateX(-300%)",
    scrollTrigger:{
        trigger:"#choose",
        scroller:"body",
        // markers:"true",
        start:"-20% 0",
        end:"bottom -100%",
        scrub:2,
        pin:true
    }
})