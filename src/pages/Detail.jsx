import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/notes/NoteDetail";
import { deleteNote, getNoteById, toggleArchiveStatus } from "../data/notes";
import PageNotFound from "./PageNotFound";

export default function Detail() {
  const { id } = useParams();
  const note = getNoteById(id);
  const navigate = useNavigate();

  function onDelete(e) {
    e.preventDefault();

    let deleteConfirm = confirm("Move this to TRASH, continue ?");
    if (deleteConfirm) {
      deleteNote(note.id);
      navigate('/');
    }
  }

  function onArchive(e) {
    e.preventDefault();

    let archiveConfirm = confirm(note.archived ? "Remove from ARCHIVE, continue ?" : "Archieve this NOTE, continue ?");
    if (archiveConfirm) {
      toggleArchiveStatus(note.id);
      navigate('/');
    }
  }

  return (
    <>
      { note && <NoteDetail onDelete={onDelete} onArchive={onArchive} note={note} /> }
      { !note && <PageNotFound/> }
    </>
  );
}
