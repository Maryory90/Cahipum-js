let i = 0;
var jugador = 0, maquina = 0, ronda=1;
const piedra=1, papel=2, tijera=3;
var numjugadas = (prompt("Ingrese la cantidad de veces que desea jugar"));

while (i < numjugadas) {
    //opcion a elegir por el usuario
    var opcion = parseInt((prompt("Ingrese el número de la opción a elegir (1: Piedra, 2: Papel, 3: Tijera).")));

    //verifica que sea una opcion valida ingresada por el usuario
    if ((opcion == piedra) || (opcion == papel) || (opcion == tijera)) {
        //opcion jugada automatica de 1 a 3
        var opcionautomatica = Math.floor(Math.random() * 3) + 1;
        //Se muestra la opcion aleatoria
        alert("La máquina eligió: " + (opcionautomatica == 1 ? "Piedra" : opcionautomatica == 2 ? "Papel" : "Tijera"));

        //**combinaciones de empates {1,1 2,2 3,3}
        if ((opcion == piedra && opcionautomatica == piedra) || (opcion == papel && opcionautomatica == papel) || (opcion == tijera && opcionautomatica == tijera)) {
            alert("Ronda "+ronda+" de "+numjugadas+" RESULTADO: Empataste!");

        } else if ((opcion == piedra && opcionautomatica == tijera) || (opcion == papel && opcionautomatica == piedra) || (opcion == tijera && opcionautomatica == papel)) {
            //**combinaciones ganadoras {1,3 2,1 3,2}
            jugador++;
            //contador de partidas ganadas usuario
            alert("Ronda "+ronda+" de "+numjugadas+" RESULTADO: Ganaste :) !");
        } else if ((opcion == piedra && opcionautomatica == papel) || (opcion == papel && opcionautomatica == tijera) || (opcion == tijera && opcionautomatica == piedra)) {
            //**combinaciones perdedoras {1,2 2,3 3,1}
            //contador de partidas ganadas maquina
            maquina++;
            alert("Ronda "+ronda+" de "+numjugadas+" RESULTADO: Perdiste, el ganador es maquina :( !");
        }
        i++;
        ronda++;

    } else {
        alert("Porfavor, Ingresa una opcion valida: (1: Piedra, 2: Papel, 3: Tijera)");
    }
}

//recuento final
if (jugador > maquina) {
    alert("Resultado FINAL: Felicidades! Ganaste la Partida= " + jugador + " a " + maquina);
} else if (jugador < maquina) {
    alert("Resultado FINAL: Perdiste la Partida! contra la maquina = " + jugador + " a " + maquina);
} else if (jugador == maquina) {
    alert("Resultado FINAL: Empataste! contra la maquina = " + jugador + " a " + maquina);
}