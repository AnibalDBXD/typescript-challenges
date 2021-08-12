import getOrder from "."

describe("New Cashier Does Not Know About Space or Shift", function() {
  it("Should work", () => {
    expect(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))
      .toMatch("Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke")
  })
  it("Should work", () => {
    expect(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"))
      .toMatch("Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke")
  })
})