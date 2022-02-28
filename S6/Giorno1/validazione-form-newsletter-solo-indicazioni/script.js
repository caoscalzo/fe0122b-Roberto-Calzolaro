// Quando il documento è pronto...

$(document).ready(function(){

    $('#iscr-news').click(function(){
        let controllo = true;
        let email1=$("#email-1").val();
        let email2=$("#email-2").val();
        

        if($("#nome").val() == ""){
          $("#nome").next().text("campo richiesto");
          controllo = false;
        }else{
            $("#nome").next().text("");
        }

        
        if($("#email-1").val() == ""){
            $("#email-1").next().text("campo richiesto");
          controllo = false;

          }else{
              $("#email-1").next().text("");
          }

          
        if($("#email-2").val() == ""){
            $("#email-2").next().text("campo richiesto");
          controllo = false;

          }else{
              $("#email-2").next().text("");
          }

          if(email1 !== email2){
            $("#email-2").next().text("email non corrispondenti");
            controllo=false;
          }
           

          if(controllo == true){
              alert("form inviato")
          }else{
              alert("controlla che i campi siano compilati")
          }
    });

    $("#pulisci-form").click(function(){
        $("#nome").val("") ;
        $("#email-1").val(""); 
        $("#email-2").val("") ;

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
