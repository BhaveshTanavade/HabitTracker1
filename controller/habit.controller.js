import { HabitModel } from "../models/habit.model.js";

export const addHabit = async(req, res)=>{
    try{
        const { name } = req.body;
        if(!name){
          return res.status(400).send('Habit name is required');
        }
        const newHabit = new HabitModel({ name });
        await newHabit.save();
        res.redirect('/habits');
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    };
};

export const getAllHabits = async (req, res) => {
    try {
      const habits = await HabitModel.find();
      res.render('allHabits', { habits });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

  export const updateHabit = async (req, res) => {
    try {
      console.log(req.body);
      const habit = await HabitModel.findById(req.params.id);
      if (habit == null) {
        return res.status(404).json({ message: 'Habit not found' });
      }
      if (req.body.status != null) {
        habit.status = req.body.status;
      }
      const updatedHabit = await habit.save();
      res.redirect('/habits');
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  
  export const findHabitToUpdate = async (req, res) => {
    try {
      const habits = await HabitModel.findById({_id:req.params.id});
      // console.log(habits);
      res.render('updateHabit', { habit : habits });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

  export const deleteTheHabit = async (req, res) => {
    try {
      const habit = await HabitModel.findByIdAndDelete({_id:req.params.id});
      // console.log(habits);
      res.sendStatus(204);
    } catch (err) {
      console.error('Error deleting habit:', err);
      res.sendStatus(500);
    }
  };