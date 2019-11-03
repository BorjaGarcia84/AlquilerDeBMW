function cargaCoche() {
    let serie = (new URL(document.location)).searchParams.get("coches")
    fetch(`http://localhost:3000/coche?coche=${serie}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            document.getElementById("app").innerHTML =
                `<div>
             <p>${myJson.nombre}</p>
             </div>
            <div>
            <p><img src=${myJson.imagen} alt=""/></p>
            </div>
            <div>
            <p>${myJson.precioPorDia}</p>
            <p>${myJson.estado}</p>
            </div>`

            console.log(myJson);
        });
}