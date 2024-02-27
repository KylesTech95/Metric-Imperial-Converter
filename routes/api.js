'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

const valUnit = (u) => {
  return ['kg','lbs','L','km','gal','mi','l'].includes(u)
}

module.exports = function (app) {  
  let convertHandler = new ConvertHandler();
  const startConvert = (num,unit,res) => {
    // console.log(num,unit)
    // res.json({unit:unit,number:num})
    let n = eval(convertHandler.getNum(num)).toFixed(5); // initNum
    let u = convertHandler.getUnit(unit) //initUnit
    let return_n = convertHandler.convert(n,u)
    let return_u = convertHandler.getReturnUnit(u) //return unit
    let string = convertHandler.getString(n,u,return_n,return_u)
    console.log(unit)
    // console.log(typeof n)
    // console.log(n)
    // console.log(u)
    // console.log(return_u)
    // console.log(sp_unit)
    // console.log(reuturn_n)
    // console.log(string)
    res.json(string)
  }

  app.get('/api/convert',(req,res)=>{
    const { input } = req.query;
    let failed = false;
    let num = (input.match(/[^a-z]/g)||[]).join`` // get numbers in eval form
    let unit = (input.match(/[a-z]/gi)||[]).join`` // get units
    try {
      if(eval(num)==undefined){
        num = 1;
        console.log(num)
      } 
    } catch (e) {
        if (e instanceof SyntaxError) {
          res.send('invalid number')
        }
    }
    
    if(!valUnit(unit)){
      res.send("invalid unit")
    }
    else{
      console.log(unit)
    }
  })
};
