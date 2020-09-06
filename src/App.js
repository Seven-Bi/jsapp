import React from "react";
import Typography from '@material-ui/core/Typography';
import Grids from "./components/Grids";




const text = 'This is a demo for displaying an iamge :)'

let ReadMe = () => {
	return(
		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
			<div style={{ fontFamily: 'monospace', textAlign: 'center' }}><h2>Greeting</h2></div>
			<Typography>{text}</Typography>
		</div>	
	)
}

class GridView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        	rgb_color: [],
        	loaded: true
        }
    }

	render() {
		if(this.state.loaded) {
			return(
				<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
					<div>
						<Grids row_num={128} col_num={256} status={0}/>
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
						<Grids row_num={5} col_num={100} status={-1}/>
					</div>
				</div>
			)
		}
	}
}

export default GridView;
