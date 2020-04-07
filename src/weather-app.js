const forecast=require("./util-forecast.js")

//put place name as command line arguments
const place=process.argv[2];
if(!place){
  console.log("Please provide address..");
}
else{
forecast.weather(process.argv[2],(error,data)=>{
console.log("Error: " + error);
console.log(data);
});
}
console.log("sdsdsdsd111s");


const but=document.querySelector("button");
const res= document.querySelector(".res");
but.addEventListener("click",()=>{
console.log("jj");
})

