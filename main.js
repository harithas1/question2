const countries = ["India", "USA", "Mexico", "South Africa", "Brazil"];

const states = [];
states[0] = ["Andhra Pradesh", "Telangana", "Kerala", "Goa", "Tamil Nadu"];
states[1] = ["California", "Texas", "Florida", "New York", "Illinois"];
states[2] = ["Jalisco", "Nuevo León", "Mexico City", "Puebla", "Guanajuato"];
states[3] = ["Gauteng", "KwaZulu-Natal", "Western Cape", "Eastern Cape", "Limpopo"];
states[4] = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Paraná"];


const countryElement = document.getElementById("country")
const stateElement = document.getElementById("state")


window.onload = function(){

    fillCountries()
    getStatesForCountry(countryElement[0].value)

    countryElement.onchange =  function(){
        getStatesForCountry(countryElement.value)
    }

}



function fillCountries(){
    for(let i = 0; i<countries.length; i++){
        const element = countries[i];
        countryElement.options[i] = new Option(element,element)
    }
}

function getStatesForCountry(country){
    const stateList = states[countries.indexOf(country)]
    for(let i = 0; i<stateList.length;i++){
        const element = stateList[i]
        stateElement.options[i] = new Option(element,element)
    }
}
