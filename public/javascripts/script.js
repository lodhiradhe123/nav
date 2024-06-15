
document.querySelector(".iconimg").addEventListener("click",()=>{
    gsap.to(".hiddennav",{
        left:"1%",
        duration:0.5,
    })
})
document.querySelector(".hiddennav").addEventListener("mouseleave",()=>{
    gsap.to(".hiddennav",{
        left:"-100%",
        duration:2,
    })
})

   

