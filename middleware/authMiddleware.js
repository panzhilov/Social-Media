const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized");
    }

    const { userId } = jwt.verify(req.headers.authorization, "yyehwqjsbu");

    req.userId = userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send("Unauthorized");
  }
};
