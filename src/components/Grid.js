import React from 'react';




export default function SingleGrid(props) {
	return(
		// <Grid> ({props.row_index} - {props.col_index}) </Grid>
		// <Grid> ({props.row_index * props.col_index}) </Grid>   -> index for later to pick color 
		<div style={{ display: 'inline-block', width: '1px', height: '1px', backgroundColor: 'rgb(255,0,0)' }} />
	);
}