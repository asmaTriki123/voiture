const express= require('express')
const router = express.Router();
const controllers = require('../controllers/user')

router.post('/sigup',controllers.ajouteruser);
router.post('/sigin',controllers.sigin );

module.exports = router
