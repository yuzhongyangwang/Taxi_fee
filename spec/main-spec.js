var main = require("../main/main.js");
var chai = require("chai");
var expect = chai.expect;
describe("main",function(){
    it("return 0 if distance is not bigger than 0",function(){
        let distance = 0;
        let time = 0;
        let result = main(distance, time);
        expect(result).to.equal(0);
    })
});

describe("main",function(){
    it("return 6 + 0.25 * time if distance is not bigger than 2",function(){
        let distance = 1;
        let time = 0;
        let result = main(distance, time);
        expect(result).to.equal(6);
    })
});
describe("main",function(){
    it("return 6 + 0.25 * time if distance is not bigger than 2",function(){
        let distance = 1;
        let time = 2;
        let result = main(distance, time);
        expect(result).to.equal(7);
    })
});
describe("main",function(){
    it("return 6 + 0.8 * (distance-2) + 0.25 * time if distance is bigger than 2 and distance is not bigger than 8",function(){
        let distance = 3;
        let time = 1;
        let result = main(distance, time);
        expect(result).to.equal(7);
    })
});

describe("main",function(){
    it("return 6 + 0.8 * (distance-2) + 0.25 * time if distance is bigger than 2 and distance is not bigger than 8",function(){
        let distance = 3;
        let time = 3;
        let result = main(distance, time);
        expect(result).to.equal(8);
    })
});

describe("main",function(){
    it("return 6 + 0.8 * 6 + 1.2 * (distance-8) + 0.25 * time if distance is bigger than 8",function(){
        let distance = 9;
        let time = 1;
        let result = main(distance, time);
        expect(result).to.equal(12);
    })
});

describe("main",function(){
    it("return 6 + 0.8 * 6 + 1.2 * (distance-8) + 0.25 * time if distance is bigger than 8",function(){
        let distance = 9;
        let time = 3;
        let result = main(distance, time);
        expect(result).to.equal(13);
    })
});