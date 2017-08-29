const assert = require('chai').assert;
const myApp = require("../src/main.js");

 

describe("aritGeo", () =>{

	describe("handle valid input", () =>{
		it("If input is Arithmetic, function should return Arithmetic", () =>{
			res = myApp.aritGeo([2,4, 6,8,10,12,14,16])
			assert.equal(res, "Arithmetic")
		});

		it("If input is Arithmetic, function should return Arithmetic", () =>{
			res = myApp.aritGeo([1,2,3,4,5,6])
			assert.equal(res, "Arithmetic")
		});

		it("If input is empty array, function should return 0", () =>{
			res = myApp.aritGeo([])
			assert.equal(res, "0")
		});


		it("If input is Geometric, function should return Geometric", () =>{
			res = myApp.aritGeo([1,2,4,8,16,32,64,128])
			assert.equal(res, "Geometric")
		});
		 	it("If input is neither Arithmetic or Geometric", () =>{
		 	res = myApp.aritGeo([1,2,6,7,8])
		 	assert.equal(res, "-1")
		});
		 	it("If input has only one elememt", () =>{
		 	res = myApp.aritGeo([3])
		 	assert.equal(res, "-1")
		});
	})

	describe("handle invalid input", ()=>{
		it("If input is a string", ()=>{
			res = myApp.aritGeo("Hello")
			assert.equal(res, "Only Arrays are allowed")
		});

		it("If input is a string", ()=>{
			res = myApp.aritGeo("")
			assert.equal(res, "Only Arrays are allowed")
		});

		it("If input is a boolean", ()=>{
			res = myApp.aritGeo(true)
			assert.equal(res, "Only Arrays are allowed")
		});

		it("If input is a boolean", ()=>{
			res = myApp.aritGeo(false)
			assert.equal(res, "Only Arrays are allowed")
		});

		it("If input is a number", ()=>{
			res = myApp.aritGeo(2)
			assert.equal(res, "Only Arrays are allowed")
		});

		it("If input is a number", ()=>{
			res = myApp.aritGeo(-6)
			assert.equal(res, "Only Arrays are allowed")
		});
	})
});