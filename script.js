// let arr =[2,4,5,6,7]

// let nArr=  arr.map(ele => ele*ele)

//  console.log(nArr);

// let arr =["Apple","banana","pine"]

//  let lArr =  arr.map(ele=>ele.length);

//  console.log(lArr);

// let arr =[25,36,144,81]

// let sqrtArr = arr.map(ele=>Math.sqrt(ele));
// console.log(sqrtArr);

let Products = [
    {pCode:1,pName:"Apple"},
    {pCode:2,pName:"banana"},
    {pCode:3,pName:"Pear"},
    {pCode:4,pName:"Peach"}
]

let pNames = Products.map(ele =>ele.pName);
console.log(pNames);
