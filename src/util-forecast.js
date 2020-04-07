const req = require("request");
const weather=(address,callback)=>{
//geocode mapbox
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?access_token=pk.eyJ1IjoibmFiZWVsNjIyMyIsImEiOiJjazd1dTllOTYwMDNtM21wajVwcWtzMmJjIn0.qfLwr-gfzJAnZktQH1ALaw&limit=1"
   
      req({url:url, json:true}, function(error,response){
       if(error){
           callback("Unable to connect to weather services",undefined);
       }
       else if(response.body.features.length==0){
           callback("Unable to find location",undefined);
       }
       else{
       const long=response.body.features[0].center[0];
       const lat=response.body.features[0].center[1];
       const location =response.body.features[0].place_name;
       //darksky
       const url1="https://api.darksky.net/forecast/188c1542f57d642e937ea833d3b51088/" + lat + "," + long + "?units=si";
       req({url:url1, json:true}, function(error,response){
        const forecast=response.body.currently.summary + ". It is currently " + response.body.currently.temperature + " degrees out and there is "
         + response.body.currently.precipProbability + "% chance of rain."
         callback(undefined,forecast,location);
           });
   }
   });
   }
   
   module.exports={
       weather:weather
   };
   