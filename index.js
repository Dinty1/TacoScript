/*
TacoScript
V1.1.0
By DintyB

Available functions:
    eat <item>
    glorify <item>
    tacotale
    tacoprint <text>
*/


//Config Variables
//script file
const scriptpath = 'index.taco';


const fs = require('fs');

const script = fs.readFileSync(scriptpath, "utf-8");

var commands = script.split(';');

for(i = 0; i < commands.length; i++){
    console.log(runcommand(commands[i]));
}

function runcommand(rawcommand){
    let command = rawcommand.trim().split(' ');
    switch(command[0]){
        case 'eat':
            if(command[1] === 'taco' || command[1] === 'tacos') return 'Nom Nom Taco Tasty'
            else if(command[1]) return 'You may only eat taco'
            else return error(rawcommand);
        case 'glorify':
            if(command[1] === 'taco' || command[1] === 'tacos') return 'All Hail Taco!'
            else if(command[1]) return 'How dare you not glorify the sacred taco!'
            else return error(rawcommand);
        case 'tacotale':
            return 'Once upon a time, there was a taco. One day, it got eaten by a very hungry server owner. The end.'
        case 'tacoprint':
            let text = command.slice(1).join(' ');
            if(command[1]) return text;
            else return error(rawcommand);
        default:
            if(rawcommand.trim() !== '' && rawcommand.trim() !== ';') return error(rawcommand)
            else return '';
    }
}

function error(cmd){
    console.log(`Error while running function "${cmd}". No, I don't know what the error is. Go look for it yourself.`);
}