import RGB_Generator from './RGB_Generator';



desribe('solution(RGB_Generator) algorithm test', () => {

	beforeAll(() => console.log('This test is going to test accuracy, Integrity and time cost'));

	test('test accuracy', () => {
		console.log('create the fake data compares with output');
		fake_data = 
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
		console.log(fake_data);
		expect(RGB_Generator(n=3)).toEqual(fake_data);
	});

	// test();

	// test();

	// test();

});