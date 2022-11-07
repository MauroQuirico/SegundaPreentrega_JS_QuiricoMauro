let user = "admin";
let pass = "12345";

function inicioSesion() {
    let datoSesion = false;
    for (let i = 2; i >= 0; i--) {
        let userEnter = prompt("Ingresa tu nombre de usuario");
        let passEnter = prompt("Ingresa tu codigo de seguridad")
        if (userEnter == user && passEnter == pass) {
            alert("Bienvenido, los datos ingresados son correctos")
            datoSesion = true;
            break;
        } else {
            alert("Acceso denegado, te quedan " + i +""+"intentos");
        }
    }
    return datoSesion;
}
let estado = inicioSesion();
let turnoM = 0;
let turnoT = 0;
let turnoN = 0;
let total = 0;
if (estado) {
    let opciones = prompt("Elegi una opcion: \n1 - Turno mañana. \n2 - Turno tarde. \n3 - Turno noche. \n4 - Total \n Presione Z para salir");
    while (opciones != "Z" && opciones != "z") {
        switch (opciones) {
            case "1":
                turnoM = parseFloat(prompt("Ingresa las ganancias del turno"));
                break;
            case "2":
                turnoT = parseFloat(prompt("Ingresa las ganancias del turno"));
                break;
            case "3":
                turnoN = parseFloat(prompt("Ingresa las ganancias del turno"));
                break;
            case "4":
                total = turnoM + turnoT + turnoN;
                alert("el ingreso total es " + total);
                break;
            default:
                alert("La opcion ingresada no es correcta");
                break;
        }
        opciones = prompt("Queres realizar algun cambio? \n1 - Turno mañana. \n2 - Turno tarde. \n3 - Turno noche. \n4 - Total \n Presione Z para salir");
    }
} else {
    alert("Los datos de usuarios no son correctos, no puedes ingresar.");
}