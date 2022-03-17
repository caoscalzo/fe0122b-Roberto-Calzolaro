function call() {
    return fetch('https://sofin.wp-admin.it/public/api/v1/user')
        .then(function (response) { return response.json(); });
}
var p = call();
p.then(function (data) {
    data.forEach(function (x) {
        console.log(x);
        var user = {
            name: x.name,
            lastname: x.lastname,
            password: x.password,
            role_id: x.role_id
        };
        //let user= new users(x.name,x.lastname,x.password,x.role_id)
        var select = document.querySelector('#tab');
        var riga = document.createElement("tr");
        select.append(riga);
        for (var prop in user) {
            //if(prop != "role" ){
            var propieta = document.createElement("td");
            propieta.innerText = user[prop];
            riga.append(propieta);
            //  }
        }
    });
});
