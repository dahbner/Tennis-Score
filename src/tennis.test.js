import obtenerMarcador from "./tennis.js";

describe("Juego de Tenis", () => {
  it("deberia mostrar 'Love-Love' al empezar el set", () => {
    expect(obtenerMarcador(0, 0)).toEqual("Love-Love");
  });
});