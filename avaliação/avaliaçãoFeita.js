const ask = require('readline-sync')




function criarUsuario(nome, idade, cidade, hobbies) {
  return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies) {
  return hobbies.join(", ");
}

function nomeMaiusculo(nome) {
  return nome.toUpperCase();
}

function adicionarUsuario(lista, usuario) {
  return [...lista, usuario];
}

function gerarRelatorio(lista) {
  return `Total de usuários: ${lista.length}`;
}

function listarDescricoes(lista) {
  return lista.map(u => u[0]); // corrigido aqui
}

function gerarDescricao(usuario){
  return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}

// Usuários
const usuario1 = criarUsuario("Maria", 25, "Porto Alegre", ["música", "jogos", "futebol"]);
const usuario2 = criarUsuario("Jõao", 20, "São Paulo", ["filmes", "dança"]);

// Lista
let usuarios = [];
usuarios = adicionarUsuario(usuarios, usuario1);
usuarios = adicionarUsuario(usuarios, usuario2);


console.log(gerarDescricao(usuario2));
console.log(gerarRelatorio(usuarios));
console.log("Nomes:", listarDescricoes(usuarios));