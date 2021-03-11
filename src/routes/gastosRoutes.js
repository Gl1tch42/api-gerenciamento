const express = require('express');
const router = express.Router();

const gastosCtrl = require('../controllers/gastosController');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');
const authMe = require('../middlewares/authMe')


router.post('/create', gastosCtrl.creat );
router.get('/get', gastosCtrl.get );
router.put('/update/:id', gastosCtrl.update );
router.delete('/delete/:id', gastosCtrl.delete );

module.exports = router;