import React from "react";
import Typography from '@material-ui/core/Typography';
import Grids from "./components/Grids";
import { RGB_Range, RGB_Generator } from './components/RGB_Generator';
import { DataContext } from "./DataContext";



const text = 'The image is formed by 128*256 different color pixels';

let ReadMe = () => {
	return(
		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
			<div style={{ fontFamily: 'monospace', textAlign: 'center' }}><h2>Greeting</h2></div>
			<Typography>{text}</Typography>
		</div>	
	)
}

//callback
let load_rgb_color = (row_index, col_index, rgb_color_array, max_col) => {
	let index = 0;
	if (row_index === 1) {
		index = col_index;
	}
	else {
		let prefix_number = row_index * max_col;
		index = prefix_number + col_index
	}
	return rgb_color_array[index]
}

class GridView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        	rgb_color: [],
			loaded: false,		
			max_row: 128,
			max_col: 256
        }
    }

	componentDidMount() {
		const n = 32;   // pick 32 color values from 1- 255
		let data = RGB_Generator(n, [], RGB_Range)
		this.setState({
			rgb_color: data,
			loaded: true
		});
	}

	render() {
		if(this.state.loaded) {
			return(
				<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
					<div>
						<DataContext.Provider value=
							{{ 
								data: this.state.rgb_color,
								callback: load_rgb_color,
								max_row: this.state.max_row,
								max_col: this.state.max_col
							}}
						>
							<Grids row_num={this.state.max_row} col_num={this.state.max_col} />
						</DataContext.Provider>
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
					<DataContext.Provider value={{ data: this.state.rgb_color }}>
						<Grids row_num={5} col_num={100} status="loading" />
						</DataContext.Provider>
					</div>
				</div>			
			)
		}
	}
}

export default GridView;
