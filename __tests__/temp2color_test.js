// __tests__/sum-test.js
jest.dontMock("../src/utils/temp2color");

describe("temp2color", function() {
    it("returns color for min temp", function() {
        var temp2color = require("../src/utils/temp2color");

        expect(temp2color(-60)).toBe("#519fdd");
    });
});
