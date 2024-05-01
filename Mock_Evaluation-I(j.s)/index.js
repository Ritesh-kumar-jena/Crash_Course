let cont=document.getElementById("container")

// create this for showing product in UI

let productDetails=document.createElement("div")
productDetails.id="product"

// create navbar

let navbar=document.createElement("div")
navbar.id="navbar"

// create sort functionality select tag

let sortPrice=document.createElement("select")
sortPrice.id="short"
let sortOption1=document.createElement("option")
sortOption1.innerText="Sort"
let sortOption2=document.createElement("option")
sortOption2.innerText="Low-to-High"
sortOption2. value="low"
let sortOption3=document.createElement("option")
sortOption3.innerText="High-to-Low"
sortOption3. value="high"
sortPrice.append(sortOption1,sortOption2,sortOption3)


// fetch the data

const fatchData=async()=>{
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json()
    let res2=await fetch("https://fakestoreapi.com/products/categories")
    let data2=await res2.json()
    showData(data,data2)
}
fatchData()

//  sort product in asc and desc

const showProduct=(d)=>{

sortPrice.addEventListener("change",function(){
   let arr=[...d]
   let sortproduct=sortPrice.value
   if(sortproduct==="low"){
      arr.sort((a,b)=>a.price-b.price)
   }
   else if(sortproduct==="high"){
      arr.sort((a,b)=>b.price-a.price)
   }
   else if(sortproduct===""){
      arr=[...data]
   }
   displaydata(arr)
})
displaydata(d)
}

// show products in UI

 function displaydata(product){
   productDetails.innerHTML=""
 product.forEach((ele)=>{
    let div=document.createElement("div")
    div.className="product"
    div.innerHTML=`
    <img src=${ele.image} alt="">
    <h3>${ele.title} </h3>
    <p><b>Price : ${ele.price} </b></p>

    `
   productDetails.append(div) 
 })
 }

// After fetch take the data arry in a function

const showData=(products,catagory)=>{


//   create heading

let heading=document.createElement("h1")
heading.innerHTML=`<b>Product Listing Page</b>`

// create search bar

let searchbar=document.createElement("input")
searchbar.placeholder="Search Product..."
searchbar.id="searchbar"

// create category filter select tag

let selectCatagory=document.createElement("select")
let option1=document.createElement("option")
option1.innerText="All product"
option1.value=""
selectCatagory.append(option1)
catagory.forEach((ele)=>{
   let option=document.createElement("option")
   option.innerText=ele
   option.value=ele
   selectCatagory.append(option)
})

// apend navbar and products

navbar.append(heading,selectCatagory,searchbar,sortPrice)
cont.append(navbar,productDetails)

showProduct(products)

// filter products by category

selectCatagory.addEventListener("change",function(){
   let productarr=[]
   let productCatagory= selectCatagory.value
   products.forEach((ele)=>{
         if(productCatagory===ele.category){
            productarr.push(ele)
         }
         else if(productCatagory===""){
            productarr=[...products]
         }
      showProduct(productarr)
   })
  
})
 
// search Functionality

searchbar.addEventListener("input",function(){
  let search= searchbar.value.toLocaleLowerCase()
  let data=[...products]
  let productData=data.filter((e)=>{
   let productTitle=e.title.toLocaleLowerCase()
   return productTitle.includes(search)
  })
  if(productData.length>0){
   showProduct(productData)
  }
  else{
   alert("This item is not available")
   showProduct(data)
  }
})
searchbar.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
      searchbar.value=""
    }
})

}


