import React, { useEffect, useState } from "react";

import UserLayout from "../components/layouts/User";

import NoteList from "../components/notes/NoteList";
import NoteAddButton from "../components/notes/NoteAddButton";
import NoteSearch from "../components/notes/NoteSearch";

import {NoteRequest} from "../data/api/dicoding-notes";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const [archived, setArchived] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    return searchParams.get('q') || ''
  });

  const search = (isArchived = false) => {
    return (isArchived ? archived : notes).filter((note) => !query || note.title.toLowerCase().includes(query.toLowerCase()))
  }

  const onSearchSubmit = ({ query: searchQuery }) => {
    setSearchParams({
      q: searchQuery
    });
    setQuery(searchQuery);
  }

  useEffect(() => {
    const getNotes = async () => {
      const {error, data} = await NoteRequest.getAll();
      if(!error) setNotes(data);
    }

    const getArchived = async () => {
      const {error, data} = await NoteRequest.getArchived();
      if(!error) setArchived(data);
    }

    getNotes();
    getArchived();
  }, []);

  return (
    <>
      <UserLayout>
        <NoteAddButton />
        <NoteSearch defaultQuery={query} onSearch={onSearchSubmit} />
        <NoteList notes={search()} />

        <div className="my-1">
          <h4 className="note__section__title">Archived Notes</h4>
          <NoteList notes={search(true)} />
        </div>
      </UserLayout>
    </>
  );
}

export default Home;
