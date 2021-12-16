var arrayData = new Array();

function listarArray() {
  var inputNombre = document.getElementsByTagName("nombre");
  var inputApellido = document.getElementsByTagName("apellido");
  var inputUniversidad = document.getElementsByTagName("universidad");
  var selectValue = document.getElementById("sexo");

  arrayData.push(extraccionDatos(inputNombre, inputApellido));
  console.log(arrayData);
  rellenarTable();
  limpiarArray();
}

function extraccionDatos(input, select) {
  var arrayForm = new Array();
  Object.values(input).forEach((element) => {
    arrayForm.push(element.value);
  });
  arrayForm.push(select.value);
  return arrayForm;
}

function limpiarArray() {
  document.getElementById("myFormulario").reset();
}

function mostrarForm() {
  document.getElementById("tabla").hidden = true;
  document.getElementById("myFormulario").hidden = false;
  document.getElementById("button-back").hidden = false;
}

function mostrarTabla() {
  document.getElementById("tabla").hidden = false;
  document.getElementById("myFormulario").hidden = true;
  document.getElementById("button-back").hidden = true;
}
 var listaDatos = [];

function listarDatos() {
  fetch("http://127.0.0.1:5500/index.html?", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      listaDatos = data;
    });
}

function rellenarTable() {
  var getTabla = document.getElementById("tablaDatos");
  var tableBody = document.createElement("tbody");

  getTabla.appendChild(tableBody);
  listarDatos();
  for (let i = 0; i < listaDatos.length; i++) {
    var tr = document.createElement("tr");

    tableBody.appendChild(tr);
    var row = Object.values(listaDatos[i]);

    for (let j = 0; j < 6; j++) {
      var td = document.createElement("td");
      td.width = "200px";

      td.appendChild(document.createTextNode(row[j]));
      tr.appendChild(td);
    }
  }
}
