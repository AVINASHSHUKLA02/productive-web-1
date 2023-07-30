document.querySelector(".in a")
.addEventListener('click',function(){
   var a= document.querySelector(".cart")
    a.style.display="initial";
})

gsap.to(".loader", {
   
    display:"none",
    duration: 6,
   
  }),
  gsap.to(".glitch", {
   
    display:"none",
    duration: 6,
  
  })

  gsap.to("nav", {
    y:-300,
    duration: 3,
    backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -15%",
      // markers:true,
      end: "top -30%",
      scrub: 1
    }
  })


  gsap.to(".center h1", {
    y:-50,
    opacity:1,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -1%",
      // markers:true,
      end: "top -10%",
      scrub: 1
    }
  })
  
  gsap.to(".center p", {
    y:-50,
    opacity:1,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -1%",
      // markers:true,
      end: "top -10%",
      scrub: 1
    }
  })


  gsap.to(".left .icon", {
    x:-500,
    // opacity:1,
    duration: 3,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -10%",
      // markers:true,
      end: "top -35%",
      scrub: 3
    }
  })
  
  gsap.from("#page4 .left1", {
    x:-1200,
    scale:1.2,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -130%",
      // markers:true,
      end: "top -200%",
      scrub: 3
    }
  })

  gsap.from("#page4 .left1 h1", {
    y:50,
    opacity:0,
    // scale:1.2,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -200%",
      // markers:true,
      end: "top -230%",
      scrub: 3
    }
  })

  gsap.from(".circle img ", {
    y:-50,
    opacity:0,
    // scale:1.2,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -230%",
      // markers:true,
      end: "top -240%",
      scrub: 3
    }
  })


  gsap.from(".cardd1 img", {
    // y:50,
    opacity:0,
    // scale:1.2,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -170%",
      // markers:true,
      end: "top -240%",
      scrub: 3
    }
  })

  gsap.from("footer", {
    // y:50,
    // opacity:0,
    // scale:1.2,
    duration: 5,
    transition:1,

    scrub:3,
repeat:-1,
    backgroundColor: "black",
   
  })

  gsap.to(".cart", {
    x:800,
    // opacity:0,
    // scale:1.2,
    display:"none",
    // transition:10,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -25%",
      // markers:true,
      end: "top -30%",
      
      scrub: 3
    }
  })

  gsap.from(".cards", {
    y:50,
    opacity:0,
    // scale:1.2,
    duration: 2,
    // backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -55%",
      // markers:true,
      end: "top -90%",
      scrub: 3
    }
  })

