/*
TacoScript
V1.0.0
By DintyB

Available functions:
    eat <item>
    glorify <item>
    tacotale
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
        default:
            return '';
    }
}

function error(cmd){
    console.log(`Error while running command "${cmd}"`);
}