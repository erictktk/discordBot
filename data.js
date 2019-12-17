const pubgApi = require("pubg-api.js");

const username = "";
const password = "";

const con = mysql.createConnection({host: "localhost", user: username, password: password});

con.connect( (err) => {
    if(err) throw err;
    console.log("Connected!");
});


funct

function addToDatabase(username){
    //var statement = "CREATE TABLE " + username + " (kills INT(255), dbno INT(255), assists INT(255), headshot FLOAT, rank INT(255), time INT )";

    

    con.query("CREATE TABLE username = ?",
    [
        req.body.username
    ],
    function(error, results){

    }
};

function updateTables(){

}