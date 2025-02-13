import fs from 'fs'
import { yarg } from './config/plugins/args.plugin';


const {b:base, l:limit, s: showTable} = yarg
let outputMessage = '';
const headerMessage = `
=================================\n
        tabla del ${ base }
=================================\n`
for(let  i = 1; i <= Number(limit); i++){
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`
}
outputMessage = headerMessage + outputMessage;
if(showTable){
    console.log(outputMessage)
}

const outputsPath = 'outputs';
fs.mkdirSync(outputsPath, {recursive: true})
fs.writeFileSync(`outputs/tabla-${ base }.txt`, outputMessage);
console.log('File created: ');