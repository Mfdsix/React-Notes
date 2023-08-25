import React from "react"

function NoteDetailAction({
    isArchived,
    onDelete,
    onArchive
}) {
    return <div className="note__action flex__end">
        <button onClick={onArchive} className="btn btn__submit mr-1" type="button">{ isArchived ? 'Cancel Archive' : 'Archive' }</button>
        <button onClick={onDelete} className="btn btn__cancel" type="button">Delete</button>
    </div>
}

export default NoteDetailAction