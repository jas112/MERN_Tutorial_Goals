const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register User
// @route   POST /api/users/
// @access  Private
const registerUser = asyncHandler(async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    if(!firstName || !lastName || !email || !password){
        res.status(400);
        throw new Error('Please submit values for all fields.')
    }

    // check if the user was registered
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error('User already exists with that email.')
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });

    if(user){
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        });
    }else{
        res.status(400);
        throw new Error('Invalid user data.')
    }

    // res.json({ message : 'Register User @ userController'});

});


// @desc    Authenticate User
// @route   POST /api/users/login
// @access  Private
const loginUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body;

    // check user email
    const user = await User.findOne({email});

    if(user &&  (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        });
    }else{
        res.status(400);
        throw new Error('Invalid user credentials.')
    }

    // res.json({ message : 'Login User @ userController'});
});

// @desc    Get User data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.json({ message : 'User data @ userController'});
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.JWT_SECRET,
        { expiresIn: '30d'}
    );
};

module.exports = {
    registerUser,
    loginUser,
    getMe
};