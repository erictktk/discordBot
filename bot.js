const Discord = require("discord.js");
const dataGetter = require("dataGetter.js");

const bot2 = require("bot2.js");

const bot = new DiscordClient();
const confg = require("./auth.json");
var messageKey = "opwerwemvww0erdsfsz";

// #region Bot Stuff
bot.on( "ready", ()=> 
    {
        bot.user.SetActivity('Serving ${cleint.guids.size} servers');
    }
);

bot.on( "message", async message =>
    {
        if( message.author.bot) return; // ignore others bot

        if( message.content.substring(0,1) == "!"){
            var args = message.substring(1).split(' ');
            var cmd = args[0];

            author = message.author;

            console.log(author);

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
                case 'suspect':
                    handleSus(args, author);
                    break;
                case 'shit':
                    handleShit(args);
                    break;
                case 'confirmed':
                    handleConfirm(args);
                    break;
                case 'testest':
                    message.author.send("testing");
                case 'saltbot':
                    handleSaltbot(args, message);
                default:
                    break;
            }
        }
    }  
); 
//#endregion

function handleSaltbot(args){
    if (args.length == 1){
        var messageString = "You've pinged the PUBG Saltbot.  Use the command '-h' to get a list of other commands."
    }
    if (args.length == 2){
        if (args[1] == '-h' || args[1] == "-help"){
            var messageString = "PUBG Saltbot help.  \nHere is a list of commands you can use:";
            messageString += "\n!suspect    See list of players who you suspect of cheating.  To add: !suspect playername  To remove: !suspect playername remove";
            messageString += "\n!confirmed      See list of players who were banned from the game,  To add: !confirmed playername  To remove: !confirmed playername remove (shouldn't do this)";
            messageString += "\n!shit       See list of players who have been deemed gay, retarded etc... Same rules as above";
            //messageString += 
        }

    }
}

//mainstring has title; shitlist; suspect; confirm; options;

// #region Get Stuff From Channel
function editPinnedString(obj){
    //get pinned message
    JSON.Stringify(obj);
}

function getPinnedMessage(){
    //getPinnedMessage
}
// #endregion 

class MessageObj{
    constructor(theString){
        this.theString = theString;
    }
}
//#region Permission List
//returns JSON object
function addToPermissionList(authorName, name, mainString){
    if (authorName != "personperson"){
        return;
    }

    var obj = JSON.parse(mainString);

    var permissionList = obj['options']['permissionList'];
    var messageObj = new MessageObj();
    
    addPlayerNameToList(authorName, "listName", permissionList, name, messageObj, false);

    obj['options']['permissionList'] = permissionList;
}

function getPermissionList(mainString){
    var obj = JSON.parse(mainString);
    
    return obj['options']['permissionList'];
}

function testIfPlayerHasPermission(mainString, name){
    var permissionList = getPermissionList(mainString);

    if (permissionList.includes(name)){
        return true;
    }
    else{
        return false;
    }
}

exports.addToPermissionList = addToPermissionList;
exports.getPermissionList = getPermissionList;
//#endregion


//#region AddToLists
function addPlayerNameToList(authorName, listName, arr, name, messageObj, testForPermission = true){
    if (name.includes(',') || name.includes(';') || name.includes("'") || name.includes('"')){
        messageObj.string = 'Name is invalid!';
        return arr;
    }

    if (existingString.includes(name)){
        messageObj.string = 'Name already exists in ' + listName + '!';
        return arr;
    }

    if (testForPermission){
        var bool = testIfPlayerHasPermission(mainString);
        if (bool == false){
            messageObj.string = authorName + " doesn't have permission to add to " + listName + "!";
            return arr;
        }
    }

    arr.push(name);
    messageObj.string = 'Player ' + ' added to ' + listName + ' list!';
    return arr;
}

function addToSuspectList(author, name, mainString){
    var arr = JSON.parse(mainString)['SuspectList'];
    return addPlayerNameToList(authorName, "SuspectList", arr, name, messageObj)
}

function addToShitList(authorName, name, mainString, messageObj){
    var arr = JSON.parse(mainString)['ShitList'];
    return addPlayerNameToList(authorName, "ShitList", arr, name, messageObj)
}

function addToConfirmedKills(authorName, name, mainString, messageObj){
    var arr = JSON.parse(mainString)['ConfirmedList'];
    return addPlayerNameToList(authorName, name, mainString, messageObj);
    
}

exports.addToSuspectList = addToSuspectList;
exports.addTOShitList = addToShitList;
exports.addToConfirmedKills = addToConfirmedKills;
//#endregion

//needs to be tested with integrated tests
function getMessage(channel){
    channel.fetchPinnedMessages()
    .then( messages => {
        for( m of messages){
            if (m.author == bot){
                console.log("found pinned message!");
                return m;
            }
        }
        return null;
    });
}

// #region handling lists
function handle(args, message, listName){
    var authorName = message.author;
    if (args.length == 1){
        var messageString = "";

        
        bot.send
    }
}

function handleSus(args){
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
        }
        else if(args.length == 3){
            var option = args[2];
            if (option == 'remove'){
                // do something
            }
        }
    }
};
// #endregion

var mainString = '{"Title": "ShitListBot", "SuspectList": ["Gary521", "ChinaGuy1"], "ShitList": [], "ConfirmedList" : ["NiceGuy453"], "options":{"needPermission": true, "pingCooldown:" 60, "lastPing" : {} }'
    var mainObj = JSON.parse(mainString);
    mainObj['options']['permissionList'] = permissionList;

function start(message){
    var startString = "Salt bot started!";

    var mainObj = {"Title": "PUBG Saltbot"};
    mainObj["SuspectList"] = [];
    mainObj["ConfirmedList"] = [];
    mainObj["ShitList"] = [];
    var d = new Date();
    var now = d.now();
    var lastPing = {"sus": now-60*1000, "confirmed" }
    mainObj["options"] = {"needPermission": false, "pingCooldown": 60};
    
}

//#region Get ADR
export function getADR(playerString){
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if( request.readyState == 4 && request.status==200){
            scrapeOPDoc(request.responseText);
        }

    }

    request.open("GET", "http://localhost:5000/home");
    request.send(null);
}

exports.getADR = getADR;