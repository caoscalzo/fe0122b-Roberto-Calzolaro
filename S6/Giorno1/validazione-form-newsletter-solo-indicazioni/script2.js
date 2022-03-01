// Quando il documento è pronto...
$(document).ready(function(){

    $("#iscr-news").click(function () {

     let controllo = true;
     let email1 = $("#email-1").val();
     let email2 = $("#email-2").val();



     let arrayy = $("#nome, #email-1, #email-2");

     arrayy.each((indice,campo) => {
         if($(campo).val() == ""){
             $(campo).next().text("Campo richiesto");
             controllo = false;
         } else {
             $(campo).next().text("");
         }


     });



     if (email1 !== email2){
         $("#email-2").next().text("Le email non corrispondono!");
         controllo = false;
     }

     if(controllo == true){
         alert ("form inviato");
     } else {
         alert ("controlla che tutti i campi siano corretti!!");
     }


    });

    $("#pulisci-form").click(function () {
     $("#nome, #email-1, email-2").val("");

    });

 });
 //gestisco il click sul pulsante Iscriviti

     // inizializzo una variabile di controllo a true

     // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto

     // nell'else uso next e text per impostare l'elemento span adiacente

     // assegno a due variabili il valore dei due campi email

     // ripeto la condizione nel nome anche per l'email

     // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

     //invio del form se tutti i campi sono validi

 //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
 //posizionare un asterisco per identificare il campo obbligatorio.