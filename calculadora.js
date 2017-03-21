//ENTRADA DE NUMEROS Y OPERACIONES A TRAVES DE LA INTERFAZ
function c(val){
	document.getElementById("display").value = val;
}
function math(val){
	document.getElementById("display").value += val;
}
function e(){
	try{
		c(eval(document.getElementById("display").value));
	}catch(e){
		c('error');
	}
}

function raizc() {
	x=Math.sqrt(document.getElementById("display").value); 
	c(display.innerHTML=x);
}
function porcent() { 
    x=document.getElementById("display").value/100 
    c(display.innerHTML=x); 
}
function opuest() { 
    nx=Number(document.getElementById("display").value); 
    console.log(nx);
 	nx=-nx; 
    x=String(nx); 
    c(display.innerHTML=x);
}
function inve() {
    nx=Number(document.getElementById("display").value);
    nx=(1/nx);
    x=String(nx);		 
    c(display.innerHTML=x);
}
function cua() {
	x=Math.pow(document.getElementById("display").value, 2);   
    c(display.innerHTML=x);
}


//ENTRADA DE NUMEROS Y OPERACIONES A TRAVES DEL TECLADO
$(document).keydown(function(a){
	console.log(a);
	resultado = $("display").val();
	key = (a.keyCode);
	console.log(key);
	//TECLAS CORRESPONDIENTES A NUM
	if (key == 40){ //parentesis
		resultado = resultado+'(';
		$("display").val(resultado)
	}
	if (key == 41){ //parentesis
		resultado = resultado+')';
		$("display").val(resultado)
	}
	if (key == 48){
		resultado = resultado+'0';
		$("display").val(resultado)
	}
	if (key == 49){
		resultado = resultado+'1';
		$("display").val(resultado)
	}
	if (key == 50){
		resultado = resultado+'2';
		$("display").val(resultado)
	}
	if (key == 51){
		resultado = resultado+'3';
		$("display").val(resultado)
	}
	if (key == 52){
		resultado = resultado+'4';
		$("display").val(resultado)
	}
	if (key == 53){
		resultado = resultado+'5';
		$("display").val(resultado)
	}
	if (key == 54){
		resultado = resultado+'6';
		$("display").val(resultado)
	}
	if (key == 55){
		resultado = resultado+'7';
		$("display").val(resultado)
	}
	if (key == 56){
		resultado = resultado+'8';
		$("display").val(resultado)
	}
	if (key == 57){
		resultado = resultado+'9';
		$("display").val(resultado)
	}
	if (key == 190){
		resultado = resultado+'.';
		$("display").val(resultado)
	}


	//TECLAS CORRESPONDIENTES A LAS OPERACIONES
	if (key == 106){ //multiplicar
		$("numero1").val(resultado);
		$("resultado").val('');
		$("action").val('3');
	}
	if (key == 107){ //suma
		$("numero1").val(resultado);
		$("resultado").val('');
		$("action").val('1');
	}
	if (key == 111){ //dividir
		$("numero1").val(resultado);
		$("resultado").val('');
		$("action").val('4');
	}
	if (key == 109){//restar
		$("numero1").val(resultado);
		$("resultado").val('');
		$("action").val('2');
	}
	if (key == 110){//limpiar
		$("numero1").val('');
		$("numero2").val('');
		$("resultado").val('');
		$("action").val('');
	}
	//SI PRESIONO ENTER O EL ESPACIO
	if (key == "13"){
		$("numero2").val(resultado);
		$("display").val();
		numero1=parseFloat($("numero1").val());
		numero2=parseFloat($("numero2").val());
		action = $("action").val();


		if (action==1){
			resultado = (numero1 + numero2);
		}
		if (action==2){
			resultado = (numero1 - numero2);
		}
		if (action==3){
			resultado = (numero1 * numero2);
		}
		if (action==4){
			resultado = (numero1 / numero2);
		}
		$("display").val(resultado);
	}
});