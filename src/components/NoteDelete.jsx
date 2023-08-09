import React from "react"

function NoteDelete({
    onDelete,
    noteId
}) {
    return <div className="note__delete">
        <button onClick={() => onDelete(noteId)} className="btn btn__transparent" type="button">HAPUS</button>
    </div>
}

export default NoteDelete