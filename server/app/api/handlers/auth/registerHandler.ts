import { Request, Response } from "express";
import User from "../../../models/users";

export const registerHandler = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        const exsistingUser = await User.findOne({ email });
        if (exsistingUser) {
            return res.status(400).json({ message: "User already exists" });
        } else if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};