import React from "react";

import NoteList from "../components/notes/NoteList";
import NoteAddButton from "../components/notes/NoteAddButton";
import NoteSearch from "../components/notes/NoteSearch";

import { getNotes } from "../data/notes";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
      searchQuery: null,
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit({ query }) {
    this.setState({
      searchQuery: query,
    });
  }

  search(isArchived = false) {
    return this.state.notes.filter(
      (note) =>
        (!this.state.searchQuery ||
        note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
        && note.archived == isArchived
    );
  }

  render() {
    return (
      <>
        <NoteAddButton />
        <NoteSearch onSearch={this.onSearchSubmit} />
        <NoteList notes={this.search()} />

        <div className="my-1">
          <h4>Archived Notes</h4>
          <NoteList notes={this.search(true)} />
        </div>
      </>
    );
  }
}

export default Home;
