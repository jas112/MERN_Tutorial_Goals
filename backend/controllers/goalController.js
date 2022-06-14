// @desc    Get Goals
// @route   GET /api/goals/
// @access  Private
const getGoals =  (req, res) => {
    res.status(200).json({ message: 'Get Goals @ goalController' });
}

// @desc    Set Goal
// @route   Post /api/goals/
// @access  Private
const setGoal =  (req, res) => {
    res.status(200).json({ message: 'Set Goal @ goalController' });
}


// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal =  (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id} @ goalController` });
}

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal =  (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id} @ goalController` });
}

module.exports = { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
};