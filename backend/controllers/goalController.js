const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc    Get Goals
// @route   GET /api/goals/
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    // res.status(200).json({ message: 'Get Goals @ goalController' });
    res.status(200).json(goals);
});

// @desc    Set Goal
// @route   Post /api/goals/
// @access  Private
const setGoal = asyncHandler(async (req, res) => {

    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter value in text field.')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    });

    // res.status(200).json({ message: 'Set Goal @ goalController' });
    res.status(200).json(goal);
});


// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found.')
    }

    // const user = await User.findById(req.user.id);

    // check for user

    // if(!user) {
    //     res.status(401);
    //     throw new Error('User not found.')
    // }

    if(!req.user) {
        res.status(401);
        throw new Error('User not found.')
    }

    // make sure the logged in user matches the goal user

    // if(goal.user.toString() !== user.id) {
    //     res.status(401);
    //     throw new Error('User not authorized.')
    // }

    if(goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized.')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, });

    // res.status(200).json({ message: `Update Goal ${req.params.id} @ goalController` });

    res.status(200).json(updatedGoal);

});

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found.')
    } 

    // const user = await User.findById(req.user.id);

    // check for user

    // if(!user) {
    //     res.status(401);
    //     throw new Error('User not found.')
    // }

    if(!req.user) {
        res.status(401);
        throw new Error('User not found.')
    }

    // make sure the logged in user matches the goal user

    // if(goal.user.toString() !== user.id) {
    //     res.status(401);
    //     throw new Error('User not authorized.')
    // }

    if(goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized.')
    }
    
    await goal.remove();

    // res.status(200).json({ message: `Delete Goal ${req.params.id} @ goalController` });

    res.status(200).json({ id: req.params.id });

});

module.exports = { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
};