function operation(x){
	document.getElementById("input").value+=x;
}
function answer(){
	var x = document.getElementById("input").value;
	document.getElementById("input").value = eval(x);
}
function setEmpty(){
	document.getElementById("input").value = 0;
}
document.getElementById("seven").addEventListener('click',function(){
	document.getElementById("input").value+='7';
});
document.getElementById("eight").addEventListener('click',function(){
	document.getElementById("input").value+='8';
});
document.getElementById("nine").addEventListener('click',function(){
	document.getElementById("input").value+='9';
});
document.getElementById("four").addEventListener('click',function(){
	document.getElementById("input").value+='4';
});
document.getElementById("five").addEventListener('click',function(){
	document.getElementById("input").value+='5';
});
document.getElementById("six").addEventListener('click',function(){
	document.getElementById("input").value+='6';
});
document.getElementById("one").addEventListener('click',function(){
	document.getElementById("input").value+='1';
});
document.getElementById("two").addEventListener('click',function(){
	document.getElementById("input").value+='2';
});
document.getElementById("three").addEventListener('click',function(){
	document.getElementById("input").value+='3';
});
document.getElementById("zero").addEventListener('click',function(){
	document.getElementById("input").value+='0';
});
document.getElementById("dot").addEventListener('click',function(){
	document.getElementById("input").value+='.';
});
document.getElementById("division").addEventListener('click',function(){
	document.getElementById("input").value+='/';
});
document.getElementById("multiply").addEventListener('click',function(){
	document.getElementById("input").value+='*';
});
document.getElementById("addition").addEventListener('click',function(){
	document.getElementById("input").value+='+';
});
document.getElementById("subtraction").addEventListener('click',function(){
	document.getElementById("input").value+='-';
});
document.getElementById("clear").addEventListener('click',function(){
	document.getElementById("input").value='0';
});
document.getElementById("equals").addEventListener('click',function(){
	var x=document.getElementById("input").value;
	document.getElementById("input").value= eval(x);
});
