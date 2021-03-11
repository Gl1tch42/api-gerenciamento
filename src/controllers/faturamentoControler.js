const Faturamento = require('../models/faturamento');
const User = require('../models/user');

const faturamentoCtrl = {
    /**
     * Controller de registro de posts basica
     */
    creat: async (req, res) => {
        try {
            const faturamento = await new Faturamento(req.body);


            faturamento.save((err, faturamento) => {
                if(err) {
                    return res.status(400).json({
                        err:'the registration so faturamento is not fineshed'
                    });
                }
            });

            res.json({faturamento});

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
            const faturamento = await Faturamento.find();
            res.json({faturamento});

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
            await Faturamento.findOneAndUpdate({_id: req.params.id},{body});

            res.json({msg:"update in faturamento is complete"});
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
            await Faturamento.findByIdAndDelete(req.params.id);
            res.json({msg:"the faturamento are delete"});

        }catch (err) {
            return res.status(400).json({
                error: 'bad request, it is not possible complete action delete'
            });
        }
    }


    
}

module.exports = faturamentoCtrl;