//Object shorthand notation:
const age = 26
const userName = "Abbas"
const info = {
    age, //this is shorthand
    name:userName
}

//Object destructuring:

const product={
    lable:"Abbas",
    stock:36
 }
// const lable = product.lable 
// const stock = product.stock

const {lable,stock} = product

const transaction = (type,{lable})=>{
    console.log("Type is "+type+" Lable is "+lable)
}

transaction("order",product)