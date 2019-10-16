const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

// @route              POST api/users      
// @desc (description) Register a user
// @access             Public
router.post('/', [
  check('name', 'Please add name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a valid password').isLength({ min:6})
],
  async (req, res) => {//this has to be async since user is await
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()})
    }
    const { name, email, password } = req.body
    
    try {
      let user = await User.findOne({ email: email })
      
      if (user) {
        return res.status(400).json({msg:'User already exists'})
      }
      user = new User({
        name, email, password
      })
      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)
      await user.save()

      //creating a payload - an object that we want to send in the token
      const payload = {
        user: {
          id: user.id
        }
      }
      //to generate a token we need to sign it
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
          if (err) throw err;
          res.json({token})
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
    }
})



module.exports = router;