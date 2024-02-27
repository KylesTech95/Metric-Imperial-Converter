function equation(num){
    let n;
    if(/\//.test(num)){
    n = num.split`/`
    // console.log(n)
    n=n.reduce((a,b)=>a/b)+''
    if(/\./g.test(n)){
        n=(+n).toFixed(5)
    }
    else{
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

    try{
      if((/[\.|\d]/.test(arr[0])&&/[\.|\d]/.test(arr[arr.length-1]))){
        res = equation(num)
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
