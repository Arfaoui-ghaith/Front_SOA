const express = require('express');
const router = express.Router();

const mailController = require('./../controllers/mailController');


router.route('/createMessage')
    .post(mailController.createMail);

router.route('/getAllMessages')
    .post(mailController.getAllMessages);

router.route('/getMessage')
    .post(mailController.getOneMessage);

module.exports = router;