import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../data/notes";

import UserLayout from "../components/layouts/User";
import NoteCreate from "../components/notes/NoteCreate";

export default function Add() {
  const navigate = useNavigate();

  function submitNote(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <>
      <UserLayout>
        <NoteCreate submitNote={submitNote} />
      </UserLayout>
    </>
  );
}
