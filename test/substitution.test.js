// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution ()", () => {
  it("should return the encoded message", () => {
    const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
  });
  
    it("should maintain spaces throughout", () => {
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });
  
    it("should return the decoded message", () => {
    const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.eql(expected);
  });
  
  it("should encode message that could contain special characters", () => {
    const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
  });
  
  it("should decode message that could contain special characters", () => {
    const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.eql(expected);
  });
  
   it("should return false if alphabet string is not exactly 26 characters", () => {
    const actual = substitutionModule.substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  
  it("should return false if all the characters in the alphabet parameter are not unique", () => {
    const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
})
