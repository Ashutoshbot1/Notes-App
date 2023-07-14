const addBtn=document.querySelector("#btn");


addBtn.addEventListener("click",()=>{
    addNote();
})

const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];

    notes.forEach((note)=>{
        data.push(note.value);
    })

    // console.log(data);

    if(data.length===0){
        localStorage.removeItem("notes");
    }
    else{

        localStorage.setItem("notes",JSON.stringify(data));
    }
}


const addNote=(text="")=>{
    const main=document.querySelector(".main");
    // console.log(main);

    const newNote=document.createElement("div");
    newNote.className="note";

    newNote.innerHTML=`
            <div class="tool">
                <i class="delete fa-solid fa-trash"></i>
                <i class="save fa-solid fa-floppy-disk"></i>
            </div>

            <textarea>${text}</textarea>    
    `;

    

    newNote.querySelector(".delete").addEventListener("click",
        ()=>{
            newNote.remove();
            saveNotes();
        }
    );

    newNote.querySelector(".save").addEventListener("click",
        function(){
            saveNotes();
        }
    )

    // console.log(newNote);

    main.appendChild(newNote);
    saveNotes(); 
}



(
    function(){
        const lsNotes=JSON.parse(localStorage.getItem("notes"));


        if(lsNotes===null){
            addNote();
        }
        else{

            lsNotes.forEach(
                (lsNote)=>{
                    addNote(lsNote);
                }
            )
        }

        // if(lsNotes.length==0){
        //     localStorage.removeItem("notes")
        // }
        // else{

        //     addNote();
        // }
    }
)()