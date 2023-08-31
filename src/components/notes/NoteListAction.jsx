import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteListAction({ noteId }) {
  return (
    <div className="note__action__detail">
      <Link to={`/${noteId}`}>DETAIL</Link>
    </div>
  );
}

NoteListAction.propTypes = {
    noteId: PropTypes.string.isRequired
}

export default NoteListAction;
