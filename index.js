let myLeads = []
let inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteButton = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderData()
}

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderData()
    console.log(localStorage.getItem("myLeads"))
})

deleteButton.addEventListener("dblclick", function() { 
    localStorage.clear()
    myLeads = []
    renderData()
})

function renderData() {
    let listItems = ""
    
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
                        <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                        </a>
                     </li>`
    }

    ulEl.innerHTML = listItems
}