/// <reference path="common.js" /> the error is only thrown when: 1. a reference is included in the spec file (maybe also in a library) 2. tracing is enabled 3. coverage is enabled

describe("test", function () {

    it("can be tested", function () {

        var viewModel = true;
        expect(viewModel).toBe(true);
    });
});