const inStock = true
const onSale = true
const price =100

if( inStock===true && (onSale===true || price < 80)){
  alert ("buy!!!")
}


const temp = 83
const willRain =true
const humid =(willRain ===true && temp>80)
console.log (humid)