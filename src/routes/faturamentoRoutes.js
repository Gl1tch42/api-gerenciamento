const express = require('express');
const router = express.Router();

const faturamentoCtrl = require('../controllers/faturamentoControler');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');
const authMe = require('../middlewares/authMe')


router.post('/create', faturamentoCtrl.creat );
router.get('/get', faturamentoCtrl.get);
router.put('/update/:id', faturamentoCtrl.update);
router.delete('/delete/:id', faturamentoCtrl.delete);

module.exports = router;