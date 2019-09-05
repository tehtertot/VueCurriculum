const { sigma } = require("./sigma");

describe("`sigma(num)`", () => {
  describe("when given a number as an argument", () => {
    it("returns the sum of 1 to n when given a positive number", () => {
      const result = sigma(5);
      expect(result).toBe(15);
    });

    it("returns 0 when given 0", () => {
      expect(sigma(0)).toBe(0);
    });

    it("returns 0 when given a negative number", () => {
      expect(sigma(-2)).toBe(0);
    });
  });

  describe("when given a non-number as an argument", () => {
    it("throws a TypeError when given `undefined`", () => {
      expect(() => {
        sigma(undefined);
      }).toThrow(TypeError);
    });
  });
});
