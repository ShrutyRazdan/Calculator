// program

const displays=document.getElementById("displays");


function appendToDisplay(input){
    displays.value += input;

}

function clearDisplay(){
    displays.value="";

}


function calculate(){
    try{

    
    displays.value=eval(displays.value);
    }
    catch(error){
        displays.value ="Error";
    }
}