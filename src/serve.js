const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3333;
const cors = require('cors');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URL, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

}, err => {
    if (err) throw err
    console.log('dataBase are connect!');
});


/**
 * rotas principais
 */

const empregadosController = require('./routes/empregadosRoutes');
const gastosController = require('./routes/gastosRoutes');
const faturamentoController = require('./routes/faturamentoRoutes');
const authController = require('./routes/authRoutes');

app.use(cors(
    {
      origin: '*',
    }
  ));

app.use('/empregados', empregadosController);
app.use('/gastos', gastosController);
app.use('/faturamento', faturamentoController);
app.use('/auth', authController);


app.listen(port);