function MyEval(num){
    let arr = num.split``
    try{
      if((/\d/.test(arr[0])&&/\d/.test(arr[arr.length-1])) || arr.length < 2){
        console.log(arr)
      }
      else{
        return NaN
      }
    }
    catch(error){
      console.log(error)
    }
  }

  module.exports = MyEval;
