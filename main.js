// auto type
var typed = new Typed(".auto-type",{
    strings:["Vaibhav Yadav","Web Developer"],
    typeSpeed:200,
    backSpeed:200,
    loop:true
})
// end auto type

document.querySelector("#list-btn").addEventListener("click",function()
{
    document.querySelector("#verticle-div").style.display="flex" 
    document.querySelector("#verticle-div").style.animation = "vertical-div 2s 1"   
})

document.querySelector("#verticle-div-close-btn").addEventListener("click",function()
{   document.querySelector("#verticle-div").style.animation = "vertical-div-reverse 2s 1"
    setTimeout(()=>{
        document.querySelector("#verticle-div").style.display="none" 
    },1999)
  
})

// verticle link div

function verticle_div_link()
{
    document.querySelector("#verticle-div").style.display="none"  
}

// animation
