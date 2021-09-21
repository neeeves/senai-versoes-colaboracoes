let salaDeAula = ["Fernanda", "Gabriela"]

for(let contador = 0; contador <= salaDeAula.length; contador++){
    if(contador == 0){
        console.log("O número é: " + contador + "É ZERO!");
    } else if (contador % 2 == 0){
        console.log("O número é: " + contador + "É PAR!");   
    } else if(contador % 2 == 1) {
        console.log("O número é :" + contador + "É ÍMPAR!");
    }
  
}