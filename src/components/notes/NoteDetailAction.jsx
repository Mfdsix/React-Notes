import React from "react";
import PropTypes from "prop-types";

function NoteDetailAction({ isArchived, onDelete, onArchive }) {
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
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    isArchived: PropTypes.bool.isRequired,
}

export default NoteDetailAction;
