// Lista de números
let numeros = [1, 2, 3, 4, 5];

// Usando a estrutura de repetição 'for'
console.log("Usando o loop 'for':");
for (let i = 0; i < numeros.length; i++) {
  console.log(`Número ${numeros[i]}`);
}

// Usando a estrutura de repetição 'while'
console.log("\nUsando o loop 'while':");
let index = 0;
while (index < numeros.length) {
  console.log(`Número ${numeros[index]}`);
  index++;
}

// Usando a estrutura de repetição 'do...while'
console.log("\nUsando o loop 'do...while':");
index = 0; // Reiniciando o índice
do {
  console.log(`Número ${numeros[index]}`);
  index++;
} while (index < numeros.length);
