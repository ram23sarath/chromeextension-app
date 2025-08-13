let myLeads = []
let inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteButton = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteButton.addEventListener("dblclick", function() { 
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads) {
    let listItems = ""
    
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
                        <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                        </a>
                     </li>`
    }

    ulEl.innerHTML = listItems
}