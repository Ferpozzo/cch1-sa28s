const gerarChave = (texto) => {

	var key = '', len = texto.length

	for (var i = 0; i < len; i++) {
		key += ~~((Math.random() * 10) - 1)
	}
	return key
}
const cifra = (texto, key) => {
	if (key.length != texto.length) {
		throw "A chave e o texto precisam ter o mesmo tamanho"
	}
	textoCifrado = ''
	len = texto.length
	for (var i = 0; i < len; i++) {
		textoCifrado += xor(texto.charCodeAt(i), key[i])
	}
	return textoCifrado
}
const decifra = (textoCifrado, key) => {

	var textoDecifrado = '', key = key.split(''), len = textoCifrado.length

	for (var i = 0; i < len; i++) {
		textoDecifrado += xor(textoCifrado.charCodeAt(i), key[i])
	}

	return textoDecifrado
}
function xor(char, key) {
	return String.fromCharCode(char ^ key)
}
module.exports = {
	cifra,
	decifra,
	gerarChave
}