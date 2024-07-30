gsap.to(".page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:"true",
        start:"top 0",
        end:"bottom -100%",
        scrub:2,
        pin:true
    }
})