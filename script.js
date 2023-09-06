// var scrollInterval = setInterval(function() {
//     window.scrollBy(0,50)
    
// }, 50);




//  var scrollIntetrval = setInterval(function()
//  {
//     window .scrollBy(0,50);
//  } ,50);
//   clearInterval(scrollIntetrval);


//   var targetpos = 2000;
// var currentpos = 0;
// var scrollInterval = setInterval(function() {
//     if (currentpos >= targetpos)
//         clearInterval(scrollInterval);
//     else {
//         currentpos += 50;
//         window.scrollBy(0, 50);
//     }
// }, 50);

// var skillsection= document.getElementById('skills');

// var corordiante=skillsection.getBoundingClientRect();
//  console.log(corordiante);

//    skills .forEach(function(skills) {
   

//  skills  .addEventListener('click',function()


// var navmenuanchortag= document.querySelector('.nav-menu a');
// console.log(navmenuanchortag);
//  for( i-0; i<navmenuanchortag.clientHeight;i++){
//   navmenuanchortag.addEventListener('click',function(event){
// event.preventDefault();
 

// var targetsectionID=this.textcontent.trim().tolowersection();
//  var targetsection=document.getElementById(targetsectionID);

//  conbsole.log(targetsection); }
//   var  targetsectioncoordinate= targetsection.getBoundingClientRect();
//   );
//  }
var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);



 



 