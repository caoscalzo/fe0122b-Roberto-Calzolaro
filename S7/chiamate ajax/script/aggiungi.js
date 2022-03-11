

fetch(
    'https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {



        document.querySelector("#invia").addEventListener("click", function (e) {
            e.preventDefault()


            var nome = document.querySelector("#nome").value
            var cognome = document.querySelector("#cognome").value
            var email = document.querySelector("#email").value
            var psw = document.querySelector("#password").value
            var role = document.querySelector("#role").value


            fetch(
                'https://sofin.wp-admin.it/public/api/v1/user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nome,
                        lastname: cognome,
                        email: email,
                        password: psw,
                        role_id :role
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert("Utente Creato")
                    setTimeout(function () {
                        window.location.href = "index.html"
                    }, 1000);
                })

        })
    })

