const express = require('express');
const router = express.Router();

// Controllers
//var apiGeneralController = require("./../../controllers/apiGeneralController");
//var userController = require("./../../controllers/userController");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


/* GET api listing. */
//router.get('/events', apiGeneralController.getEvents);
router.get('/setAuth', apiGeneralController.setAuth);
//TODO: change these to include access_token, not fbid
//router.get('/getUser/:fbId/:access_token', userController.getUser);
//router.post('/eventAction/:actionType/:eventId/:userId/:access_token', apiGeneralController.eventPost);
//router.post("/friend/:access_token/:friendId", apiGeneralController.friendPost);

//SHOULD THESE BE DELETED
// router.post('/join/:eventId/:user_id', apiGeneralController.postJoin);
// router.post('/interested/:eventId/:access_token', apiGeneralController.postInterested);
// router.post('/decline/:eventId/:access_token', apiGeneralController.postDecline);

module.exports = router;
