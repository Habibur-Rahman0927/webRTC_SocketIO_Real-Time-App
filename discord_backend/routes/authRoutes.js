const express = require('express');
const router = express.Router();
const { controllers } = require('../controller/auth/authController');
const validator = require('express-joi-validation').createValidator({});
const { registerSchema, loginSchema } = require('../validator/authValidator');
const auth = require('../middleware/auth')

router.post(
    '/register',
    validator.body(registerSchema),
    controllers.postRegister
);
router.post(
    '/login',
    validator.body(loginSchema),
    controllers.postLogin
);

router.get('/test', auth, (req, res)=>{
    return res.json('hello')
})

module.exports = router;