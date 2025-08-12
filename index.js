let myLeads = ["Jaime", "Nolan", "Denis"]
let inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

console.log(myLeads)