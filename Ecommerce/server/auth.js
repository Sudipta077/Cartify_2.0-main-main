const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');


const router = express.Router();
const User = require('./model/userSchema');
const Admin = require('./model/adminSchema');
require('./dbconn');
const authenticate = require('./middleware/authenticate');
const fetchData = require('./model/aggregate');


// authorization
router.get('/signing_up', (req, res) => {
    res.send('hello from sign-up page');
});


router.post('/signing_up', async (req, res) => {
    const { name, contact, email, password } = req.body;

    try {
        // Check if any required fields are missing
        if (!name || !contact || !email || !password) {
            return res.status(401).json({ error: "Please provide all required fields" });
        }

        // Check if the user already exists in the database
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(401).json({ error: "User already exists" });
        }

        // Create a new user if they don't exist
        const user = new User({ name, contact, email, password });

        await user.save();
        res.status(200).json({ message: "User registered successfully", success: true });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(401).json({ error: "Server error" });
    }
});
// authentication
router.post('/signing_in', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: "Please fill data" });
        }
        const userLogin = await User.findOne({ email: email });
        if (!userLogin) {

            return res.status(401).json({ message: "No such user exist !" })
        }
        else {
            if (userLogin.password === password) {
                token = jwt.sign({ id: userLogin._id }, process.env.SECRET_KEY, { expiresIn: '2h' });
                console.log(token);
                return res.status(200).json({ message: "user login successfully", token })
            }
            else {
                return res.status(401).json({ message: "Incorrect Password" });
            }
        }
    }
    catch (err) {
        console.log("auth catched error  " + err);
    }
})
// verification of user and show dynamic user profile data
router.post('/profile', authenticate, async (req, res) => {
    try {
        const verifiedUser = await User.findOne({ _id: req.body.userId });
        console.log(verifiedUser);
        if (!verifiedUser) {
            return res.status(401).send({ message: "User not found!" });
        } else {
            return res.status(200).send({ data: verifiedUser });
        }
    } catch (err) {
        if (error.response) {
           
            window.alert(error.response.data.message || "Server Error Occurred !");
            console.log(error.response.data.error || error.response.data);
        } else if (error.request) {
          
            window.alert("No response received from the server");
            console.log(error.request);
        } else {
           
            window.alert("Error in setting up the request");
            console.log('Error', error.message);
        }
    }
});

// Order placement

router.post('/buynow', authenticate, async (req, res) => {
    const { name, address, contact, payment, cartList } = req.body;

    try {
        const verifiedUser = await User.findOne({ _id: req.body.userId });
        if (!verifiedUser) {
            return res.status(401).send({ error: "Could not find customer!" });
        }

        console.log(verifiedUser.name);

        
        for (const item of cartList) {
            await User.findByIdAndUpdate(
                verifiedUser._id,
                {
                    $push: {
                        orders: {
                            order: item
                        }
                    }
                },
                { new: true }
            );
        }

        const admin = new Admin({
            userId: verifiedUser._id,
            name,
            address,
            contact,
            payment
        });

        await admin.save();
        res.status(200).json({ message: "Customer details added successfully." });
    } catch (err) {
        console.error("Error during order placement:", err);
        res.status(500).send({ error: "Server error" });
    }
});


// admin page  

router.get('/admin',async(req,res)=>{
    
    const data = await User.countDocuments();
    const orders = await Admin.countDocuments();
    const list = await Admin.find({});
    
    res.json({data,orders,list});
});

router.get('/getorders',async(req,res)=>{
    const order = await User.findOne({_id:req.body.id});
    res.send(order);
})

module.exports = router;
