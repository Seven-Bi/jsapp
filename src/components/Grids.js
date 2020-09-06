import React from 'react';
import Paper from '@material-ui/core/Paper';
import Row from './Row';




export default function Grids(props) {
	const grids = [...Array(props.row_num).keys()].map((index) => {
		return(
			<Row key={index} row_index={index} col_num={props.col_num} />
		);
	});
	return <Paper style={{display: 'inline-block', padding: '0'}} elevation={3} square> { grids } </Paper>;
}