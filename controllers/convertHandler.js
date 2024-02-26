function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = parseFloat(input.match(/[(\d+)|(\d+)\.\d*]/g).join``);
    console.log('number: '+result)
    console.log(result);
    return result
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-z]/ig).join``;
    console.log('unit: '+result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let u = initUnit.match(/[a-z]/ig).join``;
    let d = parseFloat(initUnit.match(/[(\d+)|(\d+)\.\d*]/g).join``);

    let res = this.convert(d,u)
    res = res.match(/[a-z]/ig).join``;

    console.log(res)
    return res
    
  };
   this.getReturnNum = function(initUnit) {
    let u = initUnit.match(/[a-z]/ig).join``;
    let d = parseFloat(initUnit.match(/[(\d+)|(\d+)\.\d*]/g).join``);

    let res = this.convert(d,u)
    res = parseFloat(res.match(/[(\d+)|(\d+)\.\d*]/g).join``);

    console.log(res)
    return res
    
  };

  this.spellOutUnit = function(unit) {
    let u = unit.match(/[a-z]/ig).join``;
    switch(true){
      case u=='mi':
        result = 'miles'
        break;
      case u=='lbs':
        result = 'pounds'
        break;
      case u=='gal':
        result = 'gallons'
        break;
        case u=='km':
        result = 'kilometers'
        break;
        case u=='l':
        result = 'liters'
        break;
        case u=='kg':
        result = 'kilograms'
        break;
      default:
        console.log(undefined);
        break;
    }
    console.log('speell out unit: '+result)
    return result;
    
  
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(true){
      case initUnit=='mi':
        result = (miToKm * initNum).toFixed(5)+'km'
        break;
      case initUnit=='lbs':
        result = (lbsToKg * initNum).toFixed(5)+'kg'
        break;
      case initUnit=='gal':
        result = (galToL * initNum).toFixed(5)+'l'
        break;
      default:
        console.log(undefined);
        break;
    }
    console.log('converted: '+result)
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return result;
  };
  
}

module.exports = ConvertHandler;
