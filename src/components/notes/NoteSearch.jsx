import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ onSearch }) {
  function onChangeSearchQuery(event) {
    onSearch({
      query: event.target.value,
    });
  }

  return (
    <div className="form__group my-1">
      <input
        onKeyUp={onChangeSearchQuery}
        onChange={onChangeSearchQuery}
        type="text"
        placeholder="Search Your Diary"
        className="form__input"
      />
    </div>
  );
}

NoteSearch.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default NoteSearch;
