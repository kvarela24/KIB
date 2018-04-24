 // Modal for video displaying
 var modal = document.getElementById('modal-video');

 // Get the button that opens the modal
 var btn = document.getElementById("modal-video-button");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "block";
     var m = document.querySelector("iframe"); //making the video resizable for user screen//
     var w = window.innerWidth;
     var wf = w * 0.45;
     var hm = wf * 358 / 640;
     m.setAttribute("width", wf + "px");
     m.setAttribute("height", hm);
     m.setAttribute("src", vids[avid]);

 }
 //function for closing the video modal//
 function closemod() {
     modal.style.display = "none";
     var iframe = document.getElementById('vid'); //  Stop the video when the user closes the modal, uses Vimeos' froogaloop library//
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

 function bar(nom) { //Progress bar//
     var element = document.getElementById(nom);
     var pr = (100 / nost * (active_step))
     element.style.width = pr + "%";
     element.innerHTML = pr + "%";
 }

 // constructor to build up the buttons //

 function buttons(num) {
     this.bname = "b" + num; //b will be the buttons//
     this.tname = "t" + num; // t will be the block where the explanation text will be written//
     this.ans_latex = "ans_" + num;
     this.bel = document.getElementById(this.bname); // grabs the button from the HTML//
     this.tel = document.getElementById(this.tname); // grabs the Text from the HTML//      
 }


 var sbut = []; // this variable will host the steps buttons and blocks//

 function change(it) { // make the texts appear softly//
     toi = sbut[it];
     toi.bel.onclick = function() {
         $("#ans_" + it).fadeIn(3000);
         avid = it;
     };
 }


 //Mathquill functions


 //this function is for rendering not editable mathquills//	
 function quill(problem) {
     var problemSpan = document.getElementById(problem);
     return MQ.StaticMath(problemSpan);
 }

 function quillin(answer) {
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

 // Own function with constructors for creating own mathquills//

 function answer_quill(step_ans) {

     var mathField = MQ.MathField(document.getElementById(step_ans), {
         spaceBehavesLikeTab: true, // configurable
         handlers: {
             edit: function() { // useful event handlers
                 var enteredMath = mathField.latex(); // simple API

             }

         }
     });
     this.ans = mathField.latex();
     this.elec = mathField.el();
     this.focu = mathField.focus(); //for putting focus on the field //
 }



 function parent(class_s) {
     act_el = document.activeElement;
     parent_act = $(act_el).parents(class_s).get(0); //This functions just returns the DOM element of the first parent with class_s we will use it to find objects that should be mathquilled//
     return parent_act;
 }

 // this function is for creating new mathquill fields //
 var create_quill = (function() {
     var counter = 1;
     var er;
     return function() {

         var div_name = parent("div.ans_field").id; // The ID of the created element will begin with the name of the step//
         var target_div = parent("p.eqin");
         var para = document.createElement("P");
         para.id = div_name + '_p_' + counter;
         para.setAttribute("class", "eqin");
         var t = document.createElement("span");
         para.appendChild(t);
         t.id = div_name + '_s_' + counter;
         t.setAttribute("class", "eqf");
         $(target_div).after(para);
         er = new answer_quill(t.id);
         er.focu;
         return counter += 1;
     }

 })();


 quill_substeps(0);

 //Step controllers//
 var nost = 4; //number of steps//
 var active_step = 0; //active step//
 var avid = 1; //active video//
 var stpc = [false, false, false, false] //aray for the steps//
 var correct = true; //




 $(document).keypress(function(e, active_step) {
     if (e.which == 13) {
         create_quill();
     }

 });


 function quill_ins_text(step_name) {
     var array = [];

     var ans_num = "#" + step_name; // all the answer step fields are called ans_1,2,3 etc//

     // !!add a conditional that checks that there is something to quill!!//
     var substeps_arr = $(ans_num).find(".ins_quill"); // we look in the step fields for objects that have class ins_quill to quill them, !all the text  quill fields must have this class!//
     console.log(substeps_arr);
     for (j = 0; j < substeps_arr.length; j++) { //quill all objects in the array//
         var sub_name = substeps_arr[j].id;
         var tyg = new quill(sub_name);
         var juli = tyg.ans;
         array[j] = juli; // we store the latex in an array which maybe will be send to the backend//
     }

     return array;
 }



 //This functions renders all the editable_quill fields and stores the latex of the fields in an array//
 function quill_substeps(act_step) {
     var array = [];
     var ans_num = "#ans_" + act_step; // all the answer step fields are called ans_1,2,3 etc//
     var substeps_arr = $(ans_num).find(".eqf"); // we look in the step fields for objects that have class eqf to quill them//
     for (j = 0; j < substeps_arr.length; j++) { //quill all objects in the array//
         var sub_name = substeps_arr[j].id;
         var tyg = new answer_quill(sub_name);
         var juli = tyg.ans;
         array[j] = juli; // we store the latex in an array which will be send to the backend//
     }

     return array;
 }


 for (i = 1; i <= nost; i++) {
     sbut[i] = new buttons(i); //here we used the constructor to define sbut[] depending on the number of steps//
     change(i);
     quill_substeps(i);
 }


 //This is for making the buttons appear in a funny way so the students know they have to click them//

 function appear(nom) {
     var element1 = document.getElementById(nom);
     element1.setAttribute("data-toggle", "collapse"); //this is a bootstrap method//
     element1.style.color = "red";
     element1.style.visibility = "visible";
     var roo = "rotateIn 0.5s 5";
     element1.style.animation = roo;
     element1.focus;
 }




 // This function sends the answer to the backend /

 function ajax_send(step_num) {
     console.log(step_num);
     var ans_ar = quill_substeps(step_num);
     var ans_send = JSON.stringify(ans_ar);
     console.log(ans_ar);
     $.ajax({
         type: 'POST',
         url: '/process/',
         data: {
             step_number: active_step,
             student_answer: ans_send,
             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
         },
         success: function(datax) {

             check(datax);


         }

     });


 }

 function ajax_get_steps(step_num) {

     var step_ajax = step_num


     $.when($.ajax({
         type: 'GET',
         url: '/process_steps/',
         data: {
             step_number: step_ajax,
             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
         },
         success: function(data) {
             datos = data[0].fields.step_name;

             var step_name = "#step_" + step_num + "_name";
             var explanation = "#s" + step_num;
             var instruction = "#instruction_" + step_num;

             $(step_name).html(data[0].fields.step_name);
             $(explanation).html(data[0].fields.explanation);
             $(instruction).html(data[0].fields.instruction);
             $(explanation).html(data[0].fields.explanation);
         }

     })).then(function() {

         var div_name = "step_" + step_num;
         MathJax.Hub.Queue(["Typeset", MathJax.Hub, div_name]); // This is for rendering any unrendered mathjax in the text gotten from the ajax call
         quill_ins_text(div_name);
     });



 }




 function ajax_init() {
     ajax_get_steps(0);
     ajax_get_steps(1);

     if (nost > 1) {
         ajax_get_steps(2);
     }
 }


 $("#steps-button").one("click", function() {
     active_step = 1;
     ajax_init();
     $("#no-help").hide();
     $("#t0").fadeIn(3000); //
     appear("b1");
 });


 //This function allows to continue if the answer is rigth,it is activated in the success function of the ajax. It receives the data coming from the backend//


 function check(aproved) {

     var ans = false;
     ans = aproved;
     if (ans == true) {
         document.getElementById("tes").innerHTML = "Riktig!!";
         //ers(active_step);                                       // calling the function that makes the correct answer appear unchangeable
         stpc[active_step] = true;
         bar('pbar'); //makes the progress bar move//
         var nom3 = "#check" + active_step; // This is for making the checkmark symbol appear if answer is right should be changed with something that just ads it//
         $(nom3).fadeIn(1000).fadeOut(1000);
         if (active_step < nost) {
             active_step += 1;
         }
         var nom = "b" + active_step;
         var nom2 = "t" + active_step;
         if (active_step < nost) {
             var act_ahead = active_step + 1
             ajax_get_steps(act_ahead);
         }
         appear(nom); //calling the fucntion so buttons appear//
         var element2 = document.getElementById(nom2);




     } else if (ans == false) {
         document.getElementById("tes").innerHTML = "Vennligst prøv igjen! ";
     }
     $("div#tes").fadeIn(1000).fadeOut(5000);


 }




 //This fixes the size of right column, so we can do parallax//
 var rcol = document.getElementById("right-col");
 var wlcol = document.getElementById("left-col").clientWidth;
 var fg = document.getElementById("faen");
 rcol.setAttribute("style", "width:" + wlcol + "px");