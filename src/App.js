import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./Layout/SignIn";
import SignUp from "./Layout/SignUp";
import Success from "./Layout/SignUp/Success";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signUp/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
