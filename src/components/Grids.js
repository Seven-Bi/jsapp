import React from 'react';
import Paper from '@material-ui/core/Paper';
import Row from './Row';



export default function Grids(prop) {
	// loading page
	if(prop.status === "loading") {
		return(
			<div>
				<div style={{paddingLeft: '17%'}}>
					<h3><p style={{ fontFamily: 'monospace' }}>It's {prop.status} ...</p></h3>
				</div>
			</div>
		)
	}
	else {
		const grids = [...Array(prop.row_num).keys()].map((index) => {

			return(
				<Row id={index} key={index} row_index={index+1} col_num={prop.col_num} />
			);
		});
		
		return <Paper name="pixel_image" style={{display: 'inline-block', padding: '0'}} elevation={3} square> { grids } </Paper>;
	}
}