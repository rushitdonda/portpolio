var tl= gsap.timeline({
    repeat: -1
});
tl
.to(".box h1", {
    ease: Expo.easeInOut,
    stagger: 2,
    top:0
 },'a')
  .to(".box h1", {
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
    delay: 2
  },'a')
  gsap.to("#page2", {
    opacity:1,
    duration: .5,
 scrollTrigger: {
     trigger: "#page2",
     scroller: "body",
     start: "top 60%",
     end: "top 60%",
     scrub: 10
 }
})
gsap.to(".nav", {
    backgroundColor: "#FFF",
    duration: 0.5,
    color:"#000",
    height: "150px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -10%",
        scrub: 1
    }
})
gsap.to(".nav ul li a", {
    duration: 0.5,
    color:"#000",
    scrollTrigger: {
        trigger: ".nav ul li a",
        scroller: "body",
        start: "top -10%",
        end: "top -10%",
        scrub: 1
    }
})
gsap.to("#page3", {
    opacity:1,
    duration: .5,
 scrollTrigger: {
     trigger: "#page3",
     scroller: "body",
     start: "top 55%",
     end: "top 55%",
     scrub: 10
 }
})
gsap.to("#page4", {
    opacity:1,
    duration: .5,
 scrollTrigger: {
     trigger: "#page4",
     scroller: "body",
     start: "top 65%",
     end: "top 65%",
     scrub: 5
 }
})
gsap.to("#page5", {
    opacity:1,
    duration: .5,
 scrollTrigger: {
     trigger: "#page5",
     scroller: "body",
     start: "top 60%",
     end: "top 60%",
     scrub: 5
 }
})
gsap.to(".ser", {
  x:"1300",
 scrollTrigger: {
     trigger: ".ser",
     scroller: "body",
     start: "top 60%",
     end: "top 60%",
     scrub: 5
 }
})
gsap.to("#page6", {
    opacity:1,
    duration: .2,
 scrollTrigger: {
     trigger: "#page6",
     scroller: "body",
     start: "top 60%",
     end: "top 60%",
     scrub: 1
 }
})
gsap.to("#page7", {
    opacity:1,
    duration: .5,
 scrollTrigger: {
     trigger: "#page7",
     scroller: "body",
     start: "top 50%",
     end: "top 50%",
     scrub: 5
 }
})
gsap.to("#box1", {
    opacity:1,
    duration: .5,
    x:700,
 scrollTrigger: {
     trigger: "#box1",
     scroller: "body",
     start: "top 55%",
     end: "top 55%",
     scrub: 5
 }
})
gsap.to("#box2", {
    opacity:1,
    duration: .5,
    x:-700,
 scrollTrigger: {
     trigger: "#box2",
     scroller: "body",
     start: "top 55%",
     end: "top 55%",
     scrub: 5
 }
})
gsap.to(".boxx1", {
    opacity:1,
    duration: .5,
    x:500,
 scrollTrigger: {
     trigger: ".boxx1",
     scroller: "body",
     start: "top 60%",
     end: "top 60%",
     scrub: 10
 }
})
gsap.to(".boxx2", {
    opacity:1,
    duration: .5,
    x:-500,
 scrollTrigger: {
     trigger: ".boxx2",
     scroller: "body",
     start: "top 60%",
     end: "top 60%",
     scrub: 10
 }
})


