arrayAudio = []

fetch("audio.json")
    .then(response => response.json())
    .then(audio => {
        let listaSong = document.querySelector("#lista")

        function cicloAudio() {
            for (var i = 0; i < audio.length; i++) {
                var li = document.createElement("li")
                // listaSong.innerHTML+= "<li onClick='playAudio'(\'" +  audio[i].file +'\')>' + audio[i].title + "</li>"


                li.innerText = audio[i].title
                var audioSrc = "audio/" + audio[i].file

                arrayAudio.push(audioSrc)
               // console.log(audioSrc)

               arrayAudio.forEach(element => {

                li.addEventListener("click",function(){
                    let aud = document.querySelector("#aud1")

                    aud.setAttribute("src", element)



                })
               });

                listaSong.append(li)

                console.log(audio[i].file)

            }
        }
        cicloAudio()
        
        
       

    })

    arrayVideo=[]

    fetch("video.json")
    .then(response => response.json())
    .then(video => {
        let listaVideo = document.querySelector("#lista2")

        function cicloVideo() {
            for (var i = 0; i < video.length; i++) {
                var li = document.createElement("li")
                // listaSong.innerHTML+= "<li onClick='playAudio'(\'" +  audio[i].file +'\')>' + audio[i].title + "</li>"

                li.innerText = video[i].title
                
                var videoSrc = "video/" + video[i].file

                arrayVideo.push(videoSrc)

                arrayVideo.forEach(e => {

                    li.addEventListener("click",function(){
                        let vid = document.querySelector("#video1")
    
                        vid.setAttribute("src", e)
    
    
    
                    })
                   });

                listaVideo.append(li)
            }
        }
        cicloVideo()

    })


