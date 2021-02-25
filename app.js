
function check(){
   set();
}

function reset(){
 document.getElementById("one").value = "";
 document.getElementById("two").value = "";
 document.getElementById("feeling").value = "";
}

function set(){
   var nam = document.getElementById("one").value;
      var crush = document.getElementById("two").value;
      if(nam == ""){
          alert("Your Name can't be empty");
      }else if(!isNaN(nam)){
          alert("Numbers are not allowed");
         }else if(nam.length <= 3){
          alert("Enter at least five-letter word");
      }
       else if(crush ==""){
          alert("Lover's  Name can't be empty");
       }else if(!isNaN(crush)){
          alert("Numbers are not allowed");
       }else if(crush.length <= 3){
          alert("Enter at least five-letter word");
       }
       else{
           var a = document.getElementById("emoji").innerHTML;
           var b = document.getElementById("emoji-heartbreak").innerHTML;
           var c = document.getElementById("mild").innerHTML;
           var compatibility = Math.random() * 100;
           var compatibilityFactor  = Math.floor(compatibility);
           if(compatibilityFactor > 80){
              document.getElementById("feeling").value = compatibilityFactor +" "+ "%"+ " " + "highly compatible" + a;
           }else if(compatibilityFactor >= 50 || compatibilityFactor >= 70){
              document.getElementById("feeling").value = compatibilityFactor+" " + "%" + " " + "midly compatible" + c;
           }else{
              document.getElementById("feeling").value = compatibilityFactor + "%" + b; 
             
           } 
       }
}