const objectAssignment = require("./objectAssignment");

const data = { one: 1 };

test("atribuicao de objeto", () => {
  expect(objectAssignment(data)).toEqual({ one: 1, two: 2 });
});
