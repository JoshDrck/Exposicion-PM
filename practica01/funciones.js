function Guardar(){
    function Registro(nombre, universidad, email, numero){
        this.nombre=nombre;
        this.universidad=universidad;
        this.email=email;
        this.numero=numero;
    }
    var registroNombre = document.getElementById('nombre');
    var registroUni = document.getElementById('universidad');
    var registroEmail = document.getElementById('email');
    var registroNum = document.getElementById('numero');

    IngresarRegistro = new Registro(registroNombre.value, registroUni.value, registroEmail.value, registroNum.value);
    console.log(IngresarRegistro);
    agregar();
}

var DataBase = [];

function agregar(){
    DataBase.push(IngresarRegistro);
    console.log(DataBase);
    document.getElementById('table').innerHTML += '<tbody><td>' + IngresarRegistro.nombre + '</td><td>' + IngresarRegistro.universidad + '</td><td>'+ IngresarRegistro.email +'</td><td>'+ IngresarRegistro.numero+'</td></tbody>';
}



    