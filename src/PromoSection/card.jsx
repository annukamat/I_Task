import React, { Component } from "react";
import "../PromoSection/Card.css";

class Card extends Component {
	state = {};
	render() {
		return (
			<>
				<div className="col-md-4 col-10 mx-auto">
					<div className="card">
						<div className="circle-icon text-center">
							<span role="img" aria-label="donut" className="">
								👩‍👩‍👧‍👧
							</span>
						</div>
						<div className="card-body text-center">
							<h5 class="card-title font-weight-bold">Community</h5>
							<p className="card-text">
								We all need someone to lean on and investing is no different.
								<br /> As part of our community, you get the support to embark
								and continue on your journey.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10 mx-auto">
					<div className="card">
						<div className="circle-icon text-center">
							<span role="img" aria-label="donut" className="">
								💸
							</span>
						</div>
						<div className="card-body text-center">
							<h5 class="card-title font-weight-bold">Responsible Investing</h5>

							<p>
								Make your money moves matter! Express your values and interests
								through your investments.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10 mx-auto">
					<div className="card">
						<div className="circle-icon text-center">
							<span role="img" aria-label="donut" className="">
								🌱
							</span>
						</div>
						<div className="card-body text-center">
							<h5 class="card-title font-weight-bold">Learning</h5>
							<p className="card-text">
								We eliminate all the unnecessary financial jargon. Learn as you
								go with our interactive mini capsules and before you know it,
								you’ll be a confident investor.
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Card;
