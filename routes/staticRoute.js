const express = require("express")
const router = express.Router()

const { giveKey } = require("../controllers/giveKey.js")
// router.route("/")
//     .get((req, res) => {
//         res.render("index")
//     })
router.route("/key")
    .get(giveKey)
router.route("/easy")
    .get((req, res) => {
        res.render("easy")
    })
module.exports = router

