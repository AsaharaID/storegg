/**
 * /* eslint-disable no-tabs
 *
 * @format
 */

/**
 * /* eslint-disable no-tabs
 *
 * @format
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/Transaction Step";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navbar />
			<MainBanner />
			<TransactionStep />
			<FeaturedGame />
			<Reached />
			<Story />
			<Footer />
		</>
	);
}
