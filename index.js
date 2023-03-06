const fs = require("fs");

/**
 * Read the original JSON file given in the problem statement
 * @returns the JSON as an object
 */
const readMockJson = () => {
    try {
        const mockJson = JSON.parse(fs.readFileSync("./mock_application.json", (err, jsonString) => err ? err : jsonString));
        return mockJson;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/**
 * Compares every object inside of the array and removes duplicated elements
 * @param {*} array object or scene array inside versions array attribute
 * @returns the array with unique objects and key attributes
 */
const removeDuplicatedEntries = (array) => {
    try {
        return array.reduce((accumulator, current) => {
            if (!accumulator.find((item) => item.key === current.key)) {
                accumulator.push(current);
            }
            return accumulator;
        }, []);
    } catch (error) {
        throw new Error("error");
    }
}


/**
 * Call other methods to read the old file --> fix the duplicated entries problem inside objects and scenes --> create a new and clean JSON file in the root project
 * @returns new File
 */
const buildNewJson = () => {
    try {
        const oldJson = readMockJson();
        oldJson.versions.map((version) => {
            // remove duplicated objects and scenes, and fields and views (comparing their attribute "key")
            version.objects = removeDuplicatedEntries(version.objects);
            version.objects.forEach(object => object.fields = removeDuplicatedEntries(object.fields));
            version.scenes = removeDuplicatedEntries(version.scenes);
            version.scenes.forEach(scene => scene.views = removeDuplicatedEntries(scene.views));

        });
        const newJson = createCleanJson(oldJson);
        return newJson;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/**
 * Write a new file with the old JSON fixed
 * @param {*} oldJson old JSON object with the duplicated error alredy fixed
 * @returns new File
 */
const createCleanJson = (oldJson) => {
    try {
        const file = fs.writeFileSync("./clean_application.json", JSON.stringify(oldJson))
        return file;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

buildNewJson();

// for test purposes
module.exports = {
    readMockJson,
    createCleanJson,
    buildNewJson,
    removeDuplicatedEntries
}