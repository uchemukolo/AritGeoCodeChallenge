const assert = require('chai').assert;
const myApp = require("../src/main.js");

describe("aritGeo", function() {

describe("handle valid input", function() {
	it("If input is Arithmetic, function should return true", function() {
		res = myapp.aritGeo([1,2,4,8,16,32,64,128])
		assert.equal(res, true)
	});

	it("If input is Geometic, function should return true", function() {
		res = myapp.aritGeo([2,4, 6,8,10,12,14,16])
		assert.equal(res, true)
	});
	 	it("If input is neither Arithmetic or Geometic", function() {
	 	res = myapp.aritGeo([1,2,3,4,5,6,7,8])
	 	assert.equal(res, false)
	});
	 		it("If input has only one elememt", function() {
	 	res = myapp.aritGeo([3])
	 	assert.equal(res, false)
	});
})
});