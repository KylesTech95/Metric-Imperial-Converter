function equation(num){
    let n;
    console.log('equation: '+n)
    if(/\//.test(num)){
    n = num.split`/`
    // console.log(n)
    n=n.reduce((a,b)=>a/b)+''
    if(/\./g.test(n)){
      console.log('my form of decimal')
        console.log('decimal')
        n=(+n).toFixed(5)
    }
    else{
        console.log('no deci')
        n = +n
    }
    // console.log(n)
    }
    else{
        n = num;
    }
// console.log(n)
return n === Infinity ? false : n

}


function MyEval(num){
    let res;
    let arr = num.split``
    console.log(num)
    // console.log(arr)
    // console.log(arr.length)
    try{
      if((/[\.|\d]/.test(arr[0])&&/[\.|\d]/.test(arr[arr.length-1]))){
        console.log('pass regex: '+num)
        res = equation(num)
        console.log(res)
        return res;
      }
      else if(arr.length < 2){
        return num
      }
      else{
        return false
      }
    }
    catch(error){
      console.log(error)
    }
  }

  module.exports = MyEval;
