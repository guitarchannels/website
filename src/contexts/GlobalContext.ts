import { buildContext, ReducerAction } from "./Context";

export interface GlobalState {
	subscriptions: string[];
	loggedIn: boolean;
}

export enum GlobalActions {
	SET_SUBSCRIPTIONS,
	SET_LOGGED_IN
}

const initialState: GlobalState = {
	subscriptions: [],
	loggedIn: false
};

// reducer actions to mutate state
function reducer(state: GlobalState, action: GlobalState & ReducerAction<GlobalActions>): GlobalState {
	switch (action.type) {
		case GlobalActions.SET_SUBSCRIPTIONS:
			return {
				...state,
				subscriptions: action.subscriptions
			};

		case GlobalActions.SET_LOGGED_IN:
			return {
				...state,
				loggedIn: action.loggedIn
			};
	}
}

export default buildContext<GlobalState, GlobalActions>(initialState, reducer);
