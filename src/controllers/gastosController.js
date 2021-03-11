const Gastos = require('../models/gastos');
const User = require('../models/user');

const gastosCtrl = {
    /**
     * Controller de registro de posts basica
     */
    creat: async (req, res) => {
        try {
            const gastos = await new Gastos(req.body);

            gastos.save((err, gastos) => {
                if(err) {
                    return res.status(400).json({
                        err:'the registration so Gastos is not fineshed'
                    });
                }
            });

            res.json({gastos});

        } catch (err) {
            return res.status(400).json({
                error: 'badrequest, it is not possible complete action post'
            });
        }
    },



    /*
     * controller de get basica
     */
    get: async (req, res) => {

        try{
            const gastos = await Gastos.find();
            res.json({gastos});

        } catch (err) {
            return res.status(400).json(
                {error: 'bad request, it is not possible complete action get'
            });
        }  
    },



    /*
     * controller de put basica
     */
    update: async (req, res) => {

        try {
            const {body} = req.body;
            await Gastos.findOneAndUpdate({_id: req.params.id},{body});

            res.json({msg:"update in Gastos is complete"});
        }catch (err) {
            return res.status(400).json({
                error: 'bad request, it is not possible complete action update'
            });
        }
    },



    /*
     * controller de delete basica
     */
    delete: async (req, res) => {
        try{
            await Gastos.findByIdAndDelete(req.params.id);
            res.json({msg:"the Gastos are delete"});

        }catch (err) {
            return res.status(400).json({
                error: 'bad request, it is not possible complete action delete'
            });
        }
    }


    
}

module.exports = gastosCtrl;