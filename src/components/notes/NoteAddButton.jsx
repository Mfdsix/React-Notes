import React from "react"
import { Link } from "react-router-dom"

function NoteAddButton(){
    return <div className="flex__end">
        <Link to='/new' className="btn btn__submit">Write New</Link>
    </div>
}

export default NoteAddButton