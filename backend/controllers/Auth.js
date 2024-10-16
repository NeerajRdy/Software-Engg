import user from '../models/Auth.js';
import bcryptjs from 'bcryptjs'
import JWT from 'jsonwebtoken'
 
export const Signup = async (req, res) => {
    try {
        const {name,email,password } = req.body;
        const existUser = await user.findOne({email})
        if (existUser) return res.status(400).json({ message: "This email already exists" });

        const hashpassword = bcryptjs.hashSync(password,10)
 
        const newUser = await user.create({name,email, password:hashpassword});
        await newUser.save();
        res.status(201).json({ message: "Registered Sucessfully",newUser});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "Please provide email and password" });
        }
        const users = await user.findOne({ email });
        if (!users) return res.status(400).json({ message: "Invalid email or password" });
        const isMatch = bcryptjs.compareSync(password, users.password);
        if(isMatch) {
            const token = JWT.sign({ id: user._id }, process.env.SECRET_KEY_user,{expiresIn : '1h'});
            res.cookie("token",token,{
                expires: new Date(Date.now() + 1 * 60 * 60 * 1000), 
                httpOnly: true,
                secure: false,
            })
            res.status(200).json({message:"Logged in Sucessfully",users,token})
        }
        else{
            return res.status(400).json({ message: "Wrong Password" });
        }
    }catch(error){
        res.status(400).json({ message: "Response error",error });
    }
} 

export const userLogout = (req, res) => {
    res.clearCookie('token', { httpOnly: true, secure: false }); 
  
    res.status(200).json({ message: 'Logged out successfully' });
  };

export const getusers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getuserById = async (req, res) => {
    try {
        const user = await user.findById(req.params.id);
        if (user) return res.status(200).json(user);
        res.status(404).json({ message: "user not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

export const updateuser = async (req, res) => {
    try {
        const user = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) return res.status(200).json(user);
        res.status(404).json({ message: "user not found" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const deleteuser = async (req, res) => {
    try {
        const user = await user.findByIdAndDelete(req.params.id);
        if (user) return res.status(204).json({ message: "user deleted successfully" });
        res.status(404).json({ message: "user not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}