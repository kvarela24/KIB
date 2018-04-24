
var latex1;
var test;
  var y2;
  var y1;

  
  
  


 		
		
		
		
		
 //Secondquestion//		
var latex2="hjk";
 var fillInTheBlank2 = MQ.MathField(document.getElementById('filT2'),{
   handlers :{
  edit: function() { latex2 = fillInTheBlank2.latex()
  
  a2=latex2; 
  },
//  enter: function() { submitLatex(latex); }
  
  
  }});
  


  function vq2(){
     var tel=a2;
	
   return tel;			
  }
 
  
  function ffunct2(){
		
		var mo= vq2();
		var corr=false;
		if (mo=="y=5x+b"){
		corr=true;	
		}
		else {corr=false;}
		return corr;}

		
	var latex3="hjk";
 var fillInTheBlank3 = MQ.MathField(document.getElementById('fillT3'),{
   handlers :{
  edit: function() { latex3 = fillInTheBlank3.latex()
  
  a3=latex3; 
  }
//  enter: function() { submitLatex(latex); }
  
  
  }});
  	
	function vq3(){
     var tel=a3;
     var tel2=latoj(tel)	
   return tel2;			
  }	
  
  
  
		
	var latex3b="hjk";
 var fillInTheBlank3b = MQ.MathField(document.getElementById('ans3.2'),{
   handlers :{
  edit: function() { latex3b = fillInTheBlank3b.latex()
  
  a3b=latex3b; 
  }
//  enter: function() { submitLatex(latex); }
  
  
  }});	
  
  function vq3b(){
     var tel=a3b;
	var ex=latoj(tel);
	var bf=math.eval(ex);
   return bf;			
  }	
  
  
   function ffunct3(){
		var corr=false;
		var mo= vq3();
		var mob= vq3b();
		var corra=false;
		var corrb=false;
		if (mob==-4){
		corrb=true;	
		}
		if (mo=="(6)=(2)5+b"){
		corra=true;	
		}
		else if (mo=="6=5*2+b"){
		corra=true;	
		}
		else if (mo=="6=2*5+b"){
		corra=true;	
		}
		else if (mo=="(-4)=(0)5+b"){
		corra=true;	
		}else if (mo=="(-4)=5(0)+b"){
		corra=true;	
		}
		else if (mo=="-4=0*5+b"){
		corra=true;	
		}
		else if (mo=="-4=5*0+b"){
		corra=true;	
		}
		else if (mo=="-4=b"){
		corra=true;	
		}
		else if (mo=="-4=+b"){
		corra=true;	
		}
		if(corra==true && corrb==true){corr=true;}
		else {corr=false;}
		return corr;}
		
		
		
var latex4="hjk";
 var fillInTheBlank4 = MQ.MathField(document.getElementById('ans4.0'),{
   handlers :{
  edit: function() { latex4 = fillInTheBlank4.latex()
  
  a4=latex4; 
  }
//  enter: function() { submitLatex(latex); }
  
  
  }});
  	
	function vq4(){
     var tel=a4;
	var ex=latoj(a4);
   return ex;			
  }			
  
  function ffunct4(){
		var corr=false;
		
		var mo= vq4();
		console.log(mo);
		if (mo=="y=5x-4"){
		corr=true;	
		}
		else if (mo=="y=5* x+-4"){
		corr=true;	
		}
		else if (mo=="y=5* x-4"){
		corr=true;	
		}
		else if (mo=="y=5* x+-4"){
		corr=true;	
		}
		else if (mo=="y=5x+-4"){
		corr=true;	
		}
		return corr;}
  
  
//VideoContent//

var vids=["v0"]  ;

vids[0]="https://player.vimeo.com/video/203857357?&color=ffffff&portrait=0";
vids[1]="https://player.vimeo.com/video/234703134?autoplay=1"
vids[2]="https://player.vimeo.com/video/235561953?autoplay=1"
vids[3]="https://player.vimeo.com/video/235562031?autoplay=1"
vids[4]="https://player.vimeo.com/video/235562119?autoplay=1"


//Thi function is for replacing and fixing the text in the answer field for the student answer, if the answer is correct//

function ers1(){
  console.log(latex1);

var t1=document.getElementById("fillT1");

t1.innerHTML=latex1 ;


quill("fillT1");
	t1.style.backgroundColor= "rgba(255,100,10,0)";  
}

function ers2(){  
var t2=document.getElementById("fillT2");
t2.innerHTML=" y=5x+b " ;
quill("fillT2");
t2.style.backgroundColor= "rgba(10,10,10,0)"; 
}
  
function ers3(){
 
	
var t1=document.getElementById("ans3.0");
var t2=document.getElementById("ans3.1");
var t3=document.getElementById("ans3.2");
t1.style.backgroundColor= "rgba(10,10,10,0)"; 
t2.style.backgroundColor= "rgba(10,10,10,0)"; 
t3.style.backgroundColor= "rgba(10,10,10,0)"; 
t1.innerHTML= latex3 ;
quill("ans3.0");
}	 

function ers4(){  
var t2=document.getElementById("ans4.0");
t2.innerHTML=" y=5x-4 " ;
quill("ans4.0");
t2.style.backgroundColor= "rgba(10,10,10,0)"; 
}


function ers(num){
	var st=num; 
	var svar=false;
if (st==1)	{
	svar=ers1();
	
} 
else if (st==2)	{
	svar=ers2();
} 	
else if (st==3)	{
svar=ers3();}
else if (st==4)	{
svar=ers4();}	
	
else 	{
	svar=false;
	
}  
return svar;
 } 