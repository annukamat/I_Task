import React, { Component } from "react";
import Card from "../PromoSection/card";

class Promo extends Component {
	state = {};
	render() {
		return (
			<>
				<div>
					<div className="my-5">
						<h1 className="text-center">
							We get it.{" "}
							<span role="img" aria-label="donut">
								🤷🏽‍♀️
							</span>{" "}
						</h1>
						<h1 className="text-center">
							Investing is overwhelming,
							<br />
							but it doesn’t have to be.
						</h1>
					</div>
					<div className="container-fluid mb-5">
						<div className="row">
							<div className="col-10 mx-auto">
								<div className="row gy-4">
									<Card />
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Promo;
