const{name, height, message} = require("../index.js");

describe("Name", () => {
    
    it('returns "Susan"', () => {
        expect(name).toEqual("Susan");
    });
});
