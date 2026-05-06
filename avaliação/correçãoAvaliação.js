const ask = require('readline-sync')




function criarUsuario (nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies) {
  return hobbies.join(", ");
} 

function gerarRelatorio(usuario){
  return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
 }

function adicionarUsuario(usuarios, usuario){
  let usuarioAtualizado = [...usuarios, usuario]
  return usuarioAtualizado
}

function gerarRelatorio(usuarios){
  return `total de usuarios:` $
}
let usuarios = []

let user1 = criarUsuario('erick', 20, 'Sapucaia', ['dar pinote', 'beber no posto', 'orar muito'])
usuarios = adicionarUsuario(usuarios, user1)

console.log(user1) 
console.log(formatarHobbies(user1[3]))
console.log(gerarRelatorio(user1))

