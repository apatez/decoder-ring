// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius ()", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
  
  it("should leave the spaces as is when encoding", () => {
     const actual = polybiusModule.polybius("Hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });

  it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius("3251131343 2543241341", false);
    const expected = "hello world";
        expect(actual).to.equal(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("4432423352125413", false); 
     const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string is not even", () => {
    const actual = polybiusModule.polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
});