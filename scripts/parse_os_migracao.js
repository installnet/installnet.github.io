function parse(){	
	const MESES = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
  	
	//var cl_nome = document.querySelector("#cl_nome").innerHTML.toUpperCase();
	var cl_mes = MESES[parseInt(document.querySelector("#mes").innerHTML) - 1];
  
	var cl_recibo = prompt("RECIBO: ", "");
  
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_RECIBO]]", cl_recibo);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_MES]]", cl_mes.toLowerCase());
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_RECIBO]]", cl_recibo);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_MES]]", cl_mes.toLowerCase());
  
	//document.title = cl_nome + ' - RECIBO';
	//document.querySelector("#pdf_os").style.display = "none";
	//document.querySelector("#pdf_recibo").style.display = "block";
	window.print()
	
	//document.title = cl_nome;
	//document.querySelector("#pdf_os").style.display = "block";
	//document.querySelector("#pdf_recibo").style.display = "block";
	//window.print()
}

window.onload = setTimeout(function() { parse(); }, 1000);
