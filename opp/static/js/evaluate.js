function evaluate(num){
	
var step=num;
var answer=false;




return true;	
}


var latex2="hjk";

  var y2;
  var y1;
  var text3;
 var fillInTheBlank = MQ.MathField(document.getElementById('fillT1'),{
   handlers :{
  edit: function() { latex2 = fillInTheBlank.latex()
  
  y2=latex2.slice(latex2.indexOf('ac{')+3, latex2.indexOf('}{')); 
  y1=latex2.slice(latex2.indexOf('}{')+2, latex2.lastIndexOf('}'));
  
  },
  enter: function() { submitLatex(latex); }
  
  
  }});
  


  function del(){
     var tel=y2;
			var nev=y1;
			var div4="("+tel+")/("+nev+")";
			var lo=math.eval(div4);
   return lo;			
  }
 
  
  function ffunct1(){
		 var gt=y1;
		var lo= del();
		
		document.getElementById("tes").innerHTML= lo+" "+gt; }