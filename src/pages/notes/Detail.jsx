import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserLayout from "../../components/layouts/User";
import NoteDetail from "../../components/notes/NoteDetail";
import PageNotFound from "../PageNotFound";
import { FaSpinner } from "react-icons/fa";

import { NoteRequest } from "../../data/api/dicoding-notes";

export default function Detail() {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [noteLoading, setNoteLoading] = useState(true);

  useEffect(() => {
    const getNote = async () => {
      setNoteLoading(true);
      const { error, data } = await NoteRequest.getById(id);
      setNoteLoading(false);
      if (!error) setNote(data);
    };

    getNote();

    return () => {
      setNoteLoading(false);
      setNote(null);
    };
  }, [id]);

  return (
    <>
      {noteLoading && (
        <UserLayout>
          <div className="text-center">
            <FaSpinner size={48}/>
          </div>
        </UserLayout>
      )}
      {!noteLoading && !note && <PageNotFound />}
      {note && (
        <UserLayout>
          <NoteDetail note={note} />
        </UserLayout>
      )}
    </>
  );
}
