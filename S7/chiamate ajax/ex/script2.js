//ciclo for


fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data =>
        data.forEach(function (elemento) {
            let tabella = document.getElementById('tab')

            let contenitore = document.createElement('tr')

            let row = document.createElement('td')
            let row1 = document.createElement('td')
            let row2 = document.createElement('td')
            let row3 = document.createElement('td')
            let row5 = document.createElement('button')


            row.innerText = elemento.name
            row2.innerText = elemento.lastname

            row1.innerText = elemento.email
            row3.innerText = elemento.role.nicename


            tabella.append(contenitore);
            contenitore.append(row, row2, row1, row3)
            row3.append(row5)

        }));