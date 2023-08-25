import React from "react"
import { Link } from "react-router-dom"

function NoteListAction({
    noteId
}) {
    return <div className="note__action__detail">
        <Link to={`/${noteId}`}>DETAIL</Link>
    </div>
}

export default NoteListAction