gsap.from("#center",{onStart:function(){$("#center").textillate({"in":{effect:"bounceIn",callback:function(){$("#center").textillate("out")}},out:{effect:"hinge"}})}});window.addEventListener("load",()=>{document.querySelector("#loader").style.display="none"});function e(){gsap.from("#header .a",{x:80,duration:2,transform:"scaleX(1.12) scaleY(0.70)",opacity:0,ease:"bounce.out",stagger:.05});gsap.from("#pblob",{y:-80,duration:2,opacity:0,ease:"bounce.out"});gsap.from("#skills",{y:80,duration:2,opacity:0,ease:"bounce.out"});gsap.from(".hnav",{x:80,duration:2,opacity:0,ease:"bounce.out",stagger:.05});gsap.from(".vnavleft",{y:-80,duration:2,opacity:0,ease:"bounce.out"})}document.querySelector("#modal button").addEventListener("click",t=>{document.querySelector("#modal").style.display="none";a.start();e()});document.querySelectorAll(".a").forEach(function(t){t.addEventListener("mouseover",function(){this.classList.add("bouncing");this.addEventListener("animationend",function(){this.classList.remove("bouncing")})})});var n;window.addEventListener("mousemove",function(t){let e=t.pageY;let o=t.pageX;n=t.clientY;gsap.to("#mcircle",{x:`${o+30}px`,y:`${e+30}px`})});window.addEventListener("scroll",function(){gsap.to("#mcircle",{y:window.pageYOffset+n})});document.querySelector(".hnav h3").addEventListener("mouseover",function(){document.querySelector(".hnav h3").classList.add("rotation");document.querySelector(".hnav h3").addEventListener("transitionend",function(){document.querySelector(".hnav h3").classList.remove("rotation")})});gsap.from("#pprojecth1 h1",{scrollTrigger:{trigger:"#pprojecth1 h1",scroller:"body",start:"top 70%",end:"bottom 50%",scrub:true},x:100,opacity:0});gsap.from("#p1line a",{scrollTrigger:{trigger:"#pprojecth1 h1",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:true},x:100,opacity:0});gsap.from("#arrow",{scrollTrigger:{trigger:"#pprojecth1 h1",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:true},x:200,opacity:0});var t=0;var o=0;var r=0;document.querySelector("#rightbtn").addEventListener("click",function(){if(r<200){t-=100;o+=100;r+=100;gsap.to("#slideparent",{x:`${t}vw`,duration:1,ease:"power4.inOut"});gsap.to("#leftbtn",{x:`${o}vw`,duration:1,ease:"power4.inOut"});gsap.to("#rightbtn",{x:`${r}vw`,duration:1,ease:"power4.inOut"})}});document.querySelector("#leftbtn").addEventListener("click",function(){if(o>0){t+=100;o-=100;r-=100;gsap.to("#slideparent",{x:`${t}vw`,duration:1,ease:"power4.inOut"});gsap.to("#leftbtn",{x:`${o}vw`,duration:1,ease:"power4.inOut"});gsap.to("#rightbtn",{x:`${r}vw`,duration:1,ease:"power4.inOut"})}});const a=KUTE.fromTo("#path1",{path:"#path1"},{path:"#path3"},{duration:1e3});const i=KUTE.to("#path1",{path:"#path2"},{duration:1e3});