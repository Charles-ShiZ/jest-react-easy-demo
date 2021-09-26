const add = require("../src/demo.js")

describe("test add function", () => {
  test("enjoy the cake", () => {
    const res = add()
    expect(res).toBe('shizhanhong')
  })
})