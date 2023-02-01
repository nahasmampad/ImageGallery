const express = require ("express")
const router = express.Router()
const userCtrl = require("../Controllers/userControllers")
const {authUser} = require ('../helpers/AuthMid')



router.post('/signin',userCtrl.siginIn)
router.post('/login',userCtrl.login)



module.exports = router;