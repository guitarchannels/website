import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_RESULTS_QUERY } from "./gql";
import LoadingIndicator from "../../components/LoadingIndicator";
import Video from "../../entities/Video";
import VideoListItem from "../../components/VideoListItem";
import ChannelListItem from "../../components/ChannelListItem";
import Channel from "../../entities/Channel";
import VisibleTab from "../../entities/VisibleTab";
import ChannelsVideosTabs from "../../components/VideosChannelTabs";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

function SearchResults(props: any) {
	const [visibleTab, setVisibleTab] = useState(VisibleTab.Videos);

	const { loading, error, data } = useQuery(SEARCH_RESULTS_QUERY, {
		fetchPolicy: "network-only",
		variables: {
			query: encodeURIComponent(props.match.params.query)
		}
	});

	if (loading || !data) return <LoadingIndicator />;

	let results = null;

	if (visibleTab == VisibleTab.Videos) {
		results = data.searchResults.videos.map((video: Video) => {
			return <VideoListItem key={video.iD} video={video} />;
		});
	} else {
		results = data.searchResults.channels.map((channel: Channel) => {
			return <ChannelListItem key={channel.iD} channel={channel} />;
		});
	}

	return (
		<>
			<Helmet>
				<title>Contributions | Guitar Channels</title>
			</Helmet>
			<Hero title="Search results" subtitle={`for "${props.match.params.query}"`} />
			<ChannelsVideosTabs visibleTab={visibleTab} setVisibleTab={setVisibleTab} />
			{results}
		</>
	);
}

export default SearchResults;
