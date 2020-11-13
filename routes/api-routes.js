const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
     .sort({ day: -1 })
    .limit(7)
    .then(workoutObject => {
      res.json(workoutObject);
    })
    .catch(err => {
      res.status(400).json(err);
    });

    //res.send("works")
});



router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(workoutObject => {
        res.json(workoutObject);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  
      //res.send("works")
  });
  ///api/workouts/" + id,
  router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push:req.body}, {new: true}) 
    .then(workoutObject => {
        res.json(workoutObject);
      })
      .catch(err => {
        res.status(400).json(err);
      });

  });

module.exports = router;
