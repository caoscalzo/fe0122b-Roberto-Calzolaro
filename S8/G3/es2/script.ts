interface iUtenti {
    name: string;
    lastname: string;
    password: string;
    role_id: number

}

function call(): Promise<iUtenti[]> {

    return fetch('https://sofin.wp-admin.it/public/api/v1/user')
        .then(response => response.json())

}

call().then(data => {
    data.forEach(x => {

        //let user = new users(x.name,x.lastname,x.password,x.role_id)

        var select = document.querySelector('#tab')

        let riga = document.createElement("tr") 

        select.append(riga)

        for(let prop in x){
            let propieta = document.createElement("td")
            propieta.innerText = x[prop]

            riga.append(propieta)
        }
        //for (let prop in elemento){
            //create element
            //innerText = elemento[prop]

        //}
    

        })
    })

class users implements iUtenti {
 
    name: string;
    lastname: string;
    password: string;
    role_id: number;

    constructor(name: string, lastname: string, password: string, role_id: number) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.role_id = role_id;
    }
}
