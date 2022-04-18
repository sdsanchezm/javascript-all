//const res = require("express/lib/response");
const boom = require('@hapi/boom');

function validatorHandler(schema, property){
    return (req, res, next) => {
        const data = req[property];
        // information may come from:
        // req.body
        // req.params
        // req.query
        const { error } = schema.validate(data, { abortEarly: false }); // abortEarly, will allows to show all errors at the same time, like this: 	"message": "\"name\" length must be at least 3 characters long. \"price\" must be greater than or equal to 8"

        if(error){
            next(boom.badRequest(error));
        }else {
            next();
        }
    }
};


module.exports = validatorHandler;
