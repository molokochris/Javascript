let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    ulEl.textContent = ""
    myLeads = []
})

inputBtn.addEventListener("click", function() {
    let input = inputEl.value
    myLeads.push(input)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render(myLeads)
})


function render(leads) { 
    let i = 0
    let listItems = ""
    while (i < leads.length) {
       listItems += 
       `<li><a href=//"${leads[i]}" target="_blank">${leads[i]}</a></li>`

        i++
    }
    i = i
    ulEl.innerHTML = listItems
}
