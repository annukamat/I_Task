import React, { Component } from "react";
import Mobile from "../Assets/app-mobile.gif";
import Wave from "../Assets/hero-bg-shape-1.svg";
import apple from "../Assets/apple.png";
import Typical from "react-typical";
import "../Home/Home.css";

class Home extends Component {
	state = {};
	render() {
		return (
			<>
				<section id="header" className="d-flex align-items-center">
					<div className="container-fluid">
						<div className="row">
							<div className="col-10 mx-auto">
								<div className="row">
									<div className="col-md-6 pt-5 pt-lg-3 d-flex justify-content-center flex-column">
										<h1>
											Not Your <strong>Typical</strong>
											<br /> Investing App
										</h1>
										<div className="d-flex">
											<h3 className="mt-3">
												<Typical
													loop={Infinity}
													wrapper="b"
													steps={[
														"Learn with Intention ",
														1000,
														"Connect with Intention ",
														1000,
														"Invest with Intention ",
														1000,
													]}
												/>
												🚀
											</h3>
										</div>
										<p className="mt-3">
											Alinea makes responsible investing fun, easy, and social.
										</p>
										<div className="mt-1">
											<form>
												<div className="d-flex align-items-center">
													<input
														className="form-control"
														type="text"
														name="email"
														id="email"
														placeholder="Enter Email Address"
													/>
													<input
														className="btn-start"
														type="submit"
														id="submit"
														value="Start Your Journey"
													></input>
												</div>
											</form>
											<div className="mt-3 apple-img">
												<img className="apple mt-3" src={apple} alt="apple" />
											</div>
										</div>
									</div>
									<div className="col-md-5 col-lg-5 header-img">
										<img
											className="img-fluid mobile-gif"
											src={Mobile}
											alt="mobile-gif"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom-img-absolute">
						<img className="img-fluid wave-img" src={Wave} alt="wave shape" />
					</div>
				</section>
			</>
		);
	}
}

export default Home;
