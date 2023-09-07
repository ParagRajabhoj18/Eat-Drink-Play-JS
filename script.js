// document.addEventListener("mousemove",function(dets){
//     console.log(dets.x);
// })  //here document means whole HTML Document
//ye kya karega ki apka cursor particular window pe kaha kaha move hora he vo sab detail me dikhaega u can also use "dets.x" 
// to see the movement of cursor in x-axis and "dets.y" to see the movement of cursor in y-axis







// //Creating a CURSOR Moving with the Mouse Pointer:-
// var crsr=document.querySelector("#cursor")//its basic DOM ye basically kisi bhi HTML ke element ko Java Script me select karne ke kam me ata hai
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left=dets.x+"px";
//     crsr.style.top=dets.y+"px";
//     // After applying this u can see the the circular cursor moving with our mouse pointer which we had kept FIXED in CSS

// })

// //Creating BLUR EFFECT Around the Cursor we Created Above:-
// var blur=document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     blur.style.left=dets.x+"px";
//     blur.style.top=dets.y+"px";
//     // After applying this u can see the the circular cursor moving with our mouse pointer which we had kept FIXED in CSS

// })




//---------- You can also combine the above lines as follows:-

//Creating CURSOR which moves with Mouse Pointer and Giving it  BLUR EFFECT AROUND IT:-

var crsr=document.querySelector("#cursor")//its basic DOM ye basically kisi bhi HTML ke element ko Java Script me select karne ke kam me ata hai
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){  //document.addEventListener("name of the event",function to run(){-----Function Body----})
    crsr.style.left=dets.x+15+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x -150 +"px"; //-150 so that cursor moves exactly with pointer
    blur.style.top=dets.y- 150 +"px";  
})



//-----------Mouse effect when Cursor ponts to the h4 TAGS og the NAVBAR:-



var h4all= document.querySelectorAll("#nav h4") // it is used to select all the elemnts "#nav h4"-> is the position which of which the elements we have to select
h4all.forEach(function(elem){  //here elem is elements i.e "#nav h4"
    // console.log(elem) //it will show all the 5 h4 elemnts in console section.


    //    1)when the mouse ENTERS THE NAV BAR:-
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2 //this increases teh size of the cursor when ur cursor hits the h4 tags in Navigation Bar
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })


    //    2)when the mouse LEAVES THE NAV BAR:-
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1 //this increases teh size of the cursor when ur cursor hits the h4 tags in Navigation Bar
        crsr.style.border="0px solid rgb(94, 193, 193)"
        crsr.style.backgroundColor="rgb(94, 193, 193)"
    })

    

})










//Effects for NAVIGATION-BAR:-

gsap.to("#nav",{  //"#nav---- her targets nav bar"
    backgroundColor:"#141414",
    height:"107px",
    duration:0.5, //it scrolls the nav bar upside reload it and u will see the effect on the nav bar.
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true, //it shows the markers at the right handside corner top margin which shows the strat and the end effects of the scroll
        start:"top -10%", //using this it will show the nav background transparency after u scroll it little bit
        end:"top -11%",

        // scrub:true, //we apply this so that after scrolling it again up it disables nav background 

        scrub:2,//and we can also apply it a transition effect fom the scale of 1 to 5, 1---->fastest and 5---->slowest
    }
}) 







// Effects on SECOND-PAGE:-

gsap.to("#main",{
    backgroundColor:"#000",
    //no here u can see that if u write the above line it will immediately turn the background color to black but we want it for our second page for that we 
    //will make the use of "SCRUB" property and to use the scrub property we will need to define the "scrollTrigger"
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%", //starting point of the effect
        end:"top -100%",  //ending point of the effect
        scrub:2,

    }
})


// Effects on ABOUT US PAGE:-

gsap.from("#about-us img,#about-us-in",{  //to see thi effects go on about us section and then reload the page
    y:90, //popup from Y axis
    opacity:0, 
    duration: 1, //when u will reload the About us page it will pop up with a duartion
    stagger:0.4, //multiple elements ko ek ek karke lane ka kam STAGGER KARTA HAI reload and see 

    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true;
        start:"top 60%",
        end:"top 55%",
        scrub:2, //transition effect so that u can see the about us section popping up when u scroll it
    }
})







// Effects on CARDS:-

gsap.from(".card",{  //to see thi effects go on about us section and then reload the page
    scale:0.8, //popup from Y axis
    opacity:0, 
    duration: 1, //when u will reload the About us page it will pop up with a duartion
    stagger:0.4, //multiple elements ko ek ek karke lane ka kam STAGGER KARTA HAI reload and see 

    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true;
        start:"top 45%",
        end:"top 65%",
        scrub:2, //transition effect so that u can see the about us section popping up when u scroll it
        stagger:1,
    }
})


//----------------------------------------------Effect to PAGE 3:- 

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:2,
    }
})


gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:2,
    }
})


//----------------------------------------------Effect to PAGE 4:- 

gsap.from("#page4  h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 80%",
        scrub:2,
    }
})