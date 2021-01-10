const axios = require('axios');
exports.createMail = async (req, res, next) => {

    try{
         const result = await axios({
            headers: {'SOAPAction': `${process.env.SOAP_HOST}/createMessage`},
            method: 'post',
            data: req.body,
            url: `${process.env.SOAP_HOST}/createMessage`
         });

         res.status(200).json({
            status: 'success',
            result
         });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getAllMessages = async (req, res, next) => {
 
    try{
         const result = await axios({
            headers: {'SOAPAction': `${process.env.SOAP_HOST}/getAllMessages`},
            method: 'post',
            data: req.body,
            url: `${process.env.SOAP_HOST}/getAllMessages`
         });

         res.status(200).json({
            status: 'success',
            result
         });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getOneMessage = async (req, res, next) => {

    try{
         const result = await axios({
            headers: {'SOAPAction': `${process.env.SOAP_HOST}/getMessage`},
            method: 'post',
            data: req.body,
            url: `${process.env.SOAP_HOST}/getMessage`
         });

         res.status(200).json({
            status: 'success',
            result
         });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};