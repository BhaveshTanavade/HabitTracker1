import express from "express";
import { addHabit, deleteTheHabit, findHabitToUpdate, getAllHabits, updateHabit } from "../controller/habit.controller.js";

const router = express.Router();

router.route("/").get(getAllHabits);
router.route("/add").get((req,res)=>{res.render('addHabit')});
router.route("/add").post(addHabit);
router.route('/update/:id').get(findHabitToUpdate);
router.route('/update/:id').post(updateHabit);
router.route('/:id').delete(deleteTheHabit);

export default router;