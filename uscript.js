gsap.from("#header .a",{x:80,duration:2,transform:"scaleX(1.12) scaleY(0.70)",opacity:0,ease:"bounce.out",stagger:.05}),gsap.from("#pblob",{y:-80,duration:2,opacity:0,ease:"bounce.out"}),gsap.from("#skills",{y:80,duration:2,opacity:0,ease:"bounce.out"}),gsap.from(".hnav",{x:80,duration:2,opacity:0,ease:"bounce.out",stagger:.05}),gsap.from(".vnavleft",{y:-80,duration:2,opacity:0,ease:"bounce.out"});const bouncy=document.querySelectorAll(".a");bouncy.forEach(function(t){t.addEventListener("mouseover",function(){this.classList.add("bouncing"),this.addEventListener("animationend",function(){this.classList.remove("bouncing")})})}),window.addEventListener("mousemove",function(t){let e=t.pageY,o=t.pageX;gsap.to("#mcircle",{x:`${o+30}px`,y:`${e+30}px`})}),document.querySelector(".hnav h3").addEventListener("mouseover",function(){document.querySelector(".hnav h3").classList.add("rotation"),document.querySelector(".hnav h3").addEventListener("transitionend",function(){document.querySelector(".hnav h3").classList.remove("rotation")})}),gsap.from("#pprojecth1 h1",{scrollTrigger:{trigger:"#pprojecth1 h1",scroller:"body",start:"top 70%",end:"bottom 50%",scrub:!0},x:100,opacity:0}),gsap.from("#p1line a",{scrollTrigger:{trigger:"#pprojecth1 h1",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:!0},x:100,opacity:0}),gsap.from("#arrow",{scrollTrigger:{trigger:"#pprojecth1 h1",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:!0},x:200,opacity:0});var horiSlideParent=0,horiLeftBtn=0,horiRightBtn=0;document.querySelector("#rightbtn").addEventListener("click",function(){horiRightBtn<200&&(horiSlideParent-=100,horiLeftBtn+=100,horiRightBtn+=100,gsap.to("#slideparent",{x:`${horiSlideParent}vw`,duration:1,ease:"power4.inOut"}),gsap.to("#leftbtn",{x:`${horiLeftBtn}vw`,duration:1,ease:"power4.inOut"}),gsap.to("#rightbtn",{x:`${horiRightBtn}vw`,duration:1,ease:"power4.inOut"}))}),document.querySelector("#leftbtn").addEventListener("click",function(){horiLeftBtn>0&&(horiSlideParent+=100,horiLeftBtn-=100,horiRightBtn-=100,gsap.to("#slideparent",{x:`${horiSlideParent}vw`,duration:1,ease:"power4.inOut"}),gsap.to("#leftbtn",{x:`${horiLeftBtn}vw`,duration:1,ease:"power4.inOut"}),gsap.to("#rightbtn",{x:`${horiRightBtn}vw`,duration:1,ease:"power4.inOut"}))}),setTimeout(function(){document.querySelector("#modal").style.display="none"},6e3);