const bcrypt = require ("bcryptjs");

// hash a password
const plainPassword = "John@1234";
const hash = bcrypt.hashSync(plainPassword, 10);
console.log("Hash:", hash);

// compare correct password
const match = bcrypt.compareSync(plainPassword, hash);
console.log("correct password match:", match);

//compare wrong password
const noMatch = bcrypt.compareSync("wrongpassword", hash);
console.log("wrong password match:", noMatch);