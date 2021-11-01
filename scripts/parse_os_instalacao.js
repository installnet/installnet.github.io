function parse(){
	String.prototype.extenso = function(c){
	    var ex = [
		["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
		["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
		["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
		["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
	    ];
	    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
	    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
		j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
		if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
		for(a = -1, l = v.length; ++a < l; t = ""){
		    if(!(i = v[a] * 1)) continue;
		    i % 100 < 20 && (t += ex[0][i % 100]) ||
		    i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
		    s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
		    ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
		}
		a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
		a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
	    }
	    return r.join(e);
	}
	
	const MESES = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
	
	var cl_nome = document.querySelector("#cl_nome").innerHTML.toUpperCase();
	document.title = cl_nome;
	
	var cl_id = document.querySelector("#cl_id").innerHTML;
	var cl_mes = MESES[parseInt(document.querySelector("#mes").innerHTML) - 1];
	var cl_group_name = document.querySelector("#cl_group_name").innerHTML;
	cl_group_name = cl_group_name.substring(0, cl_group_name.length - 2)
	var cl_dia_vencimento = document.querySelector("#cl_dia_vencimento").innerHTML;
	var cl_instalacao = document.querySelector("#os_price").innerHTML;
	var cl_pontos = cl_group_name.split('|').length;
	
	var cl_contrato = "100" + cl_id;
	var cl_extenso = prompt("VALOR POR EXTENSO: ", (parseFloat(cl_instalacao)).toString().extenso().toUpperCase());
	var cl_estado = prompt("CPF SSP/?: ", "AL");
	var cl_desc_instalacao = prompt("DESCRICAO DA INSTALACAO: ", "Instalação no valor de R$"+cl_instalacao+" com roteador do cliente.");
	var cl_wifi = prompt("REDE WIFI: ", cl_nome+" (INSTALLNET)");
	var cl_wifi_senha = prompt("SENHA WIFI: ", "12345678");
	var cl_recibo = prompt("RECIBO: ", "");
	
	if(cl_dia_vencimento == "10"){
		document.querySelector("#venc10").innerHTML = "X";
		document.querySelector("#venc10_2").innerHTML = "X";
	}
	else if(cl_dia_vencimento == "15"){
		document.querySelector("#venc15").innerHTML = "X";
		document.querySelector("#venc15_2").innerHTML = "X";
	}
	else if(cl_dia_vencimento == "20"){
		document.querySelector("#venc20").innerHTML = "X";
		document.querySelector("#venc20_2").innerHTML = "X";
	}
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_CONTRATO]]", cl_contrato);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_GROUP_NAME]]", cl_group_name);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_INSTALACAO]]", cl_instalacao);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_INSTALACAO_EX]]", "("+cl_extenso+")");
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_CONTRATO]]", cl_contrato);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_ESTADO]]", cl_estado);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_GROUP_NAME]]", cl_group_name);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_PONTOS]]", cl_pontos);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_INSTALACAO]]", cl_instalacao);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_DESC_INSTALACAO]]", cl_desc_instalacao);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_PONTOS]]", cl_pontos);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_MES]]", cl_mes);
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_CONTRATO]]", cl_contrato);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_ESTADO]]", cl_estado);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_GROUP_NAME]]", cl_group_name);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_PONTOS]]", cl_pontos);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_INSTALACAO]]", cl_instalacao);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_DESC_INSTALACAO]]", cl_desc_instalacao);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_PONTOS]]", cl_pontos);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_MES]]", cl_mes);
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_WIFI]]", cl_wifi);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_WIFI_SENHA]]", cl_wifi_senha);
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_WIFI]]", cl_wifi);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_WIFI_SENHA]]", cl_wifi_senha);
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_GROUP_NAME]]", cl_group_name);
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_RECIBO]]", cl_recibo);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_MES]]", cl_mes.toLowerCase());
	
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_RECIBO]]", cl_recibo);
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace("[[CL_MES]]", cl_mes.toLowerCase());
	
	document.title = cl_nome + ' - CONTRATO';
	//document.querySelector("#pdf_contrato").style.display = "block";
	document.querySelector("#pdf_imprimir").style.display = "none";
	document.querySelector("#pdf_recibo").style.display = "none";
	window.print()
	
	document.title = cl_nome + ' - RECIBO';
	document.querySelector("#pdf_contrato").style.display = "none";
	//document.querySelector("#pdf_imprimir").style.display = "none";
	document.querySelector("#pdf_recibo").style.display = "block";
	window.print()
	
	document.title = cl_nome;
	//document.querySelector("#pdf_contrato").style.display = "none";
	document.querySelector("#pdf_imprimir").style.display = "block";
	//document.querySelector("#pdf_recibo").style.display = "block";
	window.print()
	
	document.querySelector("#pdf_contrato").style.display = "block";
	document.querySelector("#pdf_imprimir").style.display = "block";
	document.querySelector("#pdf_recibo").style.display = "block";
}
window.load = setTimeout(function(){parse()}, 1000);
//document.querySelector("#print_button").onclick = function(){window.print();};
