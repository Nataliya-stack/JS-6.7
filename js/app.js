function result() {
    const INPUT1 = document.getElementById("dividendo");
    const NUM1 = parseInt(INPUT1.value);
    const INPUT2 = document.getElementById("divisor");
    const NUM2 = parseInt(INPUT2.value);

    const RESPONDA = document.getElementById("responda");

    if (NUM2 < 2 || NUM2 > 7) {
        RESPONDA.innerText = "Error: El divisor debe estar en el rango de 2 a 7!";
        RESPONDA.style.color = "#d4be71";
    } 
    
    else {
        if (NUM1 % NUM2 === 0) {
            RESPONDA.innerText = "Si, numero " + NUM1 + " multiplo del numero " + NUM2;
            RESPONDA.style.color = "#d3cfb4";
        } else {
            RESPONDA.innerText = "No, numero " + NUM1 + " no multiplo del numero " + NUM2;
            RESPONDA.style.color = "#d3cfb4";
        }
    }

    INPUT1.value = "";
    INPUT1.focus();

    INPUT2.value = "";
    INPUT2.focus();  
}

