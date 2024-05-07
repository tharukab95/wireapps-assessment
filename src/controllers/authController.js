const authService = require('../services/authService')

async function register(req, res) {
  const { name, username, role, password } = req.body;

  if ((!name || !username, !role || !password))
    return res
      .status(400)
      .json({ message: "Required field/fields values missing." });

  try {
    const user = await authService.register(name, username, role, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Required field/fields values missing." });

  try {
    const data = await authService.login(username, password);
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  register,
  login,
};
