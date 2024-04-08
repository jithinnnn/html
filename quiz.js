function checkResult(){
     var sum=0;
     ans1 = document.getElementById('op2');
     ans2 = document.getElementById('op5');
     ans3 = document.getElementById('op10');
     ans4 = document.getElementById('op13');
     ans5 = document.getElementById('op16');

     if(ans1.checked==true){
        sum++;
        document.getElementById('chk1').innerHTML="&#10004";
        document.getElementById('chk1').style.color="green";
     }
     else{
        document.getElementById('chk1').innerHTML="&#10006";
        document.getElementById('chk1').style.color="red";
     }
     if(ans2.checked==true){
        sum++;
        document.getElementById('chk2').innerHTML="&#10004";
        document.getElementById('chk2').style.color="green";
     }
     else{
        document.getElementById('chk2').innerHTML="&#10006";
        document.getElementById('chk2').style.color="red";
     }
     if(ans3.checked==true){
        sum++;
        document.getElementById('chk3').innerHTML="&#10004";
        document.getElementById('chk3').style.color="green";
     }
     else{
        document.getElementById('chk3').innerHTML="&#10006";
        document.getElementById('chk3').style.color="red";
     }
     if(ans4.checked==true){
        sum++;
        document.getElementById('chk4').innerHTML="&#10004";
        document.getElementById('chk4').style.color="green";
     }
     else{
        document.getElementById('chk4').innerHTML="&#10006";
        document.getElementById('chk4').style.color="red";
     }
     if(ans5.checked==true){
        sum++;
        document.getElementById('chk5').innerHTML="&#10004";
        document.getElementById('chk5').style.color="green";
     }
     else{
        document.getElementById('chk5').innerHTML="&#10006";
        document.getElementById('chk5').style.color="red";
     }
     document.getElementById("score").innerHTML="Score: "+sum;
 
     var percentage = sum*100/5;
     document.getElementById('percentage').innerHTML="Percentage : "+percentage+"%";    
}