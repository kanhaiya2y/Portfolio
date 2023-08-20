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


var navmenuanchortag= document.querySelector('.nav-menu a');
console.log(navmenuanchortag);
 for( i-0; i<navmenuanchortag.clientHeight;i++){
  navmenuanchortag.addEventListener('click',function(event){
event.preventDefault();
 

var targetsectionID=this.textcontent.trim().tolowersection();
 var targetsection=document.getElementById(targetsectionID);

 conbsole.log(targetsection); }
  var  targetsectioncoordinate= targetsection.getBoundingClientRect();
  );
 }


 



 