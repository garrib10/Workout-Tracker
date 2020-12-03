const app = require("express").Router();
const Workout = require("../models/workout.js");

// Getting a 404 error with post request// 
app.post("/api/workout",(req, res)=>{
  console.log("Adding a New Workout")
  Workout.create(req.body)
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});

 app.put("/api/workouts/:id", (req,res) => {
   console.logt("Added an exercise")
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: req.body }},
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(6)
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = app;
