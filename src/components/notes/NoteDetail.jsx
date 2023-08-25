import React from "react";
import { convertDate } from "../../utils/date";
import NoteDetailAction from "./NoteDetailAction";

export default function NoteDetail({ onDelete, onArchive, note }) {

  return (
    <>
      <div>
        <h3>{note.title}</h3>
        <div>{convertDate(note.createdAt)}</div>
        {note.archived && <span className="badge__archived">Diarsipkan</span>}
      </div>
      <div className="my-1">
        <blockquote>{note.body}</blockquote>
      </div>
      <div>
        <div className="my-1">
          <hr />
        </div>
        <NoteDetailAction
          isArchived={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </>
  );
}
