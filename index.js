//INPUT BUTTON// && Display f elements
let myLeads = []
let inputBtn= document.getElementById("input-btn")
const  inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render()
    
})

function render(){
    let listItem =""
    for(i = 0; i < myLeads.length;i++){
        listItem += `
                    <li>
                        <a targe='_blank' href='
                        ${myLeads[i]}'>${myLeads[i]}
                        </a>
                    </li>
                    `
    }
    
    ulEl.innerHTML = listItem 
}



