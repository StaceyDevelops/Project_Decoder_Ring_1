// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let newInput =input.toLowerCase();//ignores capital letters
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let message = "";
  
  
  if (!alphabet || alphabet.length !== 26) return false;//returns false if given alphabet isnt 26 char long.
    for(let i = 0; i < alphabet.length; i++)
    for(let j = i + 1; j < alphabet.length; j++)
    if(alphabet[i] == alphabet[j])
    return false;
    if(encode) {
      for(let char of newInput) {
        if(char == " ") { // maintains spaces
          message += char;
          continue;
        }
        for(let letter of abc) {
          if(char == letter){
            let x =(abc.indexOf(char));
            message +=(alphabet.charAt(x));
        }
      }
    }
    return message;
  }
  if(!encode) {
    for(let char of newInput) {
      if(char == " ") { // maintains spaces
        message += char;
        continue;
      }
      for(let letter of alphabet) {
        if(char == letter) { 
          let x = alphabet.indexOf(char);
          message += abc.charAt(x);
        }
      }
    }
    return message;
  }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
