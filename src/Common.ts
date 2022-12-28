import { GlobalActions, GlobalState } from "./contexts/GlobalContext";
import { ReducerAction } from "./contexts/Context";
import { format } from "d3-format";
import { SI_FORMAT } from "./Constants";

export function logout() {
	document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	location.href = "/";
}

export function formatSI(input: number): string {
	const formatPattern = input < 10 ? ".1s" : ".2s";
	return format(formatPattern)(input);
}
