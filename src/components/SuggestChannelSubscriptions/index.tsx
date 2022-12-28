import React from "react";
import ChannelSuggestList from "../../components/ChannelSuggestList";
import ChannelIdentification from "../../entities/ChannelIdentification";

interface SuggestChannelSubscriptionsProps {
	channelSuggestions: ChannelIdentification[];
}

function SuggestChannelSubscriptions(props: SuggestChannelSubscriptionsProps) {
	const guitarRelated: ChannelIdentification[] = props?.channelSuggestions?.filter((c) => {
		return c.isGuitarChannel === true;
	});

	const notGuitarRelated: ChannelIdentification[] = props?.channelSuggestions?.filter((c) => {
		return c.isGuitarChannel === false;
	});

	return (
		<div className="box top-spacer-2x">
			<h4 className="is-size-4">
				<i className="fab fa-youtube"></i> Channels you've subscribed to:
			</h4>

			{guitarRelated?.length > 0 && (
				<>
					<p className="bottom-spacer">
						Some of your subscriptions are likely to be guitar channels and are{" "}
						<strong>not yet listed on guitar-channels.com</strong>. You can easliy suggest them to
						be listed:
					</p>

					<ChannelSuggestList channels={guitarRelated} />
				</>
			)}

			{notGuitarRelated?.length > 0 && (
				<>
					<div className="notification is-warning">
						<p>
							The following of your subscriptions are{" "}
							<strong>probably not guitar-related</strong>, but you can check and suggest them
							as well:
						</p>
					</div>

					<ChannelSuggestList channels={notGuitarRelated} />
				</>
			)}
		</div>
	);
}

export default SuggestChannelSubscriptions;
