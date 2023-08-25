import React from "react";

import NoData from "./NoData";
import NoteListAction from "./NoteListAction";
import { convertDate } from "../../utils/date";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  if (notes.length == 0) {
    return <NoData />;
  }

  return (
    <div className="note__list">
      {notes.map((note) => (
        <div key={note.id} className="note__item">
          <NoteListAction noteId={note.id} />

          <h3 className="note__title">{note.title}</h3>
          <span className="note__date">{convertDate(note.createdAt)}</span>

          <p className="note__body">{note.body}</p>
        </div>
      ))}
    </div>
  );
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired
}

export default NoteList;
