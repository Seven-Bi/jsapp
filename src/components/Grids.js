import React from 'react';
import Paper from '@material-ui/core/Paper';
import Row from './Row';



export default function Grids(props) {
	// loading page
	if(props.status === "loading") {
		return(
			<div>
				<div style={{paddingLeft: '17%'}}>
					<h3><p style={{ fontFamily: 'monospace' }}>It's {props.status} ...</p></h3>
				</div>
			</div>
		)
	}
	else {
		const grids = [...Array(props.row_num).keys()].map((index) => {

			return(
				<Row id={index} key={index} row_index={index+1} col_num={props.col_num} />
			);
		});
		return <Paper name="pixel_image" style={{display: 'inline-block', padding: '0'}} elevation={3} square> { grids } </Paper>;
	}
}