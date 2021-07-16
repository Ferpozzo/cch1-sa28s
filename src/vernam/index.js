#! /usr/bin/env node

const commander = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-manager');
const vernam = require('./vernam')
commander.version(package.vernamVersion);

commander
    .argument('<keyPath>')
    .argument('<path>')
    .argument('<outputPath>')
    .description('Cifra e decifra um texto de um arquivo txt usando algoritmo de vernam')
    .option('-c', 'Opção que cifra o texto a partir do arquivo .txt')
    .option('-d', 'Opção que decifra o texto a partir do arquivo .txt já cifrado')
    .description('Roda o algoritmo de cifra para um arquivo txt')
    .action((keyPath, path, outputPath, options) => {
        if (options.c == true && options.d == true) {
            console.log('Escolha apenas uma opção por vez (-c ou -d)');
            return;
        } else if (options.c == null && options.d == null) {
            console.log('A opção de decifrar -d ou cifrar -c é obrigatória (-d ou -c)');
        } else {
            let txt = fileManager.readFile(path);
            txt = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if (options.c === true) {
                let chave = vernam.gerarChave(txt);
                fileManager.writeFile(keyPath, chave);/* 
                console.log(vernam.cifra(txt, chave)); */
                fileManager.writeFile(outputPath, vernam.cifra(txt, chave));
            } else if (options.d === true) {
                let chave = fileManager.readFile(keyPath);/* 
                console.log(chave);
                console.log(txt);
                console.log(vernam.decifra(txt, chave)); */
                fileManager.writeFile(outputPath, vernam.decifra(txt, chave));
            } else {
                throw "Alguma das opções está inválida";
            }
        }

    });

commander.parse(process.argv);