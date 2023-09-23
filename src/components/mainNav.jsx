import React from "react"
import { FaUserCircle, FaSignOutAlt} from "react-icons/fa";
import ArgentBankLogo from "../assets/img/argentBankLogo.png"
import {  useSelector } from 'react-redux';
import { Link } from "react-router-dom";
function MainNav() {
	
	const user = useSelector((state) => state.user);
  return (
		<>
			<nav className="main-nav">
				<a className="main-nav-logo" href="./index.html">
				<img
					className="main-nav-logo-image"
					src={ArgentBankLogo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
				</a>
					{ user.profil ?
						<div className="d-flex">
							<Link className="main-nav-item" to={`profil/${user.profil.id}`}>
								<FaUserCircle />
								{user.profil.firstName}
							</Link>
							<a className="main-nav-item" href="./index.html">
								<FaSignOutAlt />
								Sign Out
							</a>
						</div>
						:
						<div>
							<Link className="main-nav-item" to={"/login"}>
								<FaUserCircle />
								Sign In
							</Link>
						</div>
					}
			</nav>
		</>
	)
}
export default MainNav