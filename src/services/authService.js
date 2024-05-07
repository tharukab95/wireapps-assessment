const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(name, username, role, password) {
  let hashedPassword = await bcrypt.hash(password, 10);

  const user = await userRepository.create({
    name,
    username,
    role,
    password: hashedPassword,
  });

  if (!user) {
    throw new Error("Invalid details");
  }

  return {
    name: user.name,
    username: user.username,
    role: user.role,
  };
}

async function login(username, password) {
  const user = await userRepository.findByUsername(username);
  if (!user) {
    throw new Error("User not found");
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign(
    {
      UserInfo: {
        username: user.username,
        role: user.role,
      },
    },
    process.env.JWT_SECRET
  );
  return {
    jwt: token,
    user: { name: user.name, username: user.username, role: user.role },
  };
}

module.exports = {
  register,
  login,
};
