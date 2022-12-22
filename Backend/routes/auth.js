const express = require('express');
const User = require('../models/Users');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Honestyisthebestpolicy";

//ROUTE:1 - Creating a User using: POST "/api/auth/createuser". No login required 
router.post('/createuser', [
    body('name', 'Enter a valid Name').isLength({ min: 2 }),
    body('email').isEmail(),
    body('password', "Password must be of atleast 8 charachters").isLength({ min: 8 }),
], async (req, res) => {
    //if there are errors, return bad requests and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // check if the email is duplicate
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry this email already exists' });
        }


        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        //create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        // sending id for matching
        const data = {
            user: {
                id: user.id
            }
        }

        //sending the token using JWT
        const authoten = jwt.sign(data, JWT_SECRET);

        //sends the response
        res.json({ authoten });
    } catch (error) {
        //if any other error occurred then log 
        console.error(error.message);
        res.status(500).json.send("Internal servers error occurred");
    }

})


//ROUTE:2 - Authenticate User using: POST "/api/auth/login". No login required 
router.post('/login', [
    body('email').isEmail(),
    body('password', "Password must not be blank").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            //user does'nt exists
            return res.status(400).json({ error: "Login credentials are not correct" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Login credentials are not correct" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authoten = jwt.sign(data, JWT_SECRET);
        res.json({ authoten });


    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }
});


//ROUTE:3 - Get loggedin User Details Using: POST "/api/auth/getuser" Login Required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        let userid = req.user.id;
        const user = await User.findById(userid).select("-password")
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }
})

module.exports = router;