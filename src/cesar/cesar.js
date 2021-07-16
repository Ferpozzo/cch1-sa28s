var cesar = function (file, deslocamento, option) {
  const caracteresAceitos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const tamanhoAsc = 128
  let textoFinal = ''
  txt = file
  if (option === 'c') {
    //Retirar os acentos
    txt = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    for (let letra of txt) {
      if (caracteresAceitos.includes(letra)) {
        let asc = 0
        asc = letra.charCodeAt(0)
        let ascNovaLetra = (asc + deslocamento)
        let novaLetra = String.fromCharCode(ascNovaLetra)
        textoFinal = textoFinal.concat(novaLetra)
      } else {
        textoFinal = textoFinal.concat(letra)
        //console.log('Não codifico: ' + letra)
      }
    }
  } else if (option === 'd') {
    for (let letra of txt) {
      let x = String.fromCharCode((letra.charCodeAt(0) - deslocamento) % tamanhoAsc)
      if (caracteresAceitos.includes(x)) {
        let asc = 0
        asc = letra.charCodeAt(0)
        let ascNovaLetra = (asc - deslocamento) % tamanhoAsc
        let novaLetra = String.fromCharCode(ascNovaLetra)
        textoFinal = textoFinal.concat(novaLetra)
      } else {
        textoFinal = textoFinal.concat(letra)
        //console.log('Não decifro: ' + letra)
      }
    }
  } else {
    throw new Error("Opção inválida: " + option)
  }
  return textoFinal;
};

module.exports = {
  cesar,
};