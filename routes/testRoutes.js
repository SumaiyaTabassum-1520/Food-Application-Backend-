const { testUserController } = require("../controllers/testController")

const express = require(`express`)


//router object
const router = express.Router()

//routes GET/POST/UPDATE/DELETE
router.get(`/test-user`,testUserController)

//export
module.exports = router