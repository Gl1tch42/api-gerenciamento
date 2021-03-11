const express = require('express');
const router = express.Router();

const empregadosCtrl = require('../controllers/empregadosController');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');
const authMe = require('../middlewares/authMe');


router.post('/create', empregadosCtrl.creat );
router.get('/get', empregadosCtrl.get);
router.put('/update/:id', empregadosCtrl.update);
router.delete('/delete/:id', empregadosCtrl.delete);

module.exports = router;