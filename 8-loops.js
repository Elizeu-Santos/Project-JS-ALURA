console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador - BH`,
    `São Paulo - SP`,
    `Rio de Janeiro - RJ`,
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Recife";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    
    if(listaDeDestinos[contador] == destino){
    }else{ 
        destinoExiste = true;
        break;
    }
    contador += 1;
} 

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for (let cont = 0 ; cont ; cont < 3 , i++) {
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}