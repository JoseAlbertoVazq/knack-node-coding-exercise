const {
    removeDuplicatedEntries,
    buildNewJson,
} = require("../index.js")
const fs = require("fs");
const assert = require("assert");

describe("removeDuplicatedEntries", () => {
    it("should remove duplicates from the input array", () => {
        const input = [{
                key: "object1"
            },
            {
                key: "object2"
            },
            {
                key: "object1"
            }
        ];
        const expectedOutput = [{
                key: "object1"
            },
            {
                key: "object2"
            }
        ];
        const output = removeDuplicatedEntries(input);
        assert.deepEqual(output, expectedOutput);
    });

    it("should not change the input array if there are no duplicates", () => {
        const input = [{
                key: "object1"
            },
            {
                key: "object2"
            }
        ];
        const expectedOutput = [{
                key: "object1"
            },
            {
                key: "object2"
            }
        ];
        const output = removeDuplicatedEntries(input);
        assert.deepEqual(output, expectedOutput);
    });

    it("should return an empty array if the input array is empty", () => {
        const input = [];
        const expectedOutput = [];
        const output = removeDuplicatedEntries(input);
        assert.deepEqual(output, expectedOutput);
    });
    it("should throw an error if not array is passed", () => {
        expect(() => removeDuplicatedEntries({})).toThrowError();
    });
});

describe("buildNewJson", () => {
    beforeEach(() => {
        fs.writeFileSync("./test_mock_application.json", JSON.stringify({
            versions: [{
                objects: [{
                        key: "object1"
                    },
                    {
                        key: "object2"
                    },
                    {
                        key: "object1"
                    }
                ],
                scenes: [{
                        key: "scene1"
                    },
                    {
                        key: "scene2"
                    },
                    {
                        key: "scene1"
                    }
                ]
            }]
        }));
    });


    it("should write a new JSON file with duplicates removed", () => {
        const expectedOutput = JSON.parse(fs.readFileSync("./test/assets/test_clean_application.json"))
        buildNewJson();
        const output = JSON.parse(fs.readFileSync("./clean_application.json"));
        assert.deepEqual(output, expectedOutput);
    });

    afterAll(() => {
        fs.rm("./clean_application.json", (() => {}));
    });
});

//TODO the uncovered Lines are a repeation of a throwError() case, that is already checked in line 57. 