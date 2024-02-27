'use strict';
const myEval = require('../public/eval.js')

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

const valUnit = (u) => {
  return ['kg','lbs','L','km','gal','mi','l'].includes(u)
}
//  myEval = (num) => {
//   let arr = num.split``
//   try{
//     if((/\d/.test(arr[0])&&/\d/.test(arr[arr.length-1])) || arr.length < 2){
//       console.log(arr)
//     }
//     else{
//       return NaN
//     }
//   }
//   catch(error){
//     console.log(error)
//   }
// }
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
    // console.log(sp_unit)
    // console.log(reuturn_n)
    // console.log(string)
    console.log(string)
  }

  app.get('/api/convert',(req,res)=>{
    const { input } = req.query;
    let num = (input.match(/[^a-z]/g)||[]).join`` // get numbers in eval form
    let unit = (input.match(/[a-z]/gi)||[]).join`` // get units
    if(num==undefined){
      num = 1;
      console.log(num)
    } 
    console.log(valUnit(unit))
    console.log(myEval(num))
    try {
      if(!myEval(num)&&!valUnit(unit)){
        res.send('invalid number and unit')
      }
      else if(!myEval(num)&&valUnit(unit)){
        res.send('invalid number')
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
