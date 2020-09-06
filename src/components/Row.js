import React from 'react';
import SingleGrid from './Grid';




export default function Row(props) {
	const a_row = [...Array(props.col_num).keys()].map((index) => {
		return(
			<SingleGrid key={index} col_index={index} row_index={props.row_index}/>
		);
	});

	return <div style={{display:'flex', flexDirection:'row'}}> { a_row } </div>;
}