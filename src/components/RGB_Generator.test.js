import { RGB_Range, RGB_Generator } from './RGB_Generator';




describe('Test algorithm', () => {
	
	test('Test rgb value length', () => {
		expect(RGB_Range().length).toBe(32)
	});

	test('Test rgb value first 8 values', () => {
		let fake_data = [8, 16, 24, 32, 40, 48, 56, 64];
		expect(RGB_Range().slice(0, 8)).toEqual(fake_data);
	});
	
	test('Test rgb value last 8 values', () => {
		let fake_data = [200, 208, 216, 224, 232, 240, 248, 256];
		expect(RGB_Range().slice(24,32)).toEqual(fake_data);
	});	

	test('Test Accuracy 1', () => {
		let fake_data = 
		[
			[ 16, 16, 16 ], [ 16, 16, 24 ],
			[ 16, 16, 32 ], [ 16, 24, 16 ],
			[ 16, 24, 24 ], [ 16, 24, 32 ],
			[ 16, 32, 16 ], [ 16, 32, 24 ],
			[ 16, 32, 32 ], [ 24, 16, 16 ],
			[ 24, 16, 24 ], [ 24, 16, 32 ],
			[ 24, 24, 16 ], [ 24, 24, 24 ],
			[ 24, 24, 32 ], [ 24, 32, 16 ],
			[ 24, 32, 24 ], [ 24, 32, 32 ],
			[ 32, 16, 16 ], [ 32, 16, 24 ],
			[ 32, 16, 32 ], [ 32, 24, 16 ],
			[ 32, 24, 24 ], [ 32, 24, 32 ],
			[ 32, 32, 16 ], [ 32, 32, 24 ],
			[ 32, 32, 32 ]
		];
		expect(RGB_Generator(3, [], RGB_Range)).toEqual(fake_data);
	});

	test('Test Accuracy 2', () => {
		let fake_data = [[ 16, 16, 16 ], [ 16, 16, 24 ], [ 16, 16, 32 ], [ 16, 16, 40 ]]
		expect(RGB_Generator(4, [], RGB_Range).slice(0, 4)).toEqual(fake_data);
	});

	test('Test Integrity 1', () => {
		expect(RGB_Generator(4, [], RGB_Range).length).toEqual(64); //4*4*4 = 64
	});

	test('Test Integrity 2 - compare possibilities with 32 -> in funciton, expect result with 32,768', () => {
		expect(RGB_Generator(32, [], RGB_Range).length).toEqual(32768);
	});

	test('Test Integrity 3 - compare possibilities with 12 -> in funciton, expect result with 1,728', () => {
		expect(RGB_Generator(12, [], RGB_Range).length).toEqual(1728);
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