const jwt = require('jsonwebtoken');
const User = require("../model/userSchema"); // Assuming the user schema is in this path

const authenticate = async (req, res, next) => {
    try {
        // const token = req.Headers["Authorization"];
        
        const jwToken=req.headers['authorization'].split(" ")[1]
        if (!jwToken) {
            return res.status(401).send({ message: "Authentication failed. Token not found." });
        }

        // const jwToken = token.replace("Bearer ", "").trim();
      
        jwt.verify(jwToken, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Authentication failed. Invalid token." });
            } else {
                req.body.userId = decoded.id;
                next();
            }
        });
    } catch (err) {
        res.status(401).send({ error: "Unauthorizeeeeeeeeeeed" });
        console.log(err);
    }
};

module.exports = authenticate;
