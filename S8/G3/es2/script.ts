/*interface iUtenti {
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
        console.log(x);
        



        //let user= new users(x.name,x.lastname,x.password,x.role_id)

        var select = document.querySelector('#tab')

        let riga = document.createElement("tr")

        select.append(riga)

        for (let prop in x) {
            if(prop != "role" ){
                let propieta = document.createElement("td")
                propieta.innerText = x[prop]
    
                riga.append(propieta)
            }
            
        }
     


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

*/
///
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
let p = call();

p.then(data => {

    data.forEach(x => {
        console.log(x);
        
        let user: iUtenti = {
            name: x.name,
            lastname: x.lastname,
            password: x.password,
            role_id: x.role_id
        }
        //let user= new users(x.name,x.lastname,x.password,x.role_id)

        var select = document.querySelector('#tab')

        let riga = document.createElement("tr")

        select.append(riga)

        for (let prop in user) {
            //if(prop != "role" ){
                let propieta = document.createElement("td")
                propieta.innerText = user[prop]
    
                riga.append(propieta)
          //  }
            
        }
     


    })
})

