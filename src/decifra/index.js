#! /usr/bin/env node

const commander = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-manager');
const frequencia = require('./frequencia')

commander.version(package.decifraVersion);

commander
    .argument('<path>') 
    .argument('<outputPath>')
    .description('Decifra um arquivo txt criptografado utilizando o algoritmo de cesar')
    .action((path, outputPath)=>{/* 
        console.log(`path: ${path}`);
        console.log(`outputPath: ${outputPath}`); */
        let txt = fileManager.readFile(path);
        const decrypt = frequencia.decifraFrequencia(txt);
        fileManager.writeFile(outputPath, decrypt);
    });

commander.parse(process.argv);