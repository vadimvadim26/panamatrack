const express = require('express')
const passport = require('passport')
const controller = require('../controllers/links')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}),  controller.hotlink)
router.get('/:id', passport.authenticate('jwt', {session: false}),  controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.put('/', passport.authenticate('jwt', {session: false}), controller.update)



module.exports = router 