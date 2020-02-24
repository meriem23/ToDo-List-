var toInput = document.querySelector(".to_input")
var addBtn = document.querySelector(".add_btn")
var container = document.querySelector(".container")


// Add new element
addBtn.addEventListener("click", () => {
    let row = document.createElement("div")
    row.classList.add("row")
    let col = document.createElement("div")
    col.className = "col d-flex"
    let btnCheck = document.createElement("button")
    btnCheck.className = "btn btn-outline-success btn_color"
    btnCheck.innerHTML = "Check"
    let btnRemove = document.createElement("button")
    btnRemove.className = "btn btn-outline-danger btn_color"
    btnRemove.innerHTML = "Remove"
    let text = document.createElement("h4")
    text.innerHTML = toInput.value
    col.appendChild(btnCheck)
    col.appendChild(btnRemove)
    col.appendChild(text)
    row.append(col)
    container.append(row)
    // Check and Remove
    btnCheck.addEventListener("click", () => {
        text.classList.toggle("todo")
        if (btnCheck.innerHTML === "Check") {
            btnCheck.innerHTML = "Uncheck";
          } else {
            btnCheck.innerHTML = "Check";
          }
        })
    btnRemove.addEventListener("click", () => {
        row.remove()
    })
})

