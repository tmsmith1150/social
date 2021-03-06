// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require("express").Router();
const mongojs = require("mongojs");
const sessionStorage = require('express-session');

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((response) => {
      console.log("pineapples and potatoes");
      //   res.redirect(307, "/api/Events");
      res.json(response._id);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
    });
});

router.get("/api/getAllEvents", (req, res) => {
  console.log("made it to get All Events");
  db.Event.find().then((CallieStinks) => {
    console.log("db response");
    console.log(CallieStinks);
    res.json(CallieStinks);
  });
});



// router.get("/api/getMyEvents", (req, res) => {
//   console.log("made it to get My Events");
//   db.Event.findById({_id === participants}, 
//     function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(success);
//     }
//     console.log("db response");
//     console.log(MyEvents);
//     res.json(MyEvents);
//   });
// });



router.post("/api/eventSignUp", (req, res) => {
  const eventId = req.body.eventId;
  let userId = req.body.userId

  console.log("eventid below")
  console.log(eventId)
  console.log("user below")
  console.log(userId)
  db.Event.findOneAndUpdate({ _id: eventId }, { $push: { participants: userId } },
    function (error, success) {
      if (error) {
        console.log(error);
        res.send(error)
      } else {
        console.log(success);
        res.send(success)
      }
    });
});

router.post("/api/createform", (req, res) => {
  console.log("made it to the api create event");
  db.Event.create({
    eventName: req.body.eventName,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    category: req.body.category,
    host: req.body.host,
    // add a form entry for host on the components page
    description: req.body.description,
  })
    .then(() => {
      //res.redirect(307, "/api/Login");
      res.send("Event added!");
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
    });
});

router.get("/api/getMyEvents/:userId", (req, res) => {
  console.log("+++++")
  let userId = req.params.userId;

  console.log("made it to get My Events");
  console.log(userId);

  db.Event.find().then((allEvents) => {
    let newArray = allEvents.filter(event => {
      let match = false;
      if (event.participants.indexOf(userId) < 0){
        return false;
      } else {
        return true;
      }
      // console.log()
      // event.participants.map(participant => {
      //   if (participant === userId) {
      //     match = true
      //   }
      //   if (match === true) {
      //     return event;
      //   }
      // })
    })
    res.json(newArray);
  });
});

module.exports = router;
