const byteSize = (str) => {
  // Correct the typo and return the byte size of the string
  return new TextEncoder().encode(str).length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
