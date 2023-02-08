const fs = require("fs");
const { performance } = require('perf_hooks');
const { removeDuplicatedEntries, buildNewJson, createCleanJson } = require("../index.js")

describe('Performance Tests', () => {
    it('should run removeDuplicatedEntries efficiently', () => {
        const start = performance.now();
        const array = [{key: 1}, {key: 2}, {key: 1}, {key: 3}, {key: 2}];
        removeDuplicatedEntries(array);
        const end = performance.now();
        const duration = end - start;
        expect(duration).toBeLessThan(50);
    });

    it('should run buildNewJson efficiently', () => {
        const start = performance.now();
        buildNewJson();
        const end = performance.now();
        const duration = end - start;
        expect(duration).toBeLessThan(200);
    });

    it('should run createCleanJson efficiently', () => {
        const start = performance.now();
        createCleanJson({});
        const end = performance.now();
        const duration = end - start;
        expect(duration).toBeLessThan(50);
    });
});
