const { UserServices } = require('../../services');
const isSchemaValid = require('../../utilities/validators');
const { loginSchema  } = require('../../schemas');
const Joi = require('joi');

const login = async (req,res) => {
    const { body } = req;
    const data = { ...body };
    const { errors }  = isSchemaValid({ data, schema: loginSchema });
    if(errors){
        res.status(400).json({
            status : "failed",
            message : errors,
        });
    }
    const { error , response } = await UserServices.login(data);
    if(response){
        res.status(200).json({
            status : "success",
            message : "Login Successfully",
            data : response
        });   
    }else{
        res.status(400).json({
            status : "failed",
            message : error,
        }); 
    }
}

module.exports = {
    login
}