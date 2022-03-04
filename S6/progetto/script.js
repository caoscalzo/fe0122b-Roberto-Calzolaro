
$(()=>{

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];



       for (var i = 0; i < 16; i++){
           let random = Math.floor(Math.random()*mieImg.length);
           let imgEliminata = mieImg.splice(random,1)

           $('<div class="images" id="emoji' + i + '"><img id="'+i+'" src="img/'+imgEliminata+'.png" width="130" /></div>').appendTo("#memory")
       }

       let immaginiCliccate= []
       let contatore = 0

       $('.images').click(function(){

           let clicks = $('#clicks').text()
           clicks++
           $('#clicks').text(clicks)

           if(immaginiCliccate.length < 2){

            $(this).children().show().addClass('rotea')

            let imgId = $(this).children().attr('id')
            let imgSrc =$(this).children().attr('src')

            let infoImmagine = {
                id: imgId,
                src: imgSrc
            };
            immaginiCliccate.push(infoImmagine)

            if(immaginiCliccate.length==2){

                if(immaginiCliccate[0].src == immaginiCliccate[1].src){
                    $('#'+ immaginiCliccate[0].id).css('cursor','no-drop')
                    $('#'+ immaginiCliccate[1].id).css('cursor','no-drop')
                    contatore++
                    immaginiCliccate=[]


                }else{
                    setTimeout(function(){
                        $('#'+ immaginiCliccate[0].id).hide()
                        $('#'+ immaginiCliccate[1].id).hide()
                        immaginiCliccate=[]
                    },300)
                };

            };

           };
           if (contatore == 8){
               $("#win").text("Winner!")
           }

       });

      
    });
