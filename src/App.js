import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import PromoSection from "./PromoSection/PromoSection";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
			<PromoSection />
			<Features />
			<Footer />
		</>
	);
}

export default App;
