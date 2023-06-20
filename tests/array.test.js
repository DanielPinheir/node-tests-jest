const shoppingList = require("../src/array");

test("tem leite na lista de compras", () => {
  expect(shoppingList).toContain("leite");
  expect(new Set(shoppingList)).toContain("leite");
});
