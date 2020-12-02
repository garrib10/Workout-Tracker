const router = require("express").Router();
const Workout = require("../models/workout.js");

// app is not defined// 
app.post("/api/workouts", (req, res) => {
    console.log("New Workout has been addded")
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

 app.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
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
  Workout.find()
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
