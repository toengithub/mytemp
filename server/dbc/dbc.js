
var fs=require('fs');
var file="data/urls.json";


function Dbc(){
    var result=JSON.parse(fs.readFileSync(file));
    return result;
}
module.exports = Dbc;
