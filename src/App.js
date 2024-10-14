
import './App.css';

function App() {

  let  cinemas = "TollyWood Cinemas are the best Movies in India";
  return (
    <div className="App">
     <h1>String Methods</h1>

    
     <button type="" onClick = {()=>{
       
       console.log(cinemas.toUpperCase());
       console.log(cinemas.toLowerCase());

     }}>toUppercase/toLowercase</button>  

     <button type="" onClick = {()=>{
      
      let firstName = "Jayasree";
      let lastName ="chowdary";

      let fullName = firstName.concat(lastName);
      let fullName2 = `${firstName} ${lastName}`;
      
      console.log(fullName);
      console.log(fullName2);
     
     }}>concat</button>

     <button type="" onClick = {()=>{

      let actors = "      Anushka     Shetty   "
      console.log(`---->${actors.trimStart()}<----`);
      console.log(`---->${actors.trimEnd()}<----`);
      console.log(`---->${actors.trim()}<----`);
      
     }}>trim/trimStart/trimEnd</button> 

<button type="button" onClick = {()=>{

    let  msg = "Hlo my Dear";
    console.log(msg.padStart(100,"o"));
    console.log(msg.padEnd(100,"!"));
 
}}>padStart/padEnd</button> 

<button type="button" onClick = {()=>{

  let uni = " Iam Sorry Universe";
  console.log(uni.repeat(1008));

}}>repeat</button> 

<button type="button" onClick = {()=>{

   let prayer = " please forfive me nature, I love u nature";

   console.log(prayer.replace("nature", "Bharat"));
 
}}>replace</button> 

<button type="button" onClick = {()=>{

let prayer = " please forfive me nature, I love u nature";

console.log(prayer.replaceAll("nature", "universe"));

}}>replaceAll</button> 


<button type="button" onClick = {()=>{

let prayer = " please forfive me nature, I love u nature";

console.log(prayer.split("a"));


}}>split</button> 

<button type="button" onClick = {()=>{

  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  
  console.log(alphabets.length);
  console.log(alphabets.at(0));
  console.log(alphabets.charAt(0));
  console.log(alphabets[0]);

}}>length</button>
<button type="button" onClick = {()=>{

let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  
console.log(alphabets.slice(8,16));
console.log(alphabets.substring(8,16));
console.log(alphabets.substr(8,2));
}}>slice/substring/substr</button>

<button type="button" onClick = {()=>{
  
  console.log(String.fromCharCode(65));
  console.log(String.fromCharCode(6065));

}}>fromCharCode</button>

<button type="button" onClick = {()=>{

let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXY";


for(let i=0;i<alphabets.length;i++){
  console.log(alphabets.charCodeAt(i));
}
}}>CharCodeAt</button>

<button type="button" onClick = {()=>{

  let warrior = " Sh Sarojini Naidu Ji";
  console.log(warrior.startsWith("Shri"));
  console.log(warrior.endsWith("ji"));
  console.log(warrior.includes("Naidu"));

}}>StartsWith/EndsWith</button>

<button type="button" onClick = {()=>{

   let uni = " pls forgive me universe";

   console.log(uni.indexOf("me"));
   console.log(uni.indexOf("Me"));
   console.log(uni.search(/Me/i));
   console.log(uni.lastIndexOf("me"));
   

}}>indexOf/lastIndexOf</button>
<button type="button" onClick = {()=>{}}></button>

     </div>

  );   
}

export default App;
