import React from "react";

export function MyJumbotron() {
	return (
		<div className="jumbotron container">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				laoreet, ligula eu pharetra interdum, massa leo tristique
				sapien, eget ornare felis justo ut massa. Morbi ac euismod ex,
				eu posuere erat.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!
				</a>
			</p>
		</div>
	);
}
