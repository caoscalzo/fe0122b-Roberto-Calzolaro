var param = new URLSearchParams(location.search)
var id = param.get('id')

fetch(
    'https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = data
        var utente = campi.find(u => u.id == id)// cerca data dentro campi e vedi se id è corrispondente a  id dell'url


        document.querySelector("#nome").value = utente.name
        document.querySelector("#cognome").value = utente.lastname
        document.querySelector("#email").value = utente.email
        document.querySelector("#password").value = utente.role_id

        document.querySelector("#invia").addEventListener("click", function (e) {
            e.preventDefault()

            let nome = document.querySelector("#nome").value
            let cognome = document.querySelector("#cognome").value
            let email = document.querySelector("#email").value
            let ruolo = document.querySelector("#password").value

            fetch(
                'https://sofin.wp-admin.it/public/api/v1/user/' + id,
                {
                    method: 'PUT', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nome,
                        lastname: cognome,
                        email: email,
                        role_id: ruolo
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert("Utente aggiunto")
                    setTimeout(function () {
                        window.location.href = "index.html"
                    }, 1000);
                })

        })
    })

