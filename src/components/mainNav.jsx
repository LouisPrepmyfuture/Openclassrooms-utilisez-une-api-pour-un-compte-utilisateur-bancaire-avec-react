import React from "react"
import ArgentBankLogo from "../assets/img/argentBankLogo.png"

function MainNav() {
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
				<div>
					<a className="main-nav-item" href="/login">
					<i className="fa fa-user-circle"></i>
						Sign In
					</a>
				</div>
			</nav>
		</>
	)
}
export default MainNav