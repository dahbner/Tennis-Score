function obtenerMarcador(puntosJ1, puntosJ2) {
  
  if (puntosJ1 === puntosJ2 && puntosJ1 >= 3) {
    return "Deuce";
  }

  if (puntosJ1 >= 4 && puntosJ1 - puntosJ2 === 1) {
    return "Advantage Player 1";
  }

  const puntajes = ["Love", "15", "30", "40"];
  
  let marcadorJ1 = puntajes[puntosJ1] || "Love";
  let marcadorJ2 = puntajes[puntosJ2] || "Love";

  return marcadorJ1 + "-" + marcadorJ2;
}

export default obtenerMarcador;