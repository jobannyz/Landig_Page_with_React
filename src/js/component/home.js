import React from "react";

import { MyNavBar } from "./NavBar";
import { MyJumbotron } from "./Jumbotron";
import { MyFooter } from "./Footer";
import { MyCard } from "./Card";

export function Home() {
	return (
		<div className="mt-1">
			<MyNavBar />
			<div className="container mt-1 mb-3">
				<div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
					<MyJumbotron />
				</div>

				<div className="container row m-0 p-0">
					<div className="col">
						<MyCard />
					</div>
					<div className="col">
						<MyCard />
					</div>
					<div className="col">
						<MyCard />
					</div>
					<div className="col">
						<MyCard />
					</div>
				</div>
			</div>
			<MyFooter />
		</div>
	);
}
