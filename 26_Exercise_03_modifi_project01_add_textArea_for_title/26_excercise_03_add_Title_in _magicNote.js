console.log("This tutorial is for excercise 03");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e){
    // UPDATE 1📌📌📌MAKING ANOTHER TEXT AREA & PUSHED IT'S VALUE AN ANOTHER ARRAY NOTE OBJECT 2----------------------------------------------

    let addTextArea2 = document.getElementById("addTextArea2");
    
    let textNotes2 = localStorage.getItem("note2");
    if(textNotes2 === null){
        noteObj2 = [];
    }
    else{
        noteObj2 = JSON.parse([textNotes2]);
    }

    noteObj2.push(addTextArea2.value);
    localStorage.setItem("note2", JSON.stringify(noteObj2));
    addTextArea2.value = "";
    // console.log(noteObj2);
    // ----------------------------------------------


    let addTextArea = document.getElementById("addTextArea");
    let textNotes = localStorage.getItem("note");
    if(textNotes === null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse([textNotes]);
    }

    noteObj.push(addTextArea.value);
    localStorage.setItem("note", JSON.stringify(noteObj));
    addTextArea.value = "";
    // console.log(noteObj);

    


    showNotes();
})
// display-------------------------------------------------------------------

function showNotes(element){

    // UPDATE 2 📌📌📌INITIALIZE ANOTHER NOTE OBJECT 2-------------
    let textNotes2 = localStorage.getItem("note2");
    if(textNotes2 === null){
        noteObj2 = [];
    }
    else{
        noteObj2 = JSON.parse([textNotes2]);
    }
    //--------------------------------



    let textNotes = localStorage.getItem("note");
    if(textNotes === null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse([textNotes]);
    }


    
    
    let html = '';
    noteObj.forEach(function(element, index){
        html+=`<div class="noteCard" style="width: 18rem; margin: 0.7rem; border:2px solid #48D1CC; border-radius: 4px">
            
        <div class="card-body">
          <h5 class="card-title">${noteObj2[index]}</h5>
          <p class="card-text">${element}</p>
          <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>

                `// UPDATE 3 📌📌📌IN H5 TAG WE USE INDEX OF NOTE OBJECT 2(noteObj2)
    
    })

    let notes =document.getElementById("notesss");

    if(noteObj !=0){
        notes.innerHTML = html;
    }
    else{
        notes.innerHTML= `Nothing to show! go above and add notes.`
    }
}


//delete -------------------------------------------------------------------

function deleteNote(index){
    let textNotes = localStorage.getItem("note");
    if(textNotes === null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse([textNotes]);
    }

    noteObj.splice(index, 1);
    noteObj2.splice(index, 1);// UPDATE 4 📌📌📌 DELETE INDEX FROM NOTE OBJECT 2
    localStorage.setItem("note2", JSON.stringify(noteObj2));// UPDATE 5📌📌📌 UPDATE LOCAL STORAGE
    localStorage.setItem("note", JSON.stringify(noteObj));
    showNotes();

}

//searching-------------------------------------------------------------------
let searchText  = document.getElementById("searchId");

searchText.addEventListener("input", function(element){
    let val  =searchText.value.toLowerCase();

    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let elementTxt = element.getElementsByTagName("p")[0].innerText;
        let elementTxt2 = element.getElementsByTagName("h5")[0].innerText;// UPDATE 6📌📌📌 GET H5 TAG AND IN BELLOW LINE CONDITIONED IT'S VALUE 

        if(elementTxt.includes(val) || elementTxt2.includes(val)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }
        
    })

});
