//console.log("This is from app.js...");

// var userData= prompt("Hey! Welcome to my page, What's your name?");
// alert('Welcome '+userData);

var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-area");
var txtOutput= document.querySelector("#txt-translated-area");
//const serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
const serverURL="https://api.funtranslations.com/translate/minion.json";
//"https://api.funtranslations.com/translate/pig-latin.json"

// Adding Event listener to the button reference.
btnTranslate.addEventListener('click', translateHandler);

function buildURL(text){
    return serverURL+'?'+'text='+text;

}

function translateHandler(){
    //console.log("Clicked!");
    //console.log(txtInput.value);
    //console.log(txtOutput);
    var input=txtInput.value;

    //build the server call url
    var url = buildURL(input);
    url= encodeURI(url);
    console.log(url)

    //server call
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        txtOutput.innerText=json.contents.translated; //output
    })
    .catch(error => {
        alert("An Error has occured");
        console.log("Error: ",error)
    });
}