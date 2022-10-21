const asyncHandler = require('express-async-handler')

/**
 * @desc    Get goals
 * @param   GET /api/goals
 * @access  Private 
 */
const getGoals = asyncHandler(async (req, res) =>{
    res.status(200).json({message: 'Get goals'})
})

/**
 * @desc    Set goal
 * @param   POST /api/goals/:id
 * @access  Private 
 */
const setGoal = asyncHandler(async (req, res) => {
    
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goal'})
})

/**
 * @desc    Delete goal
 * @param   POST /api/goals/:id
 * @access  Private 
 */
const deleteGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

/**
 * @desc    Update goal
 * @param   POST /api/goals/:id
 * @access  Private 
 */
const updateGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoal, deleteGoal, updateGoal,
}

