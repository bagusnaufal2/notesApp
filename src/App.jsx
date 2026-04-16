import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Archived from "./pages/ArchivedPage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/archived" element={<Archived />} />
      <Route path="/notes/:id" element={<DetailPage />} />
      <Route path="/notes/new" element={<AddPage />} />
    </Routes>
  )
}

export default App;