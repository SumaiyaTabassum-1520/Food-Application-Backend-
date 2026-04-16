const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ✅ check header first
    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized User",
        });
      }

      req.user = decode;

      next();
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Auth Middleware",
      error,
    });
  }
};