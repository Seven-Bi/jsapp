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
    constructor(props) {
        super(props)
        this.state = {
        	rgb_color: [],
        	loaded: false
        }
    }

	render() {
		if(this.state.loaded) {
			return(
				<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
					<div>
						<Grids row_num={128} col_num={256} />
					</div>
					<div>
						<ReadMe />
					</div>
				</div>
			)
		}
		else {
			return(
				<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
					<div>
						<Grids row_num={20} col_num={30} />
					</div>
					<div>
						<ReadMe />
					</div>
				</div>
			)
		}
	}
}

export default GridView;