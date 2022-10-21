/**
 * @desc    Get goals
 * @param   GET /api/goals
 * @access  Private 
 */
const getGoals = (req, res) =>{
    res.status(200).json({message: 'Get goals'})
}

/**
 * @desc    Set goal
 * @param   POST /api/goals/:id
 * @access  Private 
 */
const setGoal = (req, res) =>{
    res.status(200).json({message: 'Set goal'})
}

/**
 * @desc    Delete goal
 * @param   POST /api/goals/:id
 * @access  Private 
 */
const deleteGoal = (req, res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

/**
 * @desc    Update goal
 * @param   POST /api/goals/:id
 * @access  Private 
 */
const updateGoal = (req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

module.exports = {
    getGoals, setGoal, deleteGoal, updateGoal,
}

