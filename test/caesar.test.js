// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar ()", () => {
  it("should return the encoded message if given a positive shift value", () => {
    const actual = caesarModule.caesar("thinkful", 3);
    const expected = 'wklqnixo';
    expect(actual).to.eql(expected);
  });
  
  it("should return the encoded message if given a negative shift value", () => {
    const actual = caesarModule.caesar("thinkful", -3);
    const expected = 'qefkhcri';
    expect(actual).to.eql(expected);
  });
  
   it("should return the decoded message depending on the given shift value", () => {
    const actual = caesarModule.caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.eql(expected);
  });
  
  it("should maintain spaces and symbols throughout encoding", () => {
    const actual = caesarModule.caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected);
  });
  
   it("should maintain spaces and symbols throughout decoding", () => {
    const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.eql(expected);
  });
  
   it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("thinkful");
    expect(actual).to.be.false;
   });
  
   it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("thinkful", 99);
        expect(actual).to.be.false; 
    });
  
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("thinkful", -26);
        expect(actual).to.be.false; 
    });
})