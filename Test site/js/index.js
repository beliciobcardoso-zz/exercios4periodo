var dados = {
	"empregados": [

		{ "nome": "Joao", "telefone": "1111-1111", "email": "joao@gmail.com" },

		{ "nome": "Maria", "telefone": "2222-2222", "email": "maria@hotmail.com" },

		{ "nome": "Luiz", "telefone": "3333-3333", "email": "luiz@dados.com.br" },

		{ "nome": "Paula", "telefone": "4444-4444", "email": "paula@yahoo.com.br" },

		{ "nome": "Belicio", "telefone": "5555-5555", "email": "belloinfo@gmail.com" },

		{ "nome": "Fulando", "telefone": "6666-6666", "email": "fulando@uol.com.br" },

		{ "nome": "Beltrano", "telefone": "7777-7777", "email": "beltrano@terra.com.br" }

	]
};

var tbody = document.querySelector("tbody");

for (i = 0; i < dados.empregados.length; i++) {

	var nome = dados.empregados[i].nome;

	var telefone = dados.empregados[i].telefone;

	var email = dados.empregados[i].email;

	var input = document.createElement("input");

	input.type = "checkbox";

	var line = document.createElement("tr");

	var cell1 = document.createElement("td");

	var cell2 = document.createElement("td");

	var cell3 = document.createElement("td");

	var cell4 = document.createElement("th");

	var nome = document.createTextNode(nome);

	var telefone = document.createTextNode(telefone);

	var email = document.createTextNode(email);

	var checkin = document.createTextNode(checkin);

	cell1.appendChild(nome);

	cell2.appendChild(telefone);

	cell3.appendChild(email);

	cell4.appendChild(input);

	line.appendChild(cell1);

	line.appendChild(cell2);

	line.appendChild(cell3);

	line.appendChild(cell4);

	tbody.appendChild(line);

}

function zebraTabela() {

	$("tbody tr:odd").css("background-color", " #eaedf0	");

	$("tbody tr:even").css("background-color", "lightgray");

};

function exibir() {

	$("#lineP").fadeIn("slow");

	$(".par").fadeOut("slow");

};

$(function () {
	$("#data1").datepicker();
});

$(function () {

	$("#menu1").menu();

	$("#dialogo1").dialog({

		autoOpen: false,

		show: {
			effect: "blind", duration: 1000

		},

		hide: {
			effect: "explode", duration: 100

		}

	});

	$("#estacio").click(function () {

		location.href = "http://www.estacio.br";

	});

	$("#harvard").click(function () {

		location.href = "http://www.harvard.com/";

	});

	$("#abreDialogo").click(function () {

		$("#dialogo1").dialog("open");

	});

});