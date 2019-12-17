var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    //test this
    //client.channels.get('CHANNEL ID').send('Hello here!');
});

var shitListString = "Shit List: \n";
/*
bot.sendMessage( {
    to: channelID,
    message: shitListString
});*/

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        console.log( args );

        args = args.splice(1);
        lowerCmd = cmd.toLowerCase();
        switch(lowerCmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!' + ' ' + String(channelID) + ' ' + lowerCmd
                });
                break;
            case 'start':
                start(channelID);
                break;
            case 'list':
                bot.sendMessage({
                    to: channelID,
                    message: ''
                });
                break;
            case 'sus':
                handleSuspicious(args);
                break;
            case 'suspect':
                handleSuspicious(args);
                break;
            case 'shit':
                handleShit(args);
                break;
            case 'shitlist':
                handleShit(args);
                break;
            case 'confirm':
                handleConfirm(args);
                break;
            // Just add any case commands if you want to..
         }
     }
});

//function searchForMessage(channelID)
function start(channelID){
    bot.setMessage({
        to: channelID,
    })
}

//the way it works 
// ! denotes do something, keyword  sus
// setup does the string so the string should be
// no character that == ,
// SuspectedList: name, name


//add player: test if already in the thing

function MessageObj(){
    this.string = "";
}

function addPlayerName(listName, existingString, name, messageObj){
    if (name.includes(',')){
        messageObj.string = 'Name is invalid!';
        return existingString;
    }

    if (existingString.includes(name)){
        messageObj.string = 'Name already exists in ' + listName + '!';
        return existingString;
    }

    existingString += ', name';

    messageObj.string = 'Player ' + ' added to ' + listName + ' list!';

    return existingString;
}



function handleSuspicious(args){
    //args is all the shit after '!'
    if (args.length == 1){
        // messageString is a list of all suspected users
        var messageString = "";

        bot.setMessage({
            to: ChannelID,
            message: messageString
        });
    }
    else if (args.length > 1){
        if (args.length == 2){
            //add player here
            //test if 
        }
        else if(args.length == 3){
            var option = args[2];
            if (option == 'remove'){
                // do something
            }
        }
    }
};


function handleConfirm(args){

}

function handleShit(args){

}