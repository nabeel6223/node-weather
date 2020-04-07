const input=document.querySelector(".inp");
const but=document.querySelector("button");
const res= document.querySelector(".res");
const loc=input.value;
but.addEventListener("click",()=>{
  const loc=input.value;
  res.innerHTML="Loading..";
  fetch("http://localhost:3000/weather?address=" + loc).then((response)=>{
    response.json().then((data)=>{
      if(data.error)
        res.innerHTML=data.error;
      else
        res.innerHTML=data.data + data.location;  
    })
    })
})
