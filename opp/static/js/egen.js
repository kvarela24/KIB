
// Modal for video displaying
var modal = document.getElementById('modal-video');

// Get the button that opens the modal
var btn = document.getElementById("modal-video-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
 var m= document.querySelector("iframe"); //making the video resizable for user screen//
    var w = window.innerWidth;
   var wf=w*0.45; 
	var hm=wf*358/640;
	m.setAttribute("width", wf+"px");
 m.setAttribute("height", hm);
 m.setAttribute("src", vids[avid]);

}
//function for closing the video modal//
function closemod(){
modal.style.display = "none";
	var iframe = document.getElementById('vid');  //  Stop the video when the user closes the modal, uses Vimeos' froogaloop library//
	var player = $f(iframe);
	player.api("pause");
	iframe.setAttribute("src", vids[0]);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closemod();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	
    if (event.target == modal) {
         closemod();
		
		}
} 



//Mathquill function
	
 function quill(problem){
 var problemSpan = document.getElementById(problem);
 return MQ.StaticMath(problemSpan);
 }
 
 function quillin(answer){
 var answerSpan = document.getElementById(answer);
  var answerMathField = MQ.MathField(answerSpan, {
	  spaceBehavesLikeTab: true,
    handlers: {
      edit: function() {
        var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
       
      }
    }
  });
 }
 






//Step controllers//
var nost=4;             //number of steps//
var activeSt=1;         //active step//
var avid=1;              //active video//
var stpc=[false,false,false,false] //aray for the steps//
var stpans;
var correct=true;             //
var ahel=false;


 function hide(item){                           //Used before to hide //
  var element = document.getElementById(item);
  element.style.display="none";
	  }

 function show(item){                          //used before to show the steps in the answer field, no longer in use, replaced by jquery collapse method//
var element = document.getElementById(item);
element.style.display="block";
	 
 }
 
 
 
 
 
 
 
 
 function bar(nom){                             //Progress bar//
  var element = document.getElementById(nom); 
  var pr=(100/nost*(activeSt))
   element.style.width= pr+"%"; 
   element.innerHTML=pr+"%";
  }
 
 // constructor to build up the buttons //
 
 function buttons(num) {
       this.bname="b"+num;        //b will be the buttons//
       this.tname="t"+num;        // t will be the block where the explanation text will be written//
       this.bel=document.getElementById(this.bname); // grabs the button from the HTML//
       this.tel=document.getElementById(this.tname); // grabs the Text from the HTML//
      
       
       }

var sbut=[]; // this variable will host the steps buttons and blocks//
 
 
for (i=1; i<=nost; i++){   //here we used the constructor to define sbut[] depending on the number of steps//
sbut[i]=new buttons(i);  
 console.log(sbut);  
function change(i){        // make the texts appear softly//
toi=sbut[i];
toi.bel.onclick= function(){
 	 $("#t"+i).fadeIn(3000);
	 avid=i;
	  };
}

change(i);
}
 

 //This function is for making the step buttons appear//
 function appear(nom){
	  var element1 = document.getElementById(nom); 
     element1.setAttribute("data-toggle", "collapse");     //this is a bootstrap method//
    element1.style.color= "red";	 
	 element1.style.visibility="visible";	
	 var roo= "rotateIn 0.5s 5";
    element1.style.animation= roo ;
	 element1.focus;
 }
 
 // This function checks if the answer is right or wrong by calling the functions on the other file//
 
 function fans(num){
	var st=num; 
	var svar=false;
if (st==1)	{
	svar=ffunct1();
	
} 
else if (st==2)	{
	svar=ffunct2();
} 	
else if (st==3)	{
svar=ffunct3();}
else if (st==4)	{
svar=ffunct4();}	
	
else 	{
	svar=false;
	
}  
return svar;
 }
 
 //This function allows to continue if the answer is rigth,it is activated when the student clicks on the "check answer" button//
 
 function check(){

console.log(avid); 
 var ans=false;
 ans=fans(activeSt);
 if (ans==true){
	 
	 document.getElementById("tes").innerHTML="Riktig!!";
 stpc[activeSt]=true;
 ers(activeSt);
  bar('pbar');
  var nom3="#check"+activeSt;                             // This is for making the checkmark symbol appear if answer is right//
  $( nom3 ).fadeIn(1000).fadeOut( 2000 );
	if(activeSt<nost){
	 activeSt+=1;}

	var nom="b"+activeSt;
	var nom2="t"+activeSt;
	
	appear(nom);
	 var element2 = document.getElementById(nom2); 
    
	
	
	console.log(nom3)
	
 }
 else if (ans==false) {document.getElementById("tes").innerHTML="Vennligst prøv igjen! "; }
 $( "div#tes" ).fadeIn(1000).fadeOut( 5000 );
 
 
 }
 
 //the following is for making the equations appear softly//
  $("#steps-button").click(function(){
      $("#no-help").hide();
	  $("#t0").fadeIn(3000);
	  appear("b1");
    });
 
 
 

 

 //This fixes the size of right column, so we can do parallax//
 var rcol = document.getElementById("right-col");
 var wlcol = document.getElementById("left-col").clientWidth;
var fg=document.getElementById("faen");
rcol.setAttribute("style","width:"+wlcol+"px");


 
