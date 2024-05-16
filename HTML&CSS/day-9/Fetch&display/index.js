// catch the elements/tags(button,div)

let button=document.querySelector("button")
let cont=document.getElementById("container")

// fetch the data from api

async function fetchData(){
 let res=await fetch("https://reqres.in/api/users?page=2")
 let resData=await res.json()
 let data=resData.data

//  call the function which append our data in ui and give fetch data as argument
showData(data)
}

// create a function which show our data in ui
function showData(data){
//   loop over fetch data array

data.forEach((ele)=>{
   let div= document.createElement("div")
   div.innerHTML=`
   <img src=${ele.avatar} alt="">
   <h3>${ele.first_name} ${ele.last_name}</h3>
   <p><b>${ele.email}</b></p>
   `
  cont.append(div)
})
}

// when we click the button then our data will fetch and append in ui

button.addEventListener("click",()=>{
    fetchData()
})