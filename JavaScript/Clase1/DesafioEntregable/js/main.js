//Crea una variable randomint que genera un numero aleatorio del 0 al 10 y lo convierte en un string
const randomint = Math.floor(Math.random() * 11).toString();

//Crea una variable que guarda el input de prompt
let guess = prompt("Adivine el número:\n Seleccione un numero del 0 al 10");

//isFinite() reconoce si hay letras en el string (pero devuelve true si se deja espacio en blanco)
let numCheck = isFinite(guess);

//parseInt nos deja transformar el input del usuario (string) en un número (para utilizarlo para los números fuera de rango).
//Devuelve NaN (Not-a-Number) si el usuario inserta un espacio en blanco
let parsedInt = parseInt(guess);

//Chequea el resultado de parsedInt (el string parseado) y devuelve true si el resultado es NaN
let nanCheck = isNaN(parsedInt)

//si numCheck es falso (el string contiene letras o otros caracteres no relacionados) o si el resultado del parseado del string resulta en NaN
if (numCheck == false || nanCheck == true){
    
    //Escenario del espacio en blanco (isFinite() devuelve true para espacio en blanco y isNaN() devuelve falso)
    if (numCheck == true && nanCheck == true) {
        alert(`A whitespace is not a number`);
    }
    //Escenarios en los que tenemos letras antes, en medio, o después de un número
    else{
        alert(`${guess} is not a number`);
    }
}

//Si el input del usuario es mayor o menor que el rango indicado, la respuesta es incorrecta
else if (parsedInt > 10 || parsedInt < 0) {
    alert(`${guess} está fuera del rango indicado`);
}

//Si el input del usuario y el generado aleatoriamente son iguales, la respuesta es correcta
else if (randomint == guess) {
    alert(`Felicitaciones, ${guess} es el número correcto!`);
}

//Si el input del usuario está dentro del rango indicado pero es incorrecto, la respuesta es incorrecta
else {
    alert(`${guess} no es el número correcto... \nLa respuesta era ${randomint}`);
}