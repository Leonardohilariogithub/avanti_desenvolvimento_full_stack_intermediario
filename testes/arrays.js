// Declarando um array
let frutas = ["Maçã", "Banana", "Laranja", "Manga"];

// Exibindo todas as frutas
console.log("Lista de frutas:", frutas);

// Adicionando uma nova fruta ao final do array
frutas.push("Uva");
console.log("Após adicionar Uva:", frutas);

// Removendo a última fruta
frutas.pop();
console.log("Após remover a última fruta:", frutas);

// Adicionando uma nova fruta ao início do array
frutas.unshift("Melancia");
console.log("Após adicionar Melancia no início:", frutas);

// Removendo a primeira fruta
frutas.shift();
console.log("Após remover a primeira fruta:", frutas);

// Acessando uma fruta pelo índice
console.log("Fruta no índice 1:", frutas[1]);

// Alterando o valor de um item do array
frutas[2] = "Abacaxi";
console.log("Após alterar o índice 2 para Abacaxi:", frutas);

// Percorrendo o array com um loop
console.log("Lista completa usando forEach:");
frutas.forEach((fruta, index) => {
  console.log(`Índice ${index}: ${fruta}`);
});