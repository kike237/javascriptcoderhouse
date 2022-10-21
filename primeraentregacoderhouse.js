const nivelColesterolNormal = 100;
const nivelAzucarNormal = 100;

let nombreUsuario = prompt("Hola! Como te llamas?");
let colesterolUsuario;
let azucarUsuario;

while (
  isNaN(
    (colesterolUsuario = parseInt(
      prompt(`Hola, ${nombreUsuario}! Ingresa aqui tu nivel de colesterol:`)
    ))
  )
)
  alert("Coloca un numero");

do {
  azucarUsuario = parseInt(
    prompt("Genial! Por favor ingresa tu nivel de azucar en la sangre:")
  );

  if (isNaN(azucarUsuario)) {
    alert("Coloca un numero");
  }
} while (isNaN(azucarUsuario));

let mensajecolesterol = "";
let mensajeazucar = "";
let mensajefinal = "";

if (
  colesterolUsuario > nivelColesterolNormal &&
  azucarUsuario > nivelAzucarNormal
) {
  mensajefinal =
    "Te recomendamos asistir con un profesional para mas informacion tan pronto como sea posible.";
} else {
  mensajefinal = "";
}

if (colesterolUsuario <= nivelColesterolNormal)
  mensajecolesterol =
    "esta en un buen nivel, te recomendamos seguir esta dieta: LINK y continuar con ejercicio diario";
else
  mensajecolesterol =
    "esta alto, te recomendamos seguir esta dieta: LINK y tambien unos 40 minutos de cardio al dia.";

if (azucarUsuario <= nivelAzucarNormal)
  mensajeazucar =
    "esta en buen nivel, te recomendamos seguir esta dieta: LINK y continuar con ejercicio diario";
else
  mensajeazucar =
    "esta alto, te recomendamos seguir esta dieta: LINK y tambien unos 40 minutos de cardio al dia.";

function resultados () {alert(`${nombreUsuario}, tenemos tus resultados:

Tu colesterol: ${colesterolUsuario}

${mensajecolesterol}

Tu nivel de azucar: ${azucarUsuario}

${mensajeazucar}

${mensajefinal}`)}

resultados();
