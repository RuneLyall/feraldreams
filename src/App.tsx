import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";

import Glade from "./pages/Glade";
import Wiki from "./pages/Wiki";

import CreatureDetails from "./pages/CreatureDetails";
import Falling from "./pages/Falling";
import Layout from "./useful/Layout";
import Gallery from "./pages/gallery";
import Password from "./pages/pw";
import RecipeBook from "./pages/recipebook";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="about" element={<About />} />
                    <Route path="glade" element={<Glade />} />
                    <Route path="falling" element={<Falling />} />
                    <Route path="wiki" element={<Wiki />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="sandbox" element={<Password />} />
                    <Route path="recipebook" element={<RecipeBook />} />
                    <Route
                        path="CreatureDetails/:id"
                        element={<CreatureDetails />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
