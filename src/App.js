import React from "react";
import Typography from '@material-ui/core/Typography';
import Grids from "./components/Grids";




const text = 'Hello, this is a demo to display an iamge :)'

let ReadMe = () => {
	return(
		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
			<div style={{ textAlign: 'center' }}><h3>READ ME</h3></div>
			<Typography>{text}</Typography>
		</div>	
	)
}

class GridView extends React.Component {

	render() {
		return(
			<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
				<div>
					<Grids row_num={30} col_num={20} />
				</div>
				<div>
					<ReadMe />
				</div>
			</div>
		)
	}
}

export default GridView;