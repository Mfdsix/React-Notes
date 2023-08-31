import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  NoteRequest
} from "../../data/api/dicoding-notes";

function NoteDetailAction({ noteId, isArchived }) {
  const navigate = useNavigate();
  const [actionLoading, setActionLoading] = useState(false);

  async function onDelete(e) {
    e.preventDefault();

    let deleteConfirm = confirm("Move this to TRASH, continue ?");
    if (deleteConfirm) {
      setActionLoading(true);
      
      const {error, message} = await NoteRequest.remove(noteId);
      setActionLoading(false);

      if(error) return alert(message);
      navigate("/");
    }
  }

  async function onArchive(e) {
    e.preventDefault();

    let archiveConfirm = confirm(
      isArchived
        ? "Remove from ARCHIVE, continue ?"
        : "Archieve this NOTE, continue ?"
    );
    if (archiveConfirm) {
      
      const {error, message} = isArchived ? await NoteRequest.unArchive(noteId) : await NoteRequest.archive(noteId);
      setActionLoading(false);
      
      if(error) return alert(message);
      navigate("/");
    }
  }

  return (
    <div className="note__action flex__end">
      <button
        onClick={onArchive}
        className="btn btn__submit mr-1"
        type="button"
      >
        {isArchived ? "Cancel Archive" : "Archive"}
      </button>
      <button onClick={onDelete} className="btn btn__cancel" type="button">
        Delete
      </button>
    </div>
  );
}

NoteDetailAction.propTypes = {
  noteId: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteDetailAction;
