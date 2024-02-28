import bcrypt from 'bcryptjs';

const users = [
  {
    name: "isAdmin",
    email: "isAdmin@gmail.com",
    password: bcrypt.hashSync("MUAwelcome2", 10),
    isAdmin: true
  },
  {
    name: "User",
    email: "user@gmail.com",
    password: bcrypt.hashSync("MUAwelcome2", 10),
  },   
];

export default users;
  