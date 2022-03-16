function call() {
    return fetch('https://sofin.wp-admin.it/public/api/v1/user')
        .then(function (response) { return response.json(); });
}
call().then(function (data) {
    data.forEach(function (x) {
        //let user = new users(x.name,x.lastname,x.password,x.role_id)
        var select = document.querySelector('#tab');
        var riga = document.createElement("tr");
        select.append(riga);
        for (var prop in x) {
            var propieta = document.createElement("td");
            propieta.innerText = x[prop];
            riga.append(propieta);
        }
        //for (let prop in elemento){
        //create element
        //innerText = elemento[prop]
        //}
    });
});
var users = /** @class */ (function () {
    function users(name, lastname, password, role_id) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.role_id = role_id;
    }
    return users;
}());
