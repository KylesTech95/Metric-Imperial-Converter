function equation(num){
    let n;
    if(/\//.test(num)){
    n = num.split`/`
    // console.log(n)
    n=n.reduce((a,b)=>a/b)+''
    if(/\./g.test(n)){
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
return n

}


function MyEval(num){
    let res;
    let arr = num.split``
    try{
      if((/\d/.test(arr[0])&&/\d/.test(arr[arr.length-1])) || arr.length < 2){
        res = equation(num)
        return res;
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
