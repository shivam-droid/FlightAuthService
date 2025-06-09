const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user-controller.js');

router.post('/create', UserController.create);
router.delete('/', UserController.destroy);
router.get('/', UserController.getAllUsers);

module.exports = router;
