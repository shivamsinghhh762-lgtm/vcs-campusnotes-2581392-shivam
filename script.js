let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    const notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const heading = document.createElement("h3");
        heading.textContent = note.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = note.content;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function () {
            deleteNote(index);
        };

        noteDiv.appendChild(heading);
        noteDiv.appendChild(paragraph);
        noteDiv.appendChild(deleteButton);

        notesList.appendChild(noteDiv);
    });
}

function addNote() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please enter title and content!");
        return;
    }

    const note = {
        title: title,
        content: content
    };

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

displayNotes();