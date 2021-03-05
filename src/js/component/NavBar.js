import React from "react";

export function MyNavBar() {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">
					Navbar
				</a>
				<div
					className="collapse navbar-collapse d-flex justify-content-end"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active text-white"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link text-white-50" href="#">
							About
						</a>
						<a className="nav-link text-white-50" href="#">
							Services
						</a>
						<a
							className="nav-link disabled text-white-50"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
