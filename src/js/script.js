// JavaScript

// Cadastro user
var nome = prompt('Digite seu nome:');
var sobrenome = prompt('Digite seu sobrenome:');

if (nome == "") {
    alert("Nome obrigatório");
    var nome = prompt("Insira seu nome: ");
}
else if (sobrenome == "") {
    alert("Sobrenome obrigatório");
    var sobrenome = prompt("Insira seu sobrenome: ");
} 
else {
    alert("Cadasto completo! Acesse o console para mais detalhes.");
}
console.log("Nome do usuário: " + nome);
console.log("Sobrenome do usuário: " + sobrenome);

alert('Olá, ' + nome + " " + sobrenome + '! Agora vamos aos vinhos...');

// Cadastro elemento 
var nomeVinho = prompt('Qual o nome do vinho?');

if (nomeVinho == "") {
    alert("O nome do vinho é obrigatório");
    var nomeVinho = prompt("Insira o nome do vinho: ");
}

var tipoVinho = prompt('Qual o tipo do vinho? (Tinto, Branco ou Rosé)');

while (tipoVinho === null || tipoVinho.trim() === "") {
    tipoVinho = prompt("Por favor, digite o tipo do vinho:");
}

tipoVinho = tipoVinho.trim().toLowerCase(); // para faciliar minusculo/maiusculo

if (tipoVinho === "tinto") {
    alert("Vinho Tinto");
} 
else if (tipoVinho === "branco") {
    alert("Vinho Branco");
} 
else if (tipoVinho === "rosé" || tipoVinho === "rose") { 
    alert("Vinho Rosé");
} 
else {
    alert("Tipo inválido! Só aceitamos: Tinto, Branco ou Rosé... Tente de novo.");
    var tipoVinho = prompt('Por favor, digite o tipo do vinho:')
}

//================================================================//

var safraVinho = prompt('Qual o ano do vinho?');

while (safraVinho === null || safraVinho.trim() === "" || isNaN(safraVinho)) {
    safra = prompt("Digite um ano válido para a safra:");
  }
  safraVinho = parseInt(safraVinho);

  let classificacao;                                      
  if (safraVinho >= 2020) {
    classificacao = "Vinho jovem";
  } 
  else if (safraVinho >= 2015) {
    classificacao = "Vinho amadurecido";
  } 
  else {
    classificacao = "Vinho antigo";
  } 

var quantidadeVinho = prompt('Qual sua quantidade no estoque?');

while (quantidadeVinho === null || quantidadeVinho.trim() === "" || isNaN(quantidadeVinho)) {
    quantidadeVinho = prompt("Digite uma quantidade válida:");
  }
  quantidadeVinho = parseInt(quantidadeVinho);

  let estoque = "Estoque adequado";
  if (quantidadeVinho <= 5) {
    estoque = "Estoque BAIXO";
  }

//=================================================================//

// Alerta finalização
alert("Cadastro realizado! Veja os detalhes no console.");

// Exibir console
console.log("Usuário: " + nome + " " + sobrenome);
console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo do vinho: " + tipoVinho);
console.log("Sua Safra: " + safraVinho);
console.log("Classificação do vinho: " + classificacao);
console.log("Quantidade no estoque: " + quantidadeVinho);
console.log("Situação que estoque se encontra: " + estoque);