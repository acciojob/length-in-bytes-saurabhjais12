const byteSize = (str) => {
  // write your code here
	rreturn new TextEncoder().encode(str).length;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
