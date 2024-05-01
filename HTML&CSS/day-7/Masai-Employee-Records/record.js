// fill in javascript code here

//some empdetails

let empdetails=[{"employeeName":"harsh","employeeID":"7463","department":"Frontend","experience":"7","email":"harsh@gmai.com","mobile":"8300263322","role":"Senior"},{"employeeName":"rahul","employeeID":"792","department":"IA","experience":"3","email":"rahul@gmail.com","mobile":"373746","role":"Junior"},{"employeeName":"rinku","employeeID":"8719","department":"Operations","experience":"6","email":"rinku@gmail.com","mobile":"373746","role":"Senior"},{"employeeName":"amit","employeeID":"87594","department":"Backend","experience":"4","email":"amit@gmail.com","mobile":"9390093","role":"Junior"},{"employeeName":"asish","employeeID":"8494","department":"Operations","experience":"8","email":"hsoh@gamail.com","mobile":"9390093","role":"Senior"},{"employeeName":"ritesh","employeeID":"01","department":"HR","experience":"10","email":"ritesh@gmail.com","mobile":"9830980938","role":"Senior"}]

let body=document.querySelector("body")
let data=[]
let details=[]
// Form
let result=document.querySelector("div")
result.id="record"

let form=document.querySelector("form")
let table=document.querySelector("table")
let tbody=document.querySelector("tbody")

let selectDepartment=document.createElement("select")
selectDepartment.id="selectDepartment"
let options=document.createElement("option")
options.value=""
options.innerText="Fillter-Department"
let frontend=document.createElement("option")
frontend.value="Frontend"
frontend.innerText="Frontend"
let backend=document.createElement("option")
backend.value="Backend"
backend.innerText="Backend"
let operations=document.createElement("option")
operations.value="Operations"
operations.innerText="Operations"
let hR=document.createElement("option")
hR.value="HR"
hR.innerText="HR"
let iA=document.createElement("option")
iA.value="IA"
iA.innerText="IA"

selectDepartment.append(options,frontend,backend,operations,hR,iA)
result.append(selectDepartment)

// Form

let apendData=(()=>{
    tbody.innerHTML=""
    let detailsData=JSON.parse(localStorage.getItem("EmployeeDetalis"))
    detailsData.map((ele,i)=>{
        let tr=document.createElement("tr")
        tr.innerHTML=`
        <td>${ele.employeeName}</td>
        <td>${ele.employeeID}</td>
        <td>${ele.department}</td>
        <td>${ele.experience}</td>
        <td>${ele.email}</td>
        <td>${ele.mobile}</td>
        <td>${ele.role}</td>
        <td><button class="delete">Delete</button></td>
      `
      let deleted=tr.querySelector(".delete")
      deleted.addEventListener("click",function(){
        detailsData.splice(i,1)
        details=detailsData
        savedata("EmployeeDetalis",details)
        tr.remove()
      })
        tbody.append(tr);
        form.reset();
    
    })

    // filter
    

    selectDepartment.addEventListener("change",function(){
        let Departmentseleted=selectDepartment.value
        let row=tbody.querySelectorAll("tr")
        row.forEach((el)=>{
            let departmentcell=el.querySelector("td:nth-child(3)")
            if(Departmentseleted===""||Departmentseleted===departmentcell.textContent){
                el.style.display = "table-row";
            }
            else{
                el.style.display = "none";
            }
        })
    })
    })



form.addEventListener("submit",function(e){
    e.preventDefault()
    let employeeName = document.getElementById("name").value;
 let employeeID = document.getElementById("employeeID").value;
 let department = document.getElementById("department").value;
let experience = document.getElementById("exp").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mbl").value;

let role;
if (experience > 5) {
  role = "Senior";
} else if (experience >= 2 && experience <= 5) {
  role = "Junior";
} else {
  role = "Fresher";
}
let obj={
    employeeName:employeeName,
    employeeID:employeeID,
    department:department,
    experience:experience,
    email:email,
    mobile:mobile,
    role:role
}
details.push(obj)
savedata("EmployeeDetalis",details)
apendData()

})

//home page

let home=document.createElement("div")
home.id="home"
let register=document.createElement("button")
register.id="reg"
register.innerText="SingUp"
let Log=document.createElement("button")
Log.id="Log"
Log.innerText="Login"
home.append(register,Log)
body.append(home)
register.addEventListener("click",function(){
    home.style.display="none"
    singup.style.display="block"
})
Log.addEventListener("click",function(){
    home.style.display="none"
    log.style.display="block"
})


// singup


let singup=document.createElement("div")
singup.id="singup"
let input=document.createElement("input")
input.placeholder="Name"

let div=document.createElement("div")
div.id="div"

let select=document.createElement("select")
let option=document.createElement("option")
option.innerText="Position"
let optionH=document.createElement("option")
optionH.value="HR"
optionH.innerText="HR"
let optionE=document.createElement("option")
optionE.value="Employee"
optionE.innerText="Employee"
select.append(option,optionH,optionE)

let inp=document.createElement("input")
inp.placeholder="Password"
inp.type="password"

let singin=document.createElement("button")
singin.innerText="SingUp"

let note=document.createElement("h3")
note.innerText="Note:- Only HR can manipulate(add/delete)the data"

div.append(input,select,inp,singin)
singup.append(div,note)
body.append(singup)

// login

let log=document.createElement("div")
log.id="login"

let dev=document.createElement("div")

let Name=document.createElement("input")
Name.placeholder="Name"

let pass=document.createElement("input")
pass.placeholder="Password"
pass.type="password"

let login=document.createElement("button")
login.innerText="Login"

dev.append(Name,pass,login)
log.append(dev)
body.append(log)

function savedata(key,arr){
    localStorage.setItem(key,JSON.stringify(arr))
}

function loaddata(){
    let saveddata=JSON.parse(localStorage.getItem("singup"))
    let savedetails=JSON.parse(localStorage.getItem("EmployeeDetalis"))
    if(saveddata===null){
        savedata("singup",data)
         saveddata=JSON.parse(localStorage.getItem("singup"))
    }
    if(savedetails===null){
        details=empdetails
        savedata("EmployeeDetalis",details)
        savedetails=JSON.parse(localStorage.getItem("EmployeeDetalis"))
    }
    if(savedata){
        data=saveddata
        details=savedetails
    }
}

singin.addEventListener("click",function(){
let obj={
    name:input.value,
    position:select.value,
    pass:inp.value
}
data.push(obj)
savedata("singup",data)
alert("signup succsessfull")
singup.style.display="none"
log.style.display="block"
})

login.addEventListener("click",function(){
    let employeeData=JSON.parse(localStorage.getItem("singup"))
    let resul=employeeData.filter((ele)=>ele.name===Name.value)
    if(resul.length>0){
        let res=resul.filter((ele)=>ele.pass===pass.value)
        if(res.length>0){
        if(res[0].position==="HR"){
            result.style.display="flex"
            log.style.display="none"
            apendData()
        }
        if(res[0].position==="Employee"){
            result.style.display="flex"
            log.style.display="none"
            form.style.display="none"
            
    let detailData=JSON.parse(localStorage.getItem("EmployeeDetalis"))
    detailData.map((ele)=>{
        let trow=document.createElement("tr")
        trow.innerHTML=`
        <td>${ele.employeeName}</td>
        <td>${ele.employeeID}</td>
        <td>${ele.department}</td>
        <td>${ele.experience}</td>
        <td>${ele.email}</td>
        <td>${ele.mobile}</td>
        <td>${ele.role}</td>
        <td><button class="delete">Delete</button></td>
      `
      tbody.append(trow);
      let deleted=trow.querySelector(".delete")
      deleted.addEventListener("click",function(){
       alert("Only HR can delet the data so you have not authorization to delet the data ")
      })
    })
    selectDepartment.addEventListener("change",function(){
        let Departmentselete=selectDepartment.value
        let rows=tbody.querySelectorAll("tr")
        rows.forEach((el)=>{
            let departmentcell=el.querySelector("td:nth-child(3)")
            if(Departmentselete===""||Departmentselete===departmentcell.textContent){
                el.style.display = "table-row";
            }
            else{
                el.style.display = "none";
            }
        })
    })
        }
    }
        if(res.length===0){
            alert("Invaild Password")
            pass.value=""
          }
    }
   if(resul.length===0){
     alert("Invaild Name")
     Name.value=""
     pass.value=""
   }
})


loaddata()