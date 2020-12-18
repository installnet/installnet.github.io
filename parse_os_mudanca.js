function parse(){
	document.querySelector("#cl_end_ant").innerHTML = prompt("Endereço Antigo: ", "");
	
	window.print();
}

window.onload = setTimeout(function() { parse(); }, 1000);
