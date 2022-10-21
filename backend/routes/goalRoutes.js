const express = require('express');
const router = express.Router();
const { 
    getGoals, 
    setGoal, 
    deleteGoal, 
    updateGoal } = require('../controllers/goalControllers')

router.get('/', getGoals)

router.post('/', setGoal)

router.delete('/:id', deleteGoal)

router.put('/:id', updateGoal)

module.exports = router;