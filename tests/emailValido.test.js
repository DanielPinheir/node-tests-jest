const validateEmail = require("../src/emailValido");

test("validateEmail deve retornar verdadeiro para xxx@@ultima.com", () => {
  expect(validateEmail("xxx@ultima.com")).toBeTruthy();
});

test("validateEmail deve retornar falso para xxxZultima.com", () => {
  expect(validateEmail("xxxZultima.com")).toBeFalsy();
});
