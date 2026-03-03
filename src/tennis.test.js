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

  it("deberia mostrar '30-15' cuando el jugador 1 anota su segundo punto", () => {
    expect(obtenerMarcador(2, 1)).toEqual("30-15");
  });

  it("deberia mostrar '30-30' cuando el jugador 2 empata", () => {
    expect(obtenerMarcador(2, 2)).toEqual("30-30");
  });

  it("deberia mostrar '40-30' cuando el jugador 1 anota su tercer punto", () => {
    expect(obtenerMarcador(3, 2)).toEqual("40-30");
  });
});