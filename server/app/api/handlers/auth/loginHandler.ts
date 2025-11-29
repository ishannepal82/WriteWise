import { Request, Response } from "express";
import User from "../../../models/users";
import jwt from "jsonwebtoken";

export const loginHandler = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } 
        
        else if (password !== user.password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not configured");
            return res.status(500).json({ message: "Server configuration error" });
        }

        const token = jwt.sign(
            { id: user._id.toString(), email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};