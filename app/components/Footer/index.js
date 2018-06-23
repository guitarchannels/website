import React from "react";
import { Link } from "react-router-dom";

import "./index";

class App extends React.Component {
	render() {
		return (
			<div className="container footer">
				<center>
					<Link to="/imprint">Imprint</Link>&nbsp;|&nbsp;
					<Link to="/privacy">Privacy Policy</Link>&nbsp;|&nbsp;
					<a href="https://github.com/sailingchannels" title="Go to github.com" target="_blank" rel="noopener">
						Code on GitHub
					</a>
				</center>
			</div>
		);
	}
}

export default App;
