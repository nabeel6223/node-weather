var sq=document.querySelectorAll(".square");
var but2=document.querySelector(".but2");
var but1=document.querySelector(".but1");
var but3=document.querySelector(".but3");
var res=document.querySelector(".result");
var colors;
var level=6;
but3.classList.add("selected");
var h=document.querySelector(".headline");
var colorDisplay=document.querySelector(".rgb");
but2.addEventListener("click",function() {
  level=3;
  but2.classList.add("selected");
  but3.classList.remove("selected");
   colors=randomColors(3);
   pickedcolor=pickcolor();
   colorDisplay.textContent=pickedcolor;
   for(var i=0;i<sq.length;i++)
     if(colors[i])
        sq[i].style.background=colors[i];
      else
        sq[i].style.display="none";
});
but3.addEventListener("click",function() {
  level=6;
  but2.classList.remove("selected");
  but3.classList.add("selected");
   colors=randomColors(6);
   pickedcolor=pickcolor();
   colorDisplay.textContent=pickedcolor;
   for(var i=0;i<sq.length;i++){
       if(sq[i].style.display=="none")
         sq[i].style.display="block";
        sq[i].style.background=colors[i];
      }
});
/*but3.addEventListener("click",function() {
   level=6;
}); */
colors=randomColors(6);
var pickedcolor=pickcolor();
but1.addEventListener("click",function(){
  if(but1.textContent=="TRY AGAIN?")
   but1.textContent="NEW COLORS";
   colors=randomColors(level);
   pickedcolor=pickcolor();
   colorDisplay.textContent=pickedcolor;
   for(var i=0;i<sq.length;i++)
     sq[i].style.background=colors[i];
});
colorDisplay.textContent=pickedcolor;
for(var i=0;i<sq.length;i++){
  sq[i].style.background=colors[i];
  sq[i].addEventListener("click",function(){
    if(this.style.background==pickedcolor)
    {
      res.textContent="RIGHT!!";
      h.style.background=pickedcolor;
      for(var i=0;i<sq.length;i++)
        sq[i].style.background=pickedcolor;
      but1.textContent="TRY AGAIN?";
    }
    else
    {
      this.style.background="#232323";
      res.textContent="TRY AGAIN!!";
    }
  });
}
function pickcolor()
{
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}
function randomColors(num){
 var arr=[];
 for(var i=0;i<num;i++)
    arr.push(randomise());
 return arr;
}

function randomise(){
 var r=Math.floor(Math.random()*256);
 var g=Math.floor(Math.random()*256);
 var b=Math.floor(Math.random()*256);
 return "rgb(" + r + ", "+  g + ", " + b + ")";
}
