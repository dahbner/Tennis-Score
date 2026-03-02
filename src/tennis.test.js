import obtenerMarcador from "./tennis.js";

describe("Juego de Tenis", () => {
  it("deberia mostrar 'Love-Love' al empezar el set", () => {
    expect(obtenerMarcador(0, 0)).toEqual("Love-Love");
  });

  it("deberia mostrar '15-Love' cuando el jugador 1 anota un punto", () => {
    expect(obtenerMarcador(1, 0)).toEqual("15-Love");
  });

  it("deberia mostrar '15-15' cuando ambos jugadores han anotado un punto", () => {
    expect(obtenerMarcador(1, 1)).toEqual("15-15");
  });
});