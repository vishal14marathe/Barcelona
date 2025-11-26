import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationPage from "./components/LocationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
