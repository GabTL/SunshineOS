// Translate //
const selector = document.getElementById("translate-text")
let currentLanguage = "FR";
let translates = {};

document.getElementById("translate").addEventListener("click", trs)

function trs() {

    if(currentLanguage === "FR"){
        currentLanguage = "EN";
        selector.innerHTML = "EN"
    }
    else{ if(currentLanguage === "EN"){
        currentLanguage = "ES";
        selector.innerHTML = "ES"}
        else{
       currentLanguage = "FR";
       selector.innerHTML = "FR"}}
}


// Translate//