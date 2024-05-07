const verifyRoles = (allowedRoles) => {
  return (req, res, next) => {
    if (!req?.role) return res.sendStatus(401);
    if (allowedRoles.includes(req.role)) {
      next();
    } else {
      return res.status(401).json("You don't have permission!");
    }
  };
};

module.exports = {
  verifyRoles,
};
