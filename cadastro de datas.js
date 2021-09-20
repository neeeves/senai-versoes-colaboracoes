let dataDoEvento = [18,10,2021]
let dataHoje = [19,09,2021] 
let idade = 18 ;
let númeroDeParticipantes = 100

if((dataDoEvento[2] - dataHoje[2]) < 0){
    console.log("Não será permitido, pois a data do cadastro está inválida!!!");
} else if((dataDoEvento[1] - dataHoje[1]) < 0){
    console.log("Impossível marcar, pois o mês de hoje é posterior a data do evento")
} else if (((dataDoEvento[0] - dataHoje [0]) < 0) && ((dataDoEvento[1] - dataHoje[1]) == 0)){
    console.log("Impossível marcar, pois o dia de hoje é posterior a data do evento");
} else {
    if(idade < 18){
        console.log("Impossível marcar, pois a idade é inferior a 18 anos.");
    } else if (númeroDeParticipantes > 100){
        console.log("Impossível marcar pois o limite de participantes é excedido.")
    } else {
        console.log("O evento foi marcado com sucesso!")
    }