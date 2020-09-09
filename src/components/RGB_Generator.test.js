import React from 'react';
import { render } from '@testing-library/react';
import RGB_Generator from './RGB_Generator';



describe('Solution(RGB_Generator) algorithm test', () => {

	test('>> Test Accuracy 1 - assume [1,2,3] numbers can pick 3 from them, see the possibilities.', () => {
		let fake_data_a = 
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
		expect(RGB_Generator(3, [])).toEqual(fake_data_a);
	});

	test('>> Test Accuracy 2 - assume [1,2,3,4] numbers can pick 3 from them, see the possibilities.', () => {
		let fake_data_b = 
		[
			[ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ], [ 1, 1, 4 ],
			[ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ], [ 1, 2, 4 ],
			[ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ], [ 1, 3, 4 ],
			[ 1, 4, 1 ], [ 1, 4, 2 ], [ 1, 4, 3 ], [ 1, 4, 4 ],
			[ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ], [ 2, 1, 4 ],
			[ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ], [ 2, 2, 4 ],
			[ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ], [ 2, 3, 4 ],
			[ 2, 4, 1 ], [ 2, 4, 2 ], [ 2, 4, 3 ], [ 2, 4, 4 ],
			[ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ], [ 3, 1, 4 ],
			[ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ], [ 3, 2, 4 ],
			[ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ], [ 3, 3, 4 ],
			[ 3, 4, 1 ], [ 3, 4, 2 ], [ 3, 4, 3 ], [ 3, 4, 4 ],
			[ 4, 1, 1 ], [ 4, 1, 2 ], [ 4, 1, 3 ], [ 4, 1, 4 ],
			[ 4, 2, 1 ], [ 4, 2, 2 ], [ 4, 2, 3 ], [ 4, 2, 4 ],
			[ 4, 3, 1 ], [ 4, 3, 2 ], [ 4, 3, 3 ], [ 4, 3, 4 ],
			[ 4, 4, 1 ], [ 4, 4, 2 ], [ 4, 4, 3 ], [ 4, 4, 4 ]
		  ]
		expect(RGB_Generator(4, [])).toEqual(fake_data_b);
	});

	test('>> Test Integrity 1 - compare possibilities with 32 -> in funciton, expect result with 32,768', () => {
		expect(RGB_Generator(32, []).length).toEqual(32768);
	});

	test('>> Test Integrity 2 - compare possibilities with 12 -> in funciton, expect result with 1,728', () => {
		expect(RGB_Generator(12, []).length).toEqual(1728);
	});

	test('>> Parameter Test - try different cases parameters', () => {
		try {
			RGB_Generator(2, [])
		} catch (e) {
			expect(e.message).toBe('must equal or greater than 3');
		}

		try {
			RGB_Generator(4, [1,2])
		} catch (e) {
			expect(e.message).toBe('empty array type required');
		}

		try {
			RGB_Generator(3, 123)
		} catch (e) {
			expect(e.message).toBe('empty array type required');
		}

		try {
			RGB_Generator('abc', [])
		} catch (e) {
			expect(e.message).toBe('number required');
		}		
	});
});