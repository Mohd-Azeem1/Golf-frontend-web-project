
var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",(dets)=>{
    cursor.style.top= dets.y+5 +"px"
    cursor.style.left= dets.x+5 +"px"
    blur.style.top= dets.y-150 +"px"
    blur.style.left= dets.x-150 +"px"
    
})

let navh4=document.querySelectorAll("#nav h4")
navh4.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        cursor.style.scale = 4
        cursor.style.border = "1px solid #fff" 
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1
        cursor.style.border = "2px solid #3c3c3c" 
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height: 90,
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start:"top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -50%",
        end: "top -60%",
        scrub: 2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        scrub: 3,
        // markers: true,
        start: "top 60%",
        end: "bottom 58%" ,
    }
})
gsap.from("#card-con",{
    scale: 0.9,
    opacity:0,
    duration:0.5,
    stagger:2,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        scrub: 3,
        // markers: true,
        start: "top 60%",
        end: "bottom 78%" ,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#page4 h1",{
    y: 50,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end:"top 60%",
        scrub: 4,
    }
})