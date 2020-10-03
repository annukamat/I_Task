import React, { Component } from "react";
import "../Features/Features.css";
import feature from "../Assets/feature1.gif";

class Features extends Component {
	state = {};
	render() {
		return (
			<>
				<div className="feature">
					<div className="my-5">
						<h1 className="text-center pt-5">What does Alinea offer?</h1>
					</div>
					<div className="container-fluid mb-5">
						<div className="row">
							<div className="col-10 mx-auto">
								<div className="row">
									<div className="col-md-4 col-10 mx-auto">
										<div className="d-flex align-items-start mb-5">
											<div className="icon rounded-circle m-3">
												<span role="img" aria-label="donut">
													🍩
												</span>
											</div>

											<div className="icon-text">
												<h5>Custom Portfolios</h5>
												<p className="mb-0 mt-3">
													Pre-packaged portfolios for you.
												</p>
											</div>
										</div>
										<div className="d-flex align-items-start mb-5">
											<div className="icon rounded-circle m-3">
												<span role="img" aria-label="donut">
													👭
												</span>
											</div>
											<div className="icon-text">
												<h5>Kickass Community</h5>
												<p className="mb-0 mt-3">
													Our community is here to support you every step of the
													way.
												</p>
											</div>
										</div>
										<div className="d-flex align-items-start mb-5">
											<div className="icon rounded-circle m-3">
												<span role="img" aria-label="donut">
													🚀
												</span>
											</div>
											<div className="icon-text">
												<h5>Speedy Support</h5>
												<p className="mb-0 mt-3">
													We have quick answers to all your investing questions.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-10 mx-auto">
										<img
											className="img-fluid mobile-gif"
											src={feature}
											alt="mobile-gif"
										/>
									</div>
									<div className="col-md-4 col-10 mx-auto">
										<div className="d-flex align-items-start mb-5">
											<div className="icon rounded-circle m-3">
												<span role="img" aria-label="donut">
													🍕
												</span>
											</div>
											<div className="icon-text">
												<h5>Fractional Shares</h5>
												<p className="mb-0 mt-3">
													Invest in any share with as little as $1.
												</p>
											</div>
										</div>
										<div className="d-flex align-items-start mb-5">
											<div className="icon rounded-circle m-3">
												<span role="img" aria-label="donut">
													💰
												</span>
											</div>
											<div className="icon-text">
												<h5>Invest with Intention</h5>
												<p className="mb-0 mt-3">
													We give you the right information to make an impact.
												</p>
											</div>
										</div>
										<div className="d-flex align-items-start mb-5">
											<div className="icon rounded-circle m-3">
												<span role="img" aria-label="donut">
													📚
												</span>
											</div>
											<div className="icon-text">
												<h5>Learn & Grow</h5>
												<p className="mb-0 mt-3">
													We make learning fun and easy.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="join">
					<div className="container-fluid mb-5">
						<div className="row">
							<div className="col-10 mx-auto">
								<div className="row">
									<div className="col-md-7 pt-5 pt-lg-3 d-flex justify-content-center flex-column">
										<h1>BECOME A PART OF OUR KICKASS COMMUNITY</h1>
										<p mt-3>
											We can’t do this alone, so we need each other, especially
											you. Join our community and get started on your investing
											journey!
										</p>
										<input
											className="btn-start mt-1"
											type="submit"
											id="submit"
											value="Join Now"
										></input>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Features;
