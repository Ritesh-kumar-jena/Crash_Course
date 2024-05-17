// catch the div where we append our data and show in ui

let cont=document.getElementById("container")

// catch the select tag to perform short task
let short=document.getElementById("Short")

// fatch data from ui
async function fatchData(){
    let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    let shortdata=await res.json()
    let data=shortdata.data
    showData(data)
}

// create  a function which shows country data in ui
function showData(data){
    cont.innerHTML=""
    data.forEach((ele)=>{
       let div=document.createElement("div")
       div.innerHTML=`
       <h3>Country: ${ele.country}</h3>
       <p><b>Population: ${ele.population}</b></p>
       <p><b>Rank: ${ele.Rank}</b></p>
       `
       cont.append(div)
    })
}

// create a function which short data in asc and desc order 
async function shortData(){

    if(short.value==="asc"){
        let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=asc")
        let shortdata=await res.json()
        let data=shortdata.data
        showData(data)
    }
    else if(short.value==="desc"){
        let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc")
        let shortdata=await res.json()
        let data=shortdata.data
        showData(data)
    }
    else if(short.value===""){
        let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
        let shortdata=await res.json()
        let data=shortdata.data
        showData(data)
    }
}

// on change select tag value we called short function
short.addEventListener("change",()=>{
    shortData()
})

fatchData()