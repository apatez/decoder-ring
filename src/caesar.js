// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    //checking shift
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    let result = "";
    const lowerCase = input.toLowerCase();
    
    // looping through the input
    for (let i = 0; i < lowerCase.length; i++) {
    const lower = lowerCase[i];
     const specialChar = /[!@#$%^&*()/,.?":{}|<>]/;
     if (lower === " " || specialChar.test(lower)){
      result += lower;
       
      // encoding
     } else if (encode) {
      const index = alphabet.indexOf(lower);
      let newCode = index + shift;
      if(newCode > 25) newCode = newCode - 26;
      if (newCode < 0) newCode = newCode + 26;
      result += alphabet[newCode];
       
      // decoding
     } else if (encode !== true) {
       const index = alphabet.indexOf(lower);
       let decoded = index - shift;
      if(decoded > 25) decoded = decoded - 26;
      if (decoded < 0) decoded = decoded + 26;
      result += alphabet[decoded];
    } 
    } return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
