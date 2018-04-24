

function frac(nom){

ori=nom;
var s1=ori.replace(/\\frac{/g,'(');
var s2=s1.replace(/}{/g,')/(');
var s3=s2.replace(/}/g,')');
return s3;
}

function mult(nom){
ori=nom;
var s1=ori.replace(/\\cdot/g,'*');
return s1;
}


function log(nom){
ori=nom;
var s1=ori.replace(/\\log/g,'(log');
return s1;
}


function pare(nom){
ori=nom;
var s1=ori.replace(/{/g,'(');
var s2=s1.replace(/}/g,')');
return s2;
}

function pare2(nom){
ori=nom;
var s1=ori.replace(/\\left/g,'(');
var s2=s1.replace(/\\right/g,')');
return s2;
}


function latoj(nom){
ori=nom;
var s1=frac(ori);
var s2=mult(s1);
var s3=log(s2);
var s4=pare(s3);
var s5=pare2(s4);
return s5;
}




