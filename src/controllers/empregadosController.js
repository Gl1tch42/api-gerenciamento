const Empregado = require('../models/empregados');
const User = require('../models/user');

const empregadosCtrl = {
    /**
     * Controller de registro de posts basica
     */
    creat: async (req, res) => {
        try {
            const empregado = await new Empregado(req.body);


            empregado.save((err, empregado) => {
                if(err) {
                    return res.status(400).json({
                        err:'the registration so empregado is not fineshed'
                    });
                }
            });

            res.json({empregado});

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
            const empregados = await Empregado.find();
            res.json(empregados);

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
            await Empregado.findOneAndUpdate({_id: req.params.id},{body});

            res.json({msg:"update in empregado is complete"});
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
            await Empregado.findByIdAndDelete(req.params.id);
            res.json({msg:"the empregado are delete"});

        }catch (err) {
            return res.status(400).json({
                error: 'bad request, it is not possible complete action delete'
            });
        }
    }


    
}

module.exports = empregadosCtrl;