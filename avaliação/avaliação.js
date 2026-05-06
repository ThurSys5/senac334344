const ask = require('readline-sync')



// function criarUsuario(nome, idade, cidade, hobbies) {
//   return [nome, idade, cidade, hobbies];
// }

// const usuario = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos"]);
// console.log(usuario);


//  function formatarHobbies(_hobbies){
    // console.log(formatarHobbies);
// }

// let usuario = ["joão", "25", "Porto Alegre", "musica", "jogos", "futebol" ]
// console.log(`ola meu nome é ${usuario[0]}`)


// --------------------------------------------------------------
/*
 function criarUsuario(nome, idade, cidade, hobbies) {
 return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies) {
 return hobbies.join(", ");
}

const usuario = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "futebol"]);

const frase = `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${formatarHobbies(usuario[3])}.`;

console.log(frase);

  
const usuarios = [];

 function adicionarUsuario(lista, usuario) {
   return [lista, usuario]; 
}


function gerarRelatorio(lista) {
  return `Total de usuários: ${lista.length}`;
}

let listaAtualizada = adicionarUsuario(usuarios, { nome: "João" });
listaAtualizada = adicionarUsuario(listaAtualizada, { nome: "Maria" });

console.log(gerarRelatorio(listaAtualizada));
 

*/
/*
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
  return lista.map(u => u.nome);
}

function gerarDescricao(usuario){
  return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}





//------------------------------------------------------


// const usuario = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "futebol"]);

// const frase = `${nomeMaiusculo(usuario[0])} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${formatarHobbies(usuario[3])}.`;

// console.log(frase);

// const usuarios = [];


// let listaAtualizada = adicionarUsuario(usuarios, { nome: "João", idade: 25 });
// listaAtualizada = adicionarUsuario(listaAtualizada, { nome: "Maria", idade: 30 });

// console.log(gerarRelatorio(listaAtualizada));
// console.log(listarDescricoes(listaAtualizada));
//----------------------------------------------------------------------------------------------
/*
// 1 - criar um usuario
const usuario = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "futebol"]);


// 2 - formatar os hobbies deste usuario
const hobbies = ["futebol", "games", "música"];
console.log(formatarHobbies(hobbies));

// 3 - mostrar a descricao desse usuario
console.log(gerarDescricao(usuario));

// 4 - adicionar este usuario no array usuarios
let usuarios = [];
usuarios = adicionarUsuario(usuarios, usuario);

// 5 - mostrar o relatorio do array usuarios
console.log(gerarRelatorio(usuarios));





function criarUsuario(nome, idade, cidade, hobbies) {
  return { nome, idade, cidade, hobbies };
}

function gerarDescricao(usuario){
  return `${usuario.nome} tem ${usuario.idade} anos, mora em ${usuario.cidade} e gosta de ${formatarHobbies(usuario.hobbies)}`;
}

function listarDescricoes(lista) {
  return lista.map(u => u.nome);
}

*/





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
  return lista.map(u => u.nome);
}

function gerarDescricao(usuario){
  return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}

const usuario = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "futebol"]);

const hobbies = ["futebol", "games", "música"];
console.log(formatarHobbies(hobbies));

console.log(gerarDescricao(usuario));

let usuarios = [];
usuarios = adicionarUsuario(usuarios, usuario);

console.log(gerarRelatorio(usuarios));





