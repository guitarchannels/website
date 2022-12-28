import React from "react";
import { Switch, Route, HashRouter, Link } from "react-router-dom";
import { configure } from "axios-hooks";
import Axios from "axios";
import pckg from "../../../package.json";

// pages
import ChannelList from "../../pages/ChannelList";
import ChannelDetail from "../../pages/ChannelDetail";
import SearchResults from "../../pages/SearchResults";
import Topics from "../../pages/Topics";
import TopicDetail from "../../pages/TopicDetail";
import Contributions from "../../pages/Contributions";
import SupportUs from "../../pages/SupportUs";
import Introduction from "../../pages/Introduction";
import Imprint from "../../pages/Imprint";
import PrivacyPolicy from "../../pages/PrivacyPolicy";

// components
import NavMenuMobile from "../NavMenuMobile";
import NavMenu from "../NavMenu";
import SuggestChannel from "../../pages/SuggestChannel";
import ScrollToTop from "../ScrollToTop";
import SponsorModal from "../SponsorModal";
import BackUpButton from "../BackUpButton";
import GoogleAnalyticsPageViewTracker from "../GoogleAnalyticsPageViewTracker";

const axios = Axios.create({ withCredentials: true });
configure({ axios });

export default function Layout() {
	return (
		<HashRouter>
			<GoogleAnalyticsPageViewTracker />
			<SponsorModal />
			<ScrollToTop />
			<NavMenuMobile />
			<section className="section main-section">
				<div className="container">
					<div className="columns">
						<div className="column is-one-quarter">
							<NavMenu />
						</div>
						<div className="column">
							<Switch>
								<Route exact path="/" component={ChannelList} />
								<Route exact path="/by-:sortBy" component={ChannelList} />
								<Route exact path="/channel/:id" component={ChannelDetail} />
								<Route exact path="/channel/:id/:currentPage" component={ChannelDetail} />
								<Route exact path="/search/:query" component={SearchResults} />
								<Route exact path="/topics" component={Topics} />
								<Route exact path="/topics/:id" component={TopicDetail} />
								<Route exact path="/contributions" component={Contributions} />
								<Route exact path="/support-us" component={SupportUs} />
								<Route exact path="/how-it-works" component={Introduction} />
								<Route exact path="/imprint" component={Imprint} />
								<Route exact path="/privacy" component={PrivacyPolicy} />
								<Route exact path="/suggest" component={SuggestChannel} />
							</Switch>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="content has-text-centered">
					<p>
						<Link className="has-text-grey-light" to="/imprint">
							Imprint
						</Link>{" "}
						&middot;{" "}
						<Link className="has-text-grey-light" to="/privacy">
							Privacy Policy
						</Link>{" "}
						&middot;{" "}
						<a
							className="has-text-grey-light"
							target="_blank"
							href="https://github.com/guitarchannels"
						>
							<i className="fas fa-code" /> on GitHub
						</a>
					</p>
					<p className="has-text-grey-light">
						<small>v{pckg.version} &middot; made with ❤ in Germany &amp; Sweden</small>
					</p>
					<p>
						<img width="80" className="greyscale" src={require("../../static/img/logo.svg")} />
					</p>
				</div>
			</footer>
			<BackUpButton />
		</HashRouter>
	);
}
