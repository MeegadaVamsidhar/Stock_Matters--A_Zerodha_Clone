const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// Handle User Registration
module.exports.Signup = async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;

        // Basic validation
        if (!email || !password || !username) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false, // In production, use httpOnly:true and secure:true
            maxAge: 3 * 24 * 60 * 60 * 1000, 
        });

        res.status(201).json({ 
            message: "Success! User registered correctly", 
            success: true, 
            user: { username: user.username, email: user.email } 
        });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
};

// Handle User Login
module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ 
            message: "Logged in successfully", 
            success: true,
            user: { username: user.username } 
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "An error occurred during login" });
    }
};
