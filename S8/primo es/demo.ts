var player1: number = 10;
var player2: number = 60;


var number: number = Math.floor(Math.random() * (100 - 1) + 1);
console.log(number);

var numero1: number = Math.abs(player1 - number)
var numero2: number = Math.abs(player2 - number)



if (player1 == number) {
    console.log("player 1 ha vinto")

} else if (player2 == number) {
    console.log("player 2 ha vinto")
}
else if(numero2 > numero1){
    console.log("player 1 è più vicino")
}else {
    console.log("player 2 è più vicino")
}
