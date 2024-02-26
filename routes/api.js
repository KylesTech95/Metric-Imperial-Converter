'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  // let num = convertHandler.getNum('3.1mi')
  // let unit = convertHandler.getUnit('3.1mi')
  // convertHandler.convert(num,unit)
  // convertHandler.getReturnUnit('4gal')
  // convertHandler.getReturnNum('4gal')
  // convertHandler.spellOutUnit('4gal')


  // /api/convert endpoint
app.get('/api/convert',(req,res)=>{
  const { input } = req.query
  const num = convertHandler.getNum(input)
  const unit = convertHandler.getUnit(input)
  const long_unit_init = convertHandler.spellOutUnit(input)

  const cNum = convertHandler.getReturnNum(input)
  const cUnit = convertHandler.getReturnUnit(input)
  const long_unit_return = convertHandler.spellOutUnit(cUnit)
  res.json({ initNum: num, initUnit: unit, returnNum: cNum, returnUnit: cUnit, string: `${num} ${long_unit_init} converts to ${cNum} ${long_unit_return}` })
})
};


