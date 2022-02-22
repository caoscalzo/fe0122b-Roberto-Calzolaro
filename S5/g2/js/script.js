let budget = 2000;


while (budget > 0) {
    let numeroCasuale = (Math.floor(Math.random() * 21) +1);
 

    if(budget >=numeroCasuale){
        budget -= numeroCasuale;
        
    }else{
        break
    }
    document.querySelector("p").innerHTML += "hai speso: " + numeroCasuale + " ti rimangono:" + budget + "<br>";

    console.log("Ti rimangono: " + budget);
 
    if (budget <= 1000 && budget >= 900) {
        document.querySelector("p").innerHTML += "sei rimasto con circa metà budget Attenzione!! <br> ";
        
    }

    if (budget <= 220) {
        document.querySelector("p").innerHTML += "sei praticamente al verde!! <br> ";
    }

    if (budget <= 0) {
        document.querySelector("p").innerHTML += "hai finito i soldi! <br>";

       
    }

}


