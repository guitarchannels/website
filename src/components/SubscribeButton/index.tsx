import React, { useContext, useEffect } from "react";
import GlobalContext, { GlobalActions } from "../../contexts/GlobalContext";
import useAxios from "axios-hooks";
import classNames from "classnames";
import useGoogleAnalyticsEvent from "../../hooks/useGoogleAnalyticsEvent";

interface SubscribeButtonProps {
	channelId: string;
}

interface SubscriptionResponse {
	success: boolean;
	error?: any;
}

function SubscribeButton(props: SubscribeButtonProps) {
	const globalContext = useContext(GlobalContext.Context);
	const trackGAEvent = useGoogleAnalyticsEvent();

	let subscribeClassName = classNames({
		button: true,
		"is-danger": true,
		"is-fullwidth": true
	});

	return (
		<button className={subscribeClassName} onClick={() => {}}>
			<i className="fab fa-youtube icon-spacer" /> Subscribe
		</button>
	);
}

export default SubscribeButton;
