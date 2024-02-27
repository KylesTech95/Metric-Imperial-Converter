function ConvertHandler() {
  
  this.getNum = function(input) {
    return input
  };
  
  this.getUnit = function(input) {
    return /^l$/i.test(input) ? 'L' : input.toLowerCase()
  };
  
  this.getReturnUnit = function(initUnit) {
    let res
    switch(true){
      case initUnit=='mi':
        res = 'km'
        break;
      case initUnit=='lbs':
        res = 'kg'
        break;
      case initUnit=='gal':
        res = 'L'
        break;
        case initUnit=='km':
        res = 'mi'
        break;
        case initUnit=='L':
        res = 'gal'
        break;
        case initUnit=='kg':
        res = 'lbs'
        break;
      default:
        console.log(undefined);
        break;
  };
  return res
}

  this.spellOutUnit = function(unit) {
    let res
    switch(true){
      case unit=='mi':
        res = 'miles'
        break;
      case unit=='lbs':
        res = 'pounds'
        break;
      case unit=='gal':
        res = 'gallons'
        break;
        case unit=='km':
        res = 'kilometers'
        break;
        case unit=='L':
        res = 'liters'
        break;
        case unit=='kg':
        res = 'kilograms'
        break;
      default:
        console.log(undefined);
        break;
  };
  return res
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let res
    switch(true){
      case initUnit == 'mi':
        res = (miToKm*initNum).toFixed(5)
        break;
      case initUnit == 'lbs':
        res = (lbsToKg*initNum).toFixed(5)
        break;
      case initUnit == 'gal':
        res = (galToL*initNum).toFixed(5)
        break;
      case initUnit == 'kg':
        res = (initNum/lbsToKg).toFixed(5)
        break;
      case initUnit == 'L':
        res = (initNum/galToL).toFixed(5)
        break;
      case initUnit == 'km':
        res = (initNum/miToKm).toFixed(5)
        break;
    }
    return res
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = { initNum: initNum,initUnit: initUnit,returnNum: returnNum, returnUnit: returnUnit,string:`${initNum} ${initNum != 1 ? this.spellOutUnit(initUnit) : this.spellOutUnit(initUnit).slice(0,-1)} converts to ${returnNum} ${returnNum != 1 ? this.spellOutUnit(returnUnit) : this.spellOutUnit(returnUnit).slice(0,-1)}` }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
