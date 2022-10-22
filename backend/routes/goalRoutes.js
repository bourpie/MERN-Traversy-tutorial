const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const { 
    getGoals, 
    setGoal, 
    deleteGoal, 
    updateGoal } = require('../controllers/goalControllers')

router.route('/')
    .get(protect,getGoals)
    .post(protect,setGoal)
    
router.route('/:id')
    .put(protect,updateGoal)
    .delete(protect,deleteGoal)

module.exports = router;