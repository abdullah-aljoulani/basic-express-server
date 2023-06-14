'use strict'

module.exports = (req, res, next) =>{
    let param = req.params.name;
    if(isNaN(+param)){   
        req.query = param;
        next();
    }else {
        next(500)
    }
}