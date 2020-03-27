var dados = {
	"empregados": [

		{ "nome": "Joao", "telefone": "1111-1111" },

		{ "nome": "Maria", "telefone": "2222-2222" },

		{ "nome": "Luiz", "telefone": "3333-3333" },

		{ "nome": "Paula", "telefone": "4444-4444" },

		{ "nome": "Belicio", "telefone": "5555-5555" },

		{ "nome": "Fulando", "telefone": "6666-6666" }

	]
};




var letras = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

	"A", "B", "C", "D", "E", "F");

function getHexa(inteiro) {

	resto = inteiro % 16;

	quociente = (inteiro - resto) / 16;

	return letras[quociente] + letras[resto];

}

function getCor(r, g, b) {

	return "#" + getHexa(r) + getHexa(g) + getHexa(b);

}

var lista = document.querySelector("#lista");

var texto = document.querySelector("#nome");

function adicionar() {

	var node = document.createElement("LI");

	var textnode = document.createTextNode(texto.value);

	node.appendChild(textnode);

	lista.appendChild(node);

	texto.value = "";

	texto.focus();

}

var table = document.querySelector("#table");

for (i = 0; i < dados.empregados.length; i++) {

	var nome = dados.empregados[i].nome;

	var telefone = dados.empregados[i].telefone;

	var line = document.createElement("tr");

	var cell1 = document.createElement("td");

	var cell2 = document.createElement("td");

	var nome = document.createTextNode(nome);

	var telefone = document.createTextNode(telefone);

	cell1.appendChild(nome);

	cell2.appendChild(telefone);

	line.appendChild(cell1);

	line.appendChild(cell2);

	table.appendChild(line);

}

var body = document.getElementsByTagName(body);

(body).ready(function () {

	$(".dados:odd").css("background-color", "yellow");

	$(".dados:even").css("background-color", "lightgray");

});

var lista = document.querySelector("#alvo");

for (i = 0; i < dados.empregados.length; i++) {

	var contato = dados.empregados[i].nome + " :: " + dados.empregados[i].telefone;

	var novoElemento = document.createElement("LI");

	var texto = document.createTextNode(contato);

	novoElemento.appendChild(texto);

	lista.appendChild(novoElemento);

}

function exibir() {

	$("#lineP").fadeIn("slow");

	$(".par").fadeOut("slow");

}

