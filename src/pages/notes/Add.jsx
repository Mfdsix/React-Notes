import React from "react";
import { useNavigate } from "react-router-dom";

import UserLayout from "../../components/layouts/User";
import NoteCreate from "../../components/notes/NoteCreate";

import {
  NoteRequest
} from "../../data/api/dicoding-notes";

export default function Add() {
  const navigate = useNavigate();

  async function afterSubmitNote() {
    navigate("/");
  }

  return (
    <>
      <UserLayout>
        <NoteCreate afterSubmitNote={afterSubmitNote} />
      </UserLayout>
    </>
  );
}
