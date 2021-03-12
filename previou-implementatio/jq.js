//------------JQUERY----------------

$(document).ready(function(){
var num = 0;
var string1 = "DIA 0";
var string2 = "DIA ";
var texto = "";
$('.celula h1').each(function(){
	texto = string2;
	if(num < 9){
		 texto = string1;
	}
			num = num + 1;
			texto += num;
			$(this).text(texto);
});
	
});