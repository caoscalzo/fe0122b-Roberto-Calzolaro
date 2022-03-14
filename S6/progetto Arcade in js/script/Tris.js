//voglio mettere la X o il O nelle celle quindi devo recuperare prima tutte le celle tramite queryselector
const cells = document.querySelectorAll(".cell")
/*
//per scrivere all'interno della prima cella:
const cell = cells[0];//creo una nuova variabile in cui prendo la prima cella(index 0)
cell.innerText ="X"
*/


let turn = 0//6 inizializzo una variabile turn  a zero che incremento all'interno della funzione

//10 adesso devo impedire che ricliccando la stessa cella mi compaia il segno opposto
let cellSign = []//11 dunque creo un array vuoto
for (let i = 0; i < cells.length; i++) {// 2 questo ciclo fa si che io possa mettere le x su tutte le cells

    const cell = cells[i]; //3creo una nuova variabile cell, in cui seleziono tutte le celle: fra le quadre c'è la i che nel ciclo ci seleziona tutte le caselle, senza scrivere l'indice del numero per ogni cells

    cell.addEventListener("click", function () {//1-Noi però vogliamo  al click mettere la x sulla cella cliccata, quindi facciamo un AddEventListener e creiamo una funzione che esegue il comando al click
       console.log(`hai cliccato la cella ${i}`)//4 controllo in console in che cella viene messa la x
        //5 io voglio però alternare la X alla O

        //14a questo punto fai un controllo, in cui l'if ci impedisce di ricliccare la stessa cella 
        if (cellSign[i]) {//14.1 vai a vedere se dentro cellSign esiste qualcosa nella posizione dlla nostra i di questo momento
            console.log("questa cella è già cliccata")
            return;//14.2 questo blocca la funzionne  e impedisce la logica delle righe successive
        }
        turn++//6 oncremento la variabile



        //9 usiamo il costrutto if e else per dire che se all'incremento di turn abbiamo un numero pari ci scrive la X altrimenti se negativo la O
        let sign;
        if (turn % 2 === 0) {
            sign = "O"
        } else {
            sign = "X"
        }


        //cell.innerText = "X" //3 questo metodo ci permette,all'interno di questa funzione, di scrivere una X all'interno della cella cliccata
        cell.innerText = sign; //8 il nostro innerText non deve riportarci solo la X ma anche la O, per cui impostiamo una var sign
        cellSign[i] = sign//12 andiamo allinterno di cellSign e mettiamo i che è la selezione di  tutte le celle, e questo ci fa mettere un appunto così da capire che segno c'è dentro alla cella scritta
        console.table(cellSign)//13 questo tipo di controllo ci mostrerà appunto in numero della cella e il segno all'interno

        //15 adesso posso creare la funzione di vittoria

        let hasWon = checkVictory(); //15.1creo variabile hasWon  e avrà una risposta true o false dalla funzione checkVictory

        //15.1
        if (hasWon) {
            //diciamo chi ha vinto
            alert(` ${sign} hai vinto`  )
        }else if ( turn === 9){
            alert("pareggio")
        }

    })

}
//15.2 stiliamo le combinazioni vincenti, ovvero se i segni uguali si troveranno sugli index in combinazione di tre avrà vinto
function checkVictory() {
    const winningCombinations = [// 15.3facciamo un array contenente la lista di tutte le possibili combinazioni vincenti
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    //15.4come facciamo a dire all'utente che ha vinto se esegue la combinazione?
    //facciamo il ciiclo for per controllare utte le combinazioni vincenti
    for (let i = 0; i < winningCombinations.length; i++) {

        const combination = winningCombinations[i];//all'interno del for devo andarmi a prendere la singola combinazione usando la i del contatore
       
        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        console.log(a,b,c);
//16 nella cella 0 a c'è qualcosa &?, questo qualcosa è uguale a quello che c'è nella cella b? &quello che c'è nella cella b è uguale a quello che c'è nella cella c?
            
        if(cellSign[a] && cellSign[a]===cellSign[b]&&cellSign[b]=== cellSign[c]){//se si verifica questa condizione
        //console.log(`combinazione vincente:  ${a} ${b} ${c}`)
        return true
        }



   
    }
    return false
}