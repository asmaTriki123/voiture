

const express = require('express')
const router = express.Router()
const controller = require('../controllers/voiture')

router.post('/',controller.ajoutervoiture)

router.get('/', controller.getvoiture)
router.get('/:id', controller.getbyidvoiture)
router.patch('/:id',controller.modifvoiture)
router.delete('/:id',controller.deltevoiture)
module.exports = router;