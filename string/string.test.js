const { stringWithoutI, nameWithStop } = require("./string");

test("nao existe I em string", () => {
  expect(stringWithoutI).not.toMatch(/I/);
});

test("existe stop em name", () => {
  expect(nameWithStop).toMatch(/stop/);
});
