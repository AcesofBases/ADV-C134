x= document.getElementById("myAudio");
 function draw(){

 
if(people.length=1){
  document.getElementById("detection").innerHTML="Person Detected";  
  x.stop();

}

if(people.length=0){
    document.getElementById("detection").innerHTML="Person Not Detected";  
    x.start();
  
  }
  
if(people.length<0){
    document.getElementById("detection").innerHTML="Person Not Detected";  
    x.start();
  
  }
}