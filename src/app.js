import React from "react";
import { Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Profil from "./pages/profil";
import MainNav from "./components/mainNav";
import ProtectedRoute from "./components/protectedRoute";
function App() {

	return (
		<BrowserRouter>
		<MainNav />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/login" element={<Login />} />
				<Route path="/profil/:profilId" element={<ProtectedRoute><Profil/></ProtectedRoute>}/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
    <footer class="footer">
      <p class="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
	</BrowserRouter>
	)
}

export default App
