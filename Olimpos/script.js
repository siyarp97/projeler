let tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger);


//Giriş Sayfası
tl.from("header", 
{
    y: -200,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
})
tl.from("#p1",
{
    y:0,
    opacity: 0,
    duration: 1.5,
    ease: "fade-in",
})

// })
// 2.Sayfa

tl.from(".vis > img", {
    y: -50,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".vis > img",
        
        start: "top 40%",
        end: "60% 60%",
        scrub: true,
        pin: true
    }
})
tl.from(".content", {
    x: -(window.innerWidth),
    opacity: 0,
    duration: 1.5,

    scrollTrigger: {
        trigger: ".content",
        
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
        duration: "<"
    }
})





