const fs =require("fs");
const validator = require("validator");
const notes =require("./notes");
console.log(notes("ssssssssssss"));
console.log(validator.isEmail("sadagmail.com"));
fs.appendFileSync('note.txt',"sssssssssssstttttttttt0");