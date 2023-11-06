//INPUT BUTTON// && Display f elements
let myLeads = []
let inputBtn= document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")
let saveBtm = document.getElementById("save-btn")
const  inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItem =""
    for(i = 0; i < leads.length;i++){
        listItem += `
                    <li>
                        <a targe='_blank' href='
                        ${leads[i]}'>${leads[i]}
                        </a>
                    </li>
                    `
    }
    
    ulEl.innerHTML = listItem 
}

const tabs =[
    {url: "aaaaaaaaaaaaaaaa"}
]

/*SAVE TAB BUTTON */
saveBtm.addEventListener("click",function(){
    let xyz = tabs[0].url
    console.log(xyz)
})


/*DELETE BUTTON*/
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads);
})

/*SAVE INPUT BUTTON*/
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    console.log(localStorage.getItem("myLeads"))
})
console.log("leadsFromLocalStorage")





