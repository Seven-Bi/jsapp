import React from "react";
import ReactDOM from 'react-dom';
import Grids from ".components/Grids.js";



let ReadMe = () => {
	return(
		<div>
			<span><h3>READ ME</h3></span>
		</div>
	)
}

class GridView extends React.Component {

	render() {
		return(
			<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height: '80vh'}}>
				<Grids />
				<ReadMe />
			</div>
		)
	}
}

ReactDOM.render(
	<GridView />,
	document.getElementById('root')
);