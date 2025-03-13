let amigos = [];

console.log (amigos);

function agregar amigo() {
    
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim()===""){
        alert("Por favor insertar un nombre");
            } else {
            amigos.push(nombreAmigo);
            document.querySelector("#amigo").value = "";
            mostrarListaAmigo();
            }
}

function mostarListaAmigo(){
    let listaAmigos = document.querySelector("#ListaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index< amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
