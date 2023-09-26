import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Meeknessanyaeche2023",
    email: "meeknessanyaeche2023@gmail.com",
    password: bcrypt.hashSync("MUAwelcome2", 10),
    isMeeknessanyaeche2023: true
  },
  {
    name: "User",
    email: "user@gmail.com",
    password: bcrypt.hashSync("MUAwelcome2", 10),
  },   
];

export default users;
  