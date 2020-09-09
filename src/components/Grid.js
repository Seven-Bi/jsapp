import React from 'react';
import { DataContext } from '../DataContext';




export default function SingleGrid(props) {
	return(
		<DataContext.Consumer>
			{
				context => 
				(
					<div style={{ display: 'inline-block', width: '1px', height: '1px', backgroundColor: `rgb(${ context.callback(props.row_index, props.col_index, context.data, context.max_col) })` }} />
				)
			}
		</DataContext.Consumer>
	);
}