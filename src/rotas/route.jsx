import { Home } from "../pages/home/Home";
import { DetailsPage } from "../pages/details/detailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
