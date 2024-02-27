'use strict';
const myEval = require('../public/eval.js')

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

const valUnit = (u) => {
  let res = u.toLowerCase()
  return ['kg','lbs','L','km','gal','mi','l'].includes(res)
}

module.exports = function (app) {  
  let convertHandler = new ConvertHandler();
  const startConvert = (num,unit,res) => {
    // console.log(num,unit)
    // res.json({unit:unit,number:num})
    let n = myEval(convertHandler.getNum(num)) // initNum
    let u = convertHandler.getUnit(unit) //initUnit
    let return_n = convertHandler.convert(n,u)
    let return_u = convertHandler.getReturnUnit(u) //return unit
    let string = convertHandler.getString(n,u,return_n,return_u)
    // console.log(typeof n)
    // console.log(n)
    // console.log(u)
    // console.log(return_u)
    // console.log(return_n)
    // console.log(string)
    res.send(string)
  }

  app.get('/api/convert',(req,res)=>{
    const { input } = req.query;
    let num = (input.match(/[^a-z]/gi)||[1]).join`` // get numbers in eval form
    let unit = (input.match(/[a-z]/gi)||[]).join`` // get units

    try {
      if(!myEval(num)&&!valUnit(unit)){
        res.send('invalid number and unit')
      }
      else if(!myEval(num)&&valUnit(unit)){
        res.send('invalid number')
        console.log('so invalid')
      }
      else if(myEval(num)&&!valUnit(unit)){
        res.send('invalid unit')
      }
      else{
        startConvert(num,unit,res)
      }
    } catch (e) {
        console.log(e)
    }
    
  })
};
