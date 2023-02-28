import { useState, useEffect } from "react";

const useNotes = () => {
  // States
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  // Effects
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"));
  }, []);

  useEffect(() => {
    if (status == true) {
      setNotes([
        {
          id: 1,
          title: "Nota 1",
          note: "Esto es una nota jqowrej oqwiej",
          created: "2020-02-21 19:18",
          updated: "2020-02-21 19:18",
        },
        {
          id: 2,
          title: "Nota 2",
          note: "Esto es una nota qweqwe ",
          created: "2021-02-20 16:18",
          updated: "2021-02-21 19:18",
        },
        {
          id: 3,
          title: "Nota 3",
          note: "Esto es una notaqweqwe q",
          created: "2021-02-20 12:13",
          updated: "2021-02-21 14:12",
        },
        {
          id: 4,
          title: "Nota 4",
          note: "Esto es una nota qweqew",
          created: "2022-02-20 19:11",
          updated: "2022-02-21 19:14",
        },
        {
          id: 5,
          title: "Nota 5",
          note: "Esto es una nota qweqe",
          created: "2023-02-20 19:11",
          updated: "2023-02-21 19:12",
        },
      ]);
      setLoading(false);
    }
  }, [status]);

  if (!loading && !status) {
    throw new Error("Error retrieving data from server");
  }

  const viewNote = (id) => notes.filter((n) => n.id == id)[0];
  const createNote = (title, note) => {};
  const updateNote = (id, title, note) => {};
  const deleteNote = (id) => {
    const filtered = notes.filter((n) => n.id !== id);
    setNotes(filtered);
  };

  return {
    notes,
    viewNote,
    createNote,
    updateNote,
    deleteNote,
  };
};

export default useNotes;
