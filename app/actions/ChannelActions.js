import alt from "../alt";
import HTTP from "../helpers/http";

// CHANNEL ACTIONS
class ChannelActions {

    constructor() {
        this.generateActions(
            "getChannelsSuccess",
            "getChannelsFail",
            "getChannelSuccess",
            "getChannelFail",
            "searchChannelsSuccess",
            "searchChannelsFail",
			"subscribeSuccess",
			"subscribeFail"
        );
    }

    // GET CHANNEL
    getChannels(sortBy, skip, take) {

		new HTTP().get({
            "url": "/api/channels/get?sort=" + sortBy + "&skip=" + skip + "&take=" + take,
            "type": "GET",
            "dataType": "json",
            "cache": false
        }, (err, data) => {

			if(err) {
				return this.actions.getChannelsFail(err);
			}

			this.actions.getChannelsSuccess(data);
		});
    }

    // GET CHANNEL
    getChannel(id) {

        new HTTP().get({
            "url": "/api/channel/get/" + id,
            "type": "GET",
            "dataType": "json",
			"cache": false
        }, (err, data) => {

			if(err) {
				return this.actions.getChannelFail(err);
			}

			this.actions.getChannelSuccess(data);
		});
    }

    // SEARCH CHANNELS
    searchChannels(q) {

        new HTTP().get({
            "url": "/api/channels/search?q=" + encodeURIComponent(q),
            "type": "GET",
            "dataType": "json",
			"cache": false
    	}, (err, data) => {

			if(err) {
				return this.actions.searchChannelsFail(err);
			}

			this.actions.searchChannelsSuccess(data);
		});
    }

	// SUBSCRIEB
	subscribe(channelId) {
		console.log(channelId);
		new HTTP().post({
			"url": "/api/channels/subscribe",
			"data": {
				"channel": channelId
			},
			"type": "POST",
			"dataType": "json",
			"cache": false
		}, (err, data) => {

			if(err) {
				return this.actions.subscribeFail(err);
			}

			this.actions.subscribeSuccess(data);
		});
	}
}

export default alt.createActions(ChannelActions);
