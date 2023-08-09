import React from 'react'

import NoData from './NoData'
import NoteDelete from './NoteDelete'
import { convertDate } from '../utils/date'

function NoteList({
    notes,
    onDelete
}) {
    if(notes.length == 0){
        return <NoData/>
    }

    return <div className='note__list'>
        { notes.map((note) => (
            <div key={note.id} className='note__item'>

                <NoteDelete noteId={note.id} onDelete={onDelete}/>

                <h3 className='note__title'>{note.title}</h3>
                <span className='note__date'>{convertDate(note.createdAt)}</span>

                <p className='note__body'>{note.body}</p>
            </div>
        )) }
    </div>
}

export default NoteList