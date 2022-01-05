// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar")

describe("Caesar", () => {

    it("should return false if shift equal to 0", () => {
      const expected = false;
      const actual = caesar("random text", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is not defined", () => {
        const expected = false;
        const actual = caesar("random text");
        expect(actual).to.equal(expected);
      });

    it("should return false if shift value is less than -25", () => {
        const expected = false;
        const actual = caesar("random text", -26);
    expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("random text", 26);
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces and special symbols", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("Decoding: should maintain spaces and special symbols", () => {
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("Should treat capital letters as lower case letters", () => {
    const upperCase = caesar("Hello WORLD", 0);
    const lowerCase = caesar("hello world", 0);
    expect(upperCase).to.equal(lowerCase);
    }); 
});