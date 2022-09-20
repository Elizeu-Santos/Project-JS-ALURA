console.log(`Trabalhando com listas`);
// const buenosAires = `Buenos Aires - PE`;
// const Recife = `Recife - PE`;
// const rioDeJaneiro = `Rio de Janeiro - RJ`;

const listaDeDestinos = new Array(
    `Salvador - BH`,
    `São Paulo - SP`,
    `Rio de Janeiro - RJ`,
);

listaDeDestinos.push(`Curitiba - PR`); //adicionando um item na lista
console.log("Destinos possíveis:");
// console.log(buenosAires, Recife, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);