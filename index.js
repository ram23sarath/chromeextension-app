let myLeads = ["Jaime", "Nolan", "Denis"]
let inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItems