// First access my html elements
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

// function to show notes from local storage when page loads
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// function to update local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}


// create an event listener on my button 
// to create a new note when clicked
createBtn.addEventListener("click", () => {
    let input = document.createElement("p");
    let img = document.createElement("img");
    input.className = "input-box";
    input.setAttribute("contenteditable", "true")
    img.src = "images/delete.png";
    notesContainer.appendChild(input).appendChild(img);
})


// Event delegation to handle delete and update note events
// by attaching a single event listener to the parent container
// and determining the target of the event
notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } 
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

// Event Delegation Explanation:
// Event delegation is a JavaScript technique where a single event 
// listener is attached to a parent element to handle events on its child 
// elements using event bubbling.


// Handle Enter key to insert line break instead of submitting form
document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})