import React from 'react';
import { render } from '@testing-library/react';
import RGB_Generator from './RGB_Generator';



describe('solution(RGB_Generator) algorithm test', () => {

	test('Test Accuracy - assume [1,2,3] numbers can pick 3 from them, see the possibilities.', () => {
		let fake_data = 
		[
		  [ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ],
		  [ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ],
		  [ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ],
		  [ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ],
		  [ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ],
		  [ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ],
		  [ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ],
		  [ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ],
		  [ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ]
		]
		expect(RGB_Generator(3)).toEqual(fake_data);
	});

	test('Test Integrity - compare possibilities with 32 -> in funciton, expect result with 32,768', () => {
		expect(RGB_Generator(32).length).toEqual(32768);
	});

	// test();

	// test();

});