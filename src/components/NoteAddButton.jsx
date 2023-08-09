import React from "react"

function NoteAddButton({
    onButtonClick
}){
    return <div className="flex__end">
        <button onClick={onButtonClick} className="btn btn__submit">Write New</button>
    </div>
}

export default NoteAddButton